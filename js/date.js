// let current = new Date();
// let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
// let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
// let dateTime = cDate + ' ' + cTime;
// console.log(dateTime);
// // need to fix this in order to apply it in html

// // another option
// var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// console.log(event.toLocaleDateString('de-DE', options));
// // expected output: Donnerstag, 20. Dezember 2012

// console.log(event.toLocaleDateString('ar-EG', options));
// // expected output: الخميس، ٢٠ ديسمبر، ٢٠١٢

// console.log(event.toLocaleDateString('ko-KR', options));
// // expected output: 2012년 12월 20일 목요일

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;