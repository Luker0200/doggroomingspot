import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Charlene",
  lastName: "Luke",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "",
  avatar: "/images/profilepic.JPG",
  email: "doggroomingspot@gmail.com",
  phone: "(832) 275-2222",
  location: "", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const business = {
  name: "The Grooming Spot",
  tagline: "At Your Spot",
  description: "Professional mobile dog grooming services",
  owner: person.name,
  email: person.email,
  location: "Magnolia, Texas",
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/charlene_luke/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/charlene.luke.54738/",
  },
];

const home = {
  path: "/",
  image: "/favicon.ico",
  label: "Home",
  title: `The Grooming Spot`,
  description: ``,
  headline: <>The Grooming Spot - At Your Spot</>,
  featured: {
    display: false,
    title: <>Recent Grooming: <strong className="ml-4">Poodle</strong></>,
    href: "",
  },
  subline: (
    <>
      Servicing Magnolia, Woodlands, Tomball, Waller, Hockley, Pinehurst, and surrounding areas.
      <ul style={{ marginTop: '1rem', marginBottom: '1rem', paddingLeft: '2rem' }}>
        <li>Convenience</li>
        <li>Cage-free Grooming</li>
        <li>One on one experiences</li>
        <li>All breeds welcome</li>
        <li>Certified, Insured, and Experienced</li>
      </ul>
    </>
  ),
  buttons: {
    about: "About Us",
    services: "Rates & Services",
    appointment: "Book Appointment",
  },
};

const about = {
  path: "/about",
  label: "About Us",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: false,
    title: "Introduction",
    description: (
      <>
        Began operations in 2014. Transitioned to mobile grooming in 2025.
      </>
    ),
  },
  services: {
    display: false, // set to false to hide this section
    title: "The Grooming Spot",
    experiences: [ 
      {
        company: "The Grooming Spot",
        timeframe: "2014 - Present",
        role: "",
        achievements: [
          <>
            Began operations in 2014.
          </>,
          <>
            Transitioned to mobile grooming in 2025.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/gallery/company-photos/the-grooming-spot.jpg",
          //   alt: "Charlene",
          //   width: 16,
          //   height: 16,
          // },
        ],
      },
    ],
  },
  employee: {
    display: true, // set to false to hide this section
    title: "Meet Your Dog Groomer",
    description: (
      <>
        <h3>Charlene Luke, Owner</h3>
        <p>
          Hi! My name is Charlene. I have been grooming since 2010. I grew up with dogs and cats. I love all animals and have had horses, goats, chickens, rabbits, lizards, and frogs as pets. 🐾
        </p>
        <p>
          Prior to grooming I graduated from college and worked in the medical field as an Ophthalmic Technician. I decided to make dog grooming an official career in 2011. I opened my business in Magnolia that year shortly after completing the academy, where they taught all breed standards of grooming, safety, and dog behavior.
        </p>
        <p>
          I temporarily closed The Grooming Spot from approximately 2022 through mid-summer of 2025 while recovering from back and hand surgery. I am happy to be fully recovered and back to work doing what I love! 💛
        </p>
        <p>
          The business is now mobile.
        </p>
        <p>
          The Grooming Spot @ your spot! 😊 🐾
        </p>
      </>
    ),
    institutions: [
      {
        name: "Studied at Dog Grooming & Boarding School",
        description: <>Dog grooming and animal behavior.</>,
      },
      {
        name: "and Sam Houston State University",
        description: <>Psychology and Sociology.</>,
      },
      
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "How We Operate",
    skills: [
      {
        title: "Scheduling",
        description: <>I offer availability through the "software name" service that allows you to schedule appointments without contacting me.
        However, times listed on this service are limited. You may contact me directly through email or phone to schedule an appointment a more personal timeframe.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/appointmentphoto1AI.png",
            alt: "schedule appointment",
            width: 16,
            height: 9,
          },
          {
            src: "/images/appointmentphoto2AI.png",
            alt: "schedule appointment",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "The Grooming Spot at Your Spot",
        description: <>With a mobile grooming trailer, I bring my shop directly to your home.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/trailer1test.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const appointment = {
  path: "/appointment",
  label: "Appointments",
  title: `Request a Grooming – ${business.name}`,
  description: `Schedule your dog grooming appointment with ${business.name}`,
};

const services = {
  path: "/services",
  label: "Rates & Services",
  title: `Rates & Services – ${business.name}`,
  description: `Professional dog grooming services and pricing at ${business.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Photo Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/ai-gen/ai-dog-1.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ai-gen/ai-dog-2.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ai-gen/ai-dog-3.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ai-gen/ai-dog-4.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ai-gen/ai-dog-5.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ai-gen/ai-dog-6.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ai-gen/ai-dog-7.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ai-gen/ai-dog-8.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, business, social, newsletter, home, about, appointment, services, gallery };
