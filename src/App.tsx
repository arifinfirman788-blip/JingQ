import React, { useState } from 'react';
import { ViewMode } from './types';
import { Header } from './components/Header';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { PillarsView } from './components/PillarsView';
import { PlaybookSection } from './components/PlaybookSection';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { SpeechScriptModal } from './components/SpeechScriptModal';
import { 
  Compass, 
  Ticket, 
  Landmark, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  HelpCircle,
  Copy,
  Printer,
  Sparkles,
  Award
} from 'lucide-react';

export default function App() {
  const [currentMode, setCurrentMode] = useState<ViewMode>('presentation');
  const [activePillarId, setActivePillarId] = useState<string | null>('all');
  const [isScriptModalOpen, setIsScriptModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleJumpToPillar = (pillarId: string) => {
    setCurrentMode('presentation');
    setActivePillarId(pillarId);
    // Smooth scroll to the pillar card
    setTimeout(() => {
      const el = document.getElementById(`pillar-${pillarId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A] font-sans antialiased selection:bg-[#E2E8F0]">
      {/* Top Header & Mode Navigation */}
      <Header
        currentMode={currentMode}
        onSelectMode={setCurrentMode}
        onOpenScript={() => setIsScriptModalOpen(true)}
        isCopied={isCopied}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-12">
        {/* Presentation View (Default for Tomorrow's Meeting) */}
        {currentMode === 'presentation' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            {/* 30-Second Executive Summary */}
            <ExecutiveSummary onJumpToPillar={handleJumpToPillar} />

            {/* 3 Pillars Deep-Dive Cards */}
            <PillarsView 
              activePillarId={activePillarId} 
              onSelectPillar={setActivePillarId} 
            />
          </div>
        )}

        {/* Playbook Mode (Sales & Promotion Battle-Cards) */}
        {currentMode === 'playbook' && (
          <div className="animate-in fade-in duration-200">
            <PlaybookSection />
          </div>
        )}

        {/* Sandbox Mode (Interactive Simulation) */}
        {currentMode === 'sandbox' && (
          <div className="animate-in fade-in duration-200">
            <InteractiveSandbox />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E2E8F0] bg-white py-8 text-center text-xs text-[#64748B] print:hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-medium text-[#334155]">
            文旅智能体产品团队 · 内部业务宣讲与推广赋能材料
          </p>
          <p className="text-[11px] text-[#94A3B8]">
            包含：单景区智能体（票务直连） | 毕节全域活动总入口 | 顶层跨场景伴游智能体
          </p>
        </div>
      </footer>

      {/* Speech Script Modal */}
      <SpeechScriptModal
        isOpen={isScriptModalOpen}
        onClose={() => setIsScriptModalOpen(false)}
      />
    </div>
  );
}
