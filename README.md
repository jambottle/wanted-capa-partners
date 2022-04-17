# [에이팀벤처스(CAPA)] 프론트엔드 개발자 코딩 테스트

> This project is deployed with Heroku and Create React App.\
> You can check out my project here: **[wanted-capa-partners.herokuapp.com](https://wanted-capa-partners.herokuapp.com)**.

## 📁 프로젝트 개요

React와 TypeScript, JSON Server를 활용하여 대시보드 페이지를 구현하였습니다.\
(Figma를 통해 제시된) 반응형 레이아웃과 필터링 기능을 중심으로 테스트를 수행하였습니다.

<img width="1440" src="https://user-images.githubusercontent.com/72926450/163724970-57a8dd29-1357-48e2-b150-771fdcff3042.png">
<img width="1440" src="https://user-images.githubusercontent.com/72926450/163724972-a35bc881-97db-472d-a6c2-c3da171ae834.png">

## 📂 프로젝트 구조

```bash
.
├── public
│   ├── index.html
│   └── assets
├── server
│   ├── index.js           // JSON Server를 활용여 구축한 Mock API
│   └── db.json            // 요청서 항목들의 정보가 담긴 Mock Data
└── src
    ├── index.tsx
    ├── Router.tsx
    ├── pages
    │   └── DashBoard      // (상단 고정 NavBar를 제외한) 대시보드 페이지
    ├── components
    │   ├── NavBar
    │   │   └── MenuSlider // (모바일 환경에서만 열 수 있는) 메뉴 슬라이더
    │   ├── ReqCondition   // 필터링 적용 영역
    │   │   ├── FilterBox
    │   │   └── ToggleBox
    │   └── ReqList        // 필터링 결과 영역, 요청서 목록
    │       └── ReqItem    // 요청서 항목
    ├── constants
    ├── styles
    └── types
```

## 📑 구현 기능 상세

### 1. Navigation Bar (`NavBar` 컴포넌트)

- 상단 고정 Navigation Bar의 반응형 레이아웃 구현 (모바일 환경 고려)
  - 해당 컴포넌트는 모든 페이지에서 상단 고정이 유지될 수 있도록 `Router.tsx`에서 조치
- 모바일 환경에서만 열 수 있는 메뉴 슬라이더를 하위 컴포넌트로 추가 (`MenuSlider` 컴포넌트)
  - 메뉴 슬라이더는 화면 좌측에서 등장하며, 백그라운드 영역을 클릭하면 사라지도록 설계

### 2. Dashboard (`DashBoard` 페이지)

- useEffect Hook과 fetch 함수를 활용하여 Mock API 서버와의 통신 구현
  - JSON Server로 구축한 Mock API 서버로부터 페이지 접속 즉시 Data Fetching 실시
  - 불러온 데이터는 useState Hook의 상태 값으로 저장되며, 별도 파일에 지정해둔 타입 적용
- 필터링 적용 영역(`ReqCondition` 컴포넌트)과 결과 영역(`ReqList` 컴포넌트)을 매개
  - 각각의 필터링 적용 조건과 그에 따른 결과도 useState Hook의 새로운 상태 값으로 저장
  - 필터링 적용 영역에서 적용 조건이 바뀔 때마다 필터링 결과를 실시간 갱신하는 기능 구현
  - 갱신된 필터링 결과는 `ReqList` 컴포넌트에 props로 전달되어 요청서 목록 최신화

### 2-1. 필터링 적용 영역 (`ReqCondition` 컴포넌트)

- '가공방식 및 재료'에 대한 필터링을 체크박스로 처리 가능하도록 설계 (`FilterBox` 컴포넌트)
  - 체크박스 클릭 시, 해당 조건이 필터링에 적용되면서 상위 컴포넌트의 필터링 결과를 실시간 갱신
  - 해당 조건들에 한해 필터링 적용 시, 필터링 리셋 버튼이 등장하여 적용된 필터링을 초기화 가능
- '상담 중 여부'에 대한 필터링을 토글 버튼으로 처리 가능하도록 설계 (`ToggleBox` 컴포넌트)
  - 토글 버튼 클릭 시, 해당 조건이 필터링에 적용되면서 상위 컴포넌트의 필터링 결과를 실시간 갱신
  - 토글 버튼 클릭 시, useRef Hook을 활용하여 버튼의 위치 및 색상이 변화하는 효과 구현

### 2-2. 필터링 결과 영역 (`ReqList` 컴포넌트)

- 실시간으로 갱신된 필터링 결과를 props로 전달받아 map 함수를 활용하여 List Rendering 실시
- 필터링 조건에 맞는 요청서가 없는 경우, 확인 메시지를 표시하는 Conditional Rendering 실시
- `ReqItem` 컴포넌트의 규칙적인 정렬을 위해 Grid System 도입 (반응형 웹 환경 고려)

### 3. 기타

- **[HTML]** Semantic Tag의 적절한 활용을 위해 적극 노력 (main, section, article, nav, aside 등)
- **[CSS]** 기존 팀 프로젝트에서 수정이 필요했던 디자인 관련 오작동 발견 및 해결
  - 모바일 환경에서 스크롤 시, `MenuSlider` 컴포넌트의 height 설정 착오 → position 속성 값을 fixed로 수정
  - `ReqItem` 컴포넌트에 hover할 때마다 '상담중' 배지가 이동하는 오류 → position 기준점을 다른 태그로 변경
  - 각각의 스타일 시트마다 일관성 있는 코딩 컨벤션 적용 (스타일 시트 속성 순서 및 Nesting 규칙 통일 등)
- **[JavaScript]** 불필요하게 복잡한 로직 또는 불명확한 식별자의 경우, 보다 명료하게 정리/정돈 실시
- **[TypeScript]** 공통 적용이 가능한 타입의 경우, types 폴더에 저장해두었다가 필요할 때마다 활용

## ⚠️ 경고

- 이 프로젝트는 [에이팀벤처스(CAPA)](https://capa.ai)의 '프론트엔드 개발자 코딩 테스트'에 참여하기 위한 목적으로 진행되었습니다.
- 이 프로젝트의 코드를 활용하여 상업적 이득을 취하거나 무단으로 복제, 배포할 경우에는 저작권 침해 문제가 발생할 수 있습니다.
