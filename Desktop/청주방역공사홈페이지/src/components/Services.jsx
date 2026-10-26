import './Services.css'

export default function Services() {
  const services = [
    {
      icon: '🏠',
      title: '가정 방역',
      problem: '벌레가 자꾸 보이고 위생관리가 걱정돼요',
      solution: '전문 약제를 사용한 효과적인 가정용 방역',
      cta: '상담하기',
    },
    {
      icon: '🍽️',
      title: '음식점·카페 방역',
      problem: '음식점의 위생 관리가 중요한데 방역이 필요해요',
      solution: '음식점 맞춤 정기 방역으로 청결한 환경 유지',
      cta: '상담하기',
    },
    {
      icon: '🎓',
      title: '학원·어린이집 방역',
      problem: '아이들이 다니는 공간을 깨끗하게 지켜주고 싶어요',
      solution: '안전하고 신뢰할 수 있는 학원·어린이집 방역',
      cta: '상담하기',
    },
    {
      icon: '🏢',
      title: '사무실·상가 방역',
      problem: '사무실의 위생 관리와 직원 건강이 중요해요',
      solution: '정기적인 사무실·상가 방역으로 쾌적한 환경 조성',
      cta: '상담하기',
    },
    {
      icon: '🐛',
      title: '해충 방역',
      problem: '바퀴벌레, 쥐 등 해충이 자주 보여요',
      solution: '효과적인 해충 방역으로 쾌적한 공간 회복',
      cta: '상담하기',
    },
    {
      icon: '🔄',
      title: '정기 방역관리',
      problem: '지속적인 방역 관리가 필요해요',
      solution: '맞춤 주기의 정기 방역으로 안정적인 환경 유지',
      cta: '상담하기',
    },
  ]

  const handleServiceCta = () => {
    const contactForm = document.getElementById('contact')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header text-center">
          <h2>청주방역공사의 방역 서비스</h2>
          <p>각 공간과 상황에 맞는 전문 방역 서비스를 제공합니다</p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card"
              style={{ animationDelay: `${(idx % 3) * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>

              <div className="service-content">
                <div className="service-item">
                  <label>이런 상황이라면</label>
                  <p>{service.problem}</p>
                </div>

                <div className="service-item">
                  <label>이렇게 해결합니다</label>
                  <p>{service.solution}</p>
                </div>
              </div>

              <button className="btn btn-service" onClick={handleServiceCta}>
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
