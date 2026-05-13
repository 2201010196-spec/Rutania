import{j as e}from"./index-5-MBYXc8.js";function t(){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        /* ===== Reset & Base ===== */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --verde-oscuro: #2d5a27;
          --verde-medio: #4a7c3f;
          --verde-claro: #7aab6b;
          --tierra: #8b5e3c;
          --tierra-claro: #c4956a;
          --crema: #f5f0e8;
          --crema-oscuro: #ede4d3;
          --blanco: #fefdf9;
          --texto: #2c2416;
          --texto-suave: #5a4e3e;
          --borde: #d4c8b4;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Georgia', 'Times New Roman', serif;
          background: var(--blanco);
          color: var(--texto);
          line-height: 1.7;
        }

        img { max-width: 100%; display: block; }
        a { color: inherit; text-decoration: none; }

        h1, h2, h3, h4 {
          font-family: 'Georgia', serif;
          line-height: 1.3;
          color: var(--verde-oscuro);
        }

        p { color: var(--texto-suave); }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        .section-tag {
          display: inline-block;
          font-family: system-ui, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--verde-medio);
          background: rgba(74, 124, 63, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 2rem;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          margin-bottom: 1rem;
        }

        .section-lead {
          font-size: 1.05rem;
          max-width: 600px;
          color: var(--texto-suave);
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.6rem;
          border-radius: 0.5rem;
          font-family: system-ui, sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.2s ease;
          text-align: center;
        }

        .btn-primary { background: var(--verde-oscuro); color: white; border-color: var(--verde-oscuro); }
        .btn-primary:hover { background: var(--verde-medio); border-color: var(--verde-medio); }

        .btn-whatsapp { background: #25d366; color: white; border-color: #25d366; }
        .btn-whatsapp:hover { background: #20b858; border-color: #20b858; }

        .btn-outline { background: transparent; color: var(--verde-oscuro); border-color: var(--verde-oscuro); }
        .btn-outline:hover { background: var(--verde-oscuro); color: white; }

        .btn-tierra { background: var(--tierra); color: white; border-color: var(--tierra); }
        .btn-tierra:hover { background: #7a5234; border-color: #7a5234; }

        /* Header */
        #header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(254, 253, 249, 0.96);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--borde);
          padding: 0.9rem 0;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .nav-logo-icon {
          width: 36px;
          height: 36px;
          background: var(--verde-oscuro);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .nav-logo-text {
          font-size: 1rem;
          font-weight: 700;
          color: var(--verde-oscuro);
          font-family: system-ui, sans-serif;
          line-height: 1.2;
        }

        .nav-logo-text span {
          display: block;
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--texto-suave);
        }

        .nav-links-desktop {
          display: none;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }

        @media (min-width: 768px) {
          .nav-links-desktop { display: flex; }
        }

        .nav-links-desktop a {
          font-family: system-ui, sans-serif;
          font-size: 0.95rem;
          color: var(--texto-suave);
          transition: color 0.2s;
        }
        .nav-links-desktop a:hover { color: var(--verde-oscuro); }

        .nav-cta { display: none; }
        @media (min-width: 768px) { .nav-cta { display: flex; } }

        .nav-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.3rem;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .nav-toggle span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--verde-oscuro);
          border-radius: 2px;
        }
        @media (min-width: 768px) { .nav-toggle { display: none; } }

        .mobile-menu {
          display: none;
          background: var(--blanco);
          border-top: 1px solid var(--borde);
          padding: 1rem 0;
        }
        .mobile-menu.open { display: block; }
        .mobile-menu ul { list-style: none; display: flex; flex-direction: column; }
        .mobile-menu a {
          display: block;
          padding: 0.7rem 1.25rem;
          font-family: system-ui, sans-serif;
          font-size: 0.95rem;
          color: var(--texto-suave);
        }
        .mobile-menu a:hover { color: var(--verde-oscuro); background: var(--crema); }
        .mobile-menu .btn { margin: 0.5rem 1.25rem; display: inline-flex; }

        /* Hero */
        #hero {
          background:
            linear-gradient(to bottom, rgba(20,40,18,0.55) 0%, rgba(30,55,25,0.4) 60%, rgba(45,90,39,0.3) 100%),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600"><rect fill="%232d5a27"/><path fill="%23234820" d="M0 400 Q360 200 720 380 Q1080 560 1440 300 L1440 600 L0 600Z"/><path fill="%231a3a18" d="M0 500 Q400 350 800 480 Q1100 570 1440 420 L1440 600 L0 600Z"/><circle cx="200" cy="150" r="80" fill="%234a7c3f" opacity=".3"/><circle cx="900" cy="100" r="120" fill="%234a7c3f" opacity=".2"/></svg>');
          background-size: cover;
          background-position: center;
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding: 5rem 0 4rem;
          position: relative;
        }

        .hero-content { color: white; max-width: 700px; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.25);
          padding: 0.4rem 1rem;
          border-radius: 2rem;
          font-family: system-ui, sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: clamp(2rem, 6vw, 3.8rem);
          color: white;
          margin-bottom: 1.2rem;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        .hero-title em { font-style: normal; color: #b8e8a6; }

        .hero-subtitle {
          font-family: system-ui, sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: rgba(255,255,255,0.88);
          margin-bottom: 2.5rem;
          max-width: 520px;
        }

        .hero-buttons { display: flex; flex-wrap: wrap; gap: 1rem; }

        .hero-scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.6);
          font-family: system-ui, sans-serif;
          font-size: 0.75rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* About */
        #nosotros { padding: 5rem 0; background: var(--crema); }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 768px) { .about-grid { grid-template-columns: 1fr 1fr; } }

        .about-image-placeholder {
          background: linear-gradient(135deg, var(--verde-claro) 0%, var(--verde-oscuro) 60%, var(--tierra) 100%);
          aspect-ratio: 4/3;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
        }

        .about-values {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        .about-value {
          background: white;
          border: 1px solid var(--borde);
          border-radius: 0.75rem;
          padding: 1.1rem;
          text-align: center;
        }

        .about-value-icon { font-size: 1.8rem; margin-bottom: 0.4rem; }
        .about-value-label {
          font-family: system-ui, sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--verde-oscuro);
        }

        .divider {
          width: 48px;
          height: 3px;
          background: var(--verde-claro);
          border-radius: 2px;
          margin: 1rem 0 1.5rem;
        }

        /* Routes */
        #rutas { padding: 5rem 0; background: var(--blanco); }

        .route-card {
          background: var(--crema);
          border: 1px solid var(--borde);
          border-radius: 1rem;
          overflow: hidden;
          margin-top: 2.5rem;
        }

        .route-card-image {
          background: linear-gradient(160deg, #4a7c3f 0%, #2d5a27 40%, #8b5e3c 100%);
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
        }

        .route-card-body { padding: 2rem; }
        .route-card-title { font-size: 1.5rem; margin-bottom: 0.75rem; }

        .route-highlights { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1.25rem 0; }

        .route-tag {
          background: rgba(74, 124, 63, 0.12);
          color: var(--verde-oscuro);
          font-family: system-ui, sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.3rem 0.75rem;
          border-radius: 2rem;
          border: 1px solid rgba(74, 124, 63, 0.2);
        }

        .route-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
          margin: 1.5rem 0;
          padding: 1.25rem;
          background: white;
          border-radius: 0.75rem;
          border: 1px solid var(--borde);
        }

        .route-info-item { text-align: center; }
        .route-info-value {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--verde-oscuro);
          font-family: system-ui, sans-serif;
        }
        .route-info-label {
          font-family: system-ui, sans-serif;
          font-size: 0.75rem;
          color: var(--texto-suave);
        }

        /* Services */
        #servicios { padding: 5rem 0; background: var(--crema-oscuro); }

        .services-header { text-align: center; margin-bottom: 3rem; }
        .services-header .section-lead { margin: 0 auto; }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 480px) { .services-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .services-grid { grid-template-columns: repeat(3, 1fr); } }

        .service-card {
          background: white;
          border: 1px solid var(--borde);
          border-radius: 1rem;
          padding: 1.75rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .service-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(45, 90, 39, 0.12);
        }

        .service-icon {
          width: 52px;
          height: 52px;
          background: rgba(74, 124, 63, 0.1);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1.1rem;
        }

        .service-card h3 { font-size: 1.1rem; margin-bottom: 0.5rem; }
        .service-card p { font-family: system-ui, sans-serif; font-size: 0.9rem; line-height: 1.6; }

        /* Testimonials */
        #testimonios { padding: 4rem 0; background: var(--verde-oscuro); color: white; }

        .testimonios-header { text-align: center; margin-bottom: 2.5rem; }
        .testimonios-header h2 { color: white; }

        .testimonios-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) { .testimonios-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .testimonios-grid { grid-template-columns: repeat(3, 1fr); } }

        .testimonio-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 1rem;
          padding: 1.5rem;
        }

        .testimonio-stars { color: #f5c842; font-size: 1rem; margin-bottom: 0.75rem; letter-spacing: 2px; }
        .testimonio-text {
          font-style: italic;
          color: rgba(255,255,255,0.88);
          font-size: 0.95rem;
          margin-bottom: 1rem;
          font-family: 'Georgia', serif;
        }
        .testimonio-author {
          font-family: system-ui, sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.6);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Contact */
        #contacto { padding: 5rem 0; background: var(--crema); }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        @media (min-width: 768px) { .contact-grid { grid-template-columns: 1fr 1fr; } }

        .contact-methods { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.1rem 1.25rem;
          background: white;
          border: 1px solid var(--borde);
          border-radius: 0.75rem;
          transition: border-color 0.2s;
          cursor: pointer;
          text-decoration: none;
        }
        .contact-method:hover { border-color: var(--verde-claro); }

        .contact-method-icon {
          width: 42px;
          height: 42px;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .contact-method-icon.whatsapp { background: #e8faf0; }
        .contact-method-icon.email { background: rgba(74,124,63,0.1); }
        .contact-method-icon.instagram { background: #fce4ec; }
        .contact-method-icon.facebook { background: #e3f2fd; }

        .contact-method-text { flex: 1; }
        .contact-method-label {
          font-family: system-ui, sans-serif;
          font-size: 0.75rem;
          color: var(--texto-suave);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .contact-method-value {
          font-family: system-ui, sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--texto);
        }

        .contact-form-box {
          background: white;
          border: 1px solid var(--borde);
          border-radius: 1rem;
          padding: 2rem;
        }
        .contact-form-box h3 { font-size: 1.3rem; margin-bottom: 1.5rem; }

        .form-group { margin-bottom: 1.1rem; }
        .form-group label {
          display: block;
          font-family: system-ui, sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--verde-oscuro);
          margin-bottom: 0.4rem;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid var(--borde);
          border-radius: 0.5rem;
          font-family: system-ui, sans-serif;
          font-size: 0.95rem;
          color: var(--texto);
          background: var(--crema);
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--verde-medio);
          background: white;
        }

        .form-group textarea { resize: vertical; min-height: 100px; }

        /* Footer */
        footer { background: #1a2e18; color: rgba(255,255,255,0.8); padding: 3rem 0 1.5rem; }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        @media (min-width: 600px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; } }

        .footer-brand-name {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          font-family: system-ui, sans-serif;
          margin-bottom: 0.75rem;
        }

        .footer-brand-desc {
          font-family: system-ui, sans-serif;
          font-size: 0.85rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          max-width: 280px;
        }

        .footer-socials { display: flex; gap: 0.6rem; margin-top: 1.1rem; }

        .footer-social {
          width: 34px;
          height: 34px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          transition: background 0.2s;
        }
        .footer-social:hover { background: rgba(255,255,255,0.2); }

        .footer-col h4 {
          font-family: system-ui, sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.5);
          margin-bottom: 1rem;
        }

        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }

        .footer-col a {
          font-family: system-ui, sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.65);
          transition: color 0.2s;
        }
        .footer-col a:hover { color: white; }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 1.25rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: space-between;
          align-items: center;
        }

        .footer-bottom p {
          font-family: system-ui, sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
        }

        .footer-bottom-links { display: flex; gap: 1.25rem; list-style: none; }
        .footer-bottom-links a {
          font-family: system-ui, sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          transition: color 0.2s;
        }
        .footer-bottom-links a:hover { color: rgba(255,255,255,0.8); }

        /* Floating WhatsApp */
        .whatsapp-float {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 200;
          width: 54px;
          height: 54px;
          background: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 4px 16px rgba(37,211,102,0.45);
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(37,211,102,0.55);
        }
      `}),e.jsxs("header",{id:"header",children:[e.jsx("div",{className:"container",children:e.jsxs("nav",{className:"nav-inner",children:[e.jsxs("a",{href:"#hero",className:"nav-logo",children:[e.jsx("div",{className:"nav-logo-icon",children:"🌿"}),e.jsxs("div",{className:"nav-logo-text",children:["Turismo Rural Sostenible",e.jsx("span",{children:"Perú · Andes · Comunidad"})]})]}),e.jsxs("ul",{className:"nav-links-desktop",children:[e.jsx("li",{children:e.jsx("a",{href:"#nosotros",children:"Nosotros"})}),e.jsx("li",{children:e.jsx("a",{href:"#rutas",children:"Rutas"})}),e.jsx("li",{children:e.jsx("a",{href:"#servicios",children:"Servicios"})}),e.jsx("li",{children:e.jsx("a",{href:"#contacto",children:"Contacto"})})]}),e.jsx("a",{href:"https://wa.me/51999000000?text=Hola%2C%20me%20interesa%20reservar%20una%20experiencia%20de%20turismo%20rural",className:"btn btn-whatsapp nav-cta",target:"_blank",rel:"noopener noreferrer",children:"📲 Reservar"}),e.jsxs("button",{className:"nav-toggle","aria-label":"Abrir menú",onClick:()=>{const r=document.getElementById("mobileMenu");r&&r.classList.toggle("open")},children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})}),e.jsx("div",{className:"mobile-menu",id:"mobileMenu",children:e.jsx("div",{className:"container",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#nosotros",children:"Nosotros"})}),e.jsx("li",{children:e.jsx("a",{href:"#rutas",children:"Rutas"})}),e.jsx("li",{children:e.jsx("a",{href:"#servicios",children:"Servicios"})}),e.jsx("li",{children:e.jsx("a",{href:"#contacto",children:"Contacto"})}),e.jsx("li",{children:e.jsx("a",{href:"https://wa.me/51999000000?text=Hola%2C%20me%20interesa%20reservar%20una%20experiencia%20de%20turismo%20rural",className:"btn btn-whatsapp",target:"_blank",rel:"noopener noreferrer",children:"📲 Reservar por WhatsApp"})})]})})})]}),e.jsxs("section",{id:"hero",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"hero-content",children:[e.jsx("div",{className:"hero-badge",children:"🌄 Turismo responsable en los Andes"}),e.jsxs("h1",{className:"hero-title",children:["Vive los Andes",e.jsx("br",{}),"con ",e.jsx("em",{children:"autenticidad"})]}),e.jsx("p",{className:"hero-subtitle",children:"Descubre el Perú profundo: paisajes andinos, comunidades vivas, tradiciones milenarias y naturaleza pura. Un turismo que cuida la tierra y honra su gente."}),e.jsxs("div",{className:"hero-buttons",children:[e.jsx("a",{href:"https://wa.me/51999000000?text=Hola%2C%20quiero%20reservar%20una%20experiencia%20de%20turismo%20rural",className:"btn btn-whatsapp",target:"_blank",rel:"noopener noreferrer",children:"📲 Reservar ahora"}),e.jsx("a",{href:"#rutas",className:"btn btn-outline",style:{color:"white",borderColor:"rgba(255,255,255,0.6)"},children:"Conocer más →"})]})]})}),e.jsxs("div",{className:"hero-scroll",children:[e.jsx("span",{children:"↓"}),e.jsx("span",{children:"Explorar"})]})]}),e.jsx("section",{id:"nosotros",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"about-grid",children:[e.jsx("div",{children:e.jsx("div",{className:"about-image-placeholder",children:"🏔️"})}),e.jsxs("div",{children:[e.jsx("div",{className:"section-tag",children:"Quiénes somos"}),e.jsx("h2",{className:"section-title",children:"Turismo desde y para la comunidad"}),e.jsx("div",{className:"divider"}),e.jsx("p",{className:"section-lead",children:"Somos un colectivo de familias y comunidades andinas del Perú comprometidas con un turismo que respeta la naturaleza, preserva la cultura y genera bienestar real para quienes habitan estas tierras."}),e.jsx("p",{style:{marginTop:"1rem",fontSize:"0.95rem",color:"var(--texto-suave)"},children:"Cada visita es una oportunidad de conexión auténtica: compartir una comida familiar, aprender técnicas ancestrales de tejido, caminar por senderos que datan de siglos y contemplar paisajes que quitan el aliento. No vendemos espectáculos; invitamos a vivencias genuinas."}),e.jsx("div",{className:"about-values",children:[{icon:"🌱",label:"Sostenibilidad"},{icon:"🤝",label:"Comunidad"},{icon:"🗿",label:"Cultura viva"},{icon:"🦜",label:"Biodiversidad"}].map(r=>e.jsxs("div",{className:"about-value",children:[e.jsx("div",{className:"about-value-icon",children:r.icon}),e.jsx("div",{className:"about-value-label",children:r.label})]},r.label))})]})]})})}),e.jsx("section",{id:"rutas",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"section-tag",children:"Nuestra ruta estrella"}),e.jsx("h2",{className:"section-title",children:"Ruta Andina Sostenible"}),e.jsx("div",{className:"divider"}),e.jsx("p",{className:"section-lead",children:"Un recorrido diseñado junto a las comunidades locales para ofrecerte una experiencia completa: naturaleza, historia, gastronomía y convivencia intercultural."}),e.jsxs("div",{className:"route-card",children:[e.jsx("div",{className:"route-card-image",children:"🏔️🌿🦙"}),e.jsxs("div",{className:"route-card-body",children:[e.jsx("h3",{className:"route-card-title",children:"Corazón de los Andes — Ruta Comunitaria"}),e.jsx("p",{children:"Desde los valles interandinos hasta las alturas de la puna, esta ruta de cuatro días te lleva a través de paisajes únicos, aldeas tradicionales y ecosistemas protegidos. Caminarás por senderos ancestrales, participarás en faenas agrícolas, conocerás artesanas que trabajan con técnicas precolombinas y disfrutarás de la gastronomía andina preparada por manos locales."}),e.jsx("div",{className:"route-highlights",children:["Trekking","Artesanía","Gastronomía local","Flora y fauna","Convivencia","Arqueología"].map(r=>e.jsx("span",{className:"route-tag",children:r},r))}),e.jsx("div",{className:"route-info-grid",children:[{value:"4 días",label:"Duración"},{value:"Moderado",label:"Dificultad"},{value:"2–12 pers.",label:"Grupo"},{value:"Todo el año",label:"Temporada"}].map(r=>e.jsxs("div",{className:"route-info-item",children:[e.jsx("div",{className:"route-info-value",children:r.value}),e.jsx("div",{className:"route-info-label",children:r.label})]},r.label))}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem"},children:[e.jsx("a",{href:"https://wa.me/51999000000?text=Hola%2C%20me%20interesa%20la%20Ruta%20Andina%20Sostenible",className:"btn btn-whatsapp",target:"_blank",rel:"noopener noreferrer",children:"📲 Reservar esta ruta"}),e.jsx("a",{href:"#contacto",className:"btn btn-outline",children:"Solicitar información"})]})]})]})]})}),e.jsx("section",{id:"servicios",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"services-header",children:[e.jsx("div",{className:"section-tag",children:"Lo que ofrecemos"}),e.jsx("h2",{className:"section-title",children:"Nuestros servicios"}),e.jsx("p",{className:"section-lead",children:"Cada servicio es prestado por personas de la comunidad, capacitadas y comprometidas con ofrecerte la mejor experiencia posible."})]}),e.jsx("div",{className:"services-grid",children:[{icon:"🗺️",title:"Guianza local",desc:"Guías nativos bilingües con profundo conocimiento del territorio, historia y ecosistema local. Tu experiencia en las mejores manos."},{icon:"🚐",title:"Transporte",desc:"Movilidad segura desde tu punto de llegada hasta las comunidades, en vehículos acondicionados para el terreno andino."},{icon:"🍲",title:"Gastronomía andina",desc:"Comidas preparadas por familias locales con productos del campo: quinua, papas nativas, hierbas aromáticas y cocina ancestral."},{icon:"🏡",title:"Alojamiento comunitario",desc:"Hospédate en casas familiares tradicionales, cómodas y acogedoras, construidas con materiales de la zona."},{icon:"🧶",title:"Turismo vivencial",desc:"Talleres de tejido, siembra, cerámica o música andina. Aprende de maestros artesanos y llévate una habilidad única."},{icon:"📸",title:"Turismo fotográfico",desc:"Rutas diseñadas para capturar paisajes, textiles, fauna y momentos auténticos de la vida andina con guías especializados."}].map(r=>e.jsxs("div",{className:"service-card",children:[e.jsx("div",{className:"service-icon",children:r.icon}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.desc})]},r.title))})]})}),e.jsx("section",{id:"testimonios",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"testimonios-header",children:[e.jsx("div",{className:"section-tag",style:{background:"rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.85)"},children:"Experiencias compartidas"}),e.jsx("h2",{className:"section-title",style:{color:"white",marginBottom:"0.5rem"},children:"Lo que dicen nuestros viajeros"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.7)",maxWidth:"500px",margin:"0 auto",fontFamily:"system-ui, sans-serif"},children:"Cada historia es la mejor razón para venir."})]}),e.jsx("div",{className:"testimonios-grid",children:[{text:'"Una experiencia que cambió mi forma de ver el turismo. Las familias nos recibieron con una calidez increíble y aprendí más de la cultura andina en tres días que en años de libros."',author:"María G. — Lima, Perú"},{text:'"El trekking fue espectacular, pero lo que más me llegó fue el momento de cocinar con la abuela de la familia anfitriona. Sin duda regreso el próximo año."',author:"Carlos M. — Buenos Aires, Argentina"},{text:'"Responsable, auténtico y perfectamente organizado. Este tipo de turismo es el futuro. Recomiendo esta experiencia a todos mis amigos viajeros."',author:"Sophie L. — París, Francia"}].map((r,a)=>e.jsxs("div",{className:"testimonio-card",children:[e.jsx("div",{className:"testimonio-stars",children:"★★★★★"}),e.jsx("p",{className:"testimonio-text",children:r.text}),e.jsx("p",{className:"testimonio-author",children:r.author})]},a))})]})}),e.jsx("section",{id:"contacto",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"section-tag",children:"Hablemos"}),e.jsx("h2",{className:"section-title",children:"Contáctanos"}),e.jsx("div",{className:"divider"}),e.jsx("p",{className:"section-lead",style:{marginBottom:"2rem"},children:"¿Tienes preguntas sobre nuestras rutas o quieres diseñar un viaje a medida? Estamos aquí para ayudarte."}),e.jsxs("div",{className:"contact-grid",children:[e.jsx("div",{children:e.jsx("div",{className:"contact-methods",children:[{href:"https://wa.me/51999000000?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n",iconClass:"whatsapp",icon:"📲",label:"WhatsApp",value:"+51 999 000 000"},{href:"mailto:hola@turismoruralpe.com",iconClass:"email",icon:"✉️",label:"Correo electrónico",value:"hola@turismoruralpe.com"},{href:"https://instagram.com/turismoruralpe",iconClass:"instagram",icon:"📸",label:"Instagram",value:"@turismoruralpe"},{href:"https://facebook.com/turismoruralpe",iconClass:"facebook",icon:"👍",label:"Facebook",value:"/turismoruralpe"}].map(r=>e.jsxs("a",{href:r.href,className:"contact-method",target:r.href.startsWith("http")?"_blank":void 0,rel:"noopener noreferrer",children:[e.jsx("div",{className:`contact-method-icon ${r.iconClass}`,children:r.icon}),e.jsxs("div",{className:"contact-method-text",children:[e.jsx("div",{className:"contact-method-label",children:r.label}),e.jsx("div",{className:"contact-method-value",children:r.value})]})]},r.label))})}),e.jsxs("div",{className:"contact-form-box",children:[e.jsx("h3",{children:"Envíanos un mensaje"}),e.jsxs("form",{onSubmit:r=>{r.preventDefault();const a=r.target,o=a.elements.namedItem("nombre").value,i=a.elements.namedItem("mensaje").value;window.open(`https://wa.me/51999000000?text=Hola%2C%20soy%20${encodeURIComponent(o)}.%20${encodeURIComponent(i)}`,"_blank")},children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"nombre",children:"Nombre completo"}),e.jsx("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Tu nombre",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Correo electrónico"}),e.jsx("input",{type:"email",id:"email",name:"email",placeholder:"tu@email.com"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"servicio",children:"Servicio de interés"}),e.jsxs("select",{id:"servicio",name:"servicio",children:[e.jsx("option",{value:"",children:"Selecciona una opción"}),e.jsx("option",{children:"Ruta Andina Sostenible (4 días)"}),e.jsx("option",{children:"Turismo vivencial"}),e.jsx("option",{children:"Guianza local"}),e.jsx("option",{children:"Paquete personalizado"}),e.jsx("option",{children:"Otra consulta"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"mensaje",children:"Mensaje"}),e.jsx("textarea",{id:"mensaje",name:"mensaje",placeholder:"Cuéntanos sobre tu viaje soñado...",required:!0})]}),e.jsx("button",{type:"submit",className:"btn btn-tierra",style:{width:"100%",justifyContent:"center"},children:"📲 Enviar por WhatsApp"})]})]})]})]})}),e.jsx("footer",{children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"footer-grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"footer-brand-name",children:"🌿 Turismo Rural Sostenible"}),e.jsx("p",{className:"footer-brand-desc",children:"Experiencias auténticas en los Andes peruanos. Turismo comunitario, responsable y transformador desde el corazón de Perú."}),e.jsxs("div",{className:"footer-socials",children:[e.jsx("a",{href:"https://instagram.com/turismoruralpe",className:"footer-social",target:"_blank",rel:"noopener noreferrer",children:"📸"}),e.jsx("a",{href:"https://facebook.com/turismoruralpe",className:"footer-social",target:"_blank",rel:"noopener noreferrer",children:"👍"}),e.jsx("a",{href:"https://wa.me/51999000000",className:"footer-social",target:"_blank",rel:"noopener noreferrer",children:"📲"})]})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"Navegación"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#nosotros",children:"Nosotros"})}),e.jsx("li",{children:e.jsx("a",{href:"#rutas",children:"Rutas"})}),e.jsx("li",{children:e.jsx("a",{href:"#servicios",children:"Servicios"})}),e.jsx("li",{children:e.jsx("a",{href:"#contacto",children:"Contacto"})})]})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"Servicios"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#servicios",children:"Guianza local"})}),e.jsx("li",{children:e.jsx("a",{href:"#servicios",children:"Transporte"})}),e.jsx("li",{children:e.jsx("a",{href:"#servicios",children:"Alojamiento"})}),e.jsx("li",{children:e.jsx("a",{href:"#servicios",children:"Gastronomía"})}),e.jsx("li",{children:e.jsx("a",{href:"#servicios",children:"Turismo vivencial"})})]})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"Contacto"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"https://wa.me/51999000000",children:"+51 999 000 000"})}),e.jsx("li",{children:e.jsx("a",{href:"mailto:hola@turismoruralpe.com",children:"hola@turismoruralpe.com"})})]})]})]}),e.jsxs("div",{className:"footer-bottom",children:[e.jsx("p",{children:"© 2025 Turismo Rural Sostenible. Todos los derechos reservados."}),e.jsxs("ul",{className:"footer-bottom-links",children:[e.jsx("li",{children:e.jsx("a",{href:"#",children:"Privacidad"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"Términos"})})]})]})]})}),e.jsx("a",{href:"https://wa.me/51999000000?text=Hola%2C%20me%20interesa%20el%20turismo%20rural%20sostenible",className:"whatsapp-float",target:"_blank",rel:"noopener noreferrer","aria-label":"Chatea por WhatsApp",children:"📲"})]})}export{t as component};
