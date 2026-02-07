<script>
	/** @type {import('$lib/types').Project} */
	let { project } = $props();

	const statusClass = {
		'open-source': 'status-badge-open',
		'proprietary': 'status-badge-proprietary',
		'private': 'status-badge-private'
	};
</script>

<article class="project" id={project.id}>
	{#if project.media}
		<div class="project-media">
			{#if project.media.type === 'video'}
				<video
					src={project.media.src}
					autoplay
					loop
					muted
					playsinline
				>
					<track kind="captions" />
				</video>
			{:else}
				<img
					src={project.media.src.startsWith('http')
						? `/api/thumbnail?src=${encodeURIComponent(project.media.src)}&w=960&h=540&format=webp&q=82`
						: project.media.src}
					alt="{project.title} thumbnail"
					loading="lazy"
				/>
			{/if}
		</div>
	{:else}
		<div class="project-media placeholder">
			<span>[ screenshot or video ]</span>
		</div>
	{/if}

	<div class="project-body">
		<h2 class="project-title">
			{#if project.url}
				<a href={project.url}>{project.title}</a>
			{:else}
				{project.title}
			{/if}
		</h2>

		<p class="project-subtitle">{project.subtitle}</p>

		<p class="project-description">{project.description}</p>

		<div class="project-tags">
			<span class="status-badge {statusClass[project.status] ?? ''}">{project.status}</span>
			{#each project.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>

		{#if project.links.length > 0}
			<div class="project-links">
				{#each project.links as link}
					<a href={link.href} target="_blank" rel="noopener noreferrer">
						{link.label}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</article>

<style>
	.project {
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--bg-secondary);
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
	}

	.project-body {
		padding: 24px;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.project-title {
		font-family: 'JetBrains Mono', monospace;
		font-size: 1.15rem;
		font-weight: 500;
		margin-bottom: 6px;
	}

	.project-title a {
		color: inherit;
		transition: color 0.2s;
	}

	.project-title a:hover {
		color: var(--accent);
	}

	.project-subtitle {
		font-size: 0.95rem;
		color: var(--text-secondary);
		margin-bottom: 24px;
		font-style: italic;
	}

	.status-badge {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.73rem;
		padding: 4px 10px;
		border-radius: 4px;
		font-weight: 500;
	}

	.status-badge-open {
		color: #4ade80;
		background: rgba(74, 222, 128, 0.1);
		border: 1px solid rgba(74, 222, 128, 0.3);
	}

	.status-badge-proprietary {
		color: #fb923c;
		background: rgba(251, 146, 60, 0.1);
		border: 1px solid rgba(251, 146, 60, 0.3);
	}

	.status-badge-private {
		color: #f87171;
		background: rgba(248, 113, 113, 0.1);
		border: 1px solid rgba(248, 113, 113, 0.3);
	}

	.project-media {
		background: var(--bg-secondary);
		border-bottom: 1px solid var(--border);
	}

	.project-media img,
	.project-media video {
		width: 100%;
		display: block;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	.project-media.placeholder {
		aspect-ratio: 16 / 9;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-muted);
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.85rem;
	}

	.project-description {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin-bottom: 24px;
		line-height: 1.6;
		flex: 1;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 24px;
	}

	.tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.73rem;
		padding: 4px 10px;
		background: var(--tag-bg);
		border: 1px solid var(--tag-border);
		border-radius: 4px;
		color: var(--text-secondary);
		transition: border-color 0.2s, color 0.2s;
	}

	.tag:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	.project-links {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		font-size: 0.9rem;
	}

	.project-links a::before {
		content: '→ ';
		font-family: 'JetBrains Mono', monospace;
	}

	@media (max-width: 640px) {
		.project-body {
			padding: 20px;
		}
	}
</style>
