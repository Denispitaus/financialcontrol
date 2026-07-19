<script>
	const { text, className } = $props();
</script>

<p class={className}>{text}</p>

<style>
	.monthName {
		font-size: var(--font-small);
		color: var(--foreground);
	}
	.monthYear {
		font-size: var(--font-small);
		color: var(--muted-foreground);
	}
</style>
