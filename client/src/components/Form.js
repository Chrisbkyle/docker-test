import React, { useState } from 'react' 
import '../App.css'
import axios from 'axios'


export default function Form() {

    const [formData, setFormData] = useState({ 
        firstName: '',
        lastName: '',
        phoneNumber: '', 
        email: ''
    })



    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData)
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // console.log(e)
    //     axios.post('http://localhost:3001/api/add', formData)
    //     .then(response => console.log(response))
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e)
        axios.post('http://3.25.114.242/api/add', formData)
        .then(response => console.log(response))
    }



    return(
        <div>
            <form>
                <input 
                    placeholder='First Name'
                    onChange={e => handleChange(e)}
                    name= 'firstName'
                    value= {formData.firstName}></input>
                <br/>
                <input 
                    placeholder='Last Name'
                    onChange={e => handleChange(e)}
                    name= 'lastName'
                    value= {formData.lastName}></input>
                <br/>
                <input 
                    placeholder='Phone Number'
                    onChange={e => handleChange(e)}
                    name= 'phoneNumber'
                    value= {formData.phoneNumber}></input>
                <br/>
                <input 
                    placeholder='Email'
                    onChange={e => handleChange(e)}
                    name= 'email'
                    value= {formData.email}></input>
                <br/>
                <button
                    type='submit' onClick={handleSubmit}>Submit data</button>
            </form>
        </div>
    )
}