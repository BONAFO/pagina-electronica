// translations/Footer.js

import ContactData from "./ContactData";

const FooterTranslations = {
  brand: {
    nameFirst: "ELECTRO ",
    nameHighlight: "TEC",
    description: "Componentes, herramientas e instrumental para tus proyectos electrónicos.",
  },
  navigation: {
    title: "Navegación",
  },
  contact: {
    title: "Contacto",
    location: `📍 ${ContactData.location.value}`,
    phone: `📞 ${ContactData.phone.value}`,
    email: `✉️ ${ContactData.email.value}`,
    schedule: `🕐 Lun - Vie · ${ContactData.schedule.weekdaysHours}`,
  },
  copyright: "© 2026 ELECTRO TEC. Todos los derechos reservados.",
};

export default FooterTranslations;