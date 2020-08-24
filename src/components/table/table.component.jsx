import React,{useEffect} from 'react';
import Spinner from '../spinner/spinner.component';
import { connect, useDispatch, useSelector } from "react-redux";
import {setUser} from '../../redux/users/userAction';
import './table.styles.scss';
const Tick = require('../../assets/circle.png');

const UserTable = () => {
    const dispatch = useDispatch();

    // 1 Fetch API Set To Redux And and Retrieve Data
    useEffect(() => {
        dispatch(setUser())  
    }, [dispatch]);

    // 2 Retrieve Users from Redux Store
    const users = useSelector(state => state.user.users)

    // 3 Render Template On Successful Users Retrieve
    if(users){
        return (
            <div id="table">
                <table className="dataTable">
                    <thead>
                        <tr>
                            <th>S No.</th>
                            <th>Email Address</th>
                            <th>Query</th>
                            <th>Query Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>    
                    <tbody>
                    {
                        // Table Rows Will Generate Here
                        users.map((user,i)=>(
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{user.email}</td>
                                <td>{user.query}</td>
                                <td>{user.createdAt}</td>
                                <td>
                                    <img src={Tick} alt="tick"/>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
        </div>
        )
    }else{
        // Loading Screen Animation
        return(<div><Spinner/></div>)
    }
}

// + Adding Dispatch Action to the Functional Component
const mapDispatchToProps = { setUser };
  
// + connect Dispatch
export default connect(null, mapDispatchToProps)(UserTable);
