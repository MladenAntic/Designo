import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const navLinks = [
  {
    href: "/company",
    label: "Our Company",
  },
  {
    href: "/locations",
    label: "Locations",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const serviceCards = [
  {
    uniqueClassname: "web-design",
    serviceName: "Web Design",
    link: "/web-design",
  },
  {
    uniqueClassname: "app-design",
    serviceName: "App Design",
    link: "/app-design",
  },
  {
    uniqueClassname: "graphic-design",
    serviceName: "Graphic Design",
    link: "/graphic-design",
  },
];

const aboutCards = [
  {
    image: "/passionate.svg",
    title: "Passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    image: "/resourceful.svg",
    title: "Resourceful",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    image: "/friendly.svg",
    title: "Friendly",
    description:
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    Icon: FaFacebookSquare,
  },
  {
    href: "https://youtube.com",
    Icon: FaYoutube,
  },
  {
    href: "https://twitter.com",
    Icon: FaTwitter,
  },
  {
    href: "https://pinterest.com",
    Icon: FaPinterest,
  },
  {
    href: "https://instagram.com",
    Icon: FaInstagram,
  },
];

const webDesignProjects = [
  {
    image: "/audiophile.png",
    title: "Audiophile",
    description:
      "Audiophile is a high-end audio brand with a beautiful landing page",
  },
  {
    image: "/property-rentals.png",
    title: "Property Rentals",
    description:
      "A property rental website with a clean and modern design. Includes a search function and a map view.",
  },
  {
    image: "/photon.png",
    title: "Photon",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    image: "/builder.png",
    title: "Builder",
    description:
      "Connects users with local contractors based on their location",
  },
  {
    image: "/blogr.png",
    title: "Blogr",
    description:
      "Blogr is a platform for creating an online blog or publication",
  },
  {
    image: "/bookmark-page.png",
    title: "Bookmark",
    description:
      "Bookmark is a website that allows users to manage their bookmarks in one place.",
  },
];

const appDesignProjects = [
  {
    image: "/airfilter.png",
    title: "Airfilter",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    image: "/eyecam.png",
    title: "Eyecam",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    image: "/devflow.png",
    title: "Devflow",
    description:
      "A platform that helps developers manage their projects and tasks.",
  },
  {
    image: "/filmpire.png",
    title: "Filmpire",
    description:
      "A movie app for movie lovers. Includes a landing page and a movie page with a trailer and a description.",
  },
  {
    image: "/password-generator.png",
    title: "Password Generator",
    description:
      "A password generator that creates a secure password for you. Includes a copy to clipboard button.",
  },
  {
    image: "/url-shortener.png",
    title: "URL Shortener",
    description:
      "A URL shortener that shortens your long links into a shorter version. Includes a copy to clipboard button.",
  },
];

const graphicDesignProjects = [
  {
    image: "/tim-brown.png",
    title: "Tim Brown",
    description:
      "A book cover designed for Tim Brown’s new release, ‘Change’",
  },
  {
    image: "/boxed-water.png",
    title: "Boxed Water",
    description:
      "A simple packaging concept made for Boxed Water",
  },
  {
    image: "/science.png",
    title: "Science",
    description:
      "A poster made in collaboration with the Federal Art Project",
  },
]

const locations = [
  {
    image: "/canada.svg",
    title: "Canada",
  },
  {
    image: "/australia.svg",
    title: "Australia",
  },
  {
    image: "/united-kingdom.svg",
    title: "United Kingdom",
  },
]

export {
  serviceCards,
  aboutCards,
  socialLinks,
  webDesignProjects,
  appDesignProjects,
  graphicDesignProjects,
  locations,
};
