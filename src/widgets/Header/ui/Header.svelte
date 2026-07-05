<script>
  import Title from '$shared/Title';
  import Button from '$shared/Button';
  import Paragraff from '$shared/Paragraff';
  import { MonthData } from '$entities/MonthData';

  let NumberMonth = $state(1);
  let MonthName = $state('');

  function VisibleMonth() {
    const month = MonthData.find((item) => item.number === NumberMonth);
    if (month) {
      MonthName = month.month;
    }
  }
  function checkNowDate(){
    const date = new Date();
    NumberMonth = date.getMonth() + 1;
  }
  function NextMonth() {
    NumberMonth = NumberMonth < 12 ? NumberMonth + 1 : 1;
    VisibleMonth();
  }

  function BackMonth() {
    NumberMonth = NumberMonth > 1 ? NumberMonth - 1 : 12;
    VisibleMonth();
  }

  checkNowDate();
  VisibleMonth()
</script>

<header>
  <section class='headerSection'>
    <img src="/icon-logo.png" alt="Logo">
    <Title text="Контроль финансов" className="headerTitle"/>
  </section>
  <section class='headerSection'>
    <Button text='<' className="headerButton" onclick={BackMonth}/>
    <div class='monthInfo'>
      <img class='icon-month' src="/icon-month.png" alt="Month">
      <Paragraff text={MonthName} className="monthName"/>
      <Paragraff text={new Date().getFullYear()} className="monthYear"/>
    </div>
    <Button text='>' className="headerButton" onclick={NextMonth}/>
  </section>
</header>

<style>
.icon-month{
  width: 10px;
  height: 10px;
}
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
  justify-content: space-between;
  gap: 5px;
  background-color: var(--secondary);
  border-radius: var(--rounded-medium);
  padding: 3px 10px;
  width: 120px;
}
</style>
