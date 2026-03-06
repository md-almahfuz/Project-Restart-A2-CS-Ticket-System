import React from 'react';
import { FaRegCalendarAlt, FaUserCircle } from 'react-icons/fa';

const TicketCard = ({ ticket, onSelect }) => {
    const priorityColor = {
        'HIGH PRIORITY': 'text-red-500',
        'MEDIUM PRIORITY': 'text-amber-500',
        'LOW PRIORITY': 'text-emerald-500',
    }[ticket.priority] || 'text-slate-500';

    const statusClass = ticket.status === 'Open'
        ? 'bg-emerald-100 text-emerald-700'
        : 'bg-amber-100 text-amber-700';

    return (
        <div
            onClick={() => onSelect(ticket)}
            className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm transition-all cursor-pointer hover:bg-violet-50 hover:border-violet-200 hover:shadow-md active:scale-[0.98]"
        >
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-slate-800 leading-tight pr-4">
                    {ticket.title}
                </h3>
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${statusClass}`}>
                    <span className={`w-2 h-2 rounded-full ${ticket.status === 'Open' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                    {ticket.status}
                </div>
            </div>

            <p className="text-slate-500 text-sm line-clamp-2 mb-6">
                {ticket.description}
            </p>

            <div className="flex flex-wrap items-center justify-between text-[13px] font-medium border-t border-slate-50 pt-4 gap-y-2">
                <div className="flex items-center gap-3">
                    <span className="text-slate-400 font-mono">#{ticket.id}</span>
                    <span className={`font-bold uppercase tracking-tight ${priorityColor}`}>
                        {ticket.priority}
                    </span>
                </div>

                <div className="flex items-center gap-4 text-slate-400">
                    <div className="flex items-center gap-1.5">
                        <FaUserCircle size={14} />
                        <span>{ticket.customer}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <FaRegCalendarAlt size={14} />
                        <span>{ticket.createdAt}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;