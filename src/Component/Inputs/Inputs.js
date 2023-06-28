import styles from './Inputs.module.css';

const InputField = ({ updateField, onSubmitHandler, spHandler, ticketHandler, epicHandler, onUpdateTicket }) => {



    return (
        <div className={styles.inputContainer}>
            <div className={styles.input}>
                <input type="text" placeholder="XPD-0000" onChange={ticketHandler} value={updateField.ticketNo} />
            </div>
            <div className={styles.input}>
                <select onChange={epicHandler} defaultValue="Choose Epic" value={updateField.epicName}>
                    <option value="" disabled>Choose Epic</option>
                    <option value="Mini Chile My Account">Mini Chile My Account</option>
                    <option value="Mini Chile Digital Direct | Basket & Checkout">Mini Chile Digital Direct | Basket & Checkout</option>
                    <option value="Mini Chile Digital Direct | Finance Application">Mini Chile Digital Direct | Finance Application</option>
                    <option value="Mini Chile Digital Direct | Stock">Mini Chile Digital Direct | Stock</option>
                    <option value="Mini Chile|Payment Gateway">Mini Chile|Payment Gateway</option>
                    <option value="Mini Chile Sales Enablement">Mini Chile Sales Enablement</option>
                </select>
            </div>
            <div className={styles.input}>
                <select onChange={spHandler} defaultValue="Choose SP" value={updateField.sp}>
                    <option value="" disabled>Choose SP</option>
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
                <button className={styles.submit} onClick={onUpdateTicket}>Update</button>
            </div>
        </div>
    );
}

export default InputField;