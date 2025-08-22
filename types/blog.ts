export interface BlogPost{
    id: string,
    slug: string,
    status: 'published' | 'draft',
    title: string,
    content: string,
    author: string,
    publishedDate: string,
    category: string,
    seoTitle?: string,
    metaDescription?: string,
    keywords?:string,
    heroImage?: string,
    heroImageAlt?: string

}

