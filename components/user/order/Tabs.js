

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: "allOrders", label: "All Orders" },
    { key: "shipped", label: "Shipped" },
    { key: "completed", label: "Completed" },
    { key: "cancelled", label: "Cancelled" },
  ];

  return (
    <div className="flex border-b border-gray-300 ml-10 min-w-[700px] max-w-[1000px]">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          className={`relative px-4 py-2 cursor-pointer ${
            activeTab === tab.key
              ? "text-blue-500 font-bold border-blue-500 border-b-2"
              : "text-black hover:text-blue-500 border-b-gray-600"
          }`}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;