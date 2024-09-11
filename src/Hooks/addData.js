import { doc, setDoc } from "firebase/firestore";
import { db } from "../service/fireStore";

const addData = async (roadmap, selections) => {
    try {
        const id = Date.now().toString();
        const user = JSON.parse(localStorage.getItem("user"));
        await setDoc(doc(db, "abcd1234",id), {
            detail: JSON.parse(roadmap),
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
