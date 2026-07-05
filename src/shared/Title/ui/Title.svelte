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
.MainInfoTitle{
  font-size: var(--font-extra-small);
  color: var(--muted-foreground);
  font-weight: 100;
}
.MainInfoTitleMoney{
  font-size: var(--font-huge);
  color: var(--income-foreground);
  margin-bottom: 10px;
}
.MainInfoTitleMoneyRed{
  font-size: var(--font-huge);
  color: var(--danger-foreground);
  margin-bottom: 10px;
}
.MainInfoTitleMoneyDefault{
  font-size: var(--font-huge);
  color: var(--foreground);
  margin-bottom: 10px;
}
</style>
