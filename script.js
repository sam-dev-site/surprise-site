// ==============================
// 0) Settings
// ==============================

// For testing now:
const WEEK1_START_DATE = "2026-03-16"; // Monday
// When you want the "real" restart, change to:
// const WEEK1_START_DATE = "2026-03-16";


const ALL_PROMPTS = [
  {
    id: "wk01-hummingbirds",
    theme: "Hummingbirds",
    title: "Tiny & Electric: Hummingbird Reverie",
    brief:
      "This week, we’re celebrating the smallest blur in the garden. Design a repeating pattern inspired by hummingbirds - those jewel-toned, midair acrobats that feel more like sparks than birds. Think motion, shimmer, and suspended stillness. Your design might capture them hovering near trumpet flowers, or abstract the idea of speed into rhythmic, wing-like shapes. Let it feel light, luminous, and just a little magical.",
    palette: ["#006A5B", "#9B111E", "#1F2A44", "#F6F1E8", "#C46A2D"],
    artStyle: "botanical",
    tips: [
      "Emphasize motion or hover",
      "Use negative space to create lift",
      "Let at least one color feel electric"
    ],
    category: "nature",
    visualCategory: "birds-botanical"
  },
  {
    id: "wk02-camping",
    theme: "Retro camping",
    title: "Midcentury Campout",
    brief:
      "Pack the thermos and roll out the canvas. Design a repeating pattern inspired by vintage camping trips, think: tin mugs, striped folding chairs, lantern glow, and optimistic outdoor simplicity. Think graphic shapes, slightly sun-faded color, and objects arranged with cheerful order. Let it feel nostalgic without being overly specific, like a memory that still smells faintly of campfire smoke.",
    palette: ["#1F3D2A", "#D39B2A", "#C85C3A", "#F3EBDD", "#203A5A"],
    artStyle: "geometry",
    tips: ["Use flat icon shapes", "Repeat a few key objects", "Keep the layout rhythmic"],
    category: "retro",
    visualCategory: "retro-all"
  },
  {
    id: "wk03-memory",
    theme: "Memory",
    title: "Soft Focus",
    brief:
      "What does memory look like when it repeats? Create a pattern inspired by layered recollections—slightly faded edges, overlapping shapes, and forms that feel almost-but-not-quite aligned. Consider blurring, transparency, and subtle shifts in tone. Let the design feel reflective and gentle rather than literal.",
    palette: ["#7EA7C7", "#D9A2A6", "#F5EFE6", "#A9BFA6", "#5B4A73"],
    artStyle: "ink",
    tips: ["Layer opacity", "Repeat with variation", "Avoid harsh contrast"],
    category: "abstract",
    visualCategory: "family-connection"
  },
  {
    id: "wk04-holiday-cats",
    theme: "Holiday cats",
    title: "Festive Felines",
    brief:
      "Imagine cats taking a holiday very seriously. Whether it’s party hats slightly askew, ornaments mid-swat, pumpkins commandeered, or garlands turned climbing equipment—design a pattern where cats are unquestionably the main event. Keep it playful and expressive, with tiny visual jokes hidden inside the repeat. A little mischief is encouraged.",
    palette: ["#2B2B2F", "#E1A72B", "#2D5B46", "#A83B53", "#F1C4CF"],
    artStyle: "folk",
    tips: ["Focus on expression", "Use small storytelling objects", "Keep it light and readable"],
    category: "playful",
    visualCategory: "playful-characters"
  },
  {
    id: "wk05-square-foot-garden",
    theme: "Square foot gardening",
    title: "The Measured Garden",
    brief:
      "Order meets abundance in the square foot garden. Design a repeating pattern where tidy grids frame tomatoes, lettuce, marigolds, and handwritten labels—but allow life to spill slightly beyond the lines. Balance structure with growth, precision with organic movement. Let it feel practical and joyful at the same time.",
    palette: ["#C24A3E", "#2F6B4B", "#5A3A2B", "#E2B23B", "#F5EFE6"],
    artStyle: "botanical",
    tips: ["Embrace the grid", "Mix scale within squares", "Leave breathing room"],
    category: "garden",
    visualCategory: "garden-all"
  },
  {
    id: "wk06-bluebirds",
    theme: "Bluebirds",
    title: "Bluebird Morning",
    brief:
      "There’s something quietly optimistic about a bluebird. Create a repeating pattern inspired by open skies, fence posts, and that early-morning stillness before the day begins. Keep spacing generous and silhouettes simple. Let light and air do most of the work.",
    palette: ["#83B5E5", "#D8C39A", "#1D2F5A", "#D9DEE6", "#CBB79D"],
    artStyle: "ink",
    tips: ["Keep spacing generous", "Use simple silhouettes", "Let light dominate"],
    category: "nature",
    visualCategory: "birds-botanical"
  },
  {
    id: "wk07-creative-process",
    theme: "Creative process",
    title: "Inside the Artist’s Head",
    brief:
      "Sketches layered over sketches. Arrows pointing nowhere. Notes half-erased and rewritten. Design a pattern that captures the rhythm of thinking—messy and structured all at once. Let repetition bring order to the chaos.",
    palette: ["#1B1B1F", "#B7A0D6", "#8A8A95", "#F2D15D", "#A6C7E5"],
    artStyle: "ink",
    tips: ["Show revision marks", "Balance chaos with structure", "Repeat motifs intentionally"],
    category: "art",
    visualCategory: "craft-all"
  },
  {
    id: "wk08-bike-retro",
    theme: "Bike touring",
    title: "Pedal & Polyester",
    brief:
      "Maps folded into back pockets, panniers packed just right, striped jerseys catching wind. Design a repeating pattern inspired by the freedom and geometry of bike touring. Lean into bold color combinations and directional forms. Let the layout suggest motion without feeling frantic.",
    palette: ["#FF3D8D", "#2C59D8", "#E9F04A", "#4A4D57", "#FFFFFF"],
    artStyle: "geometry",
    tips: ["Use diagonals for motion", "Lean into bold contrast", "Repeat directional shapes"],
    category: "travel",
    visualCategory: "retro-all"
  },
  {
    id: "wk09-motherhood",
    theme: "Motherhood",
    title: "Holding & Letting Go",
    brief:
      "Motherhood is both anchor and wind. Design a repeating pattern that explores protection, growth, steadiness, and gradual release. Use symbolic or narrative elements—paired forms, sheltering shapes, or gentle repetition. Let it feel strong rather than sentimental.",
    palette: ["#C77F6A", "#7FA8C9", "#F1E5D6", "#8FAE8B", "#D07C73"],
    artStyle: "folk",
    tips: ["Use rounded forms", "Balance softness with strength", "Keep symbolism subtle"],
    category: "family",
    visualCategory: "family-connection"
  },
  {
    id: "wk10-iowa-corn",
    theme: "Iowa",
    title: "Corn & Sky",
    brief:
      "Rows of corn stretching toward a horizon that feels bigger than the page. Design a repeating pattern inspired by wind moving through fields and the quiet pride of place. Use repetition to suggest rows and rhythm. Keep shapes simple but expansive.",
    palette: ["#E2B23B", "#3A67A3", "#5A3A2B", "#4F7B4F", "#F3F7FB"],
    artStyle: "geometry",
    tips: ["Use repetition for fields", "Avoid clutter", "Let the sky breathe"],
    category: "place",
    visualCategory: "landscape-place"
  },
  {
    id: "wk11-backyard-birder",
    theme: "Backyard birder",
    title: "The Feeder Chronicles",
    brief:
      "From seed scatter to morning chirps, the backyard feeder is its own quiet theater. Design a repeating pattern featuring cardinals, chickadees, blue jays, and the gentle geometry of feeder shapes and hanging lines. Let it feel observant and cozy, like someone who keeps a notebook by the kitchen window. Small moments of motion will bring it to life.",
    palette: ["#B33A3A", "#76A9D6", "#6A4A3B", "#8FAE8B", "#F1E5D6"],
    artStyle: "botanical",
    tips: ["Mix bird scale subtly", "Use feeder silhouettes as anchors", "Keep it airy"],
    category: "nature",
    visualCategory: "birds-botanical"
  },
  {
    id: "wk12-lake-life",
    theme: "Lake life",
    title: "Dock Days",
    brief:
      "Sun-warmed wood, rope knots coiled just so, and water that never quite sits still. Design a repeating pattern inspired by slow summer lake days—paddle splashes, dock ladders, and reflections bending gently. Keep spacing relaxed and textures soft. Let the rhythm feel unhurried.",
    palette: ["#2E6C8C", "#C6A57A", "#D07B6A", "#E6D7C3", "#223555"],
    artStyle: "ink",
    tips: ["Use gentle water lines", "Add rope curves", "Let the design breathe"],
    category: "water",
    visualCategory: "water-ripples"
  },
  {
    id: "wk13-sisterhood",
    theme: "Sisterhood",
    title: "Shared Stories",
    brief:
      "Sisterhood across decades has its own quiet symmetry. Design a repeating pattern built from paired or mirrored elements—objects that belong together even if they’re slightly different. Think familiarity, inside jokes, and shared history. Keep the tone calm and grounded.",
    palette: ["#8D7A6B", "#6B9DA3", "#7C3C4A", "#F0E6D7", "#2E3B4E"],
    artStyle: "folk",
    tips: ["Use repetition in twos", "Keep spacing calm", "Add subtle texture"],
    category: "family",
    visualCategory: "family-connection"
  },
  {
    id: "wk14-naturalist",
    theme: "Naturalist",
    title: "Field Guide",
    brief:
      "Scat samples, labeled insects, and careful observations from the trail. Design a repeating pattern inspired by the aesthetic of a well-loved field guide—educational but full of curiosity. Vary scale and add subtle label-like marks. Let white space help it feel intentional.",
    palette: ["#2F6B4B", "#6A4A3B", "#B9C2CC", "#D4A72C", "#F5EFE6"],
    artStyle: "botanical",
    tips: ["Vary scale", "Use label marks", "Leave white space"],
    category: "nature",
    visualCategory: "map-lines"
  },
  {
    id: "wk15-yarn",
    theme: "Yarn crafts",
    title: "Loops & Stitches",
    brief:
      "Knitting and crochet are repetition made visible. Design a pattern inspired by loops, skeins, stitched grids, and soft texture built layer by layer. Let the rhythm feel soothing and steady. Keep edges soft and structure subtle.",
    palette: ["#F1E5D6", "#8B2D4A", "#5F6A7A", "#6C7E4B", "#C7A1B2"],
    artStyle: "folk",
    tips: ["Emphasize rhythm", "Use soft edges", "Keep texture subtle"],
    category: "craft",
    visualCategory: "craft-all"
  },
  {
    id: "sp01-lake-camp-lifeguard",
    theme: "Summer camp",
    title: "Whistle on the Dock",
    brief:
      "A Midwestern summer camp lake in full swing—oak and maple trees casting shade across wooden docks and floating rope lines. Design a repeating pattern inspired by lifeguard chairs, rescue cans, sun-warmed planks, and water that never quite sits still. Let the composition feel steady but alert, like someone always scanning the horizon. Subtle ripple textures can carry the rhythm.",
    palette: ["#2E6C8C", "#4F7B4F", "#C5403A", "#6A4A3B", "#E6D7C3"],
    artStyle: "ink",
    tips: ["Use horizontal grounding lines", "Add subtle ripple texture", "Let one red element anchor"],
    category: "water",
    visualCategory: "water-ripples"
  },
  {
    id: "sp02-color-coded-curriculum",
    theme: "Homeschooling",
    title: "Color-Coded Curriculum",
    brief:
      "Design a pattern that honors beautifully organized creativity—labeled bins, neatly stacked workbooks, sharpened pencils, and folders arranged by color. Think crisp lines, tidy compartments, and supplies that always return to their rightful place. Let the layout feel intentional and intelligent, structured but still full of possibility.",
    palette: ["#2C59D8", "#E9F04A", "#F3F7FB", "#4A4D57", "#C24A3E"],
    artStyle: "geometry",
    tips: ["Use clear hierarchy", "Keep lines crisp", "Suggest order without stiffness"],
    category: "organization",
    visualCategory: "map-lines"
  },
  {
    id: "sp03-chaos-and-cuddles",
    theme: "Cat parent life",
    title: "Chaos & Cuddles",
    brief:
      "A pattern inspired by life with a mischievous but beloved cat. Think toppled plants, yarn that’s been ‘helped,’ dramatic sunbeam naps, and sudden zoomies that disrupt everything. Balance quiet, cozy moments with tiny bursts of chaos. Let curves and playful scale shifts carry the movement.",
    palette: ["#7A7670", "#E7C65B", "#B88AA6", "#F1E5D6", "#2B2B2F"],
    artStyle: "folk",
    tips: ["Add tiny mischief moments", "Balance calm areas with chaos", "Use curves for movement"],
    category: "playful",
    visualCategory: "playful-characters"
  },
  {
    id: "sp04-tin-roof-thunder",
    theme: "Weather",
    title: "Tin Roof Thunder",
    brief:
      "Midwestern thunderstorm energy captured in repeat—slanted rain, wind-bent trees, and lightning that cracks across the sky. Consider adding distant tornado spirals or rolling cloud formations for drama, but keep the composition controlled. Let diagonal motion drive the pattern. It should feel powerful but not overwhelming.",
    palette: ["#4D5562", "#3E5B7D", "#F3F7FB", "#223555", "#4F7B4F"],
    artStyle: "ink",
    tips: ["Emphasize diagonal motion", "Keep lightning minimal", "Use repetition for rhythm"],
    category: "weather",
    visualCategory: "weather-motion"
  },
  {
    id: "sp05-cookie-day",
    theme: "Baking",
    title: "Chocolate Chip, Oatmeal, & PB",
    brief:
      "Throwing it back to the best surprise that could greet you coming home after school. Chocolate chip and peanut butter cookies fresh from the oven—cooling racks, chocolate chips on the counter, mixing bowls mid-process. Design a repeating pattern that feels warm, practical, and loving. Let circular shapes anchor the layout and subtle crumb-like textures add realism. Cozy should dominate.",
    palette: ["#E7C65B", "#C49A6C", "#7B4A2D", "#F5EFE6", "#D2A46E"],
    artStyle: "folk",
    tips: ["Use circular repetition", "Add light texture", "Keep it warm"],
    category: "home",
    visualCategory: "home-all"
  },
  {
    id: "sp06-redwood-grove",
    theme: "Nature",
    title: "Cathedral of Trees",
    brief:
      "Towering redwoods stretching beyond the frame. Design a repeating pattern inspired by vertical trunks, filtered green light, and fern-covered forest floors. Play with scale so the trees feel monumental. Let the negative space feel hushed and intentional.",
    palette: ["#7A3E2D", "#2F6B4B", "#6C7E4B", "#D4A72C", "#2F251E"],
    artStyle: "botanical",
    tips: ["Emphasize vertical rhythm", "Use scale variation", "Keep negative space intentional"],
    category: "nature",
    visualCategory: "forest-organic"
  },
  {
    id: "sp07-mi-river-kayak",
    theme: "Paddling",
    title: "Bend in the Current",
    brief:
      "Southwest Michigan river kayaking—gentle bends, sandy banks, overhanging trees, and paddle dips breaking reflections. Design a repeating pattern built from flowing curves and quiet movement. Let the spacing feel breathable and unhurried. The rhythm should feel steady, not rushed.",
    palette: ["#2E6C8C", "#E6D7C3", "#4F7B4F", "#6A4A3B", "#B9C2CC"],
    artStyle: "ink",
    tips: ["Use flowing curves", "Keep spacing breathable", "Suggest movement without speed"],
    category: "water",
    visualCategory: "water-ripples"
  },
  {
    id: "sp08-analog-tech",
    theme: "Old tech",
    title: "Clicks & Signals",
    brief:
      "Analog charm in repeat—typewriter keys, Nokia snake game, vinyl records, cassettes, tangled cords. Design a pattern that celebrates tactile buttons and mechanical sound. Use bold shapes and satisfying symmetry. Let it feel nostalgic but graphic.",
    palette: ["#2B2B2F", "#F5EFE6", "#4D7C84", "#C5403A", "#B9C2CC"],
    artStyle: "geometry",
    tips: ["Use bold icon shapes", "Repeat circles/rectangles", "Avoid overcrowding"],
    category: "retro",
    visualCategory: "retro-all"
  },
  {
    id: "sp09-pressed-flowers",
    theme: "Botanicals",
    title: "Between the Pages",
    brief:
      "Pressed flowers tucked between book pages—flattened petals, thin stems, and faint margin notes. Design a repeating pattern that feels archival and delicate. Let layers overlap gently. Keep shadows light and edges soft.",
    palette: ["#8FAE8B", "#F0E6D7", "#C7A1B2", "#2F6B4B", "#2E3B4E"],
    artStyle: "botanical",
    tips: ["Keep stems fine", "Layer gently", "Avoid heavy shadows"],
    category: "nature",
    visualCategory: "map-lines"
  },
  {
    id: "sp10-sewing-notions",
    theme: "Sewing",
    title: "Pin Cushions & Patterns",
    brief:
      "Remember when you turned Sam’s favorite fabrics into a quilt? This design is all about sewing – Singer machines, pin cushions, thread spools, pattern pieces, and dashed stitch lines guiding the eye. Design a repeat that feels methodical yet creative. Let paper shapes layer softly over one another. Keep the composition tidy but warm.",
    palette: ["#C24A3E", "#F3F7FB", "#3A67A3", "#6A4A3B", "#8A8A95"],
    artStyle: "geometry",
    tips: ["Use dashed lines", "Layer paper shapes", "Keep it airy"],
    category: "craft",
    visualCategory: "craft-all"
  },
  {
    id: "sp11-rain-rhythm",
    theme: "Weather",
    title: "Rain Rhythm",
    brief:
      "A calmer study of rainfall—diagonal streaks, expanding ripple rings, and repetition that feels steady like background music. Design a pattern driven by tempo rather than the dramatics of a storm. Let spacing remain even and intentional. Avoid literal cloud illustrations.",
    palette: ["#5F6A7A", "#83B5E5", "#D9DEE6", "#223555", "#F3F7FB"],
    artStyle: "ink",
    tips: ["Keep spacing even", "Use repetition", "Avoid literal clouds"],
    category: "weather",
    visualCategory: "weather-motion"
  },
  {
    id: "sp12-moss-mycelium",
    theme: "Forest floor",
    title: "Moss & Mycelium",
    brief:
      "Underground networks and quiet forest-floor ecosystems. Design a pattern inspired by moss patches, delicate mushroom caps, and branching mycelium threads. Let the layering feel organic and slightly unpredictable. Avoid rigid symmetry.",
    palette: ["#1F3D2A", "#6C7E4B", "#6A4A3B", "#F0E6D7", "#8D7A6B"],
    artStyle: "botanical",
    tips: ["Lean asymmetric", "Use layering", "Avoid symmetry"],
    category: "nature",
    visualCategory: "forest-organic"
  },
  {
    id: "sp13-folded-lines",
    theme: "Road trips",
    title: "Folded Lines",
    brief:
      "On the road again! Folded maps, highlighted routes, and intersecting highways viewed from above. Design a pattern that feels directional without becoming rigid. Let lines overlap and intersect rhythmically. Keep arrows subtle and purposeful.",
    palette: ["#F0E6D7", "#E9F04A", "#4A4D57", "#2E6C8C", "#C85C3A"],
    artStyle: "geometry",
    tips: ["Emphasize intersections", "Keep it readable", "Use arrows sparingly"],
    category: "travel",
    visualCategory: "map-lines"
  },
  {
    id: "sp14-measures-motifs",
    theme: "Music",
    title: "Measures & Motifs",
    brief:
      "A pattern built like a song—staff lines and musical notes abstracted into stripes, repeated dots like beats, and shapes that echo like refrains. Design with rhythm in mind. Let repetition create structure. Keep it graphic rather than literal.",
    palette: ["#1B1B1F", "#F0E6D7", "#6B9DA3", "#8A8A95", "#D4A72C"],
    artStyle: "geometry",
    tips: ["Emphasize rhythm", "Avoid literal symbols", "Repeat structures"],
    category: "music",
    visualCategory: "weather-motion"
  },
  {
    id: "sp15-woven-waiting",
    theme: "Birds",
    title: "Woven & Waiting",
    brief:
      "Nests built twig by twig, carefully layered and balanced. Design a pattern centered around circular woven forms and subtle texture. Let the shapes feel intentional and patient. Keep the overall tone calm.",
    palette: ["#6A4A3B", "#83B5E5", "#D8C39A", "#8A8A95", "#F5EFE6"],
    artStyle: "botanical",
    tips: ["Focus on circles", "Add subtle texture", "Keep it calm"],
    category: "nature",
    visualCategory: "birds-botanical"
  },
  {
    id: "sp16-skeins-swatches",
    theme: "Yarn stash",
    title: "Skeins & Swatches",
    brief:
      "Stacks of yarn skeins, soft swatches, and tidy craft shelves. Mom is the only person who could keep string organized, after all! Design a repeating pattern inspired by texture and repetition. Let loops and ovals anchor the structure. Keep the mood soothing.",
    palette: ["#5B4A73", "#F1E5D6", "#6C7E4B", "#5F6A7A", "#C7A1B2"],
    artStyle: "folk",
    tips: ["Use soft edges", "Repeat ovals", "Keep it soothing"],
    category: "craft",
    visualCategory: "craft-all"
  },
  {
    id: "sp17-market-morning",
    theme: "Markets",
    title: "Market Morning",
    brief:
      "Crates of produce, striped tents, and hand-lettered signage. Design a pattern that feels lively but not chaotic. Vary scale and color to create cheerful rhythm. Keep spacing balanced.",
    palette: ["#D96C3F", "#5E8B4A", "#F5E6C8", "#E3B23C", "#8A4B2A"],
    artStyle: "folk",
    tips: ["Use bold forms", "Vary produce shapes", "Keep spacing balanced"],
    category: "place",
    visualCategory: "garden-all"
  },
  {
    id: "sp18-dappled-light",
    theme: "Light",
    title: "Dappled",
    brief:
      "Shifting sunlight through leaves and layered canopy shapes. Design a pattern built from overlapping forms and softened edges of light and shadow. Let light feel dynamic but not harsh. Avoid sharp contrast.",
    palette: ["#2F6B4B", "#D4A72C", "#6C7E4B", "#F5EFE6", "#6B9DA3"],
    artStyle: "ink",
    tips: ["Layer opacity", "Keep edges soft", "Avoid sharp contrast"],
    category: "abstract",
    visualCategory: "forest-organic"
  },
  {
    id: "sp19-instant-summer",
    theme: "Photos",
    title: "Instant Summer",
    brief:
      "Overlapping instant-photo frames, faded colors, and slightly imperfect borders. Design a repeat that feels nostalgic without naming a specific place. Let rectangles overlap gently. Keep shadows subtle.",
    palette: ["#D07B6A", "#6B9DA3", "#F5EFE6", "#3A67A3", "#8A8A95"],
    artStyle: "geometry",
    tips: ["Overlap rectangles", "Keep shadows subtle", "Use soft tones"],
    category: "nostalgia",
    visualCategory: "craft-all"
  },
  {
    id: "sp20-quiet-accumulation",
    theme: "Winter",
    title: "Quiet Accumulation",
    brief:
      "Snow settling slowly on branches and rooftops. Design a pattern built from light density and generous negative space. Let repetition feel calm and deliberate. Avoid heavy contrast.",
    palette: ["#83B5E5", "#D9DEE6", "#F3F7FB", "#2B2B2F", "#2D5B46"],
    artStyle: "ink",
    tips: ["Use negative space", "Keep density light", "Avoid harsh contrast"],
    category: "winter",
    visualCategory: "landscape-place"
  },
  {
    id: "sp21-snip-scatter",
    theme: "Herbs",
    title: "Snip & Scatter",
    brief:
      "Fresh kitchen herbs: basil, rosemary, and thyme inspired designs drifting loosely across the page. Design a repeat with varied rotation and scale. Let stems remain delicate. Keep the background light.",
    palette: ["#6C7E4B", "#2F6B4B", "#8FAE8B", "#F0E6D7", "#C77F6A"],
    artStyle: "botanical",
    tips: ["Vary rotation", "Keep stems fine", "Use light background"],
    category: "garden",
    visualCategory: "garden-all"
  },
  {
    id: "sp22-evening-docklight",
    theme: "Water",
    title: "Evening Docklight",
    brief:
      "Blue-hour calm over water—darkening surface, warm dock lights reflecting softly. Design a repeat that feels like the day exhaling over the water. Let one glow color anchor the composition.",
    palette: ["#223555", "#4A4D57", "#D4A72C", "#C6A57A", "#2E6C8C"],
    artStyle: "ink",
    tips: ["Keep contrast low", "Use horizontal repetition", "Let one glow color pop"],
    category: "water",
    visualCategory: "water-ripples"
  },
  {
    id: "sp23-chord-progressions",
    theme: "Music",
    title: "Chord Progressions",
    brief:
      "Strings vibrating, circular sound holes, and rhythmic pattern blocks. Let the feel and sound of the guitar inspire this pattern. Design a repeat structured like music but abstract in form. Let lines repeat steadily. Keep the composition clean and intentional.",
    palette: ["#6A4A3B", "#D4A72C", "#223555", "#F5EFE6", "#C85C3A"],
    artStyle: "geometry",
    tips: ["Emphasize rhythm", "Repeat lines", "Keep it clean"],
    category: "music",
    visualCategory: "map-lines"
  },
  {
    id: "sp24-chosen-gathered",
    theme: "Family",
    title: "Chosen & Gathered",
    brief:
      "Pieces that belong together even if they didn’t start that way. Design a repeat built from interlocking forms and warm cohesion. A pattern inspired by family, but where symbolism remains understated.",
    palette: ["#5B4A73", "#C77F6A", "#6C7E4B", "#F5EFE6", "#D4A72C"],
    artStyle: "folk",
    tips: ["Suggest connection visually", "Keep symbolism light", "Use repeating links"],
    category: "family",
    visualCategory: "family-connection"
  },
  {
    id: "sp25-hallway-transitions",
    theme: "School",
    title: "Hallway Transitions",
    brief:
      "Lockers, schedules, sneakers, and directional arrows. Design a repeat that captures change with a little chaos. This pattern is inspired by 4 high schools in 4 years! Layer rectangles and lines thoughtfully.",
    palette: ["#3A67A3", "#2D5B46", "#F5EFE6", "#4A4D57", "#7C3C4A"],
    artStyle: "geometry",
    tips: ["Use directional marks", "Layer rectangles", "Keep it cohesive"],
    category: "education",
    visualCategory: "map-lines"
  },
  {
    id: "sp26-invisible-currents",
    theme: "Wind",
    title: "Invisible Currents",
    brief:
      "Wind as pattern—sweeping curves, drifting leaves, and bent grasses in motion. Design a repeat built from elongated shapes and flowing lines. Capture its playfulness and the humor with which it startled baby Sam.",
    palette: ["#B9C2CC", "#A6C7E5", "#D8C39A", "#8FAE8B", "#F3F7FB"],
    artStyle: "ink",
    tips: ["Use flow lines", "Avoid heaviness", "Keep shapes elongated"],
    category: "weather",
    visualCategory: "weather-motion"
  },
  {
    id: "sp27-paper-postage",
    theme: "Paper craft",
    title: "Paper & Postage",
    brief:
      "Cut paper layers, envelopes, stamps, and small cheerful shapes. Design a repeat that suggests handmade layering and thoughtful composition, like homemade Valentine’s or holiday cards. Balance structure with charm.",
    palette: ["#F5EFE6", "#F1C4CF", "#6A4A3B", "#6B9DA3", "#2B2B2F"],
    artStyle: "folk",
    tips: ["Suggest layering", "Use soft edges", "Keep it balanced"],
    category: "craft",
    visualCategory: "craft-all"
  },
  {
    id: "sp28-autumn-archive",
    theme: "Leaves",
    title: "Autumn Archive",
    brief:
      "Leaves arranged like labeled specimens in a quiet archive. Design a repeat built from orderly grids and seasonal texture. A contrast from the free fall of autumn leaves, this is a study in the structure of the leaves themselves. Add subtle label marks. Keep spacing even.",
    palette: ["#C85C3A", "#7C3C4A", "#6C7E4B", "#F0E6D7", "#6A4A3B"],
    artStyle: "botanical",
    tips: ["Use a grid", "Add label marks", "Keep spacing even"],
    category: "nature",
    visualCategory: "map-lines"
  },
  {
    id: "sp31-tidy-corners",
    theme: "Work",
    title: "Tidy Corners",
    brief:
      "As much as we hate it, chores make up a big part of our lives! Think folded sheets, stacked towels, organized kitchen drawers, and small acts of daily care. Design a repeat that celebrates order without sterility. Keep lines crisp and shapes balanced.",
    palette: ["#F3F7FB", "#B9C2CC", "#6B9DA3", "#8FAE8B", "#8A8A95"],
    artStyle: "geometry",
    tips: ["Emphasize symmetry", "Keep shapes clean", "Avoid clutter"],
    category: "home",
    visualCategory: "home-all"
  },
  {
    id: "sp32-picnic-check",
    theme: "Outdoors",
    title: "Checkered Afternoon",
    brief:
      "Picnic blanket geometry with warm-weather color and quiet charm. Days spent playing outside with friends. Design a structured repeat built from checks and subtle scale variation. Keep symmetry strong. Let structure lead.",
    palette: ["#C5403A", "#F5EFE6", "#83B5E5", "#4F7B4F", "#D39B2A"],
    artStyle: "geometry",
    tips: ["Keep symmetry", "Use scale contrast", "Let structure lead"],
    category: "place",
    visualCategory: "map-lines"
  }
];

