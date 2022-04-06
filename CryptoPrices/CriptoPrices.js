let formOne = document.getElementById("req")
let list = document.getElementById("list")
let inp = document.getElementById("inp")

formOne.addEventListener("submit", async (event)=>{
event.preventDefault();
await axios.get(`https://api.cryptonator.com/api/ticker/${inp.value}-usd`)
.then(res =>{
    console.log(res)
    let newLi = document.createElement("li");
    let price = res.data.ticker.price
    newLi.append(`Current price of ${inp.value} : ${price} USD`)
    list.append(newLi)
});
inp.value = ""
})
