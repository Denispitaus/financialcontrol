<script>
  import MainInfo from '$widgets/MainInfo';
  import NewRecord from '$features/NewRocord';
  import AllCategories from '$features/AllCategories';
  import Graffic from '$widgets/Graffic';
  import Header from '$widgets/Header';
  import { MonthData } from '$entities/MonthData';

  const MassiveRecord = $state([])
  let MonthName = $state('');
  let NumberMonth = $state(1);
  let FreeMoney = $derived(
    MassiveRecord
      .filter(el => el.ButtonSave && el.monthName === MonthName)
      .reduce((sum, el) => sum + el.NumberSave, 0)
  );
  let NotMoney = $derived(
    MassiveRecord
      .filter(el => !el.ButtonSave && el.monthName === MonthName)
      .reduce((sum, el) => sum + el.NumberSave, 0)
  )

  function NextMonth() {
    NumberMonth = NumberMonth < 12 ? NumberMonth + 1 : 1;
    VisibleMonth();
  }

  function BackMonth() {
    NumberMonth = NumberMonth > 1 ? NumberMonth - 1 : 12;
    VisibleMonth();
  }

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
  let FilterMassiveCategory = $derived(MassiveRecord.filter((el) => el.monthName === MonthName))
</script>

<section class="main">
  <Header monthname={MonthName} NextMonth={NextMonth} BackMonth={BackMonth} VisibleMonth={VisibleMonth} checkNowDate={checkNowDate}/>
  <div class='home'>
    <MainInfo countCategory={FilterMassiveCategory.length} freeMoney={FreeMoney} notMoney={NotMoney} MonthName={MonthName}/>
    <section class='bodyBlock'>
      <section class='addAndRecorded'>
        <NewRecord JSRecords={MassiveRecord} monthName={MonthName}/>
        <AllCategories MassivCategory={FilterMassiveCategory} MonthName={MonthName}/>
      </section>
      <section class="graffVie">
        <Graffic massiv={FilterMassiveCategory}/>
      </section>
    </section>
  </div>
</section>

<style>
.main{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.graffVie{
  width: 100%;
}
.home{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 15px;
  box-sizing: border-box;
}
.bodyBlock{
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}
.addAndRecorded{
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  min-width: 500px;
}

</style>
