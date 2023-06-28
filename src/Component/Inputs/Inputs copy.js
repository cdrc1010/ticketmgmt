import { useState } from 'react';
import styles from './Inputs.module.css';

const InputField = ({updateField}) => {
    let tickets = localStorage.getItem('ticketList') ? JSON.parse(localStorage.getItem('ticketList')) : [];

    // console.log(updateField)
    const [ticketData, setTicketData] = useState({
        id: '',
        ticketNo: 'XPD-',
        sp: '',
        epicName: '',
    });

    // const updatemyField = updateField ? updateField : {};
    const checkingExistingTicket = () => {
        const existingTicketNumber = tickets.find(el => el.ticketNo === ticketData.ticketNo);
        if (existingTicketNumber) {
            alert('Same ticket number is not allowed')
            setTicketData({
                id: '',
                ticketNo: 'XPD-',
                sp: '',
                epicName: '',
            });
            return true;
        }
    }

    const ticketHandler = (e) => {
        setTicketData(prevState => {
            return {
                ...prevState,
                id: e.target.value,
                ticketNo: e.target.value,
            }
        })
    };

    const epicHandler = (e) => {
        setTicketData(prevState => {
            return {
                ...prevState,
                epicName: e.target.value,
            }
        })
    };

    const spHandler = (e) => {
        setTicketData(prevState => {
            return {
                ...prevState,
                sp: e.target.value,
            }
        })
    };

    const inputValidations = () => {
        if (ticketData.epicName !== '' && ticketData.sp <= 8 && ticketData.ticketNo.includes('XPD-')) {
            return true;
        }
        return false;
    };



    const onSubmitHandler = (e) => {
        e.preventDefault();
        inputValidations()
        const validations = inputValidations();
        const existingticket = checkingExistingTicket();
        if (validations) {
            if (!existingticket) {
                tickets.push(ticketData)
                localStorage.setItem('ticketList', JSON.stringify(tickets));
                setTicketData({
                    id: Math.random() * 1,
                    ticketNo: 'XPD-',
                    sp: '',
                    epicName: '',
                });
                alert("Added Succesfully");
                window.location.reload();
                return;
            }
        } else {
            alert("Fields must not be empty and check the placeholder for guide");
        }
    };



    return (
        <div className={styles.inputContainer}>
            <div className={styles.input}>
                <input type="text" placeholder="XPD-0000" onChange={ticketHandler} value={updateField.ticketNo} />
            </div>
            <div className={styles.input}>
                <select onChange={epicHandler} defaultValue="Choose Epic" >
                    <option value="Choose Epic" disabled>Choose Epic</option>
                    <option value="Mini Chile My Account">Mini Chile My Account</option>
                    <option value="Mini Chile Digital Direct | Basket & Checkout">Mini Chile Digital Direct | Basket & Checkout</option>
                    <option value="Mini Chile Digital Direct | Finance Application">Mini Chile Digital Direct | Finance Application</option>
                    <option value="Mini Chile Digital Direct | Stock">Mini Chile Digital Direct | Stock</option>
                    <option value="Mini Chile|Payment Gateway">Mini Chile|Payment Gateway</option>
                    <option value="Mini Chile Sales Enablement">Mini Chile Sales Enablement</option>
                </select>
            </div>
            <div className={styles.input}>
                <select onChange={spHandler} defaultValue="Choose SP" >
                    <option value="Choose SP" disabled>Choose SP</option>
                    <option value="0.5">0.5 SP</option>
                    <option value="1">1 SP</option>
                    <option value="2">2 SP</option>
                    <option value="3">3 SP</option>
                    <option value="5">5 SP</option>
                    <option value="8">8 SP</option>
                </select>
            </div>
            <div className={styles.input}>
                <button className={styles.submit} onClick={onSubmitHandler}>Submit</button>
            </div>
            <div className={styles.input}>
                <button className={styles.submit}>Update</button>
            </div>
        </div>
    );
}

export default InputField;