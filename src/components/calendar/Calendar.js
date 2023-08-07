import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/daygrid/locales/es';
import interactionPlugin from '@fullcalendar/interaction';
import { v4 as uuid } from 'uuid';

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const handleSelect = (info) => {
    const { start, end } = info;
    const eventName = "Feria de Málaga";
    const eventStart = new Date("2023-10-08T08:00:00");
    const eventEnd = new Date("2023-10-08T20:00:00");

    const newEvent = {
      start: eventStart,
      end: eventEnd,
      title: eventName,
      id: uuid(),
    };

    setEvents([...events, newEvent]);
  };

  // Obtén la fecha actual
  const currentDate = new Date();

   // Configura el idioma español para el calendario
  const calendarLocale = esLocale;

  // Función para obtener el título personalizado del encabezado
  const getHeaderTitle = (date) => {
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <div className='calendar'>
      <FullCalendar
        editable
        selectable
        events={events}
        locale={calendarLocale}
        select={handleSelect}
        initialDate={currentDate} // Establece la fecha inicial como la fecha actual
        headerToolbar={{
          start: 'today prev,next', // Muestra las flechas para cambiar de mes
          center: 'title', // Usa la función personalizada para mostrar el título del mes actual
          end: 'dayGridMonth dayGridWeek dayGridDay',
        }}
        plugins={[dayGridPlugin, interactionPlugin]}
        views={{
          dayGridMonth: {
            titleFormat: { year: 'numeric', month: 'long' } // Muestra el nombre completo del mes
          }
        }}
      />
    </div>
  );
};

export default MyCalendar;


