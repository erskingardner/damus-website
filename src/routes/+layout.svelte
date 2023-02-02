<script lang="ts">
	import Logo from '$lib/images/damus-nobg.svg?component';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<div>
	<header class="w3-container mx-6 mb-10 flex flex-row items-center justify-between">
		<a
			href="/"
			class="flex flex-row items-center justify-center md:justify-start hover:text-gray-200"
		>
			<Logo width="60" height="auto" />
			<h1 class="text-4xl font-thin ml-4">damus</h1>
		</a>
		<Navigation />
	</header>
	<div class="w3-container mx-6">
		<slot />
	</div>
	<footer class="text-center mt-40 text-white/40">Damus is open source software.</footer>
</div>
