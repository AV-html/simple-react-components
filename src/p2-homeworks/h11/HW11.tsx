import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(10)
    const [value2, setValue2] = useState(90)

    const onChangeRange1 = (value: number) => {
        setValue1(value)
    }

    const onChangeRange2 = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <div>{value1}</div>
                <SuperRange
                    onChangeRange={onChangeRange1}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>


            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeRange2}

                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
