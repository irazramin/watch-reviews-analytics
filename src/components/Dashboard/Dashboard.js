import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import analytics from '../../data/analytic';

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 my-10 w-10/12 mx-auto gap-10 place-content-evenly'>
      <div>
        <h2 className='text-xl font-medium text-slate-900 ml-36 mb-5'>
          Month wise sell
        </h2>
        <LineChart
          width={350}
          height={250}
          data={analytics}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='month' />
          <YAxis dataKey={'sell'} />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            strokeWidth={'3px'}
            dataKey='sell'
            stroke='#8884d8'
          />
        </LineChart>
      </div>
      <div>
        <h2 className='text-xl font-medium text-slate-900 ml-36 mb-5'>
          Investment vs Revenue
        </h2>

        <AreaChart
          width={350}
          height={250}
          data={analytics}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='month' />
          <YAxis dataKey={'investment'} />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='investment'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#colorUv)'
          />
          <Area
            type='monotone'
            dataKey='revenue'
            stroke='#82ca9d'
            fillOpacity={1}
            fill='url(#colorPv)'
          />
        </AreaChart>
      </div>
      <div>
        <h2 className='text-xl font-medium text-slate-900 ml-36 mb-5'>
          Investment vs Revenue
        </h2>
        <BarChart width={350} height={250} data={analytics}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='month' />
          <YAxis dataKey={'investment'} />
          <Tooltip />
          <Legend />
          <Bar dataKey='investment' fill='#8884d8' />
          <Bar dataKey='revenue' fill='#82ca9d' />
          <Bar dataKey='month' fill='#82ca9d' />
        </BarChart>
      </div>
      <div>
        <h2 className='text-xl font-medium text-slate-900 ml-36 mb-5'>
          Investment vs Revenue
        </h2>
        <PieChart width={350} height={250}>
          <Pie
            data={analytics}
            dataKey='investment'
            nameKey='month'
            cx='50%'
            cy='50%'
            outerRadius={50}
            fill='#8884d8'
          />
          <Pie
            data={analytics}
            dataKey='revenue'
            nameKey='month'
            cx='50%'
            cy='50%'
            innerRadius={60}
            outerRadius={80}
            fill='#82ca9d'
            label
          />
        </PieChart>
      </div>
    </div>
  );
}

export default Dashboard