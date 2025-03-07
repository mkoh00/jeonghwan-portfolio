import React from 'react';
import Layout from '../common/Layout';
import { SECTION_TITLE } from '@/constants/constants';
import { techStackData, toolStackData } from '@/datas/skill-list.data';
import SkillSection from './SkillSection';

const Skill = () => {
	return (
		<Layout title={SECTION_TITLE.skill}>
			<div className="w-full h-full flex flex-col" style={{ minHeight: 'calc(100vh - 140px)' }}>
				<SkillSection title="언어 / 프레임워크" data={techStackData} />
				<SkillSection title="협업 / 관리 도구" data={toolStackData} />
			</div>
		</Layout>
	);
};

export default Skill;
