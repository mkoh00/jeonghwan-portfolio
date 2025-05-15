import Head from 'next/head';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>오정환 | 프론트엔드 포트폴리오 & FE 개발자</title>
				<meta
					name="description"
					content="오정환의 프론트엔드 포트폴리오입니다. React, React Native 기반 프로젝트와 웹/모바일 앱 개발 이력을 확인하세요."
				/>
				<meta
					name="keywords"
					content="오정환, FE 포트폴리오, 프론트엔드 포트폴리오, 웹 개발자, 모바일 개발자, React, React Native, Java, Kotlin, 프론트엔드 개발자"
				/>
				<meta name="robots" content="index, follow" />
				<meta property="og:title" content="오정환 | 프론트엔드 포트폴리오" />
				<meta
					property="og:description"
					content="React 기반 웹/앱 프로젝트를 확인할 수 있는 FE 포트폴리오입니다."
				/>
				<meta property="og:url" content="https://jeonghwan-portfolio.vercel.app" />
				<meta property="og:type" content="website" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
