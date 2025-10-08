// side bar data
import {
  User,
  Settings,
  Mail,
  Ticket,
  ShoppingCart,
  Calendar,
} from "lucide-react";
import { AiFillDashboard } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { FaPhoneAlt, FaClipboardCheck } from "react-icons/fa";

export const menuItems = [
  { icon: AiFillDashboard, label: "Agent Dashboard", link: "/agent-dashboard" },
  { icon: FaPhoneAlt, label: "Agent Campaign", link: "/againt-campaign" },
  { icon: FaClipboardCheck, label: "My Disposition", link: "/my-disposition" },
  { icon: Mail, label: "Email Campaign", link: "/emailcampaign" },
  { icon: FaList, label: "Course List", link: "/courselist" },
  { icon: Ticket, label: "Coupon Code", link: "/couponcode" },
  { icon: ShoppingCart, label: "Sales", link: "/sales" },
  { icon: Calendar, label: "My Attendance", link: "/attendance" },
];

import {
  FaShoppingCart,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaSyncAlt,
  FaPhone,
} from "react-icons/fa";

export const cardsData = [
  { title: "Sales", icon: FaShoppingCart, value: 450 },
  { title: "Old Disposition Leads", icon: FaArrowCircleLeft, value: 120 },
  { title: "New Disposition Leads", icon: FaArrowCircleRight, value: 80 },
  { title: "Updated Disposition Leads", icon: FaSyncAlt, value: 60 },
  { title: "Inbound Calls", icon: FaPhoneAlt, value: 300 },
  { title: "Outbound Calls", icon: FaPhone, value: 270 },
];

export const cardSalesData = [
  {
    dotNumber: "DOT001",
    buyer: "Alice Johnson",
    course: "React Basics",
    noOfLicence: 3,
    discountAmount: 50,
    amount: 450,
    dateCreated: "2025-10-01",
    saleCommission: 45,
  },
  {
    dotNumber: "DOT002",
    buyer: "Bob Smith",
    course: "Node.js Advanced",
    noOfLicence: 2,
    discountAmount: 0,
    amount: 400,
    dateCreated: "2025-10-02",
    saleCommission: 40,
  },
  {
    dotNumber: "DOT003",
    buyer: "Charlie Davis",
    course: "Fullstack MERN",
    noOfLicence: 5,
    discountAmount: 100,
    amount: 900,
    dateCreated: "2025-10-03",
    saleCommission: 90,
  },
  {
    dotNumber: "DOT004",
    buyer: "David Lee",
    course: "Python Basics",
    noOfLicence: 1,
    discountAmount: 20,
    amount: 180,
    dateCreated: "2025-10-04",
    saleCommission: 18,
  },
  {
    dotNumber: "DOT005",
    buyer: "Emma Wilson",
    course: "Data Science",
    noOfLicence: 4,
    discountAmount: 80,
    amount: 720,
    dateCreated: "2025-10-05",
    saleCommission: 72,
  },
];

