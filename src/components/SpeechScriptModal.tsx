import React, { useState } from 'react';
import { SPEECH_SCRIPTS } from '../data/reportData';
import { X, Copy, Check, Clock, Sparkles, MessageSquare, BookOpen } from 'lucide-react';

interface SpeechScriptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpeechScriptModal: React.FC<SpeechScriptModalProps> = ({ isOpen, onClose }) => {
  const [selectedTab, setSelectedTab] = useState<'3min' | '1min'>('3min');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentText = selectedTab === '3min' ? SPEECH_SCRIPTS.threeMinutes : SPEECH_SCRIPTS.oneMinute;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-[#CBD5E1] shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0F172A] text-white flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-[#38BDF8]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F172A]">
                明日汇报逐字稿备忘录
              </h3>
              <p className="text-xs text-[#64748B]">
                可直接作为发言提纲、投屏演讲备忘或发送给业务团队
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-[#64748B] hover:bg-[#E2E8F0] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Subtabs & Copy button */}
        <div className="px-6 py-3 border-b border-[#F1F5F9] flex items-center justify-between bg-white text-xs">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSelectedTab('3min')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
                selectedTab === '3min'
                  ? 'bg-[#0F172A] text-white'
                  : 'bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>3分钟业务深度汇报版（推荐明日主汇报）</span>
            </button>
            <button
              onClick={() => setSelectedTab('1min')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
                selectedTab === '1min'
                  ? 'bg-[#0F172A] text-white'
                  : 'bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>1分钟电梯极速版</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0D9488] text-white font-medium hover:bg-[#0F766E] transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>已复制全文</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>复制整篇逐字稿</span>
              </>
            )}
          </button>
        </div>

        {/* Script Content Area */}
        <div className="p-6 overflow-y-auto space-y-4 font-sans text-xs sm:text-sm text-[#1E293B] leading-relaxed select-text bg-[#FAFAFA]">
          <div className="whitespace-pre-wrap bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs font-serif leading-7 text-[#1E293B]">
            {currentText}
          </div>

          {/* Quick Matrix Cheat Sheet */}
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4 text-xs">
            <div className="font-bold text-[#1D4ED8] mb-2 flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>业务同事随身一句话速查小抄</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {SPEECH_SCRIPTS.pitchPointsMatrix.map((item, i) => (
                <div key={i} className="bg-white p-2.5 rounded-lg border border-[#DBEAFE]">
                  <div className="text-[11px] font-semibold text-[#1E40AF]">{item.target}</div>
                  <div className="text-xs font-bold text-[#0F172A] my-0.5">{item.topic}</div>
                  <div className="text-[11px] text-[#64748B]">破冰提问：{item.trigger}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
          <span>提示：可以在汇报时作为提词器使用，或发在内部业务大群供同事复盘。</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-white border border-[#CBD5E1] rounded-md text-[#334155] hover:bg-[#F1F5F9]"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
};
