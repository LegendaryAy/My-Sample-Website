var subscribe = document.getElementById("Subscribe-form");

subscribe.addEventListener("submit", subscription);

function subscription(e){
    e.preventDefault();
    subscribe.innerHTML= <h1>You have sucessfully subscribed</h1>;
}