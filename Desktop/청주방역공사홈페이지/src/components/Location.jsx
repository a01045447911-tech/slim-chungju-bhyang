import './Location.css'
import { COMPANY_INFO, MAP_CONFIG } from '../constants'

export default function Location() {
  return (
    <section className="location">
      <div className="container">
        <div className="section-header text-center">
          <h2>청주 및 인근 지역 서비스</h2>
          <p>{COMPANY_INFO.serviceArea}의 빠르고 신뢰할 수 있는 방역 서비스를 제공합니다</p>
        </div>

        <div className="location-content">
          <div className="location-info">
            <h3>📍 서비스 지역</h3>
            <p className="service-area">
              {COMPANY_INFO.serviceArea.split(' ').slice(0, 1).join(' ')}
              <br />
              및 인근 지역
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <label>대표전화</label>
                <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
              </div>
              <div className="detail-item">
                <label>주소</label>
                <p>{COMPANY_INFO.address}</p>
              </div>
              <div className="detail-item">
                <label>사업자등록번호</label>
                <p>{COMPANY_INFO.businessNumber}</p>
              </div>
            </div>
          </div>

          <div className="location-map">
            <div className="map-placeholder">
              {/* 네이버 지도 API 연동 예시:
                  네이버 클라우드 플랫폼에서 API 키를 받은 후,
                  index.html의 <head>에 다음 코드를 추가하세요:
                  <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID"></script>
                  
                  그 다음 이 파일의 useEffect에서 다음과 같이 초기화하세요:
                  const mapElement = document.getElementById('map');
                  const map = new naver.maps.Map(mapElement, {
                    center: new naver.maps.LatLng(${MAP_CONFIG.latitude}, ${MAP_CONFIG.longitude}),
                    zoom: 15
                  });
                  
                  주소: ${MAP_CONFIG.address}
              */}
              <svg width="100%" height="100%" viewBox="0 0 500 400" fill="none">
                <rect width="500" height="400" fill="#e8f2ff" />
                <circle cx="250" cy="200" r="60" fill="#0066cc" opacity="0.2" />
                <circle cx="250" cy="200" r="40" fill="#0066cc" opacity="0.3" />
                <circle cx="250" cy="200" r="20" fill="#0066cc" />
                <text
                  x="250"
                  y="210"
                  textAnchor="middle"
                  fontSize="16"
                  fill="#ffffff"
                  fontWeight="bold"
                >
                  청주방역공사
                </text>
                <text
                  x="250"
                  y="340"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#0066cc"
                  opacity="0.6"
                >
                  {COMPANY_INFO.address}
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div className="location-note">
          <p>
            <strong>✅ 주소와 전화번호가 constants.js에 통합되었습니다.</strong>
            <br />
            <strong>🗺️ 지도는 다음과 같이 연동할 수 있습니다:</strong>
            <br />
            1. 네이버 클라우드 플랫폼에서 Maps API 키 발급
            <br />
            2. index.html의 &lt;head&gt;에 네이버 맵 스크립트 추가
            <br />
            3. Location.jsx의 useEffect에서 map 초기화
            <br />
            4. MAP_CONFIG의 latitude, longitude 입력
            <br />
            <small>문서: src/components/Location.jsx 및 src/constants.js 참고</small>
          </p>
        </div>
      </div>
    </section>
  )
}
