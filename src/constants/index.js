import { ManhHuyTV, Headphonic, YoutubeClone, AdminPanel, ModernBank } from "../assets"

export const bannerDetails = {
    name: "Manh Huy Vo",
    preferedName: "Eric",
    title: "Junior Web Developer / Software Engineer",
    summary: "Hello, I'm Eric - a self-motivated Junior Software Engineer offering a strong foundation in Softwares and web applications development with 1 year experience as an entry-level web developer in the industry. I am currently open to Junior & Entry-Level positions as a software engineer and willing to relocate across Australia.",
    image: "https://img.freepik.com/free-vector/businessman-catching-star-climbing-ladder-sky_74855-19696.jpg?w=1380&t=st=1672022568~exp=1672023168~hmac=77d169c175ea2b46ccd11f9d4c9453c5ff3d2d7b1a6d2880ff6b8fcfef062683",
    background: "https://img.freepik.com/premium-vector/abstract-binary-number-system-concept-network-internet-circuit-computer-numbers-0-1-digital-cryptography-basic-computer-programming-blue-background-modern-futuristic_36402-1161.jpg?w=1380",
}
export const themeColors = {
    darkBackground: "#061220",
    mainHeaderText: "32bb62",
    subHeadingText: "",
    normalText: "",
}

export const skillAndEducation = {
    header: "My SKills & Education",
    education: "Bachelor of IT (Mobile Apps and Software Development)",
    headingImage: "https://img.freepik.com/free-vector/online-school-platform-abstract-concept-illustration-homeschooling-online-education-platform-digital-classes-virtual-courses-lms-school_335657-3486.jpg?size=338&ext=jpg&ga=GA1.2.1699545944.1672017980&semt=sph",
    skills: [
        {
            name: "Front-End Development",
            description: "Create responsive websites using HTML/CSS, JavaScript, React.js, Angular.js and frameworks as TailwindCSS, Material UI, Bootstrap",
            category: "frontend"
        },
        {
            name: "Back-End Development",
            description: "Develop back-end server along with building and fetching APIs using Node.js, PHP, C#",
            category: "backend"
        },
        {   
            name: "Database Management",
            description: "Manage database structures, testing database query in MySQL and MongoDB",
            category: "database"
        },
        {
            name: "Object-Oriented Programming",
            description: "Strong knowledge about various OOP languages and technologies such as C#, C++, Java, Python",
            category: "oop"
        }
    ]
}

export const project = {
    header: "My Recent Projects",
    subheading: "Below are the projects that I have worked on to learn and improve my development skills everyday.",
    projects: [
        {
            name: "Headphonic (Spotify Clone Version)",
            image: Headphonic,
            description: "A practice project to clone Spotify, built with React.JS, ShazamCore API, Vite, Tailwind CSS, Redux, HTML/CSS/Javascript.",
            github: "https://github.com/manhhuyvo/spotifyclone-headphonic",
            liveDemo: "https://manhhuyvo-headphonic.netlify.app/",
        },
        {
            name: "ManhHuyTV (Netflix)",
            image: ManhHuyTV,
            description: "A practice project to clone Netflix that I have done using HTML, CSS, Javascript as Front End and PHP, SQL for building Back End.",
            github: "https://github.com/manhhuyvo/ManhHuyTV",
            liveDemo: "https://manhhuytv.000webhostapp.com/pages/index.php",
        },
        {
            name: "Youtube Clone Version",
            image: YoutubeClone,
            description: "A practice project to clone Youtube that built with React.JS, Material UI, Youtube V3 API, HTML, CSS, Javascript.",
            github: "https://github.com/manhhuyvo/youtube-clone",
            liveDemo: "https://manhhuyvo-youtube.netlify.app/ ",
        },
        {
            name: "Admin Panel UI",
            image: AdminPanel,
            description: "A practice project to build an Admin Panel UI using React.js, HTML, SCSS, Material UI (no database fetching).",
            github: "https://github.com/manhhuyvo/admin-panel-ui",
            liveDemo: "https://manhhuyvo-adminpanel.netlify.app/",
        },
        {
            name: "Modern Banking UI",
            image: ModernBank,
            description: "A practice project to build a Front End UI of Website using React, Tailwind CSS, HTML, CSS, JavaScript (Reference from Javascript Mastery).",
            github: "https://github.com/manhhuyvo/banking-react-ui",
            liveDemo: "https://manhhuyvo-bankfrontend.netlify.app/ ",
        },
    ]
}

export const contact = {
    header: "Let's Have A Chat !",
    fullName: "Manh Huy Vo (Eric)",
    phone: "(+61) 452 097 206",
    email: "manhhuyvo@gmail.com",
    location: "South Hobart, Tasmania 7004 (Can work remote or relocate across Australia)",
}