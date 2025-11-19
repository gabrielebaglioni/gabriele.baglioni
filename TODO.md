
# TODO - Miglioramenti Sito gabriele-baglioni.com

Questo documento contiene tutte le attività da implementare per migliorare il sito web https://www.gabriele-baglioni.com

---

## 🎨 1. Migliorare la leggibilità della Hero nella pagina Projects

**Pagina**: https://www.gabriele-baglioni.com/projects  
**Problema**: Il testo ("solution", ecc.) non è sufficientemente leggibile a causa della sovrapposizione con l'immagine di sfondo.

**File da modificare**:
- `src/pages/about Me/heroAboutMe.jsx` - Componente Hero principale
- `src/components/HeroText.jsx` - Componente testo Hero
- `src/components/parallaxBackground.jsx` - Background con immagini parallax
- `src/index.css` - Stili globali (se necessario)

### Task List:

- [ ] Analizzare il contrasto attuale del testo rispetto allo sfondo
  - Verificare le classi CSS attuali: `text-white`, `text-neutral-300` in `HeroText.jsx`
  - Testare su diversi dispositivi e condizioni di luce

- [ ] Implementare Soluzione A: Cambiare il colore del testo
  - Opzioni colore da testare:
    - Bianco puro: `text-white` (già presente)
    - Off-white: `text-gray-50` o `text-neutral-50`
    - Azzurro chiaro: `text-cyan-200` o `text-sky-200`
    - Giallo chiaro: `text-yellow-200` (per contrasto con sfondo scuro)
  - Aggiungere `text-shadow` per migliorare la leggibilità:
    ```css
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5);
    ```
  - Verificare contrasto WCAG-AA (minimo 4.5:1 per testo normale, 3:1 per testo grande)

- [ ] Implementare Soluzione B: Applicare overlay trasparente
  - Aggiungere overlay scuro con gradiente in `parallaxBackground.jsx`:
    ```jsx
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0" />
    ```
  - Oppure overlay uniforme:
    ```jsx
    <div className="absolute inset-0 bg-black/50 z-0" />
    ```
  - Posizionare l'overlay tra lo sfondo e il testo (z-index appropriato)

- [ ] Testare entrambe le soluzioni e scegliere la migliore
  - Verificare su mobile e desktop
  - Testare con diversi browser
  - Verificare accessibilità con screen reader

- [ ] Applicare la soluzione scelta e aggiornare il CSS/JSX

**Note tecniche WCAG-AA**:
- Contrasto minimo 4.5:1 per testo normale (< 18pt o < 14pt bold)
- Contrasto minimo 3:1 per testo grande (≥ 18pt o ≥ 14pt bold)
- Usare strumenti: WebAIM Contrast Checker, Chrome DevTools Accessibility panel

**Snippet CSS Overlay**:
```css
/* Overlay gradiente */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 0;
}

/* Text shadow per leggibilità */
.hero-text-shadow {
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.8),
    0 0 8px rgba(0, 0, 0, 0.5),
    0 4px 8px rgba(0, 0, 0, 0.3);
}
```

---

## ⚡ 2. Ottimizzare il caricamento delle immagini in "My Side Projects"

**Problema**: Le immagini vengono caricate solo al primo hover, causando lag ed esperienza poco fluida.

**File da modificare**:
- `src/pages/about Me/MySideProject.jsx` - Componente principale Side Projects
- `src/components/Project.jsx` - Componente singolo progetto
- `index.html` - Per aggiungere preload links (se necessario)

### Task List:

- [ ] Analizzare il comportamento attuale del caricamento immagini
  - Verificare come vengono caricate in `MySideProject.jsx` (riga 18: `onMouseEnter={() => setPreview(image)}`)
  - Le immagini sono in: `/assets/projects/` (crypt-payment.jpg, houseBlock.jpg, tuttorifiuto.jpg, portfolio-3d.jpg)

- [ ] Implementare preload delle immagini
  - Opzione 1: Aggiungere `<link rel="preload">` in `index.html`:
    ```html
    <link rel="preload" as="image" href="/assets/projects/crypt-payment.jpg" />
    <link rel="preload" as="image" href="/assets/projects/houseBlock.jpg" />
    <link rel="preload" as="image" href="/assets/projects/tuttorifiuto.jpg" />
    <link rel="preload" as="image" href="/assets/projects/portfolio-3d.jpg" />
    ```
  - Opzione 2: Preloader JS personalizzato in `MySideProject.jsx`:
    ```jsx
    useEffect(() => {
      const images = myProjects.map(project => project.image);
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }, []);
    ```

