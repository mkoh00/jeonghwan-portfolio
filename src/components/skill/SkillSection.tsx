import React from 'react';
import { SlideUpScroll } from '../animation/SlideUp';
import Tooltip from './Tooltip';
import GridExtends from '../animation/GridExtends';

interface SkillSectionProps {
	title: string;
	data: {
		id: number;
		title: string;
		description: string[] | string;
		svgURL: string;
	}[];
}

const SkillSection = ({ title, data }: SkillSectionProps) => (
	<>
		<SlideUpScroll>
			<div className="w-full h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
				{title}
			</div>
		</SlideUpScroll>

		<ul className="grid gap-5 h-auto w-full lg:grid-cols-9 md:grid-cols-5 grid-cols-3">
			{data.map((item, index) => (
				<SlideUpScroll key={item.id} delay={index * 0.1}>
					<li className="flex justify-center items-center">
						<Tooltip text={item.title}>
							<GridExtends item={item} />
						</Tooltip>
					</li>
				</SlideUpScroll>
			))}
		</ul>
	</>
);

export default SkillSection;
