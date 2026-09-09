import React, { useState } from 'react';
import { BUSINESS_PILLARS } from '../data/reportData';
import { BusinessPillar, PetSkin } from '../types';
import { PhoneMockup } from './PhoneMockup';
import { 
  Ticket, 
  Landmark, 
  Compass, 
  CheckCircle2, 
  HelpCircle, 
  Target, 
  Quote, 
  Copy, 
  Check, 
  Layers,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Palette,
  Workflow,
  Gift,
  Cpu,
  Smartphone
} from 'lucide-react';

interface PillarsViewProps {
  activePillarId: string | null;
  onSelectPillar: (id: string) => void;
}

export const PillarsView: React.FC<PillarsViewProps> = ({ activePillarId, onSelectPillar }) => {
  const [copiedPitchId, setCopiedPitchId] = useState<string | null>(null);
  const [activeTabPerPillar, setActiveTabPerPillar] = useState<Record<string, 'preview' | 'sales' | 'faq'>>({
    'single-spot': 'preview',
    'bijie-hub': 'preview',
    'companion-agent': 'preview'
  });
  
  // Selected skin state for companion pet
  const [selectedPetSkin, setSelectedPetSkin] = useState<PetSkin | undefined>(undefined);

  const handleCopyPitch = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPitchId(id);
    setTimeout(() => setCopiedPitchId(null), 2000);
  };

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'single-spot':
        return <Ticket className="w-5 h-5 text-[#0F766E]" />;
      case 'bijie-hub':
        return <Landmark className="w-5 h-5 text-[#1D4ED8]" />;
      case 'companion-agent':
      default:
        return <Compass className="w-5 h-5 text-[#7E22CE]" />;
    }
  };

  const setTab = (pillarId: string, tab: 'preview' | 'sales' | 'faq') => {
    setActiveTabPerPillar(prev => ({ ...prev, [pillarId]: tab }));
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E2E8F0] pb-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0D9488] mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>核心汇报框架 · 落地效果与商业切入</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            三大业务支柱：实景效果、商业打法与拓展切入点
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-1">
            精简会议纪要冗余文字，图文结合展示真实项目界面、交付方案与业务成单口径
          </p>
        </div>

        {/* Quick Tabs to toggle view */}
        <div className="mt-4 sm:mt-0 flex items-center bg-[#F1F5F9] p-1 rounded-lg border border-[#E2E8F0] text-xs">
          <button
            onClick={() => onSelectPillar('all')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${
              !activePillarId || activePillarId === 'all'
                ? 'bg-white text-[#0F172A] shadow-2xs font-semibold'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            全部展开
          </button>
          {BUSINESS_PILLARS.map((p) => (
            <button
              key={p.id}
              onClick={() => onSelectPillar(p.id)}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                activePillarId === p.id
                  ? 'bg-white text-[#0F172A] shadow-2xs font-semibold'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              {p.level.split('·')[1]?.trim() || p.title}
            </button>
          ))}
        </div>
      </div>

      {/* Pillar Cards Loop */}
      <div className="space-y-10">
        {BUSINESS_PILLARS.filter(
          (p) => !activePillarId || activePillarId === 'all' || activePillarId === p.id
        ).map((pillar) => {
          const currentTab = activeTabPerPillar[pillar.id] || 'preview';

          return (
            <article
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-xs hover:border-[#CBD5E1] transition-all"
            >
              {/* Card Header Strip */}
              <div 
                className="px-6 py-4 sm:py-5 border-b border-[#E2E8F0]/80 flex flex-col md:flex-row md:items-center justify-between gap-4"
                style={{ backgroundColor: pillar.lightBg }}
              >
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white shadow-2xs border border-[#E2E8F0] flex items-center justify-center shrink-0 mt-0.5">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span 
                        className="text-xs font-bold px-2 py-0.5 rounded-md tracking-wide"
                        style={{ color: pillar.accentColor, backgroundColor: '#FFFFFF' }}
                      >
                        {pillar.level}
                      </span>
                      <span className="text-xs font-semibold text-[#475569] bg-white/80 px-2 py-0.5 rounded border border-[#E2E8F0]/70">
                        {pillar.tag}
                      </span>
                      {pillar.imageBadge && (
                        <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {pillar.imageBadge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-[#0F172A]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-[#475569] mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 bg-white/90 p-2 sm:p-2.5 rounded-xl border border-[#E2E8F0] shrink-0">
                  {pillar.metrics.map((m, idx) => (
                    <div key={idx} className="text-center px-1.5 sm:px-2">
                      <div className="text-sm sm:text-base font-bold text-[#0F172A]">
                        {m.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-medium text-[#64748B]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-tab Navigation to avoid endless text wall */}
              <div className="px-6 pt-3 pb-0 bg-white border-b border-[#E2E8F0] flex items-center space-x-2 text-xs">
                <button
                  onClick={() => setTab(pillar.id, 'preview')}
                  className={`pb-2.5 px-3 font-semibold transition-all border-b-2 ${
                    currentTab === 'preview'
                      ? 'text-[#0F172A] border-[#0F172A]'
                      : 'text-[#64748B] border-transparent hover:text-[#0F172A]'
                  }`}
                >
                  <span className="inline-flex items-center">
                    <Smartphone className="w-3.5 h-3.5 mr-1" /> 实景界面与交付方案
                  </span>
                </button>
                <button
                  onClick={() => setTab(pillar.id, 'sales')}
                  className={`pb-2.5 px-3 font-semibold transition-all border-b-2 ${
                    currentTab === 'sales'
                      ? 'text-[#0F172A] border-[#0F172A]'
                      : 'text-[#64748B] border-transparent hover:text-[#0F172A]'
                  }`}
                >
                  <span className="inline-flex items-center">
                    <Target className="w-3.5 h-3.5 mr-1" /> 业务怎么拿去卖 (3大抓手)
                  </span>
                </button>
                <button
                  onClick={() => setTab(pillar.id, 'faq')}
                  className={`pb-2.5 px-3 font-semibold transition-all border-b-2 ${
                    currentTab === 'faq'
                      ? 'text-[#0F172A] border-[#0F172A]'
                      : 'text-[#64748B] border-transparent hover:text-[#0F172A]'
                  }`}
                >
                  <span className="inline-flex items-center">
                    <HelpCircle className="w-3.5 h-3.5 mr-1" /> 同事常见疑虑解答
                  </span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7">
                {/* TAB 1: PREVIEW & SOLUTION SHOWCASE */}
                {currentTab === 'preview' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left Column: Real-life Mobile Simulator */}
                    <div className="lg:col-span-5 flex flex-col items-center">
                      <PhoneMockup 
                        pillarId={pillar.id}
                        imageSrc={pillar.imageSrc}
                        skins={pillar.currentStatus.companionFeatures?.skins}
                        selectedSkin={selectedPetSkin}
                        onSkinChange={(skin) => setSelectedPetSkin(skin)}
                      />
                      <p className="mt-2 text-[11px] text-[#64748B] text-center font-medium">
                        {pillar.imageCaption}
                      </p>
                    </div>

                    {/* Right Column: Key Delivery Highlights & Architecture */}
                    <div className="lg:col-span-7 space-y-5">
                      {/* One Sentence Punchline */}
                      <div className="bg-[#F8FAFC] border-l-4 rounded-r-xl p-3.5 border-[#0F172A]" style={{ borderLeftColor: pillar.accentColor }}>
                        <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                          一句话大白话定位
                        </div>
                        <p className="text-base font-medium text-[#334155] leading-relaxed">
                          {pillar.oneSentenceSummary}
                        </p>
                      </div>

                      {/* Special Section for Pillar 2: 4-Step Pipeline */}
                      {pillar.id === 'bijie-hub' && pillar.currentStatus.pipelineSteps && (
                        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-[#1D4ED8] flex items-center">
                              <Workflow className="w-4 h-4 mr-1.5" />
                              毕节端到端交钥匙全流程解决方案（重要叙事升级）
                            </span>
                            <span className="text-[10px] bg-[#1D4ED8] text-white px-2 py-0.5 rounded font-bold">
                              软硬一体全贯通
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {pillar.currentStatus.pipelineSteps.map((step, idx) => (
                              <div key={idx} className="bg-white p-3 rounded-lg border border-[#DBEAFE] shadow-2xs">
                                <div className="text-xs font-bold text-[#1D4ED8] flex items-center justify-between mb-1">
                                  <span>{step.step}</span>
                                  <span className="text-[10px] font-normal bg-blue-50 text-[#1D4ED8] px-1.5 py-0.2 rounded">
                                    {step.highlight}
                                  </span>
                                </div>
                                <div className="font-semibold text-sm text-[#0F172A] mb-0.5">{step.title}</div>
                                <p className="text-xs text-[#64748B] leading-relaxed">{step.desc}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 pt-2.5 border-t border-[#DBEAFE] text-[11px] text-[#1E40AF] flex items-center justify-between">
                            <span>业务核心优势：不是纯软件外包，而是把硬件闸机与现场核销包圆，竞品无法切入！</span>
                          </div>
                        </div>
                      )}

                      {/* Special Section for Pillar 3: Companion Pet, Skins & Roadmap */}
                      {pillar.id === 'companion-agent' && pillar.currentStatus.companionFeatures && (
                        <div className="space-y-4">
                          {/* Narrative Origin Box */}
                          <div className="bg-[#FAF5FF] border border-[#E9D5FF] rounded-xl p-4">
                            <div className="flex items-center space-x-1.5 text-xs font-bold text-[#7E22CE] mb-2">
                              <Compass className="w-4 h-4" />
                              <span>为什么必须做顶层伴游智能体？</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                              <div className="bg-white p-2.5 rounded-lg border border-purple-100">
                                <div className="font-bold text-rose-700 text-[11px] mb-1">单景区痛点（物理围墙局限）</div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  景区智能体仅解决“院子里的事”；但真实游客在现场问的全是“出了景区去哪吃”、“怎么坐车去别的景区”，单景区AI只能回答“不知道”，客流直接流失给外部平台。
                                </p>
                              </div>
                              <div className="bg-white p-2.5 rounded-lg border border-purple-100">
                                <div className="font-bold text-purple-700 text-[11px] mb-1">顶层伴游解法（全域泛问题覆盖）</div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  打破围墙！顶层负责调度全域吃住行、跨景区串联；同时化身为小程序里的“专属AI伴游小宠物”，记住饮食与带娃偏好，陪伴感拉满。
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Iterative Roadmap */}
                          <div className="bg-white border border-[#E2E8F0] rounded-xl p-4">
                            <div className="text-xs font-bold text-[#0F172A] mb-2.5 flex items-center justify-between">
                              <span className="flex items-center">
                                <Palette className="w-4 h-4 mr-1 text-purple-600" />
                                专属宠物迭代与商业化衍生路径
                              </span>
                              <span className="text-[10px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-medium">
                                持续进化
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                              {pillar.currentStatus.companionFeatures.roadmap.map((rm, idx) => (
                                <div key={idx} className="bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0] text-xs">
                                  <span className="text-[10px] font-bold text-purple-700 bg-purple-100/70 px-1.5 py-0.5 rounded">
                                    {rm.phase}
                                  </span>
                                  <div className="font-bold text-[#0F172A] mt-1.5 text-sm">{rm.title}</div>
                                  <p className="text-xs text-[#64748B] mt-1 leading-snug">{rm.desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* General Delivery Checklist */}
                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 space-y-2.5">
                        <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1.5" />
                          已完成落地产物与底层支撑
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {pillar.currentStatus.whatWeBuilt.map((item, idx) => (
                            <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] p-2.5 rounded-lg text-sm text-[#334155]">
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="text-xs text-[#64748B] bg-[#F1F5F9] p-2 rounded-md">
                          <strong>底层中台：</strong> {pillar.currentStatus.technicalBackbone}
                        </div>
                      </div>

                      {/* 30-Second Elevator Pitch Box */}
                      <div className="bg-[#FFFFFF] border-2 border-dashed border-[#CBD5E1] rounded-xl p-4 relative">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-[#0F172A] flex items-center">
                            <Quote className="w-3.5 h-3.5 mr-1 text-[#0F766E]" />
                            业务同事30秒电梯话术（面对客户直接念）
                          </span>
                          <button
                            onClick={() => handleCopyPitch(pillar.id, pillar.elevatorPitch)}
                            className="inline-flex items-center space-x-1 text-xs font-medium text-[#475569] hover:text-[#0F172A] bg-[#F1F5F9] hover:bg-[#E2E8F0] px-2.5 py-1 rounded-md transition-all"
                          >
                            {copiedPitchId === pillar.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span className="text-emerald-700">已复制</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>复制话术</span>
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-sm sm:text-base text-[#334155] leading-relaxed italic bg-[#F8FAFC] p-3 rounded-lg border border-[#F1F5F9]">
                          “{pillar.elevatorPitch}”
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: SALES TACTICS & HOOKS */}
                {currentTab === 'sales' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#0F172A] flex items-center">
                        <Target className="w-4 h-4 mr-1.5" style={{ color: pillar.accentColor }} />
                        针对客户痛点的3大打法与成单切入点
                      </span>
                      <span className="text-xs text-[#64748B]">
                        拿准客户类型，一句敲门砖切中要害
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {pillar.promotionAngles.map((angle, idx) => (
                        <div 
                          key={idx}
                          className="border border-[#E2E8F0] rounded-xl p-4 bg-[#FFFFFF] hover:border-[#CBD5E1] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="text-xs font-bold text-[#0F172A] mb-2 flex items-center justify-between">
                              <span>切入点 {idx + 1}：{angle.title}</span>
                            </div>

                            {/* Hook Quote */}
                            <div className="bg-[#F8FAFC] border-l-2 p-2.5 rounded-r-lg text-sm font-semibold text-[#0F172A] mb-3 italic" style={{ borderLeftColor: pillar.accentColor }}>
                              {angle.hook}
                            </div>

                            <p className="text-sm text-[#475569] leading-relaxed mb-3">
                              {angle.description}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-[#E2E8F0]/70 text-xs space-y-1">
                            <div className="text-[#334155]">
                              <strong>目标客户：</strong>
                              <span className="text-[#64748B]">{angle.targetCustomer}</span>
                            </div>
                            <div className="text-emerald-800 font-medium">
                              <strong>客户获益：</strong>
                              <span>{angle.valueToClient}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3: BUSINESS FAQS */}
                {currentTab === 'faq' && (
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-[#0F172A] mb-2 flex items-center">
                      <HelpCircle className="w-4 h-4 mr-1.5 text-amber-600" />
                      业务同事最常被客户问到、或者自己最想搞懂的核心问题
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pillar.businessFAQ.map((faq, idx) => (
                        <div 
                          key={idx}
                          className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-4 hover:border-[#CBD5E1] transition-colors"
                        >
                          <div className="flex items-start space-x-2 text-sm sm:text-base font-bold text-[#0F172A] mb-2">
                            <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center shrink-0 mt-0.5">
                              问
                            </span>
                            <span>{faq.question}</span>
                          </div>
                          <div className="pl-7 text-sm text-[#475569] leading-relaxed bg-[#F8FAFC] p-3 rounded-lg border border-[#F1F5F9]">
                            <strong className="text-[#0F172A] font-semibold block mb-1">大白话答复：</strong>
                            {faq.plainAnswer}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
