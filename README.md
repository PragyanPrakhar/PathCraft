# Path-crafter

Path-crafter is a personalized learning roadmap generator that helps users efficiently learn new technologies. Users can specify the technology they wish to learn, the number of days they want to invest, and their expertise level (beginner, moderate, experienced, or expert). Based on this information, the app generates a precise learning roadmap, complete with daily topics, related documents, resources, and video tutorials.

## Features

- **Personalized Roadmap**: Enter the technology, select your level, and define the number of days to receive a tailored roadmap.
- **Daily Learning Plan**: Each day is structured with topics to learn, and associated resources like documents, videos, and links.
- **Resource-Rich**: Roadmaps come with resources such as documents, video tutorials, and external links for effective learning.
- **Roadmap Management**: Users can view, manage, and delete their previously generated roadmaps.
- **User Authentication**: Secure login using Firebase Authentication.
- **Database Integration**: All roadmaps are stored in Firestore, allowing users to access their generated plans anytime.
- **Gemini AI Integration**: Uses the Gemini API to generate a customized learning roadmap based on user inputs.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for creating responsive designs.
- **Shadcn/ui**: Modern and sleek UI components to enhance the user experience.
- **Firebase**: Provides user authentication and Firestore database for storing roadmaps.
- **Gemini AI**: AI-driven service for generating personalized learning roadmaps.
- **React Router DOM**: For seamless navigation within the web app.
- **React Player**: For embedding and playing video tutorials directly within the app.

## How It Works

1. **User Input**: Enter the technology you wish to learn.
2. **Define Timeframe**: Specify the number of days for learning and your experience level.
3. **Generate Roadmap**: Click the "Generate Roadmap" button, and Path-crafter will create a personalized learning plan for you.
4. **Learning Plan**: Each day's learning includes detailed topics, documents, resources, and video tutorials.
5. **Manage Roadmaps**: View previously generated roadmaps or delete them if no longer needed.

## Live Link :-  https://path-crafter.vercel.app/

## Screenshots

### Landing Page

![Landing Page](./src/assets/path-crafter.vercel.app_ (1).png)

### Create Roadmap

![Create Roadmap](./src//assets/path-crafter.vercel.app_ (2).png)

### View and Manage Roadmaps

![View and Manage Roadmaps](./src/assets/path-crafter.vercel.app_ (4).png)

## Installation

To set up Path.ai locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/PathCraft.git
   cd PathCraft
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**
   Create a .env file in the root directory and add the necessary environment variables for Firebase and other services. You can take help from .env.sample:

4. **Run the Application**

```bash
  npm run dev
```
The application will be available at http://localhost:5173.


