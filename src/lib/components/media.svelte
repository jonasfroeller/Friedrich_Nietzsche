<script lang="ts">
	type Bool = boolean | null
	type Element = 'video' | 'img' | 'iframe'

	export let type: Element
	export let src: string
	export let autoplay: Bool = null
	export let preload: Bool = null
	export let alt: string = ''
	export let author: string = ''
	export let source: string = 'https://de.wikipedia.org/wiki/Datei:'

	const AUTHOR_URL_PARTS = author.split('/')
	const AUTHOR_NAME = AUTHOR_URL_PARTS[AUTHOR_URL_PARTS.length - 1].replaceAll(
		'_',
		' '
	)
	const BASE_URL = new URL(source).hostname

	delete $$restProps.class
</script>

{#if type === 'img'}
	<figure>
		<svelte:element
			this={type}
			data-src={src}
			data-prelod={preload}
			data-alt={alt}
			class={$$props.class || ''}
			{...$$restProps}
		>
			<slot />
		</svelte:element>
		<figcaption class="w-full mt-2 text-xs text-left text-gray-500">
			{#if author !== ""}
				Fotograf: <a class="hover:underline" href={author}>{AUTHOR_NAME}</a>
				<br />
			{/if}
			{#if source !== "https://de.wikipedia.org/wiki/Datei:"}
				Quelle: <a class="hover:underline" href={source}>{BASE_URL}</a>
			{/if}
		</figcaption>
	</figure>
{:else}
	<svelte:element
		this={type}
		data-src={src}
		data-autoplay={autoplay}
		data-prelod={preload}
		class={$$props.class || ''}
		{...$$restProps}
	>
		<slot />
	</svelte:element>
{/if}
