export const PORTFOLIO_DATA = {
    name: "Ritvik Vasikarla",
    role: "Full-stack engineer building technical software & visual products.",
    bio: "Engineering high-performance, visually stunning digital experiences. Focused on AI, Computer Vision, and modern web architecture.",
    email: "ritvik.vasikarla@gmail.com",
    socials: {
        github: "https://github.com/ritvikv03",
        linkedin: "https://www.linkedin.com/in/ritvikvasikarla/",
        leetcode: "https://leetcode.com/ritvikv03/",
        twitter: "https://twitter.com/ritvikv03",
        resume: "/resume.pdf",
    },
    activity: {
        status: "Building",
        project: "Solar Station",
    },
    stack: [
        { name: "Python", icon: "Code2" },
        { name: "SQL", icon: "Database" },
        { name: "Pandas", icon: "BarChart" },
        { name: "NumPy", icon: "Cpu" },
        { name: "Matplotlib", icon: "BarChart" },
        { name: "Scikit-learn", icon: "Brain" },
        { name: "SQLite", icon: "Database" },
        { name: "DuckDB", icon: "Database" },
        { name: "MySQL", icon: "Database" },
        { name: "Snowflake", icon: "Cloud" },
        { name: "dbt", icon: "Zap" },
        { name: "Git", icon: "GitBranch" },
        { name: "VS Code", icon: "Terminal" },
        { name: "Docker", icon: "Box" },
        { name: "AWS", icon: "Cloud" },
        { name: "Kafka", icon: "Zap" },
        { name: "Power BI", icon: "BarChart" },
        { name: "Next.js", icon: "Layout" },
        { name: "TypeScript", icon: "Terminal" },
        { name: "React", icon: "Layers" },
        { name: "Tailwind CSS", icon: "Wand2" },
    ],
    experience: [
        {
            company: "Self-Employed",
            title: "Full Stack Engineer",
            type: "Freelance",
            period: "2024 — Present",
            points: [
                "Developing modern web applications using Next.js, TypeScript, and AI integrations.",
                "Focused on high-performance architecture and premium user experience design."
            ]
        },
        {
            company: "Academic Project",
            title: "AI Research Fellow",
            type: "Fellowship",
            period: "2023 — 2024",
            points: [
                "Implemented deep learning models for computer vision tasks using TensorFlow and PyTorch.",
                "Specialized in object detection and facial feature analysis for research datasets."
            ]
        },
        {
            company: "Tech Start-up",
            title: "Frontend Developer Intern",
            type: "Internship",
            period: "2022 — 2023",
            points: [
                "Collaborated with cross-functional teams to build responsive user interfaces.",
                "Optimized dashboard performance and implemented real-time data visualization."
            ]
        }
    ],
    projects: [
        {
            title: "Data Analysis Chatbot",
            description: "Interactive Streamlit app using Google Gemini AI to simplify complex data analytics. Upload CSV/Excel/PDF/Word for instant insights.",
            tech: ["Python", "Streamlit", "Gemini AI"],
            github: "https://github.com/ritvikv03/Data_Analysis_Chatbot",
            image: "/project-data.png",
            status: "Featured Project",
            span: "md:col-span-2"
        },
        {
            title: "Spotify Visualizer & Recommendation",
            description: "Vue-based interactive tool providing a galaxy visualization of music and playlist recommendations using the Spotify API.",
            tech: ["Vue.js", "Spotify API", "Tailwind"],
            github: "https://github.com/ritvikv03/Spotify-Visualizer-Recommendation",
            image: "/project-spotify.png",
            span: "md:col-span-1"
        },
        {
            title: "Molson Coors Analytics",
            description: "Data science project for eCommerce content optimization to drive sales for Molson Coors, developed for an analytics challenge.",
            tech: ["Python", "Pandas", "Analytics"],
            github: "https://github.com/ritvikv03/Molson_Coors_Analytics_Challenge",
            image: "/project-analytics.png",
            span: "md:col-span-1"
        },
        {
            title: "Portfolio Website",
            description: "Modern, high-performance developer portfolio with glassmorphism, fluid animations, and a secure build pipeline.",
            tech: ["Next.js", "TypeScript", "Tailwind 4"],
            github: "https://github.com/ritvikv03/new_portfolio",
            image: "/project-portfolio.png",
            span: "md:col-span-2"
        }
    ]
};
