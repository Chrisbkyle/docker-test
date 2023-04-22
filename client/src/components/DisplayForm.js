import React, { useState, useEffect } from 'react' 
import '../App.css'
import axios from 'axios'

export default function DisplayForm() {

        const [formData, setFormData] = useState({})

        useEffect(() => {
            axios.get('http://localhost:80/api/read')
            .then((response) => {
                setFormData(response)
                console.log(JSON.stringify(formData))
            }).catch((err) => {
                console.log(err)
            })
        }, []);


    return(
        <div>
            <select>
                <option>test</option>
            </select>
            <table>
                <tr>
                    <td>First Name</td>
                    <td>{formData.firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{formData.lastName}</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>{formData.phoneNumber}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{formData.email}</td>                    
                </tr>
            </table>
        </div>
    )
}