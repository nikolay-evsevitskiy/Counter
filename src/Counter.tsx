import React from 'react';
import {Button} from "./Button";
import s from "./Counter.module.css"

type CounterPropsType = {
    value: number
    addValue: () => void
    resetValue: () => void
    errorIncrement: boolean
    errorReset: boolean
    alertSetTitle: boolean
    errorMaxValue: boolean
    errorStartValue: boolean
    error: boolean

};

export function Counter(props: CounterPropsType) {

    return (
        <div className={s.body}>
            {props.alertSetTitle ? <div className={s.titleItem}>
                enter values and press 'set'
            </div> : props.errorMaxValue || props.errorStartValue ? <div className={s.titleItemError}>
                Incorrect value!
            </div> : <div className={props.error ? s.error : s.result}>
                {props.value}
            </div>}
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
