const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});	


let carright=document.getElementById("carright");
let carleft=document.getElementById("carleft");
window.onscroll=function(){
     
	let value=scrollY;
	if(scrollY>=10){
		carleft.style.left=value+'px'

	}
	
}