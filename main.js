const samsungTv = {
    number:"1",
    imgUrl:"",
    storeName:"Samsung",
    address:"XXXXX",
    city:"Tel-Aviv",
    price:2499,
    storeUrl:"",
    rating:"3/5"
}

const lgTv = {
    number:"2",
    imgUrl:"",
    storeName:"LG",
    address:"XXXXX",
    city:"Jerusalem",
    price:6798,
    storeUrl:"",
    rating:"5/5"
}

const haierTv = {
    number:"3",
    imgUrl:"",
    storeName:"Haier",
    address:"XXXXX",
    city:"Haifa",
    price:1699,
    storeUrl:"",
    rating:"4/5"
}

const toshibaTv = {
    number:"4",
    imgUrl:"",
    storeName:"Toshiba",
    address:"XXXXX",
    city:"Natanya",
    price:2222,
    storeUrl:"",
    rating:"1/5"
}

let tableArray = [samsungTv,lgTv,haierTv,toshibaTv]

//2- coloring the ratings red or green 

const rate = document.querySelectorAll(".rating")

rate.forEach(row => {
    const rating = row.textContent
    const fullRow = row.closest('tr')
    console.log(fullRow)
    if (rating >= 4) {
        row.classList = "greenBackground"
    }else if (rating < 2) {
        row.classList = "redBackground"
    }
})


// 3-  function that receives an array of objects and
// return the average price of all the rows.

function createSumArray(array) {
    let pricesArray = []
    let tvPrice ;
        for (let i = 0; i < array.length; i++) {
            if (array[i].price > 0) {
                tvPrice = array[i].price
                pricesArray.push(tvPrice)
            }
            
        }

        let sum = 0 ;
        pricesArray.forEach(itemPrice => {
            sum += itemPrice / pricesArray.length
           
        })
        console.log(sum)
        return sum,pricesArray
}

console.log(createSumArray(tableArray))

// 4-function that receives an array of objects
// return the id of the row, only if the price is
// the lowest and the rating is 4/5 or 5/5.

function bestOption(array) {
    let result 

    let pricesArray = []
    let tvPrice ;
        for (let i = 0; i < array.length; i++) {
            if (array[i].price > 0) {
                tvPrice = array[i].price
                pricesArray.push(tvPrice)
            }
            
        }

    let minPrice = Math.min(...pricesArray)

    for (let i = 0; i < array.length; i++) {
        if (array[i].price === minPrice) {
            if(array[i].rating === "4/5" || array[i].rating === "5/5" ){
                result = array[i]
            }
            
        }
        
    }
    return result
}

console.log(bestOption(tableArray))

//5- remove row when clicked on delete btn 

const deleteButtons = document.querySelectorAll(".deleteBtn");

deleteButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.closest('tr').remove();
    });
});

const buyButtons = document.querySelectorAll(".buyBtn");
const selectedStoreName = document.getElementById('storeName')

buyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const row = button.closest('.tabelRow')
        const storeName = row.querySelector('td:nth-child(3)').textContent
        const price = row.querySelector('th:nth-child(6)').innerText; 

        console.log(storeName);
        console.log(price);
        // localStorage.setItem("storeName", storeName)
        // localStorage.setItem("price", price) 
        selectedStoreName.textContent = storeName
     
        window.open("buy.html","_blank")
    });
});