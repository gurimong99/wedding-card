"use client";

import { useState } from "react";

const navItems = [
  "모바일청첩장",
  "식전영상",
  "감사영상",
  "축가영상",
  "프로포즈",
  "제작내역",
  "이벤트",
];

const benefits = [
  {
    icon: "play",
    title: "선제작 후결제",
    description: "시안을 무료로 제작해보고 마음에 들면 구매해주세요",
  },
  {
    icon: "time",
    title: "연중무휴 빠른제작",
    description: "휴일에도 심야에도 평균 30분 이내에 제작이 가능합니다",
  },
  {
    icon: "heart",
    title: "마음에 들 때까지",
    description: "구매확정 이후에도 사용기간 내에는 수정이 가능합니다",
  },
];

const invitationItems = [
  {
    title: "모먼트",
    badge: "NEW",
    price: "9,900원",
    originalPrice: "14,000원",
    image: "/assets/sample-couple-garden.png",
    names: "최도현  |  이하나",
    date: "2026년 10월 24일 토요일 오후 12시 30분",
    venue: "아펠가모 광화문 B2 로스타뇨홀",
    tone: "bright",
  },
  {
    title: "미니멀",
    badge: "NEW",
    price: "9,900원",
    originalPrice: "14,000원",
    image: "/assets/sample-couple-studio.png",
    names: "김서준  |  이서아",
    date: "2026.11.07 SAT. 1:30 PM",
    venue: "아펠가모 잠실 2층 라온홀",
    tone: "frame",
  },
];

const videoItems = [
  {
    title: "선물",
    price: "14,000원",
    originalPrice: "20,000원",
    photos: "33장",
    duration: "2분 56초",
    music: "선물 - 멜로망스",
    changeable: true,
    image: "/assets/hero-invitation-workspace.png",
  },
  {
    title: "평생너만",
    price: "18,000원",
    originalPrice: "20,000원",
    photos: "30장",
    duration: "2분 30초",
    music: "평생너만 - 홍종현, 진세연",
    changeable: false,
    image: "/assets/sample-couple-evening.png",
  },
  {
    title: "심플 슬라이드",
    price: "14,000원",
    originalPrice: "20,000원",
    photos: "23장",
    duration: "2분 20초",
    music: "아로하 - 조정석",
    changeable: true,
    image: "/assets/sample-couple-studio.png",
  },
  {
    title: "우주메리미",
    price: "14,000원",
    originalPrice: "20,000원",
    photos: "36장",
    duration: "2분 39초",
    music: "우주를 건너 - 백예린",
    changeable: true,
    image: "/assets/sample-couple-garden.png",
  },
];

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="header-top">
            <a className="brand" href="#">
              FROM WEDDING
            </a>
            <div className="account-menu">
              <span>gurimong99</span>
              <button type="button">로그아웃</button>
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
          </div>
          <nav className={`main-nav ${isNavOpen ? "is-open" : ""}`}>
            {navItems.map((item) => (
              <a href="#" key={item} onClick={() => setIsNavOpen(false)}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="benefit-band" aria-label="제작 혜택">
          <div className="page-container benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-item" key={benefit.title}>
                <span className={`benefit-icon ${benefit.icon}`} />
                <div>
                  <h2>{benefit.title}</h2>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="catalog-section page-container">
          <div className="section-title">
            <h1>신규 모바일청첩장</h1>
            <p>계좌번호, 카톡송금, 휴대방명록, BGM, RSVP, 내비게이션 제공</p>
          </div>
          <div className="product-grid invitation-grid">
            {invitationItems.map((item) => (
              <article className="product-card invitation-card" key={item.title}>
                <div className={`invitation-preview ${item.tone}`}>
                  <div className="paper-card">
                    <div className="invitation-date">26 | 10 | 24</div>
                    <span>SATURDAY</span>
                    <img src={item.image} alt={`${item.title} 청첩장 샘플`} />
                    <strong>{item.names}</strong>
                    <p>{item.date}</p>
                    <p>{item.venue}</p>
                  </div>
                </div>
                <ProductMeta
                  title={item.title}
                  badge={item.badge}
                  price={item.price}
                  originalPrice={item.originalPrice}
                />
              </article>
            ))}
          </div>
        </section>

        <section className="catalog-section page-container">
          <div className="section-title">
            <h1>지금 인기있는 식전영상</h1>
            <p>두 분의 소중한 추억을 담은 영상으로 더욱 특별하게</p>
          </div>
          <div className="product-grid video-grid">
            {videoItems.map((item) => (
              <article className="product-card video-card" key={item.title}>
                <div className="video-preview">
                  <img src={item.image} alt={`${item.title} 식전영상 샘플`} />
                  <div className="video-overlay">
                    <span>WEDDING MOVIE</span>
                    <strong>{item.title}</strong>
                  </div>
                </div>
                <ProductMeta
                  title={item.title}
                  price={item.price}
                  originalPrice={item.originalPrice}
                />
                <dl className="video-spec">
                  <div>
                    <dt>사진 장수</dt>
                    <dd>{item.photos}</dd>
                  </div>
                  <div>
                    <dt>재생 시간</dt>
                    <dd>{item.duration}</dd>
                  </div>
                  <div>
                    <dt>배경 음악</dt>
                    <dd>
                      {item.music}
                      {item.changeable && <em>변경가능</em>}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container footer-inner">
          <nav>
            <a href="#">프롬웨딩</a>
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">제휴문의</a>
          </nav>
          <p>상호명 : 웨딩카드앱 | 서울시 용산구 한강대로 104 가동 305호</p>
          <p>대표자 : 김청첩 | 이메일 : support@wedding-card.app</p>
          <p>사업자등록번호 : 809-05-02792</p>
        </div>
      </footer>
    </>
  );
}

function ProductMeta({
  title,
  badge,
  price,
  originalPrice,
}: {
  title: string;
  badge?: string;
  price: string;
  originalPrice: string;
}) {
  return (
    <div className="product-meta">
      <div>
        <h3>
          {title}
          {badge && <span>{badge}</span>}
        </h3>
        <p>
          <strong>{price}</strong>
          <del>{originalPrice}</del>
        </p>
      </div>
      <div className="product-actions">
        <button className="sample-button" type="button">
          샘플보기
        </button>
        <button className="make-button" type="button">
          제작하기
        </button>
      </div>
    </div>
  );
}
