'use client'
import { useEffect, useState } from "react"
import { BlogPost } from "../../types/blog"
import Link from "next/link"

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
        <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 ">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">My Blog</h1>
            
            <div className="space-y-8">
                {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    <div className="mb-4">
                    <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                        {post.title}
                    </h2>
                    </Link>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                        <span>By {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">{post.category}</span>
                    </div>
                    </div>

                     <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags && post.tags.map((tag) => (
                            <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            #{tag}
                            </span>
                        ))}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed line-clamp-3">
                    {post.content}
                    </p>
                    
                    <div className="mt-4">
                    <Link href={`/blog/${post.slug}`}>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        Read more →
                    </button>
                    </Link>
                    </div>
                </article>
                ))}
            </div>
        </div>
        </div>
    )
}