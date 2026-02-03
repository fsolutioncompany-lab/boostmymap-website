import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Search } from 'lucide-react';

const blogPosts = [
  {
    title: "Comment obtenir plus d'avis Google facilement en 2025 ?",
    excerpt: "Découvrez les meilleures stratégies pour multiplier vos avis Google et améliorer votre visibilité locale en 2025.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
    readTime: "8 min",
    category: "Guide",
    slug: "comment-obtenir-plus-avis-google-2025",
    date: "15 Mars 2025"
  },
  {
    title: "Les 7 secrets pour améliorer votre référencement local avec Google My Business",
    excerpt: "Optimisez votre présence locale et attirez plus de clients grâce à ces techniques éprouvées.",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg",
    readTime: "6 min",
    category: "Conseils",
    slug: "secrets-referencement-local-google-my-business",
    date: "10 Mars 2025"
  },
  {
    title: "Avis clients : pourquoi sont-ils essentiels pour votre business en 2025 ?",
    excerpt: "L'impact des avis clients sur votre visibilité et votre chiffre d'affaires expliqué en détail.",
    image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg",
    readTime: "5 min",
    category: "Analyse",
    slug: "importance-avis-clients-2025",
    date: "5 Mars 2025"
  }
];

const categories = [
  { name: "Tous", count: blogPosts.length },
  { name: "Guide", count: blogPosts.filter(post => post.category === "Guide").length },
  { name: "Conseils", count: blogPosts.filter(post => post.category === "Conseils").length },
  { name: "Analyse", count: blogPosts.filter(post => post.category === "Analyse").length }
];

export function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const handleBlogClick = () => {
    window.scrollTo(0, 0);
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-darkBg text-white pt-24">
      <Helmet>
        <title>Blog BoostMyMap | Conseils et Astuces pour Booster vos Avis Google</title>
        <meta name="description" content="Découvrez nos articles, guides et conseils pour améliorer votre présence en ligne, obtenir plus d'avis Google et développer votre business local." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog BoostMyMap</h1>
            <p className="text-xl text-gray-400">
              Conseils et astuces pour booster votre présence en ligne
            </p>
          </header>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-darkSecondary rounded-full border border-gray-700 focus:border-neonTurquoise focus:outline-none text-white"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-neonTurquoise text-white'
                        : 'bg-darkSecondary text-gray-400 hover:bg-neonTurquoise/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-darkSecondary rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-neon-turquoise"
              >
                <Link to={`/blog/${post.slug}`} onClick={handleBlogClick}>
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
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime} de lecture
                      </div>
                      <time>{post.date}</time>
                    </div>
                    <h2 className="text-xl font-bold mb-3 hover:text-neonTurquoise transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-neonTurquoise hover:text-neonPink transition-colors duration-300">
                      Lire l'article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                Aucun article ne correspond à votre recherche.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}