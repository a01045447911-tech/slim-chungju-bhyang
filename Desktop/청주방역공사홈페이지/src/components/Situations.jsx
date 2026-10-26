import './Situations.css'

export default function Situations() {
  const situations = [
    { emoji: '🪳', text: '벌레가 자꾸 보일 때' },
    { emoji: '🍽️', text: '음식점 위생관리가 걱정될 때' },
    { emoji: '👶', text: '아이들이 사용하는 공간을 관리하고 싶을 때' },
    { emoji: '🏚️', text: '오래된 건물의 위생관리가 필요할 때' },
    { emoji: '🔄', text: '정기적인 방역관리가 필요할 때' },
  ]

  const handleClick = () => {
    const contactForm = document.getElementById('contact')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="targets" className="situations">
      <div className="container">
        <div className="section-header text-center">
          <h2>이런 상황이라면 상담하세요</h2>
        </div>

        <div className="situations-list">
          {situations.map((situation, idx) => (
            <div
              key={idx}
              className="situation-item"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className="situation-emoji">{situation.emoji}</span>
              <span className="situation-text">{situation.text}</span>
            </div>
          ))}
        </div>

        <div className="situations-cta text-center">
          <button className="btn btn-primary btn-large" onClick={handleClick}>
            상담 신청하기
          </button>
        </div>
      </div>
    </section>
  )
}
