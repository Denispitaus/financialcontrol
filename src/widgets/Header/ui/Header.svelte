<script>

</script>

<header>
  <section class='headerSection'>
    <img src='/path/to/logo.png' alt='Logo' />
    <h1 class='headerTitle'>Контроль финансов</h1>
  </section>
  <section class='headerSection'>
    <button class='headerButton'>b</button>
    <div class='monthInfo'>
      <img src="" alt="">
      <p class="monthName">Январь</p>
      <p class="monthYear">2025</p>
    </div>
    <button class='headerButton'>n</button>
  </section>
</header>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--card);

}
.headerSection{
  display: flex;
  align-items: center;
  gap: 10px;
}
.headerTitle{
  font-size: var(--font-large);
  color: var(--foreground);
}
.headerButton{
  border: 1px solid var(--border);
  background-color: var(--secondary);
  color: var(--secondary-foreground);
  border-radius: var(--rounded-medium);
}
.monthInfo{
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: var(--secondary);
  border-radius: var(--rounded-medium);
  padding: 3px 10px;
}
.monthName{
  font-size: var(--font-small);
  color: var(--foreground);
}
.monthYear{
  font-size: var(--font-small);
  color: var(--muted-foreground);
}
</style>
