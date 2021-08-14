import React from 'react';

type counterDisplay = {
    counterDisplay: number
    addValue: () => void
    resetValue: () => void
};

function Counter(props: counterDisplay) {
    const addValueOnClick = () => {
        props.addValue()
    }
    const resetValueOnClick = () => {
        props.resetValue()
    }

    return (
        <div className="body">
            <div className="result">
                {props.counterDisplay}
            </div>
            <div className="click-board">
                <button className="increate"
                        onClick={addValueOnClick}>
                    inc
                </button>
                <button className="reset"
                        onClick={resetValueOnClick}>
                    reset
                </button>
            </div>
        </div>
    );

}

export default Counter;