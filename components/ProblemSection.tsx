'use client'

import React, { useState } from 'react'
import { AlertTriangle, Clock, TrendingDown, Users, Heart, Zap } from 'lucide-react'
import PreorderModal from './PreorderModal'

export default function ProblemSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: "목 디스크 진행",
      description: "거북목 자세로 인한 경추 압박",
      timeframe: "6개월 내 악화",
      severity: "심각",
      stats: "사무직 78% 경험"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-orange-600" />,
      title: "어깨 불균형",
      description: "한쪽 어깨가 올라가거나 말린 상태",
      timeframe: "3개월 내 고착화",
      severity: "중간",
      stats: "재택근무자 85% 해당"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      title: "허리 통증",
      description: "장시간 앉아있기로 인한 요추 변형",
      timeframe: "1년 내 만성화",
      severity: "높음",
      stats: "성인 90% 경험"
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "순환 장애",
      description: "자세 불량으로 인한 혈액순환 저하",
      timeframe: "즉시 영향",
      severity: "중간",
      stats: "하루 6시간+ 좌식"
    }
  ]

  const handleCTAClick = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              지금 이 순간에도 진행 중인 문제
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              <span className="text-red-600">매일 6시간</span> 앉아있는 당신,
              <br />
              <span className="gradient-text">몸이 보내는 경고 신호</span>를 무시하고 계신가요?
            </h2>
            
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              "그냥 조금 결리는 것 뿐"이라고 생각하시나요? 
              <br className="hidden md:block" />
              <strong className="text-red-600">이미 당신의 몸은 돌이킬 수 없는 변화를 겪고 있습니다.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-red-500">
                <div className="mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-secondary-600 text-sm mb-3">
                  {problem.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-secondary-500">진행 속도</span>
                    <span className="font-medium text-red-600">{problem.timeframe}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-secondary-500">심각도</span>
                    <span className="font-medium text-orange-600">{problem.severity}</span>
                  </div>
                  <div className="text-xs text-secondary-500 mt-2">
                    📊 {problem.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Story-driven case study */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-16 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                실제 사례: 개발자 김○○씨 (29세)
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                "2년 전만 해도 괜찮았는데..."
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-red-600 mb-3">2년 전 (2022년)</h4>
                <div className="bg-green-50 rounded-lg p-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      가끔 목이 뻣뻣한 정도
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      스트레칭으로 금세 회복
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      운동 후 컨디션 좋음
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-red-600 mb-3">현재 (2024년)</h4>
                <div className="bg-red-50 rounded-lg p-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      매일 아침 목 통증으로 기상
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      두통과 어깨 결림 일상화
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <strong>목 디스크 진단 (C5-C6)</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 font-medium text-center">
                💡 <strong>의사 소견:</strong> "2년 전에 교정했다면 3주면 충분했을 텐데, 
                지금은 최소 6개월 치료가 필요합니다."
              </p>
            </div>
          </div>

          {/* Urgency with concrete numbers */}
          <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6">
              <span className="text-red-600">지금 확인하지 않으면</span>
              <br />
              당신도 같은 길을 걷게 됩니다
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-white rounded-lg p-4">
                <div className="text-3xl font-bold text-red-600 mb-2">89%</div>
                <p className="text-sm text-secondary-600">목과 어깨 통증으로<br />일상생활 지장</p>
              </div>
              <div className="text-center bg-white rounded-lg p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">₩2,400만</div>
                <p className="text-sm text-secondary-600">척추 수술 평균 비용<br />(재활 기간 6개월)</p>
              </div>
              <div className="text-center bg-white rounded-lg p-4">
                <div className="text-3xl font-bold text-red-600 mb-2">5년</div>
                <p className="text-sm text-secondary-600">자세 불량으로 인한<br />평균 수명 단축</p>
              </div>
            </div>
            
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 font-medium text-center">
                ⚠️ <strong>지금 당장 확인하지 않으면, 내년에는 더 심각한 상태가 될 수 있습니다</strong>
              </p>
            </div>
            
            <button 
              onClick={handleCTAClick}
              className="btn-primary mx-auto"
            >
              내 자세 상태 긴급 점검하기
            </button>
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