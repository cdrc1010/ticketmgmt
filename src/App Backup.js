import './App.css';
import Form from './Component/Form/Form';
import Tickets from './Component/Ticket/Tickets'
import { useState, useEffect } from 'react';

function App() {
  let tickets = localStorage.getItem('ticketList') ? JSON.parse(localStorage.getItem('ticketList')) : [];

  const [ticketToRender] = useState(tickets);

  console.log(ticketToRender)
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
      console.log(ticketToRender)
    }
  }, [update, ticketToRender]);

  // const [findticket, setFindTicket] = useState(null);

  //WORKING DELETE HANDLER
  const deleteHandler = (id) => {
    const findTicketNumber = ticketToRender.findIndex(el => id === el.id);
    ticketToRender.splice(findTicketNumber, 1);
    setUpdateTicket(findTicketNumber);
    setUpdate(prevState => !prevState);

    localStorage.setItem("ticketList", JSON.stringify(ticketToRender))
    console.log(updateTicket);
  };

  const updateHandler = (id) => {
    const findTicket = ticketToRender.find(el => id === el.id);
    // console.log(findTicket);
    setUpdateTicket(findTicket);
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // console.log(updateTicket);
  }


  // const updatemyField = updateField ? updateField : {};
  const checkingExistingTicket = () => {
    const existingTicketNumber = ticketToRender.find(el => el.ticketNo === updateTicket.ticketNo);
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
        ticketToRender.unshift(updateTicket)
        // setTicketToRender(prevState => [updateTicket,...prevState]);
        localStorage.setItem('ticketList', JSON.stringify(ticketToRender));
        setUpdateTicket({
          id: '',
          ticketNo: 'XPD-',
          sp: '',
          epicName: '',
        });
        // setTicketToRender(prevState => [updateTicket, ...prevState]);
        // console.clear();
        // console.log(updateTicket);
        // localStorage.setItem('ticketList', JSON.stringify(ticketToRender));
        setUpdate(prevState => !prevState);
      
        alert("Added Succesfully");
        window.scrollTo({ top: 1000, behavior: 'smooth' });
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
    const findItemIndex = ticketToRender.findIndex(el => el.id === updateTicket.id);
    // console.log(findItemIndex);
    ticketToRender[findItemIndex] = updateTicket;
    // console.log(updated);
    // setUpdateTicket(updated);
    localStorage.setItem('ticketList', JSON.stringify(ticketToRender));
    // setUpdate(true);
    setUpdate(prevState => !prevState);
    // console.log('to be update',tickets);
  };

  // console.log(updateTicket);

  return (
    <div className="App">
      <Form updateField={updateTicket} onSubmitHandler={onSubmitHandler} spHandler={spHandler} epicHandler={epicHandler} ticketHandler={ticketHandler} onUpdateTicket={updateTicketHandler} />
      {/* <Tickets data={tickets} onDelete={deleteHandler} /> */}

      <Tickets data={ticketToRender} onUpdate={updateHandler} onDelete={deleteHandler} />

    </div>
  );
}

export default App;
