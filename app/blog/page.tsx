'use client'
import { useEffect, useState } from "react"
import { BlogPost } from "../../types/blog"

export default function BlogPage(){

    const [posts, setPosts] = useState<BlogPost[]>([])

    useEffect(() => {
         async function getPosts() {

        const response = await fetch('http://localhost:3000/api/posts')
        const data = await response.json()

        setPosts(data)
    }

    getPosts()
    
    }, [])

   

    return (
        <div>
            <div>{posts.map((post) => (
                <div key={post.id}>
                    <h1>
                        {post.title}
                    </h1>
                    <p>
                        {post.content}
                    </p>
                </div>
            ))}</div>
            
        </div>
    )
}