import React, { use, useState } from 'react';
import TicketCard from './TicketCard';
import Dashboard from './Dashboard';
import Swal from 'sweetalert2';

const Tickets = ({ ticketsPromise }) => {
    // Reading the promise data
    const ticketsData = use(ticketsPromise);
    const tickets = ticketsData || [];

    // State for the lists. We will also maintain counts for the dashboard.
    const [activeTasks, setActiveTasks] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);

    // Initialize counts based on the initial ticket data
    const inProgressCount = tickets.filter(ticket => ticket.status === 'In-Progress').length;
    const resolvedCount = tickets.filter(ticket => ticket.status === 'Resolved').length;

    // We can initialize the counts based on the initial data, but they will be updated as tasks are added/moved.
    const [activeTasksCount, setActiveTasksCount] = useState(inProgressCount);
    const [resolvedTasksCount, setResolvedTasksCount] = useState(resolvedCount);

    // Logic: Add ticket to "Task Status" (Sidebar)
    const handleSelectTicket = (ticket) => {
        const alreadyExists = [...activeTasks, ...resolvedTasks].find(t => t.id === ticket.id);
        if (!alreadyExists) {
            setActiveTasks((prev) => [...prev, ticket]);
            setActiveTasksCount((prev) => prev + 1);

            // Trigger the alert here!
            Swal.fire({
                title: 'Task Added!',
                text: `Ticket #${ticket.ticketId} has been added to active tasks.`,
                icon: 'success',
                confirmButtonColor: '#10b981', // Matches your green card
            });
        }
    };

    // Logic: Move ticket from "Task Status" to "Resolved"
    const handleComplete = (ticketId) => {
        const taskToResolve = activeTasks.find(t => t.id === ticketId);
        if (taskToResolve) {
            setActiveTasks((prev) => prev.filter(t => t.id !== ticketId));
            setResolvedTasks((prev) => [taskToResolve, ...prev]);
            setActiveTasksCount((prev) => prev - 1);
            setResolvedTasksCount((prev) => prev + 1);

            // Trigger the alert here!
            Swal.fire({
                title: 'Task Resolved!',
                text: `Ticket #${ticketId} has been moved to resolved.`,
                icon: 'success',
                confirmButtonColor: '#10b981', // Matches your green card
            });
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-slate-50 min-h-screen">

            {/* Dashboard now receives the LIVE counts */}
            <Dashboard
                activeTasks={activeTasksCount}
                resolvedTasks={resolvedTasksCount}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

                {/* Left Side: Ticket List */}
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

                {/* Right Side: Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-6 flex flex-col gap-6">

                        {/* Task Status Box */}
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Task Status</h2>
                            {activeTasks.length === 0 ? (
                                <p className="text-slate-400 text-sm">Select a ticket to begin.</p>
                            ) : (
                                <div className="space-y-3">
                                    {activeTasks.map(task => (
                                        <div key={task.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                                            <span className="text-sm font-semibold text-slate-700 truncate mr-2">{task.title}</span>
                                            <button
                                                onClick={() => handleComplete(task.id)}
                                                className="btn btn-xs btn-success text-white rounded-md"
                                            >
                                                Complete
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Resolved Task Box */}
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Resolved Task</h2>
                            {resolvedTasks.length === 0 ? (
                                <p className="text-slate-400 text-sm italic">No tasks resolved yet.</p>
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
        </div>
    );
};

export default Tickets;