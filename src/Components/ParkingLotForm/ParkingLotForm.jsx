import React from 'react';
import { useState } from "react";
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

import './ParkingLotForm.css';

const PRIORITIES ={
    Low: 'Low',
    Medium: 'Medium',
    High: 'High'
}

export default function ParkingLotForm({ addItem }) {
   
    const [date, setDate] = useState('');
    const [link, setLink] = useState(''); 
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(PRIORITIES.Medium);

    
    // const handleChange = setter => (e => setter(e.target.value));
    // instead of handleDateChange, you can pass handleChange(setDate)
    
    function handleDateChange(e) {  
    setDate(e.target.value);
    }
    
    function handleLinkChange(e) {   
    setLink(e.target.value);
    }

    function handleDescriptionChange(e) {
    setDescription(e.target.value);
    }
    
    function handlePriorityChange(e) {    
    setPriority(e.target.value);
    }
    
    function handleSubmit(e) { 
    e.preventDefault();

    const [y, M, D] = date.split('-');
    const fortmattedDate= '${M}/${d}/${y}';

    addItem(formattedDate, link, description, priority);
    }
    
    {
    console.log(date, link, description, priority);
    }
   
    return (
        <Form data-bs-theme="dark" className="parking-lot-form">
            <FormGroup className="parking-lot-row">
                <Label for="link-date">
                    Date
                </Label>
                <Input
                    id="link-date"
                    name="date"
                    type="date"
                    required
                />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Label for="link-url">
                    Link
                </Label>
                <Input
                    id="link-url"
                    name="url"
                    type="url"
                    required
                />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Label for="link-description">
                    Description
                </Label>
                <Input
                    id="link-description"
                    name="description"
                    type="text"
                    required
                />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Input
                    name="radio-priority"  
                    type="radio"
                    value="High"
                    id="prio-high"
                />
                {' '}
                <Label for="prio-high">
                    High
                </Label>
                <Input
                    name="radio-priority"
                    type="radio"
                    value="Medium"
                    id="prio-medium"
                />
                {' '}
                <Label for="prio-medium">
                    Medium
                </Label>
                <Input
                    name="radio-priority"
                    type="radio"
                    value="Low"
                    id="prio-low"
                />
                {' '}
                <Label for="prio-low">
                    Low
                </Label>
            </FormGroup>
                <Button className="Submit" type="submit">
                    Submit
                </Button>
            </Form>
);
}