'use client'

import React, { useState } from 'react'
import { Camera, Scan, Dumbbell, TrendingUp, ArrowRight } from 'lucide-react'
import PreorderModal from './PreorderModal'

export default function HowItWorksSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const steps = [
    {
      number: "01",
      icon: <Camera className="w-8 h-8 text-primary-600" />,
      title: "촬영 또는 업로드",
      description: "웹캠을 켜거나 자세 사진을 업로드하세요. 복잡한 설정은 필요 없습니다.",
      details: ["웹캠 실시간 촬영", "사진/동영상 업로드", "모바일 지원"]
    },
    {
      number: "02",
      icon: <Scan className="w-8 h-8 text-accent-600" />,
      title: "AI 분석",
      description: "최첨단 AI가 목, 어깨, 허리, 골반의 정렬 상태를 정확하게 분석합니다.",
      details: ["실시간 자세 인식", "정확도 95% 이상", "다각도 분석"]
    },
    {
      number: "03",
      icon: <Dumbbell className="w-8 h-8 text-green-600" />,
      title: "맞춤 운동 추천",
      description: "개인의 자세 문제에 맞는 스트레칭과 강화 운동을 추천받으세요.",
      details: ["개인 맞춤형 루틴", "단계별 가이드", "동영상 설명"]
    },
    {
      number: "04",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "개선 추적",
      description: "꾸준한 운동으로 자세가 개선되는 과정을 시각적으로 확인하세요.",
      details: ["진행도 추적", "개선 그래프", "목표 달성 알림"]
    }
  ]

  const handleCTAClick = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              간단한 4단계로 
              <span className="gradient-text"> 자세 교정 시작</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              복잡한 과정 없이 누구나 쉽게 시작할 수 있습니다. 
              <br className="hidden md:block" />
              지금 바로 당신의 자세 개선 여정을 시작해보세요.
            </p>
          </div>

          <div className="relative">
            {/* Desktop view */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                          <span className="text-primary-600 font-bold text-sm">{step.number}</span>
                        </div>
                        <div className="mb-4">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-secondary-600 text-sm mb-4">
                          {step.description}
                        </p>
                        <ul className="space-y-1">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="text-xs text-secondary-500 flex items-center justify-center">
                              <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="bg-primary-100 rounded-full p-2">
                          <ArrowRight className="w-4 h-4 text-primary-600" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile view */}
            <div className="lg:hidden">
              {steps.map((step, index) => (
                <div key={index} className="mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full">
                          <span className="text-primary-600 font-bold text-sm">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-secondary-600 text-sm mb-3">
                          {step.description}
                        </p>
                        <ul className="space-y-1">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="text-xs text-secondary-500 flex items-center">
                              <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-4">
                      <div className="bg-primary-100 rounded-full p-2">
                        <ArrowRight className="w-4 h-4 text-primary-600 transform rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                지금 바로 시작해보세요
              </h3>
              <p className="text-secondary-600 mb-6 text-lg">
                1분이면 충분합니다. 복잡한 가입 절차 없이 바로 자세 분석을 받아보세요.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleCTAClick}
                  className="btn-primary flex items-center justify-center"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  무료로 시작하기
                </button>
                
                <button 
                  onClick={handleCTAClick}
                  className="btn-secondary"
                >
                  데모 영상 보기
                </button>
              </div>
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