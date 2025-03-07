'use client';
import React, { useState } from 'react';

interface TooltipProps {
	text: string;
	children: React.ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
	const [hovered, setHovered] = useState(false);

	return (
		<span
			className="relative inline-flex"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{children}

			{hovered && (
				<div
					className="
            absolute
            -top-8
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            px-3
            py-2
            bg-gray-800
            text-white
            text-xs
            rounded-md
            shadow-lg
            opacity-90
            transition
            duration-200
          "
				>
					{text}
				</div>
			)}
		</span>
	);
}
