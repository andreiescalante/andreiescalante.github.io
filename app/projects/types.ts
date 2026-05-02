export interface Project {
	title: string;
	thumbnail: string;
	images?: string[];
	color: string;
	role: string;
	description: string;
	stack: string[];
	isPrivate?: boolean;
	liveUrl?: string;
	githubUrl?: string;
}

export interface ProjectModal {
	active: boolean;
	index: number;
}
