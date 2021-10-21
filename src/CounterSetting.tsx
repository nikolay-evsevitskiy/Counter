import React, {ChangeEvent} from 'react';
import {Button} from "./Button";
import s from "./Counter.module.css"

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

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
    }

    return (
        <div className={s.body}>
            <div className={s.inputBoard}>
                <div className={s.inputItem}>
                    max value:
                </div>
                <div className={s.inputItem}>
                    <input type="number"
                           value={props.maxValue}
                           onChange={onChangeMaxValue}
                           className={props.errorMaxValue ? s.errorInput : ''}
                    />
                </div>
                <div className={s.inputItem}>
                    start value:
                </div>
                <div className={s.inputItem}>
                    <input type="number"
                           value={props.startValue}
                           onChange={onChangeStartValue}
                           className={props.errorStartValue ? s.errorInput : ''}
                    />
                </div>

            </div>
            <div className={s.clickBoarCounterSet}>
                <Button title={'set'}
                        changeValue={props.setButton}
                        error={props.error}
                />
            </div>
        </div>
    );

}
