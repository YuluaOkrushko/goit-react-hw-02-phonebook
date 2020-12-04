import React, {Component} from 'react';
import styles from "./ContactForm.module.css"

export default class ContactForm extends Component {

    state = {
        id: "",
        name: "",
        number: ""
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onAddContact({
            name: this.state.name,
            number: this.state.number
        })
    }

    render(){
        const {name, number} = this.state;
    return (
    <form onSubmit={this.handleSubmit}>
        <h1 className={styles.title}>Phonebook</h1>
        <label>
            <div className={styles.wrapper}>
                <h3 className={styles.title_item}>Name</h3>
                <input
                className={styles.input}
                type="text"
                value={name}
                name="name"
                onChange={this.handleChange}/>
            </div>
        </label>
        <label>
            <div className={styles.wrapper}>
                <h3 className={styles.title_item}>Number</h3>
                <input
                className={styles.input}
                type="tel"
                value={number}
                name="number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                onChange={this.handleChange} />
            </div>
        </label>
        <div className={styles.button_wrapper}>
            <button className={styles.button} type="submit"
            disabled={name === "" || number === "" ? true : false}>Add contact</button>
        </div>
    </form>
    )
    }
}
