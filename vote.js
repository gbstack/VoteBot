var d = new Date();

if(d.getDay()==6 || (d.getDay()==7 && d.getHour()<=8)){
	setTimeout(function(){
		window.scrollTo(0, 2000);
		document.querySelector('.sr_1 button').click();
	}, 500);
	setTimeout(function(){
		location.href = location.href;
	}, 5000)
}



// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://api.shiyongs.com/auth.php', true);
// xhr.onreadystatechange = function(){
// 	if(xhr.readystate == 4){
// 		alert(xhr.responseText);
// 	}
// };
// xhr.send();