'use client'

import React from 'react'
import { AlertTriangle, Clock, TrendingDown, Users } from 'lucide-react'

export default function ProblemSection() {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "거북목 증후군",
      description: "장시간 스마트폰과 컴퓨터 사용으로 목이 앞으로 빠지는 현상",
      stat: "성인 80%"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-orange-500" />,
      title: "어깨 불균형",
      description: "한쪽 어깨가 올라가거나 둥글어지는 라운드 숄더 증상",
      stat: "직장인 70%"
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: "허리 통증",
      description: "잘못된 앉은 자세로 인한 만성 허리 통증과 디스크 위험",
      stat: "하루 6시간+"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "골반 틀어짐",
      description: "불균형한 자세로 인한 골반 비대칭과 하체 순환 장애",
      stat: "20-40대 60%"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            현대인의 자세, 
            <span className="gradient-text"> 이대로 괜찮을까요?</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            하루 종일 스마트폰과 컴퓨터 앞에서 보내는 현대인들. 
            <br className="hidden md:block" />
            모르는 사이 우리 몸은 심각한 자세 불균형을 겪고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center card-hover group"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                {problem.title}
              </h3>
              
              <p className="text-secondary-600 mb-4 text-sm leading-relaxed">
                {problem.description}
              </p>
              
              <div className="inline-flex items-center bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                {problem.stat}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              방치하면 더 심각해집니다
            </h3>
            <p className="text-secondary-600 mb-6 text-lg">
              단순한 자세 불편함이 만성 통증, 디스크, 관절염으로 발전할 수 있습니다.
              <br className="hidden md:block" />
              지금 바로 당신의 자세를 점검해보세요.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">89%</div>
                <p className="text-sm text-secondary-600">목과 어깨 통증 경험</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">76%</div>
                <p className="text-sm text-secondary-600">허리 통증으로 병원 방문</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">3배</div>
                <p className="text-sm text-secondary-600">디스크 발생 위험 증가</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 