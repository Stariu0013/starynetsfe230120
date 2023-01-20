import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {useAppSelector} from "../../../hooks/hooks";

import styles from './User.module.css';

const User: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const user = useAppSelector(state => {
        return state.users.users.find(el => {

            return el.id === Number(id);
        });
    });

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className={styles.user}>
            <button  onClick={handleClick} className={styles.exit}>X</button>

            <div className={styles.logoBlock}>
                <img className={styles.logo} src={user?.photo} alt={user?.nickname}/>
                <p className={styles.name}>{user?.name}</p>
                <p className={styles.position}>{user?.position}</p>
            </div>
            <div className={styles.descriptionBlock}>
                <div className={styles.descriptionItem}>
                    <p className={styles.title}>Phone:</p><span className={styles.description}>{user?.phone}</span>
                </div>

                <div className={styles.descriptionItem}>
                    <p className={styles.title}>URL:</p><span className={styles.link}>https://example.com</span>
                </div>

                <div className={styles.descriptionItem}>
                    <p className={styles.title}>Email:</p> <span className={styles.link}>{user?.email}</span>
                </div>
            </div>

            <button className={styles.btn}>Send message</button>
        </div>
    );
};

export default User;
