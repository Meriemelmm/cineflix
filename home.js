function filtercards(){
    const searchInput = document.querySelector("#search");
    const value = searchInput.value.toLowerCase();
    const cards =  document.querySelectorAll(".more") ;
    cards.forEach((card)=>{
        let text = card.textContent.toLowerCase();
        if(text.includes(value)){
            card.style.display = "";
        }else{
            card.style.display = "none";
        }
    })
}
