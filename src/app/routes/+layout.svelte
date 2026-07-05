<script>
  import '/src/app/app.css'
  import Header from '$widgets/Header'
	let { children } = $props();
</script>


<div class='fullApp'>
  <Header />

  <main class='mainPage'>
    {@render children()}
  </main>
</div>


<style>
.fullApp {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

  }
.mainPage{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 20px;
}
</style>
