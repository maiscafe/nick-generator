const menuList = document.getElementById("menuUl");

menuList.addEventListener("click", clickMenu);





function clickMenu(event) {
    let click = event.target.textContent;
    console.log(click);
    switch (click) {
        case "MMORPG" : window.location.href = "nickName1.html";
            break;
        case "FREE FIRE" : window.location.href = "nickName2.html";
            break;
        case "FPS" : window.location.href = "nickName3.html";
            break;
        case "ROBLOX" : window.location.href = "nickName4.html";
            break;
        case "APELIDO" : window.location.href = "nickName5.html";
    }    
}