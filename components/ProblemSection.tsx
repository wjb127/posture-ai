'use client'

import React from 'react'
import { AlertTriangle, Clock, TrendingDown, Users, Skull, Heart } from 'lucide-react'

export default function ProblemSection() {
  const problems = [
    {
      icon: <Skull className="w-8 h-8 text-red-500" />,
      title: "거북목 증후군",
      description: "목뼈 C자 커브가 일직선으로 변형되어 신경과 혈관을 압박합니다",
      stat: "성인 78%",
      consequence: "두통, 어지럼증, 손 저림",
      timeframe: "평균 5년 후 심각한 증상"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-orange-500" />,
      title: "라운드 숄더",
      description: "어깨가 앞으로 말려 흉곽을 압박하여 호흡량이 30% 감소합니다",
      stat: "직장인 85%",
      consequence: "만성 피로, 집중력 저하",
      timeframe: "3년 내 호흡기 문제"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
      title: "허리 디스크",
      description: "잘못된 앉은 자세로 디스크 내압이 서 있을 때보다 40% 증가합니다",
      stat: "30대 60%",
      consequence: "하지 마비, 수술 필요",
      timeframe: "2년 내 디스크 탈출"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "골반 비대칭",
      description: "골반 틀어짐으로 다리 길이 차이가 생기고 무릎 관절이 손상됩니다",
      stat: "여성 90%",
      consequence: "관절염, 보행 장애",
      timeframe: "10년 후 인공관절 수술"
    }
  ]

  return (
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

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg card-hover group border-l-4 border-red-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                  {problem.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-secondary-900">
                      {problem.title}
                    </h3>
                    <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                      {problem.stat}
                    </div>
                  </div>
                  
                  <p className="text-secondary-600 mb-4 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="text-secondary-700 font-medium">결과: {problem.consequence}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-red-600 font-medium">{problem.timeframe}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-red-200">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-red-500 mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-900">
                시간이 지날수록 더 심각해집니다
              </h3>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6 text-left">
              <p className="text-secondary-700 leading-relaxed mb-4">
                <strong>실제 사례:</strong> 개발자 A씨(29세)는 "목이 좀 뻣뻣하다" 정도로 생각했습니다. 
                2년 후, 극심한 두통과 손 저림으로 병원을 찾았을 때는 이미 
                <strong className="text-red-600"> 목뼈 2-3번 사이 디스크가 돌출된 상태</strong>였습니다.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                의사는 말했습니다: <em>"진작 자세 교정을 했다면 충분히 예방할 수 있었던 문제입니다."</em>
              </p>
            </div>
            
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
            
            <button className="btn-primary mx-auto">
              내 자세 상태 긴급 점검하기
            </button>
          </div>
        </div>
      </div>
    </section>
      )
  } 