<script>
	import { meta, projects, skills } from '$lib/data.js';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>{meta.name} // {meta.tagline}</title>
</svelte:head>

<div class="container">
	<!-- Header -->
	<header id="top">
		<a href="#projects" class="skip-link">[Skip to projects]</a>

		<h1 class="header-title">{meta.name} // {meta.tagline}</h1>
		<p class="header-role">{meta.role}</p>
		<p class="header-bio">{meta.bio}</p>
		<p class="header-cta">{meta.cta}</p>

		<div class="contact-links">
			{#each meta.contacts as contact}
				{#if contact.href}
					<a href={contact.href} target="_blank" rel="noopener noreferrer">
						{contact.label}: <strong>{contact.value}</strong>
					</a>
				{:else}
					<span>
						{contact.label}: <strong>{contact.value}</strong>
					</span>
				{/if}
			{/each}
		</div>
	</header>

	<!-- Projects -->
	<section id="projects">
		{#each projects as project, i}
			<div class="project-anim" style="animation-delay: {i * 80}ms">
				<ProjectCard {project} />
			</div>
		{/each}
	</section>

	<!-- Skills -->
	<section class="skills-section">
		<h3 class="skills-title">Technical Expertise</h3>
		<div class="skills-grid">
			{#each skills as group}
				<div class="skill-category">
					<h4>{group.category}</h4>
					<ul>
						{#each group.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<!-- Footer -->
	<footer>
		<p>{meta.location} · Open to opportunities</p>
		<div class="footer-links">
			{#each meta.contacts as contact}
				{#if contact.href}
					<a href={contact.href}>{contact.label}</a>
				{/if}
			{/each}
			<a href="#top">Back to top ↑</a>
		</div>
	</footer>
</div>

<style>
	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 24px;
	}

	/* ── Header ── */
	header {
		padding: 80px 0 60px;
		border-bottom: 1px solid var(--border);
	}

	.skip-link {
		display: inline-block;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.82rem;
		color: var(--text-muted);
		margin-bottom: 28px;
		opacity: 0.6;
		transition: opacity 0.2s;
	}
	.skip-link:hover {
		opacity: 1;
		color: var(--text-secondary);
	}

	.header-title {
		font-family: 'JetBrains Mono', monospace;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 500;
		margin-bottom: 8px;
		background: linear-gradient(135deg, #4a9eff, #a855f7);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.header-role {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.92rem;
		color: var(--text-secondary);
		margin-bottom: 28px;
	}

	.header-bio {
		font-size: 1.1rem;
		max-width: 640px;
		margin-bottom: 20px;
		line-height: 1.7;
	}

	.header-cta {
		font-size: 0.95rem;
		color: var(--text-secondary);
		margin-bottom: 28px;
	}

	.contact-links {
		display: flex;
		flex-direction: column;
		gap: 6px;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.88rem;
	}
	.contact-links a,
	.contact-links span {
		color: var(--text-secondary);
	}
	.contact-links :global(strong) {
		color: var(--text-primary);
		font-weight: 500;
	}

	/* ── Projects section ── */
	#projects {
		padding: 20px 0 40px;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(18px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.project-anim {
		animation: fadeInUp 0.5s ease-out both;
	}

	/* ── Skills ── */
	.skills-section {
		padding: 56px 0;
		border-top: 1px solid var(--border);
	}

	.skills-title {
		font-family: 'JetBrains Mono', monospace;
		font-size: 1.15rem;
		color: var(--text-secondary);
		margin-bottom: 24px;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 32px;
	}

	.skill-category h4 {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.8rem;
		color: var(--text-muted);
		margin-bottom: 10px;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.skill-category ul {
		list-style: none;
	}

	.skill-category li {
		font-size: 0.95rem;
		color: var(--text-secondary);
		padding: 3px 0;
	}

	/* ── Footer ── */
	footer {
		padding: 40px 0;
		border-top: 1px solid var(--border);
		text-align: center;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.82rem;
		color: var(--text-muted);
	}

	.footer-links {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 14px;
	}
	.footer-links a {
		color: var(--text-secondary);
	}

	@media (max-width: 640px) {
		header {
			padding: 56px 0 40px;
		}
		.skills-grid {
			grid-template-columns: 1fr 1fr;
			gap: 20px;
		}
	}
</style>
