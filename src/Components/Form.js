import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setColor(e.target.color.value);
        let colors = props.prevColors
        colors.push(color);
        props.onNewSquare( colors );
    }

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={ handleSubmit } className={styles.form}>
                <label>Color</label>
                <input type="text" name="color" className={styles.inputs} onChange={ handleColor } value={ color } />
                <input type="submit" value="Add" className={styles.buttons} />
            </form>
        </div>
    )
}

export default Form;