const TOTAL_WEEKS = ALL_PROMPTS.length;

// ==============================
// 2) Weekly selection logic
// ==============================

function startOfDayLocal(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getWeekIndexFromStart(startDateStr, now = new Date()) {
  const start = startOfDayLocal(`${startDateStr}T00:00:00`);
  const today = startOfDayLocal(now);
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysSince = Math.floor((today - start) / msPerDay);
  return Math.floor(daysSince / 7);
}

function getWeeklyPromptScheduled() {
  const weekIndex = getWeekIndexFromStart(WEEK1_START_DATE);
  if (weekIndex < 0) return { state: "pre", weekIndex };
  if (weekIndex >= TOTAL_WEEKS) return { state: "done", weekIndex };
  return { state: "active", weekIndex, prompt: ALL_PROMPTS[weekIndex] };
}

// ==============================
// 3) Helpers
// ==============================

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => {
    toast.hidden = true;
  }, 1400);
}

function updateBrandMark(palette) {
  const mark = document.getElementById("brandMark");
  const letter = document.getElementById("brandLetter");
  if (!mark || !letter || !palette || palette.length < 2) return;
  mark.style.background = `linear-gradient(135deg, ${palette[0]}, ${palette[1]})`;
  letter.style.color = "#ffffff";
}

