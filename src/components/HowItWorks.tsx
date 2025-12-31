export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Créez votre compte',
      description: 'Inscrivez-vous gratuitement en moins de 2 minutes. Aucune carte bancaire requise.',
      icon: '👤',
    },
    {
      number: '02',
      title: 'Configurez votre entreprise',
      description: 'Ajoutez votre logo, vos informations et personnalisez vos factures.',
      icon: '⚙️',
    },
    {
      number: '03',
      title: 'Ajoutez vos produits',
      description: 'Importez votre catalogue de produits et configurez le suivi de stock.',
      icon: '📦',
    },
    {
      number: '04',
      title: 'Facturez et gérez',
      description: 'Créez des factures, suivez les paiements et gérez votre stock automatiquement.',
      icon: '🚀',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Démarrez en quelques minutes avec notre processus simple
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent -translate-x-8"></div>
              )}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 gradient-bg rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-purple-600 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