- [ ] Implementare caricamento anticipato prima dello scroll
  - Usare Intersection Observer per preload quando la sezione è vicina:
    ```jsx
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Preload images
              myProjects.forEach(project => {
                const img = new Image();
                img.src = project.image;
              });
              observer.disconnect();
            }
          });
        },
        { rootMargin: '200px' } // Preload 200px prima che entri in view
      );
      
      const section = document.querySelector('[data-side-projects]');
      if (section) observer.observe(section);
      
      return () => observer.disconnect();
    }, []);
    ```

- [ ] Verificare che le immagini siano in cache al momento dell'hover
  - Testare con Chrome DevTools Network tab
  - Verificare che le immagini siano caricate prima del primo hover

- [ ] Testare su mobile e desktop
  - Verificare comportamento su dispositivi touch (senza hover)
  - Assicurarsi che il preload non rallenti il caricamento iniziale della pagina

**Note tecniche**:
- Preload solo dopo che le risorse critiche sono caricate
- Considerare `loading="lazy"` per immagini non visibili immediatamente
- Usare `fetchpriority="low"` per immagini non critiche

**Snippet Preloader JS**:
```jsx
// In MySideProject.jsx
import { useEffect } from 'react';
import { myProjects } from './constans/index.js';

const preloadImages = () => {
  myProjects.forEach(project => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = project.image;
    document.head.appendChild(link);
  });
};

// Chiamare dopo che la pagina è caricata
useEffect(() => {
  if (document.readyState === 'complete') {
    preloadImages();
  } else {
    window.addEventListener('load', preloadImages);
    return () => window.removeEventListener('load', preloadImages);
  }
}, []);
```

---

## 🧩 3. Icone Tecnologie nei Side Projects (non nere, versione corrette)

**Problema**: Le icone delle tecnologie mostrate in "Read More" sono nere o non leggibili, non coerenti con i colori brand.

**File da modificare**:
- `src/pages/about Me/constans/index.js` - Dati progetti con tags (righe 16-37, 53-74, 90-111, 127-148)
- `src/components/ProjectDetail.jsx` - Componente che mostra le icone (righe 54-61)
- Creare nuova cartella: `public/assets/tech-icons/`

### Task List:

- [ ] Individuare tutte le tecnologie usate nei side projects
  - Analizzare `src/pages/about Me/constans/index.js`:
    - React, Solidity, Web3, TailwindCSS
    - TypeScript, Microservices, Docker, Next.js
    - Angular, Vercel
    - Three.js, Vite
  - Verificare i path attuali delle icone (alcuni sono errati, es: Solidity usa csharp.svg)

- [ ] Creare cartella per le icone
  - Creare: `public/assets/tech-icons/`
  - Organizzare per tecnologia

