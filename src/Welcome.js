import { forwardRef } from "react";
import "./Welcome.css"

const Welcome = (_, ref) => {
    return (
        <div ref={ref} className="welcome">
            <h1 className="name_1">
                I'm Richard
            </h1>
            <h1 className="name_2">
                a senior at the University of California Santa Barbara curious about data, especially the big ones. 
            </h1>
        </div>
    )
}

export default forwardRef(Welcome);