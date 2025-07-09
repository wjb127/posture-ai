# PosturAI Landing Page

AI 기반 자세교정 분석 서비스 **PosturAI**의 랜딩페이지입니다.

## 🚀 프로젝트 개요

PosturAI는 최첨단 AI 기술을 활용하여 사용자의 자세를 실시간으로 분석하고, 개인 맞춤형 교정 운동을 추천하는 헬스케어 SaaS 서비스입니다.

### 주요 기능
- 웹캠 또는 사진 업로드를 통한 실시간 자세 분석
- AI 기반 목, 어깨, 허리, 골반 정렬 상태 분석
- 시각적 피드백으로 문제 부위 표시
- 개인 맞춤형 교정 운동 추천
- 일일/주간 자세 개선 추적

### 타겟 사용자
- 20~40대 사무직 직장인
- 헬스케어에 관심이 있는 사용자
- 홈트레이닝 사용자
- 자세 교정이 필요한 현대인

## 🛠 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (권장)

## 📦 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인할 수 있습니다.

### 3. 빌드

```bash
npm run build
```

### 4. 프로덕션 실행

```bash
npm start
```

## 📁 프로젝트 구조

```
postur-ai-landing/
├── app/
│   ├── globals.css          # 글로벌 스타일
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 메인 페이지
├── components/
│   ├── HeroSection.tsx      # 히어로 섹션
│   ├── ProblemSection.tsx   # 문제 제시 섹션
│   ├── FeaturesSection.tsx  # 기능 소개 섹션
│   ├── HowItWorksSection.tsx # 사용법 섹션
│   ├── TestimonialsSection.tsx # 사용자 후기 섹션
│   ├── CTASection.tsx       # 최종 CTA 섹션
│   └── Footer.tsx           # 푸터
├── public/                  # 정적 파일
├── tailwind.config.js       # Tailwind 설정
├── next.config.js           # Next.js 설정
├── tsconfig.json            # TypeScript 설정
└── package.json             # 패키지 정보
```

## 🎨 디자인 컨셉

- **컬러 팔레트**: 차분한 블루/퍼플 그라데이션
- **디자인 철학**: Calm + Tech (Headspace/Grammarly 스타일)
- **사용자 경험**: 직관적이고 친근한 인터페이스
- **반응형**: 모바일 우선 디자인

## 📱 반응형 디자인

- **Desktop**: 1024px 이상
- **Tablet**: 768px - 1023px
- **Mobile**: 767px 이하

모든 섹션이 다양한 디바이스에서 최적화되어 표시됩니다.

## 🔧 커스터마이징

### 컬러 변경
`tailwind.config.js`에서 컬러 팔레트를 수정할 수 있습니다:

```javascript
colors: {
  primary: {
    // 메인 브랜드 컬러
  },
  secondary: {
    // 보조 컬러
  },
  accent: {
    // 강조 컬러
  }
}
```

### 콘텐츠 수정
각 섹션의 콘텐츠는 해당 컴포넌트 파일에서 수정할 수 있습니다.

## 🚀 배포

### Vercel 배포 (권장)

1. GitHub에 프로젝트 push
2. [Vercel](https://vercel.com)에 로그인
3. 프로젝트 import 후 배포

### 기타 플랫폼
- Netlify
- AWS Amplify
- Firebase Hosting

## 📈 성능 최적화

- **이미지 최적화**: Next.js Image 컴포넌트 사용
- **코드 분할**: 자동 코드 스플리팅
- **SEO 최적화**: 메타데이터 및 구조화된 데이터
- **웹 폰트**: Google Fonts 최적화 로딩

## 🔒 보안 고려사항

- CSP (Content Security Policy) 설정
- 환경 변수를 통한 민감 정보 관리
- HTTPS 강제 적용

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 언제든 연락주세요.

- **Email**: contact@posturai.com
- **GitHub Issues**: 이슈 등록을 통한 문의

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**PosturAI**와 함께 건강한 자세, 건강한 삶을 시작하세요! 💪 