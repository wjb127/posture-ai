'use client'

import React, { useState } from 'react'
import { AlertTriangle, Clock, DollarSign, Users, Target } from 'lucide-react'
import PreorderModal from './PreorderModal'
import { trackButtonClick } from '@/lib/analytics'

export default function ProblemSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const problems = [
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      stat: "78%",
      title: "사무직 근로자",
      description: "목과 어깨 통증을 겪고 있습니다",
      color: "text-red-600"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-orange-600" />,
      stat: "₩2.4M",
      title: "평균 수술 비용",
      description: "디스크 수술 시 발생하는 비용입니다",
      color: "text-orange-600"
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
      stat: "6시간",
      title: "일일 앉아있는 시간",
      description: "척추 건강에 심각한 영향을 미칩니다",
      color: "text-yellow-600"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      stat: "3주",
      title: "평균 개선 기간",
      description: "적절한 교정 운동으로 개선 가능합니다",
      color: "text-green-600"
    }
  ]

  const handleCTAClick = async (buttonText: string) => {
    // Track button click first
    await trackButtonClick(buttonText, 'ProblemSection')
    
    // Then open modal
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              현대인의 자세 문제, 더 이상 방치할 수 없습니다
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              <span className="text-red-600">매일 아침 목이 아파서 깨는</span>
              <br />
              일상을 끝내세요
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              지금 이 순간에도 잘못된 자세로 인해 당신의 척추는 조금씩 망가지고 있습니다. 
              <br className="hidden md:block" />
              <strong>하지만 아직 늦지 않았습니다.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="mb-4">
                  {problem.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 ${problem.color}`}>
                  {problem.stat}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                <span className="text-red-600">위험 신호</span>를 놓치지 마세요
              </h3>
              <p className="text-secondary-600 text-lg">
                이런 증상이 있다면 즉시 자세 점검이 필요합니다
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">목과 어깨 통증</h4>
                    <p className="text-sm text-secondary-600">아침에 일어날 때 목이 뻣뻣하고 어깨가 무겁다</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">두통과 눈의 피로</h4>
                    <p className="text-sm text-secondary-600">컴퓨터 작업 후 머리가 아프고 눈이 피곤하다</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">허리 통증</h4>
                    <p className="text-sm text-secondary-600">오래 앉아있으면 허리가 아프고 뻣뻣하다</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">거북목 증상</h4>
                    <p className="text-sm text-secondary-600">목이 앞으로 나오고 어깨가 둥글게 말린다</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">집중력 저하</h4>
                    <p className="text-sm text-secondary-600">자세 불편함으로 인해 업무 집중이 어렵다</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">수면 장애</h4>
                    <p className="text-sm text-secondary-600">목과 어깨 통증으로 잠을 제대로 못 잔다</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">
                    실제 개발자의 이야기
                  </h4>
                  <p className="text-red-700 text-sm mb-2">
                    "2년 전부터 목 통증이 시작되었는데, 병원에서 일자목 진단을 받았습니다. 
                    처음엔 단순한 근육 통증인 줄 알았는데, 이제는 디스크 초기 단계라고 하네요."
                  </p>
                  <p className="text-red-700 text-sm font-medium">
                    - 실제 개발자 A씨 (29세)
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => handleCTAClick('내 자세 상태 긴급 점검하기')}
                className="bg-red-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                내 자세 상태 긴급 점검하기
              </button>
              <p className="text-sm text-secondary-500 mt-3">
                30초면 충분합니다. 지금 바로 확인해보세요.
              </p>
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