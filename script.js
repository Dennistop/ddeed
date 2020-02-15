//Lesson 20
$(function() {
	$("#str").html("Hello JQuery");
	$("#hero").prop("src","https://gamepedia.cursecdn.com/minecraft_ru_gamepedia/5/50/%D0%A1%D0%B2%D0%B8%D0%BD%D1%8C%D1%8F.png");
	
	$("#str").click(function(){
		$("#hero").toggle(2000);
	});
});













