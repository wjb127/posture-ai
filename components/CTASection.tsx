'use client'

import React from 'react'
import { Camera, ArrowRight, CheckCircle, Sparkles } from 'lucide-react'

export default function CTASection() {
  const benefits = [
    "무료 체험 가능",
    "가입 절차 없음",
    "즉시 사용 가능",
    "모바일 지원"
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            지금 시작하면 무료!
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            건강한 자세, 
            <br className="md:hidden" />
            지금 바로 시작하세요
          </h2>
          
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            PosturAI와 함께 올바른 자세를 되찾고, 
            <br className="hidden md:block" />
            더 건강하고 활기찬 일상을 만들어보세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
              <Camera className="w-5 h-5 mr-2" />
              무료로 자세 분석 받기
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200 transform hover:scale-105">
              서비스 둘러보기
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center text-sm text-primary-100">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                {benefit}
              </div>
            ))}
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1분</div>
                <p className="text-sm text-primary-100">빠른 분석</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15,000+</div>
                <p className="text-sm text-primary-100">만족한 사용자</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">94%</div>
                <p className="text-sm text-primary-100">개선 체감률</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-primary-200 mt-8">
            * 웹캠 또는 카메라가 있는 디바이스에서 사용 가능합니다.
            <br className="hidden md:block" />
            개인정보는 안전하게 보호되며, 로컬에서 처리됩니다.
          </p>
        </div>
      </div>
    </section>
  )
} 