
const basket = document.querySelector("#basket");
const chart = document.querySelector("#chart");

function addToBasket(evt) {
    const vare = evt.target;
    if(vare.id === "chart") {
        return;
    }

    // Hvor er varen - og hvor bred og høy er den?
    const vInfo = vare.getBoundingClientRect();

    // Hvor er handlekurven - og hvor bred og høy er den?
    const hInfo = basket.getBoundingClientRect();
    
    const klone = vare.cloneNode();
    klone.classList.add("klone");
    
    document.body.appendChild(klone);

    klone.style.left = vInfo.x + "px";
    klone.style.top = vInfo.y + "px";
    klone.style.width = vInfo.width + "px";
    klone.style.height = vInfo.height + "px";   

    const keyframes = [
        { left: vInfo.x + "px", top: vInfo.y + "px", width: vInfo.width + "px", height: vInfo.height + "px", opacity: 1 },
        { left: hInfo.x + "px", top: hInfo.y + "px", width: hInfo.width + "px", height: hInfo.height + "px", opacity: 1 },
        { left: hInfo.x + "px", top: hInfo.y + "px", width: hInfo.width + "px", height: hInfo.height + "px", opacity: 0 }
    ];

    const settings = {
        duration: 1000,
        fill: "forwards"
    };

    const animasjon = klone.animate(keyframes, settings);

    animasjon.onfinish = () => {
        document.body.removeChild(klone);
    }

}

chart.addEventListener("click", addToBasket);