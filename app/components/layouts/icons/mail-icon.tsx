'use client';

import classNames from 'classnames';
import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';

interface MailIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface MailIconProps extends HTMLAttributes<HTMLButtonElement> {
	size?: number;
}

const rectVariants: Variants = {
	normal: { strokeDasharray: '0 0', strokeDashoffset: 0 },
	animate: {
		strokeDasharray: ['0 100', '100 0'],
		strokeDashoffset: [100, 0],
		transition: { duration: 0.5, ease: 'easeInOut' },
	},
};

const pathVariants: Variants = {
	normal: { opacity: 1, pathLength: 1 },
	animate: {
		opacity: [0, 1],
		pathLength: [0, 1],
		transition: { duration: 0.4, delay: 0.2 },
	},
};

const MailIcon = forwardRef<MailIconHandle, MailIconProps>(
	({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
		const controls = useAnimation();
		const isControlledRef = useRef(false);

		useImperativeHandle(ref, () => {
			isControlledRef.current = true;

			return {
				startAnimation: () => controls.start('animate'),
				stopAnimation: () => controls.start('normal'),
			};
		});

		const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
			if (!isControlledRef.current) {
				controls.start('animate');
			} else {
				onMouseEnter?.(e);
			}
		};

		const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
			if (!isControlledRef.current) {
				controls.start('normal');
			} else {
				onMouseLeave?.(e);
			}
		};

		return (
			<button
				type='button'
				className={classNames(
					`cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center`,
					className,
				)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				{...props}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={size}
					height={size}
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					aria-label='Mail icon'
				>
					<title>Mail icon</title>
					<motion.rect
						width='20'
						height='16'
						x='2'
						y='4'
						rx='2'
						variants={rectVariants}
						animate={controls}
					/>
					<motion.path
						d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'
						variants={pathVariants}
						animate={controls}
					/>
				</svg>
			</button>
		);
	},
);

MailIcon.displayName = 'MailIcon';

export { MailIcon };
