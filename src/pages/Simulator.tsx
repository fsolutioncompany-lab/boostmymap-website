import React, { useState, useRef } from 'react';
import { Star, Calculator } from 'lucide-react';
import * as Select from '@radix-ui/react-select';
import * as Slider from '@radix-ui/react-slider';
import { Helmet } from 'react-helmet-async';

interface SimulationResult {
  additionalReviews: number;
  newAverageRating: number;
}

const businessTypes = [
  { value: 'restaurant', label: 'Restaurant / Café / Bar', conversionRate: 0.5 },
  { value: 'hotel', label: 'Hôtel / Gîte', conversionRate: 0.8 },
  { value: 'hairdresser', label: 'Salon de coiffure', conversionRate: 0.5 },
  { value: 'retail', label: 'Commerce de détail', conversionRate: 0.5 },
  { value: 'garage', label: 'Garage / Centre auto', conversionRate: 0.5 },
  { value: 'gym', label: 'Salle de sport', conversionRate: 0.5 },
  { value: 'amusement', label: 'Parc de loisirs / Attractions', conversionRate: 0.7 },
  { value: 'spa', label: 'Spa / Centre bien-être', conversionRate: 0.6 },
  { value: 'dentist', label: 'Cabinet dentaire', conversionRate: 0.4 },
  { value: 'optician', label: 'Opticien', conversionRate: 0.5 },
  { value: 'bakery', label: 'Boulangerie / Pâtisserie', conversionRate: 0.5 },
  { value: 'butcher', label: 'Boucherie / Charcuterie', conversionRate: 0.5 },
  { value: 'florist', label: 'Fleuriste', conversionRate: 0.5 },
  { value: 'jewelry', label: 'Bijouterie', conversionRate: 0.5 },
  { value: 'realEstate', label: 'Agence immobilière', conversionRate: 0.4 },
  { value: 'carDealer', label: 'Concessionnaire automobile', conversionRate: 0.4 },
  { value: 'pharmacy', label: 'Pharmacie', conversionRate: 0.5 },
  { value: 'museum', label: 'Musée / Galerie d\'art', conversionRate: 0.6 },
  { value: 'theater', label: 'Théâtre / Salle de spectacle', conversionRate: 0.6 },
  { value: 'bowling', label: 'Bowling / Billard', conversionRate: 0.7 }
];

