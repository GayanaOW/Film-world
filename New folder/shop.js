let product = [
    //https://forum.freecodecamp.org/t/javascript-vanilla-shopping-cart-please-help/501365
{
    id: 0,
    image: 'imagess/MV5BODkyYTRl.jpg',
    title: 'Sea Beast',
    price: 2,
},
{
    id: 1,
    image: 'imagess/71Zr.jpg',
    title: 'Enola Holmes 2',
    price: 3,
    
},
{
    id: 2,
    image: 'imagess/onesheet.jpg',
    title: 'Minions',
    price: 2,
},
{
    id: 3,
    image: 'imagess/795b8a7.jpg',
    title: 'Boss Baby',
    price: 4,
},
{
    id: 4,
    image: 'imagess/MV5BNGU1NGNi.jpg',
    title: 'Croods',
    price: 1,
},
{
    id: 5,
    image: 'imagess/MV5BZWYzOGEwNTg.jpg',
    title: 'Top Gun',
    price: 5,
},
{
    id: 6,
    image: 'imagess/MV5BOTBjMjA4Nm.jpg',
    title: 'Jurassic World',
    price: 2,
},
{
    id: 7,
    image: 'imagess/MV5BYjlhNTA3Y2.jpg',
    title: 'Morbius',
    price: 3,
},
{
    id: 8,
    image: 'imagess/MV5BNDE2ODVmN.jpg',
    title: 'The Man From Toronto',
    price: 4,
},
{
    id: 9,
    image: 'imagess/MV5BYmRhNzZlOT.jpg',
    title: 'Hotel Transylvania 4',
    price: 1,
    
},
{
    id: 10,
    image: 'imagess/snh_online_6072x9000_posed_01.jpg',
    title: 'spider man no way home',
    price: 2,
    
},
{
    id: 11,
    image: 'imagess/51vtp.jpg',
    title: 'The Last Airbender',
    price: 3,
},
{
    id: 12,
    image: 'imagess/13_Hours.jpg',
    title: '13 Hours',
    price: 4,
},
{
    id: 13,
    image: 'imagess/movieposter_en.jpg',
    title: 'Ready Play One',
    price: 1,
    
},
{
    id: 14,
    image: 'imagess/MV5BMWEwNjhkY.jpg',
    title: 'Uncharted',
    price: 4,
},
{
    id: 15,
    image: 'imagess/MV5BOTMyOTAyY2.jpg',
    title: 'The Spongebob',
    price: 2,
},
{
    id: 16,
    image: 'imagess/the-karate-kid-classic-i108310.jpg',
    title: 'The Karate Kid',
    price: 3,
},
{
    id: 17,
    image: 'imagess/MV5BNzE2ZjQxNj.jpg',
    title: '6 Underground',
    price: 1,
},
{
    id: 18,
    image: 'imagess/MV5BMzU3YTc1Z.jpg',
    title: 'Venom',
    price: 2,
},
{
    id: 19,
    image: 'imagess/MV5BMTU0MjAw.jpg',
    title: 'Next Gen',
    price: 4,
},
{
    id: 20,
    image: 'imagess/MV5BMGY2NjUwO.jpg',
    title: 'Ghostbusters',
    price: 2,
},
{
    id: 21,
    image: 'imagess/81L4HT0pS5L.jpg',
    title: 'Jumanji',
    price: 3,
},
{
    id: 22,
    image: 'imagess/MV5BMjI3Nzg0MT.jpg',
    title: 'Pacific Rim 2',
    price: 1,
},
{
    id: 23,
    image: 'imagess/71Hg5.jpg',
    title: 'Gi Joe 2',
    price: 2,
},
{
    id: 24,
    image: 'imagess/gbtwoY.jpg',
    title: 'Penguins Of Madagascar',
    price: 3,
}   
];
const categories = [...new Set(product.map(function(item)
    {return item}))]
//contains a list of unique categories include in the product array.
let i=0;
function cardBody(item){
    var {image, title, price} = item;
    let content =  "<div class='filmBox'><div class='imgageBox'><img class='images' src="+image+"></img></div><div class='bottom'><p>"+title+"</p><h2>"+price+".00</h2>"+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        "</div></div>"
    return content   
}
document.getElementById('filmRow').innerHTML = categories.map(cardBody).join('')
var cart =[];
function addtocart(a){//https://phppot.com/javascript/javascript-shopping-cart/#:~:text=This%20%E2%80%9Cadd%20to%20cart%E2%80%9D%20JavaScript,Add%20to%20cart%E2%80%9D%20is%20placed.
    cart.push({...categories[a]});//https://stackoverflow.com/questions/39932454/basic-shopping-cart-using-array-push
    displaycart();//add item to cart
}
function delElement(a){//delete cart item
    cart.splice(a, 1);//https://www.w3schools.com/jsref/jsref_splice.asp
    displaycart();
}
function cartItems(items){ 
       //initialize two variable
    var {image, title, price} = items;
    total+=price;
    document.getElementById("total").innerHTML = "$ "+total+".00";
    let content="<div class='cartItemBox'><div class='rowImage'><img class='rowImage2' src="+image+"></div><p style='font-size:12px;'>"+title+"</p><h2 style='font-size: 15px;'>"+price+".00</h2>"+
        "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>";
    return content;   
}
function displaycart(){
    j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;//get the cart length(add to cart items)
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map(cartItems).join('');
        // the map method to create a new array of HTML strings for each item in cart.      
    }
}
//https://www.aspsnippets.com/Articles/Validate-TextBox-on-Button-Click-using-JavaScript.aspx#:~:text=Click%20using%20JavaScript.-,When%20the%20Validate%20Button%20is%20clicked%2C%20a%20JavaScript%20function%20is,the%20TextBox%20is%20considered%20Empty.&text=The%20following%20HTML%20Markup%20consists%20of%20an%20HTML%20TextBox%20and%20a%20Button.
function ValidateButton() {
    if (cart.length == 0) {
        alert("Please buy a film!");
        return false;
    }
};









