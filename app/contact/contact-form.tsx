'use client';

export default function ContactForm() {
	return (
		<div className='p-6 md:p-8 rounded-[2rem] border border-gray-200 dark:border-white/10 bg-gray-200 dark:bg-white/5 shadow-2xl shadow-gray-200/50 dark:shadow-none backdrop-blur-sm'>
			<form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
				<div className='space-y-2'>
					<label
						htmlFor='name'
						className='text-sm font-bold uppercase tracking-widest opacity-60 ml-2'
					>
						Full Name
					</label>
					<input
						type='text'
						id='name'
						placeholder='Your full name'
						className='w-full px-6 py-3.5 rounded-2xl bg-white dark:bg-neutral-900/50 border border-gray-200 dark:border-white/10 focus:border-primary-500 outline-none transition-all text-lg'
					/>
				</div>
				<div className='space-y-2'>
					<label
						htmlFor='email'
						className='text-sm font-bold uppercase tracking-widest opacity-60 ml-2'
					>
						Email Address
					</label>
					<input
						type='email'
						id='email'
						placeholder='your@email.com'
						className='w-full px-6 py-3.5 rounded-2xl bg-white dark:bg-neutral-900/50 border border-gray-200 dark:border-white/10 focus:border-primary-500 outline-none transition-all text-lg'
					/>
				</div>
				<div className='space-y-2'>
					<label
						htmlFor='message'
						className='text-sm font-bold uppercase tracking-widest opacity-60 ml-2'
					>
						Your Message
					</label>
					<textarea
						id='message'
						rows={3}
						placeholder='How can I help you?'
						className='w-full px-6 py-3.5 rounded-2xl bg-white dark:bg-neutral-900/50 border border-gray-200 dark:border-white/10 focus:border-primary-500 outline-none transition-all text-lg resize-none'
					></textarea>
				</div>
				<button
					type='submit'
					className='w-full py-4 rounded-2xl bg-primary-500 text-white font-bold text-lg hover:bg-primary-600 transition-all shadow-2xl shadow-primary-500/30 active:scale-[0.98]'
				>
					Send Message
				</button>
			</form>
		</div>
	);
}
