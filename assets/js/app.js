const abilityDetailOverrides = {
	"Professor's Guidance": "Multiplies the unit's experience gain by 1.2 and adjacent allies' experience gain by 1.2.",
	"Professor's Guidance+": "+2 damage dealt by unit during combat, while keeping the experience gain bonus.",
	"Imperial Lineage": "Multiplies the unit's experience gain by 1.2.",
	"Imperial Lineage+": "+4 resistance for one turn if unit takes no action other than wait, while keeping the experience gain bonus.",
	"Royal Lineage": "Multiplies the unit's experience gain by 1.2.",
	"Royal Lineage+": "+20 avoid if user's HP is full, while keeping the experience gain bonus.",
	"Leicester Lineage": "Multiplies the unit's experience gain by 1.2.",
	"Leicester Lineage+": "Allows the unit to pass through enemy-occupied spaces, while keeping the experience gain bonus.",
	"Officer Duty": "+5 might when using gambits.",
	"Confidence": "+15 hit and avoid if user's HP is full.",
	"Catnap": "Recovers 10% HP if unit takes no action other than wait.",
	"Born Fighter": "-10 avoid to adjacent enemies.",
	"Persecution Complex": "+5 attack if user's HP is below full.",
	"Songstress": "Restores 10% of HP to adjacent allies at the start of the turn.",
	"Hunter's Boon": "+20 critical rate if foe's HP is 50% or lower.",
	"Staunch Shield": "+4 defense for one turn if unit takes no action other than wait.",
	"Lone Wolf": "+5 attack if unit does not have a battalion equipped.",
	"Lockpick": "Unit can open doors and chests without needing a key.",
	"Philanderer": "+2 damage dealt and -2 damage taken if unit is adjacent to a female ally.",
	"Live to Serve": "When healing an ally, unit recovers the same amount of HP.",
	"Perseverance": "Use rally to grant +4 strength to an adjacent ally for one turn.",
	"Lady Knight": "+3 might and +5 hit when using gambits.",
	"Distinguished House": "+2 damage dealt if unit has a battalion equipped.",
	"Goody Basket": "Unit may recover 10% HP at the start of the turn.",
	"Watchful Eye": "Grants +20 hit.",
	"Mastermind": "Multiplies the unit's skill experience and class experience gain by 2 in battle.",
	"Animal Friend": "Unit recovers 20% HP if adjacent to a cavalry or flying ally at the start of the turn.",
	"Advocate": "+3 damage dealt by adjacent male allies.",
	"Rivalry": "+2 damage dealt and -2 damage taken if unit is adjacent to a male ally.",
	"Guardian": "+3 damage dealt by adjacent female allies.",
	"Lily's Poise": "-3 damage taken by adjacent allies.",
	"Crest Scholar": "Use rally to grant +4 magic to an adjacent ally for one turn.",
	"Infirmary Master": "+10 critical avoid to adjacent allies.",
	"Veteran Knight": "-2 damage taken if unit has a battalion equipped.",
	"Compassion": "Use rally to grant +8 luck to an adjacent ally for one turn.",
	"Fighting Spirit": "-5 damage taken if unit does not have a battalion equipped.",
	"Survival Instinct": "+4 strength, magic, dexterity, and speed for one turn after defeating an enemy when initiating combat.",
	"Aptitude": "Grants +20 to all of the unit's growth rates.",
	"Murderous Intent": "+20 hit when initiating combat.",
	"Business Prosperity": "Grants +5 luck.",
	"Honorable Spirit": "+3 attack when fighting an enemy at 1-range when no allies are nearby.",
	"King of Grappling": "+6 strength and defense if user's HP is 50% or lower.",
	"Circadian Beat": "+3 strength and magic if unit is fighting inside, or +3 defense and resistance if fighting outside.",
	"Monstrous Appeal": "Makes all attacks deal bonus damage against monsters and makes monsters more likely to target the unit.",
	"Sword Prowess": "+5 to +10 hit, +7 to +20 avoid, and +5 to +10 crit avoid when using a sword.",
	"Lance Prowess": "+6 to +15 hit, +6 to +15 avoid, and +5 to +10 crit avoid when using a lance.",
	"Axe Prowess": "+7 to +20 hit, +5 to +10 avoid, and +5 to +10 crit avoid when using an axe.",
	"Bow Prowess": "+6 to +15 hit, +6 to +15 avoid, and +5 to +10 crit avoid when using a bow.",
	"Brawl Prowess": "+5 to +10 hit, +7 to +20 avoid, and +5 to +10 crit avoid when brawling.",
	"Reason": "+7 to +20 hit, +5 to +10 avoid, and +5 to +10 crit avoid when using black or dark magic.",
	"Faith": "+5 to +10 hit, +7 to +20 avoid, and +5 to +10 crit avoid when using white magic.",
	"Authority": "+2 to +10 might when using gambits.",
	"Swordfaire": "+5 attack when using a sword.",
	"Lancefaire": "+5 attack when using a lance.",
	"Axefaire": "+5 attack when using an axe.",
	"Bowfaire": "+5 attack when using a bow.",
	"Fistfaire": "+5 attack when brawling.",
	"Black Tomefaire": "+5 attack when using black magic.",
	"White Tomefaire": "+5 attack when using white magic.",
	"Dark Tomefaire": "+5 attack when using dark magic.",
	"Sword Crit +10": "+10 critical rate when using a sword.",
	"Lance Crit +10": "+10 critical rate when using a lance.",
	"Axe Crit +10": "+10 critical rate when using an axe.",
	"Bow Crit +10": "+10 critical rate when using a bow.",
	"Brawl Crit +10": "+10 critical rate when brawling.",
	"Dexterity +4": "Grants +4 dexterity.",
	"Movement +1": "Grants +1 movement.",
	"Rally Strength": "Use rally to grant +4 strength to an adjacent ally for one turn.",
	"Rally Magic": "Use rally to grant +4 magic to an adjacent ally for one turn.",
	"Rally Speed": "Use rally to grant +4 speed to an adjacent ally for one turn.",
	"Rally Defense": "Use rally to grant +4 defense to an adjacent ally for one turn.",
	"Rally Resistance": "Use rally to grant +4 resistance to an adjacent ally for one turn.",
	"Rally Movement": "Use rally to grant +1 movement to an adjacent ally for one turn.",
	"Rally Dexterity": "Use rally to grant +8 dexterity to an adjacent ally for one turn.",
	"Rally Luck": "Use rally to grant +8 luck to an adjacent ally for one turn.",
	"Rally Charm": "Use rally to grant +8 charm to an adjacent ally for one turn.",
	"Swordbreaker": "+20 hit and avoid when using a lance against a foe using a sword.",
	"Lancebreaker": "+20 hit and avoid when using an axe against a foe using a lance.",
	"Axebreaker": "+20 hit and avoid when using a sword against a foe using an axe.",
	"Model Leader": "Multiplies the experience gain of the user's equipped battalion by 2.",
	"Defensive Tactics": "Reduces all damage dealt to the equipped battalion by 50%.",
	"Offensive Tactics": "+5 might and +20 hit when using gambits.",
	"Black Magic Range +1": "+1 range when using black magic.",
	"Dark Magic Range +1": "+1 range when using dark magic.",
	"White Magic Range +1": "+1 range when using offensive white magic.",
	"Black Magic Crit +10": "+10 critical rate when using black magic.",
	"White Magic Crit +10": "+10 critical rate when using white magic.",
	"Dark Magic Crit +10": "+10 critical rate when using dark magic.",
	"Black Magic Avo +20": "+20 avoid when using black magic.",
	"White Magic Avo +20": "+20 avoid when using white magic.",
	"Sword Avo +20": "+20 avoid when using a sword.",
	"Pass": "Allows the unit to pass through enemy-occupied spaces.",
	"Seal Strength": "Inflicts -6 strength on the target after combat if the attack lands.",
	"Seal Magic": "Inflicts -6 magic on the target after combat if the attack lands.",
	"Seal Speed": "Inflicts -6 speed on the target after combat if the attack lands.",
	"Seal Movement": "Inflicts -1 movement on the target after combat if the attack lands.",
	"Brawl Avo +20": "+20 avoid when brawling.",
	"Alert Stance": "+15 avoid for one turn if unit takes no action other than wait.",
	"Alert Stance+": "+30 avoid for one turn if unit takes no action other than wait.",
	"Close Counter": "Unit can counterattack at 1-range when using a bow.",
	"HP +5": "Grants +5 maximum HP.",
	"Speed +2": "Grants +2 speed.",
	"Defense +2": "Grants +2 defense.",
	"Strength +2": "Grants +2 strength.",
	"Magic +2": "Grants +2 magic.",
	"Resistance +2": "Grants +2 resistance.",
	"Vantage": "Unit counterattacks first if user's HP is 50% or lower.",
	"Steal": "Allows unit to trade items with an enemy unit.",
	"Armored Blow": "+6 defense when initiating combat.",
	"Desperation": "Unit's follow-up attack occurs before the foe's counterattack if unit initiates combat when HP is 50% or lower.",
	"Death Blow": "+6 strength when initiating combat.",
	"Hit +20": "Grants +20 hit.",
	"Unarmed Combat": "Allows unit to fight without a weapon.",
	"Fiendish Blow": "+6 magic when initiating combat.",
	"Poison Strike": "Foe loses up to 20% HP after combat if unit initiates combat.",
	"Miracle": "Unit may survive a fatal attack with 1 HP if user's HP is above 1.",
	"Darting Blow": "+6 attack speed when initiating combat.",
	"Defiant Str": "+8 strength if user's HP is 25% or lower.",
	"Lethality": "May instantly defeat the foe if unit deals at least 1 damage.",
	"Pavise": "Unit may take half damage from sword, lance, axe, brawling, or 1-range gambit attacks.",
	"Aegis": "Unit may take half damage from bow, black magic, dark magic, white magic, or ranged gambit attacks.",
	"Seal Defense": "Inflicts -6 defense on the target after combat if the attack lands.",
	"Wrath": "+50 critical rate if user's HP is 50% or lower and foe initiates combat.",
	"Tomebreaker": "+20 hit and avoid when brawling against a foe using magic.",
	"Bowbreaker": "+20 hit and avoid when using magic against a foe using a bow.",
	"Lifetaker": "Unit recovers 50% HP if unit initiates combat and defeats their target.",
	"Renewal": "Unit recovers up to 20% HP at the start of their turn.",
	"Defiant Avo": "+30 avoid if user's HP is 25% or lower.",
	"Defiant Crit": "+50 critical rate if user's HP is 25% or lower.",
	"Warding Blow": "+6 resistance when initiating combat.",
	"Defiant Def": "+8 defense if user's HP is 25% or lower.",
	"Defiant Spd": "+8 speed if user's HP is 25% or lower.",
	"Seal Resistance": "Inflicts -6 resistance on the target after combat if the attack lands.",
	"Defiant Res": "+8 resistance if user's HP is 25% or lower.",
	"Quick Riposte": "Unit makes a follow-up attack and foe cannot if user's HP is 50% or higher and foe initiates combat.",
	"Defiant Mag": "+8 magic if user's HP is 25% or lower.",
	"Duelist's Blow": "+30 avoid when initiating combat.",
	"Transmute": "+3 to all stats until the end of the unit's phase if foe initiates combat and lands a magic attack.",
	"Uncanny Blow": "+30 hit when initiating combat."
};

