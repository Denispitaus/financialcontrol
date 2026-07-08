<script>
  import Title from '$shared/Title';
  import { StackChart } from '@faintshadow/flarecharts';
  let {
    massiv
  } = $props()
</script>
<section class="body">
  <Title text='График изменения финансов' className='TitleBlock'/>
  <div class="bodyGraff">
    <StackChart

          series={[
          {
            name: 'Прибыль',
            data: massiv,
            x: (d) => d.ButtonSave? d.DaySave : 0,
            y: (d) => d.ButtonSave? d.NumberSave : 0,
            stroke: '#6b7590',
            fill: '#4F46E5',
            strokeWidth: 4,
          },
          {
            name: 'Расходы',
            data: massiv,
            x: (d) => d.ButtonSave === false? d.DaySave : 0,
            y: (d) => d.ButtonSave === false? d.NumberSave : 0,
            fill: '#EF4444',
            strokeWidth: 4,
          },
        ]}

        crosshair
        />
  </div>
</section>
<style>
  .body{
    background-color: var(--card);
    padding: 15px;
    border-radius: var(--rounded-large);
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .bodyGraff{
  height: 500px;
}

</style>
