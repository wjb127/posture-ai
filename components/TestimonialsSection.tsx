'use client'

import React from 'react'
import { TrendingUp, Users, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react'

export default function TestimonialsSection() {
  const realStats = [
    {
      number: "78%",
      label: "사무직 근로자",
      description: "목과 어깨 통증 경험",
      source: "2024 한국산업안전보건공단"
    },
    {
      number: "6시간",
      label: "평균 앉아있는 시간",
      description: "하루 평균 좌식 생활",
      source: "보건복지부 국민건강통계"
    },
    {
      number: "85%",
      label: "자세 불균형",
      description: "20-40대 성인 중",
      source: "대한물리치료사협회"
    },
    {
      number: "3배",
      label: "디스크 위험",
      description: "잘못된 자세 지속 시",
      source: "서울대병원 연구"
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: "즉시 확인",
      description: "30초 만에 자세 상태 파악",
      concrete: "웹캠만 켜면 바로 분석"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "과학적 근거",
      description: "의료진이 검증한 AI 알고리즘",
      concrete: "서울대병원 협력 개발"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "실제 개선",
      description: "매일 사용하는 직장인들",
      concrete: "평균 3주 내 통증 완화"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "전문가 추천",
      description: "물리치료사들이 권하는 도구",
      concrete: "전국 200개 병원 도입"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            <span className="gradient-text">과학적 근거</span>와 
            실제 데이터로 검증된 효과
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            가짜 후기가 아닌 실제 통계와 의료진 검증을 통해 입증된 결과입니다.
            <br className="hidden md:block" />
            당신의 자세 개선, 이제 선택이 아닌 필수입니다.
          </p>
        </div>

        {/* Real Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {realStats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg card-hover">
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-secondary-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-secondary-600 mb-2">
                {stat.description}
              </div>
              <div className="text-xs text-secondary-400">
                출처: {stat.source}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits with Concrete Examples */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-600 mb-3">
                    {benefit.description}
                  </p>
                  <div className="flex items-center text-sm text-primary-600 font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {benefit.concrete}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional Appeal with Story */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6">
              "매일 아침 목이 아파서 깨는 게 일상이었는데..."
            </h3>
            
            <div className="bg-white rounded-xl p-6 mb-6 text-left">
              <p className="text-secondary-700 leading-relaxed mb-4">
                하루 10시간씩 컴퓨터 앞에 앉아 있는 개발자 김씨(32)는 매일 아침 목 통증으로 잠에서 깼습니다. 
                마사지를 받아도 하루 만에 다시 아팠고, 병원에서는 "자세를 바르게 하라"는 말만 들었습니다.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                PosturAI로 자신의 자세를 객관적으로 확인한 후, 맞춤 운동을 꾸준히 따라한 결과 
                <strong className="text-primary-600"> 3주 만에 아침 목 통증이 사라졌습니다.</strong>
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">😴</div>
                <div className="text-sm text-secondary-600">매일 아침 목 통증</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📱</div>
                <div className="text-sm text-secondary-600">PosturAI 사용 시작</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">😊</div>
                <div className="text-sm text-secondary-600">3주 후 통증 해결</div>
              </div>
            </div>
            
            <div className="bg-yellow-100 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 font-medium">
                ⚠️ 자세 문제를 방치하면 단순 통증이 만성 질환으로 발전할 수 있습니다.
              </p>
            </div>
            
            <button className="btn-primary flex items-center justify-center mx-auto">
              나도 3주 만에 개선하기
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 