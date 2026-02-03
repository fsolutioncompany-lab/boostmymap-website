import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Simulator } from './pages/Simulator';
import { LegalMentions } from './pages/LegalMentions';
import { Blog } from './pages/Blog';
import { BlogPostAvisGoogle } from './pages/blog/comment-obtenir-plus-avis-google-2025';
import { BlogPostGoogleMyBusiness } from './pages/blog/secrets-referencement-local-google-my-business';
import { BlogPostAvisClients } from './pages/blog/importance-avis-clients-2025';
import { AnnouncementBar } from './components/AnnouncementBar';

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-white flex flex-col">
      <AnnouncementBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulateur" element={<Simulator />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/comment-obtenir-plus-avis-google-2025" element={<BlogPostAvisGoogle />} />
        <Route path="/blog/secrets-referencement-local-google-my-business" element={<BlogPostGoogleMyBusiness />} />
        <Route path="/blog/importance-avis-clients-2025" element={<BlogPostAvisClients />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;