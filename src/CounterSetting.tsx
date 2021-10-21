import React, {ChangeEvent} from 'react';
import {Button} from "./Button";
import s from "./Counter.module.css"
import {InputValue} from "./InputValue";

type CounterPropsType = {
    startValue: number
    maxValue: number
    setButton: () => void
    error: boolean
    errorMaxValue: boolean
    errorStartValue: boolean
    setMaxValue: (newValue: number) => void
    setStartValue: (newValue: number) => void

};

export function CounterSetting(props: CounterPropsType) {
    return <div className={s.body}>
        <div className={s.inputBoard}>
            <InputValue value={props.maxValue}
                        onChangeValue={props.setMaxValue}
                        error={props.errorMaxValue}
                        title={"max"}
            />

            <InputValue value={props.startValue}
                        onChangeValue={props.setStartValue}
                        error={props.errorStartValue}
                        title={"start"}
            />
        </div>
        <div className={s.clickBoarCounterSet}>
            <Button title={'set'}
                    changeValue={props.setButton}
                    error={props.error}
            />
        </div>
    </div>
}
