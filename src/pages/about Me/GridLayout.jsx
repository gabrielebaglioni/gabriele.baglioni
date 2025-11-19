import { useRef, useEffect, useState } from "react";

import {Globe} from "../../components/Globe.jsx";
import { IconCloudDemo } from "../../components/IconCloudDemo.jsx";
import codingPov from "/assets/coding-pov.png";
import Card from "../../components/Card.jsx";


const GridLayout = () => {
  const grid2Container = useRef();
  const textContainerRef = useRef(null);
  const grid4TextContainerRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasScrolledGrid4, setHasScrolledGrid4] = useState(false);

  useEffect(() => {
    const textContainer = textContainerRef.current;
    if (!textContainer || hasScrolled) return;

    let scrollInterval = null;
    let isAnimating = false;
    let isPaused = false;
    const targetPosition = Math.min(
      textContainer.scrollHeight * 0.4,
      textContainer.scrollHeight - textContainer.clientHeight
    );

    // Scroll fluido incrementale - incrementa scrollTop gradualmente
    const scrollStep = 0.5; // Pixel da scorrere ad ogni step (più piccolo = più fluido)
    const scrollDelay = 15; // Millisecondi tra ogni step (più piccolo = più veloce)

    const scrollDown = () => {
      if (isPaused) {
        // Se è in pausa, non fare nulla ma non fermare completamente
        return;
      }
      
      if (textContainer.scrollTop < targetPosition) {
        textContainer.scrollTop += scrollStep;
        scrollInterval = setTimeout(scrollDown, scrollDelay);
      } else {
        setHasScrolled(true);
        isAnimating = false;
      }
    };

    const startScrolling = () => {
      if (!hasScrolled && textContainer.scrollTop < targetPosition) {
        if (!isAnimating) {
          isAnimating = true;
        }
        // Ferma eventuali interval esistenti prima di ripartire
        if (scrollInterval) {
          clearTimeout(scrollInterval);
          scrollInterval = null;
        }
        scrollDown();
      }
    };

    const stopScrolling = () => {
      if (scrollInterval) {
        clearTimeout(scrollInterval);
        scrollInterval = null;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasScrolled && !isAnimating) {
            // Inizia subito quando entra in view
            startScrolling();
          }
        });
      },
      { threshold: 0.1 }
    );

    // Event listeners per mouse
    const handleMouseEnter = () => {
      isPaused = true;
      stopScrolling();
    };

    const handleMouseLeave = () => {
      isPaused = false;
      // Riparti sempre se non ha finito di scrollare
      if (!hasScrolled && textContainer.scrollTop < targetPosition) {
        startScrolling();
      }
    };

    observer.observe(textContainer);
    textContainer.addEventListener('mouseenter', handleMouseEnter);
    textContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      observer.unobserve(textContainer);
      textContainer.removeEventListener('mouseenter', handleMouseEnter);
      textContainer.removeEventListener('mouseleave', handleMouseLeave);
      stopScrolling();
    };
  }, [hasScrolled]);

  // Auto-scroll per Grid 4
  useEffect(() => {
    const textContainer = grid4TextContainerRef.current;
    if (!textContainer || hasScrolledGrid4) return;

    let scrollInterval = null;
    let isAnimating = false;
    let isPaused = false;
    let initialDelayTimeout = null;

    // Assicurati che il testo inizi dall'inizio
    textContainer.scrollTop = 0;
    
    // Flag per rilevare scroll manuale dell'utente
    let userScrolling = false;
    let scrollTimeout = null;

    // Scroll fluido incrementale - incrementa scrollTop gradualmente
    const scrollStep = 0.3; // Pixel da scorrere ad ogni step (più piccolo = più fluido e lento)
    const scrollDelay = 25; // Millisecondi tra ogni step (più grande = più lento, più tempo per leggere)

    const scrollDown = () => {
      if (isPaused || userScrolling) {
        // Se è in pausa o l'utente sta scrollando manualmente, non fare nulla
        return;
      }
      
      const currentMaxScroll = textContainer.scrollHeight - textContainer.clientHeight;
      const currentTarget = currentMaxScroll > 0 ? currentMaxScroll : 0;
      
      if (textContainer.scrollTop < currentTarget - 1) {
        textContainer.scrollTop += scrollStep;
        scrollInterval = setTimeout(scrollDown, scrollDelay);
      } else {
        setHasScrolledGrid4(true);
        isAnimating = false;
      }
    };
    
    // Rileva scroll manuale dell'utente (solo wheel e touch, non l'evento scroll generico)
    const handleUserScroll = () => {
      userScrolling = true;
      stopScrolling();
      isAnimating = false;
      
      // Dopo 1.5 secondi di inattività, riabilita l'auto-scroll se necessario
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        userScrolling = false;
        const currentMaxScroll = textContainer.scrollHeight - textContainer.clientHeight;
        const currentTarget = currentMaxScroll > 0 ? currentMaxScroll : 0;
        if (!hasScrolledGrid4 && textContainer.scrollTop < currentTarget - 1 && !isPaused) {
          startScrolling();
        }
      }, 1500);
    };

    const startScrolling = () => {
      const currentMaxScroll = textContainer.scrollHeight - textContainer.clientHeight;
      const currentTarget = currentMaxScroll > 0 ? currentMaxScroll : 0;
      
      if (!hasScrolledGrid4 && textContainer.scrollTop < currentTarget - 1 && !userScrolling) {
        if (!isAnimating) {
          isAnimating = true;
        }
        // Ferma eventuali interval esistenti prima di ripartire
        if (scrollInterval) {
          clearTimeout(scrollInterval);
          scrollInterval = null;
        }
        scrollDown();
      }
    };

    const stopScrolling = () => {
      if (scrollInterval) {
        clearTimeout(scrollInterval);
        scrollInterval = null;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasScrolledGrid4 && !isAnimating) {
            // Aspetta 2.5 secondi prima di iniziare lo scroll per dare tempo di leggere l'inizio
            initialDelayTimeout = setTimeout(() => {
              startScrolling();
            }, 2500);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Event listeners per mouse
    const handleMouseEnter = () => {
      isPaused = true;
      stopScrolling();
      // Ferma anche il delay iniziale se è ancora in attesa
      if (initialDelayTimeout) {
        clearTimeout(initialDelayTimeout);
        initialDelayTimeout = null;
      }
    };

    const handleMouseLeave = () => {
      isPaused = false;
      // Riparti sempre se non ha finito di scrollare
      const currentMaxScroll = textContainer.scrollHeight - textContainer.clientHeight;
      const currentTarget = currentMaxScroll > 0 ? currentMaxScroll : 0;
      if (!hasScrolledGrid4 && textContainer.scrollTop < currentTarget - 1) {
        // Se lo scroll non è ancora iniziato, riavvia con delay
        if (!isAnimating) {
          initialDelayTimeout = setTimeout(() => {
            startScrolling();
          }, 2500);
        } else {
          startScrolling();
        }
      }
    };

    observer.observe(textContainer);
    textContainer.addEventListener('mouseenter', handleMouseEnter);
    textContainer.addEventListener('mouseleave', handleMouseLeave);
    // Solo wheel e touch per rilevare scroll manuale (non l'evento scroll che viene triggerato anche dall'auto-scroll)
    textContainer.addEventListener('wheel', handleUserScroll, { passive: true });
    textContainer.addEventListener('touchstart', handleUserScroll, { passive: true });
    textContainer.addEventListener('touchmove', handleUserScroll, { passive: true });

    return () => {
      observer.unobserve(textContainer);
      textContainer.removeEventListener('mouseenter', handleMouseEnter);
      textContainer.removeEventListener('mouseleave', handleMouseLeave);
      textContainer.removeEventListener('wheel', handleUserScroll);
      textContainer.removeEventListener('touchstart', handleUserScroll);
      textContainer.removeEventListener('touchmove', handleUserScroll);
      stopScrolling();
      if (initialDelayTimeout) {
        clearTimeout(initialDelayTimeout);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [hasScrolledGrid4]);

  return (
    <section className="container c-space section-spacing" id="about">
      <h2 className="text-heading">THE ISSUE OF TRUST</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex flex-col justify-between grid-default-color grid-1 relative pt-6 md:pt-8 px-6 md:px-8 pb-0 overflow-hidden">
          <div ref={textContainerRef} className="z-20 overflow-y-auto flex-1 pr-2 no-scrollbar pb-4" style={{ maxHeight: 'calc(100% - 140px)' }}>
            <div className="poetry-text space-y-3 text-base md:text-lg leading-relaxed">
              <p className="font-semibold uppercase tracking-wider text-sm md:text-base">trasparent world</p>
              <p className="font-semibold uppercase tracking-wider text-sm md:text-base">collaborate world</p>
              <p className="italic mt-3">in the web the problem isn't the answer</p>
              <p className="italic">is the request.</p>
              <p className="mt-3">pace yourself</p>
              <p>adjust your talking speed</p>
              <p>tech is realy just a solution</p>
              <p>and the solution is only as good as the problem is</p>
              <p className="font-semibold mt-6 text-base md:text-lg">what is the value of unbreakable promises?</p>
              <p className="mt-4">
                almost every interaction or transaction in our lives involves some form of agreement or contract.
              </p>
              <p>
                for instance, purchasing a chair involves a contract to buy lumbers, assemble it, and sell the finished product.
              </p>
              <p>
                your electricity supply is also based on an agreement between you and the electric company.
              </p>
              <p>
                when you get an oil change for your car, you're promised a service in exchange for money.
              </p>
              <p className="mt-3">think of contract and agreements as promises.</p>
              <p className="mt-3">
                Traditional contracts, however, require trust between parties, and this doesn't always work in a favor of honesty and fairness.
              </p>
              <p className="mt-3">
                What if trust were no longer a gamble? decentralization means having no single point of authority, but being driven by shared information.
              </p>
              <p className="mt-3">
                A shift from faith in individual to faith in the shared understanding,
              </p>
              <p>where truth is not held.</p>
              <p className="italic mt-6 text-base md:text-lg">Perhaps trust was never meant to be given, but discovered.</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 z-30 overflow-hidden">
            <img
              src={codingPov}
              className="w-full h-full object-cover opacity-negative scale-[3.5] md:scale-[5] origin-center"
              alt="A point-of-view image of hands on a keyboard, coding."
            />
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo z-30 opacity-0" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              text="ETH"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              text="SOLIDITY"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              text="WEB3"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4 relative overflow-hidden">
          <div 
            ref={grid4TextContainerRef} 
            className="z-20 overflow-y-auto flex-1 flex flex-col items-center justify-start gap-2 pt-6 pb-4 px-4 md:px-6 md:pt-8 md:pb-6 no-scrollbar"
            style={{ maxHeight: '100%' }}
          >
            <div className="flex flex-col items-center justify-start gap-2 w-full">
              <p className="text-center subtext leading-relaxed text-xs sm:text-sm md:text-base">
            Over the last 4 years, I've developed expertise in blockchain development, 
                smart contracts, and Web3 architectures.
              </p>
              <p className="text-center subtext leading-relaxed mt-2 text-xs sm:text-sm md:text-base">
                I build decentralized applications that combine traditional software engineering 
                with cutting-edge blockchain technology.
            </p>
              <p className="text-center subtext leading-relaxed mt-2 text-xs sm:text-sm md:text-base">
                My work focuses on creating secure, scalable solutions that leverage the power 
                of decentralized networks to solve real-world problems.
              </p>
              <p className="text-center subtext leading-relaxed mt-2 text-xs sm:text-sm md:text-base pb-8">
                From smart contract audits to full-stack dApps, I bring a comprehensive 
                understanding of both the technical and practical aspects of Web3 development.
              </p>
            </div>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in blockchain technologies, smart contract development, 
              and Web3 frameworks that allow me to build decentralized and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <IconCloudDemo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridLayout;