import { useParams } from "react-router";

const Path = () => {
    const { id } = useParams();
    return (
        <div>
            Here is Your Redirected Path
            <h1>{id}</h1>
        </div>
    );
};

export default Path;
