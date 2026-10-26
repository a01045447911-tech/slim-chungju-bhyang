import './Process.css'

export default function Process() {
  const steps = [
    { number: '01', title: '상담', description: '방역이 필요한 상황과 요구사항을 파악합니다' },
    { number: '02', title: '현장 확인', description: '직접 방문하여 현장을 꼼꼼히 진단합니다' },
    {
      number: '03',
      title: '공간별 방역 계획',
      description: '공간의 특성에 맞는 맞춤형 방역 계획을 수립합니다',
    },
    { number: '04', title: '방역 진행', description: '전문 약제와 장비로 효과적인 방역을 진행합니다' },
    { number: '05', title: '관리 및 안내', description: '사후 관리와 사용 안내를 통해 만족도를 높입니다' },
  ]

  return (
    <section className="process">
      <div className="container">
        <div className="section-header text-center">
          <h2>방역 진행 과정</h2>
          <p>체계적인 5단계 프로세스로 안심할 수 있습니다</p>
        </div>

        <div className="process-steps">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="process-step"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {idx < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
