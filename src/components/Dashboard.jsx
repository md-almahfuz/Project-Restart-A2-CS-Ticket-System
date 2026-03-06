import React, { use } from 'react';

const Dashboard = ({ ticketsPromise }) => {

    const ticketsData = use(ticketsPromise);
    const tickets = ticketsData || [];

    // console.log('Dashboard tickets:', tickets);

    const inProgressCount = tickets.filter(ticket => ticket.status === 'In-Progress').length;
    const resolvedCount = tickets.filter(ticket => ticket.status === 'Resolved').length;

    console.log('In-Progress Count:', inProgressCount);
    console.log('Resolved Count:', resolvedCount);




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

            <div className="relative overflow-hidden w-full h-40 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 shadow-xl flex flex-col items-center justify-center text-white transition-transform hover:scale-[1.02]">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-lg font-medium tracking-wide opacity-90 uppercase">In-Progress</h2>
                    <p className="text-6xl font-bold mt-1 tabular-nums">{inProgressCount}</p>
                </div>
            </div>

            <div className="relative overflow-hidden w-full h-40 rounded-2xl bg-gradient-to-br from-[#4ade80] via-[#10b981] to-[#0d9488] shadow-xl flex flex-col items-center justify-center text-white transition-transform hover:scale-[1.02]">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-lg font-medium tracking-wide opacity-90 uppercase">Resolved</h2>
                    <p className="text-6xl font-bold mt-1 tabular-nums">{resolvedCount}</p>
                </div>
            </div>

        </div>


    );
};

export default Dashboard;