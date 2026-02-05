/**
 * API endpoint: /api/thumbnail
 *
 * Проксирует и ресайзит изображения по URL.
 * Использование: /api/thumbnail?src=https://...&w=480&h=270&format=webp&q=82
 *
 * На Cloudflare Pages/Workers это работает через fetch + cf.image.
 * Для локальной разработки — просто проксирует оригинал.
 *
 * Параметры:
 *   src    — URL исходного изображения (обязательно)
 *   w      — ширина (по умолчанию 480)
 *   h      — высота (по умолчанию 270)
 *   format — webp | png | jpeg (по умолчанию webp)
 *   q      — качество 1-100 (по умолчанию 82)
 *   fit    — cover | contain | scale-down (по умолчанию cover)
 */

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, platform }) {
	const src = url.searchParams.get('src');
	if (!src) {
		return new Response('Missing "src" parameter', { status: 400 });
	}

	const w = parseInt(url.searchParams.get('w') ?? '480', 10);
	const h = parseInt(url.searchParams.get('h') ?? '270', 10);
	const format = url.searchParams.get('format') ?? 'webp';
	const q = parseInt(url.searchParams.get('q') ?? '82', 10);
	const fit = url.searchParams.get('fit') ?? 'cover';

	try {
		// На Cloudflare Workers — используем Image Resizing
		// https://developers.cloudflare.com/images/transform-images/transform-via-workers/
		if (platform?.env) {
			const imageReq = new Request(src, {
				cf: {
					image: {
						width: w,
						height: h,
						quality: q,
						format: format,
						fit: fit
					}
				}
			});

			const response = await fetch(imageReq);

			return new Response(response.body, {
				headers: {
					'Content-Type': `image/${format}`,
					'Cache-Control': 'public, max-age=31536000, immutable'
				}
			});
		}

		// Локальная разработка — простой прокси без ресайза
		const response = await fetch(src);
		const contentType = response.headers.get('Content-Type') ?? 'image/webp';

		return new Response(response.body, {
			headers: {
				'Content-Type': contentType,
				'Cache-Control': 'public, max-age=3600'
			}
		});
	} catch (err) {
		return new Response(`Failed to fetch image: ${err.message}`, { status: 502 });
	}
}
