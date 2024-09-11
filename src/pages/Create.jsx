import { useState } from "react";
import { level } from "@/utils/constants";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { chatSession } from "@/utils/gemini";
import { PROMPT } from "@/utils/constants";
import addData from "@/Hooks/addData";
import { useNavigate } from "react-router";
import useOnlineStatus from "@/Hooks/useOnlineStatus";
const Create = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        tech: "",
        level: "",
        days: "",
    });

    const [loading, setLoading] = useState(false);
    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) {
        navigate("/create/offline");
        return;
    }

    const handleSubmit = async () => {
        setLoading(true);
        const data = JSON.parse(localStorage.getItem("user"));
        if (!data?.isAuthenticated) {
            toast.error("Please login to continue.");
            setLoading(false);
            return;
        }
        if (
            formData.tech == "" ||
            formData.level == "" ||
            formData.days == ""
        ) {
            toast.error("All fields are required.");
            setLoading(false);
            return;
        }

        if (formData.days < 10) {
            toast.error("Minimum days should be 10");
            setLoading(false);
            return;
        }
        if (formData.days > 45) {
            toast.error("Maximum days should be 45");
            setLoading(false);
            return;
        }

        toast.success("You Roadmap is being generated");

        const prompt = PROMPT.replace("#begineer", formData.level)
            .replace("#react", formData.tech)
            .replace("#25", formData.days)
            .replace("#25", formData.days);
        try {
            const result = await chatSession.sendMessage(prompt);
            const roadmapText = result.response.text(); // Assuming you get the roadmap here
            console.log(
                result.response.text().split("```json")[1].split("```")[0]
            );
            const selections = formData; // Adjust according to what selections you need to store
            const id = await addData(
                roadmapText.split("```json")[1].split("```")[0],
                selections
            ); // Call addData here
            if (id) {
                toast.success("Roadmap saved successfully!");
                navigate(`/create/path/${id}`);
            } else {
                toast.error("Error saving roadmap.");
            }
        } catch (error) {
            toast.error("Error generating roadmap.");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-black h-screen sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 ">
            <h1 className="font-bold text-3xl text-white">
                Tell us your tech interest
            </h1>
            <p className="mt-3 text-gray-400 text-xl">
                just provide some basic information, and our Path.ai will
                generate a customized roadmap on your preferance.
            </p>
            <div>
                <h2 className="font-medium my-3 text-white text-xl">
                    Which tech you want to learn?
                </h2>
                <input
                    className="bg-gray-800 rounded w-full p-2 text-white"
                    name={"tech"}
                    value={formData.tech}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                        })
                    }
                    placeholder={"eg: React"}
                />
            </div>
            <div>
                <h2 className="font-medium text-white my-3 text-xl">
                    {formData.tech
                        ? `In how many days you want to learn  ${formData.tech} ?`
                        : "In how many days you wan to learn your tech?"}
                </h2>
                <input
                    className="bg-gray-800 rounded w-full p-2 text-white"
                    name={"days"}
                    value={formData.days}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                        })
                    }
                    placeholder={"eg: 5"}
                    type={"number"}
                />
            </div>
            <div>
                <h2 className="text-white font-medium my-3 text-xl">
                    What is Your Level?
                </h2>
                <div className="grid grid-cols-3 gap-5 mt-5">
                    {level.map((option, index) => (
                        <div
                            onClick={() =>
                                setFormData({
                                    ...formData,
                                    level: option.title,
                                })
                            }
                            className={`p-4 border rounded-lg hover:shadow-lg  hover:shadow-gray-700 ${
                                formData.level == option.title &&
                                "shadow-lg shadow-gray-700 border-black"
                            } cursor-pointer`}
                            key={index}
                        >
                            <h2 className="text-4xl">{option.icon}</h2>
                            <h2 className="font-bold text-white sm:text-sm lg:text-lg">
                                {option.title}
                            </h2>
                            <h2 className="text-gray-500 text-sm">
                                {option.desc}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-10 flex justify-end">
                <Button
                    onClick={() => handleSubmit()}
                    type={"submit"}
                    disabled={loading}
                    className={"bg-red-600"}
                >
                    {loading ? (
                        <AiOutlineLoading3Quarters className="w-7 h-7 bg-red-600 animate-spin" />
                    ) : (
                        "Generate Your Roadmap"
                    )}
                </Button>
            </div>
            <Toaster />
        </div>
    );
};

export default Create;
