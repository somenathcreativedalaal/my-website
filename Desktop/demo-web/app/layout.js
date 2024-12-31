export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


// import './globals.css'

// import './css/style.css'
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         {/* Header */}
//         <header className="bg-gray-800 text-white">
//           <nav className="container mx-auto px-4 py-4">
//             <div className="flex justify-between items-center">
//               <div className="text-2xl font-bold">Somenath</div>
//               <ul className="flex space-x-6">
//                 <li><a href="/" className="hover:text-gray-300">Home</a></li>
//                 <li><a href="/about" className="hover:text-gray-300">about</a></li>
//                 <li><a href="/services" className="hover:text-gray-300">service</a></li>
//                 <li><a href="/contact" className="hover:text-gray-300">contact</a></li>
//               </ul>
//             </div>
//           </nav>
//         </header>

//         {/* Main Content */}
//         <main>
//           {children}
//         </main>

//         {/* Footer */}
//         <footer className="bg-gray-800 text-white py-8">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div>
//                 <h3 className="text-xl font-bold mb-4">Address</h3>
//                 <p>serampore hooghly</p>
//                 <p>phone: +880 1234-567890</p>
//                 <p>email : info@website.com</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold mb-4">Quick Link</h3>
//                 <ul className="space-y-2">
//                   <li><a href="/home" className="hover:text-gray-300">Home</a></li>
//                   <li><a href="/about" className="hover:text-gray-300">About</a></li>
//                   <li><a href="/services" className="hover:text-gray-300">Services</a></li>
//                    <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>

//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold mb-4">Social Media</h3>
//                 <div className="flex space-x-4">
//                   <a href="#" className="hover:text-gray-300">Facebook</a>
//                   <a href="#" className="hover:text-gray-300">Twitter</a>
//                   <a href="#" className="hover:text-gray-300">LinkedIn</a>
//                 </div>
//               </div>
//             </div>
//             <div className="text-center mt-8 pt-8 border-t border-gray-700">
//               <p>&copy; 2024 somenath</p>
//             </div>
//           </div>
//         </footer>
//       </body>
//     </html>
//   )
// }