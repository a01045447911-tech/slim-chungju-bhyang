import './Hero.css'
import { COMPANY_INFO } from '../constants'

export default function Hero() {
  const handleContactClick = () => {
    const contactForm = document.getElementById('contact')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-text">
              <h1 className="hero-title">
                청주지역 의무소독, 해충방제,
                <br />
                정기 방역 관리 전문
              </h1>
              <p className="hero-subtitle">
                가정부터 상가, 회사, 관공서까지
                <br />
                현장에 맞는 방역 서비스를 제공합니다.
              </p>
              <div className="hero-ctas">
                <button className="btn btn-primary" onClick={handleContactClick}>
                  무료 상담 신청
                </button>
                <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-secondary">
                  <span>📞</span> 전화 상담
                </a>
              </div>
            </div>

            <div className="hero-image">
              <div className="image-placeholder">
                <img src="/images/hero.jpg" alt="청주방역공사 대표 이미지" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
