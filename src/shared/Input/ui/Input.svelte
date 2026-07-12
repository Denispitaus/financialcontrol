<script>
  let {
    placeholder,
    className,
    value = $bindable(),
    type,
    maxlength,
    minlength
  } = $props()
</script>

<input maxlength={maxlength} minlength={minlength} placeholder={placeholder} class={className} bind:value={value} type={type}/>

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
  outline: none;
}
.inputRecordError{
  border-radius: var(--rounded-medium);
  border: 1px solid var(--danger);
  color: var(--muted-foreground);
  font-size: var(--font-small);
  background-color: var(--input);
  padding: 5px 10px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
}
</style>
