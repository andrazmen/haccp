import { nanoid } from "nanoid";
import consultingImg from "./assets/consulting.svg";
import haccpImg from "./assets/haccp.svg";
import allergensImg from "./assets/labeling.svg";
import declarationImg from "./assets/declaration.svg";
import samplingImg from "./assets/sampling.svg";
import inspectionImg from "./assets/inspection.svg";
import hygieneImg from "./assets/hygiene.svg";
import mentoringImg from "./assets/mentoring.svg";
import trainingImg from "./assets/certification.svg";
import vfImg from "./assets/vf.png";
import nlzohImg from "./assets/nlzoh.svg";
import eurofinsImg from "./assets/eurofins.png";

export const links = [
  { id: nanoid(), href: "#home", key: "nav.home" },
  { id: nanoid(), href: "#products", key: "nav.products" },
  { id: nanoid(), href: "#about", key: "nav.about" },
  { id: nanoid(), href: "#contact", key: "nav.contact" },
];

export const products = [
  {
    id: nanoid(),
    img: consultingImg,
    title: "products.consulting.title",
    text: "products.consulting.description",
  },
  {
    id: nanoid(),
    img: haccpImg,
    title: "products.haccp.title",
    text: "products.haccp.description",
  },
  {
    id: nanoid(),
    img: allergensImg,
    title: "products.allergens.title",
    text: "products.allergens.description",
  },
  {
    id: nanoid(),
    img: declarationImg,
    title: "products.declaration.title",
    text: "products.declaration.description",
  },
  {
    id: nanoid(),
    img: samplingImg,
    title: "products.sampling.title",
    text: "products.sampling.description",
  },
  {
    id: nanoid(),
    img: inspectionImg,
    title: "products.inspection_support.title",
    text: "products.inspection_support.description",
  },
  {
    id: nanoid(),
    img: hygieneImg,
    title: "products.hygiene_sanitation.title",
    text: "products.hygiene_sanitation.description",
  },
  {
    id: nanoid(),
    img: trainingImg,
    title: "products.training.title",
    text: "products.training.description",
  },
  {
    id: nanoid(),
    img: mentoringImg,
    title: "products.mentoring.title",
    text: "products.mentoring.description",
  },
];

export const partners = [
  {
    id: nanoid(),
    img: vfImg,
  },
  {
    id: nanoid(),
    img: nlzohImg,
  },
  {
    id: nanoid(),
    img: eurofinsImg,
  },
];