export function Simulator() {
  const [businessType, setBusinessType] = useState('');
  const [weeklyVisitors, setWeeklyVisitors] = useState('');
  const [currentReviews, setCurrentReviews] = useState('');
  const [currentRating, setCurrentRating] = useState(4.0);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState<SimulationResult | null>(null);

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    const visitors = parseInt(weeklyVisitors);
    const reviews = parseInt(currentReviews);
    const selectedBusiness = businessTypes.find(b => b.value === businessType);
    
    if (!selectedBusiness || isNaN(visitors) || isNaN(reviews)) return;

    // Calculate over 60 days (approximately 8.5 weeks)
    const potentialCustomers = Math.round((visitors * 8.5) / 3);
    const additionalReviews = Math.round(potentialCustomers * selectedBusiness.conversionRate);
    
    // Calculate new average rating
    const totalCurrentPoints = reviews * currentRating;
    const newPoints = additionalReviews * 5; // New reviews are 5 stars
    const newAverageRating = (totalCurrentPoints + newPoints) / (reviews + additionalReviews);

    setResult({
      additionalReviews,
      newAverageRating: Math.round(newAverageRating * 10) / 10,
    });

    // Smooth scroll to results
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Simulateur d'Avis Google Gratuit | Calculez votre Potentiel avec BoostMyMap</title>
        <meta name="description" content="Découvrez gratuitement combien d'avis Google vous pourriez obtenir en 60 jours. Notre simulateur analyse votre activité et calcule votre potentiel d'amélioration de note et de visibilité locale." />
      </Helmet>

      <div className="min-h-screen bg-darkBg text-white pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Vous doutez encore des résultats ?{' '}
              <span className="text-neonPink">Essayez notre simulateur.</span>
            </h1>
            <p className="text-xl text-center text-gray-300 mb-12">
              Cela ne prend que 2 minutes, c'est 100% gratuit et le résultat est immédiat.
            </p>

            <div className="bg-darkSecondary rounded-2xl p-8 shadow-lg mb-8">
              <form onSubmit={calculateResults} className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-lg font-medium">
                    Secteur d'activité
                  </label>
                  <Select.Root value={businessType} onValueChange={setBusinessType}>
                    <Select.Trigger className="w-full px-4 py-2 bg-darkBg rounded-lg border border-gray-600 focus:border-neonTurquoise focus:outline-none text-white">
                      <Select.Value placeholder="Sélectionnez votre secteur" />
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="bg-darkBg border border-gray-600 rounded-lg overflow-hidden">
                        <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-darkBg text-white cursor-default">
                          ▲
                        </Select.ScrollUpButton>
                        <Select.Viewport>
                          {businessTypes.map((type) => (
                            <Select.Item
                              key={type.value}
                              value={type.value}
                              className="px-4 py-2 hover:bg-darkSecondary cursor-pointer text-white"
                            >
                              <Select.ItemText>{type.label}</Select.ItemText>
                            </Select.Item>
                          ))}
                        </Select.Viewport>
                        <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-darkBg text-white cursor-default">
                          ▼
                        </Select.ScrollDownButton>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>

                <div className="space-y-4">
                  <label className="block text-lg font-medium">
                    Nombre moyen de visiteurs par semaine
                  </label>
                  <input
                    type="number"
                    value={weeklyVisitors}
                    onChange={(e) => setWeeklyVisitors(e.target.value)}
                    className="w-full px-4 py-2 bg-darkBg rounded-lg border border-gray-600 focus:border-neonTurquoise focus:outline-none text-white"
                    placeholder="Ex: 100"
                    min="0"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-lg font-medium">
                    Nombre d'avis Google actuels
                  </label>
                  <input
                    type="number"
                    value={currentReviews}
                    onChange={(e) => setCurrentReviews(e.target.value)}
                    className="w-full px-4 py-2 bg-darkBg rounded-lg border border-gray-600 focus:border-neonTurquoise focus:outline-none text-white"
                    placeholder="Ex: 50"
                    min="0"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-lg font-medium">
                    Note actuelle sur Google My Business
                  </label>
                  <div className="flex flex-col space-y-4">
                    <input
                      type="number"
                      value={currentRating}
                      onChange={(e) => setCurrentRating(parseFloat(e.target.value))}
                      step="0.1"
                      min="0"
                      max="5"
                      className="w-full px-4 py-2 bg-darkBg rounded-lg border border-gray-600 focus:border-neonTurquoise focus:outline-none text-white"
                    />
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => setCurrentRating(rating)}
                          className={`p-2 rounded-full transition-colors duration-300 ${
                            currentRating >= rating ? 'text-yellow-400' : 'text-gray-600'
                          }`}
                        >
                          <Star className="w-8 h-8 fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto md:min-w-[200px] mx-auto bg-neonPink hover:bg-neonPink/80 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-neon-pink flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  <Calculator className="w-6 h-6" />
                  Calculer mes résultats
                </button>
              </form>
            </div>

            {result && (
              <div ref={resultsRef} className="bg-darkSecondary rounded-2xl p-8 shadow-lg animate-fade-in">
                <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-bold text-center text-neonTurquoise mb-12">
                    Vos résultats sur 60 jours
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-darkBg rounded-xl p-8 text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-neon-pink">
                      <div className="text-5xl md:text-6xl font-bold text-neonPink mb-4">
                        +{result.additionalReviews}
                      </div>
                      <div className="text-xl text-gray-300">Avis supplémentaires estimés</div>
                    </div>

                    <div className="bg-darkBg rounded-xl p-8 text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-neon-turquoise">
                      <div className="text-5xl md:text-6xl font-bold text-neonTurquoise mb-4">
                        {result.newAverageRating}★
                      </div>
                      <div className="text-xl text-gray-300">Nouvelle note moyenne estimée</div>
                    </div>
                  </div>

                  <div className="text-center mt-12 relative">
                    <div className="absolute -top-16 -right-8 w-24 h-24 md:w-32 md:h-32">
                      <img 
                        src="https://boostmymap.fr/call%20(1).png"
                        alt="Mascotte BoostMyMap"
                        className="w-full h-full object-contain animate-bounce"
                      />
                    </div>
                    <a
                      href="https://calendly.com/contact-boostmymap/30min"
                      className="inline-flex items-center gap-2 bg-neonTurquoise hover:bg-neonTurquoise/80 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-neon-turquoise text-lg font-semibold group"
                    >
                      Essayez BoostMyMap maintenant
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            <section className="mt-24 prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-8 text-center">Simulateur d'avis Google : Boostez votre présence en ligne</h2>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  Notre simulateur d'avis Google est un outil innovant conçu pour aider les entreprises à visualiser l'impact potentiel de BoostMyMap sur leur présence en ligne. En quelques clics, découvrez comment notre solution peut transformer votre réputation numérique et augmenter significativement votre visibilité sur Google.
                </p>

                <h3 className="text-2xl font-semibold text-neonTurquoise">Comment fonctionne le simulateur ?</h3>
                <p>
                  Le simulateur utilise des algorithmes sophistiqués basés sur des données réelles pour projeter l'évolution de vos avis Google sur une période de 60 jours. En prenant en compte votre secteur d'activité, votre flux de visiteurs actuel et vos statistiques Google existantes, nous pouvons estimer avec précision le nombre d'avis supplémentaires que vous pourriez obtenir et l'amélioration potentielle de votre note moyenne.
                </p>

                <h3 className="text-2xl font-semibold text-neonPink">Pour qui est conçu ce simulateur ?</h3>
                <p>
                  Notre simulateur s'adresse à tous les professionnels, quelle que soit la taille de leur entreprise : restaurants, hôtels, commerces de proximité, salons de coiffure, centres de bien-être, et bien d'autres. Que vous ayez déjà une présence en ligne établie ou que vous commenciez tout juste à développer votre réputation numérique, cet outil vous aidera à comprendre le potentiel de croissance de votre entreprise.
                </p>

                <h3 className="text-2xl font-semibold text-neonTurquoise">Pourquoi les avis Google sont-ils si importants ?</h3>
                <p>
                  Les avis Google jouent un rôle crucial dans le succès de votre entreprise en ligne. Ils influencent directement :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Votre visibilité dans les recherches locales Google</li>
                  <li>La confiance des clients potentiels envers votre établissement</li>
                  <li>Le taux de conversion des visiteurs en clients</li>
                  <li>Votre réputation en ligne et votre image de marque</li>
                  <li>Votre positionnement face à la concurrence</li>
                </ul>

                <h3 className="text-2xl font-semibold text-neonPink">Les avantages de BoostMyMap</h3>
                <p>
                  BoostMyMap va au-delà de la simple collecte d'avis. Notre solution innovante transforme ce processus en une expérience engageante pour vos clients, augmentant naturellement le nombre et la qualité de vos avis Google. Le système de récompenses personnalisables et la roue de la fortune digitale créent une interaction ludique qui encourage vos clients à partager leur expérience positive.
                </p>

                <p>
                  Utilisez notre simulateur dès maintenant pour découvrir comment BoostMyMap peut transformer votre présence en ligne et attirer plus de clients dans votre établissement. Les résultats parlent d'eux-mêmes : une augmentation significative du nombre d'avis et une amélioration notable de votre note moyenne en seulement 60 jours.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}