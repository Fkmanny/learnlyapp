## Teachmate AI Dashboard

This repository contains the source code for the Teachmate AI dashboard, a web application built with React. The dashboard allows users to manage tasks, view statistics, and perform various actions related to course management.

Project Live link : [`Teachmateai`](https://learnlyfakoyaemmanuelteachmateai.netlify.app/)

 ## Folder Structure
The project has the following folder structure:

- src: Contains the source code of the React application.
- components: Reusable React components used in the application.
- styles: CSS stylesheets for styling the components.
- pages: Top-level components representing different pages of the application.
store: Zustand store for managing the application state.
- public: Static assets, including images and icons.
README.md: Project documentation.


## Usage
The Teachmate AI dashboard provides the following features:

-  Display of total tasks, pending tasks, completed tasks, and overall completion score.
- Task management, including adding, editing, and deleting tasks.
- Filtering tasks based on their status.
- Responsive design for various screen sizes.
- Feel free to explore the dashboard and customize it according to your needs.

## Tech Stack Used:

- React
- Next JS
- Zustand State management system
- Tailwind CSS
- react-hot-toast (for quick and fluid notifications popups)
- React-Icons


## Fulfilled Requirements Description

Note:
- Sel = Selected.
- The tasks are saved in Zustands state management system
- jobArray is the state management Array name for the tasks, JobArray2 is a clone created of JobArray.

Task List:
- A list of tasks containing Title, description, status, due date was was created in the Dashboard Component Line 274. I created it using a table to ensure a seamless data structure.
- There's a dropdown arrow next to the Status header that allows you filter By status in the Dashboard Component Line 283.

Task Creation:
- The functionality to add new tasks with a title, description and due date was created in the Dashboard component Line 267, A button was created with an onclick event addTaskPopup to handle the addTask Form. The addTask Form is on Line 339. When the button is clicked it sets the the addTaskPopup variable to True hereby making the addTask Form to be rendered on the screen.
- The addTask Form contains a title input, Due date Input, Status Input, Description Input and a submit button.
- Once the information is filled and you click on submit it triggers the form function addTask on Line 100.
- What the addTask function does is to create a new array element using the details gotten then add the element to the task array named 'jobArray' saved in the Zustand state management.

Task Editing:
- The functionality to Edit or Delete existing tasks was created on Dashboard component Line 287, To edit a task you should click on the task you want to edit.
- If you click on the task it triggers an onclick function editDelete on Line 116. When it is clicked it sets the editDeletePopup variable to True hereby making the updateEdits form on Line 364 to be rendered on the screen and it sets the Selected Task informations to new variables names like selStatus, selTitle e.t.c.
- The updateEdits Form contains a sel title input, sel Due date Input, sel Status Input, sel Description Input, an update button and a delete task button.
- The sel Inputs all have their placeholders set to the sel variables to allow users see their initial task information, So if they choose to edit they can easily click on the input and edit right away.
- Once the information is filled and you click on the update button it triggers the form function updateEdits on Line 126.
- What the updateEdits function does is to overwrite the selected array element in jobArray2 using the details gotten then adds the updated array to  'jobArray' saved in the Zustand state management.
- If you click on the delete button it triggers a function named deleteTasks which deletes the task from JobArray2 then updates the jobArray  saved in the Zustand state management.

Responsive Design:
- The dashboard is fully responsive, I used Tailwind CSS to ensure flexibility in the responsiveness.
- I also used Next.js for efficient and scalable designs.

State Management:
I used Zustand's Management System cause it's more efficient and easy to use.

## Extra 
There are Task statistic cards that displays the computation of the tasks, Total tasks, Total Pending, Total completed and Total percentage score.
It's in the dashboard component Line 207 and the functionality is a useEffect that gets the information from the Task array on line 47.

The left sidebar on mobile view isn't visible but visible when you click on the the profile card 'Wande coal' lol.

PREREQUISITES
Before you begin, ensure you have the following tools installed on your machine:

- Node.js
- npm (Node Package Manager)
- Getting Started
- Clone the repository
- Then run the following in the terminal : 


```bash
# Firstly

npm install

# Secondly

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

