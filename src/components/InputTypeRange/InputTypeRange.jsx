import React, {useEffect, useState} from 'react';
import style from "./InputTypeRange.module.scss";

const InputTypeRange = () => {
    const values = [3, 7, 14, 54, 70];
    const [value1, setValue1] = useState(1000);
    const [value2, setValue2] = useState(3);

    useEffect(() => {
        const index = values.indexOf(54);

        setValue2(
            values
                .slice(...((value1 > 10000) ? [index] : [0, index]))
                .reduce((val, n) => Math.abs(val - value2) < Math.abs(n - value2) ? val : n)
        );

    }, [value1, value2]);


    return (
        <div>
            <h1>InputTypeRange</h1>
            <div className={style.inputWrapper}>
                <label htmlFor="range1">{value1}</label>
                <input
                    type="range"
                    name="range1"
                    min="1000"
                    max="20000"
                    step="1000"
                    value={value1}
                    onChange={e => setValue1(+e.target.value)}
                />
                <label htmlFor="range2">{value2}</label>
                <input
                    type="range"
                    name="range2"
                    min={Math.min(...values)}
                    max={Math.max(...values)}
                    step="1"
                    value={value2}
                    onChange={e => setValue2(+e.target.value)}
                />

            </div>
        </div>
    );
};

export default InputTypeRange;