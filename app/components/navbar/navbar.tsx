'use client';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { merryWeather, mukta } from '../../fonts';

const navLinks = [
	{ href: '/about', label: 'About' },
	{ href: '/skills', label: 'Skills' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/contact', label: 'Contact' },
];

const menuVariants = {
	closed: {
		x: '100%',
		transition: {
			type: 'spring' as const,
			stiffness: 400,
			damping: 40,
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
	open: {
		x: 0,
		transition: {
			type: 'spring' as const,
			stiffness: 300,
			damping: 35,
			staggerChildren: 0.07,
			delayChildren: 0.1,
		},
	},
};

const linkVariants = {
	closed: {
		x: 60,
		opacity: 0,
		transition: { type: 'spring' as const, stiffness: 400, damping: 35 },
	},
	open: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
	},
};

const backdropVariants = {
	closed: { opacity: 0, transition: { duration: 0.2 } },
	open: { opacity: 1, transition: { duration: 0.25 } },
};

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// Close on route change
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	// Prevent scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	return (
		<>
			{/* Hamburger / Close Button */}
			<motion.button
				id='nav-toggle'
				aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
				className={classNames(
					'fixed top-4 left-4 z-50 flex flex-col justify-center items-center w-10 h-10 gap-[5px] cursor-pointer',
					mukta.className,
				)}
				onClick={() => setIsOpen((prev) => !prev)}
				whileTap={{ scale: 0.9 }}
				whileHover={{ scale: 1.1 }}
			>
				<motion.span
					className='block h-[2px] bg-current rounded-full origin-center'
					animate={
						isOpen
							? { rotate: 45, y: 7, width: 24 }
							: { rotate: 0, y: 0, width: 24 }
					}
					transition={{ duration: 0.25 }}
					style={{ width: 24 }}
				/>
				<motion.span
					className='block h-[2px] bg-current rounded-full'
					animate={
						isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
					}
					transition={{ duration: 0.2 }}
					style={{ width: 24 }}
				/>
				<motion.span
					className='block h-[2px] bg-current rounded-full origin-center'
					animate={
						isOpen
							? { rotate: -45, y: -7, width: 24 }
							: { rotate: 0, y: 0, width: 24 }
					}
					transition={{ duration: 0.25 }}
					style={{ width: 24 }}
				/>
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							key='backdrop'
							className='fixed inset-0 z-40 bg-black/40 backdrop-blur-sm'
							variants={backdropVariants}
							initial='closed'
							animate='open'
							exit='closed'
							onClick={() => setIsOpen(false)}
						/>

						{/* Slide-in panel */}
						<motion.nav
							key='nav-panel'
							className={classNames(
								'fixed top-0 right-0 z-50 h-full w-72 flex flex-col justify-center px-10',
								'bg-white/95 dark:bg-black/95 backdrop-blur-md',
								'shadow-2xl border-l border-gray-200/30 dark:border-white/10',
								merryWeather.className,
							)}
							variants={menuVariants}
							initial='closed'
							animate='open'
							exit='closed'
						>
							{/* Close button inside panel */}
							<motion.button
								aria-label='Close menu'
								className={classNames(
									'absolute top-5 right-5 text-sm',
									mukta.className,
								)}
								onClick={() => setIsOpen(false)}
								whileTap={{ scale: 0.9 }}
							>
								<motion.div
									animate={isOpen ? { rotate: 0 } : { rotate: 180 }}
									className='w-8 h-8 flex items-center justify-center rounded-full border border-current opacity-60 hover:opacity-100 transition-opacity'
								>
									✕
								</motion.div>
							</motion.button>

							{/* Logo / Name */}
							<motion.div
								variants={linkVariants}
								className='mb-10 text-xs tracking-[0.2em] uppercase opacity-50'
							>
								Andrei Escalante
							</motion.div>

							{/* Nav links */}
							<ul className='space-y-1'>
								{navLinks.map(({ href, label }) => {
									const isActive =
										pathname === href || pathname?.startsWith(`${href}/`);
									return (
										<motion.li key={href} variants={linkVariants}>
											<Link
												href={href}
												className={classNames(
													'group flex items-baseline gap-2 py-3 text-3xl font-bold tracking-tight transition-colors',
													'hover:text-primary-500',
													isActive
														? 'text-primary-500'
														: 'text-black dark:text-white',
												)}
											>
												<span className='text-xs font-normal opacity-40 group-hover:opacity-100 transition-opacity'>
													/
												</span>
												{label}
											</Link>
										</motion.li>
									);
								})}
							</ul>

							{/* Footer hint */}
							<motion.p
								variants={linkVariants}
								className={classNames(
									'mt-12 text-xs opacity-30',
									mukta.className,
								)}
							>
								Press ESC or click outside to close
							</motion.p>
						</motion.nav>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
