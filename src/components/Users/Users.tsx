import React from 'react';
import {NavLink} from "react-router-dom";

import {IUser} from "../../types/types";

import styles from "./Users.module.css";

interface UsersProps {
    usersList: IUser[];
    getAllUsers: () => void;
}

const Users: React.FC<UsersProps> = ({ usersList, getAllUsers }) => {
    const isButtonNeeded = usersList.length === 3
        ? <button className={styles.btn} onClick={getAllUsers}>View All</button>
        : null
    ;

    return (
        <div className={styles.users}>
            {
                usersList.map(user => {
                    const {
                        id,
                        photo,
                        nickname,
                        name,
                    } = user;

                    return <div className={styles.userBlock} key={id}>
                        <div className={styles.user}>
                            <img src={photo} alt=""/>

                            <div>
                                <p>{name}</p>
                                <p>@{nickname}</p>
                            </div>

                            <NavLink to={`${id}`}><button className={styles.viewButton}>View</button></NavLink>
                        </div>
                    </div>

                })
            }

            {isButtonNeeded}
        </div>
    );
};

export default Users;
