
Hooks.on('diceSoNiceReady', (dice3d) => {
  
  dice3d.addSystem({ id: "☸︎ Solar", name: "☸︎ Solar" }, "default");

   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "☀"
     ],
	 font: "Examorphous",
	 values: {min:1,max:10},
	 colorset: "1 Solar",
     system: "☸︎ Solar" 
   },"d10");
   
  dice3d.addSystem({ id: "☸︎ Little Dragon", name: "☸︎ Little Dragon" }, "default");

   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "⚖"
     ],
	 font: "Examorphous",
	 values: {min:1,max:10},
	 colorset: "1 Solar",
     system: "☸︎ Little Dragon" 
   },"d10");

  dice3d.addSystem({ id: "☸︎ Lunar", name: "☸︎ Lunar" }, "default");

   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "☽"
     ],
	 font: "Examorphous",
	 values: {min:1,max:10},
	 colorset: "2 Lunar",
     system: "☸︎ Lunar" 
   },"d10");

  dice3d.addSystem({ id: "☸︎ Mercury", name: "☸︎ Mercury" }, "default");

   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "☿"
     ],
	 font: "Examorphous",
	 values: {min:1,max:10},
	 colorset: "3 Mercury",
     system: "☸︎ Mercury" 
   },"d10");

  dice3d.addSystem({ id: "☸︎ Venus", name: "☸︎ Venus" }, "default");

   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "♀"
     ],
	 font: "Examorphous",
	 values: {min:1,max:10},
	 colorset: "4 Venus",
     system: "☸︎ Venus" 
   },"d10");

  dice3d.addSystem({ id: "☸︎ Mars", name: "☸︎ Mars" }, "default");

   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "♂"
     ],
	 font: "Examorphous",
	 values: {min:1,max:10},
	 colorset: "5 Mars",
     system: "☸︎ Mars" 
   },"d10");

  dice3d.addSystem({ id: "☸︎ Jupiter", name: "☸︎ Jupiter" }, "default");

   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "♃"
     ],
	 font: "Examorphous",
	 values: {min:1,max:10},
	 colorset: "6 Jupiter",
     system: "☸︎ Jupiter" 
   },"d10");

  dice3d.addSystem({ id: "☸︎ Saturn", name: "☸︎ Saturn" }, "default");

   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "♄"
     ],
	 font: "Examorphous",
	 values: {min:1,max:10},
	 colorset: "7 Saturn",
     system: "☸︎ Saturn" 
   },"d10");

   dice3d.addColorset({ 
	 name: "1 Solar",
	 description: "1 Solar",
	 category: "☸ Exalted",
	 foreground: "#ffe699",
	 background: "#ffcc00",
	 outline: "#804d1a",
	 edge: "#ffcc00",
	 texture: "Bronze - 4",
	 material: "metal",
	 }, "default");
   
   dice3d.addColorset({ 
	 name: "2 Lunar",
	 description: "2 Lunar",
	 category: "☸ Exalted",
	 foreground: "#ffffff",
	 background: "#c0c0c0",
	 outline: "#808080",
	 edge: "#c0c0c0",
	 texture: "Bronze - 4",
	 material: "metal",
	 }, "default");
   
   dice3d.addColorset({ 
	 name: "3 Mercury",
	 description: "3 Mercury",
	 category: "☸ Exalted",
	 foreground: "#ffff80",
	 background: "#c0c0c0",
	 outline: "#808000",
	 edge: "#c0c0c0",
	 texture: "Bronze - 4",
	 material: "iridescent",
	 }, "default");
	
   dice3d.addColorset({ 
	 name: "4 Venus",
	 description: "4 Venus",
	 category: "☸ Exalted",
	 foreground: "#0080ff",
	 background: "#c0c0c0",
	 outline: "#000080",
	 edge: "#c0c0c0",
	 texture: "Bronze - 4",
	 material: "iridescent",
	 }, "default");
	 
   dice3d.addColorset({ 
	 name: "5 Mars",
	 description: "5 Mars",
	 category: "☸ Exalted",
	 foreground: "#ff0000",
	 background: "#c0c0c0",
	 outline: "#800000",
	 edge: "#c0c0c0",
	 texture: "Bronze - 4",
	 material: "iridescent",
	 }, "default");
	 
   dice3d.addColorset({ 
	 name: "6 Jupiter",
	 description: "6 Jupiter",
	 category: "☸ Exalted",
	 foreground: "#009900",
	 background: "#c0c0c0",
	 outline: "#006600",
	 edge: "#c0c0c0",
	 texture: "Bronze - 4",
	 material: "iridescent",
	 }, "default");
	 
   dice3d.addColorset({ 
	 name: "7 Saturn",
	 description: "7 Saturn",
	 category: "☸ Exalted",
	 foreground: "#800080",
	 background: "#c0c0c0",
	 outline: "#400040",
	 edge: "#c0c0c0",
	 texture: "Bronze - 4",
	 material: "iridescent",
	 }, "default");

   dice3d.addColorset({ 
	 name: "8 Air",
	 description: "8 Air",
	 category: "☸ Exalted",
	 foreground: "#00ffff",
	 background: "#0080c0",
	 outline: "#004080",
	 edge: "#0080c0",
	 texture: "Astral Sea",
	 material: "glass",
	 }, "default");

   dice3d.addColorset({ 
	 name: "8 Earth",
	 description: "8 Earth",
	 category: "☸ Exalted",
	 foreground: "#808080",
	 background: "#ffffcc",
	 outline: "#404040",
	 edge: "#ffffcc",
	 texture: "Ice",
	 material: "glass",
	 }, "default");

   dice3d.addColorset({ 
	 name: "8 Fire",
	 description: "8 Fire",
	 category: "☸ Exalted",
	 foreground: "#ff8080",
	 background: "#ff0000",
	 outline: "#400000",
	 edge: "#ff0000",
	 texture: "Ice",
	 material: "glass",
	 }, "default");

   dice3d.addColorset({ 
	 name: "8 Water",
	 description: "8 Water",
	 category: "☸ Exalted",
	 foreground: "#0080ff",
	 background: "#000040",
	 outline: "#0000ff",
	 edge: "#000040",
	 texture: "Astral Sea",
	 material: "glass",
	 }, "default");

   dice3d.addColorset({ 
	 name: "8 Wood",
	 description: "8 Wood",
	 category: "☸ Exalted",
	 foreground: "#008000",
	 background: "#004000",
	 outline: "#004000",
	 edge: "#004000",
	 texture: "Wood",
	 material: "glass",
	 }, "default");

});
