<script>
  import MainInfo from '$widgets/MainInfo';
  import NewRecord from '$features/NewRocord';
  import AllCategories from '$features/AllCategories';

  const MassiveRecord = $state([])
  let FreeMoney = $derived(
    MassiveRecord
      .filter(el => el.ButtonSave)
      .reduce((sum, el) => sum + el.NumberSave, 0)
  );
  let NotMoney = $derived(
    MassiveRecord
      .filter(el => !el.ButtonSave)
      .reduce((sum, el) => sum + el.NumberSave, 0)
  )
</script>

<div class='home'>
  <MainInfo countCategory={MassiveRecord.length} freeMoney={FreeMoney} notMoney={NotMoney}/>
  <section class='bodyBlock'>
    <section class='addAndRecorded'>
      <NewRecord JSRecords={MassiveRecord}/>
      <AllCategories MassivCategory={MassiveRecord}/>
    </section>
  </section>
</div>

<style>
.home{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  justify-content: space-between;
  align-items: center;
  min-width: 500px;

}

</style>
