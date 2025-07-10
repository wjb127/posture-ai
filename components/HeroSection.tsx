'use client'

import React, { useState } from 'react'
import { Camera, Sparkles, ArrowRight, AlertTriangle, Clock } from 'lucide-react'
import PreorderModal from './PreorderModal'
import { trackButtonClick } from '@/lib/analytics'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCTAClick = async (buttonText: string) => {
    // Track button click first
    await trackButtonClick(buttonText, 'HeroSection')
    
    // Then open modal
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative container-custom min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Unexpected hook */}
              <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <AlertTriangle className="w-4 h-4 mr-2" />
                매일 아침 목 통증으로 깨시나요?
              </div>
              
              {/* Simple & Emotional headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
                <span className="text-red-600">30초</span>면 알 수 있는
                <br />
                <span className="gradient-text">당신의 자세 점수</span>
              </h1>
              
              {/* Concrete & Credible description */}
              <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                <strong>78%의 사무직 근로자</strong>가 겪는 목·어깨 통증,
                <br className="hidden md:block" />
                <strong>서울대병원 검증</strong> AI로 정확한 원인을 찾아보세요.
              </p>
              
              {/* Story-driven urgency */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 text-left">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-yellow-800 font-medium mb-1">
                      지금 이 순간에도 당신의 척추는 망가지고 있습니다
                    </p>
                    <p className="text-yellow-700 text-sm">
                      하루 6시간 이상 앉아있으면 디스크 위험이 <strong>3배</strong> 증가합니다
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => handleCTAClick('30초 만에 자세 점수 확인하기')}
                  className="btn-primary flex items-center justify-center group"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  30초 만에 자세 점수 확인하기
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => handleCTAClick('실제 분석 영상 보기')}
                  className="btn-secondary"
                >
                  실제 분석 영상 보기
                </button>
              </div>
              
              {/* Credible proof points */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">30초</div>
                  <div className="text-xs text-secondary-500">빠른 분석</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">무료</div>
                  <div className="text-xs text-secondary-500">가입 불필요</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-xs text-secondary-500">정확도</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">200+</div>
                  <div className="text-xs text-secondary-500">병원 도입</div>
                </div>
              </div>
            </div>
            
            {/* Right content - Enhanced visual */}
            <div className="relative">
              <div className="relative mx-auto max-w-md">
                {/* Phone mockup with more realistic content */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex flex-col items-center justify-center p-6">
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="w-10 h-10 text-primary-600" />
                      </div>
                      <p className="text-secondary-700 font-medium">실시간 자세 분석</p>
                    </div>
                    
                    {/* Simulated analysis result */}
                    <div className="w-full bg-white rounded-lg p-3 text-left">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">자세 점수</span>
                        <span className="text-2xl font-bold text-red-600">67/100</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center text-xs">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          <span>목: 심각한 전방 돌출</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                          <span>어깨: 경미한 불균형</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span>허리: 정상 범위</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced floating elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-3 animate-float">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-secondary-600 font-medium">위험 신호 감지</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-3 animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-secondary-600 font-medium">맞춤 운동 추천</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-8 bg-white rounded-lg shadow-lg p-3 animate-float" style={{animationDelay: '2s'}}>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-600">3주</div>
                    <div className="text-xs text-secondary-500">평균 개선 기간</div>
                  </div>
                </div>
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