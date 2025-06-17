
const TrustedBySection = () => {
  const institutions = [
    "Stanford", "Yale", "ETH Zurich", "MIT", "Max Planck Institute", "UC Berkeley"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by scientists at leading institutions</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {institutions.map((institution, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">{institution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
