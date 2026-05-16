"use client";

import { useState } from "react";

const navItems = [
  { label: "청첩장 만들기", href: "#start" },
  { label: "마이페이지", href: "#mypage" },
  { label: "고객센터", href: "#support" },
];

const invitationCards = [
  {
    title: "dear spring",
    image: "/assets/sample-couple-garden.png",
    className: "card-left-far",
  },
  {
    title: "wedding",
    image: "/assets/sample-couple-evening.png",
    className: "card-left",
  },
  {
    title: "our wedding day",
    image: "/assets/sample-couple-studio.png",
    className: "card-center",
  },
  {
    title: "soft letter",
    image: "/assets/sample-couple-garden.png",
    className: "card-right",
  },
  {
    title: "minimal vow",
    image: "/assets/sample-couple-evening.png",
    className: "card-right-far",
  },
];

const reviewCards = [
  "예상보다 훨씬 고급스럽고 수정도 쉬웠어요.",
  "부모님께 보내드렸는데 링크 하나로 끝나서 편했습니다.",
  "사진 분위기에 맞게 청첩장 톤이 잡혀서 만족해요.",
  "친구들이 어디서 만들었냐고 계속 물어봤어요.",
  "모바일에서 열리는 속도가 빨라서 좋았습니다.",
  "필요한 기능만 깔끔하게 있어서 헷갈리지 않았어요.",
  "네이버 로그인으로 바로 시작해서 편했어요.",
  "예식 전날까지 문구 수정할 수 있어 안심됐어요.",
];

const reasons = [
  {
    number: "01",
    title: "누구나 쉽게 제작",
    description: "사진과 예식 정보만 넣으면 모바일 화면에 맞게 정리됩니다.",
  },
  {
    number: "02",
    title: "링크 하나로 초대",
    description: "카카오톡, 문자, DM 어디서든 같은 청첩장을 공유할 수 있어요.",
  },
  {
    number: "03",
    title: "언제든 빠른 수정",
    description: "날짜, 장소, 문구가 바뀌어도 직접 다시 고칠 수 있습니다.",
  },
  {
    number: "04",
    title: "모든 기능 기본 제공",
    description: "갤러리, 지도, 방명록, RSVP, 마음 전하기를 한 번에 담았습니다.",
  },
];

const steps = [
  {
    number: "01",
    title: "네이버로 빠른 연결",
    description: "복잡한 가입 없이 네이버 계정으로 시작합니다.",
  },
  {
    number: "02",
    title: "AI가 자동으로 완성",
    description: "입력한 정보와 사진 분위기에 맞춰 초안을 구성합니다.",
  },
  {
    number: "03",
    title: "마음에 들 때까지 수정",
    description: "공유 전까지 문구와 사진, 순서를 자유롭게 다듬습니다.",
  },
];

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#">
          WeddingLetter<span>.</span>
        </a>
        <nav className={`main-nav ${isNavOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.label}
              onClick={() => setIsNavOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="naver-login" href="/api/auth/naver">
          네이버 로그인
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={isNavOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero" id="start">
          <p className="section-kicker">AI Mobile Wedding Invitation</p>
          <h1>이런 청첩장을 만들 수 있어요</h1>
          <p className="hero-copy">소중한 순간, 아름답게 전하세요</p>
          <div className="invitation-stage" aria-label="모바일 청첩장 미리보기">
            {invitationCards.map((card) => (
              <article className={`phone-card ${card.className}`} key={card.title}>
                <img src={card.image} alt={`${card.title} 청첩장 샘플`} />
                <div>
                  <span>{card.title}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="slider-dots" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="hero-actions">
            <a className="primary-cta" href="/api/auth/naver">
              시작하기
            </a>
            <a className="secondary-cta" href="#reviews">
              미리보기
            </a>
          </div>
        </section>

        <section className="score-section" id="reviews">
          <p className="section-kicker">Real Review · Happy Story</p>
          <h2>
            먼저 만든 커플들의
            <br />
            검증된 만족도
          </h2>
          <div className="score">5.0</div>
          <p className="score-caption">실제 제작 경험을 바탕으로 한 높은 만족도</p>
          <div className="review-highlight">
            <strong>후기에서 가장 많이 보이는 이야기</strong>
            <span>예쁘다</span>
            <span>쉽다</span>
            <span>수정이 편하다</span>
          </div>
        </section>

        <section className="review-wall">
          <p className="section-kicker">Love Review</p>
          <h2>
            먼저 경험한 예비부부의
            <br />
            생생한 후기
          </h2>
          <div className="review-grid">
            {reviewCards.map((review, index) => (
              <article className="review-card" key={review}>
                <div className="stars">★★★★★</div>
                <strong>{index % 2 === 0 ? "정말 만족해요" : "추천하고 싶어요"}</strong>
                <p>{review}</p>
                <span>2026.05.{String(index + 10).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="benefit-section">
          <p className="section-kicker">Special Event</p>
          <h2>
            지금 만들면 받는
            <br />
            세 가지 혜택
          </h2>
          <div className="benefit-preview">
            <article>
              <span>01</span>
              <strong>무료 제작</strong>
              <p>청첩장 초안은 부담 없이 먼저 만들어볼 수 있어요.</p>
            </article>
            <article>
              <span>02</span>
              <strong>기본 기능 포함</strong>
              <p>지도, 방명록, RSVP, 갤러리를 기본으로 제공합니다.</p>
            </article>
            <article>
              <span>03</span>
              <strong>공유 링크 제공</strong>
              <p>완성 후 바로 전달할 수 있는 링크가 생성됩니다.</p>
            </article>
          </div>
        </section>

        <section className="dark-section">
          <p className="section-kicker">Why Mobile Invitation</p>
          <h2>
            모바일 청첩장,
            <br />
            무엇이 중요할까요?
          </h2>
          <p className="dark-copy">모든 하객에게 제대로 전해지는 초대 경험을 만듭니다.</p>
          <div className="reason-grid">
            {reasons.map((reason) => (
              <article className="reason-card" key={reason.title}>
                <span>{reason.number}</span>
                <strong>{reason.title}</strong>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mood-section" id="mypage">
          <p className="section-kicker">Brand Philosophy</p>
          <h2>
            오래 보아도 새로운
            <br />
            시간이 머무는 디자인
          </h2>
          <p>
            과한 장식보다 두 사람의 사진과 문장이 오래 남도록, 부드러운 여백과
            섬세한 움직임을 중심에 둡니다.
          </p>
        </section>

        <section className="how-section" id="support">
          <p className="section-kicker">How It Works</p>
          <h2>
            무료 시안을 만들어보고
            <br />
            마음에 들면 결정하세요
          </h2>
          <div className="step-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.title}>
                <span>{step.number}</span>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <a className="black-cta" href="/api/auth/naver">
            지금 무료로 시작하기
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">WeddingLetter<span>.</span></div>
        <div className="footer-grid">
          <div>
            <strong>Service</strong>
            <a href="#start">청첩장 만들기</a>
            <a href="#mypage">마이페이지</a>
          </div>
          <div>
            <strong>Legal</strong>
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
          </div>
          <div>
            <strong>Contact</strong>
            <a href="mailto:support@weddingletter.app">support@weddingletter.app</a>
          </div>
        </div>
        <p>© 2026 WeddingLetter. All rights reserved.</p>
      </footer>
    </>
  );
}
