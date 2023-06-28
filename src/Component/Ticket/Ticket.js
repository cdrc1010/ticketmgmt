import styles from './Ticket.module.css';

const Ticket = ({ ticket, epic, sp, id, onUpdate, onDelete }) => {

    const ticketHandler = (ticketLink) => {
        // window.location.href = `https://inchcapeglobal.atlassian.net/browse/${ticketLink}`
        window.open(`https://inchcapeglobal.atlassian.net/browse/${ticketLink}`, '_blank');
        // console.log(ticketLink)
    }

    return (
        <li className={styles.eachTicket}>
            <span className={styles.edit} onClick={() => { onUpdate(id) }}>Edit</span>
            <span className={styles.delete} onClick={() => { onDelete(id) }}>Delete</span>
            <div>{epic}</div>
            <span>{ticket}</span>
            <span className={styles.sp}>{sp}SP</span>
            <div className={styles.links} onClick={() => { ticketHandler(ticket) }}>https://inchcapeglobal.atlassian.net/browse/{ticket}</div>
            
        </li>
    );
}

export default Ticket;