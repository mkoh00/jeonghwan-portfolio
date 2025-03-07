import React from 'react';
import ProjectBadge from '../common/ProjectBadge';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    id : number;
    badges: string[];
    images: string;
    description: string;
}

const ProjectCard = ({ title, badges, description, images, id}: ProjectCardProps) => {
    return (
        <Link
        href={`/projects/${id}`}
        scroll={false}
        className='w-full
        lg:h-[300px]
        md:h-[300px]
        h-[300px]
        bg-white flex flex-col gap-2 rounded-lg pb-5 cursor-pointer
        hover:opacity-80
        hover:scale-105
        duration-300
        relative
        border
        border-solid
        border-lightgrey
        '>
            <div className='relative w-full h-[60%]'>
                <Image
                    src={images}
                    alt={title}
                    className='object-cover rounded-tl-lg rounded-tr-lg'
                    quality={100}
                    fill={true}
                />
            </div>

            <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <FaSearch className='text-primary text-4xl' />
            </div>

            <div className='px-2'>
                <div className='flex gap-[5px] my-2'>
                    {badges.map((item, index) => (
                        <ProjectBadge key={index} tagName={item} />
                    ))}
                </div>
                <p className='font-extrabold text-primary text-lg mb-3'>
                    {title}
                </p>
                <p className='font-medium text-primary text-sm leading-4'>
                    {description}
                </p>
            </div>
        </Link>
    );
}

export default ProjectCard;