const unspecifiedDetailOverrides = {
	ability: "No ability has been assigned to this slot yet.",
	combatArt: "No combat art has been assigned to this slot yet.",
	classPath: "No class path has been assigned to this slot yet."
};

const classDetailOverrides = {
	"Commoner": "Baseline infantry class available to most characters. Provides the common class foundations and HP +5 mastery.",
	"Noble": "Baseline infantry class for noble-born characters. Functions like Commoner with the noble-specific class track.",
	"Myrmidon": "Beginner sword class built around speed and evasion. Mastery grants Speed +2.",
	"Soldier": "Beginner lance class built around sturdy early combat. Mastery grants Defense +2 and Reposition.",
	"Fighter": "Beginner axe class with strong physical growth. Mastery grants Strength +2 and Shove.",
	"Monk": "Beginner magic class that starts the reason and faith path. Mastery grants Magic +2 and Draw Back.",
	"Lord": "Intermediate unique infantry class with Charm and Resistance +2 style leadership utility.",
	"Mercenary": "Balanced intermediate sword class with good durability. Mastery grants Vantage.",
	"Thief": "Fast utility class with lockpick access and stealth tools. Mastery grants Steal.",
	"Armored Knight": "Heavily armored defender class with massive physical bulk. Mastery grants Armored Blow.",
	"Cavalier": "Mounted physical class with Canto and strong movement. Mastery grants Desperation.",
	"Brigand": "Axe-focused offense class with strong player-phase damage. Mastery grants Death Blow.",
	"Archer": "Bow class with extra range and reliable chip damage. Mastery grants Hit +20.",
	"Brawler": "Brawl class with unarmed combat and aggressive close-range pressure. Mastery grants Unarmed Combat.",
	"Mage": "Black magic class with Fire access and high offensive magic growth. Mastery grants Fiendish Blow.",
	"Dark Mage": "Dark magic class focused on offensive black magic and debuff pressure. Mastery grants Poison Strike.",
	"Priest": "Faith support class with healing and utility. Mastery grants Miracle.",
	"Pegasus Knight": "Fast flying lance class with high avoid and mobility. Mastery grants Darting Blow.",
	"Hero": "Advanced sword class with solid mixed combat and Vantage access. Mastery grants Defiant Str.",
	"Swordmaster": "Sword specialist class with high crit and strong duels. Mastery grants Lethality and Sword Crit +10.",
	"Assassin": "Stealth sword and bow class with Locktouch and Stealth. Mastery grants Lethality.",
	"Fortress Knight": "Slow armored wall class with enormous defenses. Mastery grants Pavise.",
	"Paladin": "Mounted lance class with Canto and strong frontline mobility. Mastery grants Aegis.",
	"Wyvern Rider": "Flying axe class with excellent mobility and offense. Mastery grants Seal Defense.",
	"Warrior": "Heavy physical attacker class with strong offense. Mastery grants Wrath.",
	"Sniper": "Bow specialist class with extended range and powerful bow combat arts. Mastery grants Hunter's Volley.",
	"Grappler": "Brawl specialist class with strong player-phase damage. Mastery grants Fierce Iron Fist and Tomebreaker.",
	"Warlock": "Advanced black magic class with extra spell uses and strong magic offense. Mastery grants Bowbreaker.",
	"Dark Bishop": "Advanced dark magic class with strong offensive magic and debuff pressure. Mastery grants Lifetaker.",
	"Bishop": "Advanced faith support class with extra healing uses and strong sustain. Mastery grants Renewal and White Magic Uses x2.",
	"Falcon Knight": "Master flying lance class with high avoid and mobility. Mastery grants Defiant Avo.",
	"Wyvern Lord": "Master flying axe class with excellent offense and movement. Mastery grants Defiant Crit.",
	"Mortal Savant": "Master sword and magic hybrid class with mixed offense. Mastery grants Warding Blow.",
	"Great Knight": "Mounted armored class with heavy bulk and mobility. Mastery grants Defiant Def.",
	"Bow Knight": "Master mounted bow class with excellent range and Canto. Mastery grants Defiant Spd.",
	"Dark Knight": "Master mounted black/dark magic class with strong mobility. Mastery grants Seal Resistance.",
	"Holy Knight": "Master mounted faith class with mobility and white magic utility. Mastery grants Defiant Res.",
	"War Master": "High-end brawl and axe class with top-tier physical offense. Mastery grants Quick Riposte.",
	"Gremory": "Top-tier magic class with doubled spell uses for both reason and faith. Mastery grants Defiant Mag.",
	"Enlightened One": "Byleth's balanced unique class with sword and magic utility. Mastery grants Sacred Power.",
	"Dancer": "Refresh-focused support class that lets allies act again. Mastery grants Special Dance.",
	"Armored Lord": "Edelgard's unique armored class built for heavy offense and durability. Mastery grants Pomp & Circumstance.",
	"High Lord": "Dimitri's unique infantry class with lance focus and leadership utility. Mastery grants Pomp & Circumstance.",
	"Great Lord": "Dimitri's advanced unique class with strong lance and authority flavor. Mastery grants Pomp & Circumstance.",
	"Barbarossa": "Claude's unique flying class with bow focus and exceptional movement. Mastery grants Charm.",
	"Wyvern Master": "Claude's final flying class with bow and mobility focus. Mastery grants Pomp & Circumstance.",
	"Emperor": "Edelgard's final armored unique class built around axes and authority. Mastery grants Charm and Axefaire.",
	"Flame Emperor": "Unique armored enemy-class identity used by Edelgard in story battles.",
	"Death Knight": "Mounted dark magic unique class with high threat and cavalry movement. Mastery grants Counterattack.",
	"Trickster": "Hybrid stealth utility class with sword and support tools. Mastery grants Duelist's Blow and Lucky Seven.",
	"War Monk": "DLC brawl and faith hybrid class with strong close-range support. Mastery grants Brawl Avo +20.",
	"War Cleric": "DLC brawl and faith hybrid class with healing and melee pressure. Mastery grants Brawl Avo +20.",
	"Dark Flier": "DLC flying magic class with mobility and strong magic pressure. Mastery grants Transmute.",
	"Valkyrie": "DLC mounted magic class with extra black and dark magic range. Mastery grants Uncanny Blow."
};

