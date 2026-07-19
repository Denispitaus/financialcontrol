<script>
	import Title from '$shared/Title';
	import { fade } from 'svelte/transition';
	let { massiv = [] } = $props();

	const prepared = $derived(
		massiv.map((item) => ({
			day: Number(item.DaySave),
			value: Number(item.NumberSave),
			title: item.TitleSave,
			isProfit: Boolean(item.ButtonSave)
		}))
	);

	const incomeTotal = $derived(
		prepared.filter((item) => item.isProfit).reduce((sum, item) => sum + Math.abs(item.value), 0)
	);

	const expenseTotal = $derived(
		prepared.filter((item) => !item.isProfit).reduce((sum, item) => sum + Math.abs(item.value), 0)
	);

	const total = $derived(incomeTotal - expenseTotal);

	const pieData = $derived([
		{ title: 'Доход', value: incomeTotal, color: '#01ff01' },
		{ title: 'Расход', value: expenseTotal, color: '#ff0101' }
	]);

	const radius = 90;
	const strokeWidth = 36;
	const cx = 120;
	const cy = 120;

	const polarToCartesian = (centerX, centerY, r, angleDeg) => {
		const angleRad = (angleDeg - 90) * (Math.PI / 180);
		return {
			x: centerX + r * Math.cos(angleRad),
			y: centerY + r * Math.sin(angleRad)
		};
	};

	const describeArc = (x, y, r, startAngle, endAngle) => {
		const start = polarToCartesian(x, y, r, endAngle);
		const end = polarToCartesian(x, y, r, startAngle);
		const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
		return [`M ${start.x} ${start.y}`, `A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`].join(
			' '
		);
	};

	const segments = $derived.by(() => {
		const sum = pieData.reduce((acc, item) => acc + item.value, 0);
		let start = 0;

		return pieData.map((item) => {
			const percent = sum ? item.value / sum : 0;
			const angle = percent * 360;

			const segment = {
				...item,
				percent,
				startAngle: start,
				endAngle: start + angle
			};

			start += angle;
			return segment;
		});
	});
</script>

<section class="body">
	<Title text="График изменения финансов" className="TitleBlock" />

	<div class="pieLayout">
		<div class="pieWrap">
			<svg viewBox="0 0 240 240" class="pieSvg">
				{#if incomeTotal + expenseTotal > 0}
					{#each segments as item (item)}
						<path
							transition:fade
							d={describeArc(cx, cy, radius, item.startAngle, item.endAngle)}
							stroke={item.color}
							stroke-width={strokeWidth}
							fill="none"
							stroke-linecap="butt"
							title={`${item.title}: ${item.value} ₽`}
						/>
					{/each}
				{/if}

				<circle {cx} {cy} r={radius - strokeWidth / 2} fill="transparent" />
				<circle {cx} {cy} r={radius + strokeWidth / 2} fill="transparent" />
			</svg>

			<div class="centerText">
				<div class="centerValue">{total} ₽</div>
				<div class="centerLabel">Чистый итог</div>
			</div>
		</div>

		<div class="legend">
			<div class="legendItem">
				<span class="legendColor" style="background:#01ff01"></span>
				<div class="legendText">
					<div class="legendTitle">Доход</div>
					<div class="legendMeta">{incomeTotal} ₽</div>
				</div>
			</div>

			<div class="legendItem">
				<span class="legendColor" style="background:#ff0101"></span>
				<div class="legendText">
					<div class="legendTitle">Расход</div>
					<div class="legendMeta">{expenseTotal} ₽</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.body {
		background-color: var(--card);
		border-radius: var(--rounded-large);
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 100%;
		box-sizing: border-box;
		padding: 15px;
	}

	.pieLayout {
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: 20px;
		align-items: center;
	}

	.pieWrap {
		position: relative;
		width: 240px;
		height: 240px;
		margin: 0 auto;
	}

	.pieSvg {
		width: 240px;
		height: 240px;
		display: block;
		transform: rotate(-90deg);
	}

	.centerText {
		position: absolute;
		inset: 50% auto auto 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		pointer-events: none;
	}

	.centerValue {
		font-size: 22px;
		font-weight: 700;
		color: var(--foreground);
	}

	.centerLabel {
		font-size: 12px;
		color: var(--muted-foreground);
		margin-top: 4px;
	}

	.legend {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.legendItem {
		display: flex;
		align-items: flex-start;
		gap: 10px;
	}

	.legendColor {
		width: 14px;
		height: 14px;
		border-radius: 4px;
		margin-top: 4px;
		flex-shrink: 0;
	}

	.legendTitle {
		font-size: 14px;
		color: var(--foreground);
	}

	.legendMeta {
		font-size: 12px;
		color: var(--muted-foreground);
		margin-top: 2px;
	}

	@media (max-width: 768px) {
		.pieLayout {
			grid-template-columns: 1fr;
		}

		.pieWrap {
			width: 220px;
			height: 220px;
		}

		.pieSvg {
			width: 220px;
			height: 220px;
		}
	}
</style>
