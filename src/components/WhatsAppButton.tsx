import { MessageCircle } from 'lucide-react'; // Or any other WhatsApp icon you prefer

const WhatsAppButton = () => {
  const phoneNumber = '918152074243'; // Your WhatsApp number without '+' or spaces
  const prefilledMessage = encodeURIComponent('Hi, I want to inquire about your services');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${prefilledMessage}`}
      className="fixed bottom-5 right-5 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  );
};

export default WhatsAppButton;
