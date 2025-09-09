import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Careers</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are always looking for motivated scientists and engineers as collaborators and potential future colleagues. Get in touch.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;


