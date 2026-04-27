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
						'text-4xl md:text-6xl font-bold mb-12 tracking-tight',
						merryWeather.className,
					)}
				>
					Hi, I&apos;m <span className='text-primary-500'>Andrei</span>.
				</h1>

				<div className='space-y-8 text-lg md:text-xl leading-relaxed opacity-90'>
					<p>
						I am a{' '}
						<span className='font-bold text-white'>
							Full-Stack Software Engineer
						</span>{' '}
						and <span className='font-bold text-white'>IT Student</span>. My
						journey in technology is driven by a passion for solving problems
						through software solutions with intuitive design.
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
						When I'm not coding, I'm usually exploring new technologies, pushing
						the boundaries of web development, and always looking for new
						challenges that allow me to grow as a developer.
					</p>
				</div>

				<section className='border-t border-gray-200 dark:border-white/10 mt-20 pt-12'>
					<h3
						className={classNames(
							'text-xl font-bold mb-6 uppercase tracking-widest text-primary-500',
							mukta.className,
						)}
					>
						Let&apos;s Connect
					</h3>
					<p className='text-lg opacity-80'>
						I'm always open to discussing new projects, creative ideas, or
						opportunities to be part of your vision. Whether you need a web
						solution or a tech consultation, feel free to reach out.
					</p>
				</section>
			</div>
		</main>
	);
}
