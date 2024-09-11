import { useParams } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "@/service/fireStore";
import { VITE_GOOGLE_API_KEY } from "@/utils/constants";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import ReactPlayer from "react-player";

const Path = () => {
    const { id } = useParams();
    const [fetchedData, setFetchedData] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState([]);
    const roadMapRef = useRef(null);
    // const [query, setQuery] = useState("");
    // const [data, setData] = useState("");
    useEffect(() => {
        getData();
        // query && getVideoPlaylist();
    }, []);
    /* const getVideoPlaylist = async () => {
        const res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&key=${VITE_GOOGLE_API_KEY}`
        );
        const data = await res.json();
        setData(data);
    }; */
    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "abcd1234"));
        querySnapshot.forEach((doc) => {
            if (doc.data().id === id) {
                setFetchedData(doc.data().detail);
                setSelectedInfo(doc.data().userSelection);
            }
        });
    };
    const scrollToRoadmap = () => {
        roadMapRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="bg-black h-screen overflow-y-scroll w-screen text-white">
            <h1 className="text-4xl font-bold text-center underline decoration-emerald-400">
                {`Your precisely curated ${selectedInfo.tech} roadmap in ${selectedInfo.days} days (${selectedInfo.level})`}
            </h1>
            <button
                onClick={scrollToRoadmap}
                className="mt-6 block mx-auto py-2 px-4 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all duration-300 ease-in-out"
            >
                Start Learning
            </button>
            {/* 
            {data && <a
                href={
                    `https://www.youtube.com/playlist?list=` +
                    data?.items[0]?.id?.playlistId
                }
                target="_blank"
                rel="noreferrer"
                className="text-sm text-emerald-400 hover:underline"
            >
                Preffered Playlist for your selected Tech
            </a>} */}

            <Accordion
                type="single"
                collapsible
                className="w-[60vw] mx-auto mt-12"
            >
                {fetchedData.map((item, index) => (
                    <AccordionItem
                        ref={roadMapRef}
                        value={`item-${index}`}
                        key={index}
                    >
                        <AccordionTrigger className="text-lg font-semibold text-white py-4 px-6 rounded-md bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out shadow-lg">
                            {item.days} days
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="relative w-[35vw] mx-auto mt-6 p-6 border border-emerald-500 rounded-lg bg-gray-900 shadow-md">
                                <h2 className="text-2xl font-semibold underline mb-4 text-center">
                                    {item.topic}
                                </h2>
                                <h3 className="text-xl text-center">
                                    Resources:
                                </h3>
                                <div className="flex justify-around mt-4">
                                    {item.resources.map((resource, idx) =>
                                        resource.type
                                            .toLowerCase()
                                            .includes("video") ? (
                                            <Popover key={idx}>
                                                <PopoverTrigger className="border border-emerald-400 text-white py-2 px-4 rounded-lg hover:bg-emerald-400 hover:text-black transition-colors duration-300 ease-in-out">
                                                    {resource.type}
                                                </PopoverTrigger>
                                                <PopoverContent className="w-full bg-black">
                                                    <ReactPlayer
                                                        url={resource.link}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        ) : (
                                            <HoverCard key={idx}>
                                                <HoverCardTrigger asChild>
                                                    <button className="border border-emerald-400 text-white py-2 px-4 rounded-lg hover:bg-emerald-400 hover:text-black transition-colors duration-300 ease-in-out">
                                                        {resource.type}
                                                    </button>
                                                </HoverCardTrigger>
                                                <HoverCardContent className="w-80 bg-gray-800 text-white p-4 rounded-md shadow-md">
                                                    <div className="space-y-2">
                                                        <h4 className="text-lg font-semibold">
                                                            {resource.title}
                                                        </h4>
                                                        <a
                                                            href={resource.link}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-sm text-emerald-400 hover:underline"
                                                        >
                                                            {resource.link}
                                                        </a>
                                                    </div>
                                                </HoverCardContent>
                                            </HoverCard>
                                        )
                                    )}
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Path;

// import { useParams } from "react-router";
// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState, useRef } from "react";
// import { db } from "@/service/fireStore";
// // import { VITE_GOOGLE_API_KEY } from "@/utils/constants";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion";
// import {
//     HoverCard,
//     HoverCardContent,
//     HoverCardTrigger,
// } from "@/components/ui/hover-card";
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover";
// import ReactPlayer from "react-player";

// const Path = () => {
//     const { id } = useParams();
//     const [fetchedData, setFetchedData] = useState([]);
//     const [selectedInfo, setSelectedInfo] = useState([]);
//     // const [query, setQuery] = useState("");
//     // const [data, setData] = useState("");
//     const roadmapRef = useRef(null); // Reference to the roadmap

//     useEffect(() => {
//         getData();
//         // query && getVideoPlaylist();
//     }, []);

//     /* const getVideoPlaylist = async () => {
//         const res = await fetch(
//             `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&key=${VITE_GOOGLE_API_KEY}`
//         );
//         const data = await res.json();
//         setData(data);
//     }; */

//     const getData = async () => {
//         const querySnapshot = await getDocs(collection(db, "abcd1234"));
//         querySnapshot.forEach((doc) => {
//             if (doc.data().id === id) {
//                 setFetchedData(doc.data().detail);
//                 // setQuery(doc.data().userSelection.tech);
//                 setSelectedInfo(doc.data().userSelection);
//             }
//         });
//     };

//     const scrollToRoadmap = () => {
//         roadmapRef.current.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <div className="bg-black h-screen overflow-y-scroll w-screen text-white">
//             <h1 className="text-4xl font-bold text-center underline decoration-emerald-400">
//                 {`Your precisely curated ${selectedInfo.tech} roadmap in ${selectedInfo.days} days (${selectedInfo.level})`}
//             </h1>

//             {/* {data && (
//                 <a
//                     href={`https://www.youtube.com/playlist?list=${data?.items[0]?.id?.playlistId}`}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-sm text-emerald-400 hover:underline block text-center mt-4"
//                 >
//                     Preferred Playlist for your selected Tech
//                 </a>
//             )} */}

//             <button
//                 onClick={scrollToRoadmap}
//                 className="mt-6 block mx-auto py-2 px-4 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all duration-300 ease-in-out"
//             >
//                 Start Learning
//             </button>

//             {/* Timeline Path */}
//             {/* <div ref={roadmapRef} className="mt-12 w-[60vw] mx-auto relative">
//                 <div className="absolute top-0 left-[20px] w-[2px] h-full bg-emerald-400"></div>
//                 <Accordion
//                     type="single"
//                     collapsible
//                     className="relative z-50"
//                 >
//                     {fetchedData.map((item, index) => (
//                         <AccordionItem value={`item-${index}`} key={index}>
//                             <div className="relative flex items-start">
//                                 <div className="mt-2 w-[12px] h-[12px] bg-emerald-400 rounded-full"></div>
//                                 <AccordionTrigger className="ml-8 w-40 text-lg font-semibold text-white py-4 px-6 rounded-md bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out shadow-lg">
//                                     {item.days} days
//                                 </AccordionTrigger>
//                                 <div>
//                                     <h1 className="ml-12 mt-4 text-2xl text-white">{item.topic}</h1>
//                                 </div>
//                             </div>
//                             <AccordionContent>
//                                 <div className="relative w-[35vw] mx-auto mt-6 p-6 border border-emerald-500 rounded-lg bg-gray-900 shadow-md hover:scale-105 transform transition-all duration-300">
//                                     <h2 className="text-2xl font-semibold underline mb-4 text-center">
//                                         {item.topic}
//                                     </h2>
//                                     <h3 className="text-xl text-center">
//                                         Resources:
//                                     </h3>
//                                     <div className="flex justify-around mt-4">
//                                         {item.resources.map((resource, idx) =>
//                                             resource.type
//                                                 .toLowerCase()
//                                                 .includes("video") ? (
//                                                 <Popover className="z-50" key={idx}>
//                                                     <PopoverTrigger className="border border-emerald-400 text-white py-2 px-4 rounded-lg hover:bg-emerald-400 hover:text-black transition-colors duration-300 ease-in-out">
//                                                         {resource.type}
//                                                     </PopoverTrigger>
//                                                     <PopoverContent className="w-full bg-black">
//                                                         <ReactPlayer
//                                                             url={resource.link}
//                                                         />
//                                                     </PopoverContent>
//                                                 </Popover>
//                                             ) : (
//                                                 <HoverCard  className="z-50" key={idx}>
//                                                     <HoverCardTrigger asChild>
//                                                         <button className="border border-emerald-400 text-white py-2 px-4 rounded-lg hover:bg-emerald-400 hover:text-black transition-colors duration-300 ease-in-out">
//                                                             {resource.type}
//                                                         </button>
//                                                     </HoverCardTrigger>
//                                                     <HoverCardContent className="z-50 w-80 bg-gray-800 text-white p-4 rounded-md shadow-md">
//                                                         <div className="space-y-2">
//                                                             <h4 className="text-lg font-semibold">
//                                                                 {
//                                                                     resource.title
//                                                                 }
//                                                             </h4>
//                                                             <a
//                                                                 href={
//                                                                     resource.link
//                                                                 }
//                                                                 target="_blank"
//                                                                 rel="noreferrer"
//                                                                 className="text-sm text-emerald-400 hover:underline"
//                                                             >
//                                                                 {
//                                                                     resource.link
//                                                                 }
//                                                             </a>
//                                                         </div>
//                                                     </HoverCardContent>
//                                                 </HoverCard>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>
//                             </AccordionContent>
//                         </AccordionItem>
//                     ))}
//                 </Accordion>
//             </div> */}

//             <div ref={roadmapRef} className="mt-12 w-[60vw] mx-auto relative">
//                 <div className="absolute top-0 left-[20px] w-[2px] h-full bg-emerald-400 z-10"></div>
//                 <Accordion
//                     type="single"
//                     collapsible
//                     className="relative z-20" // Ensure the accordion has a lower z-index
//                 >
//                     {fetchedData.map((item, index) => (
//                         <AccordionItem value={`item-${index}`} key={index}>
//                             <div className="relative flex items-start">
//                                 <div className="mt-2 w-[12px] h-[12px] bg-emerald-400 rounded-full z-20"></div>
//                                 <AccordionTrigger className="ml-8 w-40 text-lg font-semibold text-white py-4 px-6 rounded-md bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out shadow-lg z-20">
//                                     {item.days} days
//                                 </AccordionTrigger>
//                                 <div>
//                                     <h1 className="ml-12 mt-4 text-2xl text-white z-20">
//                                         {item.topic}
//                                     </h1>
//                                 </div>
//                             </div>
//                             <AccordionContent className="z-20">
//                                 <div className="relative w-[35vw] mx-auto mt-6 p-6 border border-emerald-500 rounded-lg bg-gray-900 shadow-md hover:scale-105 transform transition-all duration-300 z-20">
//                                     <h2 className="text-2xl font-semibold underline mb-4 text-center">
//                                         {item.topic}
//                                     </h2>
//                                     <h3 className="text-xl text-center">
//                                         Resources:
//                                     </h3>
//                                     <div className="flex justify-around mt-4">
//                                         {item.resources.map((resource, idx) =>
//                                             resource.type
//                                                 .toLowerCase()
//                                                 .includes("video") ? (
//                                                 <Popover
//                                                     key={idx}
//                                                     className="z-[100]"
//                                                 >
//                                                     {" "}
//                                                     {/* Increase z-index */}
//                                                     <PopoverTrigger className="border border-emerald-400 text-white py-2 px-4 rounded-lg hover:bg-emerald-400 hover:text-black transition-colors duration-300 ease-in-out">
//                                                         {resource.type}
//                                                     </PopoverTrigger>
//                                                     <PopoverContent className="w-full bg-black z-[100]">
//                                                         {" "}
//                                                         {/* Increase z-index */}
//                                                         <ReactPlayer
//                                                             url={resource.link}
//                                                         />
//                                                     </PopoverContent>
//                                                 </Popover>
//                                             ) : (
//                                                 <HoverCard
//                                                     key={idx}
//                                                     className="z-[100]"
//                                                 >
//                                                     {" "}
//                                                     {/* Increase z-index */}
//                                                     <HoverCardTrigger asChild>
//                                                         <button className="border border-emerald-400 text-white py-2 px-4 rounded-lg hover:bg-emerald-400 hover:text-black transition-colors duration-300 ease-in-out">
//                                                             {resource.type}
//                                                         </button>
//                                                     </HoverCardTrigger>
//                                                     <HoverCardContent className="z-[500] w-80 bg-gray-800 text-white p-4 rounded-md shadow-md">
//                                                         {" "}
//                                                         {/* Increase z-index */}
//                                                         <div className="space-y-2">
//                                                             <h4 className="text-lg font-semibold">
//                                                                 {resource.title}
//                                                             </h4>
//                                                             <a
//                                                                 href={
//                                                                     resource.link
//                                                                 }
//                                                                 target="_blank"
//                                                                 rel="noreferrer"
//                                                                 className="text-sm text-emerald-400 hover:underline"
//                                                             >
//                                                                 {resource.link}
//                                                             </a>
//                                                         </div>
//                                                     </HoverCardContent>
//                                                 </HoverCard>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>
//                             </AccordionContent>
//                         </AccordionItem>
//                     ))}
//                 </Accordion>
//             </div>
//         </div>
//     );
// };

// export default Path;
