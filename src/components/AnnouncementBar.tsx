import React from 'react';
import { Tag } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="bg-neonPink py-2 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-white">
          <Tag className="w-4 h-4" />
          <p className="text-sm font-medium">
            Offre découverte : Votre premier mois à moitié prix ! 
          </p>
        </div>
      </div>
    </div>
  );
}