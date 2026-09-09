import React from 'react';
import { Ticket, Landmark, Compass, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface ExecutiveSummaryProps {
  onJumpToPillar: (pillarId: string) => void;
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ onJumpToPillar }) => {
  return (
    <section className="mb-10">
      {/* Editorial Header Banner */}
      <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        {/* Subtle decorative top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0D9488] via-[#2563EB] to-[#9333EA]" />
        
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#475569] bg-[#F1F5F9] px-2.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>汇报核心逻辑 · 点·面·网立体协同</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight leading-snug">
            30秒让业务看懂：文旅智能体三块业务与变现抓手
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#475569] leading-relaxed">
            把技术话术翻译成业务赚钱逻辑：从单个景区的<span className="text-[#0D9488] font-semibold">直销省佣金</span>，到毕节市级的<span className="text-[#2563EB] font-semibold">从C端到闸机全链路交钥匙工程</span>，再到顶层的<span className="text-[#9333EA] font-semibold">全域伴游大管家与专属AI宠物生态</span>。
          </p>
        </div>

        {/* 3 Pillars Visual Preview Cards */}
        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Pillar 1 */}
          <div 
            onClick={() => onJumpToPillar('single-spot')}
            className="group cursor-pointer bg-[#F8FAFC] hover:bg-[#F0FDFA] border border-[#E2E8F0] hover:border-[#99F6E4] rounded-xl p-5 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-[#CCFBF1] px-2 py-0.5 rounded">
                  第一块 · 点
                </span>
                <span className="text-xs font-medium text-[#0D9488] bg-white px-2 py-0.5 rounded border border-[#CCFBF1]">
                  梅花山实测
                </span>
              </div>
              <div className="flex items-center space-x-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#CCFBF1] text-[#0F766E] flex items-center justify-center shrink-0">
                  <Ticket className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-[#0F172A] text-base group-hover:text-[#0F766E] transition-colors">
                  单景区直连智能体
                </h3>
              </div>
              <p className="text-sm font-semibold text-[#334155] mb-2">
                小程序前端 + 订票 + 现有闸机直连
              </p>
              <p className="text-sm text-[#64748B] leading-relaxed">
                “聊天即出票”。直连景区原闸机，省下美团携程8%~15%抽佣，把利润留在景区账上。
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-[#E2E8F0]/70 flex items-center justify-between text-sm">
              <span className="text-[#0F766E] font-semibold">主打：抗OTA抽佣 + 免换闸机</span>
              <span className="inline-flex items-center text-[#64748B] group-hover:text-[#0F766E] font-medium group-hover:translate-x-0.5 transition-all">
                看详情 <ArrowRight className="w-3 h-3 ml-1" />
              </span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div 
            onClick={() => onJumpToPillar('bijie-hub')}
            className="group cursor-pointer bg-[#F8FAFC] hover:bg-[#EFF6FF] border border-[#E2E8F0] hover:border-[#BFDBFE] rounded-xl p-5 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#DBEAFE] px-2 py-0.5 rounded">
                  第二块 · 面
                </span>
                <span className="text-xs font-medium text-[#2563EB] bg-white px-2 py-0.5 rounded border border-[#BFDBFE]">
                  全域全流程闭环
                </span>
              </div>
              <div className="flex items-center space-x-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#DBEAFE] text-[#1D4ED8] flex items-center justify-center shrink-0">
                  <Landmark className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-[#0F172A] text-base group-hover:text-[#1D4ED8] transition-colors">
                  毕节全域总入口
                </h3>
              </div>
              <p className="text-sm font-semibold text-[#334155] mb-2">
                C端入口 ➔ 线上预约 ➔ 线下核销 ➔ 物理闸机
              </p>
              <p className="text-sm text-[#64748B] leading-relaxed">
                端到端一体化包圆！拿下全市文旅活动唯一预约总入口，筑造竞品打不进的政企壁垒。
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E2E8F0]/70 flex items-center justify-between text-sm">
              <span className="text-[#1D4ED8] font-semibold">主打：G端标杆 + 软硬件交钥匙</span>
              <span className="inline-flex items-center text-[#64748B] group-hover:text-[#1D4ED8] font-medium group-hover:translate-x-0.5 transition-all">
                看详情 <ArrowRight className="w-3 h-3 ml-1" />
              </span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div 
            onClick={() => onJumpToPillar('companion-agent')}
            className="group cursor-pointer bg-[#F8FAFC] hover:bg-[#FAF5FF] border border-[#E2E8F0] hover:border-[#E9D5FF] rounded-xl p-5 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9333EA] bg-[#F3E8FF] px-2 py-0.5 rounded">
                  第三块 · 网
                </span>
                <span className="text-xs font-medium text-[#9333EA] bg-white px-2 py-0.5 rounded border border-[#E9D5FF]">
                  伴游宠物与全域
                </span>
              </div>
              <div className="flex items-center space-x-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] text-[#7E22CE] flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-[#0F172A] text-base group-hover:text-[#7E22CE] transition-colors">
                  顶层伴游智能体
                </h3>
              </div>
              <p className="text-sm font-semibold text-[#334155] mb-2">
                打破围墙 + 专属AI伴游宠物 + 换肤文创
              </p>
              <p className="text-sm text-[#64748B] leading-relaxed">
                解决景区外吃住行泛问题。住进小程序的独一无二宠物，支持换肤与文创周边衍生。
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E2E8F0]/70 flex items-center justify-between text-sm">
              <span className="text-[#7E22CE] font-semibold">主打：专属宠物养成 + 换肤文创</span>
              <span className="inline-flex items-center text-[#64748B] group-hover:text-[#7E22CE] font-medium group-hover:translate-x-0.5 transition-all">
                看详情 <ArrowRight className="w-3 h-3 ml-1" />
              </span>
            </div>
          </div>
        </div>

        {/* The 4-step execution chain */}
        <div className="mt-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-[#475569]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
            <span className="font-bold text-[#0F172A]">三者如何协同变现？</span>
            <span>【毕节总入口】汇聚全城流量 ➔ 【顶层伴游宠物】解决全域泛问题沉淀习惯 ➔ 【单景区直连】精准出票进闸</span>
          </div>
          <div className="text-right text-[#0D9488] font-semibold shrink-0">
            全闭环生态协同
          </div>
        </div>
      </div>
    </section>
  );
};
