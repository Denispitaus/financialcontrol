<script>

const {
  text,
  className,
  onclick
} = $props();
</script>


<button class={className} onclick={onclick}>
  {text}
</button>

<style>
.headerButton{
  border: 1px solid var(--border);
  background-color: var(--secondary);
  color: var(--secondary-foreground);
  border-radius: var(--rounded-medium);
  font-weight: 600;
}

</style>
