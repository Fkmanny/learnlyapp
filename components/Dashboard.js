"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowDown, FaBars, FaBell, FaChevronLeft, FaChevronRight, FaCross, FaHome, FaPlus, FaRegCalendar, FaStumbleuponCircle, FaTasks, FaTimes, FaTools, FaWallet } from 'react-icons/fa';
import { MdOutlineAutoGraph, MdTaskAlt } from 'react-icons/md';
import { BiAlarmExclamation } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";
import toast from 'react-hot-toast';
import Loadee from '@/components/Loadee';
import useStore from './store';

const Dashboard = () => {

    const { setRToggle, setJobArray, jobArray } = useStore();

    const RToggle = useStore((state) => state.RToggle);

    const [jobArray2, setJobArray2] = useState(jobArray);

    const [filterPopUp, setFilterPopup] = useState(false);
    const [addTaskPopup, setaddTaskPopup] = useState(false);
    const [editDeletePopup, setEditDeletePopup] = useState(false);
    const [status, setStatus] = useState('');
    const [filteredArray, setFilteredArray] = useState('');

    const [newTitle, setNewTitle] = useState('');
    const [newDueDate, setNewDueDate] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const [idNo, setIdNo] = useState('');
    const [selTitle, setSelTitle] = useState('');
    const [selDueDate, setSelDueDate] = useState('');
    const [selStatus, setSelStatus] = useState('');
    const [selDescription, setSelDescription] = useState('');

    const [variable , setVariable] = useState(false);

    const [totalTasks, setTotalTasks] = useState('');
    const [totalPending, setTotalPending] = useState('');
    const [totalCompleted, setTotalCompleted] = useState('');
    const [totalScore, setTotalScore] = useState('');
    
useEffect(() => {
  const totalTask = jobArray.length;
  setTotalTasks(totalTask);


  let num2 = 0;
  jobArray.map((task) =>{
    if(task.status === 'Completed'){
      num2++;
    }
  })
  setTotalCompleted(num2);

  let num = totalTask-num2;

 setTotalPending(num);

  let totalpercent = Math.ceil((num2/totalTask)*100);
  setTotalScore(totalpercent);


}, [variable, jobArray])




  const toggleclick =() =>{
    setRToggle(!RToggle)
  }
  

  const statusFilter = (e) => {
    e.preventDefault();
    const arrayEl = [];
    jobArray2.map((order) => {
      if (order.status === status) {
        arrayEl.push(order);
      }
      if (status === 'Pending urgently') {
        if (order.status === 'Pending2') {
          arrayEl.push(order);
        }
      }
      if (status === 'All') {
          arrayEl.push(order);
      }

    });
    setFilteredArray(arrayEl);
    setFilterPopup(false)
  }

  const addTask = (e) => {
    setFilteredArray('');
    e.preventDefault();
    const idNo = jobArray2.length + 1;
    const newArr = { id: idNo, title: newTitle, description: newDescription, status: newStatus, date: newDueDate };
    const jobArray5 = [newArr, ...jobArray2];
    setJobArray2(jobArray5)
    setJobArray(jobArray5);
    setaddTaskPopup(false);
    toast.success("Task Added")
    setVariable(!variable);
  }

  
  

  const editDelete = (order) =>{
    setEditDeletePopup(true);
    setIdNo(order.id);
    setSelTitle(order.title);
    setSelDueDate(order.date)
    setSelStatus(order.status)
    setSelDescription(order.description)
  }

  const updateEdits = (e) => {
    setFilteredArray('');
    e.preventDefault();
        // const updatedArray = [...jobArray2.slice(0, indexToUpdate), ...jobArray2.slice(indexToUpdate + 1)];
        const indexNo = jobArray2.length - idNo;
        let statusEl = '';
        if (selStatus==="Pending urgently") {
          statusEl = 'Pending2';
        }else{
          statusEl = selStatus;
        }
      jobArray2[indexNo] = { id: idNo, title: selTitle, description: selDescription, status: statusEl, date: selDueDate };
      
    setJobArray(jobArray2);
    setEditDeletePopup(false);
    toast.success("Task Updated")
    setVariable(!variable);


  }

  const deleteTasks = (e) => {
    setFilteredArray('');
    e.preventDefault();
        // const updatedArray = [...jobArray2.slice(0, indexToUpdate), ...jobArray2.slice(indexToUpdate + 1)];
        const indexNo = jobArray2.length - idNo;
      jobArray2.splice(indexNo, 1);
      

    setJobArray(jobArray2);
    setEditDeletePopup(false);
    toast.success("Task Deleted")
    setVariable(!variable);


  }
  

  const notifications = () => {
    toast('Zero notifications', {
      icon: '🔔',
    });
  }
  const account = () => {
    toast("Creating users wasn't requested for", {
      icon: '👨‍💻',
    });
  }

  return (
    <div className='w-full relative xl:w-3/4  flex flex-col '>
    <div className='sticky top-5 z-10 box-border bg-white rounded-xl sm:rounded-3xl shad5 px-3 sm:px-6 py-2 flex flex-row items-center justify-between' >
      <div className='flex flex-row gap-1'>
      <div>
          <FaStumbleuponCircle color='blue' size={30} className='hidden md:block xl:hidden'/>
          <FaStumbleuponCircle color='blue' size={25} 
          className='block md:hidden xl:hidden'/>
      </div>
      <h1 className='AoenikBold text-xl sm:text-3xl'>Dashboard</h1>

      </div>
      <div className='flex flex-row items-center'>
        <FaBell onClick={() => {notifications()}} color='gray' size={25} className='hidden sm:block mr-2 sm:mr-6 hover:scale-105 duration-300 cursor-pointer' />
        <FaBell onClick={() => {notifications()}} color='gray' size={20} className='block sm:hidden mr-2 sm:mr-6 hover:shadow-md cursor-pointer' />
        <div onClick={() => {account()}} className='flex flex-row rounded-xl sm:rounded-3xl p-2 sm:p-3 bg-gray-100 hover:shadow-md duration-300 cursor-pointer'>
          <img alt='profilePic' src={'/user-1.png'} style={{borderRadius:'50%', width: '50px', height: '50px'}} className='hidden sm:block' width={50} height={50}/>
          <img alt='profilePic' src={'/user-1.png'} style={{borderRadius:'50%', width: '27px', height: '27px'}} className='block sm:hidden h-1/2' width={27} height={27}/>
          <span className='ml-2 sm:ml-3 flex flex-col'>
            <h3 className='font-semibold text-xs sm:text-base'>Wandee Coal</h3>
            <p className=' text-[10px] sm:text-[13px]'>wandecoal@gmail.com</p>
          </span>
        </div>
      </div>
    </div>

    <div className='flex flex-row flex-wrap md:flex-nowrap justify-between gap-0 md:gap-4 my-7' >
      <div className='w-[48%] md:w-1/4 flex items-center py-4 flex-row mb-5 md:mb-0  rounded-xl bg-white cursor-pointer duration-300 hover:bg-[#f7f7ff] shad5'>
        <div className='w-1/3 flex justify-center items-center'>
          <div className='bg-[#5c67fd] w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] flex justify-center items-center' style={{borderRadius:'50%'}}>
            <FaTasks color='white' size={23} className='w-2/3 sm:w-full' />
          </div>
        </div>

        <span className='flex flex-col gap-1'>
          <p className='AoenikBold text-gray-500 text-sm sm:text-base'>Total Tasks</p>
          <h3 className='AoenikBold text-gray-700 text-xl sm:text-2xl'>{totalTasks}</h3>
        </span>
      </div>

      <div className='w-[48%] md:w-1/4  flex items-center py-4 flex-row mb-5 md:mb-0 rounded-xl bg-white cursor-pointer duration-300 hover:bg-[#fffaf4] shad5'>
        <div className='w-1/3 flex justify-center items-center'>
            <div className='bg-[#fdb92a] w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] flex justify-center items-center' style={{borderRadius:'50%'}}>
              <BiAlarmExclamation color='white'  size={26} className='w-1/2 sm:w-full' />
            </div>
        </div>

        <span className='flex flex-col gap-1'>
          <p className='AoenikBold text-gray-500 text-sm sm:text-base'>Total pending</p>
          <h3 className='AoenikBold text-gray-700 text-xl sm:text-2xl'>{totalPending}</h3>
        </span>
      </div>

      <div className='w-[48%] md:w-1/4  flex items-center py-4 flex-row rounded-xl bg-white cursor-pointer duration-300 hover:bg-[#f5fcf5] shad5'>
        <div className='w-1/3 flex justify-center items-center'>
            <div className='bg-[#54bf5e] w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] flex justify-center items-center' style={{borderRadius:'50%'}}>
              <MdTaskAlt color='white'  size={26} className='w-1/2 sm:w-full' />
            </div>
        </div>

        <span className='flex flex-col gap-1'>
          <p className='AoenikBold text-gray-500 text-sm sm:text-base'>Total Completed</p>
          <h3 className='AoenikBold text-gray-700 text-xl sm:text-2xl'>{totalCompleted}</h3>
        </span>
      </div>

      <div className='w-[48%] md:w-1/4  flex items-center py-4 flex-row rounded-xl bg-white cursor-pointer duration-300 hover:bg-[#fdf8fe] shad5'>
        <div className='w-1/3 flex justify-center items-center'>
          <div className='bg-[#dd7bf4] w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] flex justify-center items-center' style={{borderRadius:'50%'}}>
            <MdOutlineAutoGraph  color='white'  size={26} className='w-1/2 sm:w-full' />
          </div>
        </div>

        <span className='flex flex-col gap-1'>
          <p className='AoenikBold text-gray-500 text-sm sm:text-base'>Total score</p>
          <h3 className='AoenikBold text-gray-700 text-xl sm:text-2xl'>{totalScore}%</h3>
        </span>
      </div>

    </div>

    <div className='flex flex-row justify-between'>
      <h3 className='poppins font-bold text-2xl ml-5 mb-2 '>Tasks</h3>
      <button onClick={()=>{setaddTaskPopup(true)}}  className='flex p-2 border-gray-200 border-2 hover:shadow-md mb-2 text-sm bg-white text-gray-500 rounded-lg AoenikBold items-center gap-1 duration-300'>Add Task<FaPlus/></button>
    </div>

    <div className='bg-white h-[24.5rem] shad rounded-2xl overflow-x-auto'>
      <table className="table-auto w-full relative text-black  ">
        <thead className='sticky top-0 bg-white shadow-md box-border  rounded-t-2xl'>
          <tr className='text-base text-gray-900 font-semibold  pb-5'>
            <th className="text-start px-4 py-4">Title</th>
            <th className="text-start pl-4 py-4">Due date</th>
          <th onClick={()=>{setFilterPopup(true)}} className="text-start px-4 py-4 stat">Status <IoFilter /></th>

            <th className="text-start  py-4">Description</th>
          </tr>
        </thead>

        <tbody>
          {filteredArray ?
          filteredArray.map((order, index) => (
            <tr key={`filtered-${order.id}-${index}`} onClick={() => editDelete(order)} className="cursor-pointer hover:bg-gray-200 ">
              <td className="text-xs sm:text-sm text-gray-700 px-4 py-4 font-semibold">{order.title}</td>
              <td className="text-xs  whitespace-nowrap sm:text-sm text-gray-700 pl-4 py-4">{order.date}</td>
              <td className="text-xs sm:text-sm text-gray-700 px-4 py-4">
              {order.status === 'Pending' && (<p className='font-semibold bg-yellow-200 w-fit text-xs sm:text-sm  text-yellow-700 rounded-md py-1 px-2'>{order.status}</p>)}
              {order.status === 'Pending2' && (<p className='font-semibold bg-red-200 w-fit text-xs sm:text-sm  text-red-700 rounded-md py-1 px-2'>Pending</p>)}
              {order.status === 'Completed' && (<p className='font-semibold bg-green-200 w-fit text-xs sm:text-sm  text-green-700 rounded-md py-1 px-2'>{order.status}</p>)}</td>
              <td className="text-xs sm:text-sm text-gray-700  py-4">{order.description}</td>
            </tr>
          ))
          :
          jobArray2.map((order, index) => (
            <tr key={`jobArray2-${order.id}-${index}`} onClick={() => editDelete(order)} className="cursor-pointer hover:bg-gray-200 ">
              <td className="text-xs sm:text-sm text-gray-700 px-4 py-4 font-semibold">{order.title}</td>
              <td className="text-xs whitespace-nowrap sm:text-sm text-gray-700 pl-4 py-4">{order.date}</td>
              <td className="text-xs sm:text-sm text-gray-700 px-4 py-4">
              {order.status === 'Pending' && (<p className='font-semibold bg-yellow-200 w-fit text-xs sm:text-sm  text-yellow-700 rounded-md py-1 px-2'>{order.status}</p>)}
              {order.status === 'Pending2' && (<p className='font-semibold bg-red-200 w-fit text-xs sm:text-sm  text-red-700 rounded-md py-1 px-2'>Pending</p>)}
              {order.status === 'Completed' && (<p className='font-semibold bg-green-200 w-fit text-xs sm:text-sm  text-green-700 rounded-md py-1 px-2'>{order.status}</p>)}</td>
              <td className="text-xs sm:text-sm text-gray-700  py-4">{order.description}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
      {filterPopUp &&
            <form onSubmit={statusFilter} className='absolute right-0 lg:left-24 bottom-5 top-auto z-[8] lg:top-36 bg-white h-fit w-full lg:w-[28%] py-4 lg:py-8 px-2 lg:px-5 rounded-xl' style={{boxShadow:'0px 25px 50px rgba(29,29,29,.1)'}}>
                <h1 className='text-xl md:text-2xl ml-1 mb-1 font-bold'>Filter by Status</h1>
                <select value={status} onChange={(e) => setStatus(e.target.value)} className='w-full px-2 lg:px-3 py-2 lg:py-3.5 border-2 rounded-md my-2 lg:my-4' name='cityArea' required>
                  <option value='' disabled></option>
                    <option>
                      All
                    </option>
                      <option>Pending</option>
                      <option>Pending urgently</option>
                      <option>Completed</option>
                </select>  

                <button type='submit' className='bg-[#634db4] mb-2 lg:mb-5 mt-1 lg:mt-2 hover:opacity-90 duration-300 w-full font-bold text-white rounded-md shadow-sm py-3 lg:py-4 text-center'>Save changes</button>
                  <FaTimes size={25} onClick={()=>{setFilterPopup(false)}}  className='absolute top-4 right-3 lg:top-6 lg:right-5 cursor-pointer'/>
            </form> 
            }

            {addTaskPopup &&
              <form onSubmit={addTask} className='absolute right-0 lg:left-24 bottom-5 top-auto z-[8] lg:top-32 bg-white h-fit w-full lg:w-[70%] py-4 lg:py-8 px-2 lg:px-5 rounded-xl' style={{boxShadow:'0px 25px 50px rgba(29,29,29,.1)'}}>
                  <h1 className='text-xl md:text-2xl ml-1 mb-3 font-bold'>Add New Task</h1>

                  <label className='ml-1 font-semibold'>Title</label>
                  <input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}  name="title" className='w-full px-3 py-3 border-2 rounded-md  mb-2 '  required></input>
                  
                  <label className='ml-1 font-semibold'>Due date</label>
                  <input type='date' value={newDueDate} onChange={(e) => setNewDueDate(e.target.value)}  name="Date" className='w-full px-3 py-3 border-2 rounded-md  mb-2 '  required></input>
                  
                  <label className='ml-1 font-semibold'>Status</label>
                  <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)} className='w-full px-2 lg:px-3 py-2 lg:py-3.5 border-2 rounded-md my-2 ' name='newStatus' required>
                  <option value='' disabled>
                      
                    </option>
                        <option>Pending</option>
                  </select>  

                  <label className='ml-1 font-semibold'>Description</label>
                  <textarea type='text' value={newDescription} onChange={(e) => setNewDescription(e.target.value)}  name="description" className='w-full px-3 py-3 border-2 rounded-md  mb-2 '  required></textarea>

                  <button type='submit' className='bg-[#634db4] mb-2 lg:mb-5 mt-1 lg:mt-2 hover:opacity-90 duration-300 w-full font-bold text-white rounded-md shadow-sm py-3 lg:py-4 text-center'>Add task</button>
                    <FaTimes size={25} onClick={()=>{setaddTaskPopup(false)}}  className='absolute top-4 right-3 lg:top-6 lg:right-5 cursor-pointer'/>
              </form>
            }

            {editDeletePopup &&
              <form onSubmit={updateEdits} className='absolute right-0 lg:left-24 bottom-5 top-auto z-[8] lg:top-32 bg-white h-fit w-full lg:w-[70%] py-4 lg:py-8 px-2 lg:px-5 rounded-xl' style={{boxShadow:'0px 25px 50px rgba(29,29,29,.1)'}}>
                  <h1 className='text-xl md:text-2xl ml-1 mb-3 font-bold'>Update Task</h1>

                  <input type='text' placeholder={selTitle} onChange={(e) => setSelTitle(e.target.value)}  name="title" className='w-full px-3 py-3 border-2 rounded-md  mb-2 '></input>

                  <input type='date' placeholder={selDueDate} onChange={(e) => setSelDueDate(e.target.value)}   name="title" className='w-full px-3 py-3 border-2 rounded-md  mb-2 '></input>

                  <select placeholder={selStatus} onChange={(e) => setSelStatus(e.target.value)} className='w-full px-3 py-3 border-2 rounded-md  mb-2 ' name='userType'>
                      <option value=''>
                          {selStatus ==='Pending2' ? "Pending Urgently": selStatus}
                      </option>
                      <option>Pending</option>
                      <option>Pending urgently</option>
                      <option>Completed</option>
                  </select> 
                  
                  <textarea type='text' placeholder={selDescription} onChange={(e) => setSelDescription(e.target.value)}  name="description" className='w-full px-3 py-3 border-2 rounded-md  mb-2 max-h-24 ' ></textarea>
              

                  <button type='submit' className='bg-[#634db4] mb-2 lg:mb-5 mt-1 lg:mt-2 hover:opacity-90 duration-300 w-full font-bold text-white rounded-md shadow-sm py-3 lg:py-4 text-center'>Update task</button>

                  <button type='button' onClick={deleteTasks} className='bg-red-500 mb-2 lg:mb-5 mt-1 lg:mt-2 hover:opacity-90 duration-300 w-full font-bold text-white rounded-md shadow-sm py-3 lg:py-4 text-center'>Delete Task</button>
                    <FaTimes size={25} onClick={()=>{setEditDeletePopup(false)}}  className='absolute top-4 right-3 lg:top-6 lg:right-5 cursor-pointer'/>
              </form>
            }
    </div>

  </div>
  )
}

export default Dashboard