import type { Project } from './types';

export const projects: Project[] = [
	{
		title: 'TALON',
		thumbnail: 'TALON.png',
		images: ['TALON.png'],
		color: '#fecaca',
		role: 'Fullstack Developer',
		description:
			'Tactical Assets & Logistics Operations Network (TALON) is a mission-critical supply management and monitoring platform designed for military logistics. It features mapped warehouse visualization, real-time inventory tracking, and automated document generation to streamline complex operational workflows.',
		stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
		isPrivate: true,
	},
	{
		title: 'Glimm Photobooth',
		thumbnail: 'Glimm.png',
		images: ['Glimm.png'],
		color: '#e9d5ff',
		role: 'Founder & Fullstack Developer',
		description:
			'Glimm is a modern, high-performance photobooth platform that allows users to capture, manage, and share photos instantly. It features custom template designs, instant digital delivery, and a sleek user interface designed for live events.',
		stack: [
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Prisma',
			'PostgreSQL',
			'Framer Motion',
		],
		isPrivate: true,
		liveUrl: 'https://glimm.pics',
	},
	{
		title: 'DTC Monitoring System',
		thumbnail: 'dtc-palawan.png',
		images: ['dtc-palawan.png'],
		color: '#bbf7d0',
		role: 'Fullstack Developer & UI/UX Designer',
		description:
			'A comprehensive client monitoring and event management system developed for the Digital Transformation Center – Palawan. It utilizes a personalized QR code system for automated check-ins/check-outs and enables seamless pre-registration for seminars and training events.',
		stack: [
			'React',
			'Node.js',
			'Express',
			'MongoDB',
			'QR Code API',
			'Tailwind CSS',
		],
		isPrivate: true,
	},
];
