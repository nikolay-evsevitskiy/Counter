import React, {ChangeEvent} from 'react';
import {Button} from "./Button";
import s from "./Counter.module.css"

type CounterPropsType = {
    startValue: number
    maxValue: number
    setButton: () => void
    error: boolean
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
