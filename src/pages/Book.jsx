import React, { useState } from 'react'
import './css/Book.css'

const Book = () => {
  const [people, setPeople] = useState(1);
  const [price, setPrice] = useState(10000)
  const add = () =>{
    if( (people+1) < 20){
      setPeople( people => people+1);
      setPrice(price => price + 10000);
    }
  };
  const sub = () =>{
    if((people-1) >=1){
      setPeople(people => people-1);
      setPrice(price => price-10000);
    }
  };
  const [result1, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("Total cost", price );
    formData.append("access_key", "Add-Your-own-web3-forms-API-Key");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(" ");
      setPeople(1);
      setPrice(10000);
      event.target.reset();
      alert("Congratulations Wanderer ! Your seat has booked !!");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='book'>
      <h1 className="book-title">
        Book your seat for this wander
        <hr />
      </h1>
      <form onSubmit={onSubmit}>
          <label htmlFor="name">  Your name : </label>
          <input type="text" name="name" id="name" required placeholder='Enter your name here' />

          <label htmlFor="mail"> E-mail address : </label>
          <input type="email" name="mail" id="mail" required placeholder='Enter your Email address here'/>

          <label htmlFor="phone"> Contact no. :</label>
          <input type="tel" name="phone" id="phone" required placeholder='Enter your 10 digit contact number here' />

          <label htmlFor="people">Number of people :</label>
          <div className="num">
          <span className="math" onClick={sub}>-</span><input type="number" name="people" readOnly value={people} min={1} max={30} id="people" />
          <span className='math' onClick={add}>+</span>
          </div>
          <h1 className="cost">
            Total Price: <span>&#8377;</span>{price}
          </h1>
          <label htmlFor="preference">Any preference for guides :</label>
          <textarea name="preference" id="preference" cols="20" placeholder='if you want some preference for guide' rows="5"></textarea>
          <label htmlFor="special">Any special interests or Requests : </label>
          <div className="special-check">
            <input type="checkbox" name="special" id="special1" value="photography" /> <label htmlFor="special1" className="option"> Photography</label>
          </div>
          <div className="special-check">
            <input type="checkbox" name="special" id="special2" value="local experience" /> <label htmlFor="special2" className="option"> Local experiences</label>
          </div>
          <div className="special-check">
            <input type="checkbox" name="special" id="special3" value="spiritual journeys" /> <label htmlFor="special3" className="option"> Spiritual journeys</label>
          </div>
          <div className="special-check">
            <input type="checkbox" name="special" id="special4" value="adventure and thrill" /> <label htmlFor="special4" className="option"> Adventure & thrill</label>
          </div>

          <label htmlFor="medical">Any medical information : </label>
          <input type="text" name="medical" id="medical" placeholder='If there is any medical problem to person, inform us' />

          <div className="confirm">
            <input type="checkbox" name="confirm" id="confirm" required /> <p> I agree to abide by the terms & conditions outlined by Mumbai Wanderers for the duration of my tour.</p>
          </div>
          <button type='submit'>Book now</button>
      </form>
      <span>{result1}</span>
    </div>
  )
}

export default Book
