import React from 'react'
import DefaultLayout from '../layout/DefaultLayout.jsx'
import CardOne from './CardOne.jsx'
import CardTwo from './CardTwo.jsx'


const TutorDashboard = () => {
  return (
      <DefaultLayout>
          <div div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5" >
              <CardOne />
              <CardTwo />
              <CardThree/>
          </div>

          <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md-gap-6 2xl: mt-7.5 2xl:gap-7.5'>
              <ChartOne />
              <ChartTwo />
              <ChartThree />
              <div className="col-span-12 xl:col-span-8">
                  <TableOne/>
              </div>
              <ChatCard/>
              </div>

    </DefaultLayout>
  )
}

export default TutorDashboard
