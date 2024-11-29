const Employees = [
    {
      id: 1,
      first_name: "Arjun",
      email: "e@e.com",
      password: "123",
      task_counters: {
        active: 1,
        new_task: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          active: true,
          new_task: true,
          completed: false,
          failed: false,
          task_title: "Prepare Monthly Report",
          task_description: "Compile and summarize monthly sales data.",
          task_date: "2024-11-30",
          category: "Reporting"
        },
        {
          active: false,
          new_task: false,
          completed: true,
          failed: false,
          task_title: "Team Meeting",
          task_description: "Participate in the quarterly strategy meeting.",
          task_date: "2024-11-15",
          category: "Meetings"
        },
        {
          active: false,
          new_task: false,
          completed: false,
          failed: true,
          task_title: "Update CRM",
          task_description: "Update customer records in the CRM system.",
          task_date: "2024-11-10",
          category: "Data Management"
        }
      ]
    },
    {
      id: 2,
      first_name: "Priya",
      email: "employee2@example.com",
      password: "12345",
      task_counters: {
        active: 2,
        new_task: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          active: true,
          new_task: true,
          completed: false,
          failed: false,
          task_title: "Product Presentation",
          task_description: "Prepare slides for the new product launch.",
          task_date: "2024-11-29",
          category: "Marketing"
        },
        {
          active: true,
          new_task: false,
          completed: false,
          failed: false,
          task_title: "Client Follow-Up",
          task_description: "Call clients for project updates.",
          task_date: "2024-11-28",
          category: "Client Relations"
        },
        {
          active: false,
          new_task: false,
          completed: true,
          failed: false,
          task_title: "Submit Budget Plan",
          task_description: "Submit the budget plan for Q1 2025.",
          task_date: "2024-11-20",
          category: "Finance"
        },
        {
          active: false,
          new_task: false,
          completed: false,
          failed: true,
          task_title: "Resolve IT Issue",
          task_description: "Fix software installation problems.",
          task_date: "2024-11-18",
          category: "IT Support"
        }
      ]
    },
    {
      id: 3,
      first_name: "Vikram",
      email: "employee3@example.com",
      password: "12345",
      task_counters: {
        active: 1,
        new_task: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          active: false,
          new_task: true,
          completed: false,
          failed: false,
          task_title: "Conduct Survey",
          task_description: "Run a customer satisfaction survey.",
          task_date: "2024-12-01",
          category: "Customer Insights"
        },
        {
          active: true,
          new_task: false,
          completed: false,
          failed: false,
          task_title: "Inventory Check",
          task_description: "Verify stock levels for end-of-year reporting.",
          task_date: "2024-11-28",
          category: "Operations"
        },
        {
          active: false,
          new_task: false,
          completed: true,
          failed: false,
          task_title: "Submit Performance Review",
          task_description: "Submit the annual performance review report.",
          task_date: "2024-11-22",
          category: "HR"
        },
        {
          active: false,
          new_task: false,
          completed: false,
          failed: true,
          task_title: "Website Update",
          task_description: "Update company website with new blog posts.",
          task_date: "2024-11-19",
          category: "Web Development"
        }
      ]
    },
    {
      id: 4,
      first_name: "Ananya",
      email: "employee4@example.com",
      password: "12345",
      task_counters: {
        active: 1,
        new_task: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          active: true,
          new_task: true,
          completed: false,
          failed: false,
          task_title: "Draft Contract",
          task_description: "Draft a contract for a new vendor.",
          task_date: "2024-11-30",
          category: "Legal"
        },
        {
          active: false,
          new_task: false,
          completed: true,
          failed: false,
          task_title: "Annual Maintenance",
          task_description: "Coordinate with the maintenance team for annual checks.",
          task_date: "2024-11-21",
          category: "Facility Management"
        },
        {
          active: false,
          new_task: false,
          completed: false,
          failed: true,
          task_title: "Data Backup",
          task_description: "Perform a full backup of company data.",
          task_date: "2024-11-18",
          category: "IT Operations"
        }
      ]
    },
    {
      id: 5,
      first_name: "Rohan",
      email: "employee5@example.com",
      password: "12345",
      task_counters: {
        active: 1,
        new_task: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          active: true,
          new_task: true,
          completed: false,
          failed: false,
          task_title: "Design Logo",
          task_description: "Create a logo for the new project.",
          task_date: "2024-12-02",
          category: "Design"
        },
        {
          active: false,
          new_task: false,
          completed: true,
          failed: false,
          task_title: "Email Campaign",
          task_description: "Launch the end-of-year email marketing campaign.",
          task_date: "2024-11-25",
          category: "Marketing"
        },
        {
          active: false,
          new_task: false,
          completed: false,
          failed: true,
          task_title: "Fix Bugs",
          task_description: "Fix critical bugs in the application.",
          task_date: "2024-11-20",
          category: "Software Development"
        }
      ]
    }
  ];
  
  

    const Admin = [
        {
            "id": 1,
            "first_name": "prayag",
            "email": "admin@example.com",
            "password": "12345"
        }
    ]


    export const setLocalStorage = ()=>{
            localStorage.setItem('employees', JSON.stringify(Employees))
            localStorage.setItem('admin', JSON.stringify(Admin))
    }

    export const getLocalStorage = ()=>{
        const employees =  JSON.parse(localStorage.getItem('employees'))
        const admin =  JSON.parse(localStorage.getItem('admin'))

        return {employees,admin }
        
    }