import Projects from 'app/projects/projects';
import classNames from 'classnames';
import type { Metadata } from 'next';
import Header from '../components/header';
import { merryWeather, mukta } from '../fonts';

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Selected projects by Andrei Escalante',
};

export default function ProjectsPage() {
	return (
		<main
			className={classNames(
				'relative min-h-svh px-4 md:px-24 lg:px-32 max-w-4xl mx-auto py-12',
				mukta.className,
			)}
		>
			<Header title='Projects' />

			<div className='mt-20'>
				<h1
					className={classNames(
						'text-4xl md:text-6xl font-bold mb-12 tracking-tight text-black dark:text-neutral-100',
						merryWeather.className,
					)}
				>
					Selected <span className='text-primary-500'>Projects</span>.
				</h1>

				<p className='text-lg md:text-xl leading-relaxed text-black/90 dark:text-neutral-300 mb-16 max-w-2xl text-justify'>
					A collection of platforms and applications I&apos;ve developed all
					throughout my IT journey.
				</p>

				<div className='mt-12'>
					<Projects />
				</div>
			</div>
		</main>
	);
}