document.addEventListener("DOMContentLoaded", async () => {
	const [characters, abilities, combatArts, classPaths] = await Promise.all([
		loadJson("data/characters.json", window.characterData ?? []),
		loadJson("data/abilities.json", window.abilitiesData ?? {}),
		loadJson("data/combat_arts.json", window.combatArtsData ?? {}),
		loadJson("data/classes.json", window.classPathData ?? {})
	]);

	const abilityCatalog = normalizeCatalog(abilities, "ability");
	const combatArtCatalog = normalizeCatalog(combatArts, "combatArt");
	const classPathCatalog = normalizeClassCatalog(classPaths);

	const abilityNames = Object.keys(abilityCatalog);
	const combatArtNames = Object.keys(combatArtCatalog);
	const classPathNames = Object.keys(classPathCatalog);

	const characterList = document.getElementById("characterList");
	const selectedCharacterName = document.getElementById("selectedCharacterName");
	const selectedCharacterClass = document.getElementById("selectedCharacterClass");
	const characterPortrait = document.getElementById("characterPortrait");
	const characterHpLabel = document.getElementById("characterHpLabel");
	const baseStatGrid = document.getElementById("baseStatGrid");
	const growthStatGrid = document.getElementById("growthStatGrid");
	const overallStatGrid = document.getElementById("overallStatGrid");
	const growthStatForm = document.getElementById("growthStatForm");
	const abilitiesSelectList = document.getElementById("abilitiesSelectList");
	const abilitiesDetails = document.getElementById("abilitiesDetails");
	const combatArtsSelectList = document.getElementById("combatArtsSelectList");
	const combatArtsDetails = document.getElementById("combatArtsDetails");
	const classPathSelectList = document.getElementById("classPathSelectList");
	const classPathDetails = document.getElementById("classPathDetails");
	const studentPortraitButton = document.getElementById("studentPortraitButton");
	const timeSkipPortraitButton = document.getElementById("timeSkipPortraitButton");
	const saveGrowthButton = document.getElementById("saveGrowthButton");
	const resetGrowthButton = document.getElementById("resetGrowthButton");

	if (!Array.isArray(characters) || !characters.length) {
		characterList.innerHTML = '<div class="text-light-50">No character data found.</div>';
		return;
	}

	const normalizedCharacters = characters.map((character) => ({
		...character,
		growths: character.growths ?? {},
		abilities: character.abilities ?? [],
		combatArts: character.combatArts ?? [],
		classPaths: character.classPaths ?? []
	}));

	let activeCharacter = normalizedCharacters[0];
	let activeAbility = null;
	let activeCombatArt = null;
	let activeClassPath = null;
	let activePortraitStage = "student";
	const savedGrowthState = loadGrowthState();

	const renderStats = (targetElement, stats, options = {}) => {
		targetElement.replaceChildren(window.createStatGrid(stats, options));
	};

	const getPortraitForStage = (character, stage) => {
		if (stage === "time-skip") {
			return character.timeSkipPortrait ?? character.studentPortrait ?? character.portrait ?? "";
		}

		return character.studentPortrait ?? character.portrait ?? character.timeSkipPortrait ?? "";
	};

	const getGrowthStateKey = (character) => `fodraft-growth:${character.id}`;

	const getSavedGrowthForCharacter = (character) => savedGrowthState[character.id] ?? character.growths ?? {};

	const saveGrowthState = () => {
		window.localStorage.setItem("fodraftGrowthState", JSON.stringify(savedGrowthState));
	};

	const syncGrowthStateToCharacter = (character, growthValues) => {
		savedGrowthState[character.id] = growthValues;
		saveGrowthState();
		character.growths = growthValues;
	};

	const collectGrowthValues = () => {
		const growthValues = {};
		growthStatGrid.querySelectorAll("input[data-growth-key]").forEach((input) => {
			const key = input.dataset.growthKey;
			growthValues[key] = Number.parseInt(input.value, 10) || 0;
		});

		return growthValues;
	};

	const applyGrowthValues = (character, growthValues) => {
		growthStatGrid.querySelectorAll("input[data-growth-key]").forEach((input) => {
			const key = input.dataset.growthKey;
			input.value = growthValues[key] ?? 0;
		});

		updateOverallStats(character);
	};

	const renderAbilityDetails = (abilityName) => {
		if (!abilityName) {
			abilitiesDetails.textContent = "Select an ability to view effects.";
			return;
		}

		const ability = abilityCatalog[abilityName] ?? {};
		const abilityEffects = abilityDetailOverrides[abilityName]
			? [abilityDetailOverrides[abilityName]]
			: (abilityName === "Unspecified"
				? [unspecifiedDetailOverrides.ability]
				: (ability.effects ?? [`Playable ability in Fire Emblem: Three Houses.`]));
		abilitiesDetails.innerHTML = `
			<div class="fw-semibold mb-2">${abilityName}</div>
			<ul class="mb-0 ps-3">
				${abilityEffects
					.map((effect) => `<li>${effect}</li>`)
					.join("")}
			</ul>
		`;
	};

	const renderCombatArtDetails = (combatArtName) => {
		if (!combatArtName) {
			combatArtsDetails.textContent = "Select a combat art to view effects.";
			return;
		}

		const combatArt = combatArtCatalog[combatArtName] ?? {
			effects: [combatArtName === "Unspecified"
				? unspecifiedDetailOverrides.combatArt
				: `${combatArtName} is a combat art in Fire Emblem: Three Houses.`]
		};
		combatArtsDetails.innerHTML = `
			<div class="fw-semibold mb-2">${combatArtName}</div>
			<ul class="mb-0 ps-3">
				${(combatArt.effects ?? ["No effect data available."])
					.map((effect) => `<li>${effect}</li>`)
					.join("")}
			</ul>
		`;
	};

	const renderClassPathDetails = (classPathName) => {
		if (!classPathName) {
			classPathDetails.textContent = "Select a class path to view requirements.";
			return;
		}

		const classPath = classPathCatalog[classPathName] ?? window.classPathData[classPathName] ?? {};
		const classDescription = classDetailOverrides[classPathName]
			?? (classPathName === "Unspecified"
				? unspecifiedDetailOverrides.classPath
				: classPath.description ?? `${classPathName} is a playable class in Fire Emblem: Three Houses.`);

		classPathDetails.innerHTML = `
			<div class="fw-semibold mb-2">${classPathName}</div>
			<div class="mb-2"><span class="fw-semibold">Requirement:</span> ${classPath.requirement ?? "Playable class"}</div>
			<div>${classDescription}</div>
		`;
	};

	const updateOverallStats = (character) => {
		const growthValues = collectGrowthValues();

		const combinedStats = { ...character.stats };
		window.statKeys.forEach((key) => {
			combinedStats[key] = (character.stats[key] ?? 0) + (growthValues[key] ?? 0);
		});

		renderStats(overallStatGrid, combinedStats);
		characterHpLabel.textContent = `${combinedStats.hp ?? 0} HP`;
		syncGrowthStateToCharacter(character, growthValues);
	};

	const renderComboList = (targetElement, options, selectedValues, onChange, placeholder) => {
		targetElement.innerHTML = "";

		if (!options.length) {
			targetElement.innerHTML = '<div class="text-muted">No options available.</div>';
			return;
		}

		const selectedList = Array.isArray(selectedValues) ? selectedValues : [selectedValues];
		const slotCount = Math.max(1, selectedList.filter(Boolean).length || 3);

		for (let index = 0; index < slotCount; index += 1) {
			const select = document.createElement("select");
			select.className = "form-select combo-select";
			select.innerHTML = [`<option value="">${placeholder}</option>`]
				.concat(options.map((option) => `<option value="${option}">${option}</option>`))
				.join("");
			select.value = selectedList[index] ?? "";
			select.addEventListener("change", (event) => onChange(event.target.value));
			targetElement.appendChild(select);
		}
	};

	const renderCharacter = (character) => {
		activeCharacter = character;
		selectedCharacterName.textContent = character.name;
		selectedCharacterClass.textContent = character.className;
		characterPortrait.src = getPortraitForStage(character, activePortraitStage);
		characterPortrait.alt = `${character.name} portrait`;

		renderStats(baseStatGrid, character.stats);

		const growthGrid = window.createStatGrid(character.growths, { input: true, includeHp: true });
		growthGrid.querySelectorAll("input").forEach((input) => {
			input.dataset.growthKey = input.closest(".stat-row").dataset.statKey;
			input.value = character.growths[input.dataset.growthKey] ?? 0;
		});
		growthStatGrid.replaceChildren(growthGrid);

		const savedGrowthValues = getSavedGrowthForCharacter(character);
		applyGrowthValues(character, savedGrowthValues);

		const abilitySelection = character.abilities.slice(0, 3);
		const combatArtSelection = character.combatArts.slice(0, 3);
		const classPathSelection = character.classPaths.slice(0, 3);

		renderComboList(abilitiesSelectList, abilityNames, abilitySelection, (value) => {
			activeAbility = value;
			renderAbilityDetails(value);
		}, "Select an ability");

		renderComboList(combatArtsSelectList, combatArtNames, combatArtSelection, (value) => {
			activeCombatArt = value;
			renderCombatArtDetails(value);
		}, "Select a combat art");

		renderComboList(classPathSelectList, classPathNames, classPathSelection, (value) => {
			activeClassPath = value;
			renderClassPathDetails(value);
		}, "Select a class path");

		activeAbility = character.abilities[0] ?? null;
		activeCombatArt = character.combatArts[0] ?? null;
		activeClassPath = character.classPaths[0] ?? null;
		renderAbilityDetails(activeAbility);
		renderCombatArtDetails(activeCombatArt);
		renderClassPathDetails(activeClassPath);
	};

	const resetGrowth = () => {
		const resetValues = {};
		window.statKeys.forEach((key) => {
			resetValues[key] = 0;
		});

		savedGrowthState[activeCharacter.id] = resetValues;
		saveGrowthState();
		applyGrowthValues(activeCharacter, resetValues);
	};

	const exportGrowthJson = () => {
		const payload = normalizedCharacters.map((character) => ({
			id: character.id,
			name: character.name,
			growths: savedGrowthState[character.id] ?? character.growths ?? {}
		}));

		return payload;
	};

	const downloadGrowthJson = () => {
		const payload = exportGrowthJson();
		const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "blue-lions-growths.json";
		link.click();
		URL.revokeObjectURL(url);
	};

	const saveGrowthJsonToFile = async () => {
		const payload = exportGrowthJson();
		const jsonText = JSON.stringify(payload, null, 2);

		if (window.showSaveFilePicker) {
			const fileHandle = await window.showSaveFilePicker({
				suggestedName: "blue-lions-growths.json",
				types: [
					{
						description: "JSON file",
						accept: { "application/json": [".json"] }
					}
				]
			});
			const writable = await fileHandle.createWritable();
			await writable.write(jsonText);
			await writable.close();
			return;
		}

		downloadGrowthJson();
	};

	characterList.innerHTML = normalizedCharacters
		.map(
			(character) => `
				<button type="button" class="list-group-item list-group-item-action" data-character-id="${character.id}">
					<div class="fw-semibold">${character.name}</div>
					<div class="small text-muted">${character.className}</div>
				</button>
			`
		)
		.join("");

	characterList.addEventListener("click", (event) => {
		const button = event.target.closest("[data-character-id]");
		if (!button) {
			return;
		}

		const character = normalizedCharacters.find((entry) => entry.id === button.dataset.characterId);
		if (!character) {
			return;
		}

		[...characterList.querySelectorAll(".list-group-item")].forEach((item) => item.classList.remove("active"));
		button.classList.add("active");
		renderCharacter(character);
	});

	studentPortraitButton.addEventListener("click", () => {
		activePortraitStage = "student";
		studentPortraitButton.classList.add("active");
		timeSkipPortraitButton.classList.remove("active");
		characterPortrait.src = getPortraitForStage(activeCharacter, activePortraitStage);
	});

	timeSkipPortraitButton.addEventListener("click", () => {
		activePortraitStage = "time-skip";
		timeSkipPortraitButton.classList.add("active");
		studentPortraitButton.classList.remove("active");
		characterPortrait.src = getPortraitForStage(activeCharacter, activePortraitStage);
	});

	growthStatForm.addEventListener("submit", (event) => {
		event.preventDefault();
		updateOverallStats(activeCharacter);
	});

	saveGrowthButton.addEventListener("click", async () => {
		try {
			await saveGrowthJsonToFile();
		} catch {
			downloadGrowthJson();
		}
	});

	resetGrowthButton.addEventListener("click", resetGrowth);

	const activeButton = characterList.querySelector(`[data-character-id="${activeCharacter.id}"]`);
	if (activeButton) {
		activeButton.classList.add("active");
	}

	if (savedGrowthState[activeCharacter.id]) {
		activeCharacter.growths = savedGrowthState[activeCharacter.id];
	}

	renderCharacter(activeCharacter);
});

