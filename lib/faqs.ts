import { site } from "./site";
// Each answer opens with the direct answer so it can be lifted into an answer box or AI summary.
export const homeFaqs = [
  { q: "What is Photo Fixion?", a: `Photo Fixion is a professional photo editing and image retouching service for e-commerce businesses, photographers, studios and agencies. A team of ${site.teamSize} Photoshop editors handles clipping path, background removal, masking, ghost mannequin, retouching, colour correction and shadow creation.` },
  { q: "How fast is delivery?", a: `Standard delivery is ${site.turnaround.standard}. Express delivery is available in ${site.turnaround.fast} or ${site.turnaround.rush} for urgent orders.` },
  { q: "Do you offer a free trial?", a: "Yes. You can request a free trial to check our quality before placing a full order. Trial terms are confirmed when you request it." },
  { q: "How much does photo editing cost?", a: "Pricing depends on the service, the complexity of the image and the volume. Send sample images to receive a quote. Discounts apply to bulk orders." },
  { q: "Can you handle bulk orders?", a: `Yes. ${site.teamSize} editors work around the clock, so large batches are divided and edited in parallel without missing the deadline.` },
  { q: "How do I send and receive files?", a: "You can send images through a cloud transfer link. Regular clients receive personal FTP access for faster uploads and downloads." },
  { q: "What if I am not happy with the result?", a: "We revise the images until they match your instructions. If you are still not satisfied after revisions, you can request a refund." },
  { q: "Are my images kept private?", a: "Yes. Client images are used only to complete the order and are never used for our marketing without permission." },
];
