/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
        {
            role: "user",
            parts: [
                {
                    text: 'you are professional roadmap creater and i want to learn react and i am biginer and i want to learn in days. you have to generate a full roadmap not outline, for 60 days in array of object in which each object has has multiple things like topics covered ,between how many days, authentic resourse link if possible , vedios link if possible, defficulty level, etc. keep in mind output only in array of object, nothing outside. accept array haere is example [\n{\ntopic: "React Fundamentals",\ndays: 1-5,\ndifficulty: "Beginner",\nresources: [\n{\ntype: "Documentation",\ntitle: "Official React Documentation",\nlink: "https://reactjs.org/",\n},\n],\n},], output shoulf only array of object no any text outside.\n',
                },
            ],
        },
        {
            role: "model",
            parts: [
                {
                    text: '```json\n[\n  {\n    "topic": "React Fundamentals",\n    "days": "1-5",\n    "difficulty": "Beginner",\n    "resources": [\n      {\n        "type": "Documentation",\n        "title": "Official React Documentation",\n        "link": "https://reactjs.org/",\n      },\n      {\n        "type": "Video Tutorial",\n        "title": "React - The Complete Guide (incl Hooks, Redux, React Router, etc.)",\n        "link": "https://www.udemy.com/course/react-the-complete-guide-incl-hooks-redux-react-router-etc/"\n      },\n      {\n        "type": "Interactive Course",\n        "title": "Learn React",\n        "link": "https://www.freecodecamp.org/learn/front-end-libraries/react/"\n      }\n    ]\n  },\n  {\n    "topic": "JSX and Components",\n    "days": "6-10",\n    "difficulty": "Beginner",\n    "resources": [\n      {\n        "type": "Documentation",\n        "title": "JSX in React",\n        "link": "https://reactjs.org/docs/introducing-jsx.html"\n      },\n      {\n        "type": "Video Tutorial",\n        "title": "JSX and Components in React - Crash Course",\n        "link": "https://www.youtube.com/watch?v=sBws8MS_akE"\n      },\n      {\n        "type": "Interactive Course",\n        "title": "React - JSX and Components",\n        "link": "https://scrimba.com/learn/react/jsx"\n      }\n    ]\n  },\n  {\n    "topic": "State and Props",\n    "days": "11-15",\n    "difficulty": "Beginner",\n    "resources": [\n      {\n        "type": "Documentation",\n        "title": "State and Lifecycle",\n        "link": "https://reactjs.org/docs/state-and-lifecycle.html"\n      },\n      {\n        "type": "Video Tutorial",\n        "title": "React State and Props Tutorial",\n        "link": "https://www.youtube.com/watch?v=ke90Tje7VS0"\n      },\n      {\n        "type": "Interactive Course",\n        "title": "React - State and Props",\n        "link": "https://www.freecodecamp.org/learn/front-end-libraries/react/using-props-to-pass-data-to-components"\n      }\n    ]\n  },\n  {\n    "topic": "Events and Forms",\n    "days": "16-20",\n    "difficulty": "Beginner",\n    "resources": [\n      {\n        "type": "Documentation",\n        "title": "Handling Events",\n        "link": "https://reactjs.org/docs/handling-events.html"\n      },\n      {\n        "type": "Video Tutorial",\n        "title": "React Events and Forms - Crash Course",\n        "link": "https://www.youtube.com/watch?v=Q_x-p2N-yWo"\n      },\n      {\n        "type": "Interactive Course",\n        "title": "React - Events and Forms",\n        "link": "https://scrimba.com/learn/react/events"\n      }\n    ]\n  },\n  {\n    "topic": "Conditional Rendering",\n    "days": "21-25",\n    "difficulty": "Beginner",\n    "resources": [\n      {\n        "type": "Documentation",\n        "title": "Conditional Rendering",\n        "link": "https://reactjs.org/docs/conditional-rendering.html"\n      },\n      {\n        "type": "Video Tutorial",\n        "title": "React Conditional Rendering Explained",\n        "link": "https://www.youtube.com/watch?v=m_i200R366M"\n      },\n      {\n        "type": "Interactive Course",\n        "title": "React - Conditional Rendering",\n        "link": "https://www.freecodecamp.org/learn/front-end-libraries/react/rendering-conditionally"\n      }\n    ]\n  },\n  {\n    "topic": "Lists and Keys",\n    "days": "26-30",\n    "difficulty": "Beginner",\n    "resources": [\n      {\n        "type": "Documentation",\n        "title": "Lists and Keys",\n        "link": "https://reactjs.org/docs/lists-and-keys.html"\n      },\n      {\n        "type": "Video Tutorial",\n        "title": "React Lists and Keys Tutorial",\n        "link": "https://www.youtube.com/watch?v=K_o_z78v4bQ"\n      },\n      {\n        "type": "Interactive Course",\n        "title": "React - Lists and Keys",\n        "link": "https://scrimba.com/learn/react/lists-and-keys"\n      }\n    ]\n  },\n  {\n    "topic": "React Hooks",\n    "days": "31-35",\n    "difficulty": "Intermediate",\n    "resources": [\n      {\n        "type": "Documentation",\n        "title": "Hooks API",\n        "link": "https://reactjs.org/docs/hooks-intro.html"\n      },\n      {\n        "type": "Video Tutorial",\n        "title": "React Hooks - The Complete Guide",\n        "link": "https://www.youtube.com/watch?v=gJ51Q8yG70Q"\n      },\n      {\n        "type": "Interactive Course",\n        "title": "React Hooks - Freecodecamp",\n        "link": "https://www.freecodecamp.org/learn/front-end-libraries/react/using-hooks"\n      }\n    ]\n  },\n  {\n    "topic": "useState and useEffect",\n    "days": "36-40",\n    "difficulty": "Intermediate",\n    "resources": [\n      {\n        "type": "Documentation",\n        "title": "useState Hook",\n        "link": "https://reactjs.org/docs/hooks-reference.html#usestate"\n      },\n      {\n        "type": "Video Tutorial",\n        "title": "React useState Hook Explained",\n        "link": "https://www.youtube.com/watch?v=O6yN_l-w12s"\n      },\n      {\n        "type": "Interactive Course",\n        "title": "React - useState Hook",\n        "link": "https://scrimba.com/learn/react/usestate"\n      }\n    ]\n  },\n  {\n    "topic": "React Router",\n    "days": "41-45",\n    "difficulty": "Intermediate",\n    "resources": [\n      {\n        "type": "Documentation",\n        "title": "React Router",\n        "link": "https://reactrouter.com/docs/en/v6"\n      },\n      {\n        "type": "Video Tutorial",\n        "title": "React Router 6 Tutorial",\n        "link": "https://www.youtube.com/watch?v=M5xS5p-U14w"\n      },\n      {\n        "type": "Interactive Course",\n        "title": "React Router - Freecodecamp",\n        "link": "https://www.freecodecamp.org/learn/front-end-libraries/react/using-react-router"\n      }\n    ]\n  },\n  {\n    "topic": "Redux",\n    "days": "46-50",\n    "difficulty": "Intermediate",\n    "resources": [\n      {\n        "type": "Documentation",\n        "title": "Redux Documentation",\n        "link": "https://redux.js.org/"\n      },\n      {\n        "type": "Video Tutorial",\n        "title": "Redux Tutorial - Beginners Guide",\n        "link": "https://www.youtube.com/watch?v=sBws8MS_akE"\n      },\n      {\n        "type": "Interactive Course",\n        "title": "Redux - Freecodecamp",\n        "link": "https://www.freecodecamp.org/learn/front-end-libraries/redux/"\n      }\n    ]\n  },\n  {\n    "topic": "Building a React Project",\n    "days": "51-60",\n    "difficulty": "Intermediate",\n    "resources": [\n      {\n        "type": "Project Ideas",\n        "title": "FreeCodeCamp React Projects",\n        "link": "https://www.freecodecamp.org/learn/front-end-libraries/react/building-a-react-project"\n      },\n      {\n        "type": "Resource",\n        "title": "React Developer Tools",\n        "link": "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"\n      },\n      {\n        "type": "Resource",\n        "title": "Create React App",\n        "link": "https://create-react-app.dev/"\n      },\n      {\n        "type": "Resource",\n        "title": "CodeSandbox",\n        "link": "https://codesandbox.io/"\n      }\n    ]\n  }\n]\n```',
                },
            ],
        },
    ],
});
