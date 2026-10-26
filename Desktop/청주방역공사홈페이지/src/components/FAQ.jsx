import { useState } from 'react'
import './FAQ.css'

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(null)

  const faqs = [
    {
      question: '방역은 얼마나 자주 해야 하나요?',
      answer: '공간과 상황에 따라 다릅니다. 가정은 계절별로, 음식점은 주 1-2회, 학원은 주 1회 정도를 권장합니다. 상세한 상담 후 맞춤 계획을 세워드립니다.',
    },
    {
      question: '가정집도 방역이 가능한가요?',
      answer: '네, 가능합니다. 가정의 특성에 맞는 안전한 약제와 방법을 사용하여 방역을 진행합니다.',
    },
    {
      question: '음식점 정기 방역도 가능한가요?',
      answer: '가능합니다. 음식점의 영업을 방해하지 않도록 영업 시간 전후에 전문적인 방역을 제공합니다.',
    },
    {
      question: '방역 후 바로 공간을 사용할 수 있나요?',
      answer: '안전을 위해 통풍 및 건조 시간을 거친 후 사용하시길 권장합니다. 방역 후 구체적인 사용 시간은 상담 시 안내해드립니다.',
    },
    {
      question: '비용은 어떻게 결정되나요?',
      answer: '방역 대상, 넓이, 방역 종류 등을 종합적으로 고려하여 맞춤 견적을 제공합니다. 무료 상담에서 자세히 안내해드립니다.',
    },
    {
      question: '상담 전에 준비해야 할 것이 있나요?',
      answer: '방역이 필요한 공간의 사진이나 넓이 정보가 있으면 상담이 더욱 원활합니다. 하지만 필수는 아니며 상담 시 함께 확인할 수 있습니다.',
    },
  ]

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header text-center">
          <h2>자주 묻는 질문</h2>
          <p>방역에 대해 궁금한 점들을 확인하세요</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${activeIdx === idx ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
