'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const ProjectDetailPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div className='hidden'>프론트엔드 & 모바일 개발자 오정환</div>
  );
};

export default ProjectDetailPage;