function getCardBackdrops(palette) {
  const [c1, c2, c3, c4, c5] = palette;
  return [
    `linear-gradient(135deg, ${c1}22, ${c3})`,
    `linear-gradient(135deg, ${c2}22, ${c4})`,
    `linear-gradient(135deg, ${c5}33, ${c3})`
  ];
}

function svgWrap(bg, inner) {
  return `
    <svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${bg[0]}"/>
          <stop offset="1" stop-color="${bg[1]}"/>
        </linearGradient>
      </defs>
      <rect width="900" height="320" fill="url(#g)"/>
      ${inner}
    </svg>
  `;
}

function bgPairFromGradientString(gradient) {
  const matches = gradient.match(/#(?:[0-9A-Fa-f]{3}){1,2}/g);
  if (matches && matches.length >= 2) return [matches[0], matches[1]];
  return ["#e9ecef", "#dfe5ea"];
}

// ==============================
// 4) Visual systems
// each uses 3 card variants with different backgrounds
// ==============================

function renderBirdsBotanical(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);

  const variants = [
    `
      <g fill="none" stroke="${c1}" stroke-width="3" stroke-linecap="round" opacity="0.9">
        <path d="M130 270 C145 220, 180 180, 215 120"/>
        <path d="M280 270 C295 220, 330 175, 360 115"/>
        <path d="M560 270 C535 215, 500 170, 470 110"/>
      </g>
      <g>
        <circle cx="225" cy="120" r="22" fill="${c4}"/>
        <circle cx="225" cy="120" r="9" fill="${c5}"/>
        <ellipse cx="205" cy="170" rx="24" ry="10" transform="rotate(-22 205 170)" fill="${c2}" opacity="0.7"/>
        <circle cx="360" cy="115" r="17" fill="${c4}"/>
        <circle cx="360" cy="115" r="7" fill="${c5}"/>
        <circle cx="470" cy="130" r="18" fill="${c4}"/>
        <circle cx="470" cy="130" r="7" fill="${c5}"/>
      </g>
    `,
    `
      <g fill="none" stroke="${c2}" stroke-width="3" stroke-linecap="round" opacity="0.9">
        <path d="M120 280 C140 220, 170 185, 200 105"/>
        <path d="M310 280 C320 230, 350 185, 395 95"/>
        <path d="M590 280 C570 220, 530 175, 500 115"/>
      </g>
      <g>
        <path d="M196 108 L210 82" stroke="${c1}" stroke-width="3" stroke-linecap="round"/>
        <circle cx="200" cy="105" r="20" fill="${c5}"/>
        <circle cx="200" cy="105" r="8" fill="${c4}"/>
        <ellipse cx="185" cy="165" rx="22" ry="9" transform="rotate(-28 185 165)" fill="${c3}" opacity="0.65"/>
        <circle cx="395" cy="95" r="18" fill="${c5}"/>
        <circle cx="395" cy="95" r="7" fill="${c4}"/>
        <circle cx="500" cy="115" r="22" fill="${c5}"/>
        <circle cx="500" cy="115" r="8" fill="${c4}"/>
      </g>
    `,
    `
      <g fill="none" stroke="${c3}" stroke-width="3" stroke-linecap="round" opacity="0.9">
        <path d="M145 270 C170 200, 205 170, 240 105"/>
        <path d="M305 270 C315 225, 340 180, 370 110"/>
        <path d="M560 270 C545 220, 505 175, 480 115"/>
      </g>
      <g>
        <circle cx="240" cy="105" r="20" fill="${c1}"/>
        <circle cx="240" cy="105" r="8" fill="${c2}"/>
        <ellipse cx="210" cy="170" rx="24" ry="10" transform="rotate(-22 210 170)" fill="${c4}" opacity="0.75"/>
        <circle cx="370" cy="110" r="16" fill="${c1}"/>
        <circle cx="370" cy="110" r="6" fill="${c2}"/>
        <circle cx="480" cy="115" r="18" fill="${c1}"/>
        <circle cx="480" cy="115" r="7" fill="${c2}"/>
      </g>
    `
  ];

  return svgWrap(bg, variants[variant]);
}

