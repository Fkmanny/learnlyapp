"use client"
import {create} from 'zustand'

const useStore = create((set) => ({

  jobArray :  [
    { id: 5, title: 'Create Maths Starter Questions', description: 'Develop a tool to generate starter questions covering various maths curriculum strands.', status: 'Pending2', date: '2023-01-01' },
    { id: 4, title: "Review Curriculum Compatibility", description: "Ensure the tool is compatible with the International Baccalaureate curriculum.", status: "Pending", date: '2023-01-02' },
    { id: 3, title: "User Interface Design", description: "Design an intuitive and user-friendly interface for the Maths Starter Questions tool.", status: "Pending", date: '2023-01-03' },
    { id: 2, title: "Test and Debug", description: "Conduct thorough testing and debug any issues to ensure a smooth user experience.", status: "Completed", date: '2023-01-04' },
    { id: 1, title: "Documentation", description: "Prepare comprehensive documentation for users and teachers on how to use the tool effectively.", status: "Completed", date: '2023-01-05' },
  ] ,


  setJobArray: (newJobArray) => {
    set({ jobArray: newJobArray });
  },

  RToggle: false,

  setRToggle: (value) => {
    set({ RToggle: value });
  },

  }));

  

export default useStore;