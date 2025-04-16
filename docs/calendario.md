---
title: Calendario e prenotazioni piattaforme
layout: default
nav_order: 100
---

<button class="btn js-toggle-dark-mode">Passa a modalità scura</button>

<script>
const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('light');
    toggleDarkMode.textContent = 'Passa a modalità scura';
  } else {
    jtd.setTheme('dark');
    toggleDarkMode.textContent = 'Ritorna a modalità chiara';
  }
});
</script>

# Calendario e prenotazioni

## Per prenotare l'utilizzo degli ecotroni mandare una email di richiesta al responsabile tecnico

<div id='calendar-container'>
  <p>Caricamento calendario...</p> {# Messaggio temporaneo #}
</div>

{# Includiamo i dati degli eventi per JavaScript qui sotto #}

<script>
  const jekyllEvents = {{ site.data.events | jsonify }};
</script>
