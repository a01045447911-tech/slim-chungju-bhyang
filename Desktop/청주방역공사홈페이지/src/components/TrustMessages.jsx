import './TrustMessages.css'

export default function TrustMessages() {
  const messages = [
    {
      icon: '🎯',
      title: '현장 중심 방역',
      description: '각 현장의 특성을 파악하고 맞춤형 방역을 진행합니다.',
    },
    {
      icon: '🏠',
      title: '공간별 맞춤 관리',
      description: '가정, 음식점, 학원 등 공간별 맞춤 방역 계획을 수립합니다.',
    },
    {
      icon: '✅',
      title: '꼼꼼한 사후관리',
      description: '방역 후 고객만족도와 효과를 확인하고 지속적으로 관리합니다.',
    },
    {
      icon: '🤝',
      title: '상담부터 시공까지',
      description: '첫 상담부터 방역 완료까지 책임감 있게 진행합니다.',
    },
  ]

  return (
    <section className="trust-messages">
      <div className="container">
        <div className="section-header text-center">
          <h2>왜 청주방역공사를 선택할까요?</h2>
        </div>

        <div className="messages-grid">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className="message-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="message-icon">{msg.icon}</div>
              <h3>{msg.title}</h3>
              <p>{msg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
