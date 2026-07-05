<script>
  import MainCard from '$features/MainCard';

</script>

<section class='maininfo'>
  <MainCard title='ДОХОДЫ' moneyClass='MainInfoTitleMoney' button='Изменить' money='127 000 ₽' date='за январь 2026' buttonVisible='true'/>
  <MainCard title='РАСХОДЫ' moneyClass='MainInfoTitleMoneyRed' button='Изменить' money='85 000 ₽' date='за январь 2026'/>
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
