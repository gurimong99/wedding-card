"use client";

import { useState } from "react";

const navItems = [
  { label: "샘플", href: "#samples" },
  { label: "제작상품", href: "#products" },
  { label: "기능", href: "#features" },
  { label: "제작방법", href: "#process" },
];

const sampleCards = [
  {
    title: "Dear Spring",
    names: "민준 & 서아",
    date: "2026.10.24 SAT",
    mood: "화사한 가든 웨딩",
    image: "/assets/sample-couple-garden.png",
  },
  {
    title: "Soft Moment",
    names: "도윤 & 하린",
    date: "2026.11.07 SAT",
    mood: "차분한 스튜디오",
    image: "/assets/sample-couple-studio.png",
  },
  {
    title: "Night Promise",
    names: "지후 & 연서",
    date: "2026.12.12 SAT",
    mood: "시티 나이트 무드",
    image: "/assets/sample-couple-evening.png",
  },
];

const products = [
  {
    label: "Mobile Invitation",
    title: "모바일 청첩장",
    description: "사진, 예식 정보, 갤러리, 지도, 계좌 안내를 하나의 링크로.",
  },
  {
    label: "Wedding Clip",
    title: "식전 영상",
    description: "두 사람의 사진을 감성적인 영상 흐름으로 구성합니다.",
  },
  {
    label: "Thanks Card",
    title: "감사장",
    description: "예식 후 고마운 마음을 모바일 카드로 전할 수 있습니다.",
  },
];

const features = [
  "무료 시안 제작",
  "모바일 최적화",
  "갤러리 구성",
  "지도 안내",
  "마음 전하기",
  "카카오 공유",
];

const processSteps = [
  {
    title: "샘플 선택",
    description: "마음에 드는 디자인을 먼저 고릅니다.",
  },
  {
    title: "정보 입력",
    description: "예식 일시, 장소, 사진과 인사말을 넣습니다.",
  },
  {
    title: "무료 확인",
    description: "완성된 모바일 화면을 보고 공개 여부를 결정합니다.",
  },
];

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="site-header" aria-label="상단 메뉴">
        <a className="brand" href="#" aria-label="Wedding Card App 홈">
          <span className="brand-mark">W</span>
          <span>Wedding Card</span>
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="ghost-button" type="button">
            로그인
          </button>
          <button className="primary-button small" type="button">
            무료 제작
          </button>
        </div>
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
        <nav className={`mobile-nav ${isNavOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() => setIsNavOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">무료로 만들어보고 결정하는 모바일 청첩장</p>
            <h1>예쁜 샘플을 고르면 청첩장이 바로 시작됩니다</h1>
            <p className="hero-description">
              커플 사진과 예식 정보만 준비하세요. 모바일 청첩장, 식전 영상,
              감사장까지 결혼 초대에 필요한 화면을 한곳에서 제작합니다.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#samples">
                샘플로 시작하기
              </a>
              <a className="text-button" href="#products">
                제작상품 보기
              </a>
            </div>
            <dl className="hero-stats" aria-label="서비스 지표">
              <div>
                <dt>0원</dt>
                <dd>시안 먼저 제작</dd>
              </div>
              <div>
                <dt>3분</dt>
                <dd>첫 미리보기 완성</dd>
              </div>
              <div>
                <dt>ALL</dt>
                <dd>청첩장부터 감사장까지</dd>
              </div>
            </dl>
          </div>

          <div className="hero-sample-stack" aria-label="청첩장 샘플 미리보기">
            {sampleCards.map((sample, index) => (
              <article className={`hero-phone phone-${index + 1}`} key={sample.title}>
                <div className="phone-speaker" />
                <div className="hero-phone-screen">
                  <img src={sample.image} alt={`${sample.names} 샘플 사진`} />
                  <div className="sample-overlay">
                    <span>{sample.title}</span>
                    <strong>{sample.names}</strong>
                    <em>{sample.date}</em>
                  </div>
                </div>
              </article>
            ))}
            <div className="floating-note">
              <strong>무료 시안</strong>
              <span>만들어보고 결정하세요</span>
            </div>
          </div>
        </section>

        <section className="quick-start" aria-label="빠른 시작">
          <strong>청첩장 샘플 선택</strong>
          <span>사진과 문구 입력</span>
          <span>모바일 미리보기</span>
          <span>링크 공유</span>
        </section>

        <section className="section products" id="products">
          <div className="section-heading center">
            <p className="eyebrow">Wedding Products</p>
            <h2>결혼 준비에 필요한 모바일 제작 상품</h2>
            <p>
              초대 전부터 예식 후 감사 인사까지 이어지는 구성을 한 서비스
              안에서 고를 수 있게 준비했습니다.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <span>{product.label}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <button type="button">샘플 보기</button>
              </article>
            ))}
          </div>
        </section>

        <section className="section samples" id="samples">
          <div className="section-heading">
            <p className="eyebrow">Invitation Samples</p>
            <h2>커플 사진이 돋보이는 샘플 디자인</h2>
            <p>
              실제 모바일 화면처럼 보이도록 커버 사진, 이름, 날짜, 무드가
              함께 들어간 샘플입니다.
            </p>
          </div>
          <div className="sample-grid">
            {sampleCards.map((sample) => (
              <article className="sample-card" key={sample.title}>
                <div className="sample-phone">
                  <img src={sample.image} alt={`${sample.mood} 샘플`} />
                  <div className="sample-overlay">
                    <span>{sample.title}</span>
                    <strong>{sample.names}</strong>
                    <em>{sample.date}</em>
                  </div>
                </div>
                <div>
                  <h3>{sample.mood}</h3>
                  <p>{sample.names} · {sample.date}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section features" id="features">
          <div className="section-heading center compact">
            <p className="eyebrow">Included Features</p>
            <h2>모바일 청첩장 기본 기능</h2>
          </div>
          <div className="feature-chip-grid">
            {features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </section>

        <section className="section process" id="process">
          <div className="process-copy">
            <p className="eyebrow">Free Preview Flow</p>
            <h2>먼저 만들고, 마음에 들 때 공개하세요</h2>
            <p>
              제작 단계는 짧게, 확인은 모바일 화면 그대로. 공개 전까지는
              부담 없이 샘플을 바꿔볼 수 있는 흐름을 목표로 했습니다.
            </p>
          </div>
          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="pricing" id="pricing">
          <div>
            <p className="eyebrow">Start Free</p>
            <h2>지금 샘플로 무료 제작을 시작하세요</h2>
            <p>
              마음에 드는 디자인을 고르고, 두 사람의 사진과 예식 정보를 넣어
              모바일 초대 화면을 확인해보세요.
            </p>
          </div>
          <button className="primary-button light" type="button">
            무료 시안 만들기
          </button>
        </section>
      </main>

      <footer className="site-footer">
        <span>Wedding Card App</span>
        <span>모바일 청첩장 · 식전영상 · 감사장</span>
      </footer>
    </>
  );
}
