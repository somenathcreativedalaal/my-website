import Image from 'next/image'
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            স্বাগতম আমাদের ওয়েবসাইটে
          </h1>
          <p className="hero-description">
            আমরা আপনার সেবায় সর্বদা প্রস্তুত
          </p>
          <button className="hero-button">
            আরও জানুন
          </button>
        </div>
      </div>
    
  

     {/* Features Section */}
      <div className="py-16 section-two">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">our services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3>Somenath</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3>Somenath</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3>Somenath</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16 contact-us">
        <div className="container mx-auto px-4">
          <h2>get in touct</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block mb-2">name</label>
                <input type="text" className="w-full p-3 border rounded" />
              </div>
              <div>
                <label className="block mb-2">email</label>
                <input type="email" className="w-full p-3 border rounded" />
              </div>
              <div>
                <label className="block mb-2">maseges</label>
                <textarea className="w-full p-3 border rounded h-32"></textarea>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}