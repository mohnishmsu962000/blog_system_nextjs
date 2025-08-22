import { samplePosts } from "../../../../data/blogPosts";

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url)
   const query = searchParams.get('q')

   if (!query) {
       return Response.json([])
   }

   const searchedPost = samplePosts.filter((v) => 
       v.title.toLowerCase().includes(query.toLowerCase())
   )
   
   return Response.json(searchedPost)
}