import React, { useState } from 'react';
import { 
  Ticket, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  ChevronRight, 
  Compass, 
  Heart, 
  Share2, 
  ShoppingBag,
  Palette,
  Award
} from 'lucide-react';
import { PetSkin } from '../types';

interface PhoneMockupProps {
  pillarId: string;
  imageSrc?: string;
  onSkinChange?: (skin: PetSkin) => void;
  selectedSkin?: PetSkin;
  skins?: PetSkin[];
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  pillarId, 
  imageSrc,
  onSkinChange,
  selectedSkin,
  skins = []
}) => {
  return (
    <div className="w-full max-w-[320px] mx-auto rounded-[36px] shadow-xl relative overflow-hidden">
      <img 
        src={imageSrc} 
        alt={pillarId} 
        className="w-full h-auto object-cover"
      />
    </div>
  );
};
