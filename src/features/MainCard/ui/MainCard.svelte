<script>
  import Title from '$shared/Title';

  const{
    title,
    money,
    date,
    moneyClass,

  } = $props();
</script>

<section class='cardinfo'>
  <div class='cardinfo-header'>
    <Title text={title} className='MainInfoTitle'/>

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

  transition: all 0.5s;
}
.cardinfo-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.cardinfo:hover{
  transform: translateX(5px) translateY(-5px);
  box-shadow: 1px 1px 10px 1px var(--muted);
}
</style>
