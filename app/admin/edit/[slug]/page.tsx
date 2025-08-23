'use client'
import { BlogPost } from "@/types/blog"
import { getRouteRegex } from "next/dist/shared/lib/router/utils/route-regex"
import Link from "next/link"
import { use, useEffect, useState } from "react"

export default function EachBlog({ params }: { params: Promise<{ slug: string }> }){
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
        heroImageAlt: '',
        tags: []
    })

    const [posts, setPosts] = useState<BlogPost[]>([])

    const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

    const [error, setError] = useState(false)

    const { slug } = use(params)

    const [isEditingTitle, setIsEditingTitle] = useState(false)

    const [editingTitle, setEditingTitle] = useState(post.title)

    useEffect(() => {
        async function getPost() {
            const response = await fetch('http://localhost:3000/api/posts')
            const data = await response.json()

            setPosts(data)

            const foundPost = data.find((blog: BlogPost) => blog.slug === slug)

            if(foundPost){
                setPost(foundPost)
            }else{
                setError(true)
            }
        }

        getPost()


    }, [])


    useEffect(() => setRelatedPosts(posts.filter(v => v.id !== post.id && (v.author === post.author || v.category === post.category || (v.tags && v.tags.some(tag => post.tags?.includes(tag))))))
    ,[post])

    const handleTitleEdit = () => {
        setEditingTitle(post.title)
        setIsEditingTitle(true)
    }

    const handleTitleSave = async () => {
        try {
            const response = await fetch(`/api/posts/${post.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: editingTitle })
            })
            
            if (response.ok) {
                setPost({...post, title: editingTitle})
                setIsEditingTitle(false)
                console.log('Title updated!')
            }
        } catch (error) {
            console.error('Failed to update title:', error)
        }
    }

    const handleTitleCancel = () => {
        setEditingTitle(post.title) 
        setIsEditingTitle(false)
    }

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
                     <div className="mb-4">
                        {isEditingTitle ? (
                            <div className="flex items-center gap-2">
                                <input 
                                    value={editingTitle}
                                    onChange={(e) => setEditingTitle(e.target.value)}
                                    className="text-4xl text-gray-700 font-bold border border-gray-300 rounded px-2 py-1 flex-1"
                                    autoFocus
                                    onKeyDown={(e) => e.key === 'Enter' && handleTitleSave()}
                                />
                                <button 
                                    onClick={handleTitleSave} 
                                    className="bg-green-200 text-green-800 px-3 py-1 rounded hover:bg-green-300"
                                >
                                    Save
                                </button>
                                <button 
                                    onClick={handleTitleCancel} 
                                    className="bg-red-200 text-red-800 px-3 py-1 rounded hover:bg-red-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <h1 
                                className="text-4xl font-bold text-gray-900 cursor-pointer hover:bg-gray-100 p-2 rounded hover:border hover:border-gray-600"
                                onClick={handleTitleEdit}
                            >
                                {post.title}
                            </h1>
                        )}
                    </div>
                    <div className="flex items-center text-gray-600 mb-6">
                        <span>By {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span className="bg-gray-100 px-3 py-1 rounded text-sm">{post.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags && post.tags.map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            #{tag}
                        </span>
                        ))}
                    </div>
                </header>
                
                <div className="text-gray-800 leading-relaxed whitespace-pre-line">
                    {post.content}
                </div>
                {relatedPosts.length > 0 && (
                    <section className="mt-12 border-t pt-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedPosts.map((relatedPost) => (
                            <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} 
                                className="block bg-white rounded-lg p-4 hover:bg-gray-100 transition-colors border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedPost.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">By {relatedPost.author}</p>
                            <div className="flex flex-wrap gap-1">
                                {relatedPost.tags?.slice(0, 3).map((tag) => (
                                <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                    #{tag}
                                </span>
                                ))}
                            </div>
                            </Link>
                        ))}
                        </div>
                    </section>
                )}
            </article>
        )}
    </div>
    </div>
    )
}