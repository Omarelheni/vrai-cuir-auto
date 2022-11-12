/*function Getcolors(){

$.get( "http://127.0.0.1:8000/colors/", function( data ) {
data .splice('',1);
$('.color-picker').each(function(event){
		for (var i = 0; i < data .length; i++ ) {
			$(this).append('<li class="color-item" data-hex="'  + data [i] + '" style="background-color:' + data [i] + ';"></li>');
}
})
});*/

function Getcolors(element){
$.get( "http://127.0.0.1:8000/colors/", function( data ) {
data .splice('',1);
if (element.has("li").length===0){
		for (var i = 0; i < data .length; i++ ) {
			element.append('<li class="color-item" data-hex="'  + data [i] + '" style="background-color:' + data [i] + ';"></li>');
}
}
});

}
$(document).ready(function(){
});



		$('.product__sidebar__categories').on('click','.call-picker',function(event) {

			event.stopPropagation();
			var callpicker = $(this)
			var picker = $(this).next()
					Getcolors(picker)

			picker.fadeIn();

					picker.on('click','li',function() {
		var codeHex = $(this).data('hex');

				callpicker.css('background-color', codeHex);
				picker.fadeOut();
				});
		});