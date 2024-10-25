// File: components/Product.tsx

import Image from 'next/image'
import Link from 'next/link'

// Define the type of props our component will receive
interface ProductProps {
  image: string;        // Path to product image
  title: string;        // Product title
  description: string;  // Product description
  buyLink: string;      // Amazon affiliate link
}

export default function Product({ image, title, description, buyLink }: ProductProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
      {/* Image container */}
      <div className="relative w-full h-[400px]">
        <Image
          src={image}
          alt={title}
          fill               // Makes image fill the container
          className="object-contain"  // Maintains aspect ratio
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw"      // Helps browser with image sizing
        />
      </div>
      
      {/* Product information */}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      
      {/* Buy button */}
      <Link 
        href={buyLink} 
        target="_blank"     // Opens in new tab
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded mt-4 
                   hover:bg-blue-700 transition-colors"
      >
        Buy link
      </Link>
    </div>
  )
}