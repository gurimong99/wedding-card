# Wedding Card App

Next.js 기반 모바일 청첩장 제작 서비스입니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 확인할 수 있습니다.

## 네이버 로그인 설정

네이버 개발자센터에서 애플리케이션을 만든 뒤 아래 환경변수를 설정하면
`/api/auth/naver` 경로로 네이버 OAuth 로그인이 시작됩니다.

```bash
NAVER_CLIENT_ID=your_naver_client_id
NAVER_REDIRECT_URI=http://localhost:3000/api/auth/naver/callback
```

## 구성

- `app/page.tsx`: 메인 페이지
- `app/layout.tsx`: 메타데이터와 루트 레이아웃
- `app/globals.css`: 반응형 스타일
- `public/assets/hero-invitation-workspace.png`: 생성형 히어로 이미지
