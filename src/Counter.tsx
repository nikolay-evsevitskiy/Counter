import React from 'react';

export type CounterDisplayType = {
    someNumber: number
    incCondition: boolean
    resetCondition: boolean
}
type counterDisplay = {
    counterDisplay: CounterDisplayType
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
                {props.counterDisplay.someNumber}
            </div>
            <div className="click-board">
                <button className="increate"
                        onClick={addValueOnClick}
                        disabled={props.counterDisplay.incCondition}>
                    inc
                </button>
                <button className="reset"
                        onClick={resetValueOnClick}
                        disabled={props.counterDisplay.resetCondition}>
                    reset
                </button>
            </div>
        </div>
    );

}

export default Counter;