import classNames from 'classnames';
import type { Metadata } from 'next';
import Header from '../components/header';
import { merryWeather, mukta } from '../fonts';

export const metadata: Metadata = {
	title: 'About',
};

export default function AboutPage() {
	return (
		<main
			className={classNames(
				'relative min-h-svh px-4 md:px-24 lg:px-32 max-w-4xl mx-auto py-12',
				mukta.className,
			)}
		>
			<Header title='About' />

			<div className='mt-20'>
				<h1
					className={classNames(
						'text-4xl md:text-6xl font-bold mb-12 tracking-tight text-black dark:text-neutral-100',
						merryWeather.className,
					)}
				>
					Hi, I&apos;m <span className='text-primary-500'>Andrei</span>.
				</h1>

				<div className='space-y-8 text-lg md:text-xl leading-relaxed text-black/90 dark:text-neutral-300 text-justify'>
					<p>
						I am a{' '}
						<span className='font-bold text-black dark:text-neutral-100'>
							Full-Stack Software Engineer
						</span>{' '}
						and{' '}
						<span className='font-bold text-black dark:text-neutral-100'>
							IT Student
						</span>
						. My journey in technology is driven by a passion for solving
						problems through software solutions with intuitive design.
					</p>

					<p>
						I mainly use JavaScript for development. I have worked on a diverse
						range of projects—from building modern web and mobile applications
						to designing high-converting UI/UX solutions. I believe that a great
						product is the perfect balance between robust engineering and a
						seamless user experience.
					</p>

					<p>
						Lately, I&apos;ve been diving deep into the world of Artificial
						Intelligence. I am focused on utilizing AI tools and techniques into
						building modern applications to create smarter, more efficient
						software solutions. My expertise includes building AI-powered
						full-stack development and designing goal-oriented landing pages and
						sales funnels.
					</p>

					<p>
						When I&apos;m not coding, I&apos;m usually exploring new
						technologies, pushing the boundaries of web development, and always
						looking for new challenges that allow me to grow as a developer.
					</p>
				</div>

				<section className='border-t border-black/20 dark:border-white/10 mt-20 pt-12'>
					<h3
						className={classNames(
							'text-2xl font-bold mb-8 tracking-tight text-black dark:text-neutral-100',
							merryWeather.className,
						)}
					>
						Experience
					</h3>
					<div className='space-y-12'>
						<div>
							<h4 className='text-xl font-bold text-black dark:text-neutral-100'>
								Web Developer Intern
							</h4>
							<div className='flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2'>
								<a
									href='https://maps.app.goo.gl/b6uYs6DctJgVN8786'
									target='_blank'
									rel='noopener noreferrer'
									className='text-lg text-primary-500 hover:underline transition-colors'
								>
									Western Command of The Philippines – 2nd Joint Logistics
									Support Group
								</a>
								<span className='text-sm text-neutral-500 italic'>
									February 2026 – May 2026 |{' '}
									<a
										href='https://maps.app.goo.gl/XwNSBiNfQ1ZHhXDm6'
										target='_blank'
										rel='noopener noreferrer'
										className='hover:text-black dark:hover:text-neutral-300 transition-colors'
									>
										Puerto Princesa, Palawan
									</a>
								</span>
							</div>
							<ul className='list-disc list-outside pl-5 space-y-4 text-lg text-black/90 dark:text-neutral-300 text-justify'>
								<li>
									Engineered and deployed &quot;TALON&quot; (Tactical Assets &
									Logistics Operations Network), a full-stack supply management
									and monitoring platform featuring mapped warehouse
									visualization that streamlined military logistics and improved
									tracking efficiency by over&nbsp;40%.
								</li>
								<li>
									Implemented rigorous system security utilizing Two-Factor
									Authentication, JWT encryption, and hierarchical access
									controls to protect sensitive supply data, ensuring absolute
									data integrity across all monitored&nbsp;locations.
								</li>
								<li>
									Digitized manual logistics workflows by automating the
									generation of Requisition and Issue Vouchers with encrypted
									digital signatures, cutting document processing time by 50%
									while maintaining real-time monitoring&nbsp;logs.
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className='border-t border-black/20 dark:border-white/10 mt-20 pt-12'>
					<h3
						className={classNames(
							'text-2xl font-bold mb-8 tracking-tight text-black dark:text-neutral-100',
							merryWeather.className,
						)}
					>
						Education
					</h3>
					<div className='space-y-12'>
						<div>
							<h4 className='text-xl font-bold text-black dark:text-neutral-100'>
								BS in Information Technology
							</h4>
							<div className='flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2'>
								<a
									href='https://maps.app.goo.gl/Eg6V1Qdjq5wq2eVv9'
									target='_blank'
									rel='noopener noreferrer'
									className='text-lg text-primary-500 hover:underline transition-colors'
								>
									STI College
								</a>
								<span className='text-sm text-neutral-500 italic'>
									2025 – 2026 |{' '}
									<a
										href='https://maps.app.goo.gl/XwNSBiNfQ1ZHhXDm6'
										target='_blank'
										rel='noopener noreferrer'
										className='hover:text-black dark:hover:text-neutral-300 transition-colors'
									>
										Puerto Princesa, Palawan
									</a>
								</span>
							</div>
							<div className='space-y-4'>
								<p className='text-lg font-medium text-black dark:text-neutral-200'>
									Capstone:{' '}
									<span className='text-primary-500 font-normal'>
										Digital Transformation Center – Palawan QR Code-Based Client
										Monitoring System
									</span>
								</p>
								<ul className='list-disc list-outside pl-5 space-y-4 text-lg text-black/90 dark:text-neutral-300 text-justify'>
									<li>
										Designed the end-to-end user experience and engineered a
										full-stack platform for{' '}
										<a
											href='https://maps.app.goo.gl/3xZcggcmur4EFkCP8'
											target='_blank'
											rel='noopener noreferrer'
											className='text-primary-500 hover:underline transition-colors font-semibold'
										>
											DICT-DTC Palawan
										</a>{' '}
										to modernize event management and training center
										operations, boosting overall operational efficiency by
										over&nbsp;40%.
									</li>
									<li>
										Developed a personalized account portal that generates
										unique QR codes for clients, automating the login and logout
										tracking process while reducing manual check-in time by
										approximately&nbsp;70%.
									</li>
									<li>
										Built an integrated event pre-registration system allowing
										clients to use their digital ID to reserve slots for
										seminars and trainings, achieving a 100% digital record
										accuracy&nbsp;rate.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className='border-t border-black/20 dark:border-white/10 mt-20 pt-12'>
					<h3
						className={classNames(
							'text-2xl font-bold mb-6 tracking-tight text-black dark:text-neutral-100',
							merryWeather.className,
						)}
					>
						Let&apos;s Connect
					</h3>
					<p className='text-lg text-black/90 dark:text-neutral-300 text-justify'>
						I&apos;m always open to discussing new projects, creative ideas, or
						opportunities to be part of your vision. Whether you need a web
						solution or a tech consultation, feel free to reach out.
					</p>
				</section>
			</div>
		</main>
	);
}
