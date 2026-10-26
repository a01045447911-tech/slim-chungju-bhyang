import './Reviews.css'

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="section-header text-center">
          <h2>고객 후기</h2>
          <p>청주방역공사를 선택해주신 고객들의 이야기입니다</p>
        </div>

        <div className="reviews-placeholder">
          <div className="placeholder-content">
            <div className="placeholder-icon">⭐</div>
            <h3>실제 고객 후기 영역</h3>
            <p>
              실제 고객 후기가 준비되면 이 영역을 다음과 같이 구성할 수 있습니다:
              <br />
              <br />
              • 고객 이름, 사진, 별점
              <br />
              • 후기 내용
              <br />
              • 서비스 종류
              <br />
              <br />
              현재는 실제 후기가 없으므로 placeholder로 표시했습니다.
            </p>
            <small>src/components/Reviews.jsx 참고하여 실제 후기를 추가해주세요</small>
          </div>
        </div>
      </div>
    </section>
  )
}
