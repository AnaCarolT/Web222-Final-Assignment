document.addEventListener("DOMContentLoaded", function(){
    //beginning message
    const newsletter = document.querySelector('div');
    const h2 = document.createElement("h2");
    h2.textContent = "Newsletter";
    newsletter.append(h2);
    const desc = document.createElement("p");
    desc.textContent = "Sign up if you're interested in more adventures!";
    newsletter.appendChild(desc);
    
    //now to check the email
    const input = document.getElementById('email');
    const button = document.getElementById('button');
    const form = document.querySelector('form');
    input.addEventListener('input', () => {
        button.disabled = !input.validity.valid;
    });
});