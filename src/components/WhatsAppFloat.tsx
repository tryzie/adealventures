import { whatsappLink } from '../data/site';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a className="wa-float" href={whatsappLink('Hi Adealventure, I would like to ask about a trip.')} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <WhatsAppIcon />
    </a>
  );
}
