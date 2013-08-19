/**
 * @author dang quang vinh
 */

$(document).ready(function(){
	$('nav > ul > li').addClass('highlight');
	$('nav li:not(.highlight)').addClass('background');
	$('a[href^=mailto:]').addClass('email');
	$('a[href$=.pdf]').addClass('ebook');
	$('a[href^=http][href*=jquery]').addClass('hyperlink');
	$("tr:even").css("background-color", "#bbbbff");
	//$("tr:odd").css("background-color", "#bbbbff");
	$("td:contains('Die Hard')").addClass('red');
	$('a').filter(function() {
		return this.hostname && this.hostname != location.hostname
	}).addClass('external');
	$("td:contains('Bruce Willis');").next().addClass('red');
	$("td:contains('Terminator');").nextAll().addClass('red');
	//Bên cạnh phương pháp .next() và .nextAll() chúng ta còn có .prev() và prevAll(). Thêm nữa,
	//.siblings() chọn tất cả các phần tử có cùng chung một cấp bậc trên DOM, mà không cần quan
	//tâm đến nó xuất hiện trước hoặc sau phần từ được chọn.
	$("td:contains('Movies');").next().andSelf().addClass('red');
	//$("td:contains('Avatar');").parent().children().addClass('red');
	$("td:contains('Avatar');").parent().find('td:eq(1)').addClass('red').end().find('td:eq(2)').addClass('red');
});

