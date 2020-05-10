import "./styles.css";
import React from "react";

/**
 * LOADER type
 * # BOX  (default) - Loader will appear in the middle within a black box
 * # BODY           - Loader within a full page dark overlay
 * # INLINE         - Inline Loader - Dark Color Loader
 *
 * LOADER show
 * # true           - displays loader
 * # false          - hides loader
 */
const Loader = props => {
    const {
        type = "BOX",
        show = false,
        color,
        message,
        messageStyle,
        spinnerSize,
        stack
    } = props;
    let loaderWrapper = `loader-container ${type}`;
    let loader = `loader ${type} ${stack}`;

    let spinnerStyle = {};

    // Add User's Spinner Color
    if (color) {
        spinnerStyle = {
            borderColor: color.primary,
            borderTopColor: color.secondary
        }
    }

    // Add User's Spinner Size
    if (spinnerSize) {
        spinnerStyle = {
            ...spinnerStyle,
            width: spinnerSize,
            height: spinnerSize
        }
    }

    return (
        show && (
            <div className={loaderWrapper}>
                <div className={loader}>
                    <div className="spinner" style={spinnerStyle} />
                    {message && <div className="message" style={messageStyle}>{message}</div>}
                </div>
            </div >
        )
    );
};

export default Loader;
