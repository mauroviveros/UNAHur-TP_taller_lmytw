/**
 * =============================================================================
 * convidAR — Sistema de animaciones on‑scroll basado en Animate.css
 * =============================================================================
 *
 * En lugar de disparar todas las animaciones al cargar la página, este script
 * usa IntersectionObserver para activarlas únicamente cuando el elemento
 * entra al viewport. Resultado: animaciones fluidas, profesionales y
 * sin parpadeos.
 *
 * Uso en HTML:
 *   <div data-animate="fadeInUp">                     → aparece al scrollear
 *   <div data-animate="zoomIn" data-animate-delay="300ms"> → con retardo
 *   <h1 class="animate__animated animate__slideInDown">    → inmediato (hero)
 *
 * Catálogo completo de animaciones disponibles:
 *   https://animate.style
 *
 * =============================================================================
 */

;(function () {
  'use strict'

  // ---------------------------------------------------------------------------
  // Configuración — modificar estos valores según necesidad
  // ---------------------------------------------------------------------------

  /** Prefijo de clase base de Animate.css. Sin esta clase la animación no corre. */
  var ANIMATED_CLASS = 'animate__animated'

  /**
   * Fracción del elemento que debe ser visible para disparar la animación.
   * 0.15 = con que se vea el 15 % del elemento alcanza.
   * Rango recomendado: 0.05 — 0.30
   */
  var OBSERVER_THRESHOLD = 0.15

  /**
   * Margen del observador. Valores negativos retrasan la activación
   * (el elemento debe estar más adentro del viewport).
   * Valores positivos la adelantan (se activa antes de que entre).
   *
   * Formato: 'top right bottom left'  (igual que CSS margin)
   */
  var OBSERVER_ROOT_MARGIN = '0px 0px 100px 0px'

  // ---------------------------------------------------------------------------
  // IntersectionObserver
  // ---------------------------------------------------------------------------

  /**
   * Crea un único observer compartido por todos los elementos.
   * Cuando un elemento cruza el umbral de visibilidad se le inyectan
   * las clases de Animate.css y se deja de observar para que la
   * animación se ejecute una sola vez.
   */
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        // Solo nos interesan los elementos que acaban de entrar al viewport
        if (!entry.isIntersecting) return

        var el = entry.target
        var animation = el.dataset.animate
        var delay = el.dataset.animateDelay

        // Sin nombre de animación no hay nada que hacer
        if (!animation) return

        // 1. Clase base obligatoria de Animate.css
        // 2. Clase específica: animate__fadeInUp, animate__zoomIn, etc.
        el.classList.add(ANIMATED_CLASS, 'animate__' + animation)

        // 3. Retardo opcional (ej: "200ms", "1s")
        //    Las clases animate__delay-* existen para 1s-5s por defecto.
        //    Los delays en ms (50ms-800ms) están definidos en estructura.css
        if (delay) {
          el.classList.add('animate__delay-' + delay)
        }

        // Dejamos de observar: la animación solo se ve la primera vez
        observer.unobserve(el)
      })
    },
    {
      threshold: OBSERVER_THRESHOLD,
      rootMargin: OBSERVER_ROOT_MARGIN,
    }
  )

  // ---------------------------------------------------------------------------
  // Inicialización
  // ---------------------------------------------------------------------------

  /**
   * Busca todos los elementos con el atributo [data-animate] y los
   * registra en el IntersectionObserver.
   */
  function init() {
    var elements = document.querySelectorAll('[data-animate]')

    if (elements.length === 0) return

    elements.forEach(function (el) {
      observer.observe(el)
    })
  }

  // Garantiza que el DOM esté listo antes de registrar los observables.
  // Si el script se cargó tarde y el DOM ya está listo, init() corre
  // inmediatamente.
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})()
