'use client';

import classNames from 'classnames';
import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';

interface InstagramIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface InstagramIconProps extends HTMLAttributes<HTMLButtonElement> {
	size?: number;
}

const rectVariants: Variants = {
	normal: { opacity: 1, pathLength: 1 },
	animate: {
		opacity: [0, 1],
		pathLength: [0, 1],
		transition: { duration: 0.5 },
	},
};

const circleVariants: Variants = {
	normal: { scale: 1 },
	animate: {
		scale: [1, 1.2, 1],
		transition: { duration: 0.5 },
	},
};

const dotVariants: Variants = {
	normal: { opacity: 1 },
	animate: {
		opacity: [1, 0, 1],
		transition: { duration: 0.5 },
	},
};

const InstagramIcon = forwardRef<InstagramIconHandle, InstagramIconProps>(
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
					aria-label='Instagram icon'
				>
					<title>Instagram icon</title>
					<motion.rect
						width='20'
						height='20'
						x='2'
						y='2'
						rx='5'
						ry='5'
						variants={rectVariants}
						animate={controls}
					/>
					<motion.circle
						cx='12'
						cy='12'
						r='4'
						variants={circleVariants}
						animate={controls}
					/>
					<motion.line
						x1='17.5'
						x2='17.51'
						y1='6.5'
						y2='6.5'
						variants={dotVariants}
						animate={controls}
					/>
				</svg>
			</button>
		);
	},
);

InstagramIcon.displayName = 'InstagramIcon';

export { InstagramIcon };
