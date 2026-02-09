import { useRouteError } from "react-router-dom";

export default function Error(){
    const error=useRouteError();
    
    return(
        <div>
            <h1>Oops! something went wrong</h1>
            <p>{error.status}: {error.statusText}</p>
        </div>
    );
}