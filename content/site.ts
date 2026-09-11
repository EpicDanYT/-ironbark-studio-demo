// ---------------------------------------------------------------------------
// IRONBARK STUDIO — SITE CONTENT
// ---------------------------------------------------------------------------
// Everything a client would ever want to change lives in this one file.
// Names, hours, prices, timetable, booking links, image sources.
// No business content is hardcoded in the page components.
// ---------------------------------------------------------------------------

export const business = {
  name: 'Ironbark Studio',
  shortName: 'Ironbark',
  tagline: 'Reformer Pilates and small-group strength in Marrickville.',
  // One-line description used in the <meta> tags.
  metaDescription:
    'Ironbark Studio is a boutique reformer Pilates and strength studio in Marrickville, Sydney. Small classes, real coaching, programming that progresses.',
  suburb: 'Marrickville',
  city: 'Sydney',
  address: {
    line1: 'Unit 3, 122 Sydenham Road',
    line2: 'Marrickville NSW 2204',
    // Used to build the Google Maps embed and the "get directions" link.
    mapQuery: '122 Sydenham Road, Marrickville NSW 2204, Australia',
  },
  phone: '(02) 7208 4416',
  phoneHref: 'tel:+61272084416',
  email: 'hello@ironbarkstudio.com.au',
  instagram: '@ironbark.studio',
  instagramUrl: 'https://instagram.com',
  abn: '61 208 447 913',
} as const;

// ---------------------------------------------------------------------------
// BOOKING
// ---------------------------------------------------------------------------
// The site never takes a payment. "Book instantly" hands off to the studio's
// real booking platform; everything else routes through the enquiry form.
// Swap `platform.url` for the studio's live timetable link when it's ready.

export const booking = {
  platform: {
    name: 'Mindbody',
    // ▸ REPLACE with the studio's live Mindbody timetable URL, e.g.
    //   https://www.mindbodyonline.com/explore/locations/ironbark-studio
    url: 'https://www.mindbodyonline.com/explore',
    appNote:
      'Ironbark runs on Mindbody. Book on the web, or grab the Mindbody app and search for Ironbark Studio to book and cancel from your phone.',
  },
  // Cut-off for cancelling without losing the class credit.
  cancellationHours: 12,
  waitlistNote:
    'Full classes open a waitlist. If a spot frees up you will be moved in automatically and notified — you can drop off the waitlist any time before the cut-off.',
  // ▸ Paste a free access key from https://web3forms.com to make the enquiry
  //   form send real emails. Leave it empty and the form falls back to
  //   opening the visitor's own email app instead, pre-filled with what they
  //   typed — so the form still "works" with zero setup.
  formAccessKey: '',
  enquiryResponseTime: 'within one business day',
} as const;

// ---------------------------------------------------------------------------
// HOURS
// ---------------------------------------------------------------------------

export const hours = [
  { days: 'Monday – Thursday', open: '6:00am – 7:30pm' },
  { days: 'Friday', open: '6:00am – 6:00pm' },
  { days: 'Saturday', open: '7:00am – 12:00pm' },
  { days: 'Sunday', open: '8:00am – 11:00am' },
] as const;

export const hoursNote =
  'The studio is open for scheduled classes and sessions only — there is no open gym floor. Doors open ten minutes before each class.';

// ---------------------------------------------------------------------------
// WHAT MAKES THE STUDIO DIFFERENT
// ---------------------------------------------------------------------------

export const differences = [
  {
    heading: 'Eight reformers. Six barbells.',
    body: 'Class caps are set by how many people one coach can actually watch, not by how many bodies fit in the room. Every class has a hard cap and it does not move.',
  },
  {
    heading: 'Coached, not choreographed',
    body: 'Nobody is running a playlist at the front of the room. Coaches walk the floor, load your springs, change your weight, and tell you when something needs to look different.',
  },
  {
    heading: 'Six-week training blocks',
    body: 'Programming runs in blocks that build on each other, so the work in week six is measurably harder than week one. You are training toward something, not attending a class.',
  },
] as const;