function loadGrowthState() {
	try {
		return JSON.parse(window.localStorage.getItem("fodraftGrowthState") || "{}");
	} catch {
		return {};
	}
}

async function loadJson(path, fallback) {
	try {
		const response = await fetch(path);
		if (!response.ok) {
			return fallback;
		}

		return await response.json();
	} catch {
		return fallback;
	}
}

function normalizeCatalog(data, kind) {
	if (Array.isArray(data)) {
		return data.reduce((catalog, entry) => {
			if (typeof entry === "string" && entry.trim()) {
				catalog[entry] = {
					effects: [entry === "Unspecified"
						? unspecifiedDetailOverrides[kind]
						: `${entry} is a playable ${kind.replace("combatArt", "combat art")} in Fire Emblem: Three Houses.`]
				};
				return catalog;
			}

			if (entry && typeof entry === "object" && entry.name) {
				catalog[entry.name] = {
					effects: entry.effects ?? [entry.description ?? `${entry.name} is a playable ${kind.replace("combatArt", "combat art")} in Fire Emblem: Three Houses.`]
				};
			}

			return catalog;
		}, {});
	}

	if (data && typeof data === "object") {
		return Object.entries(data).reduce((catalog, [name, value]) => {
			if (typeof value === "string") {
				catalog[name] = { effects: [value] };
				return catalog;
			}

			catalog[name] = value ?? { effects: [abilityDetailOverrides[name] ?? `${name} is a playable ${kind.replace("combatArt", "combat art")} in Fire Emblem: Three Houses.`] };
			if (name === "Unspecified") {
				catalog[name] = { effects: [unspecifiedDetailOverrides[kind]] };
			}
			return catalog;
		}, {});
	}

	return {};
}

