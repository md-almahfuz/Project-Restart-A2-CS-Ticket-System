import React, { use, useState } from 'react';
import TicketCard from './TicketCard';

const Tickets = ({ ticketsPromise }) => {
    const ticketsData = use(ticketsPromise);
    const tickets = ticketsData || [];


    // State to manage active tasks and resolved tasks in the sidebar. Active tasks are those that have been selected but not yet completed,
    // while resolved tasks are those that have been marked as completed.
    const [activeTasks, setActiveTasks] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);


    //Handle selecting a ticket to add to Task Status when clicked. It checks if the ticket is already in active or resolved tasks to prevent duplicates.
    const handleSelectTicket = (ticket) => {
        // Prevent adding if it's already in active or resolved
        const isExists = [...activeTasks, ...resolvedTasks].find(t => t.id === ticket.id);

        // If not exists, add to active tasks. Keep everything that was already in the bucket, and add this new ticket to the end of the list.
        if (!isExists) {
            setActiveTasks(prev => [...prev, ticket]);
        }
    };

    // Handle completing a task. It moves the task from active to resolved when the "Complete" button is clicked.
    const handleComplete = (ticketId) => {
        const taskToResolve = activeTasks.find(t => t.id === ticketId);
        if (taskToResolve) {
            // Remove from active
            setActiveTasks(prev => prev.filter(t => t.id !== ticketId));
            // Add to resolved
            setResolvedTasks(prev => [taskToResolve, ...prev]);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 bg-slate-50 min-h-screen">

            {/* Main Ticket List */}
            <div className="lg:col-span-2">
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Customer Tickets</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tickets.map(ticket => (
                        <TicketCard
                            key={ticket.id}
                            ticket={ticket}
                            onSelect={handleSelectTicket}
                        />
                    ))}
                </div>
            </div>

            {/* Sidebar Section */}
            <div className="lg:col-span-1">
                <div className="sticky top-6 flex flex-col gap-6">

                    {/* Task Status (Active) */}
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Task Status</h2>
                        {activeTasks.length === 0 ? (
                            <p className="text-slate-400 text-sm">Select a ticket to add to Task Status</p>
                        ) : (
                            <div className="space-y-3">
                                {activeTasks.map(task => (
                                    <div key={task.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                                        <span className="text-sm font-semibold text-slate-700 truncate mr-2">{task.title}</span>
                                        <button
                                            onClick={() => handleComplete(task.id)}
                                            className="btn btn-xs btn-success text-white normal-case rounded-md"
                                        >
                                            Complete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Resolved Task Section */}
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Resolved Task</h2>
                        {resolvedTasks.length === 0 ? (
                            <p className="text-slate-400 text-sm italic">No resolved tasks yet.</p>
                        ) : (
                            <div className="space-y-2">
                                {resolvedTasks.map(task => (
                                    <div key={task.id} className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 p-2 rounded-md border border-emerald-100">
                                        <span className="font-bold">✓</span>
                                        <span className="truncate">{task.title}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Tickets;