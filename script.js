const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createNotificotion();
})

function createNotificotion() {
    const notif = document.createElement('div');

    notif.classList.add('toast');
    notif.innerText = "this challenge is ctazy!"

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000)
}

