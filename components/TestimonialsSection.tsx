'use client'

import React from 'react'
import { Star, Quote, CheckCircle } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "김민수",
      role: "개발자",
      age: "29세",
      rating: 5,
      review: "하루 종일 컴퓨터 앞에 앉아있다 보니 거북목이 심해졌는데, PosturAI 덕분에 3주 만에 많이 개선됐어요. 실시간으로 자세를 체크해주니까 의식적으로 바른 자세를 유지하게 되더라고요.",
      improvement: "거북목 70% 개선",
      duration: "3주"
    },
    {
      name: "이지영",
      role: "디자이너",
      age: "26세",
      rating: 5,
      review: "어깨가 항상 결려서 마사지를 자주 받았는데, 맞춤 운동 추천 기능이 정말 좋아요. 간단한 스트레칭만으로도 어깨 통증이 많이 줄었습니다.",
      improvement: "어깨 통증 80% 감소",
      duration: "2주"
    },
    {
      name: "박준호",
      role: "사무직",
      age: "34세",
      rating: 5,
      review: "허리 디스크 초기 진단을 받고 나서 자세 교정이 시급했는데, AI 분석으로 정확히 어느 부분이 문제인지 알 수 있어서 좋았어요. 운동 루틴도 따라하기 쉽게 되어있어서 꾸준히 하고 있습니다.",
      improvement: "허리 통증 60% 완화",
      duration: "4주"
    },
    {
      name: "최수연",
      role: "학생",
      age: "22세",
      rating: 5,
      review: "온라인 수업을 많이 듣다 보니 자세가 구부정해졌는데, 모바일로도 쉽게 체크할 수 있어서 편해요. 친구들에게도 추천했습니다!",
      improvement: "전체 자세 개선",
      duration: "2주"
    }
  ]

  const stats = [
    {
      number: "94%",
      label: "사용자 만족도",
      description: "3주 이내 자세 개선 체감"
    },
    {
      number: "15,000+",
      label: "누적 사용자",
      description: "매일 증가하는 사용자"
    },
    {
      number: "89%",
      label: "통증 감소",
      description: "4주 내 통증 완화 경험"
    },
    {
      number: "4.8/5",
      label: "평균 평점",
      description: "앱스토어 & 구글플레이"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            실제 사용자들의 
            <span className="gradient-text"> 성공 스토리</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            PosturAI와 함께 자세를 개선한 사용자들의 생생한 후기를 확인해보세요.
            <br className="hidden md:block" />
            당신도 건강한 자세를 되찾을 수 있습니다.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-secondary-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-secondary-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-500">
                    {testimonial.role} · {testimonial.age}
                  </div>
                </div>
                <div className="ml-auto">
                  <Quote className="w-6 h-6 text-primary-300" />
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-secondary-600 mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {testimonial.improvement}
                </div>
                <div className="text-sm text-secondary-500">
                  {testimonial.duration} 사용
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                눈에 보이는 변화
              </h3>
              <p className="text-secondary-600 text-lg">
                꾸준한 사용으로 이런 변화를 경험할 수 있습니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">😰</div>
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">사용 전</h4>
                <ul className="text-sm text-secondary-600 space-y-1">
                  <li>만성 목/어깨 통증</li>
                  <li>구부정한 자세</li>
                  <li>피로감 증가</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">💪</div>
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">사용 중</h4>
                <ul className="text-sm text-secondary-600 space-y-1">
                  <li>실시간 자세 체크</li>
                  <li>맞춤 운동 실행</li>
                  <li>점진적 개선</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">😊</div>
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">사용 후</h4>
                <ul className="text-sm text-secondary-600 space-y-1">
                  <li>바른 자세 유지</li>
                  <li>통증 완화</li>
                  <li>활력 증가</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 