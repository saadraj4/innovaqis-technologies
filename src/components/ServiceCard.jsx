/* eslint-disable react/prop-types */ 
const ServiceCard = ({ title, description, icon }) => {
    return (
      <div className="bg-white border border-blue-500 rounded-lg p-6 shadow-md text-center">
        <div className="text-blue-500 text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;
  