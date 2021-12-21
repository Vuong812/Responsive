const hbg = document.querySelector(".header .nav-bar .nav-list .hbg");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");

hbg.addEventListener("click", ()=>{
	hbg.classList.toggle("active");
	mobile_menu.classList.toggle("active");
})
menu_item.forEach(item=>{
	item.addEventListener("click",()=>{
		hbg.classList.toggle("active");
		mobile_menu.classList.toggle("active");
	})
})
		var fullbox = document.getElementById("full-img");
		var fullimg = document.getElementById("chose");
		function closeimg()
		{
			fullbox.style.display = "none";
		}
		function openimg(pic)
		{
			fullbox.style.display = "flex";
			fullimg.src = pic;
		}