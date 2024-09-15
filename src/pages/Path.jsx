import { useNavigate, useParams } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "@/service/fireStore";
import useOnlineStatus from "@/Hooks/useOnlineStatus";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { VITE_GOOGLE_API_KEY } from "@/utils/constants";

const Path = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const onlineStatus = useOnlineStatus();
    const [fetchedData, setFetchedData] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState([]);
    const roadMapRef = useRef(null);

    const [query, setQuery] = useState("");
    const [data, setData] = useState(null);

    if (!onlineStatus) {
        navigate("/create/offline");
    }

    useEffect(() => {
        getData();
        query && fetchQueryData();
    }, []);

    const fetchQueryData = async () => {
        const res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&key=${VITE_GOOGLE_API_KEY}`
        );
        const info = await res.json();
        setData(info);
        console.log("Just before setting the info");
        console.log("Info is here", data);
    };

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "abcd1234"));
        querySnapshot.forEach((doc) => {
            if (doc.data().id === id) {
                setFetchedData(doc.data().detail);
                setSelectedInfo(doc.data().userSelection);
                setQuery(doc.data().userSelection.tech);
                console.log("Data Got !!!!");
            }
        });
    };

    const scrollToRoadmap = () => {
        roadMapRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="bg-black min-h-screen overflow-y-scroll w-full text-white px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center underline decoration-emerald-400 mb-8">
                {`Your precisely curated ${selectedInfo.tech} roadmap in ${selectedInfo.days} days (${selectedInfo.level})`}
            </h1>
            <button
                onClick={scrollToRoadmap}
                className="mt-6 block mx-auto py-2 px-4 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all duration-300 ease-in-out"
            >
                Start Learning
            </button>

            {/* Improved Dialog UI */}
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="mt-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold">
                        See channel link
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-gray-800 text-white p-6 rounded-md shadow-lg border border-emerald-400">
                    <DialogHeader className="mb-4">
                        <DialogTitle className="text-xl font-bold text-emerald-400">
                            Playlist for {selectedInfo.tech}
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-400">
                            You can visit the YouTube playlist to start learning
                            about {selectedInfo.tech}.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center gap-4 py-4">
                        {data && (
                            <a
                                href={`https://www.youtube.com/watch?v=${data.items[0].id.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-md font-semibold transition-colors"
                            >
                                Visit Playlist
                            </a>
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            {/* Improved Accordion UI */}
            <Accordion
                type="single"
                collapsible
                className="w-full md:w-[80vw] lg:w-[60vw] mx-auto mt-12"
            >
                {fetchedData.map((item, index) => (
                    <AccordionItem
                        ref={roadMapRef}
                        value={`item-${index}`}
                        key={index}
                    >
                        <AccordionTrigger className="text-lg font-semibold text-white py-4 px-6 rounded-md bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out shadow-lg w-full">
                            {item.days} days
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="relative w-full md:w-[80vw] lg:w-[60vw] mx-auto mt-6 p-4 md:p-6 border border-emerald-500 rounded-lg bg-gray-900 shadow-md">
                                <h2 className="text-xl md:text-2xl font-semibold underline mb-4 text-center text-emerald-400">
                                    {item.topic}
                                </h2>
                                <h3 className="text-lg md:text-xl text-center">
                                    Resources:
                                </h3>
                                <div className="flex flex-wrap justify-center md:justify-around mt-4 space-y-4 md:space-y-0">
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
                                                        className="w-full h-full"
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
                                                <HoverCardContent className="w-full md:w-80 bg-gray-800 text-white p-4 rounded-md shadow-md">
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




