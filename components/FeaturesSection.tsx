'use client'

import React, { useState } from 'react'
import { Brain, Eye, Target, BarChart3, Shield, Zap } from 'lucide-react'
import PreorderModal from './PreorderModal'
import { trackButtonClick } from '@/lib/analytics'

export default function FeaturesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-primary-600" />,
      title: "AI 자세 분석",
      description: "최첨단 AI 기술로 목, 어깨, 허리, 골반의 정렬 상태를 정확하게 분석합니다.",
      details: ["실시간 자세 인식", "정확도 95% 이상", "다양한 각도 분석"]
    },
    {
      icon: <Eye className="w-8 h-8 text-accent-600" />,
      title: "시각적 피드백",
      description: "문제 부위를 직관적으로 표시하여 어디를 어떻게 교정해야 하는지 명확하게 보여줍니다.",
      details: ["실시간 오버레이", "색상별 위험도 표시", "3D 자세 모델링"]
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "맞춤 운동 추천",
      description: "개인의 자세 문제에 맞는 스트레칭과 강화 운동을 추천하여 효과적인 교정을 돕습니다.",
      details: ["개인 맞춤형 루틴", "단계별 운동 가이드", "진행도 추적"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "개선 추적",
      description: "일일, 주간, 월간 자세 변화를 추적하여 개선 과정을 시각적으로 확인할 수 있습니다.",
      details: ["상세한 진행 리포트", "개선 그래프", "목표 설정 기능"]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "개인정보 보호",
      description: "모든 분석은 로컬에서 처리되며, 개인 영상 데이터는 안전하게 보호됩니다.",
      details: ["로컬 처리", "데이터 암호화", "GDPR 준수"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "즉시 결과",
      description: "복잡한 설정 없이 웹캠만 켜면 바로 자세 분석 결과를 확인할 수 있습니다.",
      details: ["3초 내 분석", "원클릭 시작", "모바일 지원"]
    }
  ]

  const handleCTAClick = async (buttonText: string) => {
    // Track button click first
    await trackButtonClick(buttonText, 'FeaturesSection')
    
    // Then open modal
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              <span className="gradient-text">PosturAI</span>만의 
              특별한 기능들
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              최첨단 AI 기술과 사용자 친화적인 인터페이스로 
              <br className="hidden md:block" />
              누구나 쉽게 자세 교정을 시작할 수 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-secondary-500">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                지금 바로 체험해보세요
              </h3>
              <p className="text-primary-100 mb-6 text-lg">
                복잡한 가입 절차 없이 웹캠만 켜면 바로 시작할 수 있습니다.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1분</div>
                  <p className="text-sm text-primary-100">빠른 분석 시간</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <p className="text-sm text-primary-100">분석 정확도</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <p className="text-sm text-primary-100">언제든 이용 가능</p>
                </div>
              </div>
              
              <button 
                onClick={() => handleCTAClick('무료로 시작하기')}
                className="mt-8 bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                무료로 시작하기
              </button>
            </div>
          </div>
        </div>
      </section>

      <PreorderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service="PosturAI"
      />
    </>
  )
} 