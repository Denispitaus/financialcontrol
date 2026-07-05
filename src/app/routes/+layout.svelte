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
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 20px;
}
</style>
