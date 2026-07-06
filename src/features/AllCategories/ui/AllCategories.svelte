<script>
  import Title from "$shared/Title";
  import Button from "$shared/Button";
</script>


<section class="AllCategories">
  <section class="lineInfo">
    <Title text='Список категорий' className='TitleBlock'/>
    <Title text='6 записей' className='MainInfoTitle'/>
  </section>
    <section class="lineInfo">
      <div class="numberName">
        <Title text='1.' className='MainInfoTitle'/>
        <div class="red"></div>
        <Title text='Заработная плата' className='CategoryTitle'/>
      </div>
      <div class='numberName'>
        <Title text='238475823₽' className='CategoryTitleGreen'/>
        <Button className='btnRed' text='✕'/>
      </div>
  </section>
</section>

<style>
.red{
  width: 10px;
  height: 10px;
  background-color: var(--danger-foreground);
  border-radius: 50px;
}
.numberName{
  display: flex;
  align-items: center;
  gap: 15px;
}
.AllCategories{
  padding: 15px;
  border-radius: var(--rounded-large);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--card);
  width: 100%;
  gap: 15px;
}
.lineInfo{
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
</style>
