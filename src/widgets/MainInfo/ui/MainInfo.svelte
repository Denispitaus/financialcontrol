<script>
  import MainCard from '$features/MainCard';
  import { MonthData } from '$entities/MonthData';

  let nowMonth = $state(new Date().getMonth() + 1);
  let monthName = $state(MonthData.find((item) => item.number === nowMonth).month);
  let {
    countCategory,
    freeMoney,
    notMoney
  } = $props()
</script>

<section class='maininfo'>
  <MainCard title='ДОХОДЫ' moneyClass='MainInfoTitleMoney'  money={freeMoney + ' ₽'} date={'за ' + monthName + ' ' + new Date().getFullYear()} />
  <MainCard title='РАСХОДЫ' moneyClass='MainInfoTitleMoneyRed' money={notMoney + ' ₽'} date={'за ' + monthName + ' ' + new Date().getFullYear()} />
  <MainCard title='БАЛАНС' moneyClass='MainInfoTitleMoneyDefault' money={freeMoney - notMoney + ' ₽'} date='остаток'/>
  <MainCard title='КАТЕГОРИИ' moneyClass='MainInfoTitleMoneyDefault' money={countCategory} date='в этом месяце'/>
</section>


<style>
.maininfo{
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
}

</style>