// ---------------------------------------------------------------------------
// CLASS TYPES
// ---------------------------------------------------------------------------

export const classTypes = [
  {
    id: 'reformer-flow',
    name: 'Reformer Flow',
    length: '45 min',
    cap: '8 reformers',
    level: 'All levels',
    summary:
      'Continuous, controlled reformer work built around breath and range. The entry point to the studio and the class most people start with.',
  },
  {
    id: 'reformer-strong',
    name: 'Reformer Strong',
    length: '45 min',
    cap: '8 reformers',
    level: 'Some reformer experience',
    summary:
      'Heavier spring loads, longer holds, fewer transitions. Built for people who have found Flow comfortable and want the work to get harder.',
  },
  {
    id: 'strength',
    name: 'Strength',
    length: '50 min',
    cap: '6 people',
    level: 'All levels — technique taught from scratch',
    summary:
      'Small-group barbell and dumbbell training. Squat, hinge, push, pull, carry, loaded and progressed across a six-week block.',
  },
  {
    id: 'mobility',
    name: 'Mobility & Restore',
    length: '40 min',
    cap: '10 people',
    level: 'All levels',
    summary:
      'Loaded stretching, joint work and breathing. Slow, unglamorous, and the reason people keep training through their fifties.',
  },
  {
    id: 'semi-private',
    name: 'Semi-Private',
    length: '60 min',
    cap: '2 – 3 people',
    level: 'By arrangement',
    summary:
      'Bring a friend or a partner and split a coach. Your own program, written for the group, run at your own pace.',
  },
  {
    id: 'personal-training',
    name: '1:1 Personal Training',
    length: '60 min',
    cap: 'Just you',
    level: 'All levels',
    summary:
      'Fully individual programming, including return-to-training work alongside a physio or specific strength goals.',
  },
] as const;

// ---------------------------------------------------------------------------
// WEEKLY TIMETABLE
// ---------------------------------------------------------------------------
// `type` links a session back to a classTypes id so the timetable and the class
// descriptions can never drift apart.

export const schedule = [
  {
    day: 'Monday',
    sessions: [
      { time: '6:15am', type: 'strength', coach: 'Nadia' },
      { time: '7:15am', type: 'reformer-flow', coach: 'Timothy' },
      { time: '9:30am', type: 'reformer-flow', coach: 'Timothy' },
      { time: '12:15pm', type: 'reformer-strong', coach: 'Matthew' },
      { time: '5:30pm', type: 'strength', coach: 'Matthew' },
      { time: '6:30pm', type: 'reformer-flow', coach: 'Nadia' },
    ],
  },
  {
    day: 'Tuesday',
    sessions: [
      { time: '6:15am', type: 'reformer-strong', coach: 'Nadia' },
      { time: '7:15am', type: 'strength', coach: 'Matthew' },
      { time: '9:30am', type: 'reformer-flow', coach: 'Timothy' },
      { time: '10:30am', type: 'mobility', coach: 'Timothy' },
      { time: '5:30pm', type: 'reformer-flow', coach: 'Timothy' },
      { time: '6:30pm', type: 'reformer-strong', coach: 'Nadia' },
    ],
  },
  {
    day: 'Wednesday',
    sessions: [
      { time: '6:15am', type: 'strength', coach: 'Matthew' },
      { time: '7:15am', type: 'reformer-flow', coach: 'Nadia' },
      { time: '9:30am', type: 'reformer-strong', coach: 'Nadia' },
      { time: '12:15pm', type: 'mobility', coach: 'Timothy' },
      { time: '5:30pm', type: 'reformer-flow', coach: 'Timothy' },
      { time: '6:30pm', type: 'strength', coach: 'Matthew' },
    ],
  },
  {
    day: 'Thursday',
    sessions: [
      { time: '6:15am', type: 'reformer-flow', coach: 'Timothy' },
      { time: '7:15am', type: 'strength', coach: 'Nadia' },
      { time: '9:30am', type: 'reformer-flow', coach: 'Timothy' },
      { time: '5:30pm', type: 'reformer-strong', coach: 'Nadia' },
      { time: '6:30pm', type: 'reformer-flow', coach: 'Matthew' },
    ],
  },
  {
    day: 'Friday',
    sessions: [
      { time: '6:15am', type: 'reformer-strong', coach: 'Nadia' },
      { time: '7:15am', type: 'strength', coach: 'Matthew' },
      { time: '9:30am', type: 'reformer-flow', coach: 'Timothy' },
      { time: '12:15pm', type: 'mobility', coach: 'Timothy' },
      { time: '5:00pm', type: 'reformer-flow', coach: 'Matthew' },
    ],
  },
  {
    day: 'Saturday',
    sessions: [
      { time: '7:30am', type: 'strength', coach: 'Matthew' },
      { time: '8:30am', type: 'reformer-strong', coach: 'Nadia' },
      { time: '9:30am', type: 'reformer-flow', coach: 'Nadia' },
      { time: '10:30am', type: 'mobility', coach: 'Timothy' },
    ],
  },
  {
    day: 'Sunday',
    sessions: [
      { time: '8:30am', type: 'reformer-flow', coach: 'Timothy' },
      { time: '9:30am', type: 'mobility', coach: 'Timothy' },
    ],
  },
] as const;

