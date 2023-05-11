import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

function ContactStatus({ contact }) {
  return (
    <div>
      <h2>
        {contact.nombre} {contact.apellido}
      </h2>
      <h3>{contact.email}</h3>
      <h4>
        {contact.conectado ? "Contacto En Línea" : " Contacto No Disponible"}
      </h4>
    </div>
  );
}

ContactStatus.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactStatus;
