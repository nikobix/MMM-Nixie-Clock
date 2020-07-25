/* global Module */

/* Magic Mirror
 * Module: MMM-Nixie-Clock
 *
 * By Nik Roberts
 * MIT Licensed.
 * 
 * To Do - 
 * 1. Make the images fade in quickly.
 * 2. Add some error traps just in case.
 */

Module.register("MMM-Nixie-Clock", {
	defaults: {
		size: 50,
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror

	// Define required scripts. ** moment is for accessing the time  **
	getScripts: function() {
		return ["moment.js"];
	},
	
	getStyles: function () {
		return [
			"MMM-Nixie-Clock.css",
		];
	},

	start: function() {
		var self = this;
		var dataRequest = null;
		var dataNotification = null;
		this.imgSize = "" + this.config.size;
		
		// load images for the display from the img folder
		// to change the images, download image 0 to 9 then rename the below.
		this.images = ['vfd_35x67_0.png','vfd_35x67_1.png','vfd_35x67_2.png','vfd_35x67_3.png','vfd_35x67_4.png','vfd_35x67_5.png','vfd_35x67_6.png','vfd_35x67_7.png','vfd_35x67_8.png','vfd_35x67_9.png'];
		// array for hours Mins and Secs Tens and Units. used for html id labels
		this.position = ['HT','HU','MT','MU','ST','SU'];
		// used to contol zindex layers to show the correct numbers
		this.OldSt = [0,0,0,0,0,0];
		this.St = [0,0,0,0,0,0];

		console.log("Started");
		
		this.running=false;
				

		// Schedule update timer.
		this.count = 0
		var timer = setInterval(()=>{
			
			// run clock once DOM created
		if(this.running){this.runClock();}
		this.count++
			}, 1000)
	},

// build number layers for manipulation later
	getDom: function() {
		if(!this.running) {
			var wrapper = document.createElement("div");
			wrapper.id = "Nixie_Clock";
			var s= this.config.size - this.config.size/10;
			wrapper.style.height = (s*2)+"px";
			wrapper.style.width = (s*9)+"px";
			wrapper.style.gridTemplateColumns = `${s}px ${s}px ${s/5}px ${s}px ${s}px ${s/5}px ${s}px ${s}px`;
			for(x=0;x<6;x++){
			var div = document.createElement("div");
			div.id = this.position[x];
			for(j=9;j>=0;j--){
				var a = document.createElement("a");
				a.id = this.position[x]+" "+ j;
				var img = document.createElement("img");
				img.src=this.file(`/img/${this.images[j]}`);
				img.width = this.imgSize;
				a.appendChild(img);
				div.appendChild(a);
				wrapper.appendChild(div);
			}
			
			if(x==1 || x==3){
				var gap =document.createElement("div");	
				wrapper.appendChild(gap)
			}
		}
			this.running = true;
			console.log(this.running);
						
		} else {
			wrapper= document.createElement("div");
		}
		return wrapper;
	},
		// function to flip the numbers using by using zIndex (when running in the DOM without the layers there was some flickering. This seems to solve the issue)
		
	runClock: function() {
		var date = moment();
		time = date.format("HHmmss").toString();
		for(j=0;j<6;j++){
			this.St[j] = time[j];
			var el = document.getElementById(`${this.position[j]} ${this.St[j]}`);
			el.style.zIndex = "1";
			if(this.OldSt[j] != this.St[j]) {
				var el = document.getElementById(`${this.position[j]} ${this.OldSt[j]}`);
				el.style.zIndex = "0";
			}
			this.OldSt[j] = this.St[j];
		}
	},

});
