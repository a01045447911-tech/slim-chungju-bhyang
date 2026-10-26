// 회사 기본 정보 (모든 컴포넌트에서 일관되게 사용됨)
export const COMPANY_INFO = {
  name: '청주방역공사',
  phone: '010-9576-0021',
  address: '충북 청주시 청원구 오창읍 두릉유리로 207 1층 8호',
  businessNumber: '[사업자등록번호 입력]', // 실제 번호로 교체
  operatingHours: {
    weekday: '09:00 - 18:00',
    saturday: '10:00 - 15:00',
    closed: '일요일, 공휴일',
  },
  serviceArea: '청주시 (전 지역) 및 인근 지역',
}

// 네이버 지도 연동 시 필요한 좌표 (추후 설정)
// 네이버 지도 API 문서: https://api.naver.com/v1/map/
export const MAP_CONFIG = {
  // 네이버 지도 API 사용 시
  address: COMPANY_INFO.address,
  // 다음은 네이버 지도에서 주소를 검색한 후 좌표를 입력
  latitude: null, // 추후 실제 좌표로 교체
  longitude: null, // 추후 실제 좌표로 교체
  // 또는 카카오맵 API
  // kakaoMapKey: 'YOUR_KAKAO_API_KEY'
}
