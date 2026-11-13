export type Service = {
  slug: string;
  name: string;
  short: string;
  /** Direct, quotable definition (40-60 words). Shown first on the page for answer engines. */
  answer: string;
  includes: string[];
  bestFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "clipping-path",
    name: "Clipping Path",
    short: "Hand-drawn paths that cut products cleanly from any background.",
    answer:
      "A clipping path is a hand-drawn vector outline around a product that separates it from its background. Photo Fixion editors draw every path manually with the Photoshop pen tool, so edges stay sharp on hard-edged products such as shoes, bottles, electronics and furniture.",
    includes: ["Hand-drawn pen tool paths", "Single and multiple paths", "Transparent, white or custom background", "PSD, PNG, JPG or TIFF delivery"],
    bestFor: ["Hard-edged products", "Marketplace listings", "Catalogues and print"],
    faqs: [
      { q: "Is the clipping path drawn by hand?", a: "Yes. Every path is drawn manually with the pen tool by a trained editor. We do not rely on automatic selection for final edges." },
      { q: "What is a multiple clipping path?", a: "A multiple clipping path gives each part of a product its own path, so colours and parts can be edited separately later." },
    ],
  },
  {
    slug: "background-removal",
    name: "Background Removal",
    short: "Clean white, transparent or custom backgrounds for product photos.",
    answer:
      "Background removal isolates the subject of a photo and replaces the original backdrop with white, transparent or any custom background. Photo Fixion removes backgrounds by hand, which keeps product edges accurate and makes images ready for online stores and marketplaces.",
    includes: ["Pure white or transparent background", "Custom colour or scene background", "Edge refinement", "Consistent canvas size and margins"],
    bestFor: ["Online stores", "Marketplace main images", "Advertising creatives"],
    faqs: [
      { q: "Which background should I choose for my online store?", a: "Most marketplaces ask for a pure white background on main images. Transparent PNG files are useful when you place the product on different designs." },
      { q: "Can you handle bulk orders?", a: "Yes. Our team of 50+ editors works in shifts around the clock, so large batches are split and edited in parallel." },
    ],
  },
  {
    slug: "image-masking",
    name: "Image Masking",
    short: "Precise masks for hair, fur, fabric and semi-transparent objects.",
    answer:
      "Image masking is the technique used to cut out subjects with soft or complex edges, such as hair, fur, feathers, lace and glass, where a clipping path would look too hard. Photo Fixion uses layer and alpha channel masking to keep fine detail while changing the background.",
    includes: ["Layer masking", "Hair and fur masking", "Alpha channel masking", "Transparent object masking"],
    bestFor: ["Model photography", "Fur and fabric products", "Glass and translucent items"],
    faqs: [
      { q: "When do I need masking instead of a clipping path?", a: "Choose masking when the edge is soft or detailed, for example hair, fur or sheer fabric. Choose a clipping path for products with firm, clear edges." },
      { q: "Will fine hair strands be kept?", a: "Yes. Masking is done at high zoom so individual strands and soft edges are preserved." },
    ],
  },
  {
    slug: "ghost-mannequin",
    name: "Ghost Mannequin",
    short: "The invisible mannequin effect that shows the fit of apparel.",
    answer:
      "The ghost mannequin effect, also called neck joint or invisible mannequin, removes the mannequin from apparel photos and joins the front and inner shots so the garment appears to be worn by an invisible body. It shows fit and shape without the cost of a model.",
    includes: ["Neck joint", "Sleeve and bottom joint", "Wrinkle and dust clean-up", "Symmetry correction"],
    bestFor: ["Fashion and apparel stores", "Lookbooks", "Marketplace apparel listings"],
    faqs: [
      { q: "Which photos do you need for a ghost mannequin edit?", a: "Send a front shot on the mannequin and an inside shot of the neck or back label. A back shot helps when you also need the reverse view." },
      { q: "Can you fix wrinkles at the same time?", a: "Yes. Wrinkle, dust and lint clean-up can be added to any ghost mannequin order." },
    ],
  },
  {
    slug: "photo-retouching",
    name: "Photo Retouching",
    short: "Natural clean-up for products, portraits and high-end campaigns.",
    answer:
      "Photo retouching improves an image by removing dust, scratches, blemishes and distractions and by balancing light and tone. Photo Fixion offers product, portrait and high-end retouching that keeps texture natural, so the final image looks polished without looking edited.",
    includes: ["Dust, scratch and spot removal", "Skin and portrait retouching", "High-end and jewellery retouching", "Image manipulation"],
    bestFor: ["Jewellery and cosmetics", "Portrait and fashion photographers", "Advertising agencies"],
    faqs: [
      { q: "Will retouched photos still look natural?", a: "Yes. We keep skin and material texture and avoid over-smoothing unless you ask for a stylised finish." },
      { q: "Can I send a reference style?", a: "Yes. Send a sample image or style guide and the same look is applied across the whole batch." },
    ],
  },
  {
    slug: "color-correction",
    name: "Color Correction",
    short: "Accurate, consistent colour and fast colour variants.",
    answer:
      "Colour correction adjusts white balance, exposure, contrast and saturation so a product looks the same on screen as it does in real life. Photo Fixion also creates colour variants from a single photo, which saves the cost of shooting every colour of a product.",
    includes: ["White balance and exposure", "Colour matching to a sample", "Colour change for variants", "Brightness and contrast"],
    bestFor: ["Apparel with many colourways", "Brands with strict colour standards", "Car and vehicle images"],
    faqs: [
      { q: "Can you create colour variants from one photo?", a: "Yes. Send one photo and the colour references, and we produce each variant with realistic shading." },
      { q: "How do you match my brand colours?", a: "Share a colour code or a reference photo of the product. Editors match to that reference on calibrated screens." },
    ],
  },
  {
    slug: "shadow-creation",
    name: "Shadow Creation",
    short: "Drop, natural, cast and reflection shadows that add depth.",
    answer:
      "Shadow creation adds a realistic shadow under or behind a product after the background is removed. Photo Fixion creates drop shadows, natural shadows, cast shadows and reflections so products look grounded instead of floating on a white background.",
    includes: ["Drop shadow", "Natural and cast shadow", "Reflection shadow", "Original shadow retention"],
    bestFor: ["Furniture and footwear", "Cosmetics and glassware", "Premium product pages"],
    faqs: [
      { q: "Which shadow is best for product photos?", a: "A soft natural shadow suits most products. Reflection shadows work well for glossy items such as cosmetics, glass and jewellery." },
      { q: "Can you keep the original shadow?", a: "Yes. If the original shadow looks good, we isolate and keep it while replacing the background." },
    ],
  },
  {
    slug: "product-photo-editing",
    name: "Product Photo Editing",
    short: "Complete, store-ready editing for whole product catalogues.",
    answer:
      "Product photo editing combines background removal, retouching, colour correction, shadows and resizing into one workflow that makes images ready for an online store. Photo Fixion edits whole catalogues to a single style guide so every product page looks consistent.",
    includes: ["Background, shadow and retouching in one order", "Crop, resize and margin alignment", "Marketplace-specific formats", "Consistent style across a catalogue"],
    bestFor: ["E-commerce catalogues", "Marketplace sellers", "Studios with regular volume"],
    faqs: [
      { q: "Can you follow marketplace image rules?", a: "Yes. Tell us where the images will be listed and we deliver the size, background and margins that platform asks for." },
      { q: "Do you offer bulk discounts?", a: "Yes. Discounts are available on bulk volume. Ask for a quote with your monthly image count." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
