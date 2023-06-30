
Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "UAD - Exalted", name: "UAD - Exalted" }, "default");
  
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
       "../images/numeral_d10_faces_10_ten.png"
     ],
     system: "UAD - Exalted" 
   },"d10");
   
  dice3d.addSystem({ id: "UAD - Lunar", name: "UAD - Lunar" }, "default");

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
       "../images/lunar_d10_faces_10_ten.png"
     ],
     system: "UAD - Lunar" 
   },"d10");
   
  dice3d.addSystem({ id: "UAD - Solar", name: "UAD - Solar" }, "default");

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
       "../images/solar_d10_faces_10_ten.png"
     ],
     system: "UAD - Solar" 
   },"d10");

  dice3d.addSystem({ id: "UAD - Little Dragon", name: "UAD - Little Dragon" }, "default");

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
       "../images/anshu_d10_faces_10_ten.png"
     ],
     system: "UAD - Little Dragon" 
   },"d10");
	
});
