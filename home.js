const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", filterCards);

function filterCards() {
    const value = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".more");
    cards.forEach((card) => {
        let text = card.textContent.toLowerCase();
        if(text.includes(value)){
            card.style.display = "";
        }else{
            card.style.display = "none";
        }
       
    });
}//
//const scrolling = document.querySelector('.films');
//scrolling.animate([
    //{ transform: 'translateX(0)' },
    //{ transform: 'translateX(-100vh)'
        

    // }//
//], {
   // duration: 10000, // Durée de l'animation en millisecondes
   // iterations: Infinity // Répète l'animation indéfiniment
//});//
//scrolling.scrollBy({
    //Top: 0,
    //Left: 100,
   // Behaviour: smooth});//


  