function renderRetroAll(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);

  const variants = [
    `
      <g opacity="0.95">
        <circle cx="150" cy="130" r="44" fill="${c2}"/>
        <rect x="290" y="88" width="110" height="84" rx="10" fill="${c4}"/>
        <path d="M560 210 C600 100, 680 100, 720 210" fill="none" stroke="${c3}" stroke-width="16" stroke-linecap="round"/>
        <circle cx="800" cy="125" r="32" fill="${c1}"/>
        <circle cx="800" cy="125" r="10" fill="${c5}"/>
      </g>
    `,
    `
      <g opacity="0.95">
        <rect x="110" y="100" width="120" height="70" rx="35" fill="${c2}"/>
        <path d="M170 98 L195 70" stroke="${c1}" stroke-width="8" stroke-linecap="round"/>
        <rect x="330" y="92" width="78" height="96" rx="14" fill="${c4}"/>
        <circle cx="625" cy="142" r="45" fill="${c5}"/>
        <rect x="740" y="104" width="72" height="80" rx="8" fill="${c3}"/>
      </g>
    `,
    `
      <g opacity="0.95">
        <circle cx="140" cy="145" r="36" fill="${c1}"/>
        <circle cx="140" cy="145" r="14" fill="${c5}"/>
        <rect x="270" y="96" width="130" height="92" rx="16" fill="${c2}"/>
        <path d="M525 210 L605 90 L685 210" fill="none" stroke="${c4}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="780" cy="130" r="28" fill="${c3}"/>
      </g>
    `
  ];

  return svgWrap(bg, variants[variant]);
}

