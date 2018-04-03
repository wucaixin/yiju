// {
// 	function content(parent){
// 		const types=parent.querySelectorAll(".xulie_yuan");
// 		const goods=parent.querySelectorAll(".rw_xiang ul");
// 		types.forEach(function(ele,index){
// 			ele.onclick=function(){
// 				for(let i=0;i<types.length;i++){
// 					types[i].classList.remove("active");
// 					goods[i].classList.remove("active");
// 				}
// 				this.classList.add("active");
// 				goods[index].classList.add("active");
// 			}
// 		})
// 	}
// 	const contentlist=document.querySelectorAll(".zong");
// 	// content(contentlist[0]);
// 	// content(contentlist[1]);
// 	// content(contentlist[2]);
// 	// content(contentlist[3]);
// 	contentlist.forEach(function(ele){
// 		content(ele);
// 	})
// }
// 
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	const l=imgs.length;
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<l;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			//this ele pagers[index]
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});
	let n=0;
	// let t=setInterval(move,3000);
	function move(){
		n++;
		// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<l;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	};
	// banner.onmouseenter=function(){
	// 	clearInterval(t);
	// };
	// banner.onmouseleave=function(){
	// 	t=setInterval(move,3000);	
	// };
	let flag=true;
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend", function(){
			flag=true;
		})
	})
}