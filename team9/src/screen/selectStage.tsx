import React from "react";
import { Link } from "react-router-dom";

const StageSelect: React.FC = () => {
    return (
        <div className="screen-container">
            <Link to="/" className="back">
                ←
            </Link>
        </div>
    );
};

export default StageSelect;
