import Ticket from "./Ticket";
import styles from './Tickets.module.css';
import useGetTotalSp from "../../hooks/useGetTotal";
import { useState } from "react";
const Tickets = ({ data, onUpdate, onDelete }) => {


    const [filterTicket, setFilterTicket] = useState(data);
    const [selectedFilter, setSelectedFilter] = useState('');






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
    const filterHandler = (e) => {
        console.log(e.target.value);
        let filteredEpic = e.target.value;
        setSelectedFilter(filteredEpic);

        const myFilteredTickets = data.reverse().filter(ticket => {
            return ticket.epicName === filteredEpic
        })

        setFilterTicket(myFilteredTickets);
    };

    const clearHandler = () => {
        setFilterTicket(data);
        setSelectedFilter('');
    };

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
            <div className={styles.filterContainer}>
                <div className={styles.filterLabel}>Filter:</div>
                <div>
                    <select defaultValue={selectedFilter} onChange={filterHandler} className={styles.filterSelection} value={selectedFilter}>
                        <option value="" disabled>Choose Epic</option>
                        <option value="Mini Chile My Account">Mini Chile My Account</option>
                        <option value="Mini Chile Digital Direct | Basket & Checkout">Mini Chile Digital Direct | Basket & Checkout</option>
                        <option value="Mini Chile Digital Direct | Finance Application">Mini Chile Digital Direct | Finance Application</option>
                        <option value="Mini Chile Digital Direct | Stock">Mini Chile Digital Direct | Stock</option>
                        <option value="Mini Chile|Payment Gateway">Mini Chile|Payment Gateway</option>
                        <option value="Mini Chile Sales Enablement">Mini Chile Sales Enablement</option>
                    </select>
                </div>
                <div>
                    <button onClick={clearHandler} className={styles.btnClear}>Clear</button>
                </div>
            </div>
            <div className={styles.ticketContainer}>
                <ul>
                    {filterTicket.map((ticket) => (
                        <Ticket className={styles.ticketItem} key={ticket.id} ticket={ticket.ticketNo} epic={ticket.epicName} sp={ticket.sp} id={ticket.id} onUpdate={onUpdate} onDelete={onDelete} />
                    ))}
                </ul>

            </div>
        </>

    );
}

export default Tickets;