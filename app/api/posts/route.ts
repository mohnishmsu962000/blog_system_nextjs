import { samplePosts } from "../../../data/blogPosts";

export async function GET() {
  return Response.json(samplePosts)
}
