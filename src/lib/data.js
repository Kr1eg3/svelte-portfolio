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
		media: null,  // { type: 'video', src: '/media/vq-analyzer.webm' },
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
	},
	{
		id: 'ue5-shooter',
		title: 'UE5 Third Person Shooter',
		subtitle: 'GAS-driven shooter with procedural levels',
		status: 'private',
		url: null,
		media: { type: 'video', src: '/media/ue5_third_person_shooter.webm' },
		description: `A team project (~1.5 years) where I own the full codebase design. Built on
			GAS — nearly all actions are abilities with Gameplay Effects and Tags. Features custom
			projectile/hit-scan weapon system, procedural level generation, Behaviour Tree AI,
			wave-based enemy spawner, and a dismemberment system. Enhanced Input for controls,
			HUD for abilities and health. Full project available upon request.`,
		tags: ['C++', 'Unreal Engine 5', 'GAS', 'Behaviour Trees', 'Procedural Generation'],
		links: [
			{ label: 'Progress on X', href: '#' }
		]
	},
	{
		id: 'tui-audio-player',
		title: 'TUI Audio Player',
		subtitle: 'Networked music player with terminal UI',
		status: 'open-source',
		url: 'https://github.com/Kr1eg3/tui_audio_player',
		media: { type: 'image', src: '/media/audio-player-tui.jpg' },
		description: `Cross-platform C++20 terminal music player with networked jam sessions.
			Host/guest architecture syncs playback, playlists, and file transfers in real-time
			over a custom binary protocol. Built with FTXUI, miniaudio, and standalone ASIO.`,
		tags: ['C++20', 'FTXUI', 'ASIO', 'miniaudio', 'CMake'],
		links: [
			{ label: 'View Source on GitHub', href: 'https://github.com/Kr1eg3/tui_audio_player' }
		]
	},
	{
		id: 'dx12-engine',
		title: 'DX12 Game Engine',
		subtitle: 'Custom real-time graphics engine',
		status: 'open-source',
		url: '#',
		media: null,
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
		title: 'Vulkan Practice',
		subtitle: 'Learning Vulkan from the ground up',
		status: 'open-source',
		url: 'https://github.com/Kr1eg3/VulkanPractice',
		media: { type: 'video', src: '/media/vulkan-practice.webm' },
		description: `A hands-on Vulkan project covering the full pipeline: instance/device setup,
			swap chains, SPIR-V shaders, render passes, command buffers, GPU synchronization
			with semaphores/fences, vertex/index buffers, descriptor sets, texture sampling
			with mipmaps, and depth/stencil testing.`,
		tags: ['C++', 'Vulkan', 'GLSL', 'SPIR-V'],
		links: [
			{ label: 'View Source on GitHub', href: 'https://github.com/Kr1eg3/VulkanPractice' }
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
