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
}
//   const scrolling = document.querySelector('.films');
//  scrolling.animate([
//     { transform: 'translateX(0)' },
//    { transform: 'translateX(-100vh)'
        

//       }
//  ], {
//     duration: 10000, 
//    iterations: Infinity 
// });
let left = document.querySelector('.prev');
let right = document.querySelector('.nextt');
let cartBox = document.querySelector('.films');
   
    
    left.addEventListener('click', () => {
        cartBox.scrollBy({
            top: 0,
            left: -240,
            behavior: "smooth",
          });
          console.log('hello')
    });



  
    right.addEventListener('click', ()=> {
        cartBox.scrollBy({
            top: 0,
            left: 240,
            behavior: "smooth",
 });
 
    })
    let detail = document.querySelector('.movie h4');
    detail.addEventListener('click', () => {
        detail.style.background color= "red"; // Change le fond de l'élément .movie
    });
    


  
