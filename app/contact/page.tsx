import classNames from 'classnames';
import type { Metadata } from 'next';
import Header from '../components/header';
import { merryWeather, mukta } from '../fonts';
import ContactForm from './contact-form';

export const metadata: Metadata = {
	title: 'Contact',
};

export default function ContactPage() {
	return (
		<main
			className={classNames(
				'relative min-h-svh px-4 md:px-24 lg:px-32 max-w-6xl mx-auto py-12',
				mukta.className,
			)}
		>
			<Header title='Contact' />

			<div className='mt-20'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
					{/* Left Side: Text and Info */}
					<div className='flex flex-col justify-center'>
						<h1
							className={classNames(
								'text-5xl md:text-7xl font-bold mb-8 tracking-tight',
								merryWeather.className,
							)}
						>
							Let's make something great together.
						</h1>
						<p className='text-lg md:text-xl opacity-80 mb-12 leading-relaxed'>
							Whether you have a question, a project idea, or just want to say
							hi, feel free to reach out. I'm always open to discussing new
							opportunities.
						</p>

						<div className='space-y-8'>
							<div className='flex items-start gap-5 group'>
								<div className='w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shrink-0 mt-1'>
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
										<rect width='20' height='16' x='2' y='4' rx='2' />
										<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
									</svg>
								</div>
								<div>
									<p className='text-sm opacity-50 uppercase tracking-widest font-bold mb-1'>
										Email
									</p>
									<a
										href='mailto:escalante.christopherandrei@gmail.com'
										className='text-xl font-medium hover:text-primary-500 transition-colors'
									>
										escalante.christopherandrei@gmail.com
									</a>
								</div>
							</div>

							<div className='flex items-start gap-5 group'>
								<div className='w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shrink-0 mt-1'>
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
										<path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path>
										<circle cx='12' cy='10' r='3'></circle>
									</svg>
								</div>
								<div>
									<p className='text-sm opacity-50 uppercase tracking-widest font-bold mb-1'>
										Location
									</p>
									<a
										href='https://maps.app.goo.gl/TjV6LebWAsCf3Tsx5'
										target='_blank'
										rel='noreferrer'
										className='text-xl font-medium hover:text-primary-500 transition-colors'
									>
										Brgy. San Miguel, Puerto Princesa City, Palawan, Philippines
										→
									</a>
								</div>
							</div>
						</div>

						<div className='mt-16'>
							<p className='text-sm opacity-50 uppercase tracking-widest font-bold mb-6'>
								Socials
							</p>
							<div className='flex gap-5'>
								<a
									href='https://www.linkedin.com/in/escalante-andrei/'
									target='_blank'
									rel='noreferrer'
									className='w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:border-primary-500 hover:text-primary-500 transition-all duration-300 bg-white/5'
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
										<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
										<rect width='4' height='12' x='2' y='9'></rect>
										<circle cx='4' cy='4' r='2'></circle>
									</svg>
								</a>
								<a
									href='https://github.com/andreiescalante'
									target='_blank'
									rel='noreferrer'
									className='w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:border-primary-500 hover:text-primary-500 transition-all duration-300 bg-white/5'
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
										<path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
										<path d='M9 18c-4.51 2-5-2-7-2'></path>
									</svg>
								</a>
								<a
									href='https://www.instagram.com/c.andrei_escalante'
									target='_blank'
									rel='noreferrer'
									className='w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:border-primary-500 hover:text-primary-500 transition-all duration-300 bg-white/5'
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
										<rect
											width='20'
											height='20'
											x='2'
											y='2'
											rx='5'
											ry='5'
										></rect>
										<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
										<line x1='17.5' x2='17.51' y1='6.5' y2='6.5'></line>
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* Right Side: Contact Form */}
					<div className='lg:max-w-[480px] lg:ml-auto w-full'>
						<ContactForm />
					</div>
				</div>
			</div>
		</main>
	);
}
