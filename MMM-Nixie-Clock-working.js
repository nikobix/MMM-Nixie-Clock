/* global Module */

/* Magic Mirror
 * Module: MMM-Nixie-Clock
 *
 * By Nik Roberts
 * MIT Licensed.
 */

Module.register("MMM-Nixie-Clock", {
	defaults: {
		updateInterval: 10000,  // set to one second for testing
		retryDelay: 5000,
		
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
		this.imgSize = "100";
		this.images = ['vfd_35x67_0.png','vfd_35x67_1.png','vfd_35x67_2.png','vfd_35x67_3.png','vfd_35x67_4.png','vfd_35x67_5.png','vfd_35x67_6.png','vfd_35x67_7.png','vfd_35x67_8.png','vfd_35x67_9.png']
		// load images for the display from the img folder
		// to change the images, download image 0 to 9 then rename the below.
		console.log("Started");
		//Flag for check if module is loaded
		

		// Schedule update timer.
		this.count = 0
		var timer = setInterval(()=>{
		this.updateDom()
		this.count++
			}, 1000)
	},

		/* build dom
		 */
	getDom: function() {
		var date = moment();
		
		time = date.format("HHmmss").toString();
		var wrapper = document.createElement("div");
		wrapper.id = "grid-container";
		
		var a = document.createElement("div");
		var imga = document.createElement("img");
		imga.src=this.file(`/img/${this.images[time.charAt(0)]}`);
		imga.height = this.imgSize;
		a.appendChild(imga);
		
		var b = document.createElement("div");
		var imgb = document.createElement("img");
		imgb.src=this.file(`/img/${this.images[time.charAt(1)]}`);
		imgb.height = this.imgSize;
		b.appendChild(imgb);
				
		var c = document.createElement("div");
		var imgc = document.createElement("img");
		imgc.src=this.file(`/img/${this.images[time.charAt(2)]}`);
		imgc.height = this.imgSize;
		c.appendChild(imgc);
		
		var d = document.createElement("div");
		var imgd = document.createElement("img");
		imgd.src=this.file(`/img/${this.images[time.charAt(3)]}`);
		imgd.height = this.imgSize;
		d.appendChild(imgd);	
			
		var e = document.createElement("div");
		var imge = document.createElement("img");
		imge.src=this.file(`/img/${this.images[time.charAt(4)]}`);
		imge.height = this.imgSize;
		e.appendChild(imge);
		
		var f = document.createElement("div");
		var imgf = document.createElement("img");
		imgf.src=this.file(`/img/${this.images[time.charAt(5)]}`);
		imgf.height = this.imgSize;
		f.appendChild(imgf);

		var gap1 =document.createElement("div");
		var gap2 =document.createElement("div");

		wrapper.appendChild(a);
		wrapper.appendChild(b);	
		wrapper.appendChild(gap1);	
		wrapper.appendChild(c);		
		wrapper.appendChild(d);
		wrapper.appendChild(gap2);	
		wrapper.appendChild(e);
		wrapper.appendChild(f);
		//wrapper.appendChild(div);
		return wrapper;
	},

});
