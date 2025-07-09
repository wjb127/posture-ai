'use client'

import React from 'react'
import { Camera, Sparkles, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
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
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI 기반 자세 분석 서비스
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
              <span className="gradient-text">AI로 바로잡는</span>
              <br />
              당신의 자세
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              웹캠이나 사진 한 장으로 실시간 자세 분석을 받아보세요. 
              <br className="hidden md:block" />
              AI가 찾아낸 문제점과 맞춤 교정 운동으로 건강한 생활습관을 만들어보세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center justify-center group">
                <Camera className="w-5 h-5 mr-2" />
                지금 자세 점검하기
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="btn-secondary">
                서비스 둘러보기
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-secondary-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                무료 체험 가능
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                실시간 분석
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                맞춤 운동 추천
              </div>
            </div>
          </div>
          
          {/* Right content - Mock device/preview */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Phone mockup */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-[9/16] bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Camera className="w-10 h-10 text-primary-600" />
                    </div>
                    <p className="text-secondary-600 font-medium">AI 자세 분석</p>
                    <p className="text-sm text-secondary-500 mt-1">실시간 피드백</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-3 animate-float">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-secondary-600">정상 자세</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-3 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-secondary-600">목 교정 필요</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 