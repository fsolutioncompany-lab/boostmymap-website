import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Gift, QrCode, ArrowRight, Clock, Users, TrendingUp, Target, MessageSquare, ChevronDown, ChevronUp, Calculator, Calendar, PhoneCall, Video, Clock3, Utensils, Scissors, Store, Stethoscope, Dumbbell, Gamepad } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function Home() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleSimulatorClick = () => {
    navigate('/simulateur');
    window.scrollTo(0, 0);
  };

  const handleBlogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo(0, 0);
  };

  const advantages = [
    {
      icon: Gift,
      title: "Des Cadeaux Personnalisables",
      description: "À travers une interface conviviale et facile à utiliser, vous aurez la possibilité de configurer les récompenses ainsi que les conditions associées.",
      color: "neonPink"
    },
    {
      icon: MessageSquare,
      title: "Augmentez votre nombre d'avis sur Google",
      description: "Renforcez votre image de marque pour attirer et inciter vos prospects à franchir les portes de votre établissement.",
      color: "neonTurquoise"
    },
    {
      icon: TrendingUp,
      title: "Découvrez vos statistiques",
      description: "Accédez et explorez vos données statistiques de manière intuitive pour évaluer et comprendre l'impact de vos actions.",
      color: "neonPink"
    },
    {
      icon: Target,
      title: "Dominez votre secteur",
      description: "Positionnez-vous en tant que leader dans votre domaine en trônant au sommet des résultats sur Google Maps.",
      color: "neonTurquoise"
    },
    {
      icon: Users,
      title: "Flux continu de clients",
      description: "Attirez constamment des clients vers votre commerce, appuyé par des avis positifs qui renforcent la confiance.",
      color: "neonPink"
    },
    {
      icon: Clock,
      title: "Offre sans engagement",
      description: "Tirez parti d'une offre sans engagement, conçue pour optimiser votre visibilité, tout en vous offrant la tranquillité d'esprit d'une démarche sans risque.",
      color: "neonTurquoise"
    }
  ];

  const businessTypes = [
    {
      icon: Utensils,
      title: "Restaurants, bars, cafés",
      description: "Transformez vos clients satisfaits en ambassadeurs en ligne et augmentez votre visibilité locale.",
      color: "neonPink"
    },
    {
      icon: Scissors,
      title: "Salons de coiffure & instituts de beauté",
      description: "Développez votre clientèle grâce à des avis authentiques et une meilleure visibilité sur Google.",
      color: "neonTurquoise"
    },
    {
      icon: Store,
      title: "Magasins de détail",
      description: "Attirez plus de clients en magasin en renforçant votre présence en ligne et votre e-réputation.",
      color: "neonPink"
    },
    {
      icon: Stethoscope,
      title: "Cabinets médicaux et dentaires",
      description: "Rassurez vos futurs patients avec des avis vérifiés et une présence Google optimisée.",
      color: "neonTurquoise"
    },
    {
      icon: Dumbbell,
      title: "Salles de sport, spas, hôtels",
      description: "Créez une communauté engagée et fidèle grâce à une expérience client gamifiée.",
      color: "neonPink"
    },
    {
      icon: Gamepad,
      title: "Centres de loisirs",
      description: "Bowling, laser game, escape game : dynamisez votre établissement avec des avis enthousiastes de joueurs satisfaits.",
      color: "neonTurquoise"
    }
  ];

  const testimonials = [
    {
      name: "Marie Laurent",
      role: "Propriétaire du restaurant 'La Table de Marie'",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Depuis que nous utilisons BoostMyMap, le nombre de nos avis Google a explosé ! En 2 mois, nous sommes passés de 45 à plus de 120 avis, et notre note moyenne est montée à 4.8/5. L'impact sur notre visibilité est impressionnant, nous avons constaté une augmentation de 30% de nouveaux clients.",
      metrics: {
        reviewsIncrease: "+167%",
        ratingImprovement: "4.8/5",
        newCustomers: "+30%"
      }
    },
    {
      name: "Thomas Dubois",
      role: "Gérant de 'Coiffure & Style'",
      image: "https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "La roue de la fortune est un véritable succès auprès de nos clients ! Non seulement ils prennent plaisir à participer, mais cela nous a permis de collecter plus de 80 nouveaux avis en à peine 3 mois. Notre salon est maintenant le mieux noté du quartier, et nous avons même dû recruter pour gérer l'afflux de nouveaux clients.",
      metrics: {
        reviewsIncrease: "+80",
        ratingImprovement: "4.9/5",
        satisfaction: "98%"
      }
    },
    {
      name: "Sophie Martin",
      role: "Propriétaire de 'La Boutique Enchantée'",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "BoostMyMap a transformé notre point de vente ! Les clients jouent le jeu avec plaisir et nous avons constaté une hausse immédiate de notre popularité en ligne.",
      metrics: {
        reviewsIncrease: "+120%",
        ratingImprovement: "5/5",
        satisfaction: "95%"
      }
    },
    {
      name: "Pierre Durand",
      role: "Directeur de 'Sport & Bien-être'",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "En moins d'un mois, nous sommes passés de 50 à 110 avis grâce à BoostMyMap. Un outil indispensable pour booster sa réputation locale.",
      metrics: {
        reviewsIncrease: "+120%",
        ratingImprovement: "4.9/5",
        newCustomers: "+45%"
      }
    },
    {
      name: "Emma Bernard",
      role: "Gérante du 'Spa Zen'",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Excellente expérience ! Non seulement nos avis ont augmenté, mais nous avons aussi fidélisé plus de clients grâce aux petits cadeaux gagnés à la roue.",
      metrics: {
        reviewsIncrease: "+90%",
        ratingImprovement: "4.8/5",
        satisfaction: "96%"
      }
    },
    {
      name: "Lucas Moreau",
      role: "Propriétaire de 'L'Atelier Gourmand'",
      image: "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Simple, rapide et hyper rentable. BoostMyMap nous a permis d'améliorer notre image sur Google et d'attirer beaucoup plus de visiteurs dans notre commerce.",
      metrics: {
        reviewsIncrease: "+150%",
        ratingImprovement: "4.9/5",
        newCustomers: "+40%"
      }
    }
  ];

  const faqItems = [
    {
      question: "Qu'est-ce que BoostMyMap ?",
      answer: "BoostMyMap est une SOLUTION MARKETING CLÉ-EN-MAIN conçue pour aider les entreprises locales à récolter facilement plus d'avis Google, tout en créant une expérience client originale et engageante.\n\nGrâce à une ROUE DE LA FORTUNE DIGITALE, accessible en scannant un QR code placé dans votre établissement, vos clients sont encouragés à laisser un avis Google en échange de la possibilité de gagner un petit lot ou un cadeau.\n\nL'objectif est double :\n• Booster votre E-RÉPUTATION et améliorer votre position dans les résultats locaux de Google.\n• FIDÉLISER votre clientèle grâce à un moment ludique, qui renforce leur lien avec votre marque.\n\nEn résumé, BoostMyMap transforme vos clients satisfaits en VÉRITABLES AMBASSADEURS en ligne."
    },
    {
      question: "Comment fonctionne la roue de la fortune ?",
      answer: "Le processus est SIMPLE, RAPIDE ET EFFICACE :\n\n1. Votre client scanne un QR code bien visible dans votre établissement (comptoir, table, vitrine…).\n2. Il est redirigé vers une page web intuitive où il est invité à laisser un AVIS GOOGLE sur votre fiche.\n3. Une fois l'avis publié, il accède à une ROUE DE LA FORTUNE DIGITALE et la fait tourner pour tenter de gagner un lot (réduction, petit cadeau, boisson offerte, etc.).\n\nCe mécanisme ludique crée une expérience mémorable tout en augmentant naturellement votre nombre d'avis positifs."
    },
    {
      question: "Ai-je besoin d'une application ou d'un matériel spécifique ?",
      answer: "NON, aucun matériel complexe ni application à installer.\n\nTout se fait via un simple QR CODE IMPRIMÉ à placer dans votre établissement (fourni clé-en-main par BoostMyMap), associé à un MINI-SITE WEB RESPONSIVE accessible sur n'importe quel smartphone.\n\n✔️ Pas d'installation\n✔️ Pas de tablette\n✔️ Pas de frais cachés\n\nVous avez juste besoin de quelques secondes pour mettre en place le dispositif, et c'est parti !"
    },
    {
      question: "Est-ce légal de proposer un cadeau contre un avis ?",
      answer: "Oui, à condition de ne pas imposer un avis positif. Avec BoostMyMap, l'avis est libre, et le jeu est proposé quel que soit le contenu de l'avis, ce qui respecte les conditions d'utilisation de Google."
    },
    {
      question: "En combien de temps puis-je voir des résultats ?",
      answer: "Grâce à notre système ludique et engageant, les premiers résultats arrivent dès les premiers jours. Une fois le QR code installé dans votre établissement, vos clients sont incités à participer à notre roue de la fortune digitale. En échange, ils laissent un avis sur votre fiche Google.En moyenne, nos clients constatent : \n✅ +60 % d'avis positifs en seulement 30 jours \n⭐ Une amélioration visible de leur note Google \n🚀 Une hausse de la fréquentation grâce à une meilleure e-réputation Et ce n'est pas tout : plus vous récoltez d'avis, plus vous êtes mis en avant sur Google, ce qui attire encore plus de clients. Bref, c'est un cercle vertueux qui se met en place quasi instantanément, dès que le dispositif est activé dans votre établissement."
    },
    {
      question: "Combien coûte BoostMyMap ?",
      answer: "Nous proposons plusieurs formules adaptées à la taille de votre établissement, avec ou sans engagement. Tout est inclus : roue personnalisée, QR code prêt à l'emploi, hébergement, support client et mises à jour. Contactez-nous pour un devis personnalisé."
    },
    {
      question: "Puis-je personnaliser la roue et les récompenses ?",
      answer: "Oui ! BoostMyMap vous permet de personnaliser les lots, les messages, les couleurs de la roue et même la page web affichée après le scan du QR code, pour qu'elle corresponde parfaitement à votre image de marque."
    }
  ];

  const blogPosts = [
    {
      title: "Comment obtenir plus d'avis Google facilement en 2025 ?",
      excerpt: "Découvrez les meilleures stratégies pour multiplier vos avis Google et améliorer votre visibilité locale en 2025.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      readTime: "8 min",
      category: "Guide",
      slug: "comment-obtenir-plus-avis-google-2025"
    },
    {
      title: "Les 7 secrets pour améliorer votre référencement local avec Google My Business",
      excerpt: "Optimisez votre présence locale et attirez plus de clients grâce à ces techniques éprouvées.",
      image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg",
      readTime: "6 min",
      category: "Conseils",
      slug: "secrets-referencement-local-google-my-business"
    },
    {
      title: "Avis clients : pourquoi sont-ils essentiels pour votre business en 2025 ?",
      excerpt: "L'impact des avis clients sur votre visibilité et votre chiffre d'affaires expliqué en détail.",
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg",
      readTime: "5 min",
      category: "Analyse",
      slug: "importance-avis-clients-2025"
    }
  ];

  return (
    <main className="flex-grow pt-24">
      {/* Hero Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-neonPink">Multipliez vos avis Google</span> et grimpez à la 1ère Place !
            </h1>
            <p className="text-xl text-gray-300">
              Stimulez l'engagement et la fidélité de vos clients grâce à une expérience ludique et motivante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-neonTurquoise hover:bg-neonTurquoise/80 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-neon-turquoise text-center justify-center"
              >
                Commencer maintenant <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-neonPink">✓</span> Sans engagement
                <span className="text-neonPink ml-4">✓</span> Satisfait ou remboursé 30j
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://boostmymap.fr/Astronaute%20Boostmymap.png" 
              alt="Roue de la fortune interactive" 
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Découvrez BoostMyMap en action</h2>
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-neon-pink mb-12">
            <video
              controls
              className="absolute top-0 left-0 w-full h-full"
              poster="https://boostmymap.fr/boostmymap-Cover.jpg"
            >
              <source src="https://boostmymap.fr/boostmymap.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
          <div className="text-center">
            <button 
              onClick={handleSimulatorClick}
              className="inline-flex items-center gap-3 bg-neonTurquoise hover:bg-neonTurquoise/80 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-neon-turquoise text-lg font-semibold group"
            >
              <Calculator className="w-6 h-6" />
              Essayer le simulateur
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-darkSecondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça fonctionne ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-12 h-12 text-neonPink" />,
                title: "Solution clé en main",
                description: "Notre équipe crée votre QR Code personnalisé, prêt à être affiché dans votre point de vente, au format de votre choix. Mise en place en moins de 48h."
              },
              {
                icon: <QrCode className="w-12 h-12 text-neonTurquoise" />,
                title: "Le client donne son avis",
                description: "En scannant le QR Code, votre client est redirigé vers votre fiche Google pour laisser un avis."
              },
              {
                icon: <Gift className="w-12 h-12 text-neonPink" />,
                title: "Il tourne la roue et gagne",
                description: "Une fois l'avis posté, le client accède à votre roue personnalisée et peut tenter de gagner un cadeau."
              }
            ].map((step, index) => (
              <div key={index} className="bg-darkBg p-6 rounded-lg hover:shadow-neon-pink transition-all duration-300">
                <div className="flex justify-center items-center mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mascot Section */}
      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1">
              <img 
                src="https://boostmymap.fr/mascotte-roue-1%20(1).png"
                alt="Mascotte BoostMyMap" 
                className="w-4/5 md:w-3/4 hover:scale-105 transition-transform duration-500 animate-float"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neonTurquoise to-neonPink bg-clip-text text-transparent animate-gradient">
                Pourquoi BoostMyMap transforme votre visibilité et renforce la fidélité de vos clients ?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Grâce à notre système de roue interactive, vous convertissez vos clients satisfaits en véritables ambassadeurs. En quelques secondes, ils laissent un avis Google et participent à un jeu ludique qui renforce leur lien avec votre marque et les incite à revenir. C'est simple, rapide, efficace… et 100 % sans friction !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir cette solution ?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Plus d'avis Google",
                description: "Grâce à notre système ludique, 8 clients sur 10 prennent plaisir à laisser un avis Google."
              },
              {
                title: "Engagement client",
                description: "Transformez chaque avis en opportunité de retour. En échange de leur avis, vos clients remportent une récompense à venir récupérer dans votre établissement, créant une vraie boucle de fidélité."
              },
              {
                title: "Personnalisation simple",
                description: "Choisissez vos récompenses, Définissez le taux de gagnants pour contrôler la fréquence des cadeaux, vos messages en quelques clics.La roue est prête en moins de 5 minutes, aucune compétence technique requise."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-darkSecondary p-8 rounded-lg hover:shadow-neon-turquoise transition-all duration-300 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4 text-neonTurquoise">{benefit.title}</h3>
                <p className="text-gray-400 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-neonPink hover:bg-neonPink/80 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-neon-pink text-lg font-semibold"
            >
              Découvrir nos offres
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-darkSecondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">LES AVANTAGES</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card text-center space-y-4 p-6 rounded-lg bg-darkBg/50 backdrop-blur-sm">
                <div className="flex justify-center">
                  <advantage.icon className={`advantage-icon w-16 h-16 text-${advantage.color}`} />
                </div>
                <h3 className={`advantage-title text-xl font-bold text-${advantage.color}`}>
                  {advantage.title}
                </h3>
                <p className="text-gray-300">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="mb-8 inline-flex items-center gap-4 bg-darkBg/50 px-6 py-3 rounded-full">
              <span className="text-neonTurquoise">✓</span> Sans engagement
              <span className="text-neonTurquoise">✓</span> Installation en 48h
              <span className="text-neonTurquoise">✓</span> Satisfait ou remboursé
            </div>
            <div>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-neonTurquoise hover:bg-neonTurquoise/80 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-neon-turquoise text-lg font-semibold"
              >
                Commencer maintenant
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui est-ce fait? Section */}
      <section className="py-16 bg-darkSecondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pour qui est-ce fait ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessTypes.map((type, index) => (
              <div 
                key={index}
                className={`bg-darkBg p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-${type.color} group`}
              >
                <div className={`flex justify-center mb-6 text-${type.color}`}>
                  <type.icon className="w-16 h-16 transform group-hover:rotate-6 transition-transform duration-300" />
                </div>
                <h3 className={`text-xl font-bold mb-4 text-center text-${type.color}`}>
                  {type.title}
                </h3>
                <p className="text-gray-400 text-center">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-neonPink hover:bg-neonPink/80 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-neon-pink text-lg font-semibold"
            >
              Découvrir votre solution
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-darkSecondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Résultats prouvés</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-darkBg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold p-6 bg-darkSecondary/50">AVANT BOOSTMYMAP</h3>
              <div className="p-4 md:p-6">
                <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto">
                  <img 
                    src="http://boostmymap.fr/avantboostmymap.png" 
                    alt="Avant BoostMyMap" 
                    className="absolute inset-0 w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="bg-darkBg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold p-6 bg-darkSecondary/50">AVEC BOOSTMYMAP</h3>
              <div className="p-4 md:p-6">
                <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto">
                  <img 
                    src="https://boostmymap.fr/apresboostmymap.png" 
                    alt="Après BoostMyMap" 
                    className="absolute inset-0 w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-darkBg overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Ils nous font confiance
          </h2>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-neonPink !opacity-50',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-neonPink !opacity-100',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="testimonials-swiper !pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-darkSecondary rounded-xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-neon-pink h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-neonPink">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="mb-6">
                    <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-700">
                    {Object.entries(testimonial.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-neonTurquoise mb-1">{value}</div>
                        <div className="text-sm text-gray-400">
                          {key === 'reviewsIncrease' && "Avis"}
                          {key === 'ratingImprovement' && "Note"}
                          {key === 'newCustomers' && "Nouveaux clients"}
                          {key === 'satisfaction' && "Satisfaction"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev !text-neonPink after:!text-2xl"></div>
            <div className="swiper-button-next !text-neonPink after:!text-2xl"></div>
          </Swiper>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Foire Aux Questions (FAQ)</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-darkSecondary rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-darkSecondary/50 transition-colors duration-300"
                  onClick={() => setOpenFaqId(openFaqId === index ? null : index)}
                >
                  <span className="text-lg font-semibold">{item.question}</span>
                  {openFaqId === index ? (
                    <ChevronUp className="w-5 h-5 text-neonPink" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neonPink" />
                  )}
                </button>
                {openFaqId === index && (
                  <div className="px-6 py-4 bg-darkBg/30">
                    <p className="text-gray-300 whitespace-pre-line">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-darkSecondary to-darkBg opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Prêt à commencer ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-darkBg/80 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-neon-pink group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-neonPink/20 group-hover:bg-neonPink/30 transition-colors duration-300">
                    <PhoneCall className="w-8 h-8 text-neonPink" />
                  </div>
                  <h3 className="text-xl font-semibold">Appel téléphonique</h3>
                  <p className="text-gray-400">Discutons de vos besoins en détail</p>
                  <p className="text-sm text-gray-500">Durée : 30 minutes</p>
                </div>
              </div>

              <div className="bg-darkBg/80 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-neon-turquoise group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-neonTurquoise/20 group-hover:bg-neonTurquoise/30 transition-colors duration-300">
                    <Video className="w-8 h-8 text-neonTurquoise" />
                  </div>
                  <h3 className="text-xl font-semibold">Visioconférence</h3>
                  <p className="text-gray-400">Démonstration en direct de la solution</p>
                  <p className="text-sm text-gray-500">Durée : 45 minutes</p>
                </div>
              </div>

              <div className="bg-darkBg/80 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-neon-pink group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-neonPink/20 group-hover:bg-neonPink/30 transition-colors duration-300">
                    <Calendar className="w-8 h-8 text-neonPink" />
                  </div>
                  <h3 className="text-xl font-semibold">Rendez-vous physique</h3>
                  <p className="text-gray-400">Rencontrons-nous dans vos locaux</p>
                  <p className="text-sm text-gray-500">Durée : 1 heure</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="https://calendly.com/contact-boostmymap/30min"
                className="inline-flex items-center gap-3 bg-neonTurquoise hover:bg-neonTurquoise/80 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-neon-turquoise text-lg font-semibold group"
                rel="nofollow"
              >
                <Clock3 className="w-6 h-6" />
                Réserver une démo
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Notre équipe vous recontactera dans les 24 heures pour confirmer le rendez-vous
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-darkBg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Blog</h2>
          <p className="text-xl text-gray-400 text-center mb-12">Conseils et astuces pour booster votre présence en ligne</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="bg-darkSecondary rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-neon-turquoise"
              >
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-neonPink px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Clock className="w-4 h-4" />
                    {post.readTime} de lecture
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-neonTurquoise transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    onClick={handleBlogClick}
                    className="inline-flex items-center text-neonTurquoise hover:text-neonPink transition-colors duration-300"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/blog"
              onClick={handleBlogClick}
              className="inline-flex items-center gap-2 bg-neonTurquoise hover:bg-neonTurquoise/80 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-neon-turquoise text-lg font-semibold"
            >
              Voir tous les articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}