<script context="module">
	export const prerender = true;
</script>

<script>
	import Cta from '$lib/components/support/cta.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import { cards } from '$lib/contents/support';
	import Resources from '$lib/components/resources.svelte';
	import DeepLink from '$lib/components/deep-link.svelte';
	import Header from '$lib/components/header.svelte';
	import Search from '$lib/components/docs/search.svelte';
	import Articles from '$lib/components/articles.svelte';
	import Section from '$lib/components/section.svelte';
</script>

<OpenGraph
	data={{
		description:
			'Browse our collection of helpful articles, videos, guides and tutorials and find answers to your questions quickly. Or contact our team for individual support requests.',
		title: "Gitpod Support - We're here to help",
		keywords: 'help, support, question, contact, customer service',
	}}
/>

<Header title="Need help?">
	<Search
		slot="content"
		placeholder="Search Documentation"
		class="text-left py-7 sm:pl-medium h-14"
		containerClasses="roun max-w-lg mx-auto rounded-xl shadow-normal"
		iconClasses="h-6 w-6 left-4 sm:left-5"
		isBgWhite={true}
	/>
</Header>
<Cta />

<Section>
	<DeepLink
		titleClassNames="text-center !mt-xx-large"
		text="Helpful Resources"
		headingLevel="h2"
	/>
	<Resources {cards} />
</Section>

<Articles
	title="Popular articles"
	slugs={[
		'introducing-gitpod-dedicated',
		'future-of-software-cdes',
		'securing-cncf-software-supply-chains-with-cd-es',
	]}
/>
