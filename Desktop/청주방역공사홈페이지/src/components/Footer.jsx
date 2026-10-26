import './Footer.css'
import { COMPANY_INFO } from '../constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{COMPANY_INFO.name}</h3>
            <ul>
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`}>대표전화: {COMPANY_INFO.phone}</a>
              </li>
              <li>주소: {COMPANY_INFO.address}</li>
              <li>사업자등록번호: {COMPANY_INFO.businessNumber}</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>서비스</h4>
            <ul>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('services').scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  방역 서비스
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('faq').scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('contact').scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  상담 신청
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>정책</h4>
            <ul>
              <li>
                <a href="#privacy">개인정보처리방침</a>
              </li>
              <li>
                <a href="#terms">이용약관</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} 청주방역공사. All rights reserved.
            <br />
            <small>전문적이고 신뢰할 수 있는 방역·소독 서비스</small>
          </p>
        </div>
      </div>
    </footer>
  )
}
