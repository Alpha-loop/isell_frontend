const ShipmentTrackingModal = ({ isOpen, onClose, shipment }) => {
  if (!isOpen || !shipment) return null;

  // Determine active step for the progress bar
  const getStepClass = (stepName) => {
    const status = shipment.status.toLowerCase();
    if (status === 'paid' && stepName === 'paid') return 'bg-green-500';
    if (status === 'shipped' && (stepName === 'paid' || stepName === 'shipped')) return 'bg-green-500';
    if (status === 'delivered' && (stepName === 'paid' || stepName === 'shipped' || stepName === 'delivered')) return 'bg-green-500';
    return 'bg-gray-300';
  };

  const getLineClass = (stepName) => {
    const status = shipment.status.toLowerCase();
    if (status === 'shipped' && stepName === 'paid') return 'bg-green-500';
    if (status === 'delivered' && (stepName === 'paid' || stepName === 'shipped')) return 'bg-green-500';
    return 'bg-gray-300';
  };


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Header */}
        <div className="bg-green-500 text-white p-4 rounded-t-lg -mx-6 -mt-6 mb-6 flex justify-between items-center">
          <div>
            <div className="text-sm font-semibold">Track ID</div>
            <div className="text-xl font-bold">{shipment.trackid}</div>
          </div>
          <div>
            <div className="text-sm font-semibold">Product Name</div>
            <div className="text-xl font-bold">{shipment.productname}</div>
          </div>
          <div>
            <div className="text-sm font-semibold">Expected Date</div>
            <div className="text-xl font-bold">{shipment.expecteddate}</div>
          </div>
        </div>

        {/* Tracking Details */}
        <div className="mb-6">
          <div className="flex justify-between text-gray-700 text-sm mb-2">
            <span>{shipment.source}</span>
            <span>{shipment.destination}</span>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full ${getStepClass('paid')}`}></div>
              <span className="text-xs mt-1">Paid</span>
            </div>
            <div className={`flex-1 h-0.5 ${getLineClass('paid')}`}></div> {/* Line */}
            <div className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full ${getStepClass('shipped')}`}></div>
              <span className="text-xs mt-1">Shipped</span>
            </div>
            <div className={`flex-1 h-0.5 ${getLineClass('shipped')}`}></div> {/* Line */}
            <div className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full ${getStepClass('delivered')}`}></div>
              <span className="text-xs mt-1">Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentTrackingModal;