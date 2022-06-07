import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

// functional component
const Button = () => {
    const language = useContext(LanguageContext);
    const color = useContext(ColorContext);

    const renderSubmit = (value) => {
        return value === "english" ? "Submit" : "Voorleggen";
    };

    return (
        <div>
            <button className={`ui button ${color}`}>
                {renderSubmit(language)}
            </button>
        </div>
    );
};

// class based component:

// class Button extends React.Component {
//     renderSubmit(value) {
//         return value === "english" ? "Submit" : "Voorleggen";
//     }

//     renderButton(color) {
//         return (
//             <button className={`ui button ${color}`}>
//                 <LanguageContext.Consumer>
//                     {(value) => this.renderSubmit(value)}
//                 </LanguageContext.Consumer>
//             </button>
//         );
//     }

//     render() {
//         return (
//             <ColorContext.Consumer>
//                 {(color) => this.renderButton(color)}
//             </ColorContext.Consumer>
//         );
//     }
// }

export default Button;
