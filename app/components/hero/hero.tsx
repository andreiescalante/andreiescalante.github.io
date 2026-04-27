import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { merryWeather } from '../../fonts';
import { GithubIcon } from '../layouts/icons/github-icon';
import { InstagramIcon } from '../layouts/icons/instagram-icon';
import { LinkedinIcon } from '../layouts/icons/linkedin-icon';
import { MailIcon } from '../layouts/icons/mail-icon';
import SplashCursor from '../splash-cursor';

export default function Hero() {
	return (
		<main className='relative min-h-svh w-screen overflow-hidden'>
			<SplashCursor
				containerClassName='min-h-svh w-screen'
				usePrimaryColors={true}
			>
				<div
					className={classNames('relative min-h-svh', merryWeather.className)}
				>
					<div className='absolute top-[15%] md:top-[30%] lg:top-[35%] max-w-[80rem] w-full flex flex-col md:flex-row items-start justify-between px-8 md:px-12 lg:ml-14 gap-12'>
						{/* Text Content - Matches original Andrei Escalante layout */}
						<div className='flex-1 flex flex-col space-y-4 order-2 md:order-1 text-left max-w-3xl mt-6 md:mt-10'>
							<h1 className='text-2xl font-medium md:mr-4 md:text-4xl tracking-tight'>
								Welcome to my{' '}
								<span className='font-bold'>personal portfolio — </span> my{' '}
								<span className='italic'>personal tech diary</span>.
							</h1>

							<section className='relative z-10'>
								<p className='text-base text-justify opacity-90'>
									I'm <span className='font-bold'>Andrei Escalante</span> — a
									Software Developer and forever a student of the craft. I love
									building things for the web and am always on the lookout for
									new challenges and opportunities to learn. I'm passionate
									about creating beautiful and functional user experiences.
								</p>
							</section>

							<section className='relative z-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 items-center text-sm'>
								<div className='flex flex-col items-start'>
									<p className='mb-1 opacity-50'>More about me:</p>
									<div className='flex -ml-2'>
										<Link
											href='https://www.linkedin.com/in/escalante-andrei/'
											target='_blank'
											rel='noreferrer'
											aria-label='linkedin'
											data-skip-splash-cursor
										>
											<LinkedinIcon className='h-9 w-9 hover:text-primary-500 transition-colors' />
										</Link>
										<Link
											href='https://github.com/andreiescalante'
											target='_blank'
											rel='noreferrer'
											aria-label='github'
											data-skip-splash-cursor
										>
											<GithubIcon className='h-9 w-9 hover:text-primary-500 transition-colors' />
										</Link>

										<Link
											href='https://www.instagram.com/c.andrei_escalante'
											target='_blank'
											rel='noreferrer'
											aria-label='instagram'
											data-skip-splash-cursor
										>
											<InstagramIcon className='h-9 w-9 hover:text-primary-500 transition-colors' />
										</Link>
										<Link
											href='mailto:escalante.christopherandrei@gmial.com'
											aria-label='email'
											rel='noreferrer'
											data-skip-splash-cursor
										>
											<MailIcon className='h-9 w-9 hover:text-primary-500 transition-colors' />
										</Link>
									</div>
								</div>
								<div className='hidden md:block h-14 border-l border-gray-300 dark:border-gray-700' />
								<div
									className='flex flex-wrap gap-3 text-sm'
									data-skip-splash-cursor
								>
									<Link
										href='/about'
										className='hover:text-primary-500 transition-colors'
									>
										/about
									</Link>
									<Link
										href='/skills'
										className='hover:text-primary-500 transition-colors'
									>
										/skills
									</Link>
									<Link
										href='/projects'
										className='hover:text-primary-500 transition-colors'
									>
										/projects
									</Link>
									<Link
										href='/contact'
										className='hover:text-primary-500 transition-colors'
									>
										/contact
									</Link>
								</div>
							</section>
						</div>

						{/* Large Square Avatar - Stays on the right */}
						<div className='relative shrink-0 order-1 md:order-2 group mt-4 md:mt-0 md:translate-x-12 lg:translate-x-20'>
							<div className='relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-gray-100 dark:bg-neutral-900 border-2 border-neutral-800 shadow-2xl overflow-hidden rounded-lg'>
								<Image
									src='/static/images/Andrei_Escalante.jpg'
									alt='Andrei Escalante'
									fill
									className='object-cover transition-all duration-700 scale-105 group-hover:scale-110 group-hover:opacity-0'
									priority
								/>
								<Image
									src='/static/images/Like.png'
									alt='Like'
									fill
									className='object-cover transition-all duration-700 scale-105 group-hover:scale-110 opacity-0 group-hover:opacity-100'
								/>
								<div className='absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
									<p className='text-white text-[10px] font-sans tracking-widest uppercase'>
										Software Developer
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</SplashCursor>
		</main>
	);
}
