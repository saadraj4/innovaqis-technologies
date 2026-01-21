
const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          {/* Replace the image URL with your own */}
          <img 
            src="https://via.placeholder.com/500" 
            alt="About us" 
            className="rounded shadow-md" 
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            We are dedicated to providing high-quality services and ensuring client success. Our team of experts works relentlessly to bring innovative solutions tailored to your business needs.
          </p>
          <p>
            Our mission is to empower our clients through excellence and commitment, setting the benchmark in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
