import React, { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Company Product Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button onClick={() => handlePageChange('home')} className="text-lg hover:text-blue-500">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handlePageChange('products')} className="text-lg hover:text-blue-500">
                Products
              </button>
            </li>
            <li>
              <button onClick={() => handlePageChange('about')} className="text-lg hover:text-blue-500">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handlePageChange('contact')} className="text-lg hover:text-blue-500">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'products' && <ProductPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">Welcome to our website!</h1>
      <p className="text-lg text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  );
};

const ProductPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'This is product 1' },
    { id: 2, name: 'Product 2', description: 'This is product 2' },
    { id: 3, name: 'Product 3', description: 'This is product 3' },
  ]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">Our Products</h1>
      <ul className="flex flex-wrap justify-center">
        {products.map((product) => (
          <li key={product.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  );
};

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 xl:w-1/3 p-4">
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default App;
