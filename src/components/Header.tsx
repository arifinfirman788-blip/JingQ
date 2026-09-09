import React from 'react';
import { Layers, BookOpen, GitFork, Copy, Printer, Check } from 'lucide-react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentMode: ViewMode;
  onSelectMode: (mode: ViewMode) => void;
  onOpenScript: () => void;
  isCopied: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  onOpenScript,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E5E7EB] transition-all print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-lg shadow-sm border border-[#334155]/20">
              文旅
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0D9488] bg-[#CCFBF1]/60 px-2 py-0.5 rounded-md border border-[#99F6E4]">
                  内部业务宣讲材料
                </span>
                <span className="text-xs text-[#64748B] hidden md:inline">
                  | 明日汇报 · 业务看懂与推广落地版
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-[#0F172A] leading-tight mt-0.5">
                文旅智能体三层产品矩阵与实战推广指南
              </h1>
            </div>
          </div>

          {/* Navigation Modes - Hidden entirely as requested */}

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              id="btn-open-speech-script"
              onClick={onOpenScript}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0F172A] text-white text-xs sm:text-sm font-medium hover:bg-[#1E293B] transition-colors shadow-xs"
              title="查看明天汇报逐字稿与发言备忘录"
            >
              <Copy className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>汇报逐字稿</span>
            </button>

            <button
              id="btn-print-report"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border border-[#CBD5E1] bg-white text-[#475569] text-xs sm:text-sm hover:bg-[#F8FAFC] transition-colors"
              title="打印当前材料或另存为PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>打印/PDF</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
