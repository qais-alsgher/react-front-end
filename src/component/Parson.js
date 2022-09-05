import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import "./person.css";

function Parson() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [newAge, setNewAge] = useState('');
    const [showInfo, setShowInfo] = useState(false);

    const handleChangeName = (e) => {
        e.preventDefault();
        setName(e.target.value);

    }
    const handleChangeAge = (e) => {
        e.preventDefault();
        setAge(e.target.value);
    }
    const handleChangeGender = (e) => {
        e.preventDefault();
        setGender(e.target.value);
    }
    const PostNewAge = async (name, age, gender) => {
        const newAge = await axios.post(`https://express-test-jest.herokuapp.com/person?name=${name}&age=${age}&gender=${gender}`);
        console.log(newAge.data);
        setNewAge(newAge.data);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        PostNewAge(name, age, gender);
        setShowInfo(true);
    }
    return (
        <div className="form ">
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicText">

                    <Form.Control className="mb-3" type="text" data-testid="parson-name" placeholder="Enter Name" onChange={handleChangeName} />

                    <Form.Control className="mb-3" type="text" data-testid="parson-age" placeholder="Enter Age" onChange={handleChangeAge} />

                    <Form.Control className="mb-3" type="text" data-testid="person-gender" placeholder="Enter Gender" onChange={handleChangeGender} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            {showInfo &&
                <div>
                    <h5 data-testid='name' className='mt-5'>My Name Is {name}</h5>
                    <p data-testid='age'>I am {age} years old</p>
                    <p data-testid='gender'>I am {gender}</p>
                    <p data-testid='new-age'>New Age is {newAge}</p>
                </div>

            }
        </div>
    )
}

export default Parson;
