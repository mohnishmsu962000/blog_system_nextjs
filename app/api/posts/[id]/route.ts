import { use } from 'react'

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const updatedData = await request.json()
    
    console.log('API route called! Updating post', id, 'with', updatedData)
    
    return Response.json({ message: 'Post updated successfully' })
}