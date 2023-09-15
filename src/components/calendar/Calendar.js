import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

const MyCalendar = () => {
  const [events] = useState([
    {
      title: 'Cumpleaños de Marta',
      start: '2023-11-05',
      backgroundColor: 'yellow',
      textColor: 'black', // Establece el color de fondo en amarillo
    },
    // Otros eventos...
  ]);

  // Obtén la fecha actual
  const currentDate = new Date();

  // Función para obtener el título personalizado del encabezado
  const getHeaderTitle = (date) => {
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <section id="proximos-eventos" className="main-section">
      <h2>Próximos eventos</h2>
    <div className='calendar'>
      <FullCalendar
        events={events}
        initialDate={currentDate}
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'dayGridMonth dayGridWeek dayGridDay',
        }}
        plugins={[dayGridPlugin, interactionPlugin]}
        views={{
          dayGridMonth: {
            titleFormat: { year: 'numeric', month: 'long' },
            dayMaxEventRows: 2, // Ajusta este valor para controlar el tamaño de los recuadros de los días
          },
        }}
        locale={esLocale}
      />
    </div>
    </section>
  );
};

export default MyCalendar;