export const scheduleNote =
  'Semi-private and 1:1 sessions are booked directly with a coach and sit outside the class timetable. Public holiday hours are posted in the studio and on Instagram the week before.';

// ---------------------------------------------------------------------------
// PRICING
// ---------------------------------------------------------------------------
// Nothing is charged on this website. Prices are shown here; payment happens on
// the booking platform or in the studio.

export const intro = {
  name: 'Two weeks, three classes',
  price: '$49',
  detail:
    'Three classes to use across fourteen days, on any class in the timetable. One per person, and it is the cheapest way to find out whether the studio suits you.',
};

export const classPricing = {
  heading: 'Class packs',
  note: 'Packs work on every class in the timetable — reformer, strength and mobility. No lock-in, no joining fee.',
  items: [
    { name: 'Casual class', price: '$38', detail: 'One class, no commitment.' },
    { name: '5-class pack', price: '$175', detail: '$35 a class. Expires after 3 months.' },
    { name: '10-class pack', price: '$320', detail: '$32 a class. Expires after 6 months.' },
    { name: '20-class pack', price: '$580', detail: '$29 a class. Expires after 12 months.' },
  ],
};

export const membershipPricing = {
  heading: 'Memberships',
  note: 'Billed fortnightly by direct debit. Eight-week minimum term, then ongoing. Pause for up to four weeks a year at no cost.',
  items: [
    {
      name: 'Foundation',
      price: '$59',
      period: 'per week',
      detail: 'Two classes a week. Suits one reformer and one strength class.',
    },
    {
      name: 'Full',
      price: '$89',
      period: 'per week',
      detail: 'Four classes a week. The membership most members land on.',
      featured: true,
    },
    {
      name: 'Unlimited',
      price: '$109',
      period: 'per week',
      detail: 'Every class in the timetable, plus a 10% discount on 1:1 sessions.',
    },
  ],
};

export const ptPricing = {
  heading: 'Personal training',
  note: 'All 1:1 and semi-private training starts with an assessment. Enquire through the form and a coach will find you a time.',
  items: [
    {
      name: 'Initial assessment',
      price: '$95',
      detail: '75 minutes. Movement screen, history, and a written plan. Credited back if you buy a pack that week.',
    },
    { name: '1:1 session', price: '$130', detail: '60 minutes, casual rate.' },
    { name: '1:1 ten-pack', price: '$1,150', detail: '$115 a session. Expires after 6 months.' },
    { name: 'Semi-private', price: '$75', detail: 'Per person, 60 minutes, two or three people.' },
    { name: 'Semi-private ten-pack', price: '$680', detail: '$68 per person, per session.' },
  ],
};

