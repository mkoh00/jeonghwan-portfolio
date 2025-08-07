import React from 'react';
import Layout from '../common/Layout';
import { SECTION_TITLE } from '@/constants/constants';
import { SlideUpScroll } from '../animation/SlideUp';

const experienceData = [
	{
		title: (
			<>
				지오소프트 <br />
				풀스택 개발자
			</>
		),
		date: '( 2020.11 - 현재 )',
		description: [
			'AI CCTV 기반 실시간 관제와 GeoJSON 공간 데이터를 활용한 스마트 주차장·차량·객체 통합 관리 웹, BE 개발',
			'다양한 차량의 효율적인 운행 솔루션을 제공하는 FMS 기반 앱, 웹 개발',
			'AI 기반 추천으로 법인 차량 예약 시스템 웹앱 개발',
			'세종 스마트시티 실내주차장 내비게이션 라이브러리 개발',
			'법인 차량 관리 통합 솔루션 서비스 크로스 플랫폼 앱, 웹 개발',
			'단말 연동을 통한 홈 카메라 앱(4K Wi-Fi 홈 카메라) 개발',
			'일본 전역의 대중교통 정보를 종합적으로 안내하는 내비게이션 앱 운영 및 유지보수 진행',
		],
	},
	{
		title: (
			<>
				디지털 트윈 구현을 위한 <br />
				공간정보융합 sw 전문가 양성과정
			</>
		),
		date: '( 2020.07 - 2020.11 )',
		description: [
			'디지털 트윈과 공간정보 데이터를 활용한 대중교통 최적화 원리 학습',
			'차량 관제 시스템에서 실시간 데이터(rtk) 시각화와 모니터링 기술 학습',
		],
	},
	{
		title: (
			<>
				서일대학교
				<br />
				소프트웨어 공학 졸업
			</>
		),
		date: '( 2015.03 - 2021.02 )',
		description: ['캡스톤디자인 경진대회 (졸업작품) 우수상'],
	},
];

const Experience = () => {
	return (
		<Layout title={SECTION_TITLE.experience}>
			<div className="w-full flex flex-col" style={{ minHeight: 'calc(100vh - 140px)' }}>
				<SlideUpScroll>
					<div className="w-full h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
						학력 및 교육
					</div>
				</SlideUpScroll>
				<ul
					className="w-full flex flex-col justify-center
        "
				>
					{experienceData.map((experience, index) => (
						<SlideUpScroll key={index} delay={index * 0.1}>
							<li
								className="flex border-b border-white border-solid border-opacity-20
									 lg:flex-row
									 md:flex-row
									 flex-col
									 h-auto
									 py-5"
							>
								<div
									className="flex-1 flex flex-col font-extrabold text-white
									   lg:justify-center lg:items-center
									   md:justify-center md:items-center
									   justify-start items-start"
								>
									<h1
										className="lg:text-center lg:text-xl
										 md:text-center md:text-xl
										 text-left text-lg text-pureWhite"
									>
										{experience.title}
									</h1>
									<p
										className="lg:mt-5 lg:text-xl
										 md:mt-5 md:text-xl
										 mt-2 text-base text-grey"
									>
										{experience.date}
									</p>
								</div>
								<ul
									className="flex-1 flex justify-center font-medium text-white flex-col
									   lg:text-lg
									   md:text-lg
									   text-md"
								>
									{experience.description.map((desc, descIndex) => (
										<li
											key={descIndex}
											className="lg:list-disc
										   md:list-disc
										   list-none
										   mb-1"
										>
											{desc}
										</li>
									))}
								</ul>
							</li>
						</SlideUpScroll>
					))}
				</ul>
			</div>
		</Layout>
	);
};

export default Experience;