- [ ] Scaricare/creare icone ufficiali e leggibili
  - Fonti consigliate:
    - [Simple Icons](https://simpleicons.org/) - Icone SVG ufficiali brand
    - [DevIcon](https://devicon.dev/) - Icone tecnologiche
    - [Iconify](https://iconify.design/) - Collezione icona
  - Requisiti:
    - Formato SVG preferito (scalabile, leggero)
    - PNG come fallback se necessario (min 64x64px, preferibilmente 128x128px)
    - Colori brand originali (non nero)
    - Background trasparente

- [ ] Icone da creare/scaricare:
  - [ ] `react.svg` - React (colore: #61DAFB)
  - [ ] `solidity.svg` - Solidity (colore: #363636 o brand ufficiale)
  - [ ] `web3.svg` - Web3/Ethereum (colore: #627EEA)
  - [ ] `tailwindcss.svg` - Tailwind CSS (colore: #06B6D4)
  - [ ] `typescript.svg` - TypeScript (colore: #3178C6)
  - [ ] `microservices.svg` - Microservices (icona generica o Docker)
  - [ ] `docker.svg` - Docker (colore: #2496ED)
  - [ ] `nextjs.svg` - Next.js (colore: #000000 su bianco o #FFFFFF)
  - [ ] `angular.svg` - Angular (colore: #DD0031)
  - [ ] `vercel.svg` - Vercel (colore: #000000)
  - [ ] `threejs.svg` - Three.js (colore: #000000)
  - [ ] `vite.svg` - Vite (colore: #646CFF)

- [ ] Aggiornare i path delle icone nei componenti
  - Modificare `src/pages/about Me/constans/index.js`:
    - Correggere i path errati (es: Solidity non deve usare csharp.svg)
    - Aggiornare tutti i path a `/assets/tech-icons/[nome-tecnologia].svg`
  - Verificare che `ProjectDetail.jsx` carichi correttamente le icone (riga 57: `src={tag.path}`)

- [ ] Assicurarsi che le icone siano:
  - [ ] Caricate rapidamente (SVG è preferibile)
  - [ ] Visibili in dark/light mode (testare su entrambi)
  - [ ] Coerenti con lo stile generale del sito
  - [ ] Dimensioni appropriate (attualmente `size-10` = 40x40px in `ProjectDetail.jsx`)

**Note tecniche**:
- SVG è preferibile per scalabilità e peso
- Se si usano PNG, ottimizzare con tools come TinyPNG
- Testare contrasto su background scuro (il sito usa dark mode)

**Esempio aggiornamento costanti**:
```javascript
// In src/pages/about Me/constans/index.js
tags: [
  {
    id: 1,
    name: "React",
    path: "/assets/tech-icons/react.svg", // invece di /assets/logos/react.svg
  },
  {
    id: 2,
    name: "Solidity",
    path: "/assets/tech-icons/solidity.svg", // invece di /assets/logos/csharp.svg
  },
  // ... etc
]
```

---

## 📍 4. Sistemare la Timeline nella pagina About

**Problema**: La timeline utilizza icone/colori non coerenti, o immagini con qualità scarsa.

**File da modificare**:
- `src/pages/About.jsx` - Componente Timeline principale (righe 66-114)
- `src/constans/index2.js` - Dati experiences con icone (righe 116-175)
- `src/components/Experience.jsx` - Componente Experience alternativo
- Creare nuova cartella: `public/assets/timeline-icons/`

### Task List:

- [ ] Analizzare le icone attuali della timeline
  - Verificare `src/constans/index2.js`:
    - `meta` (icon) per "Digital Engineering Consultancy"
    - `shopify` (icon) per "Ferragamo"
    - `tesla` (icon) per "Leonardo Telespazio"
    - `starbucks` (icon) per "European University"
  - Verificare dimensioni e qualità attuali (riga 78 in `About.jsx`: `w-[60%] h-[60%]`)

- [ ] Creare cartella per le icone timeline
  - Creare: `public/assets/timeline-icons/`
  - Organizzare per azienda/istituzione

- [ ] Sostituire le icone con versioni ottimizzate
  - [ ] Icona per "Digital Engineering Consultancy"
    - Creare logo aziendale o icona generica "consultancy/engineering"
    - Formato SVG, dimensioni ottimizzate
  - [ ] Icona per "Ferragamo"
    - Logo ufficiale Ferragamo (se disponibile) o icona fashion/luxury
    - Rispettare copyright/trademark
  - [ ] Icona per "Leonardo Telespazio"
    - Logo ufficiale Leonardo o icona aerospace/satellite
    - Rispettare copyright/trademark
  - [ ] Icona per "European University"
    - Icona generica università/education o logo se disponibile

- [ ] Aggiornare i componenti della Timeline
  - Modificare `src/constans/index2.js` per aggiornare i path delle icone
  - Verificare che `About.jsx` e `Experience.jsx` carichino correttamente

- [ ] Migliorare la leggibilità
  - [ ] Aumentare contrasto se necessario
  - [ ] Verificare dimensioni (attualmente 60% del container icon)
  - [ ] Aggiungere spacing appropriato
  - [ ] Testare su diversi background (iconBg varia per experience)

- [ ] Aggiungere effetti hover o micro-animazioni
  - Implementare hover effect leggero in `About.jsx`:
    ```jsx
    <img
      src={experience.icon}
      alt={experience.company_name}
      className='w-[60%] h-[60%] object-contain transition-transform hover:scale-110 duration-200'
    />
    ```
  - Assicurarsi che non rallentino il caricamento

**Note tecniche**:
- SVG preferito per scalabilità
- Dimensioni consigliate: 64x64px o 128x128px per PNG
- Ottimizzare con SVGO per SVG
- Testare su tutti i `iconBg` colors (#383E56, #E6DEDD, #ffd6a5)

**Esempio aggiornamento**:
```javascript
// In src/constans/index2.js
{
  title: "Software Engineer Intern → Junior Developer",
  company_name: "Digital Engineering Consultancy",
  icon: "/assets/timeline-icons/digital-engineering.svg", // invece di meta
  iconBg: "#383E56",
  date: "2021",
  // ...
}
```

---

## 🔧 5. Pulizia generale del codice legata a queste modifiche

### Task List:

- [ ] Rimuovere asset obsoleti
  - [ ] Identificare icone/loghi non più utilizzati in `public/assets/logos/`
  - [ ] Verificare immagini non referenziate nel codice
  - [ ] Rimuovere file duplicati o non utilizzati
  - [ ] Verificare `src/assets/` per file obsoleti

- [ ] Aggiornare import vecchi → nuovi
  - [ ] Cercare tutti gli import che referenziano vecchi path icone
  - [ ] Aggiornare a nuovi path (`/assets/tech-icons/`, `/assets/timeline-icons/`)
  - [ ] Verificare che non ci siano import rotti

- [ ] Verificare Lighthouse per regressioni
  - [ ] Eseguire audit performance
    - Target: Performance score > 90
    - Verificare che preload non rallenti First Contentful Paint
  - [ ] Eseguire audit accessibility
    - Target: Accessibility score > 95
    - Verificare contrasto testo (sezione 1)
    - Verificare alt text su tutte le immagini
  - [ ] Eseguire audit best practices
    - Verificare console errors
    - Verificare uso di formati immagine moderni

- [ ] Ottimizzare immagini
  - [ ] Compressare tutte le immagini
    - Usare tools: TinyPNG, ImageOptim, Squoosh
    - Target: ridurre peso del 30-50% mantenendo qualità
  - [ ] Verificare dimensioni corrette
    - Non servire immagini più grandi del necessario
    - Usare `srcset` per responsive images se necessario
  - [ ] Convertire in formato WEBP dove possibile
    - Creare versioni WEBP di tutte le immagini
    - Mantenere fallback PNG/JPG per browser non supportati
    - Implementare:
      ```jsx
      <picture>
        <source srcSet="/assets/projects/crypt-payment.webp" type="image/webp" />
        <img src="/assets/projects/crypt-payment.jpg" alt="..." />
      </picture>
      ```

- [ ] Verificare struttura cartelle
  - [ ] Assicurarsi che `public/assets/tech-icons/` esista
  - [ ] Assicurarsi che `public/assets/timeline-icons/` esista
  - [ ] Verificare che tutti i path siano corretti e relativi a `public/`

- [ ] Documentare le modifiche
  - [ ] Aggiornare README se necessario
  - [ ] Commentare codice complesso (preloader, overlay, ecc.)

**Note tecniche ottimizzazione immagini**:
- WEBP support: Chrome, Firefox, Edge, Safari 14+
- Fallback necessario per Safari < 14
- Compressione JPEG: qualità 80-85 per web
- Compressione PNG: usare PNG-8 quando possibile (meno colori)

**Snippet conversione WEBP**:
```bash
# Usando cwebp (Google WebP tools)
cwebp -q 80 input.jpg -o output.webp

# Batch conversion script
for file in public/assets/projects/*.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

**Snippet Picture Element**:
```jsx
// In Project.jsx o componenti che usano immagini
<picture>
  <source 
    srcSet={image.replace(/\.(jpg|png)$/, '.webp')} 
    type="image/webp" 
  />
  <img 
    src={image} 
    alt={title}
    className="w-full h-full object-cover rounded-2xl"
    loading="lazy"
  />
</picture>
```

---

## 📋 Checklist Finale

Prima di considerare completato il lavoro:

- [ ] Tutte le sezioni 1-5 sono state implementate
- [ ] Test su Chrome, Firefox, Safari, Edge
- [ ] Test su mobile (iOS Safari, Chrome Android)
- [ ] Lighthouse score: Performance > 90, Accessibility > 95
- [ ] Nessun errore in console
- [ ] Tutte le immagini caricano correttamente
- [ ] Tutti i link/import sono corretti
- [ ] Il sito è deployato e testato su produzione

---

## 📝 Note Aggiuntive

### Struttura File Progetto
```
public/
  assets/
    tech-icons/          # Nuova cartella per icone tecnologie
    timeline-icons/      # Nuova cartella per icone timeline
    projects/           # Immagini progetti (ottimizzare)
    logos/              # Verificare e pulire
    socials/            # Esistente
```

### Tools Consigliati
- **Contrast Checker**: [WebAIM](https://webaim.org/resources/contrastchecker/)
- **Image Optimization**: [Squoosh](https://squoosh.app/), [TinyPNG](https://tinypng.com/)
- **SVG Optimization**: [SVGO](https://github.com/svg/svgo)
- **Lighthouse**: Chrome DevTools
- **Icon Sources**: [Simple Icons](https://simpleicons.org/), [Iconify](https://iconify.design/)

### Priorità Implementazione
1. **Alta**: Sezione 1 (Hero readability) - Impatto UX immediato
2. **Alta**: Sezione 2 (Image preloading) - Performance critica
3. **Media**: Sezione 3 (Tech icons) - Miglioramento visivo
4. **Media**: Sezione 4 (Timeline icons) - Coerenza design
5. **Bassa**: Sezione 5 (Cleanup) - Manutenzione codice

---

**Ultimo aggiornamento**: 2025-01-XX  
**Stato**: In corso

