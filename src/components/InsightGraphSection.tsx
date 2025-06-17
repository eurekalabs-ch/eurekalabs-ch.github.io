
const InsightGraphSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-eureka-blue rounded-full animate-pulse-slow"></div>
                  <div className="h-2 bg-eureka-blue/20 rounded flex-1"></div>
                  <div className="w-4 h-4 bg-eureka-purple rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-eureka-cyan rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                  <div className="h-2 bg-eureka-cyan/20 rounded flex-1"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
                  <div className="h-2 bg-orange-500/20 rounded flex-1"></div>
                  <div className="w-4 h-4 bg-eureka-blue rounded-full animate-pulse-slow" style={{animationDelay: '2.5s'}}></div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-sm text-muted-foreground">Insight Graph Visualization</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Personal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eureka-blue to-eureka-purple">
                Scientific Knowledge Graph
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              EurekaLabs builds and updates a scientific graph tailored to your research style, areas, and goals. Like a second brain for your lab.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-eureka-blue rounded-full mt-2"></div>
                <p className="text-muted-foreground">Connects your research interests with relevant literature</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-eureka-purple rounded-full mt-2"></div>
                <p className="text-muted-foreground">Identifies knowledge gaps and opportunities</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-eureka-cyan rounded-full mt-2"></div>
                <p className="text-muted-foreground">Learns from your citation patterns and preferences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightGraphSection;
