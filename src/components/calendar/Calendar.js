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
      textColor: 'black',
    },
  ]);

  const currentDate = new Date();

  const getHeaderTitle = (date) => {
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <section id="proximos-eventos" className="main-section">
      <h2 class="title" style={{ textAlign: 'center', margin:'20px' }}>Próximos eventos</h2>
      <div className='calendar' style={{ width: '500px'}}> {/* Ajustamos el ancho y la altura del contenedor */}
        <FullCalendar
          events={events}
          initialDate={currentDate}
          headerToolbar={{
            start: 'prev',
            center: 'title',
            end: 'next',
          }}
          plugins={[dayGridPlugin, interactionPlugin]}
          views={{
            dayGridMonth: {
              titleFormat: { year: 'numeric', month: 'long' },
              dayMaxEventRows: 2,
            },
          }}
          locale={esLocale}
          height= '500px'
        />
      </div>
    </section>
  );
};

export default MyCalendar;






