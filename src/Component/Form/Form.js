import InputField from "../Inputs/Inputs";
import styles from './Form.module.css';

const Form = ({updateField, onMyUpdate,  onSubmitHandler, spHandler, ticketHandler, epicHandler, onUpdateTicket}) => {


    return ( 
        <>
        <form>
            <h1 className={styles.label}>Ticket Monitoring System(Mini)</h1>
            <InputField updateField={updateField} onMyUpdate={onMyUpdate}  onSubmitHandler={onSubmitHandler} spHandler={spHandler} epicHandler={epicHandler} ticketHandler={ticketHandler} onUpdateTicket={onUpdateTicket}/>
        </form>
        </>
     );
}
 
export default Form;