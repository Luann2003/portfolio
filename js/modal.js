const openModal = (title, info, image, date, linkedinUrl, githubUrl) => {
    document.getElementById('modal').classList.add('active');
    document.getElementById('modal-title').innerText = title;
    document.getElementById("modal-info").innerText = info;
    document.getElementById("modal-image").src = image; 
    document.getElementById("modal-date").innerText = date; 
    
    
    document.getElementById('link-linkedin').href = linkedinUrl;
    document.getElementById('link-github').href = githubUrl;
}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

var cards = document.querySelectorAll('.cards-projetos');
cards.forEach(card => {
    card.onclick = function() {
        const title = this.getAttribute('data-title');
        const info = this.getAttribute('data-info'); 
        const image = this.getAttribute('data-image'); 
        const date = this.getAttribute('data-date');  
        const linkedinUrl = this.getAttribute('data-linkedin'); // Extraindo o link do LinkedIn
        const githubUrl = this.getAttribute('data-github'); // Extraindo o link do GitHub
        
        openModal(title, info, image, date, linkedinUrl, githubUrl); // Passando os links;
    };
});

document.getElementById('modalClose')
    .addEventListener('click', closeModal)