
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Service One',
    description: 'Short description of service one.',
    icon: '💼',
  },
  {
    title: 'Service Two',
    description: 'Short description of service two.',
    icon: '🚀',
  },
  {
    title: 'Service Three',
    description: 'Short description of service three.',
    icon: '📈',
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
