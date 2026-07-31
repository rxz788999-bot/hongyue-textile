document.addEventListener("DOMContentLoaded", function () {
    console.log("Hongyue Textile Website Loaded");

    const btn = document.querySelector(".btn");

    if(btn){
        btn.addEventListener("click",function(){
            alert("欢迎来到宏跃纺织产品中心（页面开发中）");
        });
    }
});
