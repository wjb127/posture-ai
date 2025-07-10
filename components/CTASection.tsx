'use client'

import React, { useState } from 'react'
import { ArrowRight, Clock, Shield, Zap, CheckCircle } from 'lucide-react'
import PreorderModal from './PreorderModal'
import { trackButtonClick } from '@/lib/analytics'

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCTAClick = async (buttonText: string) => {
    // Track button click first
    await trackButtonClick(buttonText, 'CTASection')
    
    // Then open modal
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              지금 시작하지 않으면 
              <br />
              <span className="text-yellow-300">언제 시작하시겠습니까?</span>
            </h2>
            <p className="text-lg text-primary-100 max-w-3xl mx-auto">
              매일 조금씩 나빠지는 자세, 점점 심해지는 통증을 더 이상 방치하지 마세요.
              <br className="hidden md:block" />
              <strong>지금 바로 30초만 투자하면 평생 건강한 자세를 되찾을 수 있습니다.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">즉시 시작</h3>
              <p className="text-primary-100">
                복잡한 가입 절차 없이 웹캠만 켜면 바로 분석 시작
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">안전한 분석</h3>
              <p className="text-primary-100">
                개인 영상은 로컬에서만 처리, 외부 전송 없음
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">즉시 결과</h3>
              <p className="text-primary-100">
                30초 만에 정확한 자세 분석과 맞춤 솔루션 제공
              </p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 rounded-2xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-yellow-300">₩280,000 상당</span>의 
                특별 혜택
              </h3>
              <p className="text-primary-100 text-lg">
                지금 시작하시는 분들께만 제공하는 런칭 기념 혜택
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>무제한 자세 분석 (₩120,000 상당)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>맞춤 운동 프로그램 (₩80,000 상당)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>실시간 자세 모니터링 (₩50,000 상당)</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>전문가 1:1 상담 (₩30,000 상당)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>프리미엄 기능 무료 체험</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>24/7 고객 지원</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button 
                onClick={() => handleCTAClick('지금 즉시 자세 점수 확인하기')}
                className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center group"
              >
                지금 즉시 자세 점수 확인하기
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => handleCTAClick('실제 개선 사례 보기')}
                className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                실제 개선 사례 보기
              </button>
            </div>
            
            <p className="text-sm text-primary-100">
              30초면 충분합니다. 지금 바로 시작해보세요.
            </p>
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