/** 
	LMSOFT .Inc 
*/
(function() {
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"><' + '/script>');
  }
  getScript("http://maps.google.com/maps/api/js?sensor=false&libraries=geometry&v=3.13")
})();