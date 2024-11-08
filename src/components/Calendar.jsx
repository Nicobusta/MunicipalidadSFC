import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import esLocale from '@fullcalendar/core/locales/es';
import "./calendar.scss"

const Calendar = () => {
 
  return (
    <div className='mx-2 mx-md-5 my-4'>
        <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      locale={esLocale} // Aquí se establece el idioma español
      /* weekends={false} */ //Desabilita los fines de semanas
        events={
            [
              { title: 'Jornada para adultos', date: '2024-11-17',backgroundColor: '#065658', borderColor: 'transparent' },
              { title: 'Prefestival', date: '2024-12-21',backgroundColor: '#065658', borderColor: 'transparent' },
              { title: 'Prefestival', date: '2024-12-22',backgroundColor: '#065658', borderColor: 'transparent' } 
            ]
            
        }
    />
    
    </div>
  )
}

export default Calendar