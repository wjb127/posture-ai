'use client'

import React from 'react'
import { Camera, ArrowRight, CheckCircle, Sparkles, Clock, AlertTriangle } from 'lucide-react'

export default function CTASection() {
  const urgentBenefits = [
    "30초 만에 결과 확인",
    "가입 없이 바로 시작",
    "의료진 검증 AI 분석",
    "무료 맞춤 운동 처방"
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-red-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Urgency indicator */}
          <div className="inline-flex items-center bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            <AlertTriangle className="w-4 h-4 mr-2" />
            지금 확인하지 않으면 내년에는 늦습니다
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-yellow-300">3주 후</span> 통증 없는 아침을
            <br className="md:hidden" />
            경험하고 싶으시다면
          </h2>
          
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            매일 아침 목이 아파서 깨는 일상을 끝내세요.
            <br className="hidden md:block" />
            <strong className="text-white">지금 바로 30초만 투자하면 평생이 바뀝니다.</strong>
          </p>
          
          {/* Concrete time-sensitive offer */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/30">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-yellow-300 mr-3" />
              <span className="text-lg font-semibold">오늘만 특별 제공</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-yellow-300">즉시 받는 혜택:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 정밀 자세 분석 리포트 (₩50,000 상당)</li>
                  <li>• 개인 맞춤 운동 프로그램 (₩80,000 상당)</li>
                  <li>• 3주 개선 플랜 가이드 (₩30,000 상당)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-yellow-300">추가 보너스:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 물리치료사 1:1 상담 (₩100,000 상당)</li>
                  <li>• 실시간 자세 알림 앱 (₩20,000 상당)</li>
                  <li>• 평생 무료 업데이트</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <span className="text-lg font-bold">총 ₩280,000 상당 → </span>
              <span className="text-3xl font-bold text-yellow-300">완전 무료</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group text-lg">
              <Camera className="w-5 h-5 mr-2" />
              지금 즉시 자세 점수 확인하기
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-200 transform hover:scale-105">
              실제 개선 사례 보기
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {urgentBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center text-sm text-red-100 bg-white/10 rounded-lg p-3">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                {benefit}
              </div>
            ))}
          </div>
          
          {/* Social proof with urgency */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2,847명</div>
                <p className="text-sm text-red-100">오늘 자세 점검 완료</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">94%</div>
                <p className="text-sm text-red-100">3주 내 통증 완화</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <p className="text-sm text-red-100">사용자 만족도</p>
              </div>
            </div>
          </div>
          
          {/* Final emotional push */}
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-lg p-4 mb-6 border border-yellow-400/30">
            <p className="text-yellow-100 font-medium">
              💡 <strong>잠깐!</strong> 지금 이 페이지를 닫으면 내일도 똑같은 통증으로 깰 수 있습니다.
              <br />
              <span className="text-white">30초만 투자해서 평생 건강을 지키세요.</span>
            </p>
          </div>
          
          <p className="text-sm text-red-200">
            * 웹캠 또는 카메라가 있는 모든 디바이스에서 사용 가능
            <br className="hidden md:block" />
            개인정보는 절대 저장되지 않으며, 모든 분석은 안전하게 처리됩니다.
          </p>
        </div>
      </div>
    </section>
      )
  } 