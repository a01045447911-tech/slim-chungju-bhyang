import './Gallery.css'

export default function Gallery() {
  const galleryImages = [
    { src: '/images/gallery1.jpg', alt: '방역 현장 1' },
    { src: '/images/gallery2.jpg', alt: '방역 현장 2' },
    { src: '/images/gallery3.jpg', alt: '방역 현장 3' },
    { src: '/images/gallery4.jpg', alt: '방역 현장 4' },
    { src: '/images/gallery5.jpg', alt: '방역 현장 5' },
    { src: '/images/gallery6.jpg', alt: '방역 현장 6' },
  ]

  return (
    <section className="gallery">
      <div className="container">
        <div className="section-header text-center">
          <h2>방역 현장 사진</h2>
          <p>청주방역공사의 실제 작업 현장을 확인하세요</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, idx) => (
            <div key={idx} className="gallery-item" style={{ animationDelay: `${(idx % 3) * 0.1}s` }}>
              <div className="gallery-placeholder">
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
