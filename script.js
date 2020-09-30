


let btnContainer = document.querySelectorAll(".about_tab_buttons")[0],
	tabBtns = document.querySelectorAll(".about_tab_btn"),
	tabContent = document.querySelectorAll(".about_tabs");

for(let i = 0; i<tabBtns.length; i++){
	tabBtns[i].onclick = () =>{
				
			clearClasses(tabBtns, "active_tab_btn");
			clearClasses(tabContent, "active_tab");
			tabBtns[i].classList.add("active_tab_btn");
			tabContent[i].classList.add("active_tab");
		
	}
}
	




let prices = document.querySelectorAll(".pricing_content"),
    flags = document.querySelectorAll(".pricing_flag");
    
    	prices = document.querySelectorAll(".pricing_content"),
    	flags = document.querySelectorAll(".pricing_flag");


		for(let i = 0; i<prices.length; i++){
			prices[i].onclick = () =>{
				if(prices[i].classList.contains("left")){
					clearClasses(flags, "active_flag");			
					goNext(prices);						
					flags=document.querySelectorAll(".pricing_flag");
					flags[1].classList.add("active_flag");
				}
				if(prices[i].classList.contains("right")){
					clearClasses(flags, "active_flag");
					goBack(prices);
					flags=document.querySelectorAll(".pricing_flag");
					flags[1].classList.add("active_flag");
				}
			}
		}

	
let next = document.querySelector("#next"),
    back = document.querySelector("#back");
        next.onclick = ()=>{
          clearClasses(flags, "active_flag");
	        goBack(prices);
	        flags=document.querySelectorAll(".pricing_flag");
	        flags[1].classList.add("active_flag");
        }
        back.onclick = () =>{
          clearClasses(flags, "active_flag");      
	        goNext(prices);            
	        flags=document.querySelectorAll(".pricing_flag");
	        flags[1].classList.add("active_flag");
        }

let menuBtn = document.querySelector("#burger"),
	menu = document.querySelector("#menu_popup"),
	closeBtn = document.querySelector("#close");
	menuBtn.onclick = () =>{	
		menu.style.display = "flex";	
			
	};
	closeBtn.onclick = () =>{
		menu.style.display = "";
	};
	menu.onclick = (e) =>{
		if(e.target.classList.contains("menu_link"))
			menu.style.display = "";
	}



function addClass(container, activeClass){
	for(let content of container){
		if(!content.classList.contains(activeClass)){
			content.classList.add(activeClass);
		}
	}
}

function goBack(commentText){

	let tmp = commentText[0].innerHTML;
    for(let i = 1; i<commentText.length; i++){
        commentText[i-1].innerHTML = commentText[i].innerHTML;
    }
    commentText[commentText.length-1].innerHTML = tmp;
}

function goNext(commentText){

 let tmp = commentText[commentText.length-1].innerHTML;
    for(let i = commentText.length-1; i>0; i--){
        commentText[i].innerHTML = commentText[i-1].innerHTML;
    }
    commentText[0].innerHTML = tmp;
}

function clearClasses(services, activeClass){
	for(let service of services){
		if(service.classList.contains(activeClass)){
			service.classList.remove(activeClass);
		}
	}
}