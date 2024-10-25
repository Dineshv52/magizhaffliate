// File: pages/index.tsx

import Head from 'next/head'
import Product from '../components/Product'

export default function Home() {
  // Product data array - you can move this to a separate file later
  const products = [
    {
      image: '/images/Gamingheadset.png',
      title: 'Bolt Airbuds',
      description: 'Gaming low lattency airpods',
      buyLink: 'https://amzn.in/d/bLUHiBC'
    },
    // Add your other products here...
  ]

  return (
    <div>
      {/* Head section for metadata */}
      <Head>
        <title>MagizhVeeran Suggestions</title>
        <meta name="description" content="Product recommendations and deals" />
        <link rel="icon" href="/favicon.ico" />
        {/* Font Awesome for icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </Head>

      {/* Header section */}
      <header className="bg-gray-900 text-white py-12 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">MagizhVeeran Suggestions</h1>
          
          {/* Social links */}
          <div className="mt-6 space-x-4">
            <Link 
              href="https://www.instagram.com/magizhveeran" 
              target="_blank"
              className="text-xl hover:text-gray-300"
            >
              <i className="fab fa-instagram"></i> Instagram Channel
            </Link>
            {/* Add other social links */}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>

        {/* Affiliate disclaimer */}
        <div className="mt-12 text-center text-gray-600">
          <p>
            The products listed on this page contain affiliate links. 
            When you purchase any product, our Team may earn a commission. 
            It won't cost you extra.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        {/* Footer content */}
      </footer>
    </div>
  )
}