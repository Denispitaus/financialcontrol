<script>
	import Button from '$shared/Button';
  import Title from '$shared/Title';
  import Input from '$shared/Input'
</script>

<section class='addRecord'>
  <Title text='Добавить запись' className='TitleBlock'/>
  <div class='addRecordButtons'>
    <Button text='+ Доход' className='btnRecordGreen'/>
    <Button text='- Расход' className='btnRecordRed'/>
  </div>
  <Title text='Название категории' className='MainInfoTitle'/>
  <Input className='inputRecord' placeholder='Например: Аренда, Еда...'/>
  <Title text='Сумма, ₽' className='MainInfoTitle'/>
  <Input className='inputRecord' placeholder='0.00'/>
  <Title text='День месяца' className='MainInfoTitle'/>

  <select id="country" name="country" class="inputRecord">
    <option value="ru">1</option>
    <option value="kz">2</option>
    <option value="by">3</option>
  </select>
  <Button text='Добавить категорию' className='addCategore'/>
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
}
.addRecord{
  padding: 15px;
  background-color: var(--card);
  border-radius: var(--rounded-large);
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 500px;
}
.addRecordButtons{
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
}
</style>
