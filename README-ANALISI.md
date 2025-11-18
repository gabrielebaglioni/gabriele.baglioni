# gabriele.baglioni

## 1. Panoramica del progetto

### Descrizione breve
Portfolio personale interattivo 3D sviluppato come Single Page Application (SPA) che presenta le competenze, esperienze lavorative e progetti di un Software Engineer attraverso un'interfaccia web moderna con elementi grafici tridimensionali interattivi.

### Descrizione estesa
Il progetto è un portfolio personale professionale che risolve il problema di presentare in modo innovativo e coinvolgente le proprie competenze tecniche, esperienze lavorative e progetti personali. A differenza dei portfolio tradizionali basati su layout statici, questo progetto utilizza la grafica 3D interattiva per creare un'esperienza utente immersiva e memorabile.

Il contesto d'uso è quello di un portfolio pubblico accessibile via web, progettato per:
- **Recruiter e aziende**: per valutare le competenze tecniche e l'esperienza del candidato
- **Colleghi e sviluppatori**: per condividere progetti e conoscenze
- **Clienti potenziali**: per dimostrare capacità di sviluppo e design

Il progetto è stato sviluppato come applicazione frontend pura (senza backend dedicato), utilizzando servizi esterni per funzionalità che richiedono elaborazione server-side (come l'invio di email tramite EmailJS). L'applicazione è deployata su Vercel e accessibile pubblicamente.

L'architettura è progettata per essere performante, responsive e accessibile, con particolare attenzione all'ottimizzazione del rendering 3D e alla gestione delle risorse grafiche pesanti (modelli 3D in formato GLB/GLTF).

## 2. Funzionalità principali

- **Homepage interattiva 3D** (`src/pages/Home.jsx`): Scena 3D principale con un'isola interattiva che può essere ruotata tramite mouse/touch, accompagnata da un aereo e un uccello animati. L'isola presenta diversi "stage" che mostrano informazioni contestuali quando ruotata in posizioni specifiche.

- **Sezione About** (`src/pages/About.jsx`, `src/pages/About2.jsx`): Presenta le competenze tecniche (skills), esperienze lavorative in formato timeline verticale, e feedback/testimonianze. Include anche una sezione tecnologie con visualizzazioni interattive.

- **Sezione Progetti/About Me** (`src/pages/about Me/AboutMeWrapper.jsx`): Mostra progetti personali e side projects con layout a griglia, geometrie 3D colorate e animazioni.

- **Form di contatto** (`src/pages/Contact.jsx`): Form di contatto funzionale integrato con EmailJS per l'invio di messaggi. Include un modello 3D animato (volpe) che reagisce agli eventi del form (focus, blur, submit).

- **Navigazione** (`src/components/Navbar.jsx`): Barra di navigazione responsive con routing tra le sezioni, controllo audio di sottofondo e logo.

- **Animazioni e transizioni**: Utilizzo estensivo di animazioni con Framer Motion per transizioni tra pagine e componenti, e GSAP per animazioni più complesse.

- **Responsive design**: Layout adattivo per dispositivi mobile, tablet e desktop, con ottimizzazioni specifiche per il rendering 3D su schermi più piccoli.

- **Gestione stato UI**: Sistema di alert/notifiche per feedback all'utente (successo/errore) implementato tramite hook personalizzato.

## 3. Tecnologie utilizzate (nei minimi dettagli)

### 3.1 Linguaggi e runtime

#### JavaScript (ES6+)
- **Dove viene utilizzato**: Tutto il codice sorgente in `src/` (componenti React, hooks, utilities, costanti)
- **Ruolo nel progetto**: Linguaggio principale per lo sviluppo dell'intera applicazione. Utilizzato per:
  - Componenti React (`.jsx`)
  - Hooks personalizzati (`src/hooks/`)
  - Utility functions (`src/utils/`)
  - Configurazioni e costanti (`src/constans/`)
  - Logica di business e gestione dello stato
- **Caratteristiche utilizzate**: 
  - Moduli ES6 (`import`/`export`)
  - Arrow functions
  - Destructuring
  - Template literals
  - Async/await (per chiamate EmailJS)
  - Hooks di React (useState, useEffect, useRef, useFrame)

#### JSX (JavaScript XML)
- **Dove viene utilizzato**: Tutti i componenti React (`.jsx`)
- **Ruolo nel progetto**: Sintassi estesa di JavaScript per definire la struttura UI dei componenti React. Utilizzato per:
  - Definire la struttura HTML dei componenti
  - Integrare componenti 3D di React Three Fiber
  - Gestire eventi e binding di dati

#### HTML5
- **Dove viene utilizzato**: `index.html` (entry point), e implicitamente nei componenti JSX
- **Ruolo nel progetto**: Struttura base dell'applicazione. Il file `index.html` contiene il root element (`<div id="root">`) dove viene montata l'applicazione React.

#### CSS3
- **Dove viene utilizzato**: `src/index.css` (stili globali e utility classes), e tramite Tailwind CSS in tutti i componenti
- **Ruolo nel progetto**: 
  - Stili globali e reset CSS
  - Animazioni CSS personalizzate (keyframes per loader, gradient animations)
  - Utility classes custom integrate con Tailwind
  - Stili per componenti 3D (canvas loader)

### 3.2 Framework e librerie principali

#### React 18.2.0
- **Dove viene utilizzato**: Tutto il progetto (`src/`)
- **Ruolo nel progetto**: Framework principale per la costruzione dell'interfaccia utente. Utilizzato per:
  - Creazione di componenti riutilizzabili e modulari
  - Gestione dello stato locale dei componenti (useState)
  - Gestione del ciclo di vita (useEffect)
  - Creazione di hook personalizzati (`useAlert`)
- **Pattern utilizzati**:
  - **Component-based architecture**: Ogni funzionalità è incapsulata in componenti riutilizzabili
  - **Composition over inheritance**: Componenti composti insieme per creare UI complesse
  - **Hooks pattern**: Utilizzo di hooks per gestire stato e side effects
  - **Controlled components**: Form controllati tramite stato React
  - **Lazy loading**: Utilizzo di `Suspense` per il caricamento asincrono dei modelli 3D

#### React DOM 18.2.0
- **Dove viene utilizzato**: `src/main.jsx` (entry point)
- **Ruolo nel progetto**: Libreria per il rendering di componenti React nel DOM. Utilizzato in `main.jsx` per montare l'applicazione nel root element.

#### React Router DOM 6.17.0
- **Dove viene utilizzato**: `src/App.jsx` (routing principale), componenti di navigazione
- **Ruolo nel progetto**: Gestione del routing client-side per la navigazione tra le diverse sezioni del portfolio.
- **Pattern utilizzati**:
  - **Client-side routing**: Navigazione senza ricaricamento della pagina
  - **Nested routes**: Route annidate per gestire la struttura `/about`, `/projects`, `/contact`
  - **Programmatic navigation**: Utilizzo di `Link` e `NavLink` per navigazione dichiarativa
  - **Location-based styling**: Utilizzo di `useLocation` per applicare stili diversi in base alla route corrente
- **Route principali**:
  - `/` → `Home` component
  - `/about` → `About2` component
  - `/projects` → `AboutMeWrapper` component
  - `/contact` → `Contact` component

#### Vite 6.3.5
- **Dove viene utilizzato**: Tool di build e sviluppo (configurato in `vite.config.js`)
- **Ruolo nel progetto**: 
  - **Build tool**: Compilazione e bundling del codice per produzione
  - **Dev server**: Server di sviluppo con Hot Module Replacement (HMR) per sviluppo rapido
  - **Asset handling**: Gestione di asset statici (immagini, modelli 3D, audio)
- **Configurazione** (`vite.config.js`):
  - Plugin React per supporto JSX
  - Configurazione per includere file `.glb`, `.hdr`, `.ogg` come asset

#### Three.js 0.173.0
- **Dove viene utilizzato**: Componenti 3D in `src/components/canvas/`, `src/models/`, `src/pages/Home.jsx`, `src/pages/Contact.jsx`
- **Ruolo nel progetto**: Libreria JavaScript per rendering 3D nel browser. Utilizzato per:
  - Rendering di scene 3D
  - Caricamento e rendering di modelli 3D (GLB/GLTF)
  - Gestione di luci, camere e materiali
  - Calcoli matematici 3D (geometrie, trasformazioni)
- **Utilizzo specifico**:
  - Import diretto in `src/components/canvas/Computers.jsx` per gestione color space (`THREE.SRGBColorSpace`)
  - Utilizzato indirettamente tramite React Three Fiber per la maggior parte delle operazioni

#### React Three Fiber 8.14.5
- **Dove viene utilizzato**: Componenti 3D in `src/components/canvas/`, `src/models/`, `src/pages/Home.jsx`, `src/pages/Contact.jsx`, `src/pages/about Me/heroAboutMe.jsx`
- **Ruolo nel progetto**: Renderer React per Three.js che permette di utilizzare Three.js in modo dichiarativo con JSX.
- **Pattern utilizzati**:
  - **Declarative 3D**: Definizione di scene 3D tramite JSX invece di API imperative
  - **Component composition**: Composizione di elementi 3D come componenti React
  - **Hooks integration**: Utilizzo di hooks React (`useFrame`, `useThree`) per logica 3D
- **Componenti principali utilizzati**:
  - `<Canvas>`: Container principale per scene 3D
  - `<mesh>`, `<primitive>`, `<group>`: Elementi 3D base
  - `<directionalLight>`, `<ambientLight>`, `<pointLight>`, `<spotLight>`, `<hemisphereLight>`: Illuminazione
  - `<Suspense>`: Per caricamento asincrono di modelli 3D
- **Hooks utilizzati**:
  - `useFrame`: Per animazioni frame-by-frame (es. rotazione isola, movimento uccello)
  - `useThree`: Per accesso a renderer, camera, viewport (es. `Island.jsx`)

#### React Three Drei 9.88.2
- **Dove viene utilizzato**: Componenti 3D in `src/components/canvas/`, `src/models/`, `src/pages/`
- **Ruolo nel progetto**: Libreria di helper e componenti aggiuntivi per React Three Fiber.
- **Componenti e hooks utilizzati**:
  - `useGLTF`: Per caricamento modelli GLTF/GLB (utilizzato in tutti i modelli 3D)
  - `useAnimations`: Per gestione animazioni da modelli GLTF (es. `Fox.jsx`, `Plane.jsx`, `Bird.jsx`)
  - `OrbitControls`: Per controlli camera interattivi (es. `ComputersCanvas`)
  - `Preload`: Per pre-caricamento modelli 3D
  - `Float`: Per effetti di fluttuazione (es. `Geometry.jsx`, `heroAboutMe.jsx`)
  - `ContactShadows`, `Environment`: Per rendering avanzato (es. `Shapes.jsx`)
  - `PerspectiveCamera`: Per configurazione camera personalizzata

#### Framer Motion 9.0.7
- **Dove viene utilizzato**: `src/components/Hero.jsx`, `src/pages/about Me/MySideProject.jsx`, vari componenti per animazioni
- **Ruolo nel progetto**: Libreria per animazioni fluide e gesti.
- **Pattern utilizzati**:
  - **Declarative animations**: Animazioni definite tramite props
  - **Variants**: Sistema di varianti per animazioni complesse
  - **Motion components**: Componenti animati (`motion.div`)
- **Utilizzo specifico**:
  - Animazione scroll indicator in `Hero.jsx` (animazione infinita su asse Y)
  - Animazioni di hover e transizione in vari componenti
  - Integrazione con `motion/react` (versione più recente) in `MySideProject.jsx`

#### Motion 12.16.0
- **Dove viene utilizzato**: `src/pages/about Me/MySideProject.jsx`
- **Ruolo nel progetto**: Versione più recente/moderna di Framer Motion. Utilizzato per animazioni avanzate con `useMotionValue` e `useSpring` per effetti di parallax e interattività.

#### GSAP 3.13.0
- **Dove viene utilizzato**: `src/pages/geometrySection/Geometry.jsx`, `src/pages/geometrySection/ColorfulGeometry.jsx`
- **Ruolo nel progetto**: Libreria per animazioni avanzate e timeline complesse.
- **Pattern utilizzati**:
  - **Timeline animations**: Sequenze di animazioni coordinate
  - **Scroll-triggered animations**: Animazioni attivate dallo scroll
- **Utilizzo specifico**:
  - Animazioni di geometrie 3D interattive
  - Gestione di suoni sincronizzati con animazioni (hit sounds in `Geometry.jsx`)

#### @gsap/react 2.1.2
- **Dove viene utilizzato**: `src/pages/geometrySection/ColorfulGeometry.jsx`
- **Ruolo nel progetto**: Plugin React per GSAP che fornisce hook `useGSAP` per integrazione ottimale con React lifecycle.

#### @react-spring/three 9.7.3
- **Dove viene utilizzato**: `src/models/Island.jsx`
- **Ruolo nel progetto**: Libreria di animazioni fisiche per React Three Fiber.
- **Utilizzo specifico**:
  - Componente `<a.group>` (animated group) per animazioni fluide dell'isola
  - Integrazione con React Spring per animazioni basate su fisica

#### React Vertical Timeline Component 3.6.0
- **Dove viene utilizzato**: `src/pages/About.jsx`
- **Ruolo nel progetto**: Componente React per visualizzare timeline verticali.
- **Utilizzo specifico**: Visualizzazione delle esperienze lavorative in formato timeline con icone, date e descrizioni.

#### React Tilt 0.1.4
- **Dove viene utilizzato**: Probabilmente in componenti di card/progetti
- **Ruolo nel progetto**: Effetto 3D tilt su hover per elementi UI.

#### React Responsive 10.0.1
- **Dove viene utilizzato**: `src/pages/about Me/heroAboutMe.jsx`
- **Ruolo nel progetto**: Hook per rilevare dimensioni schermo e dispositivi.
- **Utilizzo specifico**: `useMediaQuery` per adattare layout e componenti 3D in base alle dimensioni dello schermo.

#### Tailwind CSS 3.3.3
- **Dove viene utilizzato**: Tutto il progetto (classi utility in tutti i componenti JSX)
- **Ruolo nel progetto**: Framework CSS utility-first per styling rapido e consistente.
- **Pattern utilizzati**:
  - **Utility-first**: Stili applicati tramite classi utility invece di CSS custom
  - **Responsive design**: Breakpoints (`sm:`, `md:`, `lg:`) per design responsive
  - **Custom utilities**: Estensioni personalizzate in `tailwind.config.js` e `index.css`
- **Configurazione** (`tailwind.config.js`):
  - Colori personalizzati (primary, secondary, tertiary, black-100, black-200, white-100, blue-500, orange-500)
  - Breakpoint custom (`xs: 450px`)
  - Background images personalizzati
  - Font families (Work Sans, Poppins)
  - Box shadows personalizzati
- **Utility classes custom** (`src/index.css`):
  - `.max-container`: Container principale con padding responsive
  - `.head-text`, `.subhead-text`: Tipografia per titoli
  - `.blue-gradient_text`: Testo con gradiente blu
  - `.input`, `.textarea`, `.btn`: Stili per form elements
  - `.header`, `.footer`: Layout per header e footer
  - `.info-box`, `.neo-btn`: Stili per info box e bottoni neo-brutalism
  - `.cta`: Stili per call-to-action sections
  - `.neo-brutalism-blue`, `.neo-brutalism-white`: Stili neo-brutalism con ombre multiple
  - `.block-container`, `.btn-back`, `.btn-front`: Effetti 3D per card
  - `.animated-bg`: Background animato con gradiente

#### Tailwind Merge 3.3.0
- **Dove viene utilizzato**: Probabilmente in utility functions o componenti complessi
- **Ruolo nel progetto**: Utility per unire classi Tailwind in modo intelligente, evitando conflitti.

#### PostCSS 8.4.31
- **Dove viene utilizzato**: Processamento CSS (configurato in `postcss.config.js`)
- **Ruolo nel progetto**: Tool per trasformare CSS con plugin.
- **Plugin utilizzati**:
  - `tailwindcss`: Processamento di classi Tailwind
  - `autoprefixer`: Aggiunta automatica di vendor prefixes

#### Autoprefixer 10.4.16
- **Dove viene utilizzato**: Processamento CSS tramite PostCSS
- **Ruolo nel progetto**: Aggiunge automaticamente vendor prefixes CSS per compatibilità cross-browser.

#### EmailJS Browser 3.11.0
- **Dove viene utilizzato**: `src/pages/Contact.jsx`
- **Ruolo nel progetto**: Servizio esterno per invio email direttamente dal frontend senza backend.
- **Utilizzo specifico**:
  - Invio di email tramite template EmailJS
  - Configurazione tramite variabili d'ambiente (`VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`, `VITE_APP_EMAILJS_PUBLIC_KEY`)
  - Gestione di successo/errore con feedback all'utente

#### Maath 0.5.2
- **Dove viene utilizzato**: `src/pages/about Me/heroAboutMe.jsx`
- **Ruolo nel progetto**: Libreria di utility matematiche per animazioni 3D.
- **Utilizzo specifico**: Funzione `easing` per animazioni fluide di easing.

#### Cobe 0.6.4
- **Dove viene utilizzato**: Probabilmente in componenti canvas per effetti globo/particelle
- **Ruolo nel progetto**: Libreria per creare globi interattivi 3D con particelle.

### 3.3 Database e persistenza

**Nessun database o sistema di persistenza locale è utilizzato nel progetto.**

Il progetto è una Single Page Application puramente frontend che:
- Non richiede autenticazione utente
- Non memorizza dati persistenti lato client (non utilizza localStorage, sessionStorage, IndexedDB)
- Utilizza servizi esterni (EmailJS) per funzionalità che richiedono elaborazione server-side
- I dati statici (skills, esperienze, progetti) sono hardcoded in file JavaScript (`src/constans/index.js`)

### 3.4 Infrastruttura, DevOps e strumenti

#### Vite (Build Tool)
- **File di configurazione**: `vite.config.js`
- **Ruolo nel progetto**: 
  - **Development server**: Server di sviluppo con HMR
  - **Build tool**: Compilazione e ottimizzazione per produzione
  - **Asset pipeline**: Gestione di asset statici (immagini, modelli 3D, audio)
- **Configurazione**:
  - Plugin React (`@vitejs/plugin-react`)
  - Supporto per file `.glb`, `.hdr`, `.ogg` come asset

#### ESLint 8.45.0
- **File di configurazione**: `eslint.config.js`
- **Ruolo nel progetto**: Linter JavaScript/JSX per mantenere qualità e consistenza del codice.
- **Configurazione**:
  - Plugin React (`eslint-plugin-react`)
  - Plugin React Hooks (`eslint-plugin-react-hooks`)
  - Plugin React Refresh (`eslint-plugin-react-refresh`)
  - Regole personalizzate:
    - `no-unused-vars` con eccezione per variabili che iniziano con maiuscola
    - `react-refresh/only-export-components`: Warning per export non-componenti
- **Script**: `npm run lint` per eseguire il linter

#### Vercel (Deployment Platform)
- **File di configurazione**: `vercel.json`
- **Ruolo nel progetto**: Piattaforma di hosting e deployment.
- **Configurazione**:
  - Rewrite rules per SPA: tutte le route (`/(.*)`) vengono reindirizzate a `/` per supportare client-side routing
  - Deploy automatico da repository Git

#### Git (Version Control)
- **Ruolo nel progetto**: Sistema di controllo versione per gestione del codice sorgente.
- **File ignorati** (presumibilmente in `.gitignore`):
  - `node_modules/`
  - `dist/` (build output)
  - File di ambiente (`.env`)

#### npm (Package Manager)
- **File di configurazione**: `package.json`, `package-lock.json`
- **Ruolo nel progetto**: Gestione dipendenze e script del progetto.
- **Script disponibili**:
  - `npm run dev`: Avvia server di sviluppo
  - `npm run build`: Crea build di produzione
  - `npm run preview`: Preview della build di produzione
  - `npm run lint`: Esegue ESLint

## 4. Architettura del progetto (nei minimi dettagli)

### 4.1 Visione ad alto livello

L'architettura del progetto è quella di una **Single Page Application (SPA) frontend-only** con le seguenti caratteristiche:

- **Pattern architetturale**: Component-based architecture con separazione delle responsabilità
- **Rendering**: Client-side rendering (CSR) - tutto il rendering avviene nel browser
- **Routing**: Client-side routing tramite React Router (nessun server-side routing)
- **State management**: Stato locale ai componenti (React hooks) - non utilizza state management globale (Redux, Zustand, ecc.)
- **Comunicazione con servizi esterni**: 
  - EmailJS per invio email (API REST esterna)
  - Nessuna comunicazione con backend proprio

**Blocchi principali**:
1. **Entry Point** (`src/main.jsx`): Monta l'applicazione React nel DOM
2. **App Root** (`src/App.jsx`): Configura routing e layout principale
3. **Pages** (`src/pages/`): Componenti di pagina principali (Home, About, Contact, Projects)
4. **Components** (`src/components/`): Componenti riutilizzabili (UI, 3D, layout)
5. **3D Models** (`src/models/`): Componenti React Three Fiber per modelli 3D
6. **Utilities** (`src/utils/`, `src/hooks/`): Funzioni helper e hook personalizzati
7. **Constants** (`src/constans/`): Dati statici (skills, esperienze, progetti)
8. **Assets** (`src/assets/`, `public/`): Risorse statiche (immagini, modelli 3D, audio)

**Flusso di comunicazione**:
```
Browser → React App → React Router → Page Component → Child Components
                                                          ↓
                                                   3D Canvas (Three.js)
                                                          ↓
                                                   EmailJS API (solo Contact)
```

### 4.2 Struttura delle cartelle

```
/
├── public/                          # Asset pubblici serviti staticamente
│   ├── assets/                      # Immagini, SVG, modelli 3D pubblici
│   │   ├── logos/                   # Loghi tecnologie
│   │   ├── projects/                # Immagini progetti
│   │   └── socials/                 # Icone social media
│   ├── desktop_pc/                  # Modello 3D PC desktop (GLTF)
│   ├── models/                      # Altri modelli 3D
│   └── planet/                      # Modello 3D pianeta
│
├── src/                             # Codice sorgente principale
│   ├── assets/                      # Asset importati nel codice
│   │   ├── 3d/                      # Modelli 3D (GLB) per React Three Fiber
│   │   │   ├── bird.glb
│   │   │   ├── fox.glb
│   │   │   ├── island.glb
│   │   │   ├── plane.glb
│   │   │   └── sky.glb
│   │   ├── icons/                   # Icone SVG
│   │   ├── images/                  # Immagini
│   │   ├── static/                  # Asset statici (HDR, suoni)
│   │   └── tech/                    # Immagini tecnologie
│   │
│   ├── components/                  # Componenti React riutilizzabili
│   │   ├── canvas/                  # Componenti canvas 3D
│   │   │   ├── Ball.jsx             # Sfera 3D interattiva
│   │   │   ├── Computers.jsx        # Modello PC 3D
│   │   │   ├── Earth.jsx            # Globo terrestre 3D
│   │   │   ├── Stars.jsx            # Stelle animate
│   │   │   └── index.js             # Export barrel
│   │   ├── About.jsx                # Componente sezione About
│   │   ├── Alert.jsx                # Componente notifica/alert
│   │   ├── AndroidError.jsx         # Messaggio errore per Android
│   │   ├── Astronaut.jsx            # Modello astronauta 3D
│   │   ├── Card.jsx                 # Componente card generico
│   │   ├── Contact.jsx              # Componente sezione contatto
│   │   ├── CopyEmailButton.jsx      # Bottone copia email
│   │   ├── CTA.jsx                  # Call-to-action component
│   │   ├── Experience.jsx           # Componente esperienze
│   │   ├── Feedbacks.jsx            # Componente feedback/testimonianze
│   │   ├── FlipWords.jsx            # Componente testo animato
│   │   ├── Footer.jsx               # Footer
│   │   ├── Globe.jsx                # Globo interattivo
│   │   ├── Hero.jsx                 # Hero section
│   │   ├── HeroText.jsx             # Testo hero animato
│   │   ├── HomeInfo.jsx             # Info box per homepage 3D
│   │   ├── IconCloud.tsx            # Nuvola di icone (TypeScript)
│   │   ├── IconCloudDemo.jsx        # Demo icon cloud
│   │   ├── Loader.jsx               # Loader generico
│   │   ├── Loader2.jsx              # Loader per canvas 3D
│   │   ├── Navbar.jsx               # Barra di navigazione
│   │   ├── OrbitingCircles.jsx      # Cerchi orbitanti
│   │   ├── parallaxBackground.jsx    # Background parallax
│   │   ├── Project.jsx              # Componente progetto singolo
│   │   ├── ProjectDetail.jsx        # Dettaglio progetto
│   │   ├── Tech.jsx                 # Componente tecnologie
│   │   ├── Works.jsx                 # Componente lavori/progetti
│   │   ├── index.js                 # Export barrel principale
│   │   └── index2.js                # Export barrel secondario
│   │
│   ├── constans/                    # Dati statici e costanti
│   │   ├── index.js                 # Skills, esperienze, progetti, social links
│   │   └── index2.js                # Costanti aggiuntive
│   │
│   ├── hoc/                         # Higher-Order Components
│   │   ├── index.js                 # Export barrel
│   │   └── SectionWrapper.jsx       # Wrapper per sezioni
│   │
│   ├── hooks/                       # Custom React hooks
│   │   └── useAlert.js              # Hook per gestione alert/notifiche
│   │
│   ├── models/                      # Componenti modelli 3D
│   │   ├── Bird.jsx                 # Modello uccello animato
│   │   ├── Fox.jsx                  # Modello volpe con animazioni
│   │   ├── Island.jsx               # Modello isola interattiva
│   │   ├── Plane.jsx                # Modello aereo animato
│   │   ├── Sky.jsx                  # Modello cielo/sfondo
│   │   └── index.js                 # Export barrel
│   │
│   ├── pages/                       # Componenti pagina (route)
│   │   ├── about Me/                # Sezione "About Me"
│   │   │   ├── AboutMeWrapper.jsx   # Wrapper principale
│   │   │   ├── constans/            # Costanti specifiche
│   │   │   ├── GridLayout.jsx       # Layout a griglia progetti
│   │   │   ├── heroAboutMe.jsx      # Hero section About Me
│   │   │   └── MySideProject.jsx    # Side projects
│   │   ├── geometrySection/         # Sezione geometrie 3D
│   │   │   ├── ColorfulGeometry.jsx # Geometrie colorate
│   │   │   ├── Geometry.jsx         # Geometrie interattive
│   │   │   ├── Scene.jsx            # Scena 3D
│   │   │   ├── Shapes.jsx           # Forme 3D
│   │   │   └── index.js             # Export barrel
│   │   ├── About.jsx                # Pagina About (timeline)
│   │   ├── About2.jsx               # Pagina About alternativa (con Hero)
│   │   ├── Contact.jsx               # Pagina contatto
│   │   ├── Home.jsx                  # Homepage con scena 3D
│   │   └── index.js                  # Export barrel
│   │
│   ├── utils/                       # Funzioni utility
│   │   └── motion.js                # Varianti animazioni Framer Motion
│   │
│   ├── App.jsx                       # Componente root con routing
│   ├── main.jsx                      # Entry point applicazione
│   ├── index.css                     # Stili globali e Tailwind
│   └── styles.js                     # Oggetto stili JavaScript
│
├── .gitignore                        # File ignorati da Git
├── eslint.config.js                  # Configurazione ESLint
├── index.html                        # HTML entry point
├── package.json                      # Dipendenze e script
├── package-lock.json                 # Lock file dipendenze
├── postcss.config.js                 # Configurazione PostCSS
├── tailwind.config.js                # Configurazione Tailwind CSS
├── vercel.json                       # Configurazione Vercel
└── vite.config.js                    # Configurazione Vite
```

**Ruolo delle cartelle principali**:

- **`src/pages/`**: Contiene i componenti di pagina principali che corrispondono alle route dell'applicazione. Ogni pagina può contenere più sezioni e componenti figli.

- **`src/components/`**: Componenti riutilizzabili utilizzati in più pagine. Include sia componenti UI tradizionali che componenti canvas 3D.

- **`src/models/`**: Componenti React Three Fiber che rappresentano modelli 3D caricati da file GLB/GLTF. Ogni modello è un componente React che gestisce il proprio rendering e animazioni.

- **`src/components/canvas/`**: Componenti canvas 3D più complessi che includono scene complete con controlli, luci e modelli multipli.

- **`src/constans/`**: Dati statici strutturati (array di oggetti) per skills, esperienze, progetti. Questi dati sono importati e utilizzati dai componenti per il rendering.

- **`src/utils/`**: Funzioni pure e utility riutilizzabili, come varianti di animazione per Framer Motion.

- **`src/hooks/`**: Custom hooks React per logica riutilizzabile (es. gestione alert).

- **`src/assets/`**: Asset importati direttamente nel codice JavaScript (modelli 3D, immagini, icone). Vite gestisce questi asset durante il build.

- **`public/`**: Asset serviti staticamente senza elaborazione, accessibili tramite URL assoluti.

### 4.3 Dettagli architetturali lato backend

**Non presente**: Il progetto non ha backend. È una SPA puramente frontend.

**Servizi esterni utilizzati**:
- **EmailJS**: Servizio esterno per invio email. La comunicazione avviene tramite API REST di EmailJS direttamente dal browser (non richiede backend proprio).

### 4.4 Dettagli architetturali lato frontend

#### Principali pagine/route

1. **Home (`/`)** - `src/pages/Home.jsx`
   - **Scopo**: Pagina principale con scena 3D interattiva
   - **Componenti principali**:
     - `<Canvas>`: Container React Three Fiber per scena 3D
     - `<Island>`: Isola 3D interattiva (rotazione mouse/touch)
     - `<Plane>`: Aereo 3D animato
     - `<Bird>`: Uccello 3D animato che vola
     - `<Sky>`: Sfondo cielo 3D
     - `<HomeInfo>`: Info box che cambia in base alla rotazione dell'isola
   - **Stato locale**: `currentStage`, `isRotating`
   - **Interattività**: Rotazione isola tramite mouse/touch/keyboard, cambio stage in base all'orientamento

2. **About (`/about`)** - `src/pages/About2.jsx`
   - **Scopo**: Presentazione competenze, esperienze e tecnologie
   - **Componenti principali**:
     - `<Hero>`: Hero section con modello PC 3D
     - `<About>`: Sezione skills e descrizione
     - `<Experience>`: Timeline esperienze lavorative
     - `<Tech>`: Visualizzazione tecnologie
     - `<Contact>`: Mini sezione contatto
     - `<StarsCanvas>`: Stelle animate di sfondo
     - `<CTA>`: Call-to-action
   - **Layout**: Scroll verticale con sezioni sovrapposte

3. **Projects/About Me (`/projects`)** - `src/pages/about Me/AboutMeWrapper.jsx`
   - **Scopo**: Mostra progetti personali e informazioni personali
   - **Componenti principali**:
     - `<ParallaxBackground>`: Background con effetto parallax
     - `<HeroAboutMe>`: Hero section con astronauta 3D
     - `<GridLayout>`: Layout a griglia per progetti
     - `<ColorfulGeometry>`: Geometrie 3D colorate interattive
     - `<MySideProject>`: Side projects con animazioni
     - `<CTA>`: Call-to-action
   - **Layout**: Grid layout responsive con card progetti

4. **Contact (`/contact`)** - `src/pages/Contact.jsx`
   - **Scopo**: Form di contatto funzionale
   - **Componenti principali**:
     - Form HTML con campi: name, email, message
     - `<Fox>`: Modello 3D volpe che reagisce agli eventi form
     - `<Alert>`: Notifiche successo/errore
     - `<Loader>`: Loader durante invio
   - **Funzionalità**:
     - Validazione form lato client
     - Invio email tramite EmailJS
     - Animazioni volpe in base a focus/blur/submit
     - Feedback utente tramite alert

#### Organizzazione dei componenti

Il progetto utilizza una **component-based architecture** con separazione tra:

- **Container Components** (Smart Components):
  - Gestiscono stato e logica
  - Esempi: `Home.jsx`, `Contact.jsx`, `AboutMeWrapper.jsx`
  - Utilizzano hooks (`useState`, `useEffect`) per gestione stato e side effects

- **Presentational Components** (Dumb Components):
  - Ricevono props e renderizzano UI
  - Esempi: `Alert.jsx`, `CTA.jsx`, `HomeInfo.jsx`, `Card.jsx`
  - Poca o nessuna logica, focus su rendering

- **3D Components**:
  - Componenti specializzati per rendering 3D
  - Utilizzano React Three Fiber
  - Esempi: `Island.jsx`, `Fox.jsx`, `Bird.jsx`, `Computers.jsx`
  - Gestiscono proprie animazioni e interattività

- **Layout Components**:
  - Componenti per struttura pagina
  - Esempi: `Navbar.jsx`, `Footer.jsx`

**Pattern di composizione**:
- **Composition**: Componenti composti insieme (es. `About2.jsx` compone `Hero`, `About`, `Experience`, ecc.)
- **Barrel Exports**: File `index.js` per export centralizzati (`src/components/index.js`, `src/pages/index.js`)
- **Props Drilling**: Passaggio di props attraverso componenti (limitato, principalmente per stato locale)

#### Gestione dello stato

Il progetto **non utilizza state management globale** (Redux, Zustand, Context API globale). Lo stato è gestito a livello locale dei componenti:

- **useState**: Per stato locale componenti
  - Esempi: `Home.jsx` (currentStage, isRotating), `Contact.jsx` (form, loading, currentAnimation), `Navbar.jsx` (isPlayingMusic)

- **useRef**: Per riferimenti DOM e valori mutabili senza re-render
  - Esempi: `Contact.jsx` (formRef), `Island.jsx` (islandRef, lastX, rotationSpeed), modelli 3D (ref per mesh)

- **Custom Hooks**: Per logica riutilizzabile
  - `useAlert`: Gestione stato alert/notifiche (`src/hooks/useAlert.js`)
  - Pattern: Hook ritorna stato e funzioni per modificarlo

- **Props**: Per comunicazione parent-child
  - Passaggio di callback functions per comunicazione child-to-parent
  - Esempi: `setIsRotating`, `setCurrentStage` passati da `Home` a `Island`

**Nessun Context API globale**: Non ci sono Context providers per stato condiviso tra componenti distanti.

#### Gestione di chiamate HTTP verso API esterne

- **EmailJS** (`src/pages/Contact.jsx`):
  - Chiamata API tramite `emailjs.send()`
  - Configurazione tramite variabili d'ambiente (`import.meta.env.VITE_APP_EMAILJS_*`)
  - Gestione asincrona con `.then()` per successo/errore
  - Feedback utente tramite alert component

**Nessuna altra chiamata HTTP**: Il progetto non comunica con altre API esterne.

### 4.5 Flussi di dati e comunicazione

#### Flusso di autenticazione e autorizzazione

**Non presente**: Il progetto non ha sistema di autenticazione o autorizzazione. È un portfolio pubblico accessibile a tutti.

#### Flusso di creazione/lettura/aggiornamento/eliminazione di risorse

**Non presente**: Il progetto non gestisce CRUD operations. I dati sono statici (hardcoded in `src/constans/index.js`).

**Dati statici**:
- Skills: Array di oggetti in `src/constans/index.js`
- Esperienze: Array di oggetti in `src/constans/index.js`
- Progetti: Array di oggetti in `src/constans/index.js` e `src/pages/about Me/constans/index.js`

#### Flusso di invio email (Contact Form)

```
1. Utente compila form (Contact.jsx)
   ↓
2. handleChange aggiorna stato locale (form state)
   ↓
3. Utente clicca "Submit"
   ↓
4. handleSubmit:
   - Previene default (e.preventDefault())
   - Imposta loading = true
   - Cambia animazione volpe a "hit"
   ↓
5. emailjs.send() chiama API EmailJS
   ↓
6a. Successo:
   - loading = false
   - Mostra alert successo
   - Reset form dopo 3 secondi
   - Animazione volpe torna a "idle"
   ↓
6b. Errore:
   - loading = false
   - Mostra alert errore
   - Animazione volpe torna a "idle"
```

#### Flusso di interazione 3D (Homepage Island)

```
1. Utente interagisce con canvas (mouse/touch/keyboard)
   ↓
2. Event listeners su canvas (Island.jsx):
   - pointerdown/touchstart → setIsRotating(true)
   - pointermove/touchmove → Calcola delta movimento
   - Aggiorna rotation.y dell'isola
   - Aggiorna rotationSpeed
   ↓
3. useFrame hook (ogni frame):
   - Se isRotating: calcola currentStage in base a rotation.y
   - Se non isRotating: applica damping a rotationSpeed
   ↓
4. currentStage cambia → HomeInfo mostra contenuto diverso
   ↓
5. Utente rilascia → setIsRotating(false) → damping applicato
```

#### Flusso di navigazione (Routing)

```
1. Utente clicca link in Navbar
   ↓
2. React Router gestisce navigazione client-side
   ↓
3. Route match → Renderizza componente pagina corrispondente
   ↓
4. Componente pagina monta → Carica componenti figli
   ↓
5. Componenti 3D: Suspense → Carica modelli GLB → Renderizza
```

#### Flusso di caricamento modelli 3D

```
1. Componente con modello 3D monta (es. Home.jsx)
   ↓
2. <Suspense> mostra Loader durante caricamento
   ↓
3. useGLTF hook carica file GLB/GLTF
   ↓
4. Modello caricato → useAnimations estrae animazioni
   ↓
5. Componente 3D renderizza mesh/materiali
   ↓
6. useFrame/useEffect gestiscono animazioni
```

## 5. Qualità del codice, testing e strumenti di supporto

### Testing

**Nessun framework di testing configurato**: Il progetto non include test automatizzati (unit test, integration test, end-to-end test). Non sono presenti:
- Jest, Vitest, o altri test runner
- React Testing Library
- Cypress o Playwright per E2E
- File di test (`*.test.js`, `*.spec.js`)

**Raccomandazioni per testing** (non implementate):
- Unit test per utility functions (`src/utils/motion.js`)
- Unit test per custom hooks (`src/hooks/useAlert.js`)
- Component test per componenti presentazionali
- Integration test per flussi utente (es. form contatto)
- Snapshot test per componenti UI

### Linting

**ESLint 8.45.0** configurato in `eslint.config.js`:
- **Plugin utilizzati**:
  - `eslint-plugin-react`: Regole per React
  - `eslint-plugin-react-hooks`: Regole per React Hooks
  - `eslint-plugin-react-refresh`: Regole per React Fast Refresh
- **Regole principali**:
  - `no-unused-vars`: Error per variabili non utilizzate (eccetto quelle che iniziano con maiuscola)
  - `react-refresh/only-export-components`: Warning per export non-componenti
  - Regole recommended di ESLint e React Hooks
- **Script**: `npm run lint` per eseguire linting
- **Configurazione**: Flat config (nuovo formato ESLint 9+)

### Formattazione automatica

**Non configurato**: Il progetto non include:
- Prettier per formattazione automatica
- EditorConfig per consistenza editor
- Formattazione automatica in pre-commit hooks

### Pre-commit hooks

**Non configurato**: Il progetto non include:
- Husky per Git hooks
- lint-staged per linting file staged
- Pre-commit hooks automatici

### Convenzioni di naming

**Convenzioni osservate nel codice**:
- **Componenti**: PascalCase (es. `Home.jsx`, `Contact.jsx`, `Island.jsx`)
- **File componenti**: PascalCase con estensione `.jsx`
- **Hooks custom**: camelCase con prefisso "use" (es. `useAlert.js`)
- **Utility functions**: camelCase (es. `textVariant`, `fadeIn` in `motion.js`)
- **Costanti**: camelCase per variabili (es. `skills`, `experiences`), UPPER_SNAKE_CASE non utilizzato
- **Cartelle**: camelCase o kebab-case (es. `about Me/`, `geometrySection/`)

**Inconsistenze osservate**:
- Cartella `about Me/` con spazio (non standard, potrebbe causare problemi)
- Mix di camelCase e kebab-case per nomi cartelle

### Pattern ricorrenti

1. **Export Barrel Pattern**: File `index.js` per export centralizzati
   - `src/components/index.js`, `src/components/index2.js`
   - `src/pages/index.js`
   - `src/models/index.js`

2. **Custom Hooks Pattern**: Logica riutilizzabile incapsulata in hooks
   - `useAlert`: Gestione stato alert

3. **Suspense Pattern**: Caricamento asincrono modelli 3D
   - Utilizzato in tutti i componenti con modelli 3D
   - Fallback con Loader component

4. **Controlled Components Pattern**: Form controllati da React state
   - `Contact.jsx`: Form controllato con `value` e `onChange`

5. **Ref Pattern**: Utilizzo di `useRef` per:
   - Riferimenti DOM (es. `formRef` in Contact)
   - Valori mutabili senza re-render (es. `lastX`, `rotationSpeed` in Island)
   - Riferimenti a mesh 3D (es. `islandRef`, `birdRef`)

6. **Effect Cleanup Pattern**: Cleanup in `useEffect`
   - Rimozione event listeners in `Island.jsx`
   - Cleanup animazioni in vari componenti

## 6. Deploy, ambienti e configurazione

### Esecuzione in locale

**Comandi principali**:

1. **Installazione dipendenze**:
   ```bash
   npm install
   ```

2. **Avvio server di sviluppo**:
   ```bash
   npm run dev
   ```
   - Avvia Vite dev server (tipicamente su `http://localhost:5173`)
   - Hot Module Replacement (HMR) abilitato per aggiornamenti istantanei
   - Non richiede build preliminare

3. **Build per produzione**:
   ```bash
   npm run build
   ```
   - Crea cartella `dist/` con file ottimizzati
   - Minifica JavaScript e CSS
   - Ottimizza asset (immagini, modelli 3D)
   - Tree-shaking per rimuovere codice non utilizzato

4. **Preview build di produzione**:
   ```bash
   npm run preview
   ```
   - Avvia server locale per testare build di produzione
   - Utile per verificare ottimizzazioni prima del deploy

5. **Linting**:
   ```bash
   npm run lint
   ```
   - Esegue ESLint su tutti i file `.js` e `.jsx`
   - Mostra errori e warning

### Processo di build e deploy

**Build process (Vite)**:
1. **Entry point**: `index.html` → `src/main.jsx`
2. **Bundling**: Vite analizza dipendenze e crea bundle ottimizzati
3. **Asset processing**:
   - Modelli 3D (`.glb`, `.gltf`) inclusi come asset statici
   - Immagini ottimizzate
   - CSS processato da PostCSS (Tailwind + Autoprefixer)
4. **Output**: Cartella `dist/` con:
   - `index.html`
   - `assets/` con JavaScript e CSS bundle
   - Asset statici (immagini, modelli 3D)

**Deploy su Vercel**:
- **Configurazione**: `vercel.json` con rewrite rules per SPA
- **Processo**:
  1. Push su repository Git (GitHub, GitLab, ecc.)
  2. Vercel rileva push e avvia build automatica
  3. Esegue `npm run build`
  4. Deploya contenuto di `dist/` su CDN Vercel
  5. Configura routing per supportare client-side routing (tutte le route → `index.html`)

**Configurazione Vercel** (`vercel.json`):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```
- Tutte le route vengono reindirizzate a `/` per supportare React Router client-side
- Permette refresh della pagina su route come `/about` senza errori 404

### Gestione file di configurazione e variabili d'ambiente

**File di configurazione**:

1. **`package.json`**:
   - Dipendenze progetto
   - Script npm
   - Metadati progetto

2. **`vite.config.js`**:
   - Configurazione Vite
   - Plugin React
   - Asset include patterns

3. **`tailwind.config.js`**:
   - Configurazione Tailwind CSS
   - Colori personalizzati
   - Breakpoints
   - Font families
   - Utility classes custom

4. **`postcss.config.js`**:
   - Plugin PostCSS (Tailwind, Autoprefixer)

5. **`eslint.config.js`**:
   - Configurazione ESLint
   - Plugin e regole

6. **`vercel.json`**:
   - Configurazione deploy Vercel
   - Routing rules

**Variabili d'ambiente**:

Il progetto utilizza variabili d'ambiente per configurazione EmailJS:
- `VITE_APP_EMAILJS_SERVICE_ID`: ID servizio EmailJS
- `VITE_APP_EMAILJS_TEMPLATE_ID`: ID template email
- `VITE_APP_EMAILJS_PUBLIC_KEY`: Chiave pubblica EmailJS

**Convenzione Vite**: Le variabili d'ambiente devono iniziare con `VITE_` per essere esposte al codice client-side.

**File `.env`** (non presente nel repository, da creare localmente):
```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

**Accesso variabili**: Tramite `import.meta.env.VITE_APP_EMAILJS_*` (sintassi Vite).

**Gestione ambienti**:
- **Development**: Variabili da `.env.local` o `.env`
- **Production**: Variabili configurate in dashboard Vercel (Environment Variables)

**Sicurezza**: Le variabili `VITE_*` sono esposte nel bundle client-side, quindi non devono contenere informazioni sensibili. EmailJS utilizza chiave pubblica (sicura per client-side).

