export const Features = () => {
  const features = [
    {
      icon: '🧾',
      title: 'Facturation professionnelle',
      description: 'Créez des factures élégantes en quelques clics. Personnalisez avec votre logo et envoyez directement par email.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: '📦',
      title: 'Gestion de stock automatique',
      description: 'Entrée et sortie automatique du stock. Convertissez vos bons de commande en inventaire en 1 clic.',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: '📊',
      title: 'Rapports de ventes',
      description: 'Suivez votre chiffre d\'affaires en temps réel. Identifiez vos meilleurs clients et produits.',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: '📤',
      title: 'Export comptable',
      description: 'Exportez vos données en Excel ou PDF pour votre comptable. Rapide, simple et fiable.',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: '🏷️',
      title: 'Suivi par lots',
      description: 'Gérez votre stock par lots avec référencement, quantités, prix unitaire et TVA.',
      color: 'bg-pink-50 text-pink-600',
    },
    {
      icon: '📱',
      title: 'Application Desktop',
      description: 'Travaillez hors ligne avec notre application desktop. Synchronisation automatique.',
      color: 'bg-indigo-50 text-indigo-600',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des outils puissants pour gérer votre entreprise efficacement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
