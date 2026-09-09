export type ViewMode = 'presentation' | 'playbook' | 'sandbox';

export interface PipelineStep {
  step: string;
  title: string;
  desc: string;
  highlight: string;
}

export interface PetSkin {
  id: string;
  name: string;
  badge: string;
  description: string;
  themeColor: string;
  bgGradient: string;
}

export interface BusinessPillar {
  id: string;
  tag: string;
  level: string; // e.g. "点：单景区直连" / "面：毕节全域闭环" / "网：顶层伴游"
  title: string;
  subtitle: string;
  oneSentenceSummary: string;
  imageSrc?: string;
  imageCaption?: string;
  imageBadge?: string;
  
  // 核心落地
  currentStatus: {
    whatWeBuilt: string[];
    technicalBackbone: string;
    actualImpact: string;
    // 专为毕节全链路定制
    pipelineSteps?: PipelineStep[];
    // 专为伴游专属宠物定制
    companionFeatures?: {
      memoryTraits: string[];
      skins: PetSkin[];
      roadmap: { phase: string; title: string; desc: string }[];
    };
  };

  // 业务同事的核心疑问 (精简高辨识)
  businessFAQ: {
    question: string;
    plainAnswer: string;
  }[];

  // 业务推广核心切入点
  promotionAngles: {
    title: string;
    hook: string;
    description: string;
    targetCustomer: string;
    valueToClient: string;
  }[];

  // 30秒电梯话术
  elevatorPitch: string;
  
  // 关键数据/亮点标签
  metrics: { label: string; value: string; desc: string }[];
  accentColor: string;
  lightBg: string;
  borderColor: string;
}

export interface ObjectionHandling {
  id: string;
  customerType: string;
  objection: string;
  poorReply: string; // 错误回答（AI味/技术自嗨）
  sharpReply: string; // 业务金牌回答（戳痛点/讲利益）
  pitchAngle: string;
}

export interface CustomerSegment {
  id: string;
  role: string;
  iconName: string;
  painPoint: string;
  matchingPillars: string[];
  recommendedPitch: string;
  expectedRevenueModel: string;
}
