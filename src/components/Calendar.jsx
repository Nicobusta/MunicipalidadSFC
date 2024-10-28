import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import esLocale from '@fullcalendar/core/locales/es';
import "./calendar.scss"

const Calendar = () => {
 
  return (
    <div className='mx-2 my-4'>
        <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      locale={esLocale} // Aquí se establece el idioma español
      /* weekends={false} */ //Desabilita los fines de semanas
        events={
            [
                { title: 'event 1', date: '2024-10-21',backgroundColor: '#ff0000', borderColor: 'transparent', textColor: 'black' },
                { title: 'event 2', date: '2024-10-22',backgroundColor: 'lightgreen' } 
            ]
            
        }
    />
    
    </div>
  )
}

export default Calendar