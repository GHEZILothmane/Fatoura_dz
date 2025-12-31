import { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Est-ce que Fatoura est gratuit ?',
      answer: 'Oui ! Nous offrons un plan gratuit avec 50 factures par mois et 10 clients. Parfait pour démarrer. Vous pouvez passer à un plan payant à tout moment pour débloquer plus de fonctionnalités.',
    },
    {
      question: 'Comment fonctionne la gestion de stock automatique ?',
      answer: 'Lorsque vous créez un bon de commande et le convertissez en stock, les produits sont automatiquement ajoutés à votre inventaire. Quand une facture est payée, le stock est automatiquement déduit. Plus besoin de manipulation manuelle !',
    },
    {
      question: 'Puis-je utiliser Fatoura hors ligne ?',
      answer: 'Oui ! Notre application desktop fonctionne hors ligne. Vos données sont synchronisées automatiquement dès que vous êtes connecté à Internet.',
    },
    {
      question: 'Comment exporter mes données pour mon comptable ?',
      answer: 'Allez dans Rapports > Export comptable, sélectionnez la période souhaitée et exportez en Excel ou PDF. Toutes vos factures, dépenses et paiements sont inclus.',
    },
    {
      question: 'Mes données sont-elles sécurisées ?',
      answer: 'Absolument. Nous utilisons un chiffrement SSL 256 bits, des sauvegardes quotidiennes et nos serveurs sont hébergés dans des datacenters certifiés. Vos données vous appartiennent.',
    },
    {
      question: 'Puis-je annuler mon abonnement à tout moment ?',
      answer: 'Oui, vous pouvez annuler votre abonnement à tout moment depuis votre espace client. Aucun engagement, aucune pénalité.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur Fatoura
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
