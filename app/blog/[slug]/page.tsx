'use client'
import { BlogPost } from "@/types/blog"
import { error } from "console"
import { useEffect, useState } from "react"

export default function EachBlog({ params }: { params: { slug: string } }){
    const [post, setPost] = useState<BlogPost>({
        id: '',
        slug: '',
        status: 'draft',
        title: '',
        content: '',
        author: '',
        publishedDate: '',
        category: '',
        seoTitle: '',
        metaDescription: '',
        keywords:'',
        heroImage: '',
        heroImageAlt: ''
    })

    const [error, setError] = useState(false)

    useEffect(() => {
        async function getPost() {
            const response = await fetch('http://localhost:3000/api/posts')
            const data = await response.json()

            const foundPost = data.find((blog: BlogPost) => blog.slug === params.slug)

            if(foundPost){
            setPost(foundPost)
            }else{
                setError(true)
            }
        }

        getPost()

    }, [])

    return (
        <div className="bg-gray-50 w-full h-screen">
        <div className="max-w-4xl mx-auto p-6">
        {error ? (
            <div className="text-center py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
            </div>
        ) : (
            <article className="prose prose-lg max-w-none">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
                    <div className="flex items-center text-gray-600 mb-6">
                        <span>By {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span className="bg-gray-100 px-3 py-1 rounded text-sm">{post.category}</span>
                    </div>
                </header>
                
                <div className="text-gray-800 leading-relaxed whitespace-pre-line">
                    {post.content}
                </div>
            </article>
        )}
    </div>
    </div>
    )
}