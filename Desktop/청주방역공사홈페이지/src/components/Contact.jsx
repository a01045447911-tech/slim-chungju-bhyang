import { useState } from 'react'
import './Contact.css'
import { COMPANY_INFO } from '../constants'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    reason: '',
    time: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      '상담 신청이 접수되었습니다.\n곧 연락드리겠습니다.\n\n(실제 운영 시 서버로 전송되어야 합니다.)'
    )
    setFormData({
      name: '',
      phone: '',
      location: '',
      reason: '',
      time: '',
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-text">
            <h2>우리 공간도 방역이 필요할까요?</h2>
            <p>
              사진이나 간단한 상황만 알려주셔도
              <br />
              상담해드립니다.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름을 입력해주세요"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">연락처 *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="010-xxxx-xxxx"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">방역 장소 *</label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              >
                <option value="">선택해주세요</option>
                <option value="home">가정</option>
                <option value="restaurant">음식점·카페</option>
                <option value="academy">학원·어린이집</option>
                <option value="office">사무실·상가</option>
                <option value="other">기타</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="reason">방역이 필요한 이유</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="간단하게 설명해주세요"
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="time">희망 상담 시간</label>
              <input
                type="text"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="예: 평일 오후 2시 이후"
              />
            </div>

            <button type="submit" className="btn btn-submit">
              무료 상담 신청
            </button>
          </form>

          <div className="contact-phone">
            <h4>전화로 바로 상담받고 싶으신가요?</h4>
            <a href={`tel:${COMPANY_INFO.phone}`} className="phone-link">
              <span>📞</span>
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <p>평일 {COMPANY_INFO.operatingHours.weekday} | 토요일 {COMPANY_INFO.operatingHours.saturday}</p>
            <p className="text-small">{COMPANY_INFO.operatingHours.closed}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
