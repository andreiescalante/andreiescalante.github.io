import classNames from 'classnames';
import type { Metadata } from 'next';
import Header from '../components/header';
import { merryWeather, mukta } from '../fonts';

export const metadata: Metadata = {
	title: 'Skills',
};

const skillCategories = {
	Frontend: [
		'React / Next.js',
		'TypeScript',
		'Tailwind CSS',
		'Framer Motion',
		'GSAP',
		'Three.js',
	],
	Backend: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MongoDB', 'JWT'],
	Tools: ['Git / GitHub', 'Docker', 'Figma', 'Postman', 'Vercel', 'Netlify'],
	Other: ['UI/UX Design', 'SEO Optimization', 'Responsive Design', 'Agile'],
};

export default function SkillsPage() {
	return (
		<main
			className={classNames(
				'relative min-h-svh px-4 md:px-24 lg:px-32 max-w-4xl mx-auto py-12',
				mukta.className,
			)}
		>
			<Header title='Skills' />

			<div className='mt-20'>
				<h1
					className={classNames(
						'text-4xl md:text-6xl font-bold mb-12 tracking-tight text-black dark:text-neutral-100',
						merryWeather.className,
					)}
				>
					Technical <span className='text-primary-500'>Skills</span>.
				</h1>

				<p className='text-lg md:text-xl leading-relaxed text-black/90 dark:text-neutral-300 mb-16 max-w-2xl text-justify'>
					A curated list of my technical expertise and the tools I use to bring
					digital ideas to life.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
					{Object.entries(skillCategories).map(([category, items]) => (
						<div key={category}>
							<h2
								className={classNames(
									'text-2xl font-bold text-black dark:text-neutral-100 mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2',
									merryWeather.className,
								)}
							>
								{category}
							</h2>
							<ul className='space-y-4'>
								{items.map((skill) => (
									<li
										key={skill}
										className='text-lg text-black/80 dark:text-neutral-400'
									>
										{skill}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
