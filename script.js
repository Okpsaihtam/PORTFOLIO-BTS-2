// ===================================
// Navigation Mobile Toggle
// ===================================
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
const navItems = navLinks.querySelectorAll('a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Back to Top Button
// ===================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Smooth Scroll pour tous les liens d'ancrage
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Animation au scroll (Intersection Observer)
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.skill-card, .project-card-modern, .cert-card-modern, .article-card-modern, .experience-card-modern');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Active Link dans la Navigation
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Gestion des liens externes
// ===================================
const externalLinks = document.querySelectorAll('a[href^="http"]');
externalLinks.forEach(link => {
    if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ===================================
// Message de bienvenue dans la console
// ===================================
console.log('%c👋 Bienvenue sur mon portfolio !', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cVous êtes curieux ? C\'est une qualité de développeur ! 😊', 'font-size: 14px; color: #64748b;');

// ===================================
// Gestion du redimensionnement de la fenêtre
// ===================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }, 250);
});

// ===================================
// Initialisation au chargement de la page
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio chargé avec succès ! 🚀');
    
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    }
    
    highlightNavigation();
});

// ===================================
// SYSTÈME DE MODAL POUR VEILLE TECHNOLOGIQUE
// ===================================
const affichesGoogleDrive = {
    affiche1: {
        title: "📡 Affiche - IA Weekly Septembre 2025",
        driveUrl: "https://drive.google.com/file/d/1KAtZXTlFXIDDbmXQZi59YgSJn1OQy0Rl/preview",
        downloadUrl: "https://drive.google.com/file/d/1KAtZXTlFXIDDbmXQZi59YgSJn1OQy0Rl/view?usp=sharing"
    },
    affiche2: {
        title: "🇫🇷 Affiche - Souveraineté numérique française",
        driveUrl: "https://drive.google.com/file/d/1gSsspDwbKsOdnyUdj81mV9YcYmLZOhiy/preview",
        downloadUrl: "https://drive.google.com/file/d/1gSsspDwbKsOdnyUdj81mV9YcYmLZOhiy/view?usp=sharing"
    },
    affiche3: {
        title: "🤖 Affiche - IA en 2026 Prospective",
        driveUrl: "https://drive.google.com/file/d/1m3fQSF-ge7nOZCqTKh3IlZI0obUpyqHG/preview",
        downloadUrl: "https://drive.google.com/file/d/1m3fQSF-ge7nOZCqTKh3IlZI0obUpyqHG/view?usp=sharing"
    }
};

