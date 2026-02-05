<script>
	/** @type {import('$lib/types').Project} */
	let { project } = $props();

	const statusClass = {
		'open-source': 'status-open',
		'proprietary': 'status-closed',
		'private': 'status-closed'
	};
</script>

<article class="project" id={project.id}>
	<div class="project-header">
		<h2 class="project-title">
			{#if project.url}
				<a href={project.url}>{project.title}</a>
			{:else}
				{project.title}
			{/if}
		</h2>
		<span class="project-status {statusClass[project.status] ?? ''}">
			{project.status}
		</span>
	</div>

	<p class="project-subtitle">{project.subtitle}</p>

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

	<p class="project-description">{project.description}</p>

	<div class="project-tags">
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
</article>

<style>
	.project {
		padding: 56px 0;
		border-bottom: 1px solid var(--border);
	}

	.project-header {
		display: flex;
		align-items: baseline;
		gap: 14px;
		margin-bottom: 6px;
		flex-wrap: wrap;
	}

	.project-title {
		font-family: 'JetBrains Mono', monospace;
		font-size: 1.45rem;
		font-weight: 500;
	}

	.project-title a {
		color: inherit;
		transition: color 0.2s;
	}

	.project-title a:hover {
		color: var(--accent);
	}

	.project-status {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.78rem;
		color: var(--text-muted);
	}

	.status-open {
		color: var(--green);
	}

	.project-subtitle {
		font-size: 0.95rem;
		color: var(--text-secondary);
		margin-bottom: 24px;
		font-style: italic;
	}

	.project-media {
		margin-bottom: 24px;
		border-radius: 6px;
		overflow: hidden;
		background: var(--bg-secondary);
		border: 1px solid var(--border);
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
		font-size: 1rem;
		color: var(--text-secondary);
		margin-bottom: 24px;
		max-width: 720px;
		line-height: 1.7;
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
		.project {
			padding: 40px 0;
		}

		.project-header {
			flex-direction: column;
			gap: 4px;
		}
	}
</style>
