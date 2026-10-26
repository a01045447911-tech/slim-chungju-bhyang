import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <h1>청주방역공사</h1>
            </div>

            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
              <button onClick={() => handleNavClick('services')}>서비스</button>
              <button onClick={() => handleNavClick('targets')}>방역 대상</button>
              <button onClick={() => handleNavClick('reviews')}>이용 후기</button>
              <button onClick={() => handleNavClick('faq')}>FAQ</button>
              <button onClick={() => handleNavClick('contact')}>상담문의</button>
            </nav>

            <div className="header-cta">
              <button
                className="cta-button"
                onClick={() => {
                  const contactForm = document.getElementById('contact')
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                무료 상담
              </button>
            </div>

            <button
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
