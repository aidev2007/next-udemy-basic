'use server' 
import { redirect } from 'next/navigation' 
import { ContactSchema } from '@/validations/contact' 
import { prisma } from '@/lib/prisma'

// ActionStateの型定義
type ActionState = {
    success: boolean;
    errors: {
        name?: string[];
        email?: string[];
    };
    serverError?: string

}

export async function submitContactForm(
    prevState: ActionState,
    formData: FormData
): Promise<ActionState>
{ 
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    // バリデーション 
    const validationResult = ContactSchema.safeParse({ name, email }) 
    // バリデーションエラーの場合 
    if (!validationResult.success) { 
        // エラーメッセージの取得 flattenでエラーを見やすく加工 
        const errors = validationResult.error.flatten().fieldErrors 
        console.log('サーバー側でエラー', errors) 
        return {
            success: false,
            errors: {
                name: errors.name || [],
                email: errors.email || []
            }
        } 
    }
    
    // DB登録 
    const existingRecord = await prisma.contact.findUnique({ 
        where: { email: email }
    })

    if(existingRecord){
        return {
            success: false,
            errors: {
                name: [],
                email: ['このメールアドレスは既に登録されています']
            }
        } 
    }
    
    await prisma.contact.create({
        data: { name, email }
    })

    console.log('送信されたデータ:', {name, email})     
    redirect('/contacts/complete') 

}