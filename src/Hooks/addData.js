import { collection, addDoc } from "firebase/firestore";
import { db } from "../service/fireStore";

const addData = async (roadmap, selections) => {
    try {
        const id = Date.now().toString();
        const user = JSON.parse(localStorage.getItem("user"));
        const docRef = await addDoc(collection(db, "abcd1234"), {
            detail: roadmap,
            userSelection: selections,
            email: user.email,
            id: id,
        });
        return id;
    } catch (e) {
        console.log(e);
    }
};
export default addData;
