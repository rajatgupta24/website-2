<script lang="ts">
	import LinkButton from '../ui-library/link-button/link-button.svelte';
</script>

<div
	class="flex flex-col mx-auto mt-x-small md:mt-small w-full lg:w-full max-w-[342px] sm:max-w-[368px] md:max-w-[752px] p-8 rounded-2xl bg-sand-dark dark:bg-card border-t border-solid border-white dark:border-black"
>
	<div class="justify-center items-start">
		<div class="justify-start items-start">
			<div class="text-important text-xl font-bold">
				Enterprise add on - Gitpod Cloud
			</div>
			<div class="text-base mt-2">
				Add enterprise functionality like SSO, global admin controls,
				audit logging, etc. to Gitpod Cloud.
			</div>
			<LinkButton
				href="/contact/sales?subject=enterprise"
				variant="tertiary"
				size="medium"
				class="mt-4">Contact Sales</LinkButton
			>
		</div>
	</div>
</div>
