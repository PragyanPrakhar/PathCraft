import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/service/fireStore";
import { Toaster } from "@/components/ui/sonner";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Cards from "@/custom/Cards";
import { toast } from "sonner";

const Roadmaps = () => {
    const [data, setData] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        if (!user) {
            navigate("/");
            toast.error("Please Login to Continue")
            return;
        }
        const q = query(
            collection(db, "abcd1234"),
            where("email", "==", user.email)
        );
        const querySnapshot = await getDocs(q);
        setData([]);
        querySnapshot.forEach((doc) => {
            setData((prev) => [...prev, doc.data()]);
        });
        console.log(data);
        // console.log(data[0].id);
    };
    return (
        <div className="min-h-screen bg-black ">
            <div className="flex flex-wrap justify-center gap-5">
                {data &&
                    data?.map((item, index) => {
                        return (
                            <Cards
                                key={index}
                                days={item.userSelection.days}
                                level={item.userSelection.level}
                                tech={item.userSelection.tech}
                                img={user.profilePic}
                                id={item.id}
                            />
                        );
                    })}
            </div>
            <Toaster/>
        </div>
    );
};

export default Roadmaps;
