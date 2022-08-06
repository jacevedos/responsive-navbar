((d)=>{
    const $btnMenu=d.querySelector(".menu-btn"),
    $menu=d.querySelector(".menu-lr");

    $btnMenu.addEventListener("click",e=>{
        $btnMenu.firstElementChild.classList.toggle("none")
        $btnMenu.lastElementChild.classList.toggle("none")
        $menu.classList.toggle("is-active");
    });
    d.addEventListener("click",e=>{
        console.log(e.target)
        if(!e.target.matches(".icon") && !e.target.matches(".menu-lr a")) return false;
        $btnMenu.firstElementChild.classList.remove("none")
        $btnMenu.lastElementChild.classList.add("none")
        $menu.classList.remove("is-active");
    })
})(document);