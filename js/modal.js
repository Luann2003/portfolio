const openModal = (title, info, image, date, linkedinUrl, githubUrl, tags) => {
    document.getElementById('modal').classList.add('active');
    document.getElementById('modal-title').innerText = title;
    document.getElementById("modal-info").innerText = info;
    document.getElementById("modal-image").src = image; 
    document.getElementById("modal-date").innerText = date; 
    document.getElementById('link-linkedin').href = linkedinUrl;
    document.getElementById('link-github').href = githubUrl;

    document.body.style.overflow = 'hidden';

    const ul = document.querySelector('.modal-text ul');
    ul.innerHTML = '';  // Limpa qualquer conteúdo anterior
    tags.forEach(tag => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="tag">${tag}</span>`;
        ul.appendChild(li);
    });

}

var cards = document.querySelectorAll('.cards-projetos');
cards.forEach(card => {
    card.onclick = function() {
        const title = this.getAttribute('data-title');
        const info = this.getAttribute('data-info'); 
        const image = this.getAttribute('data-image'); 
        const date = this.getAttribute('data-date');  
        const linkedinUrl = this.getAttribute('data-linkedin'); 
        const githubUrl = this.getAttribute('data-github'); 
        const tags = this.getAttribute('data-tags').split(',').map(tag => tag.trim()); 
        
        openModal(title, info, image, date, linkedinUrl, githubUrl, tags);
    };
});

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
    document.body.style.overflow = 'auto';

}

document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") { 
        closeModal();
    }
});

document.getElementById('modalClose')
    .addEventListener('click', closeModal)