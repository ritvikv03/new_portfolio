export const PORTFOLIO_DATA = {
    name: "Ritvik Vasikarla",
    role: "Data Scientist & Builder at Heart",
    bio: "I design and build data-driven systems that turn complex data into meaningful insights. From statistical modeling and machine learning to cloud-based analytics and interactive visualizations, I create solutions driven by curiosity and impact across tech and finance.",
    email: "ritvik.vasikarla@gmail.com",

    socials: {
        github: "https://github.com/ritvikv03",
        linkedin: "https://linkedin.com/in/ritvikvasikarla",
        instagram: "https://instagram.com/ritvik.vasikarla",
        spotify: "https://open.spotify.com/user/6h7wj3ios3w0g77wxxivl0idc?si=03fbbaedfe264118",
        discord: "https://discord.com/users/559173897984147458",
        leetcode: "https://leetcode.com/u/ritvikv2/",
        resume: "/resume.pdf"
    },

    // Modern Dashboard Stats
    dashboardStats: [
        { label: "Home Base", value: "Austin, TX", detail: "Current Location", icon: "map-pin" },
        { label: "Alma Mater", value: "Texas A&M", detail: "University", icon: "award" },
        { label: "Strategic Play", value: "Chess", detail: "Always thinking steps ahead", icon: "target" },
        { label: "Recreational", value: "Hooper", detail: "Basketball enthusiast", icon: "basketball" }
    ],

    // Unique Accreditations
    accreditations: [
        { title: "Harvard CS50x", provider: "Harvard SEAS", year: "2023", detail: "Computer Science Foundation" },
        { title: "Social Impact Strategy", provider: "UPenn / Coursera", year: "2024", detail: "Social Entrepreneurship" },
        { title: "Distinguished Student", provider: "Texas A&M", year: "2024", detail: "Dean's Honor Roll" }
    ],

    // Lifestyle/Personality Mix (Added one more to fill space)
    lifestyle: [
        { label: "NBA Analyst", detail: "Basketball + technical stats", icon: "basketball" },
        { label: "Hooper", detail: "Competitive recreational player", icon: "trophy" },
        { label: "Bayesian Curious", detail: "Stats applied to everything", icon: "pie-chart" },
        { label: "Global Explorer", detail: "Adventures & perspectives", icon: "map-pin" }
    ],

    // Proof Chips
    proofChips: [
        { label: "Agentic AI", detail: "7-phase automated pipeline", icon: "bot" },
        { label: "Production DS", detail: "Sub-2s inference latency", icon: "zap" },
        { label: "Visual Analytics", detail: "Vue.js + Spotify real-time", icon: "layout" },
        { label: "Data Engineering", detail: "Snowflake + dbt + LangChain", icon: "database" },
        { label: "Econometrics", detail: "Causal inference specialist", icon: "trending-up" }
    ],

    highlights: [
        { label: "288+ CONTRIBUTIONS", icon: "git-commit" },
        { label: "CS50X ALUMNI", icon: "scroll" },
        { label: "TAMU DEAN'S LIST", icon: "award" },
        { label: "CHESS ENTHUSIAST", icon: "swords" },
        { label: "AUSTIN, TX", icon: "map-pin" }
    ],

    stackPillars: [
        {
            label: "Data Science",
            items: [
                { name: "Python / SQL", cue: "Production use" },
                { name: "Econometrics", cue: "Causal logic" },
                { name: "NLP", cue: "Clustering/Sentiment" }
            ]
        },
        {
            label: "Data Engineering",
            items: [
                { name: "Snowflake", cue: "Warehouse" },
                { name: "dbt", cue: "Transformations" },
                { name: "GCP / AWS", cue: "Cloud pipelines" }
            ]
        },
        {
            label: "ML / LLM Engineering",
            items: [
                { name: "LangChain", cue: "Agents" },
                { name: "XGBoost", cue: "Winning models" },
                { name: "Reinforcement Learning", cue: "bandits" }
            ]
        },
        {
            label: "App + Visualization",
            items: [
                { name: "React / Next.js", cue: "v14+" },
                { name: "Vue.js", cue: "Spotify viz" },
                { name: "Tailwind / CSS", cue: "Modern UI" }
            ]
        }
    ],

    stackAlsoUsed: [
        "TensorFlow", "Scikit-Learn", "FastAPI", "Tableau", "PowerBI", "Docker", "Git", "PostgreSQL"
    ],
    toolbelt: [
        { name: "VS Code", category: "Editor" },
        { name: "Cursor", category: "AI IDE" },
        { name: "Terminal", category: "Shell" },
        { name: "Docker", category: "Container" },
        { name: "Git", category: "VCS" },
        { name: "Arc", category: "Browser" },
        { name: "Postman", category: "API" }
    ],

    projects: [
        {
            title: "Chatbot Project",
            hook: "Advanced AI chatbot with custom knowledge integration and natural language interface.",
            highlights: [
                "Integrated with GitHub for seamless codebase understanding",
                "Context-aware response generation using state-of-the-art LLMs",
                "Reactive UI for real-time human-AI interaction"
            ],
            metric: "REAL-TIME INTERACTION",
            tech: ["LangChain", "Python", "React", "OpenRouter"],
            image: "/projects/chatbot.jpeg",
            github: "https://github.com/ritvikv03",
            status: "Production",
            tag: "LLM / Agents"
        },
        {
            title: "Spotify Visualizer",
            hook: "Real-time personalization engine with sub-2s recommendation latency.",
            highlights: [
                "Implemented multi-armed bandit logic for dynamic reranking",
                "Built with Vue.js and CI/CD via GitHub Actions",
                "Visualizes complex song attributes using radar analytics"
            ],
            metric: "SUB-2S LATENCY",
            tech: ["Vue.js", "Python", "Actions", "Reinforcement Learning"],
            image: "/projects/spotify_new.png",
            github: "https://github.com/ritvikv03",
            live: "https://spotify-recommender-visualizer.vercel.app/",
            status: "Production",
            tag: "Full-Stack"
        },
        {
            title: "NBA Analysis",
            hook: "Data-driven insights and statistical modeling for NBA player performance.",
            highlights: [
                "Analyzed longitudinal performance metrics for top-tier athletes",
                "Modeled player impact using advanced Bayesian statistics",
                "Visualized shot charts and player efficiency ratings"
            ],
            metric: "ELITE ANALYTICS",
            tech: ["Python", "Pandas", "Matplotlib", "Statistics"],
            image: "/projects/nba_analytics.png",
            github: "https://github.com/ritvikv03",
            status: "Active",
            tag: "Data Science"
        },
        {
            title: "Bankruptcy Prediction",
            hook: "Predicting financial distress using high-dimensional accounting ratios.",
            highlights: [
                "Applied SMOTE to handle extreme class imbalance (95/5)",
                "Compared Random Forest vs Gradient Boosting for stability",
                "Achieved 91% F1-score on holdout test set"
            ],
            metric: "91% F1-SCORE",
            tech: ["Machine Learning", "Python", "Finance", "Statistics"],
            image: "/projects/stock_market.png",
            github: "https://github.com/ritvikv03",
            status: "Academic",
            tag: "Analytics"
        }
    ],

    experiences: [
        {
            company: "Innovation Radar",
            role: "ML Platform Architect",
            period: "2025 — Present",
            description: [
                "Architecting a 7-phase intelligence pipeline using LangChain agents to quantify PESTEL risks.",
                "Designing the data ingestion layer for 10+ global economic APIs.",
                "Building reactive executive dashboards for real-time strategic monitoring."
            ],
            type: "Featured Project",
            linkedin: "https://linkedin.com/in/ritvikvasikarla",
            github: "https://github.com/ritvikv03",
            location: "Austin, TX",
            technologies: ["LangChain", "Python", "GCP", "Streamlit"]
        },
        {
            company: "Molson Coors Competition",
            role: "Winner (1st Place)",
            period: "2025",
            description: [
                "Built an NLP framework projecting 30-40% eCommerce sales lift for key retailers.",
                "Engineered cross-retailer inventory logic using sentiment and volume markers.",
                "Presented findings to Molson Coors leadership as the top nationwide project."
            ],
            type: "Competition",
            linkedin: "https://linkedin.com/in/ritvikvasikarla",
            github: "https://github.com/ritvikv03",
            location: "Milwaukee, WI",
            technologies: ["NLP", "Python", "Inventory Logic", "eCommerce"]
        },
        {
            company: "Texas A&M / UW-Madison",
            role: "Researcher & Student",
            period: "2023 — 2025",
            description: [
                "Maintained Dean's Honor Roll status while building production-ready ML artifacts.",
                "Conducted Bayesian analysis on economic social issues (ECON 470).",
                "Medaled 2nd place in UW-Madison's Healthcare ML challenge."
            ],
            type: "Academic",
            linkedin: "https://linkedin.com/in/ritvikvasikarla",
            github: "https://github.com/ritvikv03",
            location: "College Station, TX",
            technologies: ["Bayesian Stats", "Machine Learning", "Economics", "Research"]
        }
    ]
};
