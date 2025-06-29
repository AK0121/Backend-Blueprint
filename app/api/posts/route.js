import { getPosts } from "@/db/posts";
 
export async function GET() {
  return Response.json(getPosts());
}

