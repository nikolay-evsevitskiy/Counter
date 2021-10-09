import React from 'react';
import {Button} from "./Button";
import s from "./Counter.module.css"

type CounterPropsType = {
    value: number
    addValue: () => void
    resetValue: () => void
    errorIncrement: boolean
    errorReset: boolean

};

 export function Counter(props: CounterPropsType) {

    return (
        <div className={s.body}>
            <div className={props.errorIncrement ? s.error : s.result}>
                {props.value}
            </div>
            <div className={s.clickBoard}>
                <Button title={'inc'}
                        changeValue={props.addValue}
                        error={props.errorIncrement}
                />
                <Button title={'reset'}
                        changeValue={props.resetValue}
                        error={props.errorReset}
                />
            </div>
        </div>
    );

}
