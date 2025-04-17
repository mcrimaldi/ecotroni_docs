---
title: Calendario e prenotazioni piattaforme
nav_exclude: false
layout: default
nav_order: 100
has_children: false
fullcalendar: true
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

<!-- Contenitore del calendario -->
<div id="calendar"></div>

<!-- Script di inizializzazione FullCalendar -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    // Inizializza il calendario
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',      // vista iniziale: mese a griglia
      locale: 'it',                     // localizzazione in italiano
      firstDay: 1,                      // opzionale: settimana inizia di lunedì (0 = domenica, 1 = lunedì)
      headerToolbar: {
        left: 'prev,next today',        // pulsanti navigazione
        center: 'title',               // titolo (mese/anno)
        right: 'dayGridMonth,timeGridWeek,timeGridDay'  // viste disponibili: mese, settimana, giorno
      },
      events: '{{ "/events.json" | relative_url }}',  // URL del feed JSON degli eventi
      eventClick: function(info) {
        // Gestione click su un evento
        info.jsEvent.preventDefault();  // previene il comportamento di default (es. navigazione se url presente)
        var eventObj = info.event;
        if (eventObj.extendedProps.description) {
          // Esempio semplice: mostra un alert con la descrizione
          alert(eventObj.title + ": " + eventObj.extendedProps.description);
        } else {
          alert(eventObj.title);
        }
      }
      // Altre opzioni di configurazione FullCalendar possono essere aggiunte qui
    });
    // Renderizza il calendario
    calendar.render();
  });
</script>
