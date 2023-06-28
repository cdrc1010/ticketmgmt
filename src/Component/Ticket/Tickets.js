import Ticket from "./Ticket";
import styles from './Tickets.module.css';
import useGetTotalSp from "../../hooks/useGetTotal";
const Tickets = ({ data, onUpdate, onDelete }) => {

    // const myAccountTotal = data.filter(el => el.epicName === 'Mini Chile My Account').reduce((acc, val) => {
    //     let currentSP = parseFloat(val.sp);
    //     return acc + currentSP
    // }, 0);
    // const basketTotal = data.filter(el => el.epicName === 'Mini Chile Digital Direct | Basket & Checkout').reduce((acc, val) => {
    //     let currentSP = parseFloat(val.sp);
    //     return acc + currentSP
    // }, 0);
    // const financeTotal = data.filter(el => el.epicName === 'Mini Chile Digital Direct | Finance Application').reduce((acc, val) => {
    //     let currentSP = parseFloat(val.sp);
    //     return acc + currentSP
    // }, 0);
    // const stockTotal = data.filter(el => el.epicName === 'Mini Chile Digital Direct | Stock').reduce((acc, val) => {
    //     let currentSP = parseFloat(val.sp);
    //     return acc + currentSP
    // }, 0);
    // const paymentGatewayTotal = data.filter(el => el.epicName === 'Mini Chile|Payment Gateway').reduce((acc, val) => {
    //     let currentSP = parseFloat(val.sp);
    //     return acc + currentSP
    // }, 0);
    // const salesEnablement = data.filter(el => el.epicName === 'Mini Chile Sales Enablement').reduce((acc, val) => {
    //     let currentSP = parseFloat(val.sp);
    //     return acc + currentSP
    // }, 0);

    const myAccountTotal = useGetTotalSp(data, 'Mini Chile My Account');
    const basketTotal = useGetTotalSp(data, 'Mini Chile Digital Direct | Basket & Checkout');
    const financeTotal = useGetTotalSp(data, 'Mini Chile Digital Direct | Finance Application');
    const stockTotal = useGetTotalSp(data, 'Mini Chile Digital Direct | Stock');
    const paymentGatewayTotal = useGetTotalSp(data, 'Mini Chile|Payment Gateway');
    const salesEnablement = useGetTotalSp(data, 'Mini Chile Sales Enablement');

    return (
        <>
            <div className={styles.totalSpContainer}>
                <h2>Epic Link and Total</h2>
                <div className={styles.totalSpRow}>Mini CL MyAccount: <span className={styles.spValue}>{myAccountTotal} SP</span></div>
                <div className={styles.totalSpRow}>Mini CL Digital Direct | Basket & Checkout: <span className={styles.spValue}>{basketTotal} SP</span></div>
                <div className={styles.totalSpRow}>Mini CL  Digital Direct | Finance Application: <span className={styles.spValue}>{financeTotal} SP</span></div>
                <div className={styles.totalSpRow}>Mini CL  Digital Direct | Stock: <span className={styles.spValue}>{stockTotal} SP</span></div>
                <div className={styles.totalSpRow}>Mini CL  Digital Direct | Payment Gateway: <span className={styles.spValue}>{paymentGatewayTotal} SP</span></div>
                <div className={styles.totalSpRow}>Mini CL  Sales Enablement: <span className={styles.spValue}>{salesEnablement} SP</span></div>
            </div>
            <div className={styles.ticketContainer}>
                <ul>
                    {data.map((ticket) => (
                        <Ticket className={styles.ticketItem} key={ticket.id} ticket={ticket.ticketNo} epic={ticket.epicName} sp={ticket.sp} id={ticket.id} onUpdate={onUpdate} onDelete={onDelete} />
                    ))}
                </ul>

            </div>
        </>

    );
}

export default Tickets;