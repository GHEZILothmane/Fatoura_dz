import { Link } from 'react-router-dom';

export const Pricing = () => {
  const plans = [
    {
      name: 'Gratuit',
      price: '0',
      description: 'Pour démarrer',
      features: [
        '50 factures/mois',
        '10 clients',
        'Rapports basiques',
        'Support email',
      ],
      cta: 'Commencer gratuitement',
      link: '/register',
      popular: false,
    },
    {
      name: 'Pro',
      price: '199',
      description: 'Pour les PME',
      features: [
        'Factures illimitées',
        'Clients illimités',
        'Gestion de stock',
        'Rapports avancés',
        'Export comptable',
        'Support prioritaire',
        'Application desktop',
      ],
      cta: 'Essai gratuit 14 jours',
      link: '/register',
      popular: true,
    },
    {
      name: 'Entreprise',
      price: '499',
      description: 'Pour les grandes équipes',
      features: [
        'Tout de Pro',
        'Multi-utilisateurs',
        'API personnalisée',
        'Formation dédiée',
        'Support 24/7',
        'SLA garanti',
      ],
      cta: 'Contacter les ventes',
      link: '#contact',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tarifs simples et transparents
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins. Changez à tout moment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-500 bg-white shadow-xl scale-105'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg text-white text-sm font-medium rounded-full">
                  Plus populaire
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-2">DH/mois</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.link.startsWith('/') ? (
                <Link
                  to={plan.link}
                  className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all ${
                    plan.popular
                      ? 'gradient-bg text-white hover:opacity-90'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              ) : (
                <a
                  href={plan.link}
                  className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all ${
                    plan.popular
                      ? 'gradient-bg text-white hover:opacity-90'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
