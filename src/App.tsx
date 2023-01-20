import {useEffect} from "react";

import { setAllUsers, setFirstThreeUsers } from './reducer/users-reducer'
import {useAppDispatch, useAppSelector} from "./hooks/hooks";

import Loader from "./common/Loader/Loader";
import Users from "./components/Users/Users";

import {getData} from "./data/getData";

// added css to reset styles, otherwise used module.css
import './main.css';

function App() {
    const usersArr = useAppSelector((state) => state.users.users);
    const isLoading = useAppSelector((state) => state.users.isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setFirstThreeUsers(getData()));
    }, [dispatch]);

    const getAllUsers = () => {
        dispatch(setAllUsers(getData()));
    };

    return (
        <div className='app'>
            {
                isLoading
                    ? <Loader />
                    : <Users getAllUsers={getAllUsers} usersList={usersArr}/>
            }
        </div>
    )
}

export default App;
