import { phone } from "@/constant/generalInfos";

export const redirectToWhatsapp = () => {
    const message="Hello, I would like more information about your services."

    const text = message ? encodeURIComponent(message) : "";
    const url = `https://wa.me/${phone}${text ? `?text=${text}` : ""}`;

    window.open(url, "_blank"); // open in new tab / WhatsApp app
  
}