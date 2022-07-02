import React from 'react';
import styles from './NotFoundBlock.module.scss';
import {Link} from "react-router-dom";

const NotFoundBlock = (props) => {
    return (
        <div className={styles.root}>
            <h1>
                Ничего не найдено
            </h1>
            <Link to="/">На главную</Link>
        </div>

    );
}

export default NotFoundBlock;