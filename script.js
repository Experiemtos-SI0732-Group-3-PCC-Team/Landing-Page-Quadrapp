// Animación simple para el botón "Comenzar ahora"
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn-primary');
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.07)';
        btn.style.boxShadow = '0 4px 16px rgba(232,156,29,0.18)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = '0 2px 8px rgba(232,156,29,0.08)';
    });

    // Menú hamburguesa responsive
    const nav = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    // Cierra el menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
        }
    });

    // i18n
    const translations = {
        es: {
            heroTitle: 'Quadrapp: tu espacio, <span class="highlight">a un toque</span>',
            heroDesc: 'Encuentra, reserva y paga tu estacionamiento en minutos.',
            btnPrimary: 'Comenzar ahora',
            btnSecondary: '<span class="play-icon">▶</span> Ver cómo funciona',
            nav: ['Inicio','Beneficios','Cómo funciona','Producto','Equipo','Planes','Contacto'],
            login: 'Iniciar sesión',
            benefitsTitle: '¿Por qué elegir Quadrapp?',
            benefitsDesc: 'Simplificamos el proceso de encontrar y reservar estacionamiento para que puedas enfocarte en lo que realmente importa.',
            benefit1: 'Búsqueda rápida',
            benefit1Desc: 'Encuentra estacionamientos disponibles cerca de ti en segundos.',
            benefit2: 'Reservas seguras',
            benefit2Desc: 'Garantiza tu espacio con reservas confirmadas al instante.',
            benefit3: 'Pago simple',
            benefit3Desc: 'Paga de forma segura con tu método de pago preferido.',
            benefit4: 'Comprobante QR',
            benefit4Desc: 'Accede a tu estacionamiento con un código QR único.',
            howTitle: 'Cómo funciona',
            howDesc: 'Tres simples pasos para encontrar y reservar tu estacionamiento perfecto.',
            step1: 'Explora',
            step1Desc: 'Busca estacionamientos disponibles en tu área usando nuestra app intuitiva.',
            step2: 'Reserva',
            step2Desc: 'Selecciona el horario y duración que necesitas para tu estacionamiento.',
            step3: 'Paga y usa tu QR',
            step3Desc: 'Completa el pago y recibe tu código QR para acceder al estacionamiento.',
            demoTitle: 'Descubre Quadrapp en acción',
            demoDesc: 'Ve cómo nuestra aplicación transforma la experiencia de estacionamiento urbano.',
            demoBtn: '<span class="play-icon">▶</span> Ver demo',
            demoTranscript: 'Ver transcripción del video',
            demoF1: 'Disponibilidad en tiempo real',
            demoF2: 'Checkout seguro',
            demoF3: 'QR inmediato',
            testimonialsTitle: 'Lo que dicen nuestros usuarios',
            testimonialsDesc: 'Miles de conductores ya confían en Quadrapp para sus necesidades de estacionamiento.',
            testimonial1: '“Quadrapp me ha ahorrado tanto tiempo. Ya no tengo que dar vueltas buscando estacionamiento en el centro”',
            testimonial2: '“La app es súper fácil de usar y el pago con QR es genial. Definitivamente la recomiendo.”',
            testimonial3: '“Perfecto para cuando voy de compras. Siempre encuentro un lugar seguro y cerca de donde necesito.”',
            testimonialUser1: 'María González',
            testimonialUser2: 'Carlos Rodríguez',
            testimonialUser3: 'Ana Martínez',
            teamTitle: 'Conoce al equipo',
            teamDesc: 'Un grupo apasionado de profesionales dedicados a revolucionar la movilidad urbana.',
            teamBtn: 'Conoce al equipo completo',
            teamVideoBtn: '<span class="play-icon">▶</span> Conoce nuestra historia',
            teamTranscript: 'Ver transcripción del video',
            teamMembers: [
                {name: 'Laura Pérez', role: 'CEO & Fundadora'},
                {name: 'Diego Morales', role: 'CTO'},
                {name: 'Sofía Chen', role: 'Head of Design'},
                {name: 'Miguel Torres', role: 'Lead Developer'}
            ],
            ctaTitle: 'Comienza gratis hoy',
            ctaDesc: 'Únete a miles de conductores que ya disfrutan de una experiencia de estacionamiento sin complicaciones.',
            ctaBtn1: 'Crear cuenta gratis',
            ctaBtn2: 'Descargar app',
            ctaInfo: 'Sin compromiso · Cancela cuando quieras · Soporte 24/7',
            footerSlogan: 'Tu espacio, a un toque',
            footerLinks: ['Ayuda','Términos','Privacidad','Contacto'],
            footerCopy: '© 2025 Quadrapp. Todos los derechos reservados.'
        },
        en: {
            heroTitle: 'Quadrapp: your space, <span class="highlight">one tap away</span>',
            heroDesc: 'Find, book and pay for your parking in minutes.',
            btnPrimary: 'Start now',
            btnSecondary: '<span class="play-icon">▶</span> See how it works',
            nav: ['Home','Benefits','How it works','Product','Team','Plans','Contact'],
            login: 'Sign in',
            benefitsTitle: 'Why choose Quadrapp?',
            benefitsDesc: 'We simplify the process of finding and booking parking so you can focus on what really matters.',
            benefit1: 'Quick search',
            benefit1Desc: 'Find available parking near you in seconds.',
            benefit2: 'Secure bookings',
            benefit2Desc: 'Guarantee your spot with instant confirmed bookings.',
            benefit3: 'Simple payment',
            benefit3Desc: 'Pay securely with your preferred method.',
            benefit4: 'QR receipt',
            benefit4Desc: 'Access your parking with a unique QR code.',
            howTitle: 'How it works',
            howDesc: 'Three simple steps to find and book your perfect parking spot.',
            step1: 'Explore',
            step1Desc: 'Find available parking in your area using our intuitive app.',
            step2: 'Book',
            step2Desc: 'Select the time and duration you need for your parking.',
            step3: 'Pay and use your QR',
            step3Desc: 'Complete payment and receive your QR code to access parking.',
            demoTitle: 'See Quadrapp in action',
            demoDesc: 'See how our app transforms the urban parking experience.',
            demoBtn: '<span class="play-icon">▶</span> See demo',
            demoTranscript: 'See video transcript',
            demoF1: 'Real-time availability',
            demoF2: 'Secure checkout',
            demoF3: 'Instant QR',
            testimonialsTitle: 'What our users say',
            testimonialsDesc: 'Thousands of drivers already trust Quadrapp for their parking needs.',
            testimonial1: '“Quadrapp has saved me so much time. No more driving around looking for parking downtown.”',
            testimonial2: '“The app is super easy to use and paying with QR is great. Definitely recommend it.”',
            testimonial3: '“Perfect for when I go shopping. I always find a safe spot close to where I need.”',
            testimonialUser1: 'Maria Gonzalez',
            testimonialUser2: 'Carlos Rodriguez',
            testimonialUser3: 'Ana Martinez',
            teamTitle: 'Meet the team',
            teamDesc: 'A passionate group of professionals dedicated to revolutionizing urban mobility.',
            teamBtn: 'See full team',
            teamVideoBtn: '<span class="play-icon">▶</span> See our story',
            teamTranscript: 'See video transcript',
            teamMembers: [
                {name: 'Laura Perez', role: 'CEO & Founder'},
                {name: 'Diego Morales', role: 'CTO'},
                {name: 'Sofia Chen', role: 'Head of Design'},
                {name: 'Miguel Torres', role: 'Lead Developer'}
            ],
            ctaTitle: 'Start for free today',
            ctaDesc: 'Join thousands of drivers already enjoying hassle-free parking.',
            ctaBtn1: 'Create free account',
            ctaBtn2: 'Download app',
            ctaInfo: 'No commitment · Cancel anytime · 24/7 support',
            footerSlogan: 'Your space, one tap away',
            footerLinks: ['Help','Terms','Privacy','Contact'],
            footerCopy: '© 2025 Quadrapp. All rights reserved.'
        }
    };
    const langSelect = document.getElementById('lang-select');
    langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        const t = translations[lang];
        // Hero
        document.querySelector('.hero-content h1').innerHTML = t.heroTitle;
        document.querySelector('.hero-content p').textContent = t.heroDesc;
        document.querySelector('.btn-primary').textContent = t.btnPrimary;
        document.querySelector('.btn-secondary').innerHTML = t.btnSecondary;
        // Nav
        document.querySelectorAll('.nav-links li a').forEach((el, i) => {
            el.textContent = t.nav[i];
        });
        document.querySelector('.login-btn').textContent = t.login;
        // Beneficios
        document.querySelector('.benefits h2').textContent = t.benefitsTitle;
        document.querySelector('.benefits-desc').textContent = t.benefitsDesc;
        const cards = document.querySelectorAll('.benefit-card');
        cards[0].querySelector('h3').textContent = t.benefit1;
        cards[0].querySelector('p').textContent = t.benefit1Desc;
        cards[1].querySelector('h3').textContent = t.benefit2;
        cards[1].querySelector('p').textContent = t.benefit2Desc;
        cards[2].querySelector('h3').textContent = t.benefit3;
        cards[2].querySelector('p').textContent = t.benefit3Desc;
        cards[3].querySelector('h3').textContent = t.benefit4;
        cards[3].querySelector('p').textContent = t.benefit4Desc;
        // Cómo funciona
        document.querySelector('.how-it-works h2').textContent = t.howTitle;
        document.querySelector('.how-desc').textContent = t.howDesc;
        const steps = document.querySelectorAll('.step');
        steps[0].querySelector('h3').textContent = t.step1;
        steps[0].querySelector('p').textContent = t.step1Desc;
        steps[1].querySelector('h3').textContent = t.step2;
        steps[1].querySelector('p').textContent = t.step2Desc;
        steps[2].querySelector('h3').textContent = t.step3;
        steps[2].querySelector('p').textContent = t.step3Desc;
        // Demo
        document.querySelector('.demo-section h2').textContent = t.demoTitle;
        document.querySelector('.demo-desc').textContent = t.demoDesc;
        document.querySelector('.video-btn').innerHTML = t.demoBtn;
        document.querySelector('.video-transcript').textContent = t.demoTranscript;
        const demoFeatures = document.querySelectorAll('.demo-feature');
        demoFeatures[0].querySelector('span:last-child').textContent = t.demoF1;
        demoFeatures[1].querySelector('span:last-child').textContent = t.demoF2;
        demoFeatures[2].querySelector('span:last-child').textContent = t.demoF3;
        // Testimonios
        document.querySelector('.testimonials h2').textContent = t.testimonialsTitle;
        document.querySelector('.testimonials-desc').textContent = t.testimonialsDesc;
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        testimonialCards[0].querySelector('.testimonial-text').textContent = t.testimonial1;
        testimonialCards[0].querySelector('.testimonial-user').textContent = t.testimonialUser1;
        testimonialCards[1].querySelector('.testimonial-text').textContent = t.testimonial2;
        testimonialCards[1].querySelector('.testimonial-user').textContent = t.testimonialUser2;
        testimonialCards[2].querySelector('.testimonial-text').textContent = t.testimonial3;
        testimonialCards[2].querySelector('.testimonial-user').textContent = t.testimonialUser3;
        // Equipo
        document.querySelector('.team-section h2').textContent = t.teamTitle;
        document.querySelector('.team-desc').textContent = t.teamDesc;
        document.querySelector('.team-btn').textContent = t.teamBtn;
        document.querySelector('.team-video .video-btn').innerHTML = t.teamVideoBtn;
        document.querySelector('.team-video .video-transcript').textContent = t.teamTranscript;
        const teamMembers = document.querySelectorAll('.team-member');
        t.teamMembers.forEach((member, i) => {
            teamMembers[i].querySelector('.team-name').textContent = member.name;
            teamMembers[i].querySelector('.team-role').textContent = member.role;
        });
        // CTA
        document.querySelector('.cta-section h2').textContent = t.ctaTitle;
        document.querySelector('.cta-desc').textContent = t.ctaDesc;
        const ctaBtns = document.querySelectorAll('.cta-buttons a');
        ctaBtns[0].textContent = t.ctaBtn1;
        ctaBtns[1].textContent = t.ctaBtn2;
        document.querySelector('.cta-info').textContent = t.ctaInfo;
        // Footer
        document.querySelector('.footer-slogan').textContent = t.footerSlogan;
        const footerLinks = document.querySelectorAll('.footer-links a');
        t.footerLinks.forEach((txt, i) => {
            footerLinks[i].textContent = txt;
        });
        document.querySelector('.footer-copy').textContent = t.footerCopy;
    });
});