// ---------------------------------------------------------------------------
// FOUNDER + COACHES
// ---------------------------------------------------------------------------

export const founder = {
  name: 'Nadia Farrell',
  role: 'Founder and head coach',
  // Kept as paragraphs so the client can add or cut one without touching layout.
  story: [
    'Nadia spent six years as a strength and conditioning coach in university rowing, which is a sport that will happily break a shoulder and then ask the shoulder to do another twenty kilometres. Hers went in 2018.',
    'The rehab was the useful part. Working through it with a physiotherapist, then rebuilding with reformer work before she could load a barbell again, changed how she thought about training entirely — not as two separate worlds, one clinical and one athletic, but as one long continuum with a person somewhere along it.',
    'Ironbark opened in 2021 in a former joinery workshop on Sydenham Road, with eight reformers at one end and a lifting floor at the other. The name is the tree: dense, slow-growing, and almost impossible to burn. That is roughly the point.',
  ],
  credentials: [
    'ASCA Level 2 Strength and Conditioning Coach',
    'Polestar Pilates — Comprehensive Certification (Reformer, Mat, Studio)',
    'Cert IV in Fitness, AUSactive registered',
    'Six years strength and conditioning, Sydney university rowing program',
    'Pre and post-natal training certification (2022)',
  ],
};

export const coaches = [
  {
    name: 'Matthew Mackie',
    role: 'Strength coach',
    photo: '/images/coach-matthew.webp',
    bio: 'Matthew came out of powerlifting and coaches the barbell classes. He is unhurried about technique and will spend a whole block on your setup if the setup is the problem. ASCA Level 1, Cert IV in Fitness.',
  },
  {
    name: 'Timothy Walters',
    role: 'Reformer and mobility coach',
    photo: '/images/coach-timothy.jpg',
    bio: 'Timothy teaches most of the daytime reformer timetable and wrote the Mobility & Restore program. Comprehensive reformer certification, with additional training in working alongside physiotherapy referrals.',
  },
];

export const studioFacts = [
  { label: 'Opened', value: '2021' },
  { label: 'Reformers', value: '8' },
  { label: 'Largest class', value: '10 people' },
  { label: 'Coaches', value: '3' },
];

// ---------------------------------------------------------------------------
// ENQUIRY FORM
// ---------------------------------------------------------------------------

export const enquiryReasons = [
  'I am new and not sure where to start',
  'I have an injury or condition to work around',
  'I want to know which class suits me',
  'I am interested in 1:1 or semi-private training',
  'Pre or post-natal training',
  'Something else',
];

// ---------------------------------------------------------------------------
// GETTING HERE
// ---------------------------------------------------------------------------

export const gettingHere = [
  {
    heading: 'Train',
    body: 'Sydenham Station is a nine-minute walk. Marrickville Station is twelve minutes, along Illawarra Road then left onto Sydenham Road.',
  },
  {
    heading: 'Parking',
    body: 'Unrestricted street parking on Sydenham Road and Fitzroy Street outside of weekday morning peak. There are two marked spots in the driveway for 1:1 clients.',
  },
  {
    heading: 'Bike',
    body: 'A rack is bolted to the wall just inside the roller door. Bring your own lock.',
  },
  {
    heading: 'Finding the door',
    body: 'Ironbark is the black roller door at the rear of the Sydenham Road complex, past the joinery. Follow the driveway all the way to the end.',
  },
];

export const firstVisit = [
  'Arrive ten minutes early for your first class so a coach can walk you through the equipment.',
  'Grip socks are required on the reformers. They are $22 at the studio if you forget.',
  'Bring water. There is a filtered tap and a towel service at no cost.',
  'There is one shower, two changerooms, and lockers that take your own padlock.',
];

