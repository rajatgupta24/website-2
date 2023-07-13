<script lang="ts">
	import PricingBoxes from './pricing-boxes.svelte';
	import type { Pricing } from '$lib/types/pricing';
	import Header from '../header.svelte';
	import { page } from '$app/stores';
	import EnterprirseCalloutCard from './enterprirse-callout-card.svelte';
	import { onMount } from 'svelte';
	import Toggle from '$lib/components/toggle.svelte';
	let checked: boolean = false;
	const handleChange = () => {
		checked = !checked;
	};
	export let pricingPlans: Pricing[] = [];
	export let dedicatedPricingPlans: Pricing[] = [];

	// if page URL is /pricing#dedicated or /pricing?plan=dedicated, show dedicated pricing plans and make checked true
	onMount(() => {
		if ($page.url.searchParams.get('plan') === 'dedicated') {
			checked = true;
		}
		if ($page.url.href.endsWith('dedicated')) {
			checked = true;
		}
	});
</script>

<Header
	class="md:!mb-x-small !mb-micro"
	title="Plans and pricing"
	fullWidth={true}
/>
<div class="text-center !mt-8">
	<Toggle
		labelLeft="Gitpod Cloud"
		labelRight="Gitpod Dedicated"
		on:change={handleChange}
		{checked}
		id="cloud-dedicated-toggle"
	/>
</div>

{#if !checked}
	<div class="mt-small">
		{#if pricingPlans.length > 0}
			<PricingBoxes plan={pricingPlans} />
		{/if}
	</div>
	<EnterprirseCalloutCard />
{:else}
	<div class="mt-small">
		{#if dedicatedPricingPlans.length > 0}
			<PricingBoxes plan={dedicatedPricingPlans} />
		{/if}
	</div>
{/if}
