<script>
  import MainCard from '$features/MainCard';
  import { MonthData } from '$entities/MonthData';

  let nowMonth = $state(new Date().getMonth() + 1);
  let monthName = $state(MonthData.find((item) => item.number === nowMonth).month);
</script>

<section class='maininfo'>
  <MainCard title='ДОХОДЫ' moneyClass='MainInfoTitleMoney' button='Изменить' money='127 000 ₽' date={'за ' + monthName + ' ' + new Date().getFullYear()} buttonVisible='true'/>
  <MainCard title='РАСХОДЫ' moneyClass='MainInfoTitleMoneyRed' button='Изменить' money='85 000 ₽' date={'за ' + monthName + ' ' + new Date().getFullYear()} />
  <MainCard title='БАЛАНС' moneyClass='MainInfoTitleMoneyDefault' button='Изменить' money='42 000 ₽' date='остаток'/>
  <MainCard title='КАТЕГОРИИ' moneyClass='MainInfoTitleMoneyDefault' button='Изменить' money='0' date='в этом месяце'/>
</section>


<style>
.maininfo{
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
}

</style>
