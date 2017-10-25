import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {connect} from "react-redux";


const TableOfList = ({ tasks }) => {

    const data = [
        {name: 0, time: 0},
        {name: 1, time: 0},
        {name: 2, time: 0},
        {name: 3, time: 0},
        {name: 4,  time: 0},
        {name: 5,  time: 0},
        {name: 6,  time: 0},
        {name: 7,  time: 0},
        {name: 8,  time: 0},
        {name: 9,  time: 0},
        {name: 10,  time: 0},
        {name: 11,  time: 0},
        {name: 12,  time: 0},
        {name: 13,  time: 0},
        {name: 14,  time: 0},
        {name: 15,  time: 0},
        {name: 16,  time: 0},
        {name: 17,  time: 0},
        {name: 18,  time: 0},
        {name: 19,  time: 0},
        {name: 20,  time: 0},
        {name: 21,  time: 0},
        {name: 22,  time: 0},
        {name: 23,  time: 0},
    ];

    const makeRechartData = () => {
       tasks.forEach((task) => {
           let currentDateEnd = new Date(task.dateEnd).getHours();
           let currentDateStart = new Date(task.dateEnd - (task.time*1000));
           let currentDateStartHours = currentDateStart.getHours();

           const diffStartEndDate = currentDateEnd - currentDateStartHours;
           if(diffStartEndDate === 0){
               let elementOfData = data.find(item => item.name === Number(currentDateEnd));
               elementOfData.time = elementOfData.time + Math.floor((task.time - Math.floor((task.time/60)/60)*60*60) / 60);
           }
           else {
               let timeSpent = Math.floor(task.time/60);
               for(let i = currentDateStartHours; i <= currentDateStartHours + diffStartEndDate; i++){
                   let element = data.find(item => item.name === Number(i));
                   let plusMinutes;
                   if(i === currentDateStartHours){
                       plusMinutes = 60 - currentDateStart.getMinutes();
                   }
                   else if(timeSpent > 60) plusMinutes = 60;
                   else plusMinutes = timeSpent;
                   timeSpent = timeSpent - plusMinutes;
                   element.time = element.time + plusMinutes;
               }
           }
       });
    };

    makeRechartData()

    return (
        <ResponsiveContainer height={300}>
        <BarChart data={data}
                  margin={{top: 40}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="time" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
    )
};
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.items
    }
};
export default connect(mapStateToProps)(TableOfList);