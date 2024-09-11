// /* eslint-disable react/prop-types */
// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
//     CardDescription,
//     CardFooter,
// } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
// import { useNavigate } from "react-router-dom";
// import { doc, deleteDoc } from "firebase/firestore";
// import { db } from "@/service/fireStore";
// import { toast } from "sonner";
// import { Toaster } from "../components/ui/sonner";

// const Cards = ({ days, level, tech, img, id }) => {
//     const navigate = useNavigate();
//     const deleteHandler = async () => {
//         try {
//             console.log(id);
//             await deleteDoc(doc(db, "abcd1234", id));
//             window.location.reload();
//         } catch (error) {
//             toast.error("Something went wrong");
//         }
//     };
//     return (
//         <div>
//             <Card className="bg-black w-96 border-none hover:shadow-md hover:shadow-gray-700">
//                 <CardHeader>
//                     <Avatar>
//                         <AvatarImage src={img} />
//                         <AvatarFallback>CN</AvatarFallback>
//                     </Avatar>
//                     <CardTitle className="text-white">{tech}</CardTitle>
//                     <CardDescription className="text-white">
//                         Roadmap for {level}
//                     </CardDescription>
//                 </CardHeader>
//                 <CardContent className="text-white">
//                     <p>Duration: {days} days</p>
//                 </CardContent>
//                 <CardFooter className="flex justify-between">
//                     <Button
//                         onClick={() => navigate("/create/path/" + id)}
//                         variant="secondary"
//                     >
//                         Start Learning
//                     </Button>
//                     <Button onClick={deleteHandler} variant="destructive">
//                         Delete
//                     </Button>
//                 </CardFooter>
//             </Card>
//             <Toaster />
//         </div>
//     );
// };

// export default Cards;

/* eslint-disable react/prop-types */
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/service/fireStore";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";

const Cards = ({ days, level, tech, img, id }) => {
    const navigate = useNavigate();
    const deleteHandler = async () => {
        try {
            console.log(id);
            await deleteDoc(doc(db, "abcd1234", id));
            window.location.reload();
        } catch (error) {
            toast.error("Something went wrong");
        }
    };
    return (
        <div>
            <Card className="bg-black border border-white w-96  rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/50">
                <CardHeader className="flex items-center space-x-4">
                    <Avatar className="border-2 border-emerald-400 hover:scale-110 transform transition duration-300 ease-in-out">
                        <AvatarImage src={img} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-white text-xl font-semibold">
                            {tech}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                            Roadmap for {level}
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="text-white">
                    <p className="text-lg">Duration: {days} days</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        onClick={() => navigate("/create/path/" + id)}
                        variant="secondary"
                        className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Start Learning
                    </Button>
                    <Button
                        onClick={deleteHandler}
                        variant="destructive"
                        className="bg-red-600 hover:bg-red-500 text-white font-bold rounded-full px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Delete
                    </Button>
                </CardFooter>
            </Card>
            <Toaster />
        </div>
    );
};

export default Cards;
