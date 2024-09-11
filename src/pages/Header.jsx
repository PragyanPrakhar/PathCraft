import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxHamburgerMenu } from "react-icons/rx";
import { navItems } from "../utils/constants";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { FcGoogle } from "react-icons/fc";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CgProfile } from "react-icons/cg";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/custom/Logo";
import { useEffect, useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";

const Header = () => {
    const info = JSON.parse(localStorage.getItem("user"));
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user?.isAuthenticated) {
            setDialogOpen(false);
        }
    }, []);

    const loginHandler = async () => {
        try {
            const data = await signInWithPopup(auth, provider);
            const user = data.user;
            console.log(user);
            localStorage.setItem(
                "user",
                JSON.stringify({
                    isAuthenticated: true,
                    name: user.displayName,
                    email: user.email,
                    profilePic: user.photoURL,
                })
            );
            setDialogOpen(false);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    const logOutHandler = () => {
        localStorage.removeItem("user");
        window.location.reload();
    };

    return (
        <div>
            <header className="p-4 bg-black text-gray-100 w-screen">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className="flex items-center">
                        <Logo />
                        <ul className="items-stretch hidden space-x-3 pl-24 gap-8 lg:flex">
                            {navItems.map((item, index) =>
                                item.name !== "Roadmaps" ? (
                                    <Link to={item.path} key={index}>
                                        <li className="flex items-center px-4 -mb-1 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500">
                                            {item.name}
                                        </li>
                                    </Link>
                                ) : (
                                    info && (
                                        <li className="flex items-center px-4 -mb-1 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500">
                                            {item.name}
                                        </li>
                                    )
                                )
                            )}
                        </ul>
                    </div>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        {info?.isAuthenticated ? (
                            <div className="flex flex-col">
                                <Popover>
                                    <PopoverTrigger>
                                        <Avatar className="mr-8">
                                            <AvatarImage
                                                src={info?.photoURL}
                                                alt="pic"
                                            />
                                            <AvatarFallback>
                                                <CgProfile />
                                            </AvatarFallback>
                                        </Avatar>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-52 mr-4  bg-black text-white">
                                        <div>
                                            <h1 className="text-xl ml-6 ">{`Hello ${
                                                info?.name.split(" ")[0]
                                            }`}</h1>
                                        </div>
                                        <button
                                            className="mt-5 p-1 w-full border-2 border-white bg-red-400 rounded-lg cursor-pointer"
                                            onClick={logOutHandler}
                                        >
                                            Log Out
                                        </button>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        ) : (
                            <Dialog
                                open={dialogOpen}
                                onOpenChange={setDialogOpen}
                            >
                                <DialogTrigger>
                                    <button className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
                                        Log in
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="bg-black text-white">
                                    <DialogHeader>
                                        <DialogTitle className="ml-48 text-3xl font-bold text-gray-100">
                                            Login
                                        </DialogTitle>
                                        <DialogDescription>
                                            <div className="m-4">
                                                <button
                                                    className="w-full p-2 rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-gray-700 hover:from-gray-700 hover:via-gray-800 hover:to-black hover:shadow-lg transition duration-300 ease-in-out"
                                                    onClick={loginHandler}
                                                >
                                                    <div className="flex items-center justify-center gap-4">
                                                        <FcGoogle className="text-3xl" />
                                                        <h1 className="text-xl text-gray-200">
                                                            Login With Google
                                                        </h1>
                                                    </div>
                                                </button>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        )}
                    </div>
                    <button className="p-4 lg:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <RxHamburgerMenu />
                            </SheetTrigger>
                            <SheetContent className="w-72 bg-black text-white">
                                <SheetHeader>
                                    {navItems.map((item, index) => (
                                        <SheetTitle key={index}>
                                            <div className="text-white">
                                                <Link
                                                    to={item.path}
                                                    key={index}
                                                >
                                                    <li className="flex mt-4 items-center px-4 -mb-1 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500">
                                                        {item.name}
                                                    </li>
                                                </Link>
                                            </div>
                                        </SheetTitle>
                                    ))}
                                    <SheetTitle className="ml-4 ">
                                        {info?.isAuthenticated ? (
                                            <div className="flex flex-col">
                                                <Popover>
                                                    <PopoverTrigger>
                                                        <Avatar className="mt-8">
                                                            <AvatarImage
                                                                src={
                                                                    info?.photoURL
                                                                }
                                                                alt="pic"
                                                            />
                                                            <AvatarFallback>
                                                                <CgProfile />
                                                            </AvatarFallback>
                                                        </Avatar>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-52 mr-4  bg-black text-white">
                                                        <div>
                                                            <h1 className="text-xl ml-6 ">{`Hello ${
                                                                info?.name.split(
                                                                    " "
                                                                )[0]
                                                            }`}</h1>
                                                        </div>
                                                        <button
                                                            className="mt-5 p-1 w-full border-2 border-white bg-red-400 rounded-lg cursor-pointer"
                                                            onClick={
                                                                logOutHandler
                                                            }
                                                        >
                                                            Log Out
                                                        </button>
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                        ) : (
                                            <Dialog
                                                open={dialogOpen}
                                                onOpenChange={setDialogOpen}
                                            >
                                                <DialogTrigger>
                                                    <button className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
                                                        Log in
                                                    </button>
                                                </DialogTrigger>
                                                <DialogContent className="bg-black text-white">
                                                    <DialogHeader>
                                                        <DialogTitle className="ml-48 text-3xl font-bold text-gray-100">
                                                            Login
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            <div className="m-4">
                                                                <button
                                                                    className="w-full p-2 rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-gray-700 hover:from-gray-700 hover:via-gray-800 hover:to-black hover:shadow-lg transition duration-300 ease-in-out"
                                                                    onClick={
                                                                        loginHandler
                                                                    }
                                                                >
                                                                    <div className="flex items-center justify-center gap-4">
                                                                        <FcGoogle className="text-3xl" />
                                                                        <h1 className="text-xl text-gray-200">
                                                                            Login
                                                                            With
                                                                            Google
                                                                        </h1>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                </DialogContent>
                                            </Dialog>
                                        )}
                                    </SheetTitle>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
