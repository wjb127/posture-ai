import React from 'react'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link 
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            홈으로 돌아가기
          </Link>
          
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-primary-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">개인정보처리방침</h1>
          </div>
          
          <p className="text-gray-600">
            최종 수정일: {new Date().toLocaleDateString('ko-KR')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 개인정보 수집 및 이용 목적</h2>
            <div className="text-gray-700 space-y-2">
              <p>PosturAI는 다음과 같은 목적으로 개인정보를 수집하고 이용합니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>서비스 사전예약 및 런칭 알림</li>
                <li>고객 문의 및 상담 응답</li>
                <li>마케팅 정보 제공 (동의 시에만)</li>
                <li>서비스 개선 및 통계 분석</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 수집하는 개인정보 항목</h2>
            <div className="text-gray-700 space-y-2">
              <p>필수 수집 항목:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>이메일 주소</li>
                <li>서비스 이용 기록</li>
              </ul>
              <p className="mt-4">선택 수집 항목:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>마케팅 수신 동의 여부</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 개인정보 보유 및 이용기간</h2>
            <div className="text-gray-700 space-y-2">
              <p>수집된 개인정보는 다음과 같이 보유됩니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>사전예약 정보: 서비스 정식 런칭 후 1년</li>
                <li>마케팅 정보: 동의 철회 시까지</li>
                <li>법령에 의한 보관: 관련 법령에 따른 보관기간</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 개인정보 제3자 제공</h2>
            <div className="text-gray-700">
              <p>PosturAI는 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 단, 다음의 경우에는 예외로 합니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>법령에 의한 요구가 있는 경우</li>
                <li>사용자의 별도 동의가 있는 경우</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 개인정보 처리 위탁</h2>
            <div className="text-gray-700">
              <p>PosturAI는 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁합니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>데이터베이스 관리: Supabase</li>
                <li>이메일 발송: (런칭 시 별도 공지)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 이용자의 권리</h2>
            <div className="text-gray-700">
              <p>이용자는 다음과 같은 권리를 가집니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>개인정보 열람 요구</li>
                <li>개인정보 수정·삭제 요구</li>
                <li>개인정보 처리 정지 요구</li>
                <li>마케팅 수신 동의 철회</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 개인정보 보호책임자</h2>
            <div className="text-gray-700">
              <p>개인정보 보호에 관한 문의사항은 아래로 연락해 주세요:</p>
              <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                <p>이메일: privacy@posturai.com</p>
                <p>전화: 1588-0000</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 개인정보처리방침 변경</h2>
            <div className="text-gray-700">
              <p>
                이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 