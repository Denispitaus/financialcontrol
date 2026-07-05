<script>
  import Title from '$shared/Title';
  import Button from '$shared/Button';
  import Paragraff from '$shared/Paragraff';
</script>

<header>
  <section class='headerSection'>
    <img src="/icon-logo.png" alt="Logo">
    <Title text="Контроль финансов" className="headerTitle"/>
  </section>
  <section class='headerSection'>
    <Button text='<' className="headerButton" onclick=''/>
    <div class='monthInfo'>
      <img src="" alt="">
      <Paragraff text="Январь" className="monthName"/>
      <Paragraff text="2025" className="monthYear"/>
    </div>
    <Button text='>' className="headerButton" onclick=''/>
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
.monthInfo{
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: var(--secondary);
  border-radius: var(--rounded-medium);
  padding: 3px 10px;
}
</style>
