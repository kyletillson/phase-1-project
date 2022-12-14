const divBar = document.querySelector('#cocktail-menu')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const p4 = document.querySelector('#p4')
const p5 = document.querySelector('#p5')
const p6 = document.querySelector('#p6')
const p7 = document.querySelector('#p7')
const drinkName = document.querySelector('#name')
const drinkImage = document.querySelector('#image')
const instructions = document.querySelector('#instructions')
const likes = document.querySelector('#likes')
const likeBtn = document.querySelector('#button');




fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then(res => res.json())
.then(data => {
    data.drinks.forEach(drink => {
        const image = document.createElement('img');
        image.src = drink.strDrinkThumb;
        divBar.append(image);
        
        
        
        image.addEventListener('click', () => {
            drinkName.innerText = drink.strDrink
            drinkImage.src = drink.strDrinkThumb
            instructions.innerText = drink.strInstructions
        Object.keys(drink).forEach(key => {
            if (drink[key] === null) {
                return drink[key] = ''
            }
        })
        
            p1.innerText = drink.strMeasure1 + ' ' + drink.strIngredient1;
            p2.innerText = drink.strMeasure2 + ' ' + drink.strIngredient2;
            p3.innerText = drink.strMeasure3 + ' ' + drink.strIngredient3;
            p4.innerText = drink.strMeasure4 + ' ' + drink.strIngredient4;
            p5.innerText = drink.strMeasure5 + ' ' + drink.strIngredient5;
            p6.innerText = drink.strMeasure6 + ' ' + drink.strIngredient6;
            p7.innerText = drink.strMeasure7 + ' ' + drink.strIngredient7;

            
            
          
           
        })
    });
    
})
let likesCounter = 0;
likeBtn.addEventListener('click', (e) => {
    e.preventDefault

   likesCounter++;
   likes.innerText = likesCounter;
   
   
   
})






const drinkCardTemplate = document.querySelector("[data-user-template]")
const drinkCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []


searchInput.addEventListener("input", e => {
    e.target.value = e.target.value[0] || ""
  const input = e.target.value;
  drinkCardContainer.innerHTML = ""
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`)
.then(res => res.json())
.then(data => {
  drinks = data.drinks.map(drink => {
    const card = drinkCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")

        
    card.addEventListener('click', () => {
        drinkName.innerText = drink.strDrink
        drinkImage.src = drink.strDrinkThumb
        instructions.innerText = drink.strInstructions
    Object.keys(drink).forEach(key => {
        if (drink[key] === null) {
            return drink[key] = ''
        }
    })
    
        p1.innerText = drink.strMeasure1 + ' ' + drink.strIngredient1;
        p2.innerText = drink.strMeasure2 + ' ' + drink.strIngredient2;
        p3.innerText = drink.strMeasure3 + ' ' + drink.strIngredient3;
        p4.innerText = drink.strMeasure4 + ' ' + drink.strIngredient4;
        p5.innerText = drink.strMeasure5 + ' ' + drink.strIngredient5;
        p6.innerText = drink.strMeasure6 + ' ' + drink.strIngredient6;
        p7.innerText = drink.strMeasure7 + ' ' + drink.strIngredient7;

        
        
      
       
    })

    header.textContent = drink.strDrink
    body.textContent = drink.strAlcoholic
    drinkCardContainer.append(card)
    return { name: drink.strDrink, ingredient: drink.strAlcoholic, element: card }

});


})

    
    
  
   
})
  
  