function renderFamilyConnection(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);

  const variants = [
    `
      <g fill="none" stroke="${c1}" stroke-width="8" stroke-linecap="round" opacity="0.8">
        <path d="M170 160 C240 100, 320 100, 390 160"/>
        <path d="M390 160 C460 220, 540 220, 610 160"/>
        <path d="M610 160 C670 110, 730 110, 790 160"/>
      </g>
      <g fill="${c4}" opacity="0.95">
        <circle cx="170" cy="160" r="18"/>
        <circle cx="390" cy="160" r="18"/>
        <circle cx="610" cy="160" r="18"/>
        <circle cx="790" cy="160" r="18"/>
      </g>
    `,
    `
      <g fill="${c5}" opacity="0.95">
        <circle cx="220" cy="150" r="36"/>
        <circle cx="450" cy="150" r="48"/>
        <circle cx="690" cy="150" r="32"/>
      </g>
      <g fill="none" stroke="${c2}" stroke-width="7" opacity="0.9">
        <path d="M255 150 L402 150"/>
        <path d="M498 150 L658 150"/>
      </g>
      <g fill="${c1}">
        <circle cx="325" cy="150" r="9"/>
        <circle cx="575" cy="150" r="9"/>
      </g>
    `,
    `
      <g fill="none" stroke="${c3}" stroke-width="6" opacity="0.9">
        <rect x="150" y="115" width="110" height="70" rx="35"/>
        <rect x="315" y="95" width="130" height="110" rx="55"/>
        <rect x="510" y="110" width="110" height="80" rx="40"/>
        <rect x="675" y="125" width="80" height="60" rx="30"/>
      </g>
      <g stroke="${c4}" stroke-width="5" opacity="0.75">
        <line x1="260" y1="150" x2="315" y2="150"/>
        <line x1="445" y1="150" x2="510" y2="150"/>
        <line x1="620" y1="150" x2="675" y2="150"/>
      </g>
    `
  ];

  return svgWrap(bg, variants[variant]);
}

function renderPlayfulCharacters(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);

  const variants = [
    `
      <g>
        <circle cx="180" cy="150" r="50" fill="${c2}"/>
        <circle cx="450" cy="155" r="50" fill="${c4}"/>
        <circle cx="720" cy="148" r="50" fill="${c1}"/>
        <circle cx="162" cy="137" r="6" fill="${c5}"/>
        <circle cx="198" cy="137" r="6" fill="${c5}"/>
        <circle cx="432" cy="142" r="6" fill="${c5}"/>
        <circle cx="468" cy="142" r="6" fill="${c5}"/>
        <circle cx="702" cy="135" r="6" fill="${c5}"/>
        <circle cx="738" cy="135" r="6" fill="${c5}"/>
      </g>
      <g fill="none" stroke="${c3}" stroke-width="8" stroke-linecap="round">
        <path d="M145 110 L165 88"/>
        <path d="M215 110 L195 88"/>
        <path d="M415 115 L435 92"/>
        <path d="M485 115 L465 92"/>
      </g>
    `,
    `
      <g>
        <rect x="120" y="110" width="120" height="90" rx="26" fill="${c5}"/>
        <rect x="390" y="110" width="120" height="90" rx="26" fill="${c2}"/>
        <rect x="660" y="110" width="120" height="90" rx="26" fill="${c4}"/>
        <circle cx="160" cy="145" r="7" fill="${c1}"/>
        <circle cx="200" cy="145" r="7" fill="${c1}"/>
        <circle cx="430" cy="145" r="7" fill="${c3}"/>
        <circle cx="470" cy="145" r="7" fill="${c3}"/>
        <circle cx="700" cy="145" r="7" fill="${c1}"/>
        <circle cx="740" cy="145" r="7" fill="${c1}"/>
      </g>
    `,
    `
      <g>
        <circle cx="200" cy="150" r="42" fill="${c4}"/>
        <rect x="390" y="112" width="110" height="80" rx="40" fill="${c5}"/>
        <circle cx="705" cy="148" r="44" fill="${c2}"/>
      </g>
      <g fill="none" stroke="${c1}" stroke-width="7" stroke-linecap="round" opacity="0.8">
        <path d="M160 114 C180 86, 220 86, 240 114"/>
        <path d="M665 112 C685 84, 725 84, 745 112"/>
      </g>
    `
  ];

  return svgWrap(bg, variants[variant]);
}

