import React, { use } from 'react';
import TicketCard from './TicketCard';

const Tickets = ({ ticketsPromise }) => {
    const ticketsData = use(ticketsPromise);
    const tickets = ticketsData || [];

    return (
        /* Main Grid: 3 Columns on Large screens.
           Cols 1 & 2 = Tickets
           Col 3 = Sidebar
        */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 bg-slate-50 min-h-screen">

            {/* Left/Middle Sections: The Ticket Feed */}
            <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-slate-800">Customer Tickets</h1>
                </div>

                {/* Nested Grid for the cards themselves */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tickets.map(ticket => (
                        <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                </div>
            </div>

            {/* Right Section: Ticket Information Sidebar */}
            <div className="lg:col-span-1">
                <div className="sticky top-6 flex flex-col gap-6">

                    {/* Task Status Section */}
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-800 mb-2">Task Status</h2>
                        <p className="text-slate-500 text-sm">
                            Select a ticket to add to Task Status
                        </p>
                    </div>

                    {/* Resolved Task Section */}
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Resolved Task</h2>
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="text-slate-400 text-sm">
                                <p>No resolved tasks yet.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Tickets;