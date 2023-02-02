<script lang="ts">
	import screenshot from '$lib/images/ss.png';
	import AppstoreButton from '$lib/images/appstore.svg?component';
	import GridItem from '$lib/components/GridItem.svelte';

	let featuresGrid = [
		{
			icon: 'control',
			title: 'You Are In Control',
			description:
				'Built on open internet protocols, there is no platform that can ban or censor you. You are in control of your data & speech.'
		},
		{
			icon: 'encrypted',
			title: 'Encrypted',
			description: 'End-to-End encrypted private messaging. Keep big tech out of your DMs.'
		},
		{
			icon: 'undercover',
			title: 'No Registration Required',
			description:
				"Creating an account doesn't require a phone number, email or name. Get started right away with zero friction."
		},
		{
			icon: 'social-media',
			title: 'No Centralized Servers',
			description:
				'Messages are distributed via decentralized relays. No need to run any infrastructure and there are no single points of failure. Simple!'
		},
		{
			icon: 'bot',
			title: 'Programmable',
			description:
				'Easily integrate bots that automate your life or business. Get notified when your servers go down, repost to your team and collaborate in realtime.'
		},
		{
			icon: 'bitcoin-phone',
			title: 'Earn Money',
			description:
				'Show your appreciation and stack sats with Bitcoin & ⚡️ Lightning, the native currency of the internet.'
		}
	];
</script>

<section class="flex flex-col gap-8 md:gap-16 items-center mx-auto max-w-3xl">
	<h1 class="text-center font-bold text-4xl md:text-7xl lg:text-7xl">
		The social network that you control
	</h1>
	<p class="text-center text-lg md:text-xl lg:text-2xl">
		Your very own social network for your friends or business
	</p>
	<img src={screenshot} alt="Damus app screenshot" class="w-96 block" />
	<a href="https://apps.apple.com/app/damus/id1628663131" class="">
		<AppstoreButton class="block" width="180" height="auto" />
	</a>
	<p>
		Damus is the first iOS client for the Nostr network. A new type of social network that isn't at
		the mercy of big tech. Uncensorable and completely free. Take back control of your social media
		today.
	</p>
</section>
<section class="grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-16 gap-8 gap-y-20 md:gap-20">
	{#each featuresGrid as gridItem}
		<GridItem icon={gridItem.icon} title={gridItem.title} description={gridItem.description} />
	{/each}
</section>
