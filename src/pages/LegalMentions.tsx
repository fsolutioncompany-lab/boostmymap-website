import React from 'react';

export function LegalMentions() {
  return (
    <div className="min-h-screen bg-darkBg text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8" rel="nofollow">Mentions Légales</h1>
          <img 
            src="https://boostmymap.fr/mentionle%cc%81gale.png"
            alt="Mentions légales"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}