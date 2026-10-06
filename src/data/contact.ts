export const CLINIC_CONTACT = {
  phoneDisplay: '(67) 99983-7922',
  phoneAltDisplay: '(67) 9983-7922',
  whatsappDigits: '5567999837922',
  instagram: 'https://instagram.com/clinica_ellora',
  instagramHandle: '@clinica_ellora',
  address: {
    city: 'Nova Andradina',
    state: 'MS',
    fullCity: 'Nova Andradina - MS',
  },
  openingHours: 'Segunda a Sexta: 08:00 às 18:00',
  defaultWhatsAppMessage: 'Olá Dra. Silvana, gostaria de agendar uma consulta na Clínica Ellora.',
};

export const getWhatsAppUrl = (message: string = CLINIC_CONTACT.defaultWhatsAppMessage): string => {
  return `https://wa.me/${CLINIC_CONTACT.whatsappDigits}?text=${encodeURIComponent(message)}`;
};
