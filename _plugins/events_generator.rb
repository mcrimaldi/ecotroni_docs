# _plugins/events_generator.rb
require 'json'  # per convertire strutture Ruby in JSON

module Jekyll
  class EventsGenerator < Jekyll::Generator
    safe true  # indica che il plugin non fa operazioni pericolose
    priority :low  # esegui dopo gli altri generatori, per sicurezza

    def generate(site)
      # 1. Raccogli i dati degli eventi
      events_data = []
      if site.data.key?('events')
        # Caso A: eventi dal file YAML (site.data)
        site.data['events'].each do |event|
          events_data << event  # sono già hash Ruby dai file YAML
        end
      end
      if site.collections.key?('events')
        # Caso B: eventi dalla collezione Markdown
        site.collections['events'].docs.each do |doc|
          # Unisci i dati front matter e, se vuoi, aggiungi il contenuto come description
          data = doc.data.dup  # copia hash dei dati YAML dell'evento
          # Se esiste un contenuto (descrizione lunga), aggiungilo ai dati
          if doc.content && !doc.content.empty?
            # Potremmo inserirlo come campo 'description' se non esiste già
            data['description'] ||= doc.content.strip
          end
          events_data << data
        end
      end

      # 2. Converti i dati nel formato richiesto da FullCalendar
      # Assicuriamoci che le date siano stringhe ISO8601
      events_output = events_data.map do |ev|
        # Per ogni evento, costruisci un hash con chiavi come title, start, end, allDay, etc.
        event_hash = {}
        event_hash['title'] = ev['title'] if ev['title']
        # Converte start e end in stringa (es. "2025-05-10T10:30:00")
        if ev['start']
          event_hash['start'] = ev['start'].is_a?(Time) || ev['start'].is_a?(Date) ? ev['start'].iso8601 : ev['start'].to_s
        end
        if ev['end']
          event_hash['end'] = ev['end'].is_a?(Time) || ev['end'].is_a?(Date) ? ev['end'].iso8601 : ev['end'].to_s
        end
        # Copia altri campi rilevanti come description, allDay, url, etc.
        event_hash['description'] = ev['description'] if ev.key?('description')
        event_hash['allDay'] = ev['allDay'] if ev.key?('allDay')
        # (Puoi aggiungere qui logica per generare un campo 'url' se vuoi che il click apra una pagina dettagli)
        event_hash
      end

      # 3. Genera il file JSON nel sito
      # Determina il percorso di output (qui lo mettiamo nella root del sito come events.json)
      output_path = File.join(site.dest, 'events.json')
      File.open(output_path, 'w') do |file|
        file.write(JSON.pretty_generate(events_output))
      end

      # Opzionale: log di console durante la build
      Jekyll.logger.info "EventsGenerator:", "Creato file events.json con #{events_output.size} eventi"
    end
  end
end
