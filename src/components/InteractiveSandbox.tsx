import React, { useState } from 'react';
import { SANDBOX_STEPS } from '../data/reportData';
import { 
  GitFork, 
  User, 
  Bot, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Ticket, 
  Calendar, 
  Compass, 
  ChevronRight,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

export const InteractiveSandbox: React.FC = () => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const step = SANDBOX_STEPS[currentStepIdx];

  const getStepBadge = (idx: number) => {
    switch (idx) {
      case 0:
        return {
          title: '板块二 · 毕节总入口',
          color: '#2563EB',
          bg: '#EFF6FF',
          icon: <Calendar className="w-4 h-4 text-[#2563EB]" />
        };
      case 1:
        return {
          title: '板块三 · 顶层伴游大总管',
          color: '#9333EA',
          bg: '#FAF5FF',
          icon: <Compass className="w-4 h-4 text-[#9333EA]" />
        };
      case 2:
      default:
        return {
          title: '板块一 · 单景区直连向导',
          color: '#0D9488',
          bg: '#F0FDFA',
          icon: <Ticket className="w-4 h-4 text-[#0D9488]" />
        };
    }
  };

  return (
    <section className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-xs">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-5">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#9333EA] bg-[#F3E8FF] px-2.5 py-0.5 rounded-full mb-1">
            <GitFork className="w-3.5 h-3.5" />
            <span>动线推演沙盘 · 3分钟看懂三者如何串联</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            真实游客场景模拟：从“毕节活动预约”到“伴游跨域”再到“单景区出票”
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1">
            模拟外地游客小张游玩毕节的全链路交互，让业务同事亲眼看到三块系统如何在毫秒间无缝交接棒。
          </p>
        </div>

        {/* Step Controller Indicator */}
        <div className="flex items-center space-x-2 bg-[#F8FAFC] p-1.5 rounded-xl border border-[#E2E8F0] shrink-0">
          {SANDBOX_STEPS.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setCurrentStepIdx(idx)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentStepIdx === idx
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
              }`}
            >
              <span>第 {s.step} 幕</span>
              <span className="hidden lg:inline text-[11px] font-normal opacity-80">
                {idx === 0 ? '全域预约' : idx === 1 ? '跨域伴游' : '单点出票'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Stage */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Interactive Dialogue Simulator (7 cols) */}
        <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            {/* Stage Info Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
              <div className="flex items-center space-x-2.5">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: getStepBadge(currentStepIdx).bg }}
                >
                  {getStepBadge(currentStepIdx).icon}
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-[#64748B]">当前介入智能体</div>
                  <div className="text-sm font-bold text-[#0F172A]">
                    {getStepBadge(currentStepIdx).title}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-1 text-xs text-[#64748B]">
                <MapPin className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>场景地点：{step.location}</span>
              </div>
            </div>

            {/* User Real Action Context */}
            <div className="my-4 bg-white border border-[#E2E8F0] rounded-lg p-3 text-xs text-[#334155] leading-relaxed">
              <strong className="text-[#0F172A]">游客行为背景：</strong> {step.userAction}
            </div>

            {/* Chat Bubbles */}
            <div className="space-y-4 my-6">
              {/* User Bubble */}
              <div className="flex items-start space-x-3 justify-end">
                <div className="max-w-[85%] bg-[#0F172A] text-white rounded-2xl rounded-tr-xs p-3.5 text-xs sm:text-sm shadow-2xs leading-relaxed">
                  {step.dialogue.user}
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E2E8F0] text-[#334155] flex items-center justify-center text-xs font-bold shrink-0">
                  <User className="w-4 h-4" />
                </div>
              </div>

              {/* Agent Bubble */}
              <div className="flex items-start space-x-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 shadow-2xs"
                  style={{ backgroundColor: getStepBadge(currentStepIdx).bg, color: getStepBadge(currentStepIdx).color }}
                >
                  <Bot className="w-4 h-4" />
                </div>
                <div className="max-w-[90%] bg-white border border-[#E2E8F0] text-[#1E293B] rounded-2xl rounded-tl-xs p-4 text-xs sm:text-sm shadow-2xs leading-relaxed">
                  <div className="font-semibold text-xs mb-1.5 flex items-center space-x-1"
                    style={{ color: getStepBadge(currentStepIdx).color }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{step.agentInvolved}</span>
                  </div>
                  {step.dialogue.ai}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Next/Prev controls */}
          <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
            <button
              disabled={currentStepIdx === 0}
              onClick={() => setCurrentStepIdx((prev) => Math.max(0, prev - 1))}
              className="text-xs px-3 py-1.5 rounded-lg border border-[#CBD5E1] bg-white text-[#475569] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F1F5F9] transition-all"
            >
              ← 上一步
            </button>

            <span className="text-xs text-[#94A3B8] font-mono">
              第 {currentStepIdx + 1} / {SANDBOX_STEPS.length} 幕
            </span>

            <button
              disabled={currentStepIdx === SANDBOX_STEPS.length - 1}
              onClick={() => setCurrentStepIdx((prev) => Math.min(SANDBOX_STEPS.length - 1, prev + 1))}
              className="inline-flex items-center space-x-1 text-xs px-3.5 py-1.5 rounded-lg bg-[#0F172A] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1E293B] transition-all font-medium"
            >
              <span>下一步演示</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Business Insight & Commercial Takeaway (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Commercial Revelation */}
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-5 shadow-2xs">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">
              <TrendingUp className="w-4 h-4 text-[#10B981]" />
              <span>给业务同事的商业透视</span>
            </div>
            
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-3 text-xs sm:text-sm text-[#166534] leading-relaxed mb-4">
              {step.businessInsight}
            </div>

            <div className="space-y-3 text-xs text-[#475569]">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F172A]">协同本质：</strong>
                  {currentStepIdx === 0 && '毕节总入口是唯一抓手，把全城节庆人群引流到私域池中。'}
                  {currentStepIdx === 1 && '伴游智能体解决“出了景区怎么办”的真实刚需，激活周边餐饮与联程交通增量。'}
                  {currentStepIdx === 2 && '单景区向导负责落地收单，直连闸机完成核销，杜绝退单与黄牛风险。'}
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F172A]">客户买单点：</strong>
                  {currentStepIdx === 0 && '地方文旅局极速满足全域实名监管与活动统一集约KPI。'}
                  {currentStepIdx === 1 && '异业品牌、周边民宿、特色餐饮获得最精准的高意向获客。'}
                  {currentStepIdx === 2 && '景区省下10%给携程美团的佣金，票款直接入自己账户。'}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Flow Map */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
            <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2">
              完整动线闭环图解
            </div>
            <div className="space-y-2">
              <div className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${
                currentStepIdx === 0 
                  ? 'border-[#2563EB] bg-[#EFF6FF] text-[#1D4ED8] font-bold' 
                  : 'border-[#E2E8F0] bg-white text-[#64748B]'
              }`}>
                <span>1. 毕节官方预约入口（聚拢全城流量）</span>
                {currentStepIdx === 0 && <span className="text-[10px] bg-[#2563EB] text-white px-1.5 py-0.5 rounded">进行中</span>}
              </div>

              <div className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${
                currentStepIdx === 1 
                  ? 'border-[#9333EA] bg-[#FAF5FF] text-[#7E22CE] font-bold' 
                  : 'border-[#E2E8F0] bg-white text-[#64748B]'
              }`}>
                <span>2. 顶层伴游调度（周边吃住行+线路编排）</span>
                {currentStepIdx === 1 && <span className="text-[10px] bg-[#9333EA] text-white px-1.5 py-0.5 rounded">进行中</span>}
              </div>

              <div className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${
                currentStepIdx === 2 
                  ? 'border-[#0D9488] bg-[#F0FDFA] text-[#0F766E] font-bold' 
                  : 'border-[#E2E8F0] bg-white text-[#64748B]'
              }`}>
                <span>3. 景区专属智能体（闸机票务直连出票）</span>
                {currentStepIdx === 2 && <span className="text-[10px] bg-[#0D9488] text-white px-1.5 py-0.5 rounded">进行中</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
