const joke = document.querySelector(".joke");
const test = new XMLHttpRequest();
test.open("GET"," https://official-joke-api.appspot.com/random_joke");
test.send();

test.addEventListener("load",function(){
    const data = JSON.parse(test.responseText);
    console.log(data)

    let html = `<h1> Setup: ${data.setup}</h1>
    <h2> Punchline: ${data.punchline} </h2>`

    joke.insertAdjacentHTML("beforeend",html);
})