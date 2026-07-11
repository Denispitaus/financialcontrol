<script>
  import MainCard from '$features/MainCard';
  let {
    countCategory,
    freeMoney,
    notMoney,
    MonthName
  } = $props()
</script>

<section class='maininfo'>
  <MainCard title='ДОХОДЫ' moneyClass='MainInfoTitleMoney'  money={freeMoney + ' ₽'} date={'за ' + MonthName + ' ' + new Date().getFullYear()} />
  <MainCard title='РАСХОДЫ' moneyClass='MainInfoTitleMoneyRed' money={notMoney + ' ₽'} date={'за ' + MonthName + ' ' + new Date().getFullYear()} />
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
@media(max-width: 768px){
  .maininfo{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