// Contenu des synthèses de veille
const synthesesContent = {
    synthese1: {
        title: "📡 IA Weekly - Septembre 2025",
        date: "15 septembre 2025",
        theme: "Intelligence Artificielle",
        sources: "NVIDIA, Amazon AWS, OpenAI",
        content: `
            <h3>🎯 Résumé exécutif</h3>
            <p>La semaine du 11 au 15 septembre 2025 a été marquée par trois annonces majeures dans le domaine de l'Intelligence Artificielle, confirmant la tendance d'accélération technologique observée ces derniers mois.</p>

            <h3>📰 NVIDIA : Nouvelle génération de GPU</h3>
            <h4>L'annonce</h4>
            <p>NVIDIA a dévoilé sa nouvelle gamme de GPU spécialisés pour l'entraînement de modèles d'IA, offrant des performances 10x supérieures à la génération précédente.</p>
            
            <h4>Points clés</h4>
            <ul>
                <li><strong>Architecture révolutionnaire :</strong> Nouveau design optimisé pour les calculs matriciels</li>
                <li><strong>Efficacité énergétique :</strong> Réduction de 40% de la consommation électrique</li>
                <li><strong>Prix compétitif :</strong> Plus accessible pour les startups et PME</li>
                <li><strong>Disponibilité :</strong> Q4 2025</li>
            </ul>

            <h4>Impact sur le secteur</h4>
            <p>Cette avancée va démocratiser l'entraînement de modèles IA complexes, permettant à davantage d'entreprises de développer leurs propres solutions d'intelligence artificielle sans dépendre des géants du cloud.</p>

            <h3>☁️ Amazon AWS : AI Copilot</h3>
            <h4>L'annonce</h4>
            <p>Amazon Web Services lance AWS AI Copilot, un assistant IA intégré pour faciliter le développement et le déploiement d'applications cloud.</p>
            
            <h4>Fonctionnalités principales</h4>
            <ul>
                <li><strong>Génération de code :</strong> Création automatique d'infrastructure as code</li>
                <li><strong>Optimisation :</strong> Suggestions pour réduire les coûts AWS</li>
                <li><strong>Sécurité :</strong> Détection proactive des vulnérabilités</li>
                <li><strong>Documentation :</strong> Génération automatique de documentation technique</li>
            </ul>

            <h3>🤖 OpenAI : GPT-5 avec raisonnement avancé</h3>
            <p>OpenAI a présenté GPT-5, marquant un bond en avant dans les capacités de raisonnement logique et de résolution de problèmes complexes.</p>
            
            <h4>Nouveautés majeures</h4>
            <ul>
                <li><strong>Raisonnement multi-étapes :</strong> Capacité à décomposer des problèmes complexes</li>
                <li><strong>Vérification de faits :</strong> Système intégré de fact-checking</li>
                <li><strong>Contexte étendu :</strong> Fenêtre de contexte de 1 million de tokens</li>
                <li><strong>Multimodalité native :</strong> Traitement simultané texte, image, audio, vidéo</li>
            </ul>

            <h3>💼 Impact sur les métiers du développement</h3>
            
            <h4>Évolution des compétences requises</h4>
            <ul>
                <li><strong>Prompt Engineering :</strong> Nouvelle spécialité en forte demande (+250% d'offres d'emploi)</li>
                <li><strong>AI Integration Specialist :</strong> Expertise en intégration de solutions IA</li>
                <li><strong>Ethics AI Officer :</strong> Spécialistes de l'éthique de l'IA</li>
            </ul>

            <h4>Transformation du quotidien du développeur</h4>
            <ul>
                <li>Automatisation du code boilerplate (gain de temps estimé : 30-40%)</li>
                <li>Pair programming avec IA pour la revue de code</li>
                <li>Tests automatisés générés par IA</li>
                <li>Documentation technique créée automatiquement</li>
            </ul>

            <h3>🔮 Perspectives et recommandations</h3>
            
            <h4>Pour les étudiants en développement</h4>
            <ul>
                <li>Se former aux fondamentaux de l'IA et du machine learning</li>
                <li>Apprendre le prompt engineering</li>
                <li>Comprendre les enjeux éthiques de l'IA</li>
                <li>Pratiquer l'intégration d'APIs IA dans ses projets</li>
            </ul>

            <h3>✍️ Conclusion</h3>
            <p>Ces trois annonces confirment que l'IA n'est plus une technologie émergente mais bien une réalité qui transforme profondément le métier de développeur. Le développeur de demain ne sera pas remplacé par l'IA, mais celui qui ne sait pas travailler avec l'IA risque d'être remplacé par un développeur qui sait le faire.</p>
        `
    },
    synthese2: {
        title: "🇫🇷 Souveraineté numérique française",
        date: "20 septembre 2025",
        theme: "Politique Tech",
        sources: "Gouvernement français, ANSSI, French Tech",
        content: `
            <h3>🎯 Contexte et enjeux</h3>
            <p>La souveraineté numérique est devenue un enjeu stratégique majeur pour la France et l'Europe. Cette synthèse analyse les initiatives gouvernementales et leurs implications pour l'écosystème tech français.</p>

            <h3>📊 État des lieux</h3>
            <h4>Dépendance actuelle</h4>
            <ul>
                <li>85% des infrastructures cloud en France dépendent de prestataires américains</li>
                <li>Les GAFAM représentent 70% du marché publicitaire digital</li>
                <li>75% des logiciels utilisés par les administrations sont non-européens</li>
            </ul>

            <h3>🚀 Initiatives gouvernementales</h3>
            
            <h4>1. Cloud souverain français</h4>
            <p>Lancement de "NuméCloud", une initiative publique-privée visant à créer une alternative européenne aux géants américains du cloud.</p>
            <ul>
                <li><strong>Budget :</strong> 1,8 milliard d'euros sur 5 ans</li>
                <li><strong>Partenaires :</strong> OVH, Scaleway, Thales, Atos</li>
                <li><strong>Objectif :</strong> Héberger 50% des données des administrations d'ici 2027</li>
            </ul>

            <h4>2. Formation et compétences</h4>
            <ul>
                <li>Création de 10 000 places supplémentaires en formations cybersécurité</li>
                <li>Programme de reconversion vers les métiers du numérique</li>
                <li>Partenariats renforcés école-entreprise</li>
            </ul>

            <h4>3. Soutien à la French Tech</h4>
            <ul>
                <li>Fonds d'investissement de 5 milliards d'euros pour les startups tech</li>
                <li>Simplification administrative pour les entrepreneurs</li>
                <li>French Tech Visa facilité</li>
            </ul>

            <h3>💡 Opportunités pour les développeurs</h3>
            
            <h4>Secteurs porteurs</h4>
            <ul>
                <li><strong>Cybersécurité :</strong> +15 000 postes à pourvoir d'ici 2026</li>
                <li><strong>IA souveraine :</strong> Développement de modèles français</li>
                <li><strong>Cloud computing :</strong> Infrastructures européennes</li>
                <li><strong>Open source :</strong> Contributions à des projets stratégiques</li>
            </ul>

            <h3>🔐 Cybersécurité : priorité nationale</h3>
            <p>L'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information) renforce ses moyens avec :</p>
            <ul>
                <li>Doublement des effectifs d'ici 2027</li>
                <li>Création d'un campus cyber à Paris-La Défense</li>
                <li>Certification SecNumCloud renforcée</li>
            </ul>

            <h3>🌍 Dimension européenne</h3>
            
            <h4>Initiatives UE</h4>
            <ul>
                <li><strong>GAIA-X :</strong> Projet de cloud fédéré européen</li>
                <li><strong>Digital Services Act :</strong> Régulation des plateformes</li>
                <li><strong>Data Governance Act :</strong> Encadrement du partage de données</li>
            </ul>

            <h3>🎓 Implications pour les étudiants BTS SIO</h3>
            
            <h4>Compétences à développer</h4>
            <ul>
                <li>Maîtrise des standards de sécurité européens</li>
                <li>Connaissance du RGPD et de la réglementation</li>
                <li>Expertise cloud souverain (OVH, Scaleway)</li>
                <li>Open source et logiciels libres</li>
            </ul>

            <h4>Opportunités de carrière</h4>
            <ul>
                <li>Secteur public : modernisation des SI de l'État</li>
                <li>Startups deeptech soutenues par l'État</li>
                <li>ESN spécialisées cloud souverain</li>
                <li>Cabinets de conseil en cybersécurité</li>
            </ul>

            <h3>✍️ Conclusion</h3>
            <p>La souveraineté numérique française n'est pas un repli nationaliste mais une ambition de préserver notre autonomie stratégique tout en restant ouverts à la coopération internationale. Pour les futurs professionnels de l'IT, c'est une opportunité unique de participer à la construction d'un écosystème tech européen fort et indépendant.</p>
        `
    },
    synthese3: {
        title: "🤖 IA en 2026 : Prospective",
        date: "25 septembre 2025",
        theme: "Prospective Technologique",
        sources: "Gartner, McKinsey, MIT Technology Review",
        content: `
            <h3>🔮 Vision d'expert : L'IA en 2026</h3>
            <p>Basée sur les analyses de chercheurs, d'experts du secteur et de cabinets de conseil, cette synthèse propose une vision prospective de l'évolution de l'Intelligence Artificielle en 2026.</p>

            <h3>📊 Tendances majeures prédites</h3>
            
            <h4>1. IA multimodale généralisée</h4>
            <p>En 2026, les modèles d'IA seront nativement multimodaux, traitant simultanément texte, image, audio et vidéo sans conversion préalable.</p>
            <ul>
                <li><strong>Applications :</strong> Assistants virtuels complets, création de contenu cross-média</li>
                <li><strong>Impact :</strong> Transformation des métiers créatifs</li>
                <li><strong>Acteurs :</strong> Google, OpenAI, Anthropic, Meta</li>
            </ul>

            <h4>2. IA embarquée et edge computing</h4>
            <p>Les modèles d'IA fonctionneront directement sur les appareils sans nécessiter de connexion cloud.</p>
            <ul>
                <li>Smartphones avec IA locale puissante</li>
                <li>IoT intelligent et autonome</li>
                <li>Véhicules autonomes de niveau 5</li>
                <li>Wearables avec capacités IA avancées</li>
            </ul>

            <h4>3. IA explicable et éthique</h4>
            <p>La régulation et les attentes sociétales imposeront des IA plus transparentes.</p>
            <ul>
                <li>Traçabilité des décisions algorithmiques</li>
                <li>Biais détectés et corrigés automatiquement</li>
                <li>Certification éthique obligatoire (EU AI Act)</li>
            </ul>

            <h3>💼 Évolution des métiers de l'IT</h3>
            
            <h4>Métiers en forte croissance</h4>
            <ul>
                <li><strong>AI Ethics Officer :</strong> Garant de l'éthique IA (+300% demande)</li>
                <li><strong>Synthetic Data Engineer :</strong> Création de datasets d'entraînement</li>
                <li><strong>AI Ops Engineer :</strong> Fusion DevOps et Intelligence Artificielle</li>
                <li><strong>Prompt Architect :</strong> Conception de prompts complexes</li>
                <li><strong>AI Product Manager :</strong> Gestion de produits IA</li>
            </ul>

            <h4>Compétences clés pour 2026</h4>
            <ul>
                <li>Maîtrise des frameworks IA (TensorFlow, PyTorch, Hugging Face)</li>
                <li>Compréhension des enjeux éthiques</li>
                <li>Architecture de systèmes distribués</li>
                <li>Fine-tuning de modèles pré-entraînés</li>
                <li>Sécurité des systèmes IA (AI red teaming)</li>
            </ul>

            <h3>🏢 Transformation des entreprises</h3>
            
            <h4>Adoption massive de l'IA</h4>
            <ul>
                <li>95% des entreprises du CAC 40 utiliseront l'IA en production</li>
                <li>PME : 60% auront au moins un cas d'usage IA déployé</li>
                <li>Startups : IA native par défaut</li>
            </ul>

            <h3>🌍 Impact sociétal</h3>
            
            <h4>Secteur de la santé</h4>
            <ul>
                <li>Diagnostic assisté par IA généralisé</li>
                <li>Médecine personnalisée basée sur l'IA</li>
                <li>Découverte de médicaments accélérée (50% plus rapide)</li>
            </ul>

            <h4>Éducation</h4>
            <ul>
                <li>Tuteurs IA personnalisés pour chaque élève</li>
                <li>Adaptation du contenu en temps réel</li>
                <li>Détection précoce des difficultés d'apprentissage</li>
            </ul>

            <h3>⚠️ Risques et défis</h3>
            
            <h4>Risques identifiés</h4>
            <ul>
                <li><strong>Deepfakes :</strong> Manipulation d'informations à grande échelle</li>
                <li><strong>Perte d'emplois :</strong> Automatisation de tâches cognitives</li>
                <li><strong>Biais algorithmiques :</strong> Discrimination systémique</li>
                <li><strong>Cybersécurité :</strong> Attaques IA-powered</li>
            </ul>

            <h3>🎓 Recommandations pour étudiants BTS SIO</h3>
            
            <h4>Se préparer dès maintenant</h4>
            <ul>
                <li>Suivre des MOOCs sur l'IA (Coursera, edX)</li>
                <li>Expérimenter avec des APIs IA (OpenAI, Hugging Face)</li>
                <li>Participer à des hackathons IA</li>
                <li>Développer une pensée critique sur l'éthique IA</li>
                <li>Construire un portfolio de projets IA</li>
            </ul>

            <h3>✍️ Conclusion</h3>
            <p>L'année 2026 marquera un tournant dans l'adoption de l'IA. Les professionnels capables de combiner expertise technique, compréhension éthique et créativité seront les plus recherchés. L'IA ne remplacera pas les développeurs, mais les développeurs utilisant l'IA remplaceront ceux qui ne l'utilisent pas.</p>
        `
    }
};

