<script>

const {
  text,
  className,
  onclick
} = $props();
</script>


<button class={className} onclick={onclick}>
  {text}
</button>

<style>
.headerButton{
  border: 1px solid var(--border);
  background-color: var(--secondary);
  color: var(--secondary-foreground);
  border-radius: var(--rounded-medium);
  font-weight: 600;
  cursor: pointer;
}
.btnRecordRed{
  background-color: var(--danger);
  color: var(--danger-foreground);
  border-radius: var(--rounded-medium);
  font-weight: 600;
  font-size: var(--font-extra-small);
  width: 100%;
  text-align: center;
  border: 1px solid var(--danger);
  cursor: pointer;
}
.btnRecordReActive{
  background-color: #8a2222;
  color: var(--danger-foreground);
  border-radius: var(--rounded-medium);
  font-weight: 600;
  font-size: var(--font-extra-small);
  width: 100%;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ff0000;
}
.btnRecordGreen{
  background-color: var(--income);
  color: var(--income-foreground);
  border-radius: var(--rounded-medium);
  font-weight: 600;
  font-size: var(--font-extra-small);
  width: 100%;
  padding: 8px;
  border: 1px solid var(--income);
  cursor: pointer;
  transition: all 0.2s;
}
.btnRecordGreenActive{
  background-color: #0b6849;
  border: 1px solid #24b685;
  color: var(--income-foreground);
  border-radius: var(--rounded-medium);
  font-weight: 600;
  font-size: var(--font-extra-small);
  width: 100%;
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s;
}
.addCategore{
  border-radius: var(--rounded-medium);
  font-size: var(--font-small);
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  padding: 8px 5px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  transition: all 0.2s;
}
.addCategore:active{
  background-color: #5c9ecd;
}
.btnRed{
  border-radius: var(--rounded-small);
  background-color: var(--danger);
  color: var(--danger-foreground);
  border: none;
  width: 20px;
  height: 20px;
  display: flex ;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}
</style>
