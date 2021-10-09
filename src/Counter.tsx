import React from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    value: number
    addValue: () => void
    resetValue: () => void
    error: boolean
};

 export function Counter(props: CounterPropsType) {

    return (
        <div className="body">
            <div className={!props.error ? "error" : "result"}>
                {props.value}
            </div>
            <div className="click-board">
                <Button title={'inc'}
                        changeValue={props.addValue}
                        error={!props.error}
                />
                <Button title={'reset'}
                        changeValue={props.resetValue}
                        error={props.error}
                />
            </div>
        </div>
    );

}
