import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {Button} from "./Button";
import s from "./Counter.module.css"

type CounterPropsType = {
    maxValue: number
    setMaxValue: Dispatch<SetStateAction<number>>
    startValue: number
    setStartValue: Dispatch<SetStateAction<number>>
    setButton: () => void
    error: boolean
    changeValue: () => void
};

export function CounterSetting(props: CounterPropsType) {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
        props.changeValue()
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
        props.changeValue()
    }

    return (
        <div className={s.body}>
            <div>
                <div>
                    max value: <input type="number"
                                      value={props.maxValue}
                                      onChange={onChangeMaxValue}
                />
                </div>
                <div>
                    start value: <input type="number"
                                        value={props.startValue}
                                        onChange={onChangeStartValue}
                />
                </div>

            </div>
            <div className={s.clickBoard}>
                <div className={s.buttonComponent}>
                    <Button title={'set'}
                            changeValue={props.setButton}
                            error={props.error}
                    />
                </div>

            </div>
        </div>
    );

}
