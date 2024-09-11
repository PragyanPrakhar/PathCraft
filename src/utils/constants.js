export const navItems = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Create",
        path: "/create",
    },
    {
        name: "About",
        path: "/create/about",
    },
    {
        name: "Contact",
        path: "/create/contact",
    },
    {
        name: "Roadmaps",
        path: "/create/roadmaps",
    },
];

export const level = [
    {
        id: 1,
        title: "Beginner",
        desc: "start from scratch",
        icon: "😊",
    },
    {
        id: 2,
        title: "Moderate",
        desc: "spend wisely",
        icon: "👨‍💻",
    },
    {
        id: 3,
        title: "advance",
        desc: "invest in yourself",
        icon: "🚀",
    },
    {
        id: 4,
        title: "Expert",
        desc: "king level knowledge ",
        icon: "👑",
    },
];

export const featuresData = [
    {
        name: "AI-Powered",
        logo: "🤖",
        description: [
            "Let our AI analyze and",
            "suggest personalized learning roadmaps",
            " for various technologies.",
        ],
    },
    {
        name: "AI-Assessment",
        logo: "👨🏻‍🏫",
        description: [
            "Use AI-powered quizzes ",
            "and challenges to evaluate",
            " yours skill level. ",
        ],
    },
    {
        name: "Create Paths",
        logo: "🏔️",
        description: [
            "creatte your own path",
            "of learning any technology",
            "you want to learn",
        ],
    },
    {
        name: "Learning Resources",
        logo: "🪶",
        description: [
            "Leverage AI to curate ",
            "the most effective resources",
            " for each step of your path.",
        ],
    },
    {
        name: "Save & Sharing",
        logo: "↗️",
        description: [
            "save and Share your ",
            "created paths with yor friend",
            "to help them grow",
        ],
    },
    {
        name: "Authentication",
        logo: "👨‍💻",
        description: [
            "secure Authentication system",
            "with google sign in",
            "firebase",
        ],
    },
];

export const PROMPT =
    "you are professional roadmap creater and i want to learn #react and i am #begineer and i want to learn in #25 days. you have to generate a full roadmap not outline, for #25 days in array of objects in which each object has has multiple things like topics covered ,between how many days, authentic resource link if possible , videos link if possible, defficulty level, etc. keep in mind that output should be only in array of objects, nothing except it. only array of objects, here is example [{topic: 'React Fundamentals',days: 1-5,difficulty: 'Beginner',resources: [{type: 'Documentation',title: 'Official React Documentation',link: 'https://reactjs.org/',},],},], optput only array of object no any text outside.";

export const {
    VITE_FIREBASE_API_KEY,
    VITE_FIREBASE_AUTH_DOMAIN,
    VITE_FIREBASE_PROJECT_ID,
    VITE_FIREBASE_STORAGE_BUCKET,
    VITE_FIREBASE_MESSAGING_SENDER_ID,
    VITE_FIREBASE_APP_ID,
    VITE_FIREBASE_MEASUREMENT_ID,
    VITE_GOOGLE_API_KEY,
} = import.meta.env;