function renderGardenAll(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);

  const variants = [
    `
      <g stroke="${c1}" stroke-width="3" fill="none">
        <line x1="150" y1="90" x2="150" y2="240"/>
        <line x1="300" y1="90" x2="300" y2="240"/>
        <line x1="450" y1="90" x2="450" y2="240"/>
        <line x1="600" y1="90" x2="600" y2="240"/>
        <line x1="750" y1="90" x2="750" y2="240"/>
        <line x1="80" y1="120" x2="820" y2="120"/>
        <line x1="80" y1="180" x2="820" y2="180"/>
      </g>
      <g fill="${c2}">
        <circle cx="150" cy="120" r="14"/>
        <circle cx="300" cy="180" r="14"/>
        <circle cx="450" cy="120" r="14"/>
        <circle cx="600" cy="180" r="14"/>
      </g>
      <g fill="${c4}">
        <rect x="725" y="100" width="38" height="16" rx="4"/>
      </g>
    `,
    `
      <g stroke="${c3}" stroke-width="3" fill="none">
        <rect x="100" y="90" width="180" height="140" rx="8"/>
        <rect x="330" y="90" width="180" height="140" rx="8"/>
        <rect x="560" y="90" width="180" height="140" rx="8"/>
      </g>
      <g fill="${c1}" opacity="0.8">
        <circle cx="170" cy="160" r="18"/>
        <circle cx="400" cy="145" r="18"/>
        <circle cx="650" cy="170" r="18"/>
      </g>
      <g fill="${c2}">
        <rect x="130" y="105" width="40" height="12" rx="3"/>
        <rect x="360" y="105" width="40" height="12" rx="3"/>
        <rect x="590" y="105" width="40" height="12" rx="3"/>
      </g>
    `,
    `
      <g stroke="${c1}" stroke-width="3" fill="none" opacity="0.75">
        <path d="M120 220 C190 120, 260 120, 330 220"/>
        <path d="M380 220 C450 120, 520 120, 590 220"/>
        <path d="M640 220 C700 140, 760 140, 820 220"/>
      </g>
      <g fill="${c2}" opacity="0.9">
        <circle cx="225" cy="145" r="18"/>
        <circle cx="485" cy="145" r="18"/>
        <circle cx="730" cy="165" r="18"/>
      </g>
      <g fill="${c4}" opacity="0.8">
        <rect x="200" y="90" width="50" height="14" rx="3"/>
      </g>
    `
  ];

  return svgWrap(bg, variants[variant]);
}

function renderCraftAll(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);

  const variants = [
    `
      <g fill="${c4}" opacity="0.9">
        <rect x="120" y="100" width="120" height="90" rx="10"/>
        <rect x="290" y="120" width="140" height="70" rx="10"/>
        <rect x="500" y="95" width="100" height="110" rx="10"/>
        <circle cx="710" cy="150" r="46"/>
      </g>
      <g stroke="${c1}" stroke-width="3" fill="none" opacity="0.8">
        <line x1="240" y1="145" x2="290" y2="155"/>
        <line x1="430" y1="155" x2="500" y2="150"/>
      </g>
    `,
    `
      <g fill="${c5}" opacity="0.95">
        <circle cx="170" cy="150" r="38"/>
        <circle cx="290" cy="150" r="30"/>
        <circle cx="420" cy="150" r="46"/>
        <circle cx="570" cy="150" r="34"/>
      </g>
      <g fill="none" stroke="${c2}" stroke-width="6" opacity="0.85">
        <path d="M130 150 C180 110, 240 190, 300 150 C355 112, 395 186, 460 150 C515 118, 550 180, 610 150"/>
      </g>
    `,
    `
      <g fill="${c4}" opacity="0.9">
        <rect x="120" y="110" width="90" height="70" rx="8"/>
        <rect x="250" y="110" width="90" height="70" rx="8"/>
        <rect x="380" y="110" width="90" height="70" rx="8"/>
        <rect x="510" y="110" width="90" height="70" rx="8"/>
      </g>
      <g stroke="${c1}" stroke-width="3" fill="none">
        <path d="M170 110 L170 70"/>
        <path d="M300 110 L300 70"/>
        <path d="M430 110 L430 70"/>
        <path d="M560 110 L560 70"/>
      </g>
      <g fill="${c2}">
        <circle cx="170" cy="70" r="10"/>
        <circle cx="300" cy="70" r="10"/>
        <circle cx="430" cy="70" r="10"/>
        <circle cx="560" cy="70" r="10"/>
      </g>
    `
  ];

  return svgWrap(bg, variants[variant]);
}

function renderHomeAll(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);

  const variants = [
    `
      <g fill="${c4}" opacity="0.95">
        <rect x="110" y="120" width="120" height="70" rx="8"/>
        <rect x="280" y="108" width="120" height="82" rx="8"/>
        <rect x="450" y="130" width="120" height="60" rx="8"/>
        <rect x="620" y="115" width="120" height="75" rx="8"/>
      </g>
      <g stroke="${c1}" stroke-width="3" fill="none" opacity="0.8">
        <line x1="110" y1="200" x2="230" y2="200"/>
        <line x1="280" y1="200" x2="400" y2="200"/>
        <line x1="450" y1="200" x2="570" y2="200"/>
      </g>
    `,
    `
      <g fill="${c5}" opacity="0.95">
        <circle cx="180" cy="150" r="36"/>
        <circle cx="320" cy="150" r="36"/>
        <circle cx="460" cy="150" r="36"/>
        <circle cx="600" cy="150" r="36"/>
      </g>
      <g fill="${c2}" opacity="0.85">
        <circle cx="180" cy="150" r="10"/>
        <circle cx="320" cy="150" r="10"/>
        <circle cx="460" cy="150" r="10"/>
        <circle cx="600" cy="150" r="10"/>
      </g>
    `,
    `
      <g fill="${c4}" opacity="0.95">
        <rect x="160" y="95" width="90" height="110" rx="10"/>
        <rect x="290" y="95" width="90" height="110" rx="10"/>
        <rect x="420" y="95" width="90" height="110" rx="10"/>
      </g>
      <g fill="${c1}" opacity="0.7">
        <rect x="175" y="112" width="60" height="10" rx="5"/>
        <rect x="305" y="112" width="60" height="10" rx="5"/>
        <rect x="435" y="112" width="60" height="10" rx="5"/>
      </g>
    `
  ];

  return svgWrap(bg, variants[variant]);
}

function renderLandscapePlace(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);

  const variants = [
    `
      <g fill="${c1}" opacity="0.18">
        <path d="M0 230 C120 180, 220 180, 340 225 C460 270, 600 255, 900 200 L900 320 L0 320 Z"/>
      </g>
      <g fill="${c2}" opacity="0.28">
        <path d="M0 260 C150 210, 260 210, 390 250 C520 290, 660 275, 900 235 L900 320 L0 320 Z"/>
      </g>
      <g stroke="${c3}" stroke-width="3" opacity="0.7">
        <line x1="100" y1="230" x2="800" y2="230"/>
      </g>
    `,
    `
      <g stroke="${c1}" stroke-width="3" opacity="0.75">
        <line x1="100" y1="240" x2="800" y2="240"/>
        <line x1="140" y1="200" x2="760" y2="200"/>
        <line x1="180" y1="160" x2="720" y2="160"/>
      </g>
      <g fill="${c2}" opacity="0.9">
        <circle cx="670" cy="110" r="24"/>
      </g>
    `,
    `
      <g fill="${c4}" opacity="0.25">
        <rect x="120" y="170" width="70" height="70"/>
        <rect x="210" y="170" width="70" height="70"/>
        <rect x="300" y="170" width="70" height="70"/>
        <rect x="390" y="170" width="70" height="70"/>
      </g>
      <g fill="${c1}" opacity="0.7">
        <rect x="560" y="150" width="120" height="90"/>
      </g>
      <g fill="${c3}" opacity="0.8">
        <rect x="585" y="175" width="24" height="65"/>
        <rect x="630" y="175" width="24" height="65"/>
      </g>
    `
  ];

  return svgWrap(bg, variants[variant]);
}

