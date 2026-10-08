// translations/Contact.js

import ContactData from "./ContactData";

const ContactTranslations = {
  hero: {
    badge: "Contacto",
    titlePrimary: "Estamos para ayudarte con tu próximo",
    titleHighlight: " proyecto.",
    description: "¿Buscás un producto, necesitás asesoramiento o querés hacer una consulta? Ponete en contacto con nosotros.",
  },
  infoSection: {
    badge: "Hablemos",
    title: "¿Cómo podemos ayudarte?",
    description: "Escribinos y te responderemos con la información que necesites.",
    ...ContactData, 
  },
  formSection: {
    badge: "Enviá tu consulta",
    title: "Contanos qué necesitás.",
    description: "Completá el formulario y nos pondremos en contacto con vos.",
    fields: {
      name: {
        label: "Nombre",
        placeholder: "Tu nombre",
      },
      email: {
        label: "Email",
        placeholder: "tu@email.com",
      },
      phone: {
        label: "Teléfono",
        placeholder: "+54 9 11 0000-0000",
      },
      message: {
        label: "Consulta",
        placeholder: "¿En qué podemos ayudarte?",
      },
    },
    submitButton: "Enviar consulta",
  },
  modal: {
    title: "¡Consulta enviada!",
    description: "Recibimos tu consulta correctamente. Nos pondremos en contacto con vos lo antes posible.",
    button: "Aceptar",
  },
};

export default ContactTranslations;