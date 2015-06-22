var progressBar = new Ractive({
	// Reference of the HTML Element that will contain compiled HTML
	el: 'progressbarapp',
	
	// Reference of the HTML element that contains Ractive Template
	template: '#main',
	
	/**
	* Setting up Initial default values for Progress Bars
	* 3 Progress Bars with default values 
	* 4 Default Buttons with Specified percentage to be added or subtracted
	*/
	data: {
		pBarData: [ 
			 {name: "#progress1", value: 25}, 
			 {name: "#progress2", value: 50},
			 {name: "#progress3", value: 75}
		], 
		pBarOptions: [ '-25', '-10', '+10', '+25']
	},
	
	/**
	 * Fetches the current progress percentage of the selected progress bar.
	 * @param {number} selIndex
	 * @return {number} Progress Percentage
	 */
	getPBarValue: function(selIndex) {
		var barData = progressBar.get('pBarData');
		return barData[selIndex].value;
	},
	
	/**
	 * Adds or Subtracts the progress percentage of the selected progress bar with specified values.
	 * @param {number} selIndex
	 * @param {number} selValue
	 */
	setPBarValue: function(selIndex, selValue) {
		var key = "pBarData["+selIndex+"].value";
		var existingValue = this.getPBarValue(selIndex);		
	
		var finalValue = existingValue + Number(selValue);
		
		// If the computed value is less than 0, set it to 0
		if(finalValue < 0){
			finalValue = 0;
		}
		
		// Sets the progress percentage of respective progress bar
		var barData = progressBar.set(key,finalValue);
	}	
});

/**
 * Event listener function for Tap Event
 * updateProgress
 * @param {object} event
 */
progressBar.on( 'updateProgress', function ( event ) {
	var currentObject = event;
	progressBar.setPBarValue(progressBar.get("selectedIndex"),event.context); 
});
