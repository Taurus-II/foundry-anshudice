
Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "UAD - Exalted", name: "UAD - Exalted" }, "default");
  
   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       ../images/numeral_d10_faces_01_one.png,
       ../images/numeral_d10_faces_02_two.png,
       ../images/numeral_d10_faces_03_three.png,
       ../images/numeral_d10_faces_04_four.png,
       ../images/numeral_d10_faces_05_five.png,
       ../images/numeral_d10_faces_06_six.png,
       ../images/numeral_d10_faces_07_seven.png,
       ../images/numeral_d10_faces_08_eight.png,
       ../images/numeral_d10_faces_09_nine.png,
       ../images/numeral_d10_faces_10_ten.png
     ],
     system: "UAD - Exalted" 
   },"d10");
   
  dice3d.addSystem({ id: "UAD - Lunar", name: "UAD - Lunar" }, "default");

   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       ../images/numeral_d10_faces_01_one.png,
       ../images/numeral_d10_faces_02_two.png,
       ../images/numeral_d10_faces_03_three.png,
       ../images/numeral_d10_faces_04_four.png,
       ../images/numeral_d10_faces_05_five.png,
       ../images/numeral_d10_faces_06_six.png,
       ../images/numeral_d10_faces_07_seven.png,
       ../images/numeral_d10_faces_08_eight.png,
       ../images/numeral_d10_faces_09_nine.png,
       ../images/lunar_d10_faces_10_ten.png
     ],
     system: "UAD - Lunar" 
   },"d10");
   
  dice3d.addSystem({ id: "UAD - Solar", name: "UAD - Solar" }, "default");

   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       ../images/numeral_d10_faces_01_one.png,
       ../images/numeral_d10_faces_02_two.png,
       ../images/numeral_d10_faces_03_three.png,
       ../images/numeral_d10_faces_04_four.png,
       ../images/numeral_d10_faces_05_five.png,
       ../images/numeral_d10_faces_06_six.png,
       ../images/numeral_d10_faces_07_seven.png,
       ../images/numeral_d10_faces_08_eight.png,
       ../images/numeral_d10_faces_09_nine.png,
       ../images/solar_d10_faces_10_ten.png
     ],
     system: "UAD - Solar" 
   },"d10");

  dice3d.addSystem({ id: "UAD - Little Dragon", name: "UAD - Little Dragon" }, "default");

   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       ../images/numeral_d10_faces_01_one.png,
       ../images/numeral_d10_faces_02_two.png,
       ../images/numeral_d10_faces_03_three.png,
       ../images/numeral_d10_faces_04_four.png,
       ../images/numeral_d10_faces_05_five.png,
       ../images/numeral_d10_faces_06_six.png,
       ../images/numeral_d10_faces_07_seven.png,
       ../images/numeral_d10_faces_08_eight.png,
       ../images/numeral_d10_faces_09_nine.png,
       ../images/anshu_d10_faces_10_ten.png
     ],
     system: "UAD - Little Dragon" 
   },"d10");
	
});
