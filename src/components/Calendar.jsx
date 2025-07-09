import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import esLocale from '@fullcalendar/core/locales/es';
import "./calendar.scss"

const Calendar = () => {

  return (
    <div className='mx-2 mx-md-5 my-4'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={esLocale}
        events={[
          { title: 'Mes de los Jardines', date: '2025-05-16', backgroundColor: '#065658', borderColor: 'transparent' },
          { title: '7° Certamen de Danzas Folclóricas', date: '2025-05-17', backgroundColor: '#065658', borderColor: 'transparent' },
          { title: 'Acto celebración de la Independencia', date: '2025-07-09', backgroundColor: '#065658', borderColor: 'transparent' },
          { title: 'Acto fallecimiento de Francisco Ramírez', date: '2025-07-10', backgroundColor: '#065658', borderColor: 'transparent' },
          { title: 'Taller de teatro jóvenes y adultos', date: '2025-07-16', backgroundColor: '#065658', borderColor: 'transparent' },
          { title: 'Espectáculo de humor "Humor Cordobes"', date: '2025-07-19', backgroundColor: '#065658', borderColor: 'transparent' },
          { title: 'Fiestas Patronales', date: '2025-07-24', backgroundColor: '#065658', borderColor: 'transparent' },
          { title: 'Capacitacion Turistica', date: '2025-07-29', backgroundColor: '#065658', borderColor: 'transparent' },
        ]}
        
      />
    </div>
  );
};

export default Calendar;