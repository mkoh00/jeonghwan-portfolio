import Head from 'next/head';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>정환의 포트폴리오 | React & Web Developer</title>
				<meta
					name="description"
					content="정환의 포트폴리오 웹사이트입니다. React, Next.js, TypeScript 기반 프로젝트를 확인하세요."
				/>
				<meta name="keywords" content="포트폴리오, React, Next.js, 웹 개발, 프론트엔드 개발자" />
				<meta name="robots" content="index, follow" />
				<meta property="og:title" content="정환의 포트폴리오" />
				<meta property="og:description" content="React 기반 포트폴리오 프로젝트" />
				<meta property="og:url" content="https://jeonghwan-portfolio.vercel.app" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
