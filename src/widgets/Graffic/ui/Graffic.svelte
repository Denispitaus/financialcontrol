<script>
  import Title from '$shared/Title';
  import { Chart, Axis, Grid } from '@faintshadow/flarecharts';

  let { massiv = [] } = $props();

  const prepared = $derived(
    massiv.map((item) => ({
      day: Number(item.DaySave),
      value: Number(item.NumberSave),
      title: item.TitleSave,
      isProfit: item.ButtonSave
    }))
  );

  const maxValue = $derived(
    prepared.length ? Math.max(...prepared.map((d) => d.value)) : 0
  );

  const yTicks = $derived(() => {
    if (!maxValue) return [0];
    const step = Math.ceil(maxValue / 5);
    return Array.from({ length: 6 }, (_, i) => i * step);
  });
</script>

<section class="body">
  <Title text="График изменения финансов" className="TitleBlock" />

  <div class="bodyGraff">
    <Chart>
      <Grid y dash="3 3" />

      <Axis
        placement="bottom"
        ticks={7}
        rotate={-30}
        format={(v) => `День ${v}`}
      />

      <Axis
        placement="left"
        ticks={10}
        format={(v) => `${v} ₽`}
      />
    </Chart>

    <div class="barsWrap">
      {#each prepared as item(item)}
        <div class="barGroup" title={`${item.title}: ${item.value} ₽`}>
          <div
            class="bar"
            style={`height: ${maxValue ? (item.value / maxValue) * 100 : 0}%; background: ${item.isProfit ? '#01ff01' : '#ff0101'};`}
          ></div>
          <div class="barLabel">{item.day}</div>
        </div>
      {/each}
    </div>

    <div class="yLabels">
      {#each yTicks as tick(tick)}
        <div class="yLabel">{tick} ₽</div>
      {/each}
    </div>
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
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
  }

  .barsWrap{
    grid-column: 2;
    grid-row: 2;
    display: flex;
    align-items: flex-end;
    gap: 10px;
    padding: 0 10px 10px 0;
    border-bottom: 1px solid var(--border);
    border-left: 1px solid var(--border);
    min-height: 300px;
  }

  .barGroup{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    min-width: 18px;
    height: 100%;
  }

  .bar{
    width: 100%;
    min-height: 2px;
    border-radius: 6px 6px 0 0;
  }

  .barLabel{
    margin-top: 6px;
    font-size: 12px;
    color: var(--muted-foreground);
  }

  .yLabels{
    grid-column: 1;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0 10px 0;
    font-size: 12px;
    color: var(--muted-foreground);
  }

  .yLabel{
    transform: translateY(50%);
  }
</style>
