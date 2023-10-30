// console.log("ello");

// fetch data from html
let typeData = document.querySelector("textarea");
// console.log(typeData);

//todo add event listener
typeData.addEventListener("input",(e)=>{
    let dataWritten = e.target.value;
    localStorage.setItem("svaedText",dataWritten);
})

// todo mode of application
let icon =  document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("darkTheme");
    let iconOfMode = document.querySelector("i");
    console.log(icon);
    if(document.body.classList.contains("darkTheme")){
        iconOfMode.classList.remove("fa-moon");
        iconOfMode.classList.add("fa-sun");
    }else{
        iconOfMode.classList.remove("fa-sun");
        iconOfMode.classList.add("fa-moon");
    }
} 