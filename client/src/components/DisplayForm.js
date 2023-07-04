import React, { useState, useEffect } from 'react' 
import '../App.css'
import axios from 'axios'

export default function DisplayForm() {

    const [dropDownData, setDropDownData] = useState([])
    const [selected, setSelected] = useState({})
    const [formDisplay, setFormDisplay] = useState({})


    // 
    //      Populate Dropdown Menu
    // 

    useEffect(() => {
        axios.get('http://localhost:3001/api/name' || 'http://3.25.114.242/server/api/name')
        .then((response) => {
            setDropDownData(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, []);

    // 
    //        Sets information to get form data
    // 

    const handleNameSelection = (e) => {
        const value = e.target.value.split(" ")
        const fName = value[0]
        const lName = value[1]
        setSelected({
                firstName: fName,
                lastName: lName
            })
    }

    const handleClick = (e) => {
        axios.post('http://localhost:3001/api/read' || 'http://3.25.114.242/server/api/read', e)
        .then(response => (formDisplay.lastName != response.data.lastName) ? setFormDisplay(response.data) : setFormDisplay(formDisplay))
    }

    console.log(selected)

    return(
        <div>
            <select onChange={e => handleNameSelection(e)}>
                <option>Select User</option>
                {dropDownData.map((item) => (
                    <option name="nameToDisplay">
                        {item.firstName + ' ' + item.lastName}
                    </option>
                ))}
            </select>
            <button onClick={() => handleClick(selected)}>Display User</button>
            <table>
                <tr>
                    <td>First Name</td>
                    <td>{formDisplay.firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{formDisplay.lastName}</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>{formDisplay.phoneNumber}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{formDisplay.email}</td>
                </tr>
            </table>
        </div>
    )
} 


// I need an API to send only a name
// I need the value of the selected name to be saved to a state
// That State needs to fetch data in another API and send the cooresponding data
// That data needs to be rendered and displayed on the table