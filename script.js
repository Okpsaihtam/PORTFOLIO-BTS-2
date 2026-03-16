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
            <div style="padding: 2rem; color: var(--text);">
                <h2 style="font-size: 2rem; margin-bottom: 1rem; color: var(--secondary);">📡 IA Weekly - Septembre 2025</h2>
                <div style="display: flex; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;">
                    <div style="background: rgba(100, 255, 218, 0.1); padding: 1rem; border-radius: 8px;">
                        <strong style="color: var(--secondary);">Date</strong>
                        <p style="color: var(--text-light); margin: 0.3rem 0 0 0;">Septembre 2025</p>
                    </div>
                    <div style="background: rgba(100, 255, 218, 0.1); padding: 1rem; border-radius: 8px;">
                        <strong style="color: var(--secondary);">Sources</strong>
                        <p style="color: var(--text-light); margin: 0.3rem 0 0 0;">NVIDIA, Amazon, OpenAI</p>
                    </div>
                </div>
                
                <h3 style="color: var(--text); margin: 2rem 0 1rem 0;">Annonces majeures</h3>
                <p style="color: var(--text-light); line-height: 1.7; margin-bottom: 1.5rem;">
                    Cette semaine a été marquée par trois annonces majeures qui vont redéfinir le paysage de l'IA :
                </p>
                
                <div style="background: rgba(100, 255, 218, 0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 3px solid var(--secondary);">
                    <h4 style="color: var(--secondary); margin-bottom: 0.8rem;">NVIDIA H200 : La puissance multipliée par 2</h4>
                    <p style="color: var(--text-light); line-height: 1.7;">
                        NVIDIA dévoile le GPU H200, spécialement conçu pour l'entraînement de modèles IA. 
                        Performances doublées par rapport au H100, avec une consommation énergétique réduite de 30%.
                        Impact direct sur les coûts d'infrastructure IA.
                    </p>
                </div>

                <div style="background: rgba(249, 115, 22, 0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 3px solid var(--accent);">
                    <h4 style="color: var(--accent); margin-bottom: 0.8rem;">Amazon Bedrock Studio : Démocratisation de l'IA</h4>
                    <p style="color: var(--text-light); line-height: 1.7;">
                        Amazon lance Bedrock Studio, une plateforme no-code permettant aux non-développeurs de créer 
                        des applications IA. Interface intuitive avec drag & drop, modèles pré-entraînés accessibles.
                    </p>
                </div>

                <div style="background: rgba(100, 255, 218, 0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 3px solid var(--secondary);">
                    <h4 style="color: var(--secondary); margin-bottom: 0.8rem;">OpenAI GPT-5 : Annonce pour Q1 2026</h4>
                    <p style="color: var(--text-light); line-height: 1.7;">
                        OpenAI confirme l'arrivée de GPT-5 au premier trimestre 2026. Capacités de raisonnement 
                        améliorées, meilleure compréhension contextuelle et support multimodal natif (texte, image, audio).
                    </p>
                </div>

                <h3 style="color: var(--text); margin: 2rem 0 1rem 0;">Mon analyse</h3>
                <p style="color: var(--text-light); line-height: 1.7;">
                    Ces évolutions confirment que l'IA devient un outil incontournable pour les développeurs. 
                    Il est crucial de se former dès maintenant aux APIs d'IA et aux bonnes pratiques d'intégration 
                    pour rester compétitif sur le marché du travail.
                </p>
            </div>
        `,
        synthese2: `
            <div style="padding: 2rem; color: var(--text);">
                <h2 style="font-size: 2rem; margin-bottom: 1rem; color: var(--secondary);">🇫🇷 Souveraineté Numérique Française</h2>
                <div style="background: rgba(100, 255, 218, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem; display: inline-block;">
                    <strong style="color: var(--secondary);">Date</strong>
                    <p style="color: var(--text-light); margin: 0.3rem 0 0 0;">Octobre 2025</p>
                </div>
                
                <h3 style="color: var(--text); margin: 2rem 0 1rem 0;">Enjeux stratégiques</h3>
                <p style="color: var(--text-light); line-height: 1.7; margin-bottom: 1.5rem;">
                    La souveraineté numérique française est devenue un enjeu stratégique majeur dans un contexte 
                    de dépendance croissante aux géants américains et chinois du numérique.
                </p>

                <div style="background: rgba(100, 255, 218, 0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 3px solid var(--secondary);">
                    <h4 style="color: var(--secondary); margin-bottom: 0.8rem;">🔒 Protection des Données</h4>
                    <p style="color: var(--text-light); line-height: 1.7;">
                        Le RGPD a posé les bases, mais la France va plus loin avec des hébergeurs certifiés 
                        (OVHcloud, Scaleway) et des solutions cloud souveraines pour les données sensibles 
                        des administrations et entreprises stratégiques.
                    </p>
                </div>

                <div style="background: rgba(249, 115, 22, 0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 3px solid var(--accent);">
                    <h4 style="color: var(--accent); margin-bottom: 0.8rem;">🚀 Écosystème Tech Français</h4>
                    <p style="color: var(--text-light); line-height: 1.7;">
                        Émergence de champions français de l'IA comme Mistral AI (valorisé à 6 milliards €) 
                        et Kyutai. La French Tech compte désormais 27 licornes et vise 100 d'ici 2030.
                    </p>
                </div>

                <div style="background: rgba(100, 255, 218, 0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 3px solid var(--secondary);">
                    <h4 style="color: var(--secondary); margin-bottom: 0.8rem;">👨‍💻 Formation et Emploi</h4>
                    <p style="color: var(--text-light); line-height: 1.7;">
                        Objectif : former 400 000 développeurs d'ici 2030. Multiplication des formations en 
                        cybersécurité, IA et cloud souverain. Le BTS SIO s'adapte avec des modules spécifiques.
                    </p>
                </div>

                <h3 style="color: var(--text); margin: 2rem 0 1rem 0;">Impact pour ma formation</h3>
                <p style="color: var(--text-light); line-height: 1.7;">
                    En tant qu'étudiant en BTS SIO, cette dynamique ouvre de nombreuses opportunités. 
                    Se spécialiser dans les technologies souveraines françaises peut être un vrai différenciateur 
                    sur le marché de l'emploi.
                </p>
            </div>
        `,
        synthese3: `
            <div style="padding: 2rem; color: var(--text);">
                <h2 style="font-size: 2rem; margin-bottom: 1rem; color: var(--secondary);">🤖 IA en 2026 : Vision Prospective</h2>
                <div style="background: rgba(100, 255, 218, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem; display: inline-block;">
                    <strong style="color: var(--secondary);">Date</strong>
                    <p style="color: var(--text-light); margin: 0.3rem 0 0 0;">Novembre 2025</p>
                </div>
                
                <h3 style="color: var(--text); margin: 2rem 0 1rem 0;">Vision prospective</h3>
                <p style="color: var(--text-light); line-height: 1.7; margin-bottom: 1.5rem;">
                    Basé sur les tendances actuelles et l'analyse d'experts du secteur, voici ce qui nous 
                    attend en 2026 dans le domaine de l'intelligence artificielle.
                </p>

                <div style="background: rgba(100, 255, 218, 0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 3px solid var(--secondary);">
                    <h4 style="color: var(--secondary); margin-bottom: 0.8rem;">🎯 IA Multimodale Généralisée</h4>
                    <p style="color: var(--text-light); line-height: 1.7;">
                        Les modèles fusionneront naturellement texte, image, audio et vidéo. GPT-5 et Gemini 2.0 
                        comprendront et généreront du contenu dans tous ces formats simultanément, ouvrant la voie 
                        à des applications révolutionnaires.
                    </p>
                </div>

                <div style="background: rgba(249, 115, 22, 0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 3px solid var(--accent);">
                    <h4 style="color: var(--accent); margin-bottom: 0.8rem;">🤖 Agents Autonomes au Quotidien</h4>
                    <p style="color: var(--text-light); line-height: 1.7;">
                        Les assistants IA ne se contenteront plus de répondre : ils agiront. Réserver un vol, 
                        négocier un contrat, gérer un projet... Les agents autonomes deviendront des collaborateurs 
                        à part entière.
                    </p>
                </div>

                <div style="background: rgba(100, 255, 218, 0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 3px solid var(--secondary);">
                    <h4 style="color: var(--secondary); margin-bottom: 0.8rem;">📱 IA Edge : Intelligence Locale</h4>
                    <p style="color: var(--text-light); line-height: 1.7;">
                        Avec les puces spécialisées (Apple Silicon, Qualcomm), l'IA migre du cloud vers les appareils. 
                        Smartphones et laptops exécuteront des LLMs localement, garantissant confidentialité et rapidité.
                    </p>
                </div>

                <h3 style="color: var(--text); margin: 2rem 0 1rem 0;">Impact sur le métier de développeur</h3>
                <ul style="list-style: none; padding-left: 0; color: var(--text-light); line-height: 1.8;">
                    <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
                        <span style="position: absolute; left: 0; color: var(--secondary);">✓</span>
                        60% du code sera assisté par IA (GitHub Copilot, Cursor, etc.)
                    </li>
                    <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
                        <span style="position: absolute; left: 0; color: var(--secondary);">✓</span>
                        Nouveaux rôles : AI Engineer, Prompt Engineer, AI Product Manager
                    </li>
                    <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
                        <span style="position: absolute; left: 0; color: var(--secondary);">✓</span>
                        Focus sur l'architecture, la stratégie et l'éthique plutôt que le code brut
                    </li>
                    <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
                        <span style="position: absolute; left: 0; color: var(--secondary);">✓</span>
                        Maîtrise des APIs d'IA indispensable pour rester compétitif
                    </li>
                </ul>

                <div style="background: rgba(100, 255, 218, 0.1); padding: 1.5rem; border-radius: 12px; margin-top: 2rem;">
                    <p style="color: var(--text); margin: 0; font-weight: 600;">
                        💡 Ma conclusion : L'IA ne remplacera pas les développeurs, mais les développeurs 
                        qui maîtrisent l'IA remplaceront ceux qui ne la maîtrisent pas.
                    </p>
                </div>
            </div>
        `,
        affiche1: `
            <div style="padding: 2rem; color: var(--text);">
                <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: var(--secondary);">📊 Affiche - IA Weekly (Septembre 2025)</h2>
                
                <div style="background: rgba(100, 255, 218, 0.1); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--secondary); margin-bottom: 2rem;">
                    <h3 style="color: var(--text); margin-bottom: 1rem;">🚀 Annonces Majeures</h3>
                    <ul style="list-style: none; padding-left: 0;">
                        <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
                            <span style="position: absolute; left: 0; color: var(--secondary);">→</span>
                            <strong>NVIDIA</strong> : Nouveau GPU H200 pour l'IA (performances x2)
                        </li>
                        <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
                            <span style="position: absolute; left: 0; color: var(--secondary);">→</span>
                            <strong>Amazon</strong> : Bedrock Studio - plateforme no-code pour IA
                        </li>
                        <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
                            <span style="position: absolute; left: 0; color: var(--secondary);">→</span>
                            <strong>OpenAI</strong> : GPT-5 annoncé pour Q1 2026
                        </li>
                    </ul>
                </div>

                <div style="background: rgba(249, 115, 22, 0.1); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent); margin-bottom: 2rem;">
                    <h3 style="color: var(--text); margin-bottom: 1rem;">💡 Impact sur le Développement</h3>
                    <p style="color: var(--text-light); line-height: 1.7; margin-bottom: 1rem;">
                        Ces innovations transforment profondément le métier de développeur :
                    </p>
                    <ul style="list-style: none; padding-left: 0; color: var(--text-light);">
                        <li style="margin-bottom: 0.5rem;">✓ Automatisation accrue du code répétitif</li>
                        <li style="margin-bottom: 0.5rem;">✓ Nouveaux métiers : AI Engineer, Prompt Engineer</li>
                        <li style="margin-bottom: 0.5rem;">✓ Nécessité de maîtriser les APIs d'IA</li>
                    </ul>
                </div>

                <div style="text-align: center; padding: 1rem; background: rgba(100, 255, 218, 0.05); border-radius: 8px;">
                    <p style="color: var(--text-light); font-size: 0.9rem;">
                        📅 Veille effectuée le 15 septembre 2025
                    </p>
                </div>
            </div>
        `,
        affiche2: `
            <div style="padding: 2rem; color: var(--text);">
                <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: var(--secondary);">🇫🇷 Souveraineté Numérique Française</h2>
                
                <div style="background: rgba(100, 255, 218, 0.1); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--secondary); margin-bottom: 2rem;">
                    <h3 style="color: var(--text); margin-bottom: 1rem;">🎯 Enjeux Stratégiques</h3>
                    <ul style="list-style: none; padding-left: 0;">
                        <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative; color: var(--text-light);">
                            <span style="position: absolute; left: 0; color: var(--secondary);">→</span>
                            Indépendance technologique vis-à-vis des GAFAM
                        </li>
                        <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative; color: var(--text-light);">
                            <span style="position: absolute; left: 0; color: var(--secondary);">→</span>
                            Protection des données sensibles (RGPD)
                        </li>
                        <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative; color: var(--text-light);">
                            <span style="position: absolute; left: 0; color: var(--secondary);">→</span>
                            Développement d'un écosystème tech français compétitif
                        </li>
                    </ul>
                </div>

                <div style="background: rgba(249, 115, 22, 0.1); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent); margin-bottom: 2rem;">
                    <h3 style="color: var(--text); margin-bottom: 1rem;">🚀 Initiatives Clés</h3>
                    <p style="color: var(--text-light); line-height: 1.7; margin-bottom: 1rem;">
                        La France investit massivement dans sa souveraineté numérique :
                    </p>
                    <ul style="list-style: none; padding-left: 0; color: var(--text-light);">
                        <li style="margin-bottom: 0.5rem;">✓ Cloud souverain (OVHcloud, Scaleway)</li>
                        <li style="margin-bottom: 0.5rem;">✓ IA française (Mistral AI, Kyutai)</li>
                        <li style="margin-bottom: 0.5rem;">✓ Formation : 400k développeurs d'ici 2030</li>
                    </ul>
                </div>

                <div style="text-align: center; padding: 1rem; background: rgba(100, 255, 218, 0.05); border-radius: 8px;">
                    <p style="color: var(--text-light); font-size: 0.9rem;">
                        📅 Analyse effectuée en octobre 2025
                    </p>
                </div>
            </div>
        `,
        affiche3: `
            <div style="padding: 2rem; color: var(--text);">
                <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: var(--secondary);">🤖 IA en 2026 : Vision Prospective</h2>
                
                <div style="background: rgba(100, 255, 218, 0.1); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--secondary); margin-bottom: 2rem;">
                    <h3 style="color: var(--text); margin-bottom: 1rem;">🔮 Tendances Prévues</h3>
                    <ul style="list-style: none; padding-left: 0;">
                        <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative; color: var(--text-light);">
                            <span style="position: absolute; left: 0; color: var(--secondary);">→</span>
                            <strong>IA Multimodale</strong> : Fusion texte, image, audio, vidéo
                        </li>
                        <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative; color: var(--text-light);">
                            <span style="position: absolute; left: 0; color: var(--secondary);">→</span>
                            <strong>Agents Autonomes</strong> : IA capable d'actions complexes
                        </li>
                        <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative; color: var(--text-light);">
                            <span style="position: absolute; left: 0; color: var(--secondary);">→</span>
                            <strong>IA Edge</strong> : Intelligence locale sans cloud
                        </li>
                    </ul>
                </div>

                <div style="background: rgba(249, 115, 22, 0.1); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent); margin-bottom: 2rem;">
                    <h3 style="color: var(--text); margin-bottom: 1rem;">💼 Implications Professionnelles</h3>
                    <p style="color: var(--text-light); line-height: 1.7; margin-bottom: 1rem;">
                        Évolution du métier de développeur :
                    </p>
                    <ul style="list-style: none; padding-left: 0; color: var(--text-light);">
                        <li style="margin-bottom: 0.5rem;">✓ Compétences IA deviennent essentielles</li>
                        <li style="margin-bottom: 0.5rem;">✓ Focus sur architecture et stratégie</li>
                        <li style="margin-bottom: 0.5rem;">✓ Collaboration homme-IA optimisée</li>
                        <li style="margin-bottom: 0.5rem;">✓ Éthique et responsabilité IA cruciales</li>
                    </ul>
                </div>

                <div style="background: rgba(100, 255, 218, 0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h4 style="color: var(--secondary); margin-bottom: 0.8rem;">📊 Statistiques Clés 2026</h4>
                    <ul style="list-style: none; padding-left: 0; color: var(--text-light); font-size: 0.95rem;">
                        <li style="margin-bottom: 0.3rem;">• 80% des entreprises utiliseront l'IA</li>
                        <li style="margin-bottom: 0.3rem;">• +300% de postes "AI Engineer"</li>
                        <li style="margin-bottom: 0.3rem;">• 60% du code assisté par IA</li>
                    </ul>
                </div>

                <div style="text-align: center; padding: 1rem; background: rgba(100, 255, 218, 0.05); border-radius: 8px;">
                    <p style="color: var(--text-light); font-size: 0.9rem;">
                        📅 Prospective réalisée en novembre 2025
                    </p>
                </div>
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