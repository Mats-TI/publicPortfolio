/* eslint-disable eqeqeq */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, { createRef } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './style.css'
import "./mobile-style.css"
import axios from 'axios'


class Contact extends React.Component{
    constructor(){
        super()
        this.state={
            yourName:"",
            yourSubject:"",
            Email:"",
            Message:"",
            sent:false,
            errorName:'',
            errorEmail:'',
            errorSubject:"",
            errorMessage:""
        }
    }formValidation=()=>{
        let isError=false;
        const errors={
            errorName:'',
             errorEmail:'',
                errorSubject:"",
                errorMessage:""
        };
        if (this.state.yourName.length===0){
            isError=true;
            errors.errorName="Name cannot be blank ";
        }
        if (this.state.yourSubject.length===0){
            isError=true;
            errors.errorSubject="Subject cannot be blank ";
        }
        if (!this.state.Email.includes("@")){
            isError=true;
            errors.errorEmail="Invalid Email. Your Email should be of the form John@Doe.domain";
        }
        if (this.state.Message.length===0){
            isError=true;
            errors.errorMessage="Message cannot be blank";
        }
        this.setState({
           ...this.state,
           ...errors
        } )
        return(isError);
    }

    onChangeName=(event)=>{
        this.setState({
            yourName:event.target.value
        })
    }
    onChangeSubject=(event)=>{
        this.setState({
            yourSubject:event.target.value
        })
    }
    onChangeMail=(event)=>{
        this.setState({
            Email:event.target.value
        })
    }
    onChangeMsg=(event)=>{
        this.setState({
            Message:event.target.value
        })
    }
    dataHandler=(event)=>{
        event.preventDefault();
        const formErrors=this.formValidation();
        //if !formErrors or formErrors evaluates to false, proceed to clear the form.
        if (!formErrors){
            this.setState({
                yourName:'',
                yourSubject:"",
                Email:"",
                Message:'',
                errorName:'',
                errorEmail:'',
                errorSubject:"",
                errorMessage:""
              
        })
        }

        //if formErrors evaluates to false, proceed to make an http call.
        if (!formErrors){

        axios.post("https://portfolioserver.onrender.com/api/forms",this.state)
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{console.log(`Message not sent because of ${error}`)});
        this.setState({
            sent:true
        })
    }

    }
    
    render(){
        return(
            <div id='ContactID' className='contactDiv'>
                <section className='contactSection'>
                    <h1 className="h1">Get in Touch</h1>
                    <p>
                        Feel free to use the contact form for any questions, comments or just feedback in general. If necessary, I will get back to you as soon as possible.
                    </p>
                </section>
                <form onSubmit={this.dataHandler.bind(this)} id="contactForm">
                    <label>Name: </label><input type="text" name='yourName' value={this.state.yourName} onChange={this.onChangeName.bind(this)}></input>
                    <div className="error-msgs">{this.state.errorName}</div>
                    <label>Subject: </label><input type='text' name='yourSubject' value={this.state.yourSubject} onChange={this.onChangeSubject.bind(this)}></input>
                    <div className="error-msgs">{this.state.errorSubject}</div>
                    <label>Email Address: </label><input type='text' name="Email" value={this.state.Email} onChange={this.onChangeMail.bind(this)}></input>
                    <div className="error-msgs">{this.state.errorEmail}</div>
                    <label>Message: </label><textarea name='Message' value={this.state.Message} onChange={this.onChangeMsg.bind(this)}></textarea>
                    <div className="error-msgs">{this.state.errorMessage}</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <button type="submit">Submit</button>
                    
                    <div className={this.state.sent ? "confirmationAppear":"submission"}>
                        <h3>Your E-mail has been successfully sent!</h3>
                    </div>
                    </form>
                    <br></br>
                    <br></br>
                    <br></br>
            </div>
        )
    }
    
};
export default Contact