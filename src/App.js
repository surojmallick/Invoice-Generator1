import React, {useState, useRef} from 'react';
import Header from './components/Header';
import MainDetails from './components/MainDetails';
import Notes from './components/Notes';
import Table from './components/Table';
import ClientDetails from './components/ClientDetails';
import Footer from './components/Footer';
import Dates from './components/Dates';
import TableForm from './components/TableForm';
import ReactToPrint from 'react-to-print';

function App() {

  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName , setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setinvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  }
  return (
    <>
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:mx-w-4xl bg-white rounded shadow">
      {showInvoice ? 
      <>
        <ReactToPrint trigger={()=> <button className='bg-gray-500 text-white font-bold py-2 px-8 my-3 ml-4 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300'>Print / Donwload</button>}
        content={()=> componentRef.current}/>
        <div ref={componentRef} className='p-5'>
          <Header handlePrint = {handlePrint}/>
          <MainDetails name ={name} address={address}/>
          <ClientDetails clientName={clientName} clientAddress={clientAddress}/>
          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
          <Table list={list} total={total}/>
          <Notes notes = {notes}/>
          <Footer name={name} email={email} phone={phone} website={website} bankName={bankName} bankAccount={bankAccount}/>
        </div>
        <button onClick={()=>{setShowInvoice(false)}} className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 my-3 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Edit Information</button>
      </>: (

        <>
          <div className='flex flex-col justify-center'>
            <article className='md:grid grid-cols-2 gap-10'>
              <div className='flex flex-col'>
                {/* name */}
                <label htmlFor='name'>Your Full Name</label>
                <input 
                type="text" 
                name='text' id='name' 
                placeholder='Enter Your Full Name' 
                autoComplete='off' value={name} onChange={(e)=>{setName(e.target.value)}}/>
              </div>

              <div className='flex flex-col'>
              {/* address */}
                <label htmlFor='address'>Enter Your Address</label>
                <input 
                type="text" 
                name='address' id='address' 
                placeholder='Enter Your Address' 
                autoComplete='off' value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
              </div>
            </article>

            <article className='md:grid grid-cols-3 gap-10'>
              <div className='flex flex-col'>
                {/* Email */}
                <label htmlFor='email'>Enter Your Email</label>
                <input 
                type="email" 
                name='email' id='email' 
                placeholder='Enter Your Email' 
                autoComplete='off' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>

              <div className='flex flex-col'>
                {/* Phone */}
                <label htmlFor='phone'>Enter Your Phone</label>
                <input 
                type="text" 
                name='text' id='phone' 
                placeholder='Enter Your Phone' 
                autoComplete='off' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
              </div>

              <div className='flex flex-col'>
                {/* Website */}
                <label htmlFor='website'>Enter Your Website</label>
                <input 
                type="url" 
                name='website' id='website' 
                placeholder='Enter Your Website' 
                autoComplete='off' value={website} onChange={(e)=>{setWebsite(e.target.value)}}/>
              </div>
            </article>

            <article className='md:grid grid-cols-2 gap-10'>
              <div className='flex flex-col'>
                {/* Bank Name*/}
                <label htmlFor='bankName'>Enter Your Bank Name</label>
                <input 
                type="text" 
                name='bankName' id='bankName' 
                placeholder='Enter Your Bank Name' 
                autoComplete='off' value={bankName} onChange={(e)=>{setBankName(e.target.value)}}/>
              </div>
              <div className='flex flex-col'>
                  {/* Bank Account */}
                  <label htmlFor='bankAccount'>Enter Your Bank Account Number</label>
                  <input 
                  type="text" 
                  name='bankAccount' id='bankAccount' 
                  placeholder='Enter Your Bank Account' 
                  autoComplete='off' value={bankAccount} onChange={(e)=>{setBankAccount(e.target.value)}}/>
              </div>
            </article>
            
            <article className='md:grid grid-cols-2 gap-10 md:mt-16'>
              <div className='flex flex-col'>
                {/* Client's Name */}
                <label htmlFor='clientName'>Enter Your Client's Name</label>
                <input 
                type="text" 
                name='clientName' id='clientName' 
                placeholder='Enter Your Clients Name' 
                autoComplete='off' value={clientName} onChange={(e)=>{setClientName(e.target.value)}}/>
              </div>
              
              <div className='flex flex-col'>
                {/* Client's Address */}
                <label htmlFor='clientAddress'>Enter Your Client's Address</label>
                <input 
                type="text" 
                name='clientAddress' id='clientAddress' 
                placeholder='Enter Your Clients Address' 
                autoComplete='off' value={clientAddress} onChange={(e)=>{setClientAddress(e.target.value)}}/>
              </div>
            </article>
            
            <article className='md:grid grid-cols-3 gap-10'>
              <div className='flex flex-col'>
                  {/* Invoice Number */}
                  <label htmlFor='invoiceNumber'>Invoice Number</label>
                  <input 
                  type="text" 
                  name='invoiceNumber' id='invoiceNumber' 
                  placeholder='Invoice Number' 
                  autoComplete='off' value={invoiceNumber} onChange={(e)=>{setinvoiceNumber(e.target.value)}}/>
              </div>
              <div className='flex flex-col'>
                {/* Invoice Date */}
                <label htmlFor='invoiceDate'>Invoice Date</label>
                <input 
                type="date" 
                name='invoiceDate' id='invoiceDate' 
                placeholder='Enter Your Invoice Date' 
                autoComplete='off' value={invoiceDate} onChange={(e)=>{setInvoiceDate(e.target.value)}}/>
              </div>
              <div className='flex flex-col'>
                {/* Due Date */}
                <label htmlFor='dueDate'>Due date</label>
                <input 
                type="date" 
                name='dueDate' id='dueDate' 
                placeholder='Enter Due Date' 
                autoComplete='off' value={dueDate} onChange={(e)=>{setDueDate(e.target.value)}}/>
              </div>
            </article>

            {/* Table form */}
            <article>
              <TableForm 
              description={description} setDescription={setDescription} quantity={quantity} 
              setQuantity={setQuantity} price={price} setPrice={setPrice} 
              amount={amount} setAmount={setAmount} list={list} setList={setList}
              total={total} setTotal={setTotal}/>
            </article>

            {/* notes */}
            <label htmlFor='notes'>Additional Notes</label>
            <textarea name="notes" id="notes" 
            placeholder='Additonal Notes' 
            value={notes} onChange={(e)=>{setNotes(e.target.value)}} cols="30" rows="10"></textarea>
          
            <button onClick={()=>{setShowInvoice(true)}} className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Preview Invoice</button>
            </div>
        </>
      )}
    </main>
    </>
  );
}

export default App;
