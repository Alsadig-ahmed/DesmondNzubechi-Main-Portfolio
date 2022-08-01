const close = document.getElementById('close');
const open = document.getElementById('open');
const ul = document.getElementById('ul');
const ope = document.getElementById('ope');


open.onclick=function myWork(argument) {
	// body...
	
		ul.style.right = "0";
		open.style.display = 'none';
};
close.onclick=function MyS(argument) {
	// body...
	ul.style.right = "-500px";
	open.style.display = "block";
};
 
