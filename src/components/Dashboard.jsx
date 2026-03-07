import React from 'react';

const Dashboard = ({ activeTasks, resolvedTasks }) => {



    // console.log('Active Tasks:', activeTasks);
    // console.log('Resolved Tasks:', resolvedTasks);




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

            <div className="relative overflow-hidden w-full h-40 rounded-2xl bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600 shadow-xl flex flex-col items-center justify-center text-white transition-transform hover:scale-[1.02]">

                {/* Left Vector */}
                <div
                    className="absolute inset-0 opacity-80 pointer-events-none bg-no-repeat"
                    style={{
                        backgroundImage: "url('/resources/vector1.png')",
                        backgroundSize: '40%',
                        backgroundPosition: 'left',
                    }}
                ></div>

                {/* Right Vector (Mirrored) */}
                <div
                    className="absolute inset-0 opacity-80 pointer-events-none bg-no-repeat"
                    style={{
                        backgroundImage: "url('/resources/vector1.png')",
                        backgroundSize: '40%',
                        backgroundPosition: 'left',
                        transform: 'scaleX(-1)' // This mirrors the image
                    }}
                ></div>

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-lg font-medium tracking-wide opacity-90 uppercase">In-Progress</h2>
                    {/* Fixed: Use .length to show the number instead of the object array */}
                    <p className="text-6xl font-bold mt-1 tabular-nums">{activeTasks}</p>
                </div>
            </div>





            <div className="relative overflow-hidden w-full h-40 rounded-2xl bg-gradient-to-br from-[#4ade80] via-[#10b981] to-[#0d9488] shadow-xl flex flex-col items-center justify-center text-white transition-transform hover:scale-[1.02]">

                {/* Left Vector */}
                <div
                    className="absolute inset-0 opacity-80 pointer-events-none bg-no-repeat"
                    style={{
                        backgroundImage: "url('/resources/vector1.png')",
                        backgroundSize: '40%',
                        backgroundPosition: 'left'
                    }}
                ></div>

                {/* Right Vector (Mirrored) */}
                <div
                    className="absolute inset-0 opacity-80 pointer-events-none bg-no-repeat"
                    style={{
                        backgroundImage: "url('/resources/vector1.png')",
                        backgroundSize: '40%',
                        backgroundPosition: 'left',
                        transform: 'scaleX(-1)' // This mirrors the image
                    }}
                ></div>

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-lg font-medium tracking-wide opacity-90 uppercase">Resolved</h2>
                    <p className="text-6xl font-bold mt-1 tabular-nums">{resolvedTasks}</p>
                </div>
            </div>

        </div>


    );
};

export default Dashboard;