function normalizeClassCatalog(data) {
	if (Array.isArray(data)) {
		return data.reduce((catalog, entry) => {
			if (typeof entry === "string" && entry.trim()) {
				catalog[entry] = {
					requirement: entry === "Unspecified" ? "Unspecified" : "Playable class",
					description: entry === "Unspecified"
						? unspecifiedDetailOverrides.classPath
						: `${entry} is a playable class in Fire Emblem: Three Houses.`
				};
				return catalog;
			}

			if (entry && typeof entry === "object" && entry.name) {
				catalog[entry.name] = {
					requirement: entry.requirement ?? (entry.name === "Unspecified" ? "Unspecified" : "Playable class"),
					description: entry.description ?? (entry.name === "Unspecified"
					? unspecifiedDetailOverrides.classPath
					: `${entry.name} is a playable class in Fire Emblem: Three Houses.`)
				};
			}

			return catalog;
		}, {});
	}

	if (data && typeof data === "object") {
		return Object.entries(data).reduce((catalog, [name, value]) => {
			if (typeof value === "string") {
				catalog[name] = { requirement: value, description: classDetailOverrides[name] ?? (name === "Unspecified" ? unspecifiedDetailOverrides.classPath : `${name} is a playable class in Fire Emblem: Three Houses.`) };
				return catalog;
			}

			catalog[name] = value ?? { requirement: name === "Unspecified" ? "Unspecified" : "Playable class", description: classDetailOverrides[name] ?? (name === "Unspecified" ? unspecifiedDetailOverrides.classPath : `${name} is a playable class in Fire Emblem: Three Houses.`) };
			return catalog;
		}, {});
	}

	return {};
}
