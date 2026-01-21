import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Organization</h1>
        <p className="text-xl mb-8">Your success, our commitment.</p>
        <Link 
          to="/about" 
          className="bg-white text-blue-500 py-2 px-4 rounded font-semibold hover:bg-gray-100"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Home;
