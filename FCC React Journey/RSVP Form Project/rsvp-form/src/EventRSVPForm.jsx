import { useState } from "react";

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(0);
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !attendees) {
      alert("please fill all required fields");
    }
    setMessage(`RSVP Submitted`);
  }

  return (
    <div id="container">
      <h2>Event RSVP Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
        </label> <br/>
        <input type="text" id="name" onChange={e => setName(e.target.value)} required/><br/>
        <label htmlFor="email">Email:</label><br/>
        <input type="email" id="email" onChange={e => setEmail(e.target.value)} required/><br/>
        <label htmlFor="attendees">Number of attendees:</label><br />
        <input type="number" id="attendees" onChange={e => setAttendees(e.target.value)} required/><br />
        <label htmlFor="diet">
          Dietary Preferences:
        </label> <br />
        <input type="text" id="diet" placeholder="Dietary preferences(optional)" onChange={e => setDietaryPreferences(e.target.value)} /><br />
        <label>
          Bringing additional guests?
          <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)}/><br/>
          <button type="submit">Submit RSVP</button>
          {message && <div className="message">
            {message}
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Number of attendees: {attendees}</p>
            <p>Dietary preferences: {dietaryPreferences? dietaryPreferences: "none"}</p>
            <p>Bringing additional guests: {isChecked? "Yes": "No"}</p>
          </div>}
        </label>
      </form>
    </div>
  );
}
