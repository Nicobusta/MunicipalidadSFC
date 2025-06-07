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
          { title: '1º Café Literario', date: '2025-05-30', backgroundColor: '#065658', borderColor: 'transparent' },
          { title: '7° Certamen de Danzas Folclóricas', date: '2025-05-17', backgroundColor: '#065658', borderColor: 'transparent' }
        ]}
        
      />
    </div>
  );
};

export default Calendar;