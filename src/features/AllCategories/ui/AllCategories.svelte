<script>
  import Title from "$shared/Title";
  import Button from "$shared/Button";
  import {fade} from 'svelte/transition'
  let {
    MassivCategory,
    onDeleteItem
  } = $props()

    function removeItem(id) {
    onDeleteItem(id);
  }
</script>


<section class="AllCategories">
  <section class="lineInfo">
    <Title text='Список категорий' className='TitleBlock'/>
    <Title text={MassivCategory.length + ' записей'} className='MainInfoTitle'/>
  </section>
  {#each MassivCategory as el, index (el.id)}
    <section transition:fade class="lineInfo">
        <div class="numberName">
          <Title text={index + 1 + '.'} className='MainInfoTitle'/>
          <div class={el.ButtonSave? 'green' : 'red'}></div>
          <Title text={el.TitleSave} className='CategoryTitle'/>
        </div>
        <div class='numberName'>
          <Title text={el.NumberSave + ' ₽'} className={el.ButtonSave? "CategoryTitleGreen" : "CategoryTitleRed"}/>
          <Button className='btnRed' text='✕' onclick={()=>{removeItem(el.id)}}/>
        </div>
    </section>
  {/each}
</section>

<style>
.red{
  width: 10px;
  height: 10px;
  background-color: var(--danger-foreground);
  border-radius: 50px;
}
.green{
  width: 10px;
  height: 10px;
  background-color: var(--income-foreground);
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
  transition: all 1s;
}
</style>
