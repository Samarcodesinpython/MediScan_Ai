import { Link } from "wouter";

export default function FeaturesGrid() {
  const features = [
    {
      href: "/disease-prediction",
      icon: "fas fa-stethoscope",
      title: "Disease Prediction",
      description: "AI-powered disease prediction using RandomForest Classifier based on symptoms",
      color: "primary",
      cta: "Start Diagnosis"
    },
    {
      href: "/drug-recommendation",
      icon: "fas fa-pills",
      title: "Drug Finder",
      description: "NLP & cosine similarity for accurate alternative medicine matching",
      color: "accent",
      cta: "Find Alternatives"
    },
    {
      href: "/heart-assessment",
      icon: "fas fa-heart",
      title: "Heart Risk",
      description: "ML-based heart disease risk assessment using lifestyle factors",
      color: "destructive",
      cta: "Assess Risk"
    },
    {
      href: "/medibot",
      icon: "fas fa-robot",
      title: "MediBot",
      description: "AI health assistant with RAG and Mistral-7B for medical queries",
      color: "green-500",
      cta: "Chat Now"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Comprehensive AI Healthcare Solutions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform combines cutting-edge AI technologies to deliver personalized healthcare intelligence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link key={index} href={feature.href}>
              <div 
                className="bg-card rounded-xl p-6 border border-border card-hover cursor-pointer"
                data-testid={`card-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`w-12 h-12 bg-${feature.color}/10 rounded-lg flex items-center justify-center mb-4`}>
                  <i className={`${feature.icon} text-${feature.color} text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {feature.description}
                </p>
                <div className={`flex items-center text-${feature.color} text-sm font-medium`}>
                  <span>{feature.cta}</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
