import{ useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to your API)
    console.log(formData);
    // Optionally, reset the form after submission
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className="w-full p-3 border border-gray-300 rounded h-32"
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
