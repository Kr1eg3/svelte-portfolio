/**
 * Данные проектов для портфолио.
 * Редактируй этот файл, чтобы добавить/удалить/изменить проекты.
 *
 * Поля:
 *   id       — уникальный якорь (для навигации #id)
 *   title    — название проекта
 *   subtitle — короткое описание в одну строку
 *   status   — 'open-source' | 'proprietary' | 'private'
 *   url      — ссылка в заголовке (опционально)
 *   media    — { type: 'image'|'video', src: '...' } или null
 *   description — полное описание (HTML-строки допустимы)
 *   tags     — массив технологий
 *   links    — массив { label, href }
 */

/** @type {import('./types').Project[]} */
export const projects = [
	{
		id: 'vq-analyzer',
		title: 'VQ Analyzer',
		subtitle: 'Professional video codec analysis tool',
		status: 'proprietary',
		url: null,
		media: null, // замени на { type: 'image', src: '/media/vq-analyzer.webp' }
		description: `A comprehensive video quality analyzer for professional codec development.
			I design and implement visualizations for various decoding stages across multiple
			codec standards including AV1, HEVC, AVC, and AVS3. The tool helps engineers
			understand and debug complex compression algorithms through intuitive visual
			representations of prediction blocks, motion vectors, transform coefficients,
			and filtering operations.`,
		tags: ['C++', 'AV1', 'HEVC', 'AVC', 'AVS3', 'AVM', 'Qt', 'OpenGL'],
		links: [
			{ label: 'Company Website', href: 'https://vicuesoft.com' }
		]
	},
	{
		id: 'dx12-engine',
		title: 'DX12 Game Engine',
		subtitle: 'Custom real-time graphics engine',
		status: 'open-source',
		url: '#', // замени на GitHub URL
		media: null, // замени на { type: 'video', src: '/media/dx12-engine.webm' }
		description: `A from-scratch DirectX 12 renderer with focus on modern rendering
			techniques and 2D/UI integration. Features include a flexible render graph
			architecture, PBR materials pipeline, and efficient batched 2D rendering for
			UI overlays. Built to deeply understand low-level GPU programming and modern
			graphics API design patterns.`,
		tags: ['C++', 'DirectX 12', 'HLSL', 'PBR', 'Render Graph'],
		links: [
			{ label: 'View Source on GitHub', href: '#' }
		]
	},
	{
		id: 'vulkan-renderer',
		title: 'Vulkan Renderer',
		subtitle: 'Cross-platform graphics experiments',
		status: 'open-source',
		url: '#',
		media: null,
		description: `Experimental Vulkan-based renderer exploring modern GPU-driven rendering
			techniques. Implements compute-based culling, bindless resources, and async
			compute for parallel workload execution. Serves as a testbed for implementing
			techniques from GDC talks and graphics research papers.`,
		tags: ['C++', 'Vulkan', 'GLSL', 'SPIR-V', 'Compute Shaders'],
		links: [
			{ label: 'View Source on GitHub', href: '#' }
		]
	},
	{
		id: 'ue5-framework',
		title: 'UE5 Game Framework',
		subtitle: 'Modular gameplay systems for Unreal Engine 5',
		status: 'private',
		url: null,
		media: null,
		description: `A collection of reusable gameplay systems built in Unreal Engine 5.
			Includes inventory management, ability system integration, procedural animation
			layers, and optimized networking for multiplayer scenarios. Focused on clean
			architecture and Blueprint-friendly C++ interfaces.`,
		tags: ['C++', 'Unreal Engine 5', 'Blueprints', 'GAS', 'Networking'],
		links: [
			{ label: 'Demo Video', href: '#' }
		]
	},
	{
		id: 'ai-dev-tools',
		title: 'AI Dev Tools',
		subtitle: 'LLM integrations for developer productivity',
		status: 'open-source',
		url: '#',
		media: null,
		description: `Exploring AI-assisted development workflows through MCP server
			integrations and RAG systems. Building tools that help automate repetitive
			tasks like merging upstream codec changes while preserving custom instrumentation
			code. Investigating how LLMs can enhance developer expertise in complex codebases.`,
		tags: ['Python', 'TypeScript', 'MCP', 'RAG', 'LLM'],
		links: [
			{ label: 'View Source on GitHub', href: '#' }
		]
	}
];

export const skills = [
	{
		category: 'Graphics APIs',
		items: ['DirectX 11/12', 'Vulkan', 'OpenGL', 'HLSL / GLSL']
	},
	{
		category: 'Video Codecs',
		items: ['AV1 / AVM', 'HEVC (H.265)', 'AVC (H.264)', 'AVS3']
	},
	{
		category: 'Languages',
		items: ['C++ (primary)', 'C', 'Python', 'x86 Assembly']
	},
	{
		category: 'Tools & Low-level',
		items: ['SIMD (AVX/SSE)', 'Git', 'CMake', 'Reverse Engineering']
	}
];

export const meta = {
	name: 'Arkadiy Pozharskiy',
	tagline: 'Graphics & Codecs',
	role: 'Software Engineer | Video Codec Specialist | Graphics Programmer',
	bio: `I'm a software engineer specializing in video codec analysis and real-time
		graphics. I combine deep knowledge of compression algorithms with hands-on
		experience building custom renderers using DirectX, Vulkan, and OpenGL.
		Currently working on decoder visualization tools and exploring AI-assisted
		development workflows.`,
	cta: 'Interested in video codecs, graphics programming, or game development? Let\'s connect.',
	contacts: [
		{ label: 'github', value: '@Kr1eg3', href: 'https://github.com/Kr1eg3' },
		{ label: 'email', value: 'pozharskiyarkadiy@gmail.com', href: 'mailto:pozharskiyarkadiy@gmail.com' }
	],
	location: 'Paphos, Cyprus'
};