// ---------------------------------------------------------------------------
// IMAGE SLOTS
// ---------------------------------------------------------------------------
// Every image on the site is registered here. While `src` is empty the site
// renders a labelled placeholder telling you exactly what shot belongs there.
// To go live: drop the file into /public/images and set `src`.
// e.g. src: '/images/hero-reformer.jpg'

export type ImageSlotDef = {
  id: string;
  page: string;
  label: string;
  search: string;
  ratio: string; // any valid CSS aspect-ratio value
  src?: string;
  alt: string;
};

export const imageSlots: Record<string, ImageSlotDef> = {
  heroMain: {
    id: 'A1',
    page: 'Home — hero',
    label: 'Wide shot of the studio floor mid-class, reformers in a row',
    search: 'reformer pilates studio wide interior',
    ratio: '4 / 5',
    src: '/images/hero-studio.webp',
    alt: 'The reformer floor at Ironbark Studio',
  },
  homeStrength: {
    id: 'A2',
    page: 'Home — what we do',
    label: 'Close crop: hands on a loaded barbell, chalk, natural light',
    search: 'barbell hands chalk gym close up',
    ratio: '1 / 1',
    src: '/images/barbell-hands.jpg',
    alt: 'A lifter setting their grip on a loaded barbell',
  },
  homeReformer: {
    id: 'A3',
    page: 'Home — what we do',
    label: 'Single person on a reformer, side angle, coach in frame',
    search: 'pilates reformer instructor correcting form',
    ratio: '1 / 1',
    src: '/images/reformer-coaching.webp',
    alt: 'A coach guiding a client through reformer work',
  },
  homeBand: {
    id: 'A4',
    page: 'Home — full width band',
    label: 'Full-bleed horizontal: studio interior, empty, warm afternoon light',
    search: 'empty pilates studio interior natural light',
    ratio: '21 / 9',
    src: '/images/studio-band.avif',
    alt: 'The Ironbark studio floor between classes',
  },
  classesHeader: {
    id: 'B1',
    page: 'Classes — header',
    label: 'Overhead or high angle of a class in progress',
    search: 'group fitness class overhead view',
    ratio: '16 / 9',
    src: '/images/classes-kettlebell-group.png',
    alt: 'A small group strength class in progress',
  },
  founderPortrait: {
    id: 'C1',
    page: 'About — founder',
    label: 'Portrait of the founder, environmental, in the studio, looking to camera',
    search: 'female fitness trainer portrait studio',
    ratio: '3 / 4',
    src: '/images/founder-nadia.png',
    alt: 'Nadia Farrell at Ironbark Studio',
  },
  aboutStudio: {
    id: 'C2',
    page: 'About — studio story',
    label: 'Architectural detail: the roller door, brick, or the converted workshop shell',
    search: 'converted warehouse gym brick interior',
    ratio: '4 / 3',
    src: '/images/studio-brick-interior.jpg',
    alt: 'The converted joinery workshop that houses the studio',
  },
  aboutCoaching: {
    id: 'C3',
    page: 'About — coaching',
    label: 'Coach demonstrating a movement to one person, hands-on',
    search: 'personal trainer coaching client technique',
    ratio: '4 / 3',
    src: '/images/coach-client-session.jpg',
    alt: 'A coach demonstrating a movement',
  },
  bookHeader: {
    id: 'D1',
    page: 'Book — sidebar',
    label: 'Vertical: someone checking their phone in the studio foyer, relaxed',
    search: 'woman phone gym reception relaxed',
    ratio: '3 / 4',
    src: '/images/book-phone.png',
    alt: 'A member booking a class on their phone',
  },
  visitExterior: {
    id: 'E1',
    page: 'Contact — location',
    label: 'The studio entrance from the street, signage visible',
    search: 'boutique fitness studio entrance exterior',
    ratio: '3 / 2',
    src: '/images/studio-exterior.jpg',
    alt: 'The entrance to Ironbark Studio on Sydenham Road',
  },
};
