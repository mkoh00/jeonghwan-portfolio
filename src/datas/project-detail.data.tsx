export const projectDetailData = [
	{
		id: 1,
		primaryColor: '#C66341',
		URLS: {
			githubURL: 'null',
			blogURL: 'null',
			serviceURL: 'https://carnaviranger.life-ranger.jp/Mopita/lp/MyCarNavi/Default.aspx',
			serviceBoolean: true,
		},
		title: '乗換MAPナビ (환승MAP내비)',
		subTitle: '일본 전역의 대중교통 정보를 종합적으로 안내하는 내비게이션 서비스',
		workTime: '2020.11.13 - 현재',
		organize: '안드로이드 앱 운영 및 유지보수',
		imgs: [
			'/imgs/projects/transferMap/transfer-overview.png',
			'/imgs/projects/transferMap/transfer-map2.png',
			'/imgs/projects/transferMap/transfer-map3.png',
			'/imgs/projects/transferMap/transfer-map4.png',
			'/imgs/projects/transferMap/transfer-map5.png',
			'/imgs/projects/transferMap/transfer-map6.png',
		],
		description: {
			topPart: (
				<p>
					<span className="font-bold">🏆 2022 Good Design Award 수상</span>
				</p>
			),
			bottomPart: (
				<p>
					<span className="font-bold">乗換MAPナビ</span>는 일본 전역의 대중교통 정보를 종합적으로 안내하기
					위해 개발된 내비게이션 서비스입니다. <br />
					사용자가 출발지부터 도착지까지 최적의 경로를 찾을 수 있도록 도어 투 도어 경로를 제공하며, 실시간
					대중교통 정보와 함께 개인화된 경로 추천 기능을 지원합니다. <br />
					이를 통해 사용자는 효율적인 이동 계획을 세우고, 교통 상황에 맞는 스마트한 대중교통 이용 경험을 누릴
					수 있습니다.
				</p>
			),
		},
		lists: [
			{
				title: '담당 기능',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						<ul>
							<li className="font-bold">모바일 구현 (Android)</li>
							<li className="px-3 text-lightgrey">
								- Mapbox SDK를 활용한 실시간 지도 렌더링 및 경로 안내 기능 개선
							</li>
							<li className="px-3 text-lightgrey">
								- VICS (Vehicle Information and Communication System)를 활용한 혼잡 예측 및 우회 경로
								안내 기능 개선
							</li>
							<li className="px-3 text-lightgrey">
								- MTI Ltd.의 자체 라이브러리를 활용한 실시간 대중교통 정보 제공 및 위치 기반 서비스 기능
								개선
							</li>
							<li className="px-3 text-lightgrey">- Firebase FCM을 통한 실시간 푸시 알림 구현</li>
						</ul>
						<ul>
							<li className="font-bold">서버 및 데이터 통신</li>
							<li className="px-3 text-lightgrey">
								- 다양한 교통 수단의 시간표 및 운행 정보 통합 관리 기능 개선
							</li>
							<li className="px-3 text-lightgrey">- Retrofit을 사용한 RESTful API 통신 구현</li>
							<li className="px-3 text-lightgrey">
								- GA4(Google Analytics 4)를 활용한 사용자 행동 데이터 수집 및 분석 기능 구현
							</li>
							<li className="px-3 text-lightgrey">
								- Asynchronous Task Manager를 활용한 비동기 작업 처리
							</li>
						</ul>
						<ul>
							<li className="font-bold">사용자 인터페이스 및 경험</li>
							<li className="px-3 text-lightgrey">- 사용자 친화적인 인터페이스 구현</li>
							<li className="px-3 text-lightgrey">- 사용자 피드백 수집 및 반영을 위한 시스템 개발</li>
						</ul>
						<ul>
							<li className="font-bold">멀티미디어 및 결제 시스템</li>
							<li className="px-3 text-lightgrey">
								- Media2 라이브러리를 활용한 멀티미디어 재생 및 관리
							</li>
							<li className="px-3 text-lightgrey">
								- Android Billing Client를 활용한 인앱 결제 기능 구현
							</li>
						</ul>
					</ul>
				),
			},
			{
				title: '기술 키워드',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						Java, Mapbox SDK, Google Play Services, Firebase, Retrofit, VICS, Google Analytics 4, AndroidX
						Lifecycle, Billing Client
					</ul>
				),
			},
			{
				title: '참고 자료',
				items: (
					<iframe
						className="w-full h-[500px]"
						style={{ height: '500px' }}
						src="https://carnaviranger.life-ranger.jp/Mopita/lp/MyCarNavi/Default.aspx"
						title="MyCarNavi Guide Page"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				),
			},
		],
	},
	{
		id: 2,
		primaryColor: '#4A6FA5',
		URLS: {
			githubURL: 'null',
			blogURL: 'null',
			serviceURL: 'null',
			serviceBoolean: false,
		},
		title: '4K Wi-Fi 홈 카메라',
		subTitle: '스마트하고 직관적인 홈 모니터링을 제공하는 IoT 기반 카메라 앱',
		workTime: '2021.12.01 - 2022.03.16',
		organize: '안드로이드 앱 개발',
		imgs: [
			'/imgs/projects/homecamera/homecamera-overview.png',
			'/imgs/projects/homecamera/homecamera1.jpg',
			'/imgs/projects/homecamera/homecamera2.jpg',
			'/imgs/projects/homecamera/homecamera3.jpg',
			'/imgs/projects/homecamera/homecamera4.jpg',
			'/imgs/projects/homecamera/homecamera5.jpg',
		],
		description: {
			bottomPart: (
				<p>
					<span className="font-bold">4K Wi-Fi 홈 카메라</span>는 실시간 4K 스트리밍, 움직임 감지 및 추적,
					그리고 녹화 영상 관리 기능을 통해 스마트하고 직관적인 홈 모니터링을 제공하는 IoT 기반 카메라
					앱입니다. <br />
					사용자가 언제 어디서나 집안의 상황을 실시간으로 확인할 수 있도록 지원하며, 고해상도의 비디오 품질을
					통해 세부적인 모니터링이 가능합니다. <br />
					또한, 움직임이 감지되면 즉시 알림을 보내어 보안 위협에 신속하게 대응할 수 있으며, 녹화된 영상은
					필요할 때 언제든지 재생할 수 있습니다.
				</p>
			),
		},
		lists: [
			{
				title: '담당 기능',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						<ul>
							<li className="font-bold">모바일 구현 (Android)</li>
							<li className="px-3 text-lightgrey">
								- LibVLC, MediaPlayer를 사용하여 RTSP URL을 통해 실시간 스트리밍
							</li>
							<li className="px-3 text-lightgrey">
								- 조이스틱 컨트롤을 통한 홈 카메라 방향 전환, 방향에 따른 커맨드 메세지 전달
							</li>
							<li className="px-3 text-lightgrey">
								- 움직임 감지 시 자동 녹화 및 움직임 추척, 단말에 특정 동작에 해당하는 커맨드 메세지
								전달
							</li>
							<li className="px-3 text-lightgrey">- 마이크 송출 및 스피커 기능</li>
						</ul>
						<ul>
							<li className="font-bold">서버 및 데이터 통신</li>
							<li className="px-3 text-lightgrey">- SocketViewModel을 통해 카메라의 전원 상태 제어</li>
							<li className="px-3 text-lightgrey">- powerOn 및 powerOff 메서드를 통해 소켓 연결 관리</li>
							<li className="px-3 text-lightgrey">
								- 소켓 프로그래밍을 사용하여 TCP 소켓을 통해 서버 통신
							</li>
							<li className="px-3 text-lightgrey">
								- OutputStream을 통해 명령을 서버로 전송하고, InputStream을 통해 서버로부터의 응답 수신
							</li>
							<li className="px-3 text-lightgrey">- sendCommand 메서드를 통해 명령 전송</li>
							<li className="px-3 text-lightgrey">
								- Kotlin의 코루틴을 사용하여 비동기적으로 소켓 통신 처리
							</li>
						</ul>
					</ul>
				),
			},
			{
				title: '기술 키워드',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						Kotlin, ViewModel, LiveData, Data Binding, LibVLC, Coroutines, Android Jetpack, View Binding
					</ul>
				),
			},
		],
	},
	{
		id: 3,
		primaryColor: '#A6001B',
		URLS: {
			githubURL: 'null',
			blogURL: 'null',
			serviceURL: 'https://biz.redcap.co.kr/rent/sub/rentacar/system.php',
			serviceBoolean: true,
		},
		title: '레드캡 모빌리티 시스템 (RMS)',
		subTitle: '법인 차량 관리 통합 솔루션 서비스',
		workTime: '2022.03.01 - 2022.11.13',
		organize: '크로스 플랫폼 앱 (Android, iOS), 웹 프론트엔드 개발',
		imgs: [
			'/imgs/projects/redcapMobilitySystem/rms-overview.png',
			'/imgs/projects/redcapMobilitySystem/rms-dispatch1.png',
			'/imgs/projects/redcapMobilitySystem/rms-dispatch2.png',
			'/imgs/projects/redcapMobilitySystem/rms-control1.png',
			'/imgs/projects/redcapMobilitySystem/rms-control2.png',
			'/imgs/projects/redcapMobilitySystem/rms-control3.png',
			'/imgs/projects/redcapMobilitySystem/rms-app1.png',
			'/imgs/projects/redcapMobilitySystem/rms-app2.png',
		],
		description: {
			bottomPart: (
				<p>
					<span className="font-bold">레드캡 모빌리티 시스템 (RMS)</span>는 기업의 법인 차량 관리를 효율적으로
					지원하는 통합 솔루션입니다. <br />
					이 시스템은 배차, 운행 일지 작성, 차량 위치 실시간 모니터링 등 다양한 기능을 제공하여 차량 관리
					업무를 간소화하고 운영 효율을 높입니다. <br />
					또한, PC와 모바일을 모두 지원하여 언제 어디서나 편리하게 차량 예약 및 반납이 가능합니다. <br />
					레드캡RMS를 통해 기업은 차량 관리의 번거로움을 해소하고, 효율적인 운행 관리를 실현할 수 있습니다.
				</p>
			),
		},
		lists: [
			{
				title: '모바일 담당 기능',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						<ul>
							<li className="font-bold">모바일 구현 (Android, iOS)</li>
							<li className="px-3 text-lightgrey">
								- React Navigation을 사용하여 앱의 네비게이션 스택 구성
							</li>
							<li className="px-3 text-lightgrey">- 로그인 상태에 따라 초기 화면 구분</li>
							<li className="px-3 text-lightgrey">- 사업자, 사업장별 차량 예약, 반납 기능 구현</li>
							<li className="px-3 text-lightgrey">- 스마트 키를 활용한 차량 컨트롤 기능 구현</li>
							<li className="px-3 text-lightgrey">
								- 이메일 인증 기능을 포함한 업무용 차량 대여 정보 화면 구현
							</li>
							<li className="px-3 text-lightgrey">
								- 차량 정보 표시, 렌터카 서비스 이용 내역 등 재사용 React 컴포넌트 구현
							</li>
						</ul>
						<ul>
							<li className="font-bold">API 통신 및 데이터 관리</li>
							<li className="px-3 text-lightgrey">- Apollo Client를 사용하여 GraphQL API와 통신</li>
							<li className="px-3 text-lightgrey">- GraphQL API 를 통한 FMS 서비스 기능 구현</li>
							<li className="px-3 text-lightgrey">- 인증 및 기본 HTTP 링크 설정</li>
							<li className="px-3 text-lightgrey">- 차량 사진 촬영 및 Amazon S3에 업로드 기능 구현</li>
							<li className="px-3 text-lightgrey">- Axios를 사용한 HTTP 요청 처리</li>
							<li className="px-3 text-lightgrey">
								- 데이터의 null 체크 및 기본값 반환을 위한 유틸리티 함수 구현
							</li>
						</ul>
						<ul>
							<li className="font-bold">유틸리티 및 공통 기능</li>
							<li className="px-3 text-lightgrey">
								- 화면 크기 비율에 따른 UI 요소 크기 계산을 위한 유틸리티 함수 구현
							</li>
							<li className="px-3 text-lightgrey">- 회원 가입 및 이메일 관련 정규식 체크 함수 구현</li>
						</ul>
					</ul>
				),
			},
			{
				title: '웹페이지 담당 기능',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						<ul>
							<li className="font-bold">웹페이지 프론트엔드 구현</li>
							<li className="px-3 text-lightgrey">
								- React Navigation을 사용하여 앱의 네비게이션 스택 구성
							</li>
							<li className="px-3 text-lightgrey">- 로그인 상태에 따라 초기 화면 구분</li>
							<li className="px-3 text-lightgrey">
								- 이메일 인증 기능을 포함한 업무용 차량 대여 정보 화면 구현
							</li>
							<li className="px-3 text-lightgrey">
								- 차량 정보 표시, 렌터카 서비스 이용 내역 등 재사용 React 컴포넌트 구현
							</li>
						</ul>
						<ul>
							<li className="font-bold">API 통신 및 데이터 관리</li>
							<li className="px-3 text-lightgrey">- Apollo Client를 사용하여 GraphQL API와 통신</li>
							<li className="px-3 text-lightgrey">- GraphQL API 를 통한 FMS 서비스 기능 구현</li>
							<li className="px-3 text-lightgrey">- 인증 및 기본 HTTP 링크 설정</li>
							<li className="px-3 text-lightgrey">- 차량 사진 촬영 및 Amazon S3에 업로드 기능 구현</li>
							<li className="px-3 text-lightgrey">- Axios를 사용한 HTTP 요청 처리</li>
							<li className="px-3 text-lightgrey">
								- 데이터의 null 체크 및 기본값 반환을 위한 유틸리티 함수 구현
							</li>
						</ul>
						<ul>
							<li className="font-bold">유틸리티 및 공통 기능</li>
							<li className="px-3 text-lightgrey">
								- 화면 크기 비율에 따른 UI 요소 크기 계산을 위한 유틸리티 함수 구현
							</li>
							<li className="px-3 text-lightgrey">- 회원 가입 및 이메일 관련 유틸리티 함수 구현</li>
						</ul>
					</ul>
				),
			},
			{
				title: '기술 키워드',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						React, ReactNative, TypeScript, Node.js, GraphQL, Apollo Client, Amazon S3, Axios
					</ul>
				),
			},
			{
				title: '참고 자료',
				items: (
					<iframe
						className="w-full h-[500px]"
						style={{ height: '500px' }}
						src="https://biz.redcap.co.kr/rent/sub/rentacar/system.php"
						title="RMS Guide Page"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				),
			},
		],
	},
	{
		id: 4,
		primaryColor: '#4A6FA5',
		URLS: {
			githubURL: 'null',
			blogURL: 'null',
			serviceURL: 'null',
			serviceBoolean: false,
		},
		title: '세종 스마트시티 실내주차장 내비게이션',
		subTitle: '실시간 차량 주차 유도와 경로 안내를 위한 비전 AI 기반 실내 내비게이션 서비스',
		workTime: '2022.12.19 - 2023.08.30',
		organize: '안드로이드 라이브러리 개발',
		imgs: [
			'/imgs/projects/sejongNavigation/sejong-navi-overview.png',
			'/imgs/projects/sejongNavigation/sejong-navi1.png',
			'/imgs/projects/sejongNavigation/sejong-navi2.png',
			'/imgs/projects/sejongNavigation/sejong-navi3.png',
		],
		description: {
			bottomPart: (
				<p>
					<span className="font-bold">세종 스마트시티 실내주차장 내비게이션</span> 프로젝트는 실내 주차장
					내비게이션 기능을 구현하기 위해 실시간 차량 주차 유도 및 관제 라이브러리를 개발한 프로젝트입니다.{' '}
					<br />이 라이브러리는 <span className="font-bold">비전 AI 기술</span>과{' '}
					<span className="font-bold">카메라 기반 주차 유도 시스템(APGS)</span>을 활용하여 차량의 주행 경로와
					빈 주차 공간을 실시간으로 파악하며, 사용자가 스마트폰 앱을 통해 직관적으로 빈 공간을 탐색할 수
					있도록 설계되었습니다. <br />
					개발된 라이브러리는 주차 공간의 데이터 수집, 분석, 그리고 경로 안내 기능을 하나로 통합하여, 복잡한
					실내 주차장에서도 원활한 사용자 경험을 제공합니다. <br />
					이를 통해 주차장의 운영 효율성을 높이고, 데이터 기반 관리가 가능한 실내 공간 내비게이션의 새로운
					표준을 제시합니다.
				</p>
			),
		},
		lists: [
			{
				title: '담당 기능',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						<ul>
							<li className="font-bold">실시간 경로 탐색 및 위치 관리</li>
							<li className="px-3 text-lightgrey">- A* 알고리즘을 활용한 경로 탐색 기능 구현</li>
							<li className="px-3 text-lightgrey">
								- 맵 매칭 알고리즘을 통해 현재 좌표를 가장 가까운 링크에 매칭
							</li>
							<li className="px-3 text-lightgrey">
								- 이상 좌표 판별 로직을 적용하여 크게 차이나는 좌표를 최대 3회까지 무시, 4회 이상 발생
								시 정상 좌표로 인식
							</li>
							<li className="px-3 text-lightgrey">
								- 목적지까지의 경로를 재탐색 시, 이전 노드를 경로 제외로 처리하여 꼬리물기 경로 생성
								방지
							</li>
							<li className="px-3 text-lightgrey">
								- 좌표와 방향 데이터를 0.25초마다 수신하여 실시간 위치 관리
							</li>
						</ul>
						<ul>
							<li className="font-bold">지도 렌더링 및 주차장 상태 관리</li>
							<li className="px-3 text-lightgrey">
								- 차량의 진행 방향에 따라 지도가 회전하거나, 북쪽 고정 모드 지원
							</li>
							<li className="px-3 text-lightgrey">
								- 실내 주차장 진입 시, 자동으로 주차장 이름 및 층 정보를 인식하여 해당 지도 화면 표시
							</li>
							<li className="px-3 text-lightgrey">
								- 층 이동 시, 자동으로 해당 층에 맞는 지도 화면으로 전환
							</li>
						</ul>
						<ul>
							<li className="font-bold">예측 기반 위치 보정</li>
							<li className="px-3 text-lightgrey">
								- 좌표 데이터 지연 문제를 해결하기 위해 차량 속도 데이터를 활용한 선행주행 로직 적용
							</li>
							<li className="px-3 text-lightgrey">
								- 선행 좌표 계산을 통해 경로 상의 예측 위치로 차량 이동 보정
							</li>
							<li className="px-3 text-lightgrey">
								- 카메라에서 차량 트레킹에 실패 했을경우 문제 해결을 위해 경로에 따른 자율 주행 로직
								추가
							</li>
						</ul>
					</ul>
				),
			},
			{
				title: '기술 키워드',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						Kotlin, A*, Mapbox, Real Time Kinematic , GeoJSON, RxJava, Volley, Firebase Cloud Messaging,
						Coroutines
					</ul>
				),
			},
			{
				title: '참고 자료',
				items: (
					<iframe
						className="w-full h-[500px]"
						style={{ height: '500px' }}
						src="https://kr.humaxdigital.com/archives/12290"
						title="Indoor Navigation News Page"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				),
			},
		],
	},
	{
		id: 5,
		primaryColor: '#4A6FA5',
		URLS: {
			githubURL: 'null',
			blogURL: 'null',
			// serviceURL: 'http://218.153.121.52/pems/pro/index.html',
			serviceURL: 'http://218.153.121.50:9090/v2',
			serviceBoolean: false,
		},
		title: 'KT AI 비즈카(샌드위키)',
		subTitle: 'AI 기반 추천과 스마트한 예약 관리로 업무용 차량 이용을 효율적으로 돕는 서비스',
		workTime: '2023.03.27 - 2023.11.09',
		organize: '크로스 플랫폼 앱 개발 (Android, iOS)',
		imgs: [
			'/imgs/projects/sendWithKey/sendWithKey-overview.png',
			'/imgs/projects/sendWithKey/sendWithKey1.png',
			'/imgs/projects/sendWithKey/sendWithKey2.png',
			'/imgs/projects/sendWithKey/sendWithKey3.png',
		],
		description: {
			bottomPart: (
				<p>
					<span className="font-bold">KT AI 비즈카</span>AI 기반으로 기업의 업무용 차량을 효율적으로 예약하고
					관리할 수 있도록 돕는 스마트 차량 운영 시스템입니다. <br />
					해당 서비스는 사용자의 일정과 목적에 맞춰 최적의 차량을 추천하고, 간편한 예약과 승인 프로세스를
					지원합니다. <br />
					또한, 운전 패턴 분석과 리포트 기능을 통해 차량 이용 데이터를 시각적으로 제공하며, 안전 운전 유도와
					비용 절감 효과까지 기대할 수 있습니다.
					<br />
					AI와 데이터 분석을 활용한 비즈카는 기업이 차량을 더욱 스마트하게 운영할 수 있도록 설계된 차량 관리
					솔루션입니다.
					<br />
					이를 통해 기업은 업무용 차량의 운영 효율성을 극대화하고, 데이터 기반 의사 결정을 지원하는 스마트
					차량 관리의 진화된 모델을 제공합니다.
				</p>
			),
		},
		lists: [
			{
				title: '담당 기능',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						<ul>
							<li className="font-bold">AI 기반 차량 추천 및 예약</li>
							<li className="px-3 text-lightgrey">- AI 추천 차량과 미션 차량 선택 기능</li>
							<li className="px-3 text-lightgrey">
								- AI 예약 또는 미션 예약 버튼을 통해 간편한 예약 기능 구현
							</li>
							<li className="px-3 text-lightgrey">
								- 사업장별 차량 예약, 반납 기능 및 권한별 차량 관리 기능 구현
							</li>
						</ul>
						<ul>
							<li className="font-bold">차량 이용 목적 및 동반 운전자 설정</li>
							<li className="px-3 text-lightgrey">
								- 출발지와 목적지를 설정하여 예상 운행 거리를 확인 기능
							</li>
							<li className="px-3 text-lightgrey">
								- 고객 방문, 현장 업무, 품질 관리 등의 목적 선택 기능
							</li>
							<li className="px-3 text-lightgrey">- 동반 운전자 추가 기능</li>
						</ul>
						<ul>
							<li className="font-bold">예약 내역 관리 및 승인 요청</li>
							<li className="px-3 text-lightgrey">
								- 예약된 차량의 승인 상태(승인, 반려, 승인 대기) 확인 기능
							</li>
						</ul>
						<ul>
							<li className="font-bold">운전 패턴 분석 및 점수 제공 기능</li>

							<li className="px-3 text-lightgrey">
								- 속도, 급가속, 급감속 등의 운전 패턴 분석 및 피드백 제공 기능
							</li>
							<li className="px-3 text-lightgrey">- 월별 차량 이용 비용 및 패턴 분석 기능</li>
							<li className="px-3 text-lightgrey">- 사용 목적별 차량 이용 내역 시각화 제공 기능</li>
						</ul>
						<ul>
							<li className="font-bold">이용 후기 작성 및 서비스 개선 반영</li>
							<li className="px-3 text-lightgrey">- 차량 이용 후 피드백 작성 가능</li>
						</ul>
					</ul>
				),
			},
			{
				title: '앱의 목적',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						<ul>
							<li className="font-bold">기업 및 법인 차량의 효율적 관리</li>
							<li className="px-3 text-lightgrey">
								- AI 추천을 통해 최적의 차량을 배정하고, 불필요한 예약 낭비 방지
							</li>
						</ul>
						<ul>
							<li className="font-bold">비용 절감 및 최적화</li>
							<li className="px-3 text-lightgrey">
								- 리포트를 통해 사용 패턴을 분석하고, 운행 비용을 절감할 수 있도록 지원
							</li>
						</ul>
						<ul>
							<li className="font-bold">안전 운전 유도</li>
							<li className="px-3 text-lightgrey">
								- 운전 점수 및 패턴 분석을 통해 안전한 차량 운행을 유도
							</li>
						</ul>
						<ul>
							<li className="font-bold">예약 및 차량 관리 편의성 제공</li>
							<li className="px-3 text-lightgrey">
								- 앱을 통해 실시간 예약 및 승인 요청이 가능하며, 관리자 승인 프로세스 반영
							</li>
						</ul>
					</ul>
				),
			},
			{
				title: '기술 키워드',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						React, ReactNative, TypeScript, GraphQL, Apollo Client, Axios, Recoil
					</ul>
				),
			},
			// {
			// 	title: '참고 자료',
			// 	items: (
			// 		<iframe
			// 			className="w-full h-[500px]"
			// 			src="http://218.153.121.52/pems/pro/index.html"
			// 			title="Indoor Navigation News Page"
			// 			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			// 			allowFullScreen
			// 		></iframe>
			// 	),
			// },
		],
	},
	{
		id: 6,
		primaryColor: '#EB008B',
		URLS: {
			githubURL: 'null',
			blogURL: 'null',
			serviceURL: 'https://www.lguplus.com/biz/all/telecom/wireless/uplus-vehicle/B000000046',
			serviceBoolean: true,
		},
		title: 'U⁺커넥트',
		subTitle: '실시간 차량 관리와 다양한 차량의 효율적인 운행 솔루션을 제공하는 FMS 기반 서비스',
		workTime: '2023.12.15 - 2024.12.18',
		organize: '크로스 플랫폼 앱 (Android, iOS), 웹 프론트엔드 개발',
		imgs: [
			'/imgs/projects/connect/connect-overview1.png',
			'/imgs/projects/connect/connect-overview2.png',
			'/imgs/projects/connect/connect1.png',
			'/imgs/projects/connect/connect2.png',
			'/imgs/projects/connect/connect3.png',
			'/imgs/projects/connect/connect4.png',
			'/imgs/projects/connect/connect5.png',
			'/imgs/projects/connect/connect6.png',
			'/imgs/projects/connect/connect7.png',
			'/imgs/projects/connect/connect8.png',
			'/imgs/projects/connect/connect9.png',
			'/imgs/projects/connect/connect10.png',
		],
		description: {
			bottomPart: (
				<p>
					<span className="font-bold">U+커넥트</span>는 LG유플러스가 제공하는 스마트 차량 관리 플랫폼으로,
					법인차량, 화물차, 버스 등 다양한 차량의 효율적인 운행 관리를 지원하는 서비스 입니다.
					<br />
					이 솔루션은 차량에 OBD 단말기를 부착하여 운행 정보를 수집하고, 이를 PC나 스마트폰을 통해 실시간으로
					확인하고 통합 관리할 수 있도록 합니다. <br />
					주요 기능으로는 운행 일지 자동 작성, 차량 위치 및 경로 추적, 운행 통계 제공, 차량 상태 자가 진단,
					정비비 및 유류비 등 비용 관리, 배차 현황 관리 등이 있습니다. <br />
					또한, 수집된 운행 정보는 분석 후 경제 운전 및 안전 운전 리포트로 제공되어 운전자의 운전 습관 개선과
					연비 향상, 탄소 배출량 감소 등 효과적인 차량 관리가 가능합니다. <br />
					이를 통해 기업은 차량 관리의 번거로움을 해소하고, 효율적인 운행 관리를 실현할 수 있습니다.
				</p>
			),
		},
		lists: [
			{
				title: '모바일 담당 기능',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						<ul>
							<li className="font-bold">모바일 구현 (Android, iOS)</li>
							<li className="px-3 text-lightgrey">
								- react-native-webview를 활용하여 웹 애플리케이션을 네이티브 앱으로 구현 및 최적화된
								화면 표출
							</li>
							<li className="px-3 text-lightgrey">
								- 사업자, 사업장별 차량 예약, 반납 기능 및 권한별 차량 관리 기능 구현
							</li>
							<li className="px-3 text-lightgrey">
								- iNAVI MAP과 RTK(Real-Time Kinematic)를 활용한 실시간 차량 관제 기능 구현
							</li>
							<li className="px-3 text-lightgrey">
								- iOS와 Android에 따라 다른 이벤트 리스너 사용 (네이티브 앱과의 통신 지원)
							</li>
							<li className="px-3 text-lightgrey">
								- usePageScrollPosition 커스텀 훅을 사용한 이전 스크롤 위치 저장 및 복원
							</li>
							<li className="px-3 text-lightgrey">
								- AES-256 암호화로 블루투스 장치 이름 기반 AES 키 생성
							</li>
							<li className="px-3 text-lightgrey">
								- 특정 커맨드를 React에서 RN으로 전달, RN에서 전달된 커맨드에 따라 Permissions API를
								사용하여 권한 확인 및 처리
							</li>
						</ul>
						<ul>
							<li className="font-bold">API 통신 및 데이터 관리</li>
							<li className="px-3 text-lightgrey">- Apollo Client를 사용하여 GraphQL API와 통신</li>
							<li className="px-3 text-lightgrey">- GraphQL API 를 통한 FMS 서비스 기능 구현</li>
							<li className="px-3 text-lightgrey">
								- react-native-ble-plx를 사용하여 블루투스 장치 검색, 연결, 데이터 송수신 구현 (BLE 차량
								컨트롤)
							</li>
							<li className="px-3 text-lightgrey">
								- React 에서 전달받은 링크를 처리하여 네이티브 시스템을 활용한 파일 다운로드 구현
							</li>
						</ul>
					</ul>
				),
			},
			{
				title: '웹페이지 담당 기능',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						<ul>
							<li className="font-bold">웹 프론트엔드 구현</li>
							<li className="px-3 text-lightgrey">
								- 사업자, 사업장별 차량 예약, 반납 기능 및 권한별 차량 관리 기능 구현
							</li>
							<li className="px-3 text-lightgrey">
								- 거점 리스트를 관리하며, 사용자가 거점을 추가, 삭제, 수정할 수 있으며, 모달을 통해
								거점을 검색할 수 있는 기능 구현
							</li>
							<li className="px-3 text-lightgrey">
								- 배송 상태를 관리하며, 배송 리스트를 가져오고 특정 조건에 따라 리스트를 필터링할 수
								있게 구현
							</li>
							<li className="px-3 text-lightgrey">
								- 엑셀 다운로드 기능을 제공하며, 드래그 앤 드롭으로 항목을 정렬 및 체크박스를 통해
								항목을 선택하거나 해제할 수 있게 구현
							</li>
							<li className="px-3 text-lightgrey">
								- Recoil 상태 관리 라이브러리를 사용하여 상태 변경에 따른 불필요한 리렌더링을 최소화하여
								성능 최적화
							</li>
							<li className="px-3 text-lightgrey">
								- iNAVI MAP과 RTK(Real-Time Kinematic)를 활용한 실시간 차량 관제 기능 구현
							</li>
						</ul>
						<ul>
							<li className="font-bold">API 통신 및 데이터 관리</li>
							<li className="px-3 text-lightgrey">- Apollo Client를 사용하여 GraphQL API와 통신</li>
							<li className="px-3 text-lightgrey">- GraphQL API 를 통한 FMS 서비스 기능 구현</li>
							<li className="px-3 text-lightgrey">
								- Server-Sent Events(SSE)를 기반으로 실시간 차량 데이터를 스트리밍하여 실시간 관제에
								필요한 데이터를 수신
							</li>
						</ul>
					</ul>
				),
			},
			{
				title: '기술 키워드',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						React, ReactNative, TypeScript, GraphQL, Apollo Client, Axios, Swiper, Moment, Recoil
					</ul>
				),
			},
			{
				title: '참고 자료',
				items: (
					<iframe
						className="w-full h-[500px]"
						style={{ height: '500px' }}
						src="https://www.youtube.com/embed/L98SCSqKC_A"
						title="U⁺Connect Guide Page"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				),
			},
		],
	},
	{
		id: 7,
		primaryColor: '#A6001B',
		URLS: {
			githubURL: 'null',
			blogURL: 'null',
			serviceURL: 'https://cs-monitor.redcapmobility.com/login',
			serviceBoolean: true,
		},
		title: '레드캡 모빌리티 컨트롤 시스템 (RMCS)',
		subTitle: '법인 차량 통합 관제 서비스 (고도화)',
		workTime: '2025.01.13 - 2025.05.25',
		organize: '웹 프론트엔드 개발 및 유지보수',
		imgs: [
			'/imgs/projects/redcapMobilityControl/rms-control1.png',
			'/imgs/projects/redcapMobilityControl/rms-control2.png',
			'/imgs/projects/redcapMobilityControl/rms-control3.png',
			'/imgs/projects/redcapMobilityControl/rms-control4.png',
			'/imgs/projects/redcapMobilityControl/rms-control5.png',
			'/imgs/projects/redcapMobilityControl/rms-control6.png',
			'/imgs/projects/redcapMobilityControl/rms-control7.png',
		],
		description: {
			bottomPart: (
				<p>
					<span className="font-bold">레드캡 모빌리티 컨트롤 시스템(RMCS)</span>는 기업의 법인 차량을
					실시간으로 관제할 수 있는 통합 솔루션입니다.
					<br />
					차량의 현재 위치와 운행 경로를 한눈에 파악할 수 있으며, 주차 현황, 차량 상태 등 주요 정보를
					실시간으로 제공합니다.
					<br />
					또한 직관적인 UI로 빠르고 편리하게 현황을 모니터링할 수 있습니다.
					<br />
					레드캡RMS 관제 기능을 통해 기업은 차량 운영의 투명성과 효율성을 극대화할 수 있습니다.
				</p>
			),
		},
		lists: [
			{
				title: '관제 화면 프론트엔드 고도화',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						<ul>
							<li className="font-bold">대시보드 및 현황 모니터링 기능 개선</li>
							<li className="px-3 text-lightgrey">
								- 기존 팝업 형태였던 전기차 현황, 차량 상태 현황, 이상 차량 현황, 실시간 차량 위치
								현황을 별도 페이지로 전환 기능 추가
							</li>
							<li className="px-3 text-lightgrey">
								- 사용자 편의성과 데이터 접근성을 고려해 리스트-상세 구조 적용, 조건 검색 기능 고도화
							</li>
						</ul>
						<ul>
							<li className="font-bold">차량 관리 기능 강화</li>
							<li className="px-3 text-lightgrey">
								- 차량 상세 정보 페이지 신규 구축: 단말기 정보, 운전자 변경, 차량 메모, 등록증 등 상세
								기능 분리
							</li>
							<li className="px-3 text-lightgrey">
								- 단말기 관리 페이지 신설, 차량 단말 상태 모니터링 기능 추가
							</li>
						</ul>
						<ul>
							<li className="font-bold">운행 이력 및 경로 조회 기능 신규 개발</li>
							<li className="px-3 text-lightgrey">
								- 운행 내역 조회, 운행 경로 지도, 차량별 운행기록부, 운행기록부 다운로드 기능 추가
							</li>
							<li className="px-3 text-lightgrey">- 지도 연동 및 실시간 위치 기반 운행 정보 시각화</li>
							<li className="px-3 text-lightgrey">
								- 운전자 중심 운행 정보 검색 및 국세청 양식 대응을 위한 PDF/Excel 출력
							</li>
						</ul>
						<ul>
							<li className="font-bold">통계/분석 기능 신규 개발</li>
							<li className="px-3 text-lightgrey">
								- 운행 통계 / 비용 통계 모듈을 신규 구축하고, 일자별 / 조직별 / 운전자별 탭으로 데이터
								분류
							</li>
							<li className="px-3 text-lightgrey">- API 파라미터 구조 정비 및 검색 필터 조건 처리</li>
							<li className="px-3 text-lightgrey">
								- 향후 추가 고도화를 고려한 모듈화된 통계 컴포넌트 설계
							</li>
						</ul>
						<ul>
							<li className="font-bold">비용 관리 기능 신규 구축</li>
							<li className="px-3 text-lightgrey">
								- 차량 유지비 조회, 비용 승인 관리, 비용 신청/승인 팝업 등을 신규 개발
							</li>
							<li className="px-3 text-lightgrey">- 승인/반려 처리 로직 구현 및 연동 API 구축</li>
						</ul>
						<ul>
							<li className="font-bold">결제 정보 모니터링 시스템 구축</li>
							<li className="px-3 text-lightgrey">- 주유 / 하이패스 모니터링 기능 추가</li>
						</ul>
						<ul>
							<li className="font-bold">구성원 및 권한 관리 기능 고도화</li>
							<li className="px-3 text-lightgrey">
								- 조직 관리, 운전자 관리, 어드민 계정 관리, 승인 이력 관리 전반 리뉴얼
							</li>
							<li className="px-3 text-lightgrey">
								- 조직별 데이터 분류, 권한 기반 탭/기능 활성화 로직 반영
							</li>
							<li className="px-3 text-lightgrey">- 메뉴명 변경 및 역할 기반 기능 분할 적용</li>
						</ul>
						<ul>
							<li className="font-bold">운영 및 로그 이력 관리 기능 강화</li>
							<li className="px-3 text-lightgrey">
								- 메뉴 권한 관리, 탈퇴/휴면 사용자 이력, 로그인/위치 로그 이력 등의 기능 고도화
							</li>
							<li className="px-3 text-lightgrey">- 권한, 조직 필터 등 운영자 중심의 조건 검색 추가</li>
							<li className="px-3 text-lightgrey">
								- 메뉴 관리 시스템 신규 구축 (메뉴 추가 및 구성 관리)
							</li>
						</ul>
					</ul>
				),
			},
			{
				title: '기술 키워드',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						React, TypeScript, Node.js, GraphQL, Apollo Client, Amazon S3, Axios
					</ul>
				),
			},
			{
				title: '참고 자료',
				items: (
					<iframe
						className="w-full h-[500px]"
						style={{ height: '500px' }}
						src="https://biz.redcap.co.kr/rent/sub/rentacar/system.php"
						title="RMS Guide Page"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				),
			},
		],
	},
	{
		id: 8,
		primaryColor: '#4A6FA5',
		URLS: {
			githubURL: 'null',
			blogURL: 'null',
			serviceURL: 'http://spms.geosoft.co.kr/',
			serviceBoolean: true,
		},
		title: '스마트파킹 플랫폼',
		subTitle: 'AI와 IoT 기반으로 차량·주차장·공간을 실시간으로 관리하는 스마트 관제 솔루션',
		workTime: '2025.05.27 - 진행중',
		organize: '웹 프론트엔드, 백엔드 개발',
		imgs: [
			'/imgs/projects/smartParking/smart-parking-overview.png',
			'/imgs/projects/smartParking/smart-parking2.png',
			'/imgs/projects/smartParking/smart-parking3.png',
			'/imgs/projects/smartParking/smart-parking4.png',
			'/imgs/projects/smartParking/smart-parking5.png',
			'/imgs/projects/smartParking/smart-parking6.png',
			'/imgs/projects/smartParking/smart-parking7.png',
			'/imgs/projects/smartParking/smart-parking8.png',
			'/imgs/projects/smartParking/smart-parking9.png',
			'/imgs/projects/smartParking/smart-parking10.png',
			'/imgs/projects/smartParking/smart-parking11.png',
			'/imgs/projects/smartParking/smart-parking12.png',
			'/imgs/projects/smartParking/smart-parking13.png',
			'/imgs/projects/smartParking/smart-parking14.png',
			'/imgs/projects/smartParking/smart-parking15.png',
			'/imgs/projects/smartParking/smart-parking16.png',
			'/imgs/projects/smartParking/smart-parking17.png',
			'/imgs/projects/smartParking/smart-parking18.png',
		],
		description: {
			bottomPart: (
				<p>
					<span className="font-bold">스마트파킹 플랫폼</span>은 주차장과 차량을 실시간으로 통합 관리할 수
					있는 솔루션입니다.
					<br />
					AI CCTV와 GeoJSON 기반 공간 데이터를 활용해 차량, 사람, 사물의 위치와 이동 현황, 주차 공간 상태 등
					주요 정보를 한눈에 확인할 수 있으며,
					<br />
					직관적인 UI를 통해 실시간 관제와 관리자 알림 기능까지 손쉽게 사용할 수 있습니다.
					<br />
					스마트 관제 시스템을 통해 기업은 주차 및 차량 운영의 효율성과 안전성을 동시에 높일 수 있습니다.
				</p>
			),
		},
		lists: [
			{
				title: '프로젝트 핵심 기능',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						<ul>
							<li className="font-bold text-xl">1. 실시간 차량/객체 관제 시스템</li>
							<li className="px-3 font-bold text-lg">RabbitMQ 기반 워커/컨슈머 구조</li>
							<li className="px-3">
								<ul>
									<li className="px-3">- 차량 위치, 사고, 정비 등 다양한 이벤트를 실시간으로 처리</li>
									<li className="px-3">- 컨슈머 로직을 모듈화하고, 여러 워커로 역할 분리</li>
									<li className="px-3">
										- 차량 트래킹 데이터 수집 및 frame_id 기준 최신 정보만 반영하는 중복 데이터 방지
										로직
									</li>
								</ul>
							</li>
							<li className="px-3 font-bold text-lg">카메라 인식 데이터 수집 및 DB 반영</li>
							<li className="px-3">
								<ul>
									<li className="px-3">
										- CCTV 등에서 객체 인식 → RabbitMQ로 실시간 데이터 적재 → BE가 소비하여 DB에
										저장
									</li>
									<li className="px-3">
										- 카메라 별로 frame_id 기반 최신 데이터만 유지, 이전 데이터 삭제
									</li>
									<li className="px-3">
										- 차량 외 객체(사람, 자전거, 오토바이, 콘 등)도 className 필터링하여 선택적 관제
										가능
									</li>
								</ul>
							</li>
							<li className="px-3 font-bold text-lg">실시간 지도 UI</li>
							<li className="px-3">
								<ul>
									<li className="px-3">- FE에서 네이버 지도로 지도 렌더링</li>
									<li className="px-3">
										- 차량, 사람 등 객체의 위치를 마커로 시각화하며, 이동 애니메이션/부드러운 위치
										갱신 지원
									</li>
									<li className="px-3">- 객체 유형별 필터링, 타입별 마커 아이콘 동적 적용</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li className="font-bold text-xl">2. 주차장/공간 관리 및 GeoJSON 데이터 처리</li>
							<li className="px-3 font-bold text-lg">주차공간 POLYGON 및 중심 좌표 연동</li>
							<li className="px-3">
								<ul>
									<li className="px-3">- CCTV 인식 결과에서 주차면 POLYGON 좌표 자동 추출/DB 저장</li>
									<li className="px-3">- 중심좌표를 위경도로 변환하여, 지도상 정확한 위치 산출</li>
								</ul>
							</li>
							<li className="px-3 font-bold text-lg">주차공간 상태 관리</li>
							<li className="px-3">
								<ul>
									<li className="px-3">
										- 좌표 데이터 처리 시 POINT 타입으로 저장하여, 공간 쿼리 최적화
									</li>
									<li className="px-3">- 주차공간별 만차/공차 상태 실시간 체크/색상 표기 기능</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li className="font-bold text-xl">3. 주차장/회사/관리자 마스터 관리</li>
							<li className="px-3 font-bold text-lg">주차장 관리</li>
							<li className="px-3">
								<ul>
									<li className="px-3">- 등록/수정/삭제 API 구현, 주차장명 중복 체크 및 예외 처리</li>
									<li className="px-3">
										- 관리 화면에서 목록, 페이지네이션, 모달 등록/수정, 지도에서 위치 직접 선택 기능
										구현
									</li>
								</ul>
							</li>
							<li className="px-3 font-bold text-lg">주차장 관리자(Manager) 관리</li>
							<li className="px-3">
								<ul>
									<li className="px-3">
										- 주차장별/회사별 관리자 조회, 등록, 수정, 삭제, 전화번호 등 정보 관리.
									</li>
									<li className="px-3">
										- 관리자별 화재 알림 주기 설정(분 단위) 가능, 관리 화면에서 직접 조회/수정/등록
										지원.
									</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li className="font-bold text-xl">4. 카메라(CCTV) 연동 및 인증</li>
							<li className="px-3 font-bold text-lg">카메라 설정/조회/등록/수정/삭제 API</li>
							<li className="px-3">
								<ul>
									<li className="px-3">- 각 주차장/층/타입/거리단위별로 카메라 관리 가능</li>
									<li className="px-3">
										- 카메라 위치는 선택 주차장 중심 위치로 자동 입력 또는 도면에서 직접 선택
									</li>
								</ul>
							</li>
							<li className="px-3 font-bold text-lg">카메라 인증 방식</li>
							<li className="px-3">
								<ul>
									<li className="px-3">
										- RFC 2617 Digest 인증 구현(HA1, HA2, Response 해시 처리, Realm 등)
									</li>
									<li className="px-3">
										- Digest 인증을 이용한 주차 상태 실시간 조회 및 파싱 → DB 저장
									</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li className="font-bold text-xl">5. 연기/화재 탐지 및 경보 시스템</li>
							<li className="px-3 font-bold text-lg">화재/연기 감지구역 관리</li>
							<li className="px-3">
								<ul>
									<li className="px-3">- POLYGON 좌표로 구역 지정, DB에 공간 정보 저장</li>
									<li className="px-3">- 감지구역 상태 및 리스트 조회 API</li>
									<li className="px-3">
										- 실시간 주차장 현황 지도에서 화재/연기 발생 구역에 알림 아이콘 표기(즉시
										시각화)
									</li>
									<li className="px-3">
										- 연기/화재 탐지 이벤트 RabbitMQ로 수신 → 알림 및 관제 시스템 연동
									</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li className="font-bold text-xl">6. 회원/인증/보안</li>
							<li className="px-3 font-bold text-lg">회원가입/로그인</li>
							<li className="px-3">
								<ul>
									<li className="px-3">- 신규 회원 등록 및 인증 후 토큰 발급</li>
									<li className="px-3">
										- 토큰 기반 API 인증, 필요 없는 API(회사 목록 등)는 인증 예외처리
									</li>
								</ul>
							</li>
							<li className="px-3 font-bold text-lg">에러 코드/예외처리</li>
							<li className="px-3">
								<ul>
									<li className="px-3">- API별 에러 코드 및 응답구조 체계화</li>
									<li className="px-3">- 중복 주차장명 등 주요 예외에 FE 팝업/알림 연동</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li className="font-bold text-xl">7. 공통 인프라/배포/운영</li>
							<li className="px-3 font-bold text-lg">CI/CD 및 PM2 연동</li>
							<li className="px-3">
								<ul>
									<li className="px-3">
										- deploy 시 기존 pm2 서비스 종료 후 재시작, worker 실행 명령어 별도 관리
									</li>
									<li className="px-3">- 배포 자동화 및 브랜치별 배포 성공/실패 알림 (slack)</li>
								</ul>
							</li>
							<li className="px-3 font-bold text-lg">API 응답구조 표준화</li>
							<li className="px-3">
								<ul>
									<li className="px-3">
										- 객체/배열/에러 반환 형태 일관성 유지, 공통 response 함수로 관리
									</li>
									<li className="px-3">
										- 환경별 DB 주소, 엔드포인트, 토큰 인증 등 Config 분리 관리
									</li>
								</ul>
							</li>
						</ul>
					</ul>
				),
			},
			{
				title: '기술 키워드',
				items: (
					<ul className="w-auto flex flex-col gap-2">
						React, TypeScript, Node.js, GraphQL, RabbitMQ, Naver Map API, GeoJSON, WebSocket, GraphQL
						Subscription, Digest Auth (RFC 2617), JWT, PM2, PostgreSQL
					</ul>
				),
			},
			// {
			// 	title: '참고 자료',
			// 	items: (
			// 		<iframe
			// 			className="w-full h-[500px]"
			// 			style={{ height: '500px' }}
			// 			src="http://www.geosoft.co.kr/NEW/business/ai.php"
			// 			title="RMS Guide Page"
			// 			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			// 			allowFullScreen
			// 		></iframe>
			// 	),
			// },
		],
	},
];