export const oldDispositionsLeadsCard = [
  {
    leadId: "LD001",
    customer: "Alice Johnson",
    course: "React Basics",
    status: "Pending",
    assignedTo: "John Doe",
    dateCreated: "2025-09-25",
  },
  {
    leadId: "LD002",
    customer: "Bob Smith",
    course: "Node.js Advanced",
    status: "Follow-up",
    assignedTo: "Jane Doe",
    dateCreated: "2025-09-26",
  },
  {
    leadId: "LD003",
    customer: "Charlie Davis",
    course: "Fullstack MERN",
    status: "Pending",
    assignedTo: "Mark Lee",
    dateCreated: "2025-09-27",
  },
];
export const newDispositionsLeadsCard = [
  {
    leadId: "ND001",
    customer: "David Lee",
    course: "Python Basics",
    status: "New",
    assignedTo: "John Doe",
    dateCreated: "2025-10-01",
  },
  {
    leadId: "ND002",
    customer: "Emma Wilson",
    course: "Data Science",
    status: "New",
    assignedTo: "Jane Doe",
    dateCreated: "2025-10-02",
  },
  {
    leadId: "ND003",
    customer: "Frank Harris",
    course: "React Advanced",
    status: "New",
    assignedTo: "Mark Lee",
    dateCreated: "2025-10-03",
  },
];
export const updatedDispositionsLeadsCard = [
  {
    leadId: "UD001",
    customer: "Alice Johnson",
    course: "React Basics",
    status: "Updated",
    updatedBy: "John Doe",
    dateUpdated: "2025-10-01",
  },
  {
    leadId: "UD002",
    customer: "Bob Smith",
    course: "Node.js Advanced",
    status: "Updated",
    updatedBy: "Jane Doe",
    dateUpdated: "2025-10-02",
  },
  {
    leadId: "UD003",
    customer: "Charlie Davis",
    course: "Fullstack MERN",
    status: "Updated",
    updatedBy: "Mark Lee",
    dateUpdated: "2025-10-03",
  },
];
export const inboundCallsCard = [
  {
    callId: "IC001",
    caller: "Alice Johnson",
    course: "React Basics",
    duration: "5m 20s",
    date: "2025-10-01",
    handledBy: "John Doe",
  },
  {
    callId: "IC002",
    caller: "Bob Smith",
    course: "Node.js Advanced",
    duration: "3m 45s",
    date: "2025-10-02",
    handledBy: "Jane Doe",
  },
  {
    callId: "IC003",
    caller: "Charlie Davis",
    course: "Fullstack MERN",
    duration: "4m 10s",
    date: "2025-10-03",
    handledBy: "Mark Lee",
  },
];
export const outboundCallsCard = [
  {
    callId: "OC001",
    receiver: "David Lee",
    course: "Python Basics",
    duration: "6m 15s",
    date: "2025-10-01",
    madeBy: "John Doe",
  },
  {
    callId: "OC002",
    receiver: "Emma Wilson",
    course: "Data Science",
    duration: "4m 50s",
    date: "2025-10-02",
    madeBy: "Jane Doe",
  },
  {
    callId: "OC003",
    receiver: "Frank Harris",
    course: "React Advanced",
    duration: "5m 30s",
    date: "2025-10-03",
    madeBy: "Mark Lee",
  },
];

//dispositions list data
export const DispositionListData = [
  {
    dot: "12345",
    dispositionStatus: "Interested",
    callDirection: "Outbound",
    callBackDate: "2025-10-05",
    timeZone: "EST",
    notes: "Client asked for brochure",
    dateCreated: "2025-10-01",
  },
  {
    dot: "67890",
    dispositionStatus: "Not Interested",
    callDirection: "Inbound",
    callBackDate: "2025-10-10",
    timeZone: "PST",
    notes: "Requested no further calls",
    dateCreated: "2025-10-02",
  },
];

export const agentDashboardList = [
  {
    agentName: "Tushar Garg",
    teamLeadName: "Munish Kumar",
    total: 120,
    old: 40,
    new: 50,
    updated: 30,
    connected: 70,
    hot: 15,
    warm: 25,
    sales: 10,
    revenue: "$1200",
    inbound: 60,
    outbound: 60,
  },
  {
    agentName: "Anukampa Garg",
    teamLeadName: "Munish Kumar",
    total: 100,
    old: 35,
    new: 40,
    updated: 25,
    connected: 50,
    hot: 10,
    warm: 20,
    sales: 8,
    revenue: "$950",
    inbound: 55,
    outbound: 45,
  },
  {
    agentName: "Rohit Sharma",
    teamLeadName: "Munish Kumar",
    total: 90,
    old: 20,
    new: 50,
    updated: 20,
    connected: 60,
    hot: 5,
    warm: 25,
    sales: 12,
    revenue: "$1100",
    inbound: 40,
    outbound: 50,
  },
];
export const coursesData = [
  {
    title: "React for Beginners",
    price: "$199",
    agentUid: "AGT001",
    referenceUrl: "https://example.com/react-for-beginners",
  },
  {
    title: "Advanced Node.js",
    price: "$249",
    agentUid: "AGT002",
    referenceUrl: "https://example.com/advanced-nodejs",
  },
  {
    title: "Fullstack MERN Development",
    price: "$399",
    agentUid: "AGT003",
    referenceUrl: "https://example.com/fullstack-mern",
  },
  {
    title: "JavaScript Mastery",
    price: "$149",
    agentUid: "AGT004",
    referenceUrl: "https://example.com/javascript-mastery",
  },
  {
    title: "UI/UX Design Fundamentals",
    price: "$179",
    agentUid: "AGT005",
    referenceUrl: "https://example.com/ui-ux-fundamentals",
  },
];

