import { useState } from 'react'
import data from './data.js'


export default function accordian() {
    const [selected, setSelected] = useState(0);
    return (
        <div>
            <div>
                {data && data.length > 0 ?
                    data.map(dataItem =>
                        <div>
                            <div>
                                <h3>{dataItem.question}</h3>
                            </div>
                        </div>
                    )
                    : <div>data not found</div>
                }
            </div>
        </div>
    )
} 


