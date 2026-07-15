window.statKeys = ["hp", "str", "mag", "dex", "spd", "cha", "lck", "def", "res"];

window.statLabels = {
	hp: "HP",
	str: "STR",
	mag: "M.ATK",
	dex: "DEX",
	spd: "SPD",
	cha: "CHA",
	lck: "LCK",
	def: "DEF",
	res: "RES"
};

window.createStatRow = function createStatRow(label, value, options = {}) {
	const row = document.createElement("div");
	row.className = "stat-row";

	const labelElement = document.createElement("div");
	labelElement.className = "stat-label";
	labelElement.textContent = label;

	const valueElement = options.input ? document.createElement("input") : document.createElement("div");
	if (options.input) {
		valueElement.type = "number";
		valueElement.min = "0";
		valueElement.step = "1";
		valueElement.value = value;
		valueElement.className = "form-control form-control-sm";
	} else {
		valueElement.className = "stat-value";
		valueElement.textContent = value;
	}

	row.append(labelElement, valueElement);
	return row;
};

window.createStatGrid = function createStatGrid(stats, options = {}) {
	const grid = document.createElement("div");
	grid.className = "stat-grid";

	window.statKeys.forEach((key) => {
		if (key === "hp" && !options.includeHp) {
			return;
		}

		const label = window.statLabels[key];
		const value = stats[key] ?? 0;
		const row = window.createStatRow(label, value, options);
		row.dataset.statKey = key;
		grid.appendChild(row);
	});

	return grid;
};
