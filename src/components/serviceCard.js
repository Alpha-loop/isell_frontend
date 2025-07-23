const ServiceCard = ({ icon, title, description, isPrimary = false }) => {
  const cardClasses = `p-6 rounded-lg shadow-md flex flex-col items-start ${
    isPrimary ? 'hover:bg-gradient-to-r from-green-400 to-green-600 text-white' : 'bg-white text-gray-800'
  } transform transition duration-300 hover:scale-105`;

  return (
    <div className={cardClasses}>
      <div className={`rounded-full p-3 mb-4 ${isPrimary ? 'bg-white text-green-600' : 'bg-green-100 text-green-600'}`}>
        {/* Placeholder for icon - replace with actual SVG or image */}
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className={`text-sm ${!isPrimary ? 'hover:text-white' : 'text-gray-600'}`}>{description}</p>
    </div>
  );
};

export default ServiceCard;