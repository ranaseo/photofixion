export type Service = {
  slug: string;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  /** Direct, quotable definition (40-60 words). Shown first on the page for answer engines. */
  answer: string;
  method: string;
  formats: string;
  includes: string[];
  bestFor: string[];
  types: { name: string; desc: string }[];
  steps: { name: string; text: string }[];
  versus: { q: string; a: string };
  priceFactors: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "clipping-path",
    name: "Clipping Path",
    short: "Hand-drawn paths that cut products cleanly from any background.",
    metaTitle: "Clipping Path Service | Hand-Drawn, 24h Delivery",
    metaDescription: "Hand-drawn clipping path service for e-commerce product photos. Single and multiple paths, bulk-ready, delivered in 24 hours with 12h and 6h express.",
    answer:
      "A clipping path is a hand-drawn vector outline around a product that separates it from its background. Photo Fixion editors draw every path manually with the Photoshop pen tool, so edges stay sharp on hard-edged products such as shoes, bottles, electronics and furniture.",
    method: "Photoshop pen tool, drawn by hand at high zoom",
    formats: "PSD with saved path, PNG, JPG, TIFF",
    includes: ["Hand-drawn pen tool paths", "Single and multiple paths", "Transparent, white or custom background", "PSD, PNG, JPG or TIFF delivery"],
    bestFor: ["Hard-edged products", "Marketplace listings", "Catalogues and print"],
    types: [
      { name: "Basic clipping path", desc: "One closed path around a simple shape with few curves, such as a box, phone, plate or book." },
      { name: "Compound clipping path", desc: "Several paths for products with holes or gaps, such as handles, chains, chairs and bracelets." },
      { name: "Complex clipping path", desc: "Detailed paths with many curves and anchor points, for bicycles, jewellery sets, furniture groups and nets." },
      { name: "Multiple clipping path", desc: "A separate path for each part or colour of a product, so every area can be recoloured or retouched on its own." },
    ],
    steps: [
      { name: "Send product photos", text: "Upload your images and tell us the background and file format you need." },
      { name: "Path is drawn by hand", text: "An editor zooms in and traces the product edge with the pen tool, placing anchor points only where the shape changes." },
      { name: "Background is replaced", text: "The path is turned into a selection and the product is placed on a white, transparent or custom background." },
      { name: "Quality check and delivery", text: "A second editor checks every edge before the files are delivered within 24 hours." },
    ],
    versus: {
      q: "Clipping path or image masking: which one do I need?",
      a: "Use a clipping path for products with firm, clearly defined edges, because a vector path gives the sharpest outline. Use image masking for soft or fine edges such as hair, fur and sheer fabric, where a hard path would cut detail away. Many apparel and model photos need both in the same image.",
    },
    priceFactors: ["Complexity of the shape and number of curves", "Number of holes and inner paths", "Number of separate paths per image", "Order volume and delivery speed"],
    faqs: [
      { q: "Is the clipping path drawn by hand?", a: "Yes. Every path is drawn manually with the pen tool by a trained editor. We do not rely on automatic selection for final edges." },
      { q: "What is a multiple clipping path?", a: "A multiple clipping path gives each part of a product its own path, so colours and parts can be edited separately later." },
      { q: "Do you keep the path inside the file?", a: "Yes. On request we deliver a PSD or TIFF with the path saved, so your designer can reuse it." },
      { q: "How fast can you deliver clipping paths?", a: "Standard delivery is 24 hours. Express delivery is available in 12 hours or 6 hours for urgent orders." },
      { q: "Can you handle thousands of images?", a: "Yes. A team of 50+ editors works in shifts, so large batches are split and edited in parallel." },
    ],
    related: ["background-removal", "image-masking", "shadow-creation", "product-photo-editing"],
  },
  {
    slug: "background-removal",
    name: "Background Removal",
    short: "Clean white, transparent or custom backgrounds for product photos.",
    metaTitle: "Background Removal Service | White & Transparent, 24h",
    metaDescription: "Professional background removal service for product photos. Pure white, transparent or custom backgrounds, edited by hand and delivered in 24 hours.",
    answer:
      "Background removal isolates the subject of a photo and replaces the original backdrop with white, transparent or any custom background. Photo Fixion removes backgrounds by hand, which keeps product edges accurate and makes images ready for online stores and marketplaces.",
    method: "Hand-drawn paths and masks, chosen per image",
    formats: "PNG (transparent), JPG (white), PSD, TIFF",
    includes: ["Pure white or transparent background", "Custom colour or scene background", "Edge refinement", "Consistent canvas size and margins"],
    bestFor: ["Online stores", "Marketplace main images", "Advertising creatives"],
    types: [
      { name: "White background", desc: "Pure white (RGB 255, 255, 255) backgrounds, the standard for marketplace main images." },
      { name: "Transparent background", desc: "PNG files with no background, ready to place on any design, banner or colour." },
      { name: "Custom background", desc: "A brand colour, gradient or lifestyle scene added behind the product." },
      { name: "Background clean-up", desc: "The original backdrop is kept but creases, stains and uneven lighting are removed." },
    ],
    steps: [
      { name: "Send photos and background choice", text: "Upload your images and choose white, transparent or a custom background." },
      { name: "Subject is isolated", text: "Editors cut out the subject with a clipping path for hard edges or a mask for soft edges." },
      { name: "New background is applied", text: "The background is replaced and edges are refined so no halo or colour fringe remains." },
      { name: "Sizing, check and delivery", text: "Images are cropped to a consistent canvas, checked and delivered within 24 hours." },
    ],
    versus: {
      q: "Is manual background removal better than automatic tools?",
      a: "Automatic tools are fast for simple subjects, but they often leave rough edges, missing parts and halos on products with holes, reflections or low contrast. Manual background removal takes longer and gives clean, consistent edges across a whole catalogue, which is what marketplaces and print require.",
    },
    priceFactors: ["Edge complexity of the subject", "Hair, fur or transparent areas", "Type of new background", "Order volume and delivery speed"],
    faqs: [
      { q: "Which background should I choose for my online store?", a: "Most marketplaces ask for a pure white background on main images. Transparent PNG files are useful when you place the product on different designs." },
      { q: "Can you handle bulk orders?", a: "Yes. Our team of 50+ editors works in shifts around the clock, so large batches are split and edited in parallel." },
      { q: "Will there be a white halo around the product?", a: "No. Edges are refined by hand so no halo or colour fringe from the old background remains." },
      { q: "Can you keep the natural shadow?", a: "Yes. The original shadow can be kept, or a new natural shadow can be created after the background is removed." },
      { q: "Which file format will I receive?", a: "PNG for transparent backgrounds and JPG for white backgrounds are standard. PSD and TIFF files are available on request." },
    ],
    related: ["clipping-path", "image-masking", "shadow-creation", "product-photo-editing"],
  },
  {
    slug: "image-masking",
    name: "Image Masking",
    short: "Precise masks for hair, fur, fabric and semi-transparent objects.",
    metaTitle: "Image Masking Service | Hair, Fur & Transparent Objects",
    metaDescription: "Image masking service for hair, fur, lace, glass and other soft or transparent edges. Layer and alpha channel masking by hand, delivered in 24 hours.",
    answer:
      "Image masking is the technique used to cut out subjects with soft or complex edges, such as hair, fur, feathers, lace and glass, where a clipping path would look too hard. Photo Fixion uses layer and alpha channel masking to keep fine detail while changing the background.",
    method: "Layer masks, alpha channels and refine-edge work by hand",
    formats: "PSD with layer mask, PNG, TIFF, JPG",
    includes: ["Layer masking", "Hair and fur masking", "Alpha channel masking", "Transparent object masking"],
    bestFor: ["Model photography", "Fur and fabric products", "Glass and translucent items"],
    types: [
      { name: "Layer masking", desc: "A non-destructive mask that hides the background while keeping the original pixels editable." },
      { name: "Hair and fur masking", desc: "Fine strands of hair, fur and feathers are separated from the background one area at a time." },
      { name: "Alpha channel masking", desc: "The mask is saved as a channel so the selection can be reused for later edits." },
      { name: "Transparency masking", desc: "Glass, water, smoke and sheer fabric keep their see-through look on a new background." },
    ],
    steps: [
      { name: "Send your images", text: "Upload model or product photos and tell us the new background you want." },
      { name: "Rough selection", text: "Editors separate the solid parts of the subject first, often with a clipping path." },
      { name: "Fine edge masking", text: "Hair, fur and transparent areas are masked at high zoom using channels and hand-painted masks." },
      { name: "Check on light and dark", text: "The cut-out is tested on light and dark backgrounds, then delivered within 24 hours." },
    ],
    versus: {
      q: "When do I need image masking instead of a clipping path?",
      a: "Choose image masking when the edge is soft, fuzzy or see-through: hair, fur, feathers, lace, smoke or glass. Choose a clipping path when the product has a firm, clear outline. A model photo often uses a path for the body and clothing and a mask for the hair.",
    },
    priceFactors: ["Amount of hair, fur or fine detail", "Contrast between subject and background", "Transparent or semi-transparent areas", "Order volume and delivery speed"],
    faqs: [
      { q: "When do I need masking instead of a clipping path?", a: "Choose masking when the edge is soft or detailed, for example hair, fur or sheer fabric. Choose a clipping path for products with firm, clear edges." },
      { q: "Will fine hair strands be kept?", a: "Yes. Masking is done at high zoom so individual strands and soft edges are preserved." },
      { q: "Can you mask glass and transparent products?", a: "Yes. Transparency masking keeps the see-through look of glass, bottles and sheer fabric on the new background." },
      { q: "Does a busy background make masking harder?", a: "Yes. Low contrast or a busy background takes more manual work. A plain, evenly lit backdrop gives the cleanest result." },
      { q: "Can I get the mask as a layer?", a: "Yes. PSD files with the layer mask or alpha channel are available, so you can adjust the cut-out later." },
    ],
    related: ["clipping-path", "background-removal", "photo-retouching", "ghost-mannequin"],
  },
  {
    slug: "ghost-mannequin",
    name: "Ghost Mannequin",
    short: "The invisible mannequin effect that shows the fit of apparel.",
    metaTitle: "Ghost Mannequin Service | Invisible Mannequin & Neck Joint",
    metaDescription: "Ghost mannequin (invisible mannequin, neck joint) editing for apparel photos. Neck, sleeve and bottom joints with wrinkle clean-up, delivered in 24 hours.",
    answer:
      "The ghost mannequin effect, also called neck joint or invisible mannequin, removes the mannequin from apparel photos and joins the front and inner shots so the garment appears to be worn by an invisible body. It shows fit and shape without the cost of a model.",
    method: "Mannequin removal and compositing of front and inner shots",
    formats: "JPG, PNG, PSD with layers, TIFF",
    includes: ["Neck joint", "Sleeve and bottom joint", "Wrinkle and dust clean-up", "Symmetry correction"],
    bestFor: ["Fashion and apparel stores", "Lookbooks", "Marketplace apparel listings"],
    types: [
      { name: "Neck joint", desc: "The inner neck or back label area is joined to the front shot after the mannequin is removed." },
      { name: "Sleeve joint", desc: "The inside of the sleeve opening is rebuilt so cuffs look hollow and natural." },
      { name: "Bottom joint", desc: "The inner hem of shirts, dresses and jackets is added to show depth at the bottom." },
      { name: "360-degree and back view", desc: "Front, back and side shots are edited to one shape for spin sets and back views." },
    ],
    steps: [
      { name: "Send front and inner shots", text: "Upload a front shot on the mannequin and an inside shot of the neck or back label." },
      { name: "Mannequin is removed", text: "Editors cut out the garment and remove every visible part of the mannequin." },
      { name: "Shots are joined", text: "The inner shot is placed behind the neck, sleeve or hem and blended to match light and colour." },
      { name: "Shape and clean-up", text: "Symmetry is corrected, wrinkles and dust are cleaned and files are delivered within 24 hours." },
    ],
    versus: {
      q: "Ghost mannequin or model photography: which is better for an online store?",
      a: "Ghost mannequin photos cost less than model shoots, keep every product consistent and focus attention on the garment. Model photos show styling and movement better. Many apparel stores use ghost mannequin images for the main product gallery and add a few model photos for lifestyle context.",
    },
    priceFactors: ["Number of joints per garment (neck, sleeve, bottom)", "Garment type and fabric", "Amount of wrinkle and dust clean-up", "Order volume and delivery speed"],
    faqs: [
      { q: "Which photos do you need for a ghost mannequin edit?", a: "Send a front shot on the mannequin and an inside shot of the neck or back label. A back shot helps when you also need the reverse view." },
      { q: "Can you fix wrinkles at the same time?", a: "Yes. Wrinkle, dust and lint clean-up can be added to any ghost mannequin order." },
      { q: "What if I only have the front shot?", a: "A neck joint can sometimes be rebuilt from the front shot alone, but an inner shot gives a more realistic result." },
      { q: "Is ghost mannequin the same as neck joint?", a: "Neck joint is the most common part of the ghost mannequin effect. The full effect can also include sleeve and bottom joints." },
      { q: "Can you make all garments the same shape and size?", a: "Yes. Garments are aligned to one template so every product in a category sits at the same size and position." },
    ],
    related: ["clipping-path", "photo-retouching", "color-correction", "product-photo-editing"],
  },
  {
    slug: "photo-retouching",
    name: "Photo Retouching",
    short: "Natural clean-up for products, portraits and high-end campaigns.",
    metaTitle: "Photo Retouching Service | Product, Portrait & High-End",
    metaDescription: "Photo retouching service for products, jewellery, portraits and campaigns. Dust, scratch and blemish removal with natural texture, delivered in 24 hours.",
    answer:
      "Photo retouching improves an image by removing dust, scratches, blemishes and distractions and by balancing light and tone. Photo Fixion offers product, portrait and high-end retouching that keeps texture natural, so the final image looks polished without looking edited.",
    method: "Healing, cloning, dodge and burn and frequency separation by hand",
    formats: "JPG, PSD with layers, TIFF, PNG",
    includes: ["Dust, scratch and spot removal", "Skin and portrait retouching", "High-end and jewellery retouching", "Image manipulation"],
    bestFor: ["Jewellery and cosmetics", "Portrait and fashion photographers", "Advertising agencies"],
    types: [
      { name: "Product retouching", desc: "Dust, scratches, fingerprints and label flaws are removed and surfaces are evened out." },
      { name: "Jewellery retouching", desc: "Metal is polished, stones are brightened and unwanted reflections are cleaned up." },
      { name: "Portrait retouching", desc: "Blemishes, stray hairs and uneven skin tone are corrected while skin texture is kept." },
      { name: "High-end retouching", desc: "Detailed dodge and burn and tonal work for beauty, fashion and advertising campaigns." },
    ],
    steps: [
      { name: "Send images and a reference", text: "Upload your photos with a sample image or notes that describe the finish you want." },
      { name: "Clean-up", text: "Editors remove dust, spots, scratches and distractions with healing and cloning tools." },
      { name: "Tone and texture", text: "Light, contrast and colour are balanced while skin or material texture is preserved." },
      { name: "Review and revise", text: "Files are checked against your reference, delivered within 24 hours and revised if needed." },
    ],
    versus: {
      q: "What is the difference between basic and high-end retouching?",
      a: "Basic retouching removes obvious flaws such as dust, spots and scratches and balances exposure. High-end retouching works at pixel level with dodge and burn and tonal separation to perfect skin, fabric and surfaces for large-format advertising. Product catalogues usually need basic retouching; beauty and campaign images need high-end work.",
    },
    priceFactors: ["Level of retouching (basic or high-end)", "Number and size of flaws", "Type of subject: product, jewellery or portrait", "Order volume and delivery speed"],
    faqs: [
      { q: "Will retouched photos still look natural?", a: "Yes. We keep skin and material texture and avoid over-smoothing unless you ask for a stylised finish." },
      { q: "Can I send a reference style?", a: "Yes. Send a sample image or style guide and the same look is applied across the whole batch." },
      { q: "Do you retouch jewellery?", a: "Yes. Jewellery retouching includes metal polishing, stone enhancement and removal of dust and unwanted reflections." },
      { q: "Can you remove objects from a photo?", a: "Yes. Unwanted objects, props, stands and reflections can be removed and the area rebuilt." },
      { q: "Do you provide layered files?", a: "Yes. Layered PSD files are available on request so your team can adjust the retouching." },
    ],
    related: ["color-correction", "image-masking", "background-removal", "product-photo-editing"],
  },
  {
    slug: "color-correction",
    name: "Color Correction",
    short: "Accurate, consistent colour and fast colour variants.",
    metaTitle: "Color Correction Service | Colour Matching & Variants",
    metaDescription: "Colour correction service for product photos. White balance, exposure, colour matching and colour variants from one photo, delivered in 24 hours.",
    answer:
      "Colour correction adjusts white balance, exposure, contrast and saturation so a product looks the same on screen as it does in real life. Photo Fixion also creates colour variants from a single photo, which saves the cost of shooting every colour of a product.",
    method: "Curves, levels and selective colour adjustments matched to a reference",
    formats: "JPG, PNG, PSD with adjustment layers, TIFF",
    includes: ["White balance and exposure", "Colour matching to a sample", "Colour change for variants", "Brightness and contrast"],
    bestFor: ["Apparel with many colourways", "Brands with strict colour standards", "Car and vehicle images"],
    types: [
      { name: "White balance and exposure", desc: "Colour casts are removed and brightness is corrected so whites are neutral and detail is visible." },
      { name: "Colour matching", desc: "The product colour is matched to a colour code or a reference photo of the real item." },
      { name: "Colour change", desc: "New colour variants are created from one photo, keeping folds, shadows and highlights realistic." },
      { name: "Batch consistency", desc: "A whole shoot is balanced to one look so products match across category pages." },
    ],
    steps: [
      { name: "Send photos and colour reference", text: "Upload your images with colour codes or a reference photo of the real product." },
      { name: "Neutral balance", text: "Editors correct white balance and exposure so the image has no colour cast." },
      { name: "Match or change colour", text: "The product colour is matched to the reference, or new variants are created with selective adjustments." },
      { name: "Consistency check", text: "The batch is compared side by side, then delivered within 24 hours." },
    ],
    versus: {
      q: "What is the difference between colour correction and colour change?",
      a: "Colour correction makes the photo match the real product by fixing white balance, exposure and saturation. Colour change turns the product into a different colour, for example showing a red shirt in blue and green from one photo. Online stores often need both: correction first, then variants.",
    },
    priceFactors: ["Number of colour variants per image", "Complexity of the product surface", "Need for exact colour matching", "Order volume and delivery speed"],
    faqs: [
      { q: "Can you create colour variants from one photo?", a: "Yes. Send one photo and the colour references, and we produce each variant with realistic shading." },
      { q: "How do you match my brand colours?", a: "Share a colour code or a reference photo of the product. Editors match to that reference on calibrated screens." },
      { q: "Can you fix photos shot in mixed lighting?", a: "Yes. Colour casts from mixed or warm lighting are neutralised so whites and product colours look correct." },
      { q: "Do you edit car and vehicle photos?", a: "Yes. Car image editing includes colour correction, brightness and contrast, and background removal." },
      { q: "Will colours look the same on every screen?", a: "Screens differ, so no edit can guarantee identical colour everywhere. Files are delivered in sRGB, the standard for web display." },
    ],
    related: ["photo-retouching", "ghost-mannequin", "product-photo-editing", "background-removal"],
  },
  {
    slug: "shadow-creation",
    name: "Shadow Creation",
    short: "Drop, natural, cast and reflection shadows that add depth.",
    metaTitle: "Shadow Creation Service | Drop, Natural & Reflection",
    metaDescription: "Shadow creation service for product photos: drop shadow, natural shadow, cast shadow and reflection, added by hand and delivered in 24 hours.",
    answer:
      "Shadow creation adds a realistic shadow under or behind a product after the background is removed. Photo Fixion creates drop shadows, natural shadows, cast shadows and reflections so products look grounded instead of floating on a white background.",
    method: "Hand-painted and transformed shadow layers matched to the light direction",
    formats: "JPG, PNG with transparent shadow, PSD with shadow layer",
    includes: ["Drop shadow", "Natural and cast shadow", "Reflection shadow", "Original shadow retention"],
    bestFor: ["Furniture and footwear", "Cosmetics and glassware", "Premium product pages"],
    types: [
      { name: "Drop shadow", desc: "A soft shadow directly under the product that lifts it gently from a white background." },
      { name: "Natural shadow", desc: "A shadow that follows the product shape and light direction, as if shot in a studio." },
      { name: "Cast shadow", desc: "A longer, directional shadow that falls away from the product for a dramatic look." },
      { name: "Reflection shadow", desc: "A mirror-like reflection under glossy products such as cosmetics, glass and jewellery." },
    ],
    steps: [
      { name: "Send images and shadow style", text: "Upload your photos and choose a shadow type, or send a reference image." },
      { name: "Product is isolated", text: "The product is cut out and placed on the new background." },
      { name: "Shadow is built", text: "Editors create the shadow on its own layer, matching the light direction and softness of the photo." },
      { name: "Blend, check and deliver", text: "Opacity and edges are adjusted for realism and files are delivered within 24 hours." },
    ],
    versus: {
      q: "Drop shadow or natural shadow: which is better for product photos?",
      a: "A natural shadow suits most products because it follows the real shape and light, which looks the most believable. A drop shadow is simpler and works well for flat or small items in large catalogues. Reflection shadows are best for glossy products on premium pages.",
    },
    priceFactors: ["Type of shadow", "Shape and height of the product", "Whether the original shadow can be kept", "Order volume and delivery speed"],
    faqs: [
      { q: "Which shadow is best for product photos?", a: "A soft natural shadow suits most products. Reflection shadows work well for glossy items such as cosmetics, glass and jewellery." },
      { q: "Can you keep the original shadow?", a: "Yes. If the original shadow looks good, we isolate and keep it while replacing the background." },
      { q: "Can I get the shadow on a transparent background?", a: "Yes. PNG files with a transparent shadow or PSD files with a separate shadow layer are available." },
      { q: "Do marketplaces allow shadows on main images?", a: "Rules differ by marketplace. Tell us where you will list the images and we follow that platform's image requirements." },
      { q: "Is shadow creation ordered with background removal?", a: "Usually, yes. A shadow is added after the background is removed so the product does not look like it is floating." },
    ],
    related: ["background-removal", "clipping-path", "product-photo-editing", "photo-retouching"],
  },
  {
    slug: "product-photo-editing",
    name: "Product Photo Editing",
    short: "Complete, store-ready editing for whole product catalogues.",
    metaTitle: "Product Photo Editing Service for E-commerce | 24h",
    metaDescription: "E-commerce product photo editing service: background removal, retouching, colour correction, shadows and resizing in one order, delivered in 24 hours.",
    answer:
      "Product photo editing combines background removal, retouching, colour correction, shadows and resizing into one workflow that makes images ready for an online store. Photo Fixion edits whole catalogues to a single style guide so every product page looks consistent.",
    method: "Combined workflow: cut-out, clean-up, colour, shadow and resize",
    formats: "JPG, PNG, WebP on request, PSD, TIFF",
    includes: ["Background, shadow and retouching in one order", "Crop, resize and margin alignment", "Marketplace-specific formats", "Consistent style across a catalogue"],
    bestFor: ["E-commerce catalogues", "Marketplace sellers", "Studios with regular volume"],
    types: [
      { name: "Marketplace-ready editing", desc: "Images are prepared to the size, background and margin rules of the platform you sell on." },
      { name: "Catalogue editing", desc: "Hundreds or thousands of products are edited to one style guide for a consistent store." },
      { name: "Apparel editing", desc: "Ghost mannequin, wrinkle clean-up and colour variants for clothing and accessories." },
      { name: "Crop, resize and align", desc: "Products are centred with equal margins and exported in every size your store needs." },
    ],
    steps: [
      { name: "Share images and style guide", text: "Upload your photos with your style guide or the marketplace you sell on." },
      { name: "Cut-out and clean-up", text: "Backgrounds are removed and dust, scratches and flaws are retouched." },
      { name: "Colour, shadow and alignment", text: "Colour is corrected, shadows are added and every product is aligned to the same margins." },
      { name: "Export and deliver", text: "Images are exported in the sizes and formats you need and delivered within 24 hours." },
    ],
    versus: {
      q: "Should I edit product photos in-house or outsource them?",
      a: "In-house editing gives direct control and suits small volumes. Outsourcing suits regular or large volumes because a dedicated team works in parallel, delivers overnight and costs less per image than hiring editors. Many stores keep creative direction in-house and outsource the repetitive editing.",
    },
    priceFactors: ["Which services are combined in the order", "Complexity of the products", "Number of export sizes and formats", "Monthly volume and delivery speed"],
    faqs: [
      { q: "Can you follow marketplace image rules?", a: "Yes. Tell us where the images will be listed and we deliver the size, background and margins that platform asks for." },
      { q: "Do you offer bulk discounts?", a: "Yes. Discounts are available on bulk volume. Ask for a quote with your monthly image count." },
      { q: "Can you work to my style guide?", a: "Yes. Send your style guide or sample images and every product is edited to match it." },
      { q: "How do regular clients send files?", a: "Regular clients receive personal FTP access. Cloud transfer links are also accepted." },
      { q: "Can you deliver several sizes of each image?", a: "Yes. Each image can be exported in multiple sizes and formats for your store, marketplaces and ads." },
    ],
    related: ["background-removal", "photo-retouching", "color-correction", "shadow-creation"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
