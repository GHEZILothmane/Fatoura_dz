import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
            Digitalisez votre entreprise.
          </h1>
          
          {/* Gradient Subheading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic mb-8 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Choisissez l'élite de facturation
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Une facture en trois clics, de la rapidité, de la simplicité et de l'organisation.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            La facturation n'a jamais été aussi simple !
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <Link 
              to="/register" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-blue-500/30 text-lg"
            >
              Télécharger
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
          </div>

          {/* Decorative Papers/Documents */}
          <div className="relative h-32 flex justify-center items-end">
            {/* Left paper */}
            <div className="absolute left-1/4 -translate-x-1/2 transform rotate-[-15deg]">
              <div className="w-16 h-20 bg-white rounded shadow-lg border border-gray-100 flex items-center justify-center">
                <div className="space-y-1">
                  <div className="w-10 h-1 bg-gray-200 rounded"></div>
                  <div className="w-8 h-1 bg-gray-200 rounded"></div>
                  <div className="w-10 h-1 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Center paper */}
            <div className="transform rotate-[5deg] z-10">
              <div className="w-20 h-24 bg-white rounded shadow-xl border border-gray-100 flex items-center justify-center">
                <div className="space-y-1">
                  <div className="w-12 h-1 bg-blue-200 rounded"></div>
                  <div className="w-10 h-1 bg-gray-200 rounded"></div>
                  <div className="w-12 h-1 bg-gray-200 rounded"></div>
                  <div className="w-8 h-1 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Right paper */}
            <div className="absolute right-1/4 translate-x-1/2 transform rotate-[20deg]">
              <div className="w-16 h-20 bg-white rounded shadow-lg border border-gray-100 flex items-center justify-center">
                <div className="space-y-1">
                  <div className="w-10 h-1 bg-gray-200 rounded"></div>
                  <div className="w-8 h-1 bg-gray-200 rounded"></div>
                  <div className="w-10 h-1 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
