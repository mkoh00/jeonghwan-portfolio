import React from 'react';
import HighlightText from '../common/HighlightText';
import { SlideUpScroll } from '../animation/SlideUp';

const descriptionData = [
	{
		title: '책임감 있는 개발자',
		text1: (
			<>
				문제를 해결하기 위한 <HighlightText>끈기와 열정</HighlightText>을 가지고 있습니다.
			</>
		),
		text2: (
			<>
				하나의 문제를 <HighlightText>다양한 시각에서 접근</HighlightText>하는 것을 좋아합니다.
			</>
		),
	},
	{
		title: '학습하는 개발자',
		text1: (
			<>
				새로운 기술을 배우는 것에 흥미가 있으며 <HighlightText>끊임없는 성장을 도모</HighlightText>합니다.
			</>
		),
		text2: (
			<>
				<HighlightText>프로젝트를 통해 적용하는 과정에서 즐거움을 느끼며</HighlightText> 최신 IT 트렌드 및
				이슈에 관심이 많습니다.
			</>
		),
	},
];

const AboutDescription = () => {
	return (
		<div className="w-full flex flex-col gap-14">
			{descriptionData.map((item, index) => (
				<SlideUpScroll key={index}>
					<div
						key={index}
						className="w-full flex flex-col  items-center
                lg:gap-5
                md:gap-3
                gap-2
                "
					>
						<div
							className="w-full max-w-[750px] rounded-lg bg-pureWhite text-primary font-extrabold flex items-center
                    md:text-xl md:px-2 md:py-2
                    text-lg px-2 py-1              
                    "
						>
							{item.title}
						</div>
						<ul
							className="w-full max-w-[750px] text-white flex flex-col gap-1
                    md:text-xl
                    text-md      
                    "
						>
							<li>{item.text1}</li>
							<li>{item.text2}</li>
						</ul>
					</div>
				</SlideUpScroll>
			))}
		</div>
	);
};

export default AboutDescription;
