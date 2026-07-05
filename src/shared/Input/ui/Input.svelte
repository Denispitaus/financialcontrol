<script>
  const {
    placeholder,
    className,
    value,
    type
  } = $props()
</script>

<input placeholder={placeholder} class={className} value={value} type={type}/>

<style>
.inputRecord{
  border-radius: var(--rounded-medium);
  border: 1px solid var(--border);
  color: var(--muted-foreground);
  font-size: var(--font-small);
  background-color: var(--input);
  padding: 5px 10px;
  width: 100%;
  box-sizing: border-box;
}

</style>
