import './App.css';
import Form from './Component/Form/Form';
import Tickets from './Component/Ticket/Tickets'
import { useState, useEffect } from 'react';

function App() {
  let tickets = localStorage.getItem('ticketList') ? JSON.parse(localStorage.getItem('ticketList')) : [];

  const [updateTicket, setUpdateTicket] = useState({
    id: '',
    ticketNo: 'XPD-',
    sp: '',
    epicName: '',
  });

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (update) {
      setUpdate(prevState => !prevState);
    }
  }, [update]);

  // const [findticket, setFindTicket] = useState(null);

  //WORKING DELETE HANDLER
  const deleteHandler = (id) => {
    const findTicketNumber = tickets.findIndex(el => id === el.id);
    tickets.splice(findTicketNumber, 1);
    setUpdateTicket(findTicketNumber);
    localStorage.setItem("ticketList", JSON.stringify(tickets))
    console.log(updateTicket);
  };

  const updateHandler = (id) => {
    const findTicket = tickets.find(el => id === el.id);
    // console.log(findTicket);
    setUpdateTicket(findTicket);
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    window.scrollTo({top:0, behavior:'smooth'});
    // console.log(updateTicket);
  }


  // const updatemyField = updateField ? updateField : {};
  const checkingExistingTicket = () => {
    const existingTicketNumber = tickets.find(el => el.ticketNo === updateTicket.ticketNo);
    if (existingTicketNumber) {
      alert('Same ticket number is not allowed')
      setUpdateTicket({
        id: '',
        ticketNo: 'XPD-',
        sp: '',
        epicName: '',
      });
      return true;
    }
  }

  const ticketHandler = (e) => {
    setUpdateTicket(prevState => {
      return {
        ...prevState,
        id: e.target.value,
        ticketNo: e.target.value,
      }
    })
  };

  const epicHandler = (e) => {
    setUpdateTicket(prevState => {
      return {
        ...prevState,
        epicName: e.target.value,
      }
    })
  };

  const spHandler = (e) => {
    setUpdateTicket(prevState => {
      return {
        ...prevState,
        sp: e.target.value,
      }
    })
  };

  const inputValidations = () => {
    if (updateTicket.epicName !== '' && updateTicket.sp <= 8 && updateTicket.ticketNo.includes('XPD-')) {
      return true;
    }
    return false;
  };



  const onSubmitHandler = (e) => {
    e.preventDefault();
    inputValidations();
    const validations = inputValidations();
    const existingticket = checkingExistingTicket();
    if (validations) {
      if (!existingticket) {
        tickets.push(updateTicket)
        localStorage.setItem('ticketList', JSON.stringify(tickets));
        setUpdateTicket({
          id: Math.random() * 1,
          ticketNo: 'XPD-',
          sp: '',
          epicName: '',
        });
        alert("Added Succesfully");
        window.scrollTo({top: 1000, behavior:'smooth'});

        return;
      }
    } else {
      alert("Fields must not be empty and check the placeholder for guide");
    }
  };

  const updateTicketHandler = (e) => {
    e.preventDefault();
    // const findItem = tickets.filter(el=> el.id === updateTicket.id);
    // // let thisFile = findItem[0];
    // // // setUpdateTicket(thisFile);
    const findItemIndex = tickets.findIndex(el => el.id === updateTicket.id);
    // console.log(findItemIndex);
    tickets[findItemIndex] = updateTicket;
    // console.log(updated);
    // setUpdateTicket(updated);
    localStorage.setItem('ticketList', JSON.stringify(tickets));
    // setUpdate(true);
    setUpdate(prevState => !prevState);
    // console.log('to be update',tickets);
  };

  // console.log(updateTicket);

  return (
    <div className="App">
      <Form updateField={updateTicket} onSubmitHandler={onSubmitHandler} spHandler={spHandler} epicHandler={epicHandler} ticketHandler={ticketHandler} onUpdateTicket={updateTicketHandler} />
      {/* <Tickets data={tickets} onDelete={deleteHandler} /> */}

      <Tickets data={tickets} onUpdate={updateHandler} onDelete={deleteHandler} />

    </div>
  );
}

export default App;
