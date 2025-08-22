import Link from 'next/link'

export default function Footer() {
 return (
   <footer className="bg-gray-900 text-white">
     <div className="max-w-6xl mx-auto px-6 py-12">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
         <div className="md:col-span-1">
           <h3 className="text-xl font-bold mb-4">MyBlog</h3>
           <p className="text-gray-400 text-sm leading-relaxed">
             Sharing insights about web development, technology, and creative problem solving.
           </p>
         </div>
         
       
         <div>
           <h4 className="font-semibold mb-4">Quick Links</h4>
           <div className="space-y-2">
             <Link href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
               Home
             </Link>
             <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors text-sm">
               Blog
             </Link>
             <Link href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
               About
             </Link>
             <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
               Contact
             </Link>
           </div>
         </div>
         
        
         <div>
           <h4 className="font-semibold mb-4">Categories</h4>
           <div className="space-y-2">
             <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors text-sm">
               Web Development
             </Link>
             <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors text-sm">
               Programming
             </Link>
             <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors text-sm">
               CSS
             </Link>
             <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors text-sm">
               JavaScript
             </Link>
           </div>
         </div>
         
        
         <div>
           <h4 className="font-semibold mb-4">Connect</h4>
           <div className="space-y-2">
             <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
               GitHub
             </a>
             <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
               LinkedIn
             </a>
             <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
               Twitter
             </a>
             <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
               Email
             </a>
           </div>
         </div>
       </div>
       
      
       <div className="border-t border-gray-800 pt-8 mt-8">
         <div className="flex flex-col md:flex-row justify-between items-center">
           <p className="text-gray-400 text-sm">
             © 2024 MyBlog. All rights reserved.
           </p>
           <div className="flex space-x-6 mt-4 md:mt-0">
             <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
               Privacy Policy
             </Link>
             <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
               Terms of Service
             </Link>
           </div>
         </div>
       </div>
     </div>
   </footer>
 )
}