import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="gradient-bg py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Healthcare Intelligence Network
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Leveraging Machine Learning and NLP to provide accurate disease predictions, 
            personalized medical recommendations, and AI-assisted healthcare solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/disease-prediction">
              <button 
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                data-testid="button-start-assessment"
              >
                Start Health Assessment
              </button>
            </Link>
            <Link href="/medibot">
              <button 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                data-testid="button-learn-more"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
