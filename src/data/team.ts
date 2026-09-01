import type { ImageMetadata } from "astro";

import jasPahal from "../assets/team/jas-pahal.webp";
import garySidhu from "../assets/team/gary-sidhu.webp";
import edwardWalker from "../assets/team/edward-walker.webp";
import kerry from "../assets/team/kerry.webp";
import mandy from "../assets/team/mandy.webp";
import lindsay from "../assets/team/lindsay.webp";
import maddie from "../assets/team/maddie.webp";
import tori from "../assets/team/tori.webp";
import cheryl from "../assets/team/cheryl.webp";
import emberlyn from "../assets/team/emberlyn.webp";
import gavin from "../assets/team/gavin.webp";
import karlee from "../assets/team/karlee.webp";
import michelle from "../assets/team/michelle.webp";
import caitlin from "../assets/team/caitlin.webp";
import jaimie from "../assets/team/jaimie.webp";
import jayden from "../assets/team/jayden.webp";
import selena from "../assets/team/selena.webp";

export type TeamMember = {
  name: string;
  role: string;
  image: ImageMetadata;
  alt: string;
  bio?: string[];
};

export const dentists: TeamMember[] = [
  {
    name: "Dr. Jas Pahal",
    role: "Dentist",
    image: jasPahal,
    alt: "Portrait of Dr. Jas Pahal",
    bio: [
      "Dr. Pahal was born and raised in Prince George. He studied Biology at the University of British Columbia, completed a Master of Science in Community Health at the University of Northern British Columbia, and graduated from dental school at the University of Manitoba in 2010.",
      "After practising in Winnipeg and Australia, he returned to Prince George with his family in 2013. His published Hart Dental biography emphasizes patient-focused care, long-term relationships and a lasting commitment to the community."
    ]
  },
  {
    name: "Dr. Gary Sidhu",
    role: "Dentist",
    image: garySidhu,
    alt: "Portrait of Dr. Gary Sidhu",
    bio: [
      "Dr. Sidhu was born and raised in Vancouver and graduated from the UCLA School of Dentistry in 2013.",
      "His published Hart Dental biography describes a broad general-dentistry practice that includes oral health care, implants, wisdom teeth, orthodontics and emergency care. Outside the office, he enjoys hiking, biking, comedy, food and time with friends and family."
    ]
  },
  {
    name: "Dr. Edward Walker",
    role: "Dentist",
    image: edwardWalker,
    alt: "Portrait of Dr. Edward Walker"
  }
];

export const team: TeamMember[] = [
  { name: "Kerry", role: "Hygienist", image: kerry, alt: "Portrait of Kerry, hygienist" },
  { name: "Mandy", role: "Hygienist", image: mandy, alt: "Portrait of Mandy, hygienist" },
  { name: "Lindsay", role: "Hygienist", image: lindsay, alt: "Portrait of Lindsay, hygienist" },
  { name: "Maddie", role: "Hygienist", image: maddie, alt: "Portrait of Maddie, hygienist" },
  { name: "Tori", role: "Hygienist", image: tori, alt: "Portrait of Tori, hygienist" },
  { name: "Cheryl", role: "Certified Dental Assistant", image: cheryl, alt: "Portrait of Cheryl, certified dental assistant" },
  { name: "Emberlyn", role: "Certified Dental Assistant", image: emberlyn, alt: "Portrait of Emberlyn, certified dental assistant" },
  { name: "Gavin", role: "Certified Dental Assistant", image: gavin, alt: "Portrait of Gavin, certified dental assistant" },
  { name: "Karlee", role: "Certified Dental Assistant", image: karlee, alt: "Portrait of Karlee, certified dental assistant" },
  { name: "Michelle", role: "Certified Dental Assistant", image: michelle, alt: "Portrait of Michelle, certified dental assistant" },
  { name: "Caitlin", role: "Patient Coordinator / Chairside Assistant", image: caitlin, alt: "Portrait of Caitlin, patient coordinator and chairside assistant" },
  { name: "Jaimie", role: "Patient Coordinator", image: jaimie, alt: "Portrait of Jaimie, patient coordinator" },
  { name: "Jayden", role: "Patient Coordinator / Chairside Assistant", image: jayden, alt: "Portrait of Jayden, patient coordinator and chairside assistant" },
  { name: "Selena", role: "Patient Coordinator", image: selena, alt: "Portrait of Selena, patient coordinator" }
];
