const product_container = [...document.querySelectorAll('.product-container')]
const nextbtn = [...document.querySelectorAll('.next-btn')]
const prebtn = [...document.querySelectorAll('.pre-btn')]
const plusbtn = document.querySelector('.plus-btn')
const showpage = document.querySelector('.show-page')
const menu = document.querySelector('.menu')
const menu_items = document.querySelector('.menu_items')


product_container.forEach((item,i)=>{
    let containerb = item.getBoundingClientRect();
    let containerwidth = containerb.width;

    nextbtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerwidth;
    })

     prebtn[i].addEventListener('click', () => {
         item.scrollLeft -= containerwidth;
     })
})

menu.addEventListener('click',function(){
    // menu.classList.toggle('active')
    menu_items.classList.toggle('hidden') 
    // console.log(menu.classList.toggle('hidden'));
})


plusbtn.addEventListener('click',function(){
    showpage.classList.toggle('hidden')
})
