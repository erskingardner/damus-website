<script lang="ts">
	export let icon: string;
	export let title: string;
	export let description: string;

	let iconPath = `/src/lib/images/${icon}.svg`;
</script>

<div class="flex flex-col items-center gap-4 text-center">
	<img src={iconPath} alt={icon} class="w-[100px] h-[100px]" />
	<h3 class="font-bold">{title}</h3>
	<p>{description}</p>
</div>
