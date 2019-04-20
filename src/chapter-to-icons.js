import i from "./icon-list";
import n from "./chapter-list";

const chapters = [
  { name: n.SONNIES_EDGE, icons: [i.HEART, i.CROSS, i.SNAKE] },
  { name: n.THREE_ROBOTS, icons: [i.ONEEYEDSKULL, i.PYRAMID, i.HAMBURGER] },
  { name: n.THE_WITNESS, icons: [i.OUROBOROS, i.MASK, i.EYE] },
  { name: n.SUITS, icons: [i.MUG, i.BARN, i.COW] },
  { name: n.SUCKER_OF_SOULS, icons: [i.CAT, i.CROSS, i.SPLITSKULL] },
  {
    name: n.WHEN_THE_YOGURT_TOOK_OVER,
    icons: [i.CLOUDMOON, i.PLANTPOT, i.STRAWBERRY]
  },
  { name: n.BEYOND_THE_AQUILA_RIFT, icons: [i.PENIS, i.BOX, i.SKULL1] },
  { name: n.GOOD_HUNTING, icons: [i.HEART, i.COG, i.FOX] },
  { name: n.THE_DUMP, icons: [i.ZIPPO, i.CROSS, i.JELLY] },
  { name: n.SHAPE_SHIFTERS, icons: [i.DOGTAGS, i.CROSS, i.MOON] },
  { name: n.HELPING_HAND, icons: [i.HEART, i.REALSKULL, i.TREE] },
  { name: n.FISH_NIGHT, icons: [i.MOONSKY, i.ROADSIGN, i.HOOK] },
  { name: n.LUCKY_13, icons: [i.HEART2, i.CROSS, i.HORSESHOE] },
  { name: n.ZIMA_BLUE, icons: [i.SQUARE, i.SQUARE, i.SQUARE] },
  { name: n.BLINDSPOT, icons: [i.DEMON, i.SKULLANDBONES, i.THUMBSUP] },
  { name: n.ICE_AGE, icons: [i.PLUG, i.ICECUBE, i.MUSHROOMCLOUD] },
  { name: n.ALTERNATE_HISTORIES, icons: [i.CROSS, i.CROSS, i.CLOCK] },
  { name: n.SECRET_WAR, icons: [i.REALSKULL, i.REALSKULL, i.STAR] }
];

const getIconsFromChapter = chapter =>
  chapters.find(({ name }) => name.toLowerCase() === chapter.toLowerCase());

export default getIconsFromChapter;
