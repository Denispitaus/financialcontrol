<script>
  import MainInfo from '$widgets/MainInfo';
  import NewRecord from '$features/NewRocord';
  import AllCategories from '$features/AllCategories';
</script>

<div class='home'>
  <MainInfo/>
  <section class='bodyBlock'>
    <section class='addAndRecorded'>
      <NewRecord />
      <AllCategories/>
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
