import { forwardRef } from "react";
import "./Welcome.css"

const Welcome = (_, ref) => {
    return (
        <div ref={ref} className="welcome_container">
            <div className="welcome">
                <h1 className="name_1">
                    I'm Richard
                </h1>
                <h1 className="name_2">
                    a graduate from the University of California Santa Barbara interested in
                    the intersection of distributed computing and machine learning. 
                </h1>
            </div>
        </div>
    )
}

export default forwardRef(Welcome);