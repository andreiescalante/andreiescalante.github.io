import classNames from 'classnames';
import { merryWeather, mukta } from '../fonts';
import type { ProjectModal } from './types';

interface ProjectProps {
	index: number;
	title: string;
	role: string;
	setModal: (modal: ProjectModal) => void;
	onClick: () => void;
}

export default function ProjectItem({
	index,
	title,
	role,
	setModal,
	onClick,
}: ProjectProps) {
	return (
		<button
			onClick={onClick}
			onMouseEnter={() => {
				setModal({ active: true, index });
			}}
			onMouseLeave={() => {
				setModal({ active: false, index });
			}}
			className='group flex w-full items-center justify-between border-b border-black/20 dark:border-neutral-800 px-4 py-8 sm:px-10 sm:py-10 transition-colors hover:bg-neutral-50 dark:hover:bg-white/5 cursor-pointer text-left'
		>
			<h2
				className={classNames(
					'text-xl transition-all group-hover:-translate-x-3 text-black dark:text-neutral-100 sm:text-3xl',
					merryWeather.className,
				)}
			>
				{title}
			</h2>
			<p
				className={classNames(
					'text-xs font-light transition-all group-hover:translate-x-3 text-black/60 dark:text-neutral-500 sm:text-base',
					mukta.className,
				)}
			>
				{role}
			</p>
		</button>
	);
}
