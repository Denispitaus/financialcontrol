<script>

const {
  text,
  className
} = $props();
</script>

<h1 class={className}>{text}</h1>

<style>
.headerTitle{
  font-size: var(--font-large);
  color: var(--foreground);
}
</style>
