const divBar = document.querySelector('#cocktail-menu')



fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then(res => res.json())
.then(data => {
    data.drinks.forEach(drink => {
        const image = document.createElement('img');
        image.src = drink.strDrinkThumb;
        divBar.append(image);
        
    });
})

//index.js:11 Uncaught (in promise) TypeError: Cannot read properties of null (reading 'append')
// at index.js:11:16
// at Array.forEach (<anonymous>)
// at index.js:8:17
// (anonymous) @ index.js:11
// (anonymous) @ index.js:8
// Promise.then (async)
// (anonymous) @ index.js:7
   