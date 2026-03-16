// ===================================
// NAVIGATION
// ===================================
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const mobileMenu = document.getElementById('mobileMenu');
const backToTop = document.getElementById('backToTop');

// Scroll navbar effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Mobile menu toggle
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===================================
// MODAL DE CONTACT
// ===================================
function openContactModal() {
    document.getElementById('contactModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    document.getElementById('contactModalOverlay').classList.remove('active');
    document.body.style.overflow = '';
    // Reset form
    document.getElementById('contactForm').reset();
    document.getElementById('formMessage').style.display = 'none';
}

// ===================================
// GESTION DU FORMULAIRE WEB3FORMS
// ===================================
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = form.querySelector('.btn-submit');
    const originalText = submitButton.innerHTML;
    
    // Désactiver le bouton et montrer un état de chargement
    submitButton.disabled = true;
    submitButton.innerHTML = '<span>⏳</span> Envoi en cours...';
    
    // Récupérer les données du formulaire
    const formData = new FormData(form);
    
    try {
        // Envoyer à Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Succès !
            formMessage.textContent = '✅ Message envoyé avec succès ! Je vous répondrai rapidement.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            
            // Réinitialiser le formulaire
            form.reset();
            
            // Fermer le modal après 2 secondes
            setTimeout(() => {
                closeContactModal();
            }, 2000);
        } else {
            // Erreur
            formMessage.textContent = '❌ Une erreur est survenue. Veuillez réessayer.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        }
    } catch (error) {
        // Erreur de connexion
        formMessage.textContent = '❌ Erreur de connexion. Vérifiez votre connexion internet.';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
    } finally {
        // Réactiver le bouton
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
    }
});

// ===================================
// MODALS POUR VEILLE TECHNOLOGIQUE
// ===================================
function openModal(contentId) {
    const modal = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');
    
    // Contenu des modals
    const contents = {
        synthese1: `
            <div class="modal-body-synthese">
                <h2>📡 IA Weekly - Septembre 2025</h2>
                <div class="synthese-meta">
                    <div class="synthese-meta-item">
                        <strong>Date</strong>
                        <span>Septembre 2025</span>
                    </div>
                    <div class="synthese-meta-item">
                        <strong>Sources</strong>
                        <span>NVIDIA, Amazon, OpenAI</span>
                    </div>
                </div>
                <h3>Annonces majeures</h3>
                <p>Analyse des dernières innovations en IA et leur impact sur le développement...</p>
            </div>
        `,
        synthese2: `
            <div class="modal-body-synthese">
                <h2>🇫🇷 Souveraineté numérique française</h2>
                <div class="synthese-meta">
                    <div class="synthese-meta-item">
                        <strong>Date</strong>
                        <span>Octobre 2025</span>
                    </div>
                </div>
                <h3>Enjeux stratégiques</h3>
                <p>Exploration des défis du secteur numérique en France...</p>
            </div>
        `,
        synthese3: `
            <div class="modal-body-synthese">
                <h2>🤖 IA en 2026 : Prospective</h2>
                <div class="synthese-meta">
                    <div class="synthese-meta-item">
                        <strong>Date</strong>
                        <span>Novembre 2025</span>
                    </div>
                </div>
                <h3>Vision prospective</h3>
                <p>Analyse des tendances futures de l'intelligence artificielle...</p>
            </div>
        `,
        affiche1: `
            <div class="modal-body-affiche">
                <h2>📊 Affiche - IA Weekly</h2>
                <p>Contenu de l'affiche pour IA Weekly</p>
            </div>
        `,
        affiche2: `
            <div class="modal-body-affiche">
                <h2>📊 Affiche - Souveraineté numérique</h2>
                <p>Contenu de l'affiche pour Souveraineté numérique</p>
            </div>
        `,
        affiche3: `
            <div class="modal-body-affiche">
                <h2>📊 Affiche - IA 2026</h2>
                <p>Contenu de l'affiche pour IA 2026</p>
            </div>
        `
    };
    
    modalBody.innerHTML = contents[contentId] || '<p>Contenu non trouvé</p>';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Fermer le modal en cliquant sur Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeContactModal();
    }
});

// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// ANIMATIONS AU SCROLL
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

console.log('Portfolio chargé avec succès ! 🚀');