export const couponCodeList = [
  {
    courses: "React for Beginners",
    discountType: "Percentage",
    discount: "20%",
    code: "REACT20",
    maxPurchaseAmount: "$200",
    validity: "2025-12-31",
  },
  {
    courses: "Advanced Node.js",
    discountType: "Flat",
    discount: "$50",
    code: "NODE50",
    maxPurchaseAmount: "$500",
    validity: "2025-11-30",
  },
  {
    courses: "Fullstack MERN Development",
    discountType: "Percentage",
    discount: "15%",
    code: "MERN15",
    maxPurchaseAmount: "$400",
    validity: "2026-01-15",
  },
  {
    courses: "JavaScript Mastery",
    discountType: "Flat",
    discount: "$25",
    code: "JS25",
    maxPurchaseAmount: "$150",
    validity: "2025-10-31",
  },
  {
    courses: "UI/UX Design Fundamentals",
    discountType: "Percentage",
    discount: "10%",
    code: "UIUX10",
    maxPurchaseAmount: "$100",
    validity: "2025-12-15",
  },
];

export const paymentList = [
  {
    paymentDate: "2025-09-20",
    dotNumber: "DOT12345",
    customerName: "Rohit Sharma",
    course: "React for Beginners",
    price: "$199",
    salesAttribution: "Website",
  },
  {
    paymentDate: "2025-09-21",
    dotNumber: "DOT67890",
    customerName: "Ananya Verma",
    course: "Advanced Node.js",
    price: "$249",
    salesAttribution: "Agent - A101",
  },
  {
    paymentDate: "2025-09-22",
    dotNumber: "DOT54321",
    customerName: "Karan Mehta",
    course: "Fullstack MERN",
    price: "$399",
    salesAttribution: "Referral",
  },
];

// //course data
// // dummyCourses.js
// export const dummyCourses = [
//   {
//     id: 1,
//     image: "./courseCardImg.png",
//     title: "React Basics",
//     description: "Learn React from scratch with hands-on examples.",
//     writer: "John Doe",
//     price: 50,
//     modules: 5,
//     videos: 20,
//     quizzes: 3,
//   },
//   {
//     id: 2,
//     image: "./courseCardImg.png",
//     title: "Advanced React",
//     description: "Dive deep into hooks, context, and performance optimizations.",
//     writer: "Jane Smith",
//     price: 75,
//     modules: 8,
//     videos: 30,
//     quizzes: 5,
//   },
//   {
//     id: 3,
//     image: "./courseCardImg.png",
//     title: "Node.js & Express",
//     description: "Build scalable backend applications using Node.js and Express.",
//     writer: "Alice Johnson",
//     price: 60,
//     modules: 6,
//     videos: 25,
//     quizzes: 4,
//   },
//   {
//     id: 4,
//     image: "./courseCardImg.png",
//     title: "MongoDB Essentials",
//     description: "Master MongoDB and integrate it with your applications.",
//     writer: "Bob Lee",
//     price: 40,
//     modules: 4,
//     videos: 15,
//     quizzes: 2,
//   },
// ];

//  // charts data
//  export const coursesData = [
//   {
//     name: "React Fundamental",

//     data: [1200, 1500, 1700, 2000, 1800, 2200, 2500],
//   },
//   {
//     name: "Adv. Java",

//     data: [800, 1200, 1400, 1600, 1800, 2000, 2300],
//   },
//   {
//     name: "UI/UX Design",

//     data: [500, 900, 1300, 1500, 1700, 1900, 2100],
//   },
// ];

//  export const RevenueData = [
//   {
//     name: "Revenue",

//     data: [1200, 1500, 1700, 2000, 1800, 2200, 2500],
//   },
//   {
//     name: "Projected",

//     data: [800, 1200, 1400, 1600, 1800, 2000, 2300],
//   },
//   {
//     name: "Enrollments",

//     data: [500, 900, 1300, 1500, 1700, 1900, 2100],
//   },
// ];

// const colors=["#1E40AF","#30C93B","#E2C044"];

// export const barData = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
//   datasets: coursesData.map((c, idx) => ({
//     label: c.name,
//     data: c.data,
//     backgroundColor: colors[idx],
//     barThickness: 8,
//     barPercentage: 1,
//     categoryPercentage: 0.1,
//     borderRadius: [6, 6, 6, 6],
//     maxBarThickness: 21,
//   })),
// };

// export const RevenueBarData = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
//   datasets: RevenueData.map((c, idx) => ({
//     label: c.name,
//     data: c.data,
//     backgroundColor: colors[idx],
//     barThickness: 8,
//     barPercentage: 1,
//     categoryPercentage: 0.1,
//     borderRadius: [6, 6, 6, 6],
//     maxBarThickness: 21,
//   })),
// };
// export const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     cutout: "70%",
//     layout: {
//       padding:{
//         top: 20,    // upar gap
//         bottom: 10
//       }
//     },
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//         boxWidth: 12,   // 👈 color box width
//         boxHeight: 12,  // 👈 color box height

