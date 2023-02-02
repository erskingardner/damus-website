<script lang="ts">
	import screenshot from '$lib/images/ss.png';
	import AppstoreButton from '$lib/images/appstore.svg?component';
	import HomeGrid from '$lib/components/HomeGrid.svelte';
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
	<HomeGrid />
</section>
