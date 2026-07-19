<script>
	let { text, className } = $props();
</script>

<label class={className} for="">{text}</label>

<style>
	.MainInfoTitle {
		font-size: var(--font-extra-small);
		color: var(--muted-foreground);
		font-weight: 100;
	}
</style>
