// assets/js/calendar-init.js

document.addEventListener("DOMContentLoaded", function () {
  // Assicurati che la variabile jekyllEvents esista (definita nella pagina HTML)
  if (typeof jekyllEvents !== "undefined") {
    const calendarEl = document.getElementById("calendar-container"); // Usa l'ID del tuo contenitore

    // Pulisce il messaggio "Caricamento..."
    calendarEl.innerHTML = "";

    // Mappa i dati di Jekyll nel formato che FullCalendar si aspetta (opzionale ma buona pratica)
    // Spesso i nomi dei campi (title, start, end) coincidono già.
    const eventsForCalendar = jekyllEvents.map((event) => {
      return {
        title: event.title,
        start: event.start,
        end: event.end, // Sarà undefined se non presente nel YAML, FullCalendar lo gestisce
        allDay: event.allDay, // Passa il flag allDay se presente
        description: event.description, // Passa altri campi personalizzati
        color: event.color, // Passa colori personalizzati
        backgroundColor: event.backgroundColor,
        textColor: event.textColor,
        // Aggiungi qui altri campi se necessario (es. url: event.url)
      };
    });

    // Inizializza FullCalendar
    const calendar = new FullCalendar.Calendar(calendarEl, {
      // --- OPZIONI DI CONFIGURAZIONE ---

      // Plugin necessari per le viste (se hai scaricato file separati)
      // plugins: [ 'dayGrid', 'timeGrid', 'list' ], // Esempio

      // Vista iniziale
      initialView: "dayGridMonth", // 'timeGridWeek', 'timeGridDay', 'listWeek'

      // Barra degli strumenti in alto
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek", // Pulsanti per cambiare vista
      },

      // Eventi da visualizzare
      events: eventsForCalendar, // L'array che abbiamo preparato!

      // Impostazioni lingua e formato (opzionale)
      locale: "it", // Imposta la lingua italiana (richiede file locale o configurazione)
      firstDay: 1, // Inizia la settimana da Lunedì

      // Abilita/Disabilita interazioni (opzionale)
      editable: false, // Impedisce il trascinamento/ridimensionamento eventi
      selectable: false, // Impedisce la selezione di date/orari

      // Gestione del click su un evento (opzionale)
      eventClick: function (info) {
        // info.event contiene l'oggetto evento cliccato
        let description =
          info.event.extendedProps.description || "Nessuna descrizione.";
        alert(
          "Evento: " +
            info.event.title +
            "\n" +
            "Inizio: " +
            info.event.start.toLocaleString() +
            "\n" +
            (info.event.end
              ? "Fine: " + info.event.end.toLocaleString() + "\n"
              : "") +
            "Descrizione: " +
            description
        );

        // Impedisce al browser di seguire l'URL dell'evento, se presente
        info.jsEvent.preventDefault();
      },

      // Altre opzioni utili:
      // eventTimeFormat: { // Formato ora negli eventi
      //   hour: '2-digit',
      //   minute: '2-digit',
      //   hour12: false // Formato 24h
      // },
      // displayEventEnd: true, // Mostra l'ora di fine negli eventi settimanali/giornalieri
    });

    // Renderizza il calendario
    calendar.render();
  } else {
    console.error(
      "Errore: La variabile jekyllEvents non è definita. Assicurati che sia presente nella pagina HTML."
    );
    const calendarEl = document.getElementById("calendar-container");
    if (calendarEl) {
      calendarEl.innerHTML =
        '<p style="color: red;">Errore nel caricamento dei dati del calendario.</p>';
    }
  }
});
