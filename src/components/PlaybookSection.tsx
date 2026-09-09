import React, { useState } from 'react';
import { CUSTOMER_SEGMENTS, OBJECTION_HANDLINGS } from '../data/reportData';
import { 
  Briefcase, 
  Building2, 
  Landmark, 
  Compass, 
  Target, 
  ShieldAlert, 
  CheckCircle, 
  Copy, 
  Check, 
  Sparkles,
  HelpCircle,
  TrendingUp,
  XCircle
} from 'lucide-react';

export const PlaybookSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'personas' | 'objections'>('objections');
  const [copiedObjectionId, setCopiedObjectionId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedObjectionId(id);
    setTimeout(() => setCopiedObjectionId(null), 2000);
  };

  const getPersonaIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#0F766E]" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#1D4ED8]" />;
      case 'Compass':
      default:
        return <Compass className="w-5 h-5 text-[#7E22CE]" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E2E8F0] pb-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#2563EB] mb-1">
            <Briefcase className="w-3.5 h-3.5" />
            <span>一线作战手册 · 客户画像与异议对决</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            业务推广实操：跟谁谈、卖什么、怎么应对质疑？
          </h2>
          <p className="text-sm text-[#64748B] mt-1">
            专为业务和BD同事准备的实战指南，拒绝技术自嗨，直接算清客户利益账。
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-4 sm:mt-0 flex items-center bg-[#F1F5F9] p-1 rounded-lg border border-[#E2E8F0] text-xs">
          <button
            onClick={() => setActiveTab('objections')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${
              activeTab === 'objections'
                ? 'bg-white text-[#0F172A] shadow-2xs font-semibold'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            🔥 4大尖锐异议金牌应答
          </button>
          <button
            onClick={() => setActiveTab('personas')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${
              activeTab === 'personas'
                ? 'bg-white text-[#0F172A] shadow-2xs font-semibold'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            🎯 3类目标客户画像矩阵
          </button>
        </div>
      </div>

      {/* 1. Objections Handling Battle Cards */}
      {activeTab === 'objections' && (
        <div className="space-y-6">
          <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-xl p-4 text-xs text-[#92400E] flex items-start space-x-2.5">
            <Sparkles className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">避坑指南：</strong> 很多同事跟客户沟通时习惯讲“大语言模型”、“Agent网络多智能体路由”，客户听得云里雾里直接拒绝。请大家坚决使用右侧的【业务金牌回答】，算经济账、算政绩账、算安全账！
            </div>
          </div>

          <div className="space-y-6">
            {OBJECTION_HANDLINGS.map((item, idx) => (
              <div 
                key={item.id}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[#CBD5E1] transition-all"
              >
                {/* Objection Title & Target Customer */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#F1F5F9]">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded">
                      客户画像：{item.customerType}
                    </span>
                  </div>
                  <div className="text-xs text-[#0D9488] font-semibold bg-[#CCFBF1]/60 px-2.5 py-1 rounded-md border border-[#99F6E4]">
                    核心策略：{item.pitchAngle}
                  </div>
                </div>

                {/* Customer Tough Question */}
                <div className="my-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-md bg-[#EF4444]/10 text-[#EF4444] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    问
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] font-medium">客户真实质疑与刁难：</div>
                    <div className="text-sm sm:text-base font-bold text-[#0F172A] mt-0.5">
                      {item.objection}
                    </div>
                  </div>
                </div>

                {/* Bad vs Sharp Reply Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Bad Reply */}
                  <div className="bg-[#FFF5F5] border border-[#FED7D7] rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-1.5 text-xs font-bold text-[#C53030] mb-2">
                        <XCircle className="w-4 h-4" />
                        <span>❌ 典型扣分回答（技术自嗨 / 毫无杀伤力）</span>
                      </div>
                      <p className="text-xs text-[#742A2A] leading-relaxed">
                        {item.poorReply}
                      </p>
                    </div>
                    <div className="mt-3 text-[11px] text-[#9B2C2C] italic">
                      致命缺陷：没说到客户心坎上，对方听完只想礼貌送客。
                    </div>
                  </div>

                  {/* Sharp Reply */}
                  <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4 flex flex-col justify-between relative">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1.5 text-xs font-bold text-[#15803D]">
                          <CheckCircle className="w-4 h-4" />
                          <span>✅ 金牌说服回答（直接戳利益 / 一剑封喉）</span>
                        </div>
                        <button
                          onClick={() => handleCopy(item.id, item.sharpReply)}
                          className="inline-flex items-center space-x-1 text-[11px] px-2 py-0.5 bg-white border border-[#86EFAC] rounded text-[#166534] hover:bg-[#DCFCE7] transition-colors"
                        >
                          {copiedObjectionId === item.id ? (
                            <>
                              <Check className="w-3 h-3 text-[#10B981]" />
                              <span>已复制</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>复制话术</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-[#14532D] leading-relaxed font-medium">
                        {item.sharpReply}
                      </p>
                    </div>
                    <div className="mt-3 text-[11px] text-[#15803D] font-medium">
                      赢面逻辑：清晰算账，消除顾虑，提供低门槛确定性承诺。
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Customer Personas */}
      {activeTab === 'personas' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CUSTOMER_SEGMENTS.map((seg) => (
            <div 
              key={seg.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center mb-4">
                  {getPersonaIcon(seg.iconName)}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-1">
                  {seg.role}
                </h3>
                
                {/* Matching Pillars */}
                <div className="flex flex-wrap gap-1.5 my-3">
                  {seg.matchingPillars.map((p, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-semibold text-[#0F766E] bg-[#CCFBF1] px-2 py-0.5 rounded-md"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 text-xs text-[#475569] my-4">
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-3 rounded-lg">
                    <span className="font-bold text-[#0F172A] block mb-1">客户核心痛点：</span>
                    {seg.painPoint}
                  </div>

                  <div>
                    <span className="font-bold text-[#0F172A] block mb-1">推荐推介打法：</span>
                    <span className="text-[#334155] leading-relaxed">{seg.recommendedPitch}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F1F5F9] text-xs">
                <span className="text-[#64748B] block mb-1">预期商业变现模式：</span>
                <span className="text-[#0D9488] font-bold">{seg.expectedRevenueModel}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
