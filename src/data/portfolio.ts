export const PORTFOLIO_DATA = {
    name: "Ritvik Vasikarla",
    role: "Graduate student in business analytics with a background in statistics, mathematics and economics.",
    bio: "I'm Ritvik — a data person who can build. I have projects in ML, data engineering, and software. Figuring it out one problem at a time.",
    email: "ritvik.vasikarla@gmail.com",
    socials: {
        github: "https://github.com/ritvikv03",
        linkedin: "https://www.linkedin.com/in/ritvikvasikarla/",
        leetcode: "https://leetcode.com/u/ritvikv2/",
        twitter: "https://twitter.com/ritvikv03", // Will be swapped for GitHub in Hero
        resume: "/resume.pdf",
    },
    activity: {
        status: "Building",
        project: "PESTEL AI Agents/Workflow",
    },
    stack: [
        { name: "Python", icon: "Code2" },
        { name: "SQL", icon: "Database" },
        { name: "Pandas", icon: "BarChart" },
        { name: "NumPy", icon: "Cpu" },
        { name: "Matplotlib", icon: "BarChart" },
        { name: "Scikit-learn", icon: "Brain" },
        { name: "TensorFlow", icon: "Brain" },
        { name: "PyTorch", icon: "Brain" },
        { name: "OpenAI API", icon: "Zap" },
        { name: "LangChain", icon: "Terminal" },
        { name: "AI Agents", icon: "Smartphone" },
        { name: "Pinecone", icon: "Database" },
        { name: "Hugging Face", icon: "Globe" },
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
            company: "Graduate Data Analytics Club",
            title: "Analytics Lead",
            type: "Part-time",
            period: "Aug 2025 — Present",
            link: "https://www.linkedin.com/in/ritvikvasikarla/",
            points: [
                "Led analytics initiatives within a graduate data science community, providing guidance on problem framing and modeling approaches.",
                "Reviewed and advised on peer analytics projects involving Python, SQL, and statistical modeling.",
                "Promoted decision-focused data science workflows through discussions on feature engineering and model evaluation."
            ]
        },
        {
            company: "Molson Coors Beverage Company",
            title: "Analytics Challenge - Product Analytics & NLP Modeling",
            type: "Self-employed",
            period: "Nov 2025",
            link: "https://www.linkedin.com/in/ritvikvasikarla/",
            points: [
                "Placed 1st overall by developing an NLP framework to optimize eCommerce product descriptions for online beer sales.",
                "Engineered 15+ NLP features to quantify how copy structure and readability impact eCommerce performance.",
                "Delivered actionable recommendations projected to increase eCommerce sales by 30-40% through data-driven copy optimization."
            ]
        },
        {
            company: "UW-Madison's Business Analytics MSBA",
            title: "MSBA Analytics Challenge - Healthcare Analytics",
            type: "Self-employed",
            period: "Oct 2025",
            link: "https://www.linkedin.com/in/ritvikvasikarla/",
            points: [
                "Placed 2nd overall by building a machine learning solution (XGBoost/Ensemble) to predict 30-day hospital readmissions.",
                "Analyzed 10,000 patient admissions to identify high-risk populations and surface key clinical drivers using SHAP analysis.",
                "Translated analytical findings into actionable healthcare strategies, including targeted interventions for high-risk diagnoses."
            ]
        }
    ],
    projects: [
        {
            title: "Data Analysis Chatbot",
            description: "Interactive data analysis tool that Chat with your data using Google Gemini AI. Upload CSV/Excel/PDF/Word files for instant insights and visualizations.",
            tech: ["Python", "Streamlit", "Gemini AI", "Pandas", "NLP"],
            github: "https://github.com/ritvikv03/Data_Analysis_Chatbot",
            image: "/projects/chatbot.jpeg",
            status: "Featured Project",
            span: "md:col-span-2"
        },
        {
            title: "NBA 3-Point Breakdown",
            description: "Exploratory data analysis of NBA shooting trends, focusing on the evolution of 3-point efficiency and volume across different eras.",
            tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Analytics"],
            github: "https://github.com/ritvikv03/NBA-3-Point-Breakdown-",
            image: "/projects/nba_analytics.png",
            span: "md:col-span-1"
        },
        {
            title: "Spotify Visualizer & Recommender",
            description: "Music discovery platform that visualizes your listening habits and provides personalized playlist recommendations using the Spotify API.",
            tech: ["Vue.js", "Spotify API", "Tailwind CSS", "JavaScript"],
            github: "https://github.com/ritvikv03/Spotify-Visualizer-Recommendation",
            image: "/projects/spotify_visualizer.png",
            span: "md:col-span-1"
        },
        {
            title: "Bankruptcy Prediction",
            description: "Machine learning model developed to predict corporate bankruptcy using financial ratios and historical performance data.",
            tech: ["Python", "Scikit-Learn", "XGBoost", "Data Science"],
            github: "https://github.com/ritvikv03/Bankruptcy-Prediction",
            image: "/projects/stock_market.png",
            span: "md:col-span-2"
        }
    ],
    copy: {
        connectTitle: "Let's work together.",
        connectSubtitle: "I'm always open to discussing technical projects, research opportunities, or collaborating on innovative products.",
        connectDescription: "Whether you have a specific idea or just want to talk tech, feel free to reach out. I'm ready to contribute and ship high-quality results."
    }
};
