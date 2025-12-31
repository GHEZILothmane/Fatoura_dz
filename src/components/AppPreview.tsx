export const AppPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2">
        <div className="w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="w-8 h-8 bg-yellow-500 rounded-full mt-2 ml-4"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main Laptop Mockup */}
          <div className="relative mx-auto max-w-5xl">
            {/* Laptop Frame */}
            <div className="bg-gray-800 rounded-t-xl p-2">
              {/* Screen */}
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                {/* App Header */}
                <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-gray-400 text-sm">Fatoura</span>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className="w-48 bg-white border-r border-gray-200 p-4">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      <span className="text-sm text-gray-600">nexir</span>
                    </div>
                    
                    <nav className="space-y-1">
                      <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm font-medium">Factures</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span className="text-sm">Devis</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-sm">Achats</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">Dépenses</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span className="text-sm">Bons de commande</span>
                      </div>
                    </nav>
                  </div>
                  
                  {/* Main Content - Invoice */}
                  <div className="flex-1 p-6 bg-gray-50">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      {/* Invoice Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs">NEXATECH</span>
                          </div>
                          <div>
                            <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded">PAYÉE</span>
                          </div>
                        </div>
                        <div className="text-right text-sm">
                          <p className="font-semibold text-gray-900">SARL NEXATECH</p>
                          <p className="text-gray-500 text-xs">123 boulevard des lions,hasnaoui</p>
                          <p className="text-gray-500 text-xs">RC+ 0712312815</p>
                        </div>
                      </div>
                      
                      {/* Invoice Title */}
                      <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Facture</h3>
                      
                      {/* Invoice Details */}
                      <div className="flex justify-between mb-6">
                        <div className="text-sm">
                          <p className="text-gray-500">Destinataire</p>
                          <p className="font-medium">SARL tubex</p>
                          <p className="text-gray-500 text-xs">CI-0001</p>
                          <p className="text-gray-500 text-xs">123 boulevard des lions,hasnaoui</p>
                        </div>
                        <div className="text-sm text-right">
                          <div className="flex gap-8">
                            <div>
                              <p className="text-gray-500">Date</p>
                              <p className="font-medium">24 octobre 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Numéro</p>
                              <p className="font-medium">FAC2025/V 0001</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Invoice Table */}
                      <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                        <table className="w-full text-xs">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-3 py-2 text-left text-gray-600">Désignation</th>
                              <th className="px-3 py-2 text-center text-gray-600">Qté</th>
                              <th className="px-3 py-2 text-right text-gray-600">Prix Unit.</th>
                              <th className="px-3 py-2 text-right text-gray-600">TVA</th>
                              <th className="px-3 py-2 text-right text-gray-600">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-gray-100">
                              <td className="px-3 py-2">Vitamine C</td>
                              <td className="px-3 py-2 text-center">1000</td>
                              <td className="px-3 py-2 text-right">250.00</td>
                              <td className="px-3 py-2 text-right">19%</td>
                              <td className="px-3 py-2 text-right font-medium">250,000.00</td>
                            </tr>
                            <tr className="border-t border-gray-100">
                              <td className="px-3 py-2">Paracetamol 500mg</td>
                              <td className="px-3 py-2 text-center">2000</td>
                              <td className="px-3 py-2 text-right">45.00</td>
                              <td className="px-3 py-2 text-right">19%</td>
                              <td className="px-3 py-2 text-right font-medium">90,000.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      {/* Totals */}
                      <div className="flex justify-end">
                        <div className="text-xs space-y-1">
                          <div className="flex justify-between gap-8">
                            <span className="text-gray-500">Total HT</span>
                            <span className="font-medium">340,000.00 DZD</span>
                          </div>
                          <div className="flex justify-between gap-8">
                            <span className="text-gray-500">Total TVA</span>
                            <span className="font-medium">83,600.00 DZD</span>
                          </div>
                          <div className="flex justify-between gap-8 pt-1 border-t border-gray-200">
                            <span className="text-gray-700 font-medium">Total TTC</span>
                            <span className="font-bold text-blue-600">523,600.00 DZD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Laptop Base */}
            <div className="bg-gray-700 h-4 rounded-b-xl mx-16"></div>
            <div className="bg-gray-600 h-2 rounded-b-lg mx-32"></div>
          </div>
          
          {/* Floating Invoice Preview */}
          <div className="absolute -right-4 top-1/4 transform rotate-6 hidden lg:block">
            <div className="bg-white rounded-lg shadow-2xl p-4 w-48 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-[6px]">NEXATECH</span>
                </div>
                <span className="text-[8px] text-green-600 bg-green-100 px-1.5 py-0.5 rounded">PAYÉE</span>
              </div>
              <p className="text-xs font-semibold text-gray-800 mb-2">Facture</p>
              <div className="space-y-1">
                <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
                <div className="h-1.5 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="mt-3 pt-2 border-t border-gray-100">
                <p className="text-[8px] text-gray-500">Total TTC</p>
                <p className="text-xs font-bold text-blue-600">523,600.00 DZD</p>
              </div>
            </div>
          </div>
          
          {/* Decorative papers */}
          <div className="absolute -left-8 bottom-20 transform -rotate-12 hidden lg:block">
            <div className="w-20 h-24 bg-white rounded shadow-lg border border-gray-100 p-2">
              <div className="space-y-1">
                <div className="h-1 bg-gray-200 rounded w-full"></div>
                <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                <div className="h-1 bg-gray-200 rounded w-5/6"></div>
                <div className="h-1 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
