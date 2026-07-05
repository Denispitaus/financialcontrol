<script>
  import Title from '$shared/Title';
  import Button from '$shared/Button';
  const{
    title,
    button,
    money,
    date,
    moneyClass,
    buttonVisible
  } = $props();
  let isButtonVisible = buttonVisible === 'true' ? true : false;
</script>

<section class='cardinfo'>
  <div class='cardinfo-header'>
    <Title text={title} className='MainInfoTitle'/>
    {#if isButtonVisible}
      <Button text={button} className='headerButton' onclick=''/>
    {/if}

  </div>

  <Title text={money} className={moneyClass}/>
  <Title text={date} className='MainInfoTitle'/>
</section>

<style>
.cardinfo{
  border: 1px solid var(--border);
  background-color: var(--card);
  border-radius: var(--rounded-large);
  padding: 15px 15px;
  width: 100% ;
  box-sizing: border-box;
}
.cardinfo-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

</style>