//         padding: 8,     // 👈 text aur box ke beech space
//         font: {
//           size: 12,     // 👈 text
//         },
//       },
//     }
//   }
// };

// export const progressBarOptions={...options,
//   indexAxis:'y',
//   scales: {
//     x: {
//       min: 0,
//       max: 3000,   // max value set karni hai
//       display: false, // x-axis ke numbers hide
//     },
//     y: {
//       ticks: { font: { size: 14 } ,padding:50}, // course names dikhe y-axis pe
//       display:false,
//       offset: true,
//     },
//   },}

// export  const doughnutData = {
//     labels: ["enrollment", "new users", "new employees"],
//     datasets: [
//       {
//         data: [55, 25, 20],
//         backgroundColor: ["#1E40AF", "#30C93B", "#E2C044"], // blue, green,yellow
//       },
//     ],
//   };

// export

//  const lineData = {
//   labels: ["day 5", "day 10", "day 15", "day 20", "day 25"],
//   datasets: [
//     {
//       label: "Sales",
//         data: [10, 20, 15, 30, 25],
//         borderColor: "rgb(59,130,246)", // blue-500
//         backgroundColor: "rgba(59,130,246,0.4)",
//         fill: true,
//         borderWidth: 1.5, //sleek line
//         pointRadius: 2,   //small points
//         tension: 0.4,
//       },
//     ],
//   };

// const ProgColors = ["#1E40AF", "#30C93B", "#E2C044"];
// const courses = ["React Fundamental", "Advanced Java", "UI/UX Design"];
// const values = [2500, 2000, 1800];

//  export const progressBarData = {
//   labels: ["React Fundamental", "Advanced Java", "UI/UX Design"], // y-axis pe ye dikhega
//   datasets: courses.map((c,idx)=>({
//     label: c,
//       data: [values[idx]], // har ek course ki value
//       backgroundColor: ProgColors[idx], // alag-alag color
//       borderRadius: 6,
//       maxBarThickness: 12, // mota bar
//       categoryPercentage:1.4,
//       barPercentage: 0.8,
//     }))

//   };

//   //analysis page conversion funnel progress bar data
//   const convColors = ["#1E40AF", "#30C93B", "#E2C044"];
// const convAry = ["Leads", "Signup", "Enrollments"];
// const convValues = [2500, 2000, 1800];

//  export const convProgressBarData = {
//   labels: ["leads", "signup", "enrollments"], // y-axis pe ye dikhega
//   datasets: convAry.map((c,idx)=>({
//     label: c,
//       data: [convValues[idx]], // har ek course ki value
//       backgroundColor: convColors[idx], // alag-alag color
//       borderRadius: 6,
//       maxBarThickness: 12, // mota bar
//       categoryPercentage:1.4,
//       barPercentage: 0.8,
//     }))

//   };

//   //dash-card-data
//   import { FaUser } from "react-icons/fa";
//   import { VscVmActive } from "react-icons/vsc";
//   import { GiGraduateCap } from "react-icons/gi";
//   import { FaUserCircle } from "react-icons/fa";

//      export const cardDetail=[{
//       // digits:2000,
//       title:"Total Users",
//       icon:FaUser,
//       iconClass:"w-6 h-6 text-blue-500",
//     },
//     {
//       // digits:2000,
//       title:"Active Users",
//       icon:VscVmActive,
//       iconClass:"w-6 h-6 text-blue-500"
//     },
//     {
//       // digits:2000,
//       title:"Total Courses",
//       icon:GiGraduateCap,
//        iconClass:"w-6 h-6 text-blue-500"

//     },
//     {
//       // digits:2000,
//       title:"Revenue",
//       icon:FaUserCircle,
//        iconClass:"w-6 h-6 text-blue-500",
//     },
//    ]

//    export const AnalyticscardDetail=[{
//       // digits:2000,
//       title:"Total Revenue",
//       icon:FaUser,
//       iconClass:"w-6 h-6 text-blue-500",
//     },
//     {
//       // digits:2000,
//       title:"Total Enrollment",
//       icon:VscVmActive,
//       iconClass:"w-6 h-6 text-blue-500"
//     },
//     {
//       // digits:2000,
//       title:"Completion Rate",
//       icon:GiGraduateCap,
//        iconClass:"w-6 h-6 text-blue-500"

//     },
//     {
//       // digits:2000,
//       title:" Avg Revenue User",
//       icon:FaUserCircle,
//        iconClass:"w-6 h-6 text-blue-500",
//     },
//    ]
