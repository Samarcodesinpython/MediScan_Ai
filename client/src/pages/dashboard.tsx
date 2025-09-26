import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturesGrid from "@/components/features-grid";
import Footer from "@/components/footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturesGrid />
      
      {/* Technology Stack Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Powered by Advanced AI Technologies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform leverages cutting-edge machine learning and natural language processing technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-sitemap text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">RandomForest</h3>
              <p className="text-sm text-muted-foreground">ML classifier for accurate disease prediction</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-language text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">NLP & Cosine Similarity</h3>
              <p className="text-sm text-muted-foreground">Advanced drug matching algorithms</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-green-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">LightGBM & EasyEnsemble</h3>
              <p className="text-sm text-muted-foreground">Heart disease risk assessment models</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-robot text-red-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Mistral-7B + RAG</h3>
              <p className="text-sm text-muted-foreground">AI chatbot with vector database</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
