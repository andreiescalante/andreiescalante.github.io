import classNames from 'classnames';
import type { Metadata } from 'next';
import Header from '../components/header';
import { merryWeather, mukta } from '../fonts';

export const metadata: Metadata = {
	title: 'Skills',
};

const skills = {
	Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
	Backend: ['Node.js', 'REST APIs', 'PostgreSQL', 'Prisma'],
	Tools: ['Git', 'VS Code', 'Figma', 'Vercel', 'Docker'],
};

export default function SkillsPage() {
	return (
		<main
			className={classNames(
				'relative min-h-svh px-4 md:px-24 lg:px-32 max-w-6xl mx-auto py-12',
				mukta.className,
			)}
		>
			<Header title='Skills' />
			<h1
				className={classNames(
					'text-5xl md:text-7xl font-bold mb-8 tracking-tight hidden',
					merryWeather.className,
				)}
			>
				Skills
			</h1>
			<p className='text-lg md:text-xl leading-relaxed opacity-80 mb-12 max-w-2xl'>
				Technologies and tools I use to bring ideas to life.
			</p>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{Object.entries(skills).map(([category, items]) => (
					<div
						key={category}
						className='p-6 rounded-2xl border border-gray-200 dark:border-white/10'
					>
						<h2
							className={classNames(
								'text-lg font-bold mb-4 text-primary-500',
								merryWeather.className,
							)}
						>
							{category}
						</h2>
						<ul className='space-y-2'>
							{items.map((skill) => (
								<li
									key={skill}
									className='text-sm opacity-80 flex items-center gap-2'
								>
									<span className='w-1.5 h-1.5 rounded-full bg-primary-500 inline-block' />
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</main>
	);
}
