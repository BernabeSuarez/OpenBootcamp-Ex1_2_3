import ContactStatus from "../pure/ContactStatus";
import { Contact } from "../../models/contact.class";
import { useState } from "react";

function ContactContainer() {
  const [conected, setConected] = useState(false);
  const defaultContact = new Contact(
    "Juan",
    "Perez",
    "jperez@gmail.com",
    conected
  );

  return (
    <div>
      <ContactStatus contact={defaultContact} />
      <button onClick={() => setConected(!conected)}>Change Status</button>
    </div>
  );
}

export default ContactContainer;
