<script>
  import '/src/app/app.css'
	let { children } = $props();
</script>


  <main class='mainPage'>
    {@render children()}
  </main>



<style>
.mainPage{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}
</style>
