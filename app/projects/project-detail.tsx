'use client';

import classNames from 'classnames';
import { useLenis } from 'lenis/react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { merryWeather, mukta } from '../fonts';
import type { Project } from './types';

interface ProjectDetailProps {
	project: Project | null;
	onClose: () => void;
}

export default function ProjectDetail({
	project,
	onClose,
}: ProjectDetailProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const lenis = useLenis();

	useEffect(() => {
		if (project) {
			lenis?.stop();
			document.body.style.overflow = 'hidden';
		} else {
			lenis?.start();
			document.body.style.overflow = 'unset';
		}
		return () => {
			lenis?.start();
			document.body.style.overflow = 'unset';
		};
	}, [project, lenis]);

	if (!project) return null;

	const images = project.images || [project.thumbnail];

	const nextImage = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCurrentImageIndex((prev) => (prev + 1) % images.length);
	};

	const prevImage = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	return (
		<AnimatePresence>
			{project && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm'
					onClick={onClose}
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.9, opacity: 0, y: 20 }}
						className='relative max-w-4xl w-full bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]'
						onClick={(e) => e.stopPropagation()}
						data-lenis-prevent
					>
						{/* Close Button */}
						<button
							onClick={onClose}
							className='absolute top-4 right-4 z-[110] p-2 rounded-full bg-neutral-900/50 dark:bg-black/50 text-white hover:bg-neutral-900/70 dark:hover:bg-black/70 transition-colors'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<line x1='18' y1='6' x2='6' y2='18'></line>
								<line x1='6' y1='6' x2='18' y2='18'></line>
							</svg>
						</button>

						<div className='overflow-y-auto'>
							{/* Image Carousel */}
							<div className='relative h-64 md:h-[480px] w-full bg-neutral-100 dark:bg-neutral-950 flex-shrink-0 group/carousel'>
								<AnimatePresence mode='wait'>
									<motion.div
										key={currentImageIndex}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -20 }}
										transition={{ duration: 0.3 }}
										className='relative h-full w-full'
									>
										<Image
											src={`/static/images/project/${images[currentImageIndex]}`}
											alt={project.title}
											fill
											className='object-contain p-4 md:p-8'
											priority
										/>
									</motion.div>
								</AnimatePresence>

								{images.length > 1 && (
									<>
										<button
											onClick={prevImage}
											className='absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/40 dark:bg-black/40 text-neutral-900 dark:text-white backdrop-blur-md border border-neutral-200 dark:border-white/10 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all z-[110] opacity-0 group-hover/carousel:opacity-100'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='20'
												height='20'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<polyline points='15 18 9 12 15 6'></polyline>
											</svg>
										</button>
										<button
											onClick={nextImage}
											className='absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/40 dark:bg-black/40 text-neutral-900 dark:text-white backdrop-blur-md border border-neutral-200 dark:border-white/10 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all z-[110] opacity-0 group-hover/carousel:opacity-100'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='20'
												height='20'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<polyline points='9 18 15 12 9 6'></polyline>
											</svg>
										</button>

										{/* Pagination Dots */}
										<div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-[110]'>
											{images.map((_, i) => (
												<div
													key={i}
													className={classNames(
														'h-1.5 transition-all duration-300 rounded-full',
														i === currentImageIndex
															? 'w-6 bg-primary-500'
															: 'w-1.5 bg-neutral-900/30 dark:bg-white/30',
													)}
												/>
											))}
										</div>
									</>
								)}
							</div>

							{/* Content */}
							<div className={classNames('p-8 md:p-14', mukta.className)}>
								<div className='flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12'>
									<div>
										<h2
											className={classNames(
												'text-4xl md:text-6xl font-bold text-black dark:text-white mb-3 tracking-tight',
												merryWeather.className,
											)}
										>
											{project.title}
										</h2>
										<p className='text-primary-500 font-medium text-xl tracking-wide uppercase text-sm'>
											{project.role}
										</p>
									</div>
								</div>

								<div className='lg:col-span-12 space-y-12'>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
										<section>
											<h3 className='text-black dark:text-white font-bold mb-4 text-2xl border-l-4 border-primary-500 pl-4'>
												Overview
											</h3>
											<p className='text-justify leading-relaxed text-lg text-black/90 dark:text-neutral-400'>
												{project.description}
											</p>
										</section>

										<section>
											<h3 className='text-black dark:text-white font-bold mb-6 text-2xl border-l-4 border-primary-500 pl-4'>
												Technologies
											</h3>
											<div className='flex flex-wrap gap-3'>
												{project.stack.map((tech) => (
													<span
														key={tech}
														className='px-5 py-2 bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 rounded-xl text-sm font-medium text-black/80 dark:text-neutral-200 hover:border-primary-500/50 transition-colors'
													>
														{tech}
													</span>
												))}
											</div>
										</section>
									</div>

									{/* Direct Actions Section */}
									<section className='pt-8 border-t border-black/10 dark:border-white/10'>
										<div className='flex flex-col md:flex-row items-center justify-center gap-4'>
											{project.liveUrl && (
												<a
													href={project.liveUrl}
													target='_blank'
													rel='noopener noreferrer'
													className='group w-full md:w-auto px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold transition-all hover:bg-primary-500 hover:text-white active:scale-95 flex items-center justify-center gap-2'
												>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='18'
														height='18'
														viewBox='0 0 24 24'
														fill='none'
														stroke='currentColor'
														strokeWidth='2.5'
														strokeLinecap='round'
														strokeLinejoin='round'
													>
														<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
														<polyline points='15 3 21 3 21 9'></polyline>
														<line x1='10' y1='14' x2='21' y2='3'></line>
													</svg>
													<span className='text-base'>Live</span>
												</a>
											)}

											{project.githubUrl && (
												<a
													href={project.githubUrl}
													target='_blank'
													rel='noopener noreferrer'
													className='w-full md:w-auto px-6 py-3 bg-white dark:bg-white/5 text-black dark:text-white border border-neutral-200 dark:border-white/10 rounded-xl font-bold hover:bg-neutral-100 dark:hover:bg-white/10 hover:border-neutral-300 dark:hover:border-white transition-all active:scale-95 flex items-center justify-center gap-2'
												>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='18'
														height='18'
														viewBox='0 0 24 24'
														fill='none'
														stroke='currentColor'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
													>
														<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
													</svg>
													<span className='text-base'>Source Repository</span>
												</a>
											)}

											{project.isPrivate && (
												<div className='flex items-center justify-center gap-4 py-3 px-5 rounded-xl bg-neutral-100 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/5 w-full md:w-auto'>
													<div className='p-2 bg-primary-500/10 rounded-full shrink-0'>
														<svg
															className='text-primary-500'
															xmlns='http://www.w3.org/2000/svg'
															width='16'
															height='16'
															viewBox='0 0 24 24'
															fill='none'
															stroke='currentColor'
															strokeWidth='2.5'
															strokeLinecap='round'
															strokeLinejoin='round'
														>
															<rect
																x='3'
																y='11'
																width='18'
																height='11'
																rx='2'
																ry='2'
															></rect>
															<path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
														</svg>
													</div>
													<p className='text-black/70 dark:text-neutral-400 text-sm leading-relaxed max-w-sm text-center md:text-left'>
														This repository is{' '}
														<span className='text-black dark:text-white font-semibold'>
															private
														</span>
														. DM me if you&apos;d like to discuss anything about
														this project.
													</p>
												</div>
											)}
										</div>
									</section>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