// Fonction pour ouvrir le modal
function openModal(contentId) {
    const modal = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');
    
    // Vérifier si c'est une synthèse ou une affiche
    if (contentId.startsWith('synthese')) {
        const synthese = synthesesContent[contentId];
        modalBody.innerHTML = `
            <div class="modal-body-synthese">
                <h2>${synthese.title}</h2>
                <div class="synthese-meta">
                    <div class="synthese-meta-item">
                        <strong>📅 Date :</strong> <span>${synthese.date}</span>
                    </div>
                    <div class="synthese-meta-item">
                        <strong>🎯 Thème :</strong> <span>${synthese.theme}</span>
                    </div>
                    <div class="synthese-meta-item">
                        <strong>📚 Sources :</strong> <span>${synthese.sources}</span>
                    </div>
                </div>
                ${synthese.content}
            </div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else if (contentId.startsWith('affiche')) {
        const affiche = affichesGoogleDrive[contentId];
        modalBody.innerHTML = `
            <div class="modal-body-affiche">
                <h2>${affiche.title}</h2>
                <iframe src="${affiche.driveUrl}" class="pdf-viewer" allow="autoplay"></iframe>
                <div class="affiche-download">
                    <a href="${affiche.downloadUrl}" target="_blank" class="btn-primary">
                        📥 Ouvrir dans Google Drive
                    </a>
                </div>
            </div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Fonction pour fermer le modal
function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Fermer le modal avec la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Message console pour les modals
console.log('%c📚 Système de modal avec Google Drive chargé !', 'color: #6366f1; font-weight: bold;');

// ===================================
// SYSTÈME DE FORMULAIRE DE CONTACT
// ===================================
const YOUR_EMAIL = "mathias.celle42230@gmail.com";

// Fonction pour ouvrir le modal de contact
function openContactModal() {
    const modal = document.getElementById('contactModalOverlay');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Réinitialiser le formulaire
    document.getElementById('contactForm').reset();
    document.getElementById('formMessage').style.display = 'none';
}

// Fonction pour fermer le modal de contact
function closeContactModal() {
    const modal = document.getElementById('contactModalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Fonction pour envoyer l'email
function sendEmail(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.btn-submit');
    const messageDiv = document.getElementById('formMessage');
    
    // Récupérer les données du formulaire
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value
    };
    
    // Désactiver le bouton pendant l'envoi
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>⏳</span> Envoi en cours...';
    
    // Créer le lien mailto
    const mailtoLink = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nom: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    )}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Afficher un message de succès
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>📤</span> Envoyer le message';
        
        messageDiv.className = 'form-message success';
        messageDiv.innerHTML = '✅ Votre client email va s\'ouvrir. Vous pourrez envoyer le message depuis votre messagerie.';
        messageDiv.style.display = 'block';
        
        // Réinitialiser le formulaire après 3 secondes
        setTimeout(() => {
            form.reset();
            messageDiv.style.display = 'none';
        }, 3000);
    }, 1000);
}

// Fermer le modal de contact avec Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeContactModal();
    }
});

console.log('%c📧 Système de formulaire de contact chargé !', 'color: #10b981; font-weight: bold;');