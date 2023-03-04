import { TimelineEntry } from "../models/timeline";
import goldman from "../assets/goldman-sachs.png";
import tda from "../assets/td-ameritrade.png";
import stevens from "../assets/stevens.png";
import orchard from "../assets/orchard.png";

export const TIMELINE: TimelineEntry[] = [
  {
    id: "tda",
    experience: "tda",
    icon: stevens,
    color: "red",
    startDate: new Date(Date.parse("01 May 2020")),
    endDate: new Date(Date.parse("31 August 2020")),
    title: "TD Ameritrade",
    ordinal: 0,
  },
  {
    id: "tda1",
    experience: "tda",
    color: "blue",
    startDate: new Date(Date.parse("01 June 2020")),
    endDate: new Date(Date.parse("31 October 2020")),
    title: "TD Ameritrade",
    icon: goldman,
    ordinal: 1,
  },
  {
    id: "tda2",
    experience: "tda",
    icon: tda,
    color: "green",
    startDate: new Date(Date.parse("01 March 2020")),
    endDate: new Date(Date.parse("31 May 2020")),
    title: "TD Ameritrade",
    ordinal: 1,
  },
];

export const MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30;
