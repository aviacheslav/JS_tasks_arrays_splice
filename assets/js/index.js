
//Homework 2023-04-13to17 

'use strict'
//
console.log("Task 1");//---------------------------------------------------------
let arr1=[1, 2, 3];
console.log("Ini array "+arr1);
arr1.push(6, 5, 4);
console.log(" array after add 6, 5, 4: "+arr1);
arr1.unshift(-3, -2, -1);
console.log(" array after add -3, -2, -1 to first pos: "+arr1);
console.log("Task 2");//-----------------------------------------------------------
let arr2=[ 100, -273.15, 0,1, 2, 3, 4, 5, 6, 9, 10 ];//Видалити перші та остані два значення з нього.
console.log("Ini array "+arr2);
arr2.splice(0, 2);
console.log(" del first 2: "+arr2);
for(let i=1; i<=2; i++){
    arr2.pop();
}
console.log("after del last 2: "+arr2);
arr2.splice(arr2.length, 0, 9, 10);
console.log("after returning  last 2 - 9 and 10: "+arr2);
//arr2.splice(arr2.length-1-2, 2);
arr2.splice(arr2.length-1-(2-1), 2);
console.log("after del  last 2 - 9 and 10: "+arr2);
console.log("Task 3");//-----------------------------------------------------------
//Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на [1, 4, 5].
let arr3= [1, 2, 3, 4, 5];
console.log("Ini array "+arr3);
arr3.splice(2-1, 2);
console.log("now arr is: "+arr3);
//Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
console.log("Task 4 - after 6");
console.log("Task 5");//-----------------------------------------------------------
let arr5=[1, 2, 3, 4, 5];
console.log("Ini array "+arr5);
arr5.splice(4-1, 0, 'a', 'b', 'c');
console.log("now arr is: "+arr5);
//Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
console.log("Task 6");//-----------------------------------------------------------
let arr6=[1, 2, 3, 4, 5];
console.log("Ini array "+arr6);
arr6.splice(2-1, 0, 'a', 'b');
arr6.splice(7-1, 0, 'c');
arr6.splice(arr6.length-1+1, 0, 'e');
console.log("now arr is: "+arr6);
//
console.log('2nd version-try without splice');
function procArr1D_swap(data, N1, N2){
	let Q=data.length;
	if(N1>=1 && N1<=Q && N1>=1 && N2<=Q){
		let buf=data[N1-1];
		data[N1-1]=data[N2-1];
		data[N2-1]=buf;
	}
	return data;
}
function procArr1D_ins(where, what, N){//no splice used, changes array-param
	let Q=where.length;
	if(N>=1 && N<=Q){
		where.push(what);
		Q=where.length;
		for(let i=Q-1; i>=N; i--){
			procArr1D_swap(where, i+1, i);
		}
	}
	return where;
}
arr6=[1, 2, 3, 4, 5];
procArr1D_ins(arr6, 'a', 2);
console.log("after ins a arr is: "+arr6);
procArr1D_ins(arr6, 'b', 3);
console.log("after ins b arr is: "+arr6);
procArr1D_ins(arr6, 'c', arr6.length);
arr6.push('e');
console.log("now arr is: "+arr6);
console.log("Task 4");//-----------------------------------------------------------
//Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice записати у новий масив елементи [2, 3, 4].
let arr4= [1, 2, 3, 4, 5];
console.log("Ini array "+arr4);
let arr4_part=arr4.splice(2-1, 3);
console.log("now arr4 is: "+arr4+' and new array is: '+arr4_part);