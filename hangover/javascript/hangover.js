
/*start fixed top headernavbar here*/
let loader = document.getElementById('loader');
let html = document.getElementsByTagName('html')[0];

  function hide(){
	loader.classList.remove('show');
};



document.addEventListener('scroll', function(){
	let top = window.pageYOffset;
	let nav = document.getElementsByClassName('navbar')[0];
	
	if(top > 0){
	 

    nav.classList.add('bg-dark'); 
	}else{
		nav.classList.remove('bg-dark');
	}
});


/*end fixed top headernavbar here*/




let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

  for(let i = 0; i < list.length; i++){
	  list[i].addEventListener('click', function(){
		  for (let j = 0; j<list.length; j++){
			  list[j].classList.remove('activ');
		  }
		  this.classList.add('activ');
		  
		  let dataFilter = this.getAttribute('data-filter');
		  
		  for(let k = 0; k < itemBox.length; k++){
		  itemBox[k].classList.remove('hide');	  
		  itemBox[k].classList.add('hide'); 
		  
		  if(itemBox[k].getAttribute('data-item') == dataFilter ||
		  dataFilter == "ALL"){
			itemBox[k].classList.remove('hide');  
			itemBox[k].classList.add('activ');  
		  }
		  } 
	  })
  }



