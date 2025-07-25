type Params =  {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({params}: Params) {
  const { id } = await params
  return {
    title: `ブログ記事ID：${id}です`,
    // description: `ブログ記事${id}の詳細が表示されます`,
  }
}
export default async function page({params} : Params) {
  // console.log(params)
  const { id } = await params
  return (
      <div>
          ブログID : { id }
      </div>
  )
}
