const greeting = document.getElementById('greeting');
const text = document.getElementById('text');
const submit = document.getElementById('submit');


const fonts = ["'Sansita Swashed', system-ui", 
                "MuseoModerno, sans-serif", 
                "'Grenze Gotisch', serif", 
                "Antonio, sans-serif", 
                "'Pixelify Sans', sans-serif", 
                "'Tilt Neon', sans-serif", 
                "Arima, system-ui"
];

let randomFont = () => {
    let i = Math.floor(Math.random() * fonts.length);
    return fonts[i];
}

let randomColor = () => {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let color = `rgb(${a}, ${b}, ${c})`;
    return color;
}

let handler = (event) => {
    event.preventDefault();
    if (text.value !== "") {
        let input = text.value;
        greeting.innerHTML = input;
    }
    greeting.style.fontFamily = randomFont();
    greeting.style.color = randomColor();
    document.body.style.backgroundColor = randomColor();
}

submit.onclick = handler;
text.onkeydown = (event) => {
    if (event.key === 'Enter') {
        handler(event);
    }
};
