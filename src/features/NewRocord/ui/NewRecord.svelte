<script>
	import Button from '$shared/Button';
  import Title from '$shared/Title';
  import Input from '$shared/Input'
  import {MonthData} from '$entities/MonthData';

  let nowMonth = $state(new Date().getMonth() + 1);
  const maxDayMonth = $state(MonthData.find((item) => item.number === nowMonth).days)
  const daysRange = $state(Array.from({ length: maxDayMonth }, (_, i) => i + 1));

  let NumberSave = $state()
  let TitleSave = $state('')
  let DaySave = $state()
  let ButtonSave = $state(true)
  let ColorInputError = $state(false)
  let ColorInputErrorNumber = $state(false)

  function clickAddRecord(){
    if(TitleSave.length > 0 && NumberSave > 0){
      JSRecords.push({ButtonSave, NumberSave, TitleSave, DaySave, monthName, id: crypto.randomUUID() })
      ColorInputError = false;
      ColorInputErrorNumber = false;
      localStorage.setItem('MassiveRecord', JSON.stringify(JSRecords))
      TitleSave = ''
      NumberSave = ''
    }
    else{
      ColorInputError = true
      ColorInputErrorNumber = true
      return
    }
  }
  function clickRedBtn(){
    ButtonSave = false
  }
  function clickGreenBtn(){
    ButtonSave = true
  }
  let {
    JSRecords,
    monthName
  } = $props()
</script>

<section class='addRecord'>
  <Title text='Добавить запись' className='TitleBlock'/>
  <div class='addRecordButtons'>
    <Button text='+ Доход' className={ButtonSave? "btnRecordGreenActive" : "btnRecordGreen"} onclick={clickGreenBtn}/>
    <Button text='- Расход' className={!ButtonSave? "btnRecordReActive" : "btnRecordRed"} onclick={clickRedBtn}/>
  </div>
  <Title text='Название категории' className='MainInfoTitle'/>
  <Input className={ColorInputError? 'inputRecordError' : 'inputRecord'} minlength='1' maxlength='14' placeholder='Например: Аренда, Еда...' type='text' bind:value={TitleSave}/>
  <Title text='Сумма, ₽' className='MainInfoTitle'/>
  <Input className={ColorInputErrorNumber? 'inputRecordError' : 'inputRecord'} placeholder='0.00' type='number' bind:value={NumberSave}/>
  <Title text='День месяца' className='MainInfoTitle'/>

  <select id="country" name="country" class="inputRecord" bind:value={DaySave}>

    {#each daysRange as day (day)}
      <option value={day}>{day}</option>
    {/each}


  </select>
  <Button text='Добавить категорию' className='addCategore' onclick={clickAddRecord}/>
</section>


<style>
.inputRecord{
  border-radius: var(--rounded-medium);
  border: 1px solid var(--border);
  color: var(--muted-foreground);
  font-size: var(--font-small);
  background-color: var(--input);
  padding: 5px 10px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
}
.addRecord{
  padding: 15px;
  background-color: var(--card);
  border-radius: var(--rounded-large);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
.addRecordButtons{
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
}
</style>