function renderMapLines(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);

  const variants = [
    `
      <g stroke="${c1}" stroke-width="4" fill="none" opacity="0.8">
        <path d="M120 90 L260 150 L390 100 L550 180 L780 120"/>
      </g>
      <g fill="${c2}">
        <circle cx="120" cy="90" r="8"/>
        <circle cx="260" cy="150" r="8"/>
        <circle cx="390" cy="100" r="8"/>
        <circle cx="550" cy="180" r="8"/>
        <circle cx="780" cy="120" r="8"/>
      </g>
      <g stroke="${c3}" stroke-width="2" opacity="0.4">
        <line x1="180" y1="210" x2="180" y2="250"/>
        <line x1="430" y1="200" x2="430" y2="245"/>
        <line x1="640" y1="210" x2="640" y2="250"/>
      </g>
    `,
    `
      <g fill="${c4}" opacity="0.95">
        <rect x="150" y="100" width="110" height="70" rx="8"/>
        <rect x="340" y="130" width="130" height="70" rx="8"/>
        <rect x="610" y="95" width="110" height="80" rx="8"/>
      </g>
      <g stroke="${c1}" stroke-width="3" fill="none" opacity="0.7">
        <line x1="260" y1="135" x2="340" y2="165"/>
        <line x1="470" y1="160" x2="610" y2="135"/>
      </g>
      <g stroke="${c2}" stroke-width="3" opacity="0.6">
        <line x1="160" y1="182" x2="260" y2="182"/>
        <line x1="350" y1="205" x2="470" y2="205"/>
        <line x1="620" y1="185" x2="720" y2="185"/>
      </g>
    `,
    `
      <g stroke="${c1}" stroke-width="3" fill="none" opacity="0.75">
        <line x1="130" y1="110" x2="760" y2="110"/>
        <line x1="130" y1="210" x2="800" y2="210"/>
        <line x1="170" y1="80" x2="170" y2="250"/>
        <line x1="300" y1="80" x2="300" y2="250"/>
        <line x1="430" y1="80" x2="430" y2="250"/>
        <line x1="560" y1="80" x2="560" y2="250"/>
        <line x1="690" y1="80" x2="690" y2="250"/>
      </g>
      <g fill="${c2}">
        <circle cx="300" cy="110" r="8"/>
        <circle cx="560" cy="210" r="8"/>
      </g>
    `
  ];

  return svgWrap(bg, variants[variant]);
}

function renderForestOrganic(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);

  const variants = [
    `
      <g fill="${c1}" opacity="0.18">
        <ellipse cx="180" cy="180" rx="80" ry="42"/>
        <ellipse cx="360" cy="150" rx="90" ry="48"/>
        <ellipse cx="610" cy="190" rx="95" ry="44"/>
      </g>
      <g stroke="${c3}" stroke-width="4" fill="none" opacity="0.8">
        <path d="M180 220 C200 160, 210 130, 220 80"/>
        <path d="M360 220 C380 160, 390 130, 400 70"/>
        <path d="M610 220 C630 160, 645 130, 660 75"/>
      </g>
      <g fill="${c2}">
        <circle cx="220" cy="80" r="18"/>
        <circle cx="400" cy="70" r="22"/>
        <circle cx="660" cy="75" r="18"/>
      </g>
    `,
    `
      <g fill="${c4}" opacity="0.25">
        <circle cx="190" cy="160" r="34"/>
        <circle cx="270" cy="120" r="26"/>
        <circle cx="370" cy="185" r="30"/>
        <circle cx="530" cy="135" r="36"/>
        <circle cx="650" cy="175" r="28"/>
      </g>
      <g stroke="${c1}" stroke-width="3" fill="none" opacity="0.8">
        <path d="M160 240 C170 190, 185 170, 190 160"/>
        <path d="M355 240 C360 205, 365 195, 370 185"/>
        <path d="M635 240 C642 205, 646 190, 650 175"/>
      </g>
    `,
    `
      <g fill="${c5}" opacity="0.9">
        <ellipse cx="180" cy="160" rx="44" ry="22"/>
        <ellipse cx="410" cy="180" rx="54" ry="24"/>
        <ellipse cx="650" cy="190" rx="48" ry="20"/>
      </g>
      <g fill="${c2}" opacity="0.7">
        <circle cx="220" cy="130" r="10"/>
        <circle cx="250" cy="150" r="14"/>
        <circle cx="470" cy="145" r="12"/>
        <circle cx="685" cy="150" r="12"/>
      </g>
      <g stroke="${c3}" stroke-width="3" opacity="0.7">
        <line x1="180" y1="110" x2="180" y2="220"/>
        <line x1="410" y1="120" x2="410" y2="230"/>
        <line x1="650" y1="130" x2="650" y2="235"/>
      </g>
    `
  ];

  return svgWrap(bg, variants[variant]);
}

function renderWaterRipples(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);

  const variants = [
    `
      <g stroke="${c1}" stroke-width="4" fill="none" opacity="0.8">
        <path d="M90 130 C160 110, 240 110, 310 130 C380 150, 460 150, 530 130 C600 110, 680 110, 810 140"/>
        <path d="M80 185 C160 165, 240 165, 320 185 C400 205, 500 205, 580 185 C660 165, 740 165, 830 190"/>
      </g>
      <g fill="${c2}">
        <circle cx="260" cy="125" r="10"/>
        <circle cx="560" cy="182" r="10"/>
      </g>
    `,
    `
      <g fill="${c4}" opacity="0.25">
        <ellipse cx="200" cy="170" rx="70" ry="26"/>
        <ellipse cx="450" cy="145" rx="90" ry="30"/>
        <ellipse cx="700" cy="180" rx="75" ry="25"/>
      </g>
      <g stroke="${c1}" stroke-width="3" fill="none" opacity="0.85">
        <circle cx="200" cy="170" r="18"/>
        <circle cx="450" cy="145" r="18"/>
        <circle cx="700" cy="180" r="18"/>
      </g>
    `,
    `
      <g stroke="${c3}" stroke-width="4" fill="none" opacity="0.85">
        <path d="M170 235 C190 200, 210 160, 215 115"/>
        <path d="M395 235 C405 195, 420 160, 440 120"/>
        <path d="M675 235 C660 200, 630 160, 600 125"/>
      </g>
      <g fill="${c2}">
        <rect x="205" y="95" width="20" height="20" rx="10"/>
        <rect x="430" y="100" width="20" height="20" rx="10"/>
        <rect x="590" y="105" width="20" height="20" rx="10"/>
      </g>
    `
  ];

  return svgWrap(bg, variants[variant]);
}

function renderWeatherMotion(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);

  const variants = [
    `
      <g stroke="${c1}" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.8">
        <path d="M120 170 C220 90, 320 250, 430 160 C530 80, 620 235, 780 135"/>
        <path d="M180 220 C260 165, 310 190, 380 220"/>
      </g>
      <g fill="${c4}" opacity="0.9">
        <circle cx="260" cy="115" r="12"/>
        <circle cx="575" cy="120" r="12"/>
      </g>
    `,
    `
      <g stroke="${c2}" stroke-width="4" opacity="0.7">
        <line x1="180" y1="80" x2="150" y2="240"/>
        <line x1="300" y1="80" x2="270" y2="240"/>
        <line x1="420" y1="80" x2="390" y2="240"/>
        <line x1="540" y1="80" x2="510" y2="240"/>
        <line x1="660" y1="80" x2="630" y2="240"/>
      </g>
      <g fill="${c1}" opacity="0.85">
        <path d="M580 110 L620 155 L585 155 L630 220" />
      </g>
    `,
    `
      <g fill="none" stroke="${c3}" stroke-width="6" stroke-linecap="round" opacity="0.85">
        <path d="M120 190 C170 140, 220 140, 270 190"/>
        <path d="M300 170 C350 120, 400 120, 450 170"/>
        <path d="M520 190 C570 140, 620 140, 670 190"/>
      </g>
      <g fill="${c2}" opacity="0.8">
        <circle cx="200" cy="110" r="14"/>
        <circle cx="390" cy="90" r="14"/>
        <circle cx="590" cy="110" r="14"/>
      </g>
    `
  ];

  return svgWrap(bg, variants[variant]);
}

