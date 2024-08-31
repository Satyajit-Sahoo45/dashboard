import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import StatCard from './components/Statcard';
import ActivityCard from './components/ActivityCard';
import ScheduleCard from './components/ScheduleCard';
import AnnouncementSection from './components/AnnouncementSection';
import Frame1 from "./assets/Frame1.png"
import Frame2 from "./assets/Frame2.png"

function App() {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1">
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <main className="p-6">
          <h1 className='text-18 font-bold tracking-wide'>Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="md:col-span-1 lg:col-span-2 grid grid-rows-2 gap-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <StatCard title="Available Position" value="24" description="4 Urgently needed" color="red" />
                <StatCard title="Job Open" value="10" description="4 Active hiring" color="blue" />
                <StatCard title="New Employees" value="24" description="4 Department" color="pink" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <StatCard title="Total Employees" value="216" description="96 Women" color="green" img={Frame1} />
                <StatCard title="Talent Request" value="16" description="6 Men" color="orange" img={Frame2} />
              </div>
              <div className="flex flex-col border border-gray-300 p-2 rounded-md h-96">
                <h2 className="text-lg font-semibold mb-4">Announcement</h2>
                <div className='flex-1 overflow-y-auto'>
                  <AnnouncementSection title="Outing schedule for every department" time="5 Minutes ago" />
                  <AnnouncementSection title="Meeting HR Department" time="Yesterday, 12:30 PM" />
                  <AnnouncementSection title="IT Department need two more talents for UX/UI Designer position" time="Yesterday, 09:15 AM" />
                </div>
                <button className='w-full text-center text-red-600 mt-4'>
                  Create a new Schedule
                </button>
              </div>
            </div>

            <div className="md:col-span-1 lg:col-span-2">
              <ActivityCard
                time="10:40 AM, Fri 10 Sept 2021"
                title="You Posted a New Job"
                description="Kindly check the requirements and terms of work and make sure everything is right."
              />
              <div className='border border-gray-300 p-2 mt-2 rounded-md h-96 flex flex-col'>
                <h2 className="text-lg font-semibold mb-4">Upcoming Schedule</h2>
                <div className='flex-1 overflow-y-auto'>
                  <ScheduleCard title="Review candidate applications" time="Today - 11:30 AM" />
                  <ScheduleCard title="Interview with candidates" time="Today - 10:30 AM" />
                  <ScheduleCard title="Short meeting with product designer" time="Today - 09:15 AM" />
                  <ScheduleCard title="Short meeting with product designer" time="Today - 09:15 AM" />
                  <ScheduleCard title="Short meeting with product designer" time="Today - 09:15 AM" />
                </div>
                <button className='w-full text-center text-red-600 mt-4'>
                  Create a new Schedule
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
