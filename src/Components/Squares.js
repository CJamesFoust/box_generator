import React, { useState } from 'react';
import styles from './Squares.module.css';

const Squares = (props) => {
    const [colors, setColors] = useState(props.colorList);


    return(
        <div className={styles.center}>
            {colors.map((value) => {
                return <div className={styles.square} style={{backgroundColor: value}} key={ value.id }>{ value }</div>
            })}
        </div>
    )
}

export default Squares;