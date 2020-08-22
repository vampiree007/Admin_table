import React,{useEffect, useState} from 'react';
import Spinner from '../spinner/spinner.component';
import axios from 'axios';
import './table.styles.scss';
const Tick = require('../../assets/circle.png');

// + Setting Up Bearer Token for API Call
const token = process.env.REACT_APP_TOKEN;

// + Setting Up Default Axios Parameters
axios.defaults.baseURL = 'http://66.175.217.67:3020/'
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

const UserTable = () => {

    // 1 Define Default State
    const[users, setUsers] = useState(null);

    // 2 Fetch API and Retrieve Data
    useEffect(() => {
        axios.post('/argames/getQuery')
        .then(res => res.data.result)
        .then(users => setUsers(users))
        .catch(err => console.log(err))
    }, []);

    // 3 Render Template On Successful API Call
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

// Export Table
export default UserTable;
