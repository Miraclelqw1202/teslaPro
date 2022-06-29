$(function () {
	$("#topTitle .menu li").on("mouseenter", function () {
		$(this).addClass("newHide").siblings().removeClass("newHide");
	});
	$("#topTitle .menu li").on("mouseout", function () {
		$(this).removeClass("newHide");
	});
    $("#topTitle .login li").on("mouseenter", function () {
			$(this).addClass("newHide").siblings().removeClass("newHide");
		});
		$("#topTitle .login li").on("mouseout", function () {
			$(this).removeClass("newHide");
		});
});
