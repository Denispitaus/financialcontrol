<script>
	import Title from '$shared/Title';
	import Button from '$shared/Button';
	import Paragraff from '$shared/Paragraff';

	let { monthname, BackMonth, NextMonth, checkNowDate, VisibleMonth } = $props();

	checkNowDate();
	VisibleMonth();
</script>

<header>
	<section class="headerSection">
		<img src="/financialcontrol/icon-logo.png" alt="Logo" />
		<Title text="Контроль финансов" className="headerTitle" />
	</section>
	<section class="headerSection">
		<Button text="<" className="headerButton" onclick={BackMonth} />
		<div class="monthInfo">
			<img class="icon-month" src="/financialcontrol/icon-month.png" alt="Month" />
			<Paragraff text={monthname} className="monthName" />
			<Paragraff text={new Date().getFullYear()} className="monthYear" />
		</div>
		<Button text=">" className="headerButton" onclick={NextMonth} />
	</section>
</header>

<style>
	.icon-month {
		width: 10px;
		height: 10px;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		background-color: var(--card);
		position: sticky;
		top: 0;
		border-bottom: 1px solid var(--border);
		box-shadow: 5px 0 10px 1px var(--border);
		z-index: 1000;
		width: 100%;
		box-sizing: border-box;
	}
	.headerSection {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.monthInfo {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 5px;
		background-color: var(--secondary);
		border-radius: var(--rounded-medium);
		padding: 3px 10px;
		width: 120px;
	}
	@media (max-width: 470px) {
		header {
			display: flex;
			gap: 10px;
			align-items: start;
			flex-direction: column;
			padding: 10px 20px;
			background-color: var(--card);
			position: sticky;
			top: 0;
			border-bottom: 1px solid var(--border);
			box-shadow: 5px 0 10px 1px var(--border);
			z-index: 1000;
		}
		.monthInfo {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 5px;
			background-color: var(--secondary);
			border-radius: var(--rounded-medium);
			padding: 3px 10px;
			width: 100%;
		}
		.headerSection {
			display: flex;
			align-items: center;
			gap: 10px;
			width: 100%;
		}
	}
</style>
