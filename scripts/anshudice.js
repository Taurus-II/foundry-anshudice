
Hooks.on('diceSoNiceReady', (dice3d) => {
  
  dice3d.addSystem({ id: "Exalted - Lunar", name: "Exalted - Lunar" }, "default");

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
       "8",
       "☽"
     ],
	 font: "Examorphous",
	 values: {min:1,max:10},
     system: "Exalted - Lunar" 
   },"d10");
   
  dice3d.addSystem({ id: "Exalted - Solar", name: "Exalted - Solar" }, "default");

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
       "8",
       "☀"
     ],
	 font: "Examorphous",
	 values: {min:1,max:10},
     system: "Exalted - Solar" 
   },"d10");
   
  dice3d.addSystem({ id: "Exalted - Solar", name: "Exalted - Little Dragon" }, "default");

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
       "8",
       "⚖"
     ],
	 font: "Examorphous",
	 values: {min:1,max:10},
     system: "Exalted - Little Dragon" 
   },"d10");
	
});
