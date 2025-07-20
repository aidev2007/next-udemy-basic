import { PrismaClient } from '@/prisma/client'

export async function getContents(){
    return await prisma.contact.findMany({
        select:{
            id: true,
            name: true,
            email: true
        },
        orderNy:{
            createdAt: 'desc'
        }
    })
}

export async function getContent(id: string){
    return await prisma.contact.findFirst({
        select:{ name: true, email: true }
    })
}
