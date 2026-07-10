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
  transition: all 0.5s;
}
.MainInfoTitleMoneyRed{
  font-size: var(--font-huge);
  color: var(--danger-foreground);
  margin-bottom: 10px;
  transition: all 0.5s;
}
.MainInfoTitleMoneyDefault{
  font-size: var(--font-huge);
  color: var(--foreground);
  margin-bottom: 10px;
  transition: all 0.5s;
}
.TitleBlock{
  color:var(--foreground);
  font-size: var(--font-small);
  border-left: 5px solid var(--primary);
  padding-left: 10px;
  border-radius: 2px;
}
.CategoryTitle{
  color:var(--foreground);
  font-size: var(--font-small);
}
.CategoryTitleGreen{
  color:var(--income-foreground);
  font-size: var(--font-small);
}
.CategoryTitleRed{
  color:var(--danger-foreground);
  font-size: var(--font-small);
}
</style>
