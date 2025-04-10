import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import esLocale from '@fullcalendar/core/locales/es';
import "./calendar.scss"

const Calendar = () => {
  const capitalizarTitulo = () => {
    const titleElement = document.querySelector('.fc-toolbar-title');
    if (titleElement) {
      const texto = titleElement.textContent;
      titleElement.textContent = texto.charAt(0).toUpperCase() + texto.slice(1);
    }
  };

  return (
    <div className='mx-2 mx-md-5 my-4'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={esLocale}
        events={[
          { title: 'Festival de la Palma', date: '2025-02-14', backgroundColor: '#065658', borderColor: 'transparent' },
          { title: 'Festival de la Palma', date: '2025-02-15', backgroundColor: '#065658', borderColor: 'transparent' }
        ]}
        datesSet={capitalizarTitulo} // Se ejecuta cada vez que se cambia el mes/vista
      />
    </div>
  );
};

export default Calendar;