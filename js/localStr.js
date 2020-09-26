/**
 * H5:数据存储方式，可以携带用户信息id
 *  
 * 注意：
 *   此方法存文件为key,value方式
 *   注意key不要重复
 * 
 *本地存储使用方法：
 * storage.setItem("name", "Rick"); //调用setItem方法，存储数据
 * alert(storage.getItem("name")); //调用getItem方法，弹框显示 name 为 Rick
 * storage.removeItem("name"); //调用removeItem方法，移除数据
 * alert(storage.getItem("name")); //调用getItem方法，弹框显示 name 为 null
 * 
 */
var storage = null;
if (window.localStorage) { //判断浏览器是否支持localStorage
	storage = window.localStorage;
}

function StrIsNotEmpt(str) {
	let strflag = true;
	if (str == "" || str == undefined || str == null) {
		strflag = false;
	}
	return strflag;
}
// var sessionStorage = null;
// if(window.sessionStorage) {
//  sessionStorage = window.sessionStorage;
// }


// localStorage.setItem("name", "123");
// var name = localStorage.getItem("name");
// console.log(name);
// localStorage.removeItem("name");
// localStorage.clear(); //清空

// var userData = {
// 	name: "三哥",
// 	age: 18
// }

// localStorage.setItem("userData", JSON.stringify(userData));
// var userData = JSON.parse(localStorage.getItem("userData"));
// userData.name = "123";
// localStorage.setItem("userData", JSON.stringify(userData)); //数据更新
// console.log(userData);
// console.log(localStorage.getItem("userData"));

// var people = new Object();
// people.name = "张三";
// people.age = 10;
// people.saly = 10000;
// console.log("people:" + JSON.stringify(people));