function renderDefaultVisual(palette, variant) {
  const [c1, c2, c3, c4, c5] = palette;
  const bg = bgPairFromGradientString(getCardBackdrops(palette)[variant]);
  const variants = [
    `<g><circle cx="180" cy="160" r="52" fill="${c2}"/><rect x="360" y="110" width="110" height="100" rx="16" fill="${c4}"/><path d="M620 210 C670 100, 730 100, 780 210" fill="none" stroke="${c1}" stroke-width="16" stroke-linecap="round"/></g>`,
    `<g><rect x="150" y="110" width="120" height="90" rx="20" fill="${c5}"/><circle cx="450" cy="160" r="50" fill="${c2}"/><circle cx="700" cy="140" r="32" fill="${c1}"/></g>`,
    `<g><circle cx="200" cy="140" r="38" fill="${c4}"/><circle cx="420" cy="170" r="55" fill="${c5}"/><rect x="640" y="110" width="110" height="90" rx="18" fill="${c2}"/></g>`
  ];
  return svgWrap(bg, variants[variant]);
}

function renderVisualCard(visualCategory, palette, variant) {
  switch (visualCategory) {
    case "birds-botanical":
      return renderBirdsBotanical(palette, variant);
    case "retro-all":
      return renderRetroAll(palette, variant);
    case "family-connection":
      return renderFamilyConnection(palette, variant);
    case "playful-characters":
      return renderPlayfulCharacters(palette, variant);
    case "garden-all":
      return renderGardenAll(palette, variant);
    case "craft-all":
      return renderCraftAll(palette, variant);
    case "home-all":
      return renderHomeAll(palette, variant);
    case "landscape-place":
      return renderLandscapePlace(palette, variant);
    case "map-lines":
      return renderMapLines(palette, variant);
    case "forest-organic":
      return renderForestOrganic(palette, variant);
    case "water-ripples":
      return renderWaterRipples(palette, variant);
    case "weather-motion":
      return renderWeatherMotion(palette, variant);
    default:
      return renderDefaultVisual(palette, variant);
  }
}

// ==============================
// 5) Theme application
// ==============================

function applyTheme(prompt) {
  const [c1, c2, c3, c4, c5] = prompt.palette;

  document.documentElement.style.setProperty("--accent", c1);
  document.documentElement.style.setProperty("--accent2", c2);

  const artA = document.getElementById("artA");
  const artB = document.getElementById("artB");
  const artC = document.getElementById("artC");

  if (artA) artA.innerHTML = renderVisualCard(prompt.visualCategory, prompt.palette, 0);
  if (artB) artB.innerHTML = renderVisualCard(prompt.visualCategory, prompt.palette, 1);
  if (artC) artC.innerHTML = renderVisualCard(prompt.visualCategory, prompt.palette, 2);

  const paletteRow = document.getElementById("paletteRow");
  if (paletteRow) {
    paletteRow.innerHTML = "";
    prompt.palette.forEach(hex => {
      const sw = document.createElement("div");
      sw.className = "swatch";
      sw.style.background = hex;
      paletteRow.appendChild(sw);
    });
  }

  const paletteText = document.getElementById("paletteText");
  if (paletteText) {
    paletteText.textContent = prompt.palette.join(" ");
  }

  const tipsList = document.getElementById("tipsList");
  if (tipsList) {
    tipsList.innerHTML = "";
    (prompt.tips || []).forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      tipsList.appendChild(li);
    });
  }
}

// ==============================
// 6) Archive
// ==============================

function renderArchive({ weekIndex }) {
  const archiveList = document.getElementById("archiveList");
  const toggle = document.getElementById("archiveToggle");
  const panel = document.getElementById("archivePanel");

  if (!archiveList || !toggle || !panel) return;

  const past = ALL_PROMPTS.slice(0, Math.max(0, Math.min(weekIndex, TOTAL_WEEKS)));
  archiveList.innerHTML = "";

  if (past.length === 0) {
    archiveList.innerHTML = `<div class="archiveEmpty">No previous weeks yet.</div>`;
  } else {
    past.forEach((p, i) => {
      const item = document.createElement("div");
      item.className = "archiveItem";
      item.innerHTML = `
        <div class="archiveItem__week">Week ${i + 1}</div>
        <div class="archiveItem__title">${escapeHtml(p.title)}</div>
        <div class="archiveItem__brief">${escapeHtml(p.brief)}</div>
      `;
      archiveList.appendChild(item);
    });
  }

  if (panel.hidden) {
    toggle.textContent = "Show previous weeks";
    toggle.setAttribute("aria-expanded", "false");
  } else {
    toggle.textContent = "Hide previous weeks";
    toggle.setAttribute("aria-expanded", "true");
  }
}

// ==============================
// 7) Main UI
// ==============================

function setWeeklyUI() {
  const weekly = getWeeklyPromptScheduled();

  const yearEl = document.getElementById("year");
  const themePill = document.getElementById("themePill");
  const weekPill = document.getElementById("weekPill");
  const weeklyTitle = document.getElementById("weeklyTitle");
  const weeklyText = document.getElementById("weeklyText");
  const visualNote = document.getElementById("visualNote");
  const copyBtn = document.getElementById("copyBtn");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (weekly.state === "pre") {
    if (weekPill) weekPill.textContent = "Week —";
    if (themePill) themePill.textContent = "Theme: —";
    if (weeklyTitle) weeklyTitle.textContent = "Not started yet";
    if (weeklyText) weeklyText.textContent = `This challenge is scheduled to start on ${WEEK1_START_DATE}.`;
    if (visualNote) visualNote.textContent = "Waiting for Week 1.";
    if (copyBtn) copyBtn.style.display = "none";
    renderArchive({ weekIndex: 0 });
    return;
  }

  if (weekly.state === "done") {
    if (weekPill) weekPill.textContent = "You did it!";
    if (themePill) themePill.textContent = "Theme: luv u <3";
    if (weeklyTitle) weeklyTitle.textContent = "You’ve reached the end of the prompt series. Hope you had fun!";
    if (weeklyText) weeklyText.textContent = "";
    if (visualNote) visualNote.textContent = "Happy birthday (again)!";
    if (copyBtn) copyBtn.style.display = "none";

    applyTheme({
      palette: ["#2B2B2F", "#D4A72C", "#F5EFE6", "#6B9DA3", "#C77F6A"],
      visualCategory: "retro-all",
      tips: ["—"]
    });
    updateBrandMark(["#2B2B2F", "#D4A72C"]);
    renderArchive({ weekIndex: TOTAL_WEEKS });
    return;
  }

  const prompt = weekly.prompt;
  const weekNumber = weekly.weekIndex + 1;

  if (weekPill) weekPill.textContent = `Week ${weekNumber}`;
  if (themePill) themePill.textContent = `Theme: ${prompt.theme}`;
  if (weeklyTitle) weeklyTitle.textContent = prompt.title;
  if (weeklyText) weeklyText.textContent = prompt.brief;
  if (visualNote) visualNote.textContent = "Palette visualization samples.";
  if (copyBtn) copyBtn.style.display = "";

  applyTheme(prompt);
  updateBrandMark(prompt.palette);

  setWeeklyUI.currentPromptText =
    `${prompt.title}\n\n${prompt.brief}\n\nTheme: ${prompt.theme}\nPalette: ${prompt.palette.join(" ")}`;

  renderArchive({ weekIndex: weekly.weekIndex });
}

function wireUI() {
  const copyBtn = document.getElementById("copyBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(setWeeklyUI.currentPromptText || "");
        showToast("Copied.");
      } catch {
        showToast("Copy failed.");
      }
    });
  }

  const toggle = document.getElementById("archiveToggle");
  const panel = document.getElementById("archivePanel");

  if (toggle && panel) {
    toggle.addEventListener("click", () => {
      panel.hidden = !panel.hidden;
      toggle.textContent = panel.hidden ? "Show previous weeks" : "Hide previous weeks";
      toggle.setAttribute("aria-expanded", panel.hidden ? "false" : "true");
    });
  }
}

setWeeklyUI();
wireUI();