// import { useParams } from "react-router";
// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { db } from "@/service/fireStore";
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

// const Path = () => {
//     const { id } = useParams();
//     const [fetchedData, setFetchedData] = useState([]);
//     const [selectedInfo, setSelectedInfo] = useState([]);

//     useEffect(() => {
//         const getData = async () => {
//             const querySnapshot = await getDocs(collection(db, "abcd1234"));
//             querySnapshot.forEach((doc) => {
//                 if (doc.data().id === id) {
//                     setFetchedData(doc.data().detail);
//                     setSelectedInfo(doc.data().userSelection);
//                 }
//             });
//         };
//         getData();
//     }, [id]);

//     return (
//         <div className="bg-black h-screen w-screen text-white">
//             <u>
//                 <h1 className="text-3xl ml-96">{`Your precisely curated ${selectedInfo.tech} roadmap in ${selectedInfo.days} days (${selectedInfo.level})`}</h1>
//             </u>
//             <Accordion
//                 type="single"
//                 collapsible
//                 className="w-[60vw] ml-72 mt-12"
//             >
//                 {fetchedData.map((item, index) => (
//                     <AccordionItem value={`item-${index}`} key={index}>
//                         <AccordionTrigger>{item.days} days</AccordionTrigger>
//                         <AccordionContent>
//                             <div className="relative w-[35vw] ml-40 border border-white rounded-lg">
//                                 <u>
//                                     <p className="ml-8  text-xl">
//                                         {item.topic}
//                                     </p>
//                                 </u>
//                                 <h1 className="ml-48 text-xl">Resources:-</h1>
//                                 <div className="flex justify-around m-4">
//                                     {item.resources.map((resource, idx) => (
//                                         <HoverCard key={idx} className="">
//                                             <HoverCardTrigger asChild>
//                                                 <button className="border border-white rounded-lg">
//                                                     {resource.type}
//                                                 </button>
//                                             </HoverCardTrigger>
//                                             <HoverCardContent className="w-80 bg-black text-white">
//                                                 <div className="flex justify-between space-x-4">
//                                                     <div className="space-y-1">
//                                                         <h4 className="text-sm font-semibold">
//                                                             {resource.title}
//                                                         </h4>
//                                                         {/* <p className="text-sm cursor-pointer">{resource.link}</p> */}
//                                                         <a
//                                                             href={resource.link}
//                                                             target="_blank"
//                                                             rel="noreferrer"
//                                                             className="text-sm cursor-pointer"
//                                                         >
//                                                             {resource.link}
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                             </HoverCardContent>
//                                         </HoverCard>
//                                     ))}
//                                 </div>
//                             </div>
//                         </AccordionContent>
//                     </AccordionItem>
//                 ))}
//             </Accordion>
//         </div>
//     );
// };

// export default Path;


import { useParams } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/service/fireStore";
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

const Path = () => {
    const { id } = useParams();
    const [fetchedData, setFetchedData] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "abcd1234"));
            querySnapshot.forEach((doc) => {
                if (doc.data().id === id) {
                    setFetchedData(doc.data().detail);
                    setSelectedInfo(doc.data().userSelection);
                }
            });
        };
        getData();
    }, [id]);

    return (
        <div className="bg-black h-screen w-screen text-white">
            <h1 className="text-4xl font-bold text-center underline decoration-emerald-400">
                {`Your precisely curated ${selectedInfo.tech} roadmap in ${selectedInfo.days} days (${selectedInfo.level})`}
            </h1>

            <Accordion
                type="single"
                collapsible
                className="w-[60vw] mx-auto mt-12"
            >
                {fetchedData.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger
                            className="text-lg font-semibold text-white py-4 px-6 rounded-md bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out shadow-lg"
                        >
                            {item.days} days
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="relative w-[35vw] mx-auto mt-6 p-6 border border-emerald-500 rounded-lg bg-gray-900 shadow-md">
                                <h2 className="text-2xl font-semibold underline mb-4 text-center">
                                    {item.topic}
                                </h2>
                                <h3 className="text-xl text-center">Resources:</h3>
                                <div className="flex justify-around mt-4">
                                    {item.resources.map((resource, idx) => (
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
                                    ))}
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
