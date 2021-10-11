import fireType from "./Assets/Images/fireType.png";

const TypeData = [
  {
    id: 1,
    name: "fire",
    image: fireType,
    attack: {
      strong: ["grass", "steel", "bug", "ice"],
      weak: ["rock", "water", "fire", "dragon"],
      noEffect: [],
    },
    defense: {
      weakness: ["water", "rock", "ground"],
      resist: ["fire", "grass", "ice", "steel"],
      immune: [],
    },
  },
  {
    id: 2,
    name: "normal",
    attack: {
      strong: [],
      weak: ["rock", "steel"],
      noEffect: ["ghost"],
    },
    defense: {
      weakness: ["fighting"],
      resist: [],
      immune: ["ghost"],
    },
  },
  {
    id: 3,
    name: "water",
    attack: {
      strong: ["fire", "ground", "rock"],
      weak: ["water", "grass", "dragon"],
      noEffect: [],
    },
    defense: {
      weakness: ["electric", "grass"],
      resist: ["fire", "water", "ice"],
      immune: [],
    },
  },
  {
    id: 4,
    name: "electric",
    attack: {
      strong: ["water", "flying"],
      weak: ["electric", "grass", "dragon"],
      noEffect: ["ground"],
    },
    defense: {
      weakness: ["ground"],
      resist: ["flying", "steel", "electric"],
      immune: [],
    },
  },
  {
    id: 5,
    name: "grass",
    attack: {
      strong: ["rock", "ground", "water"],
      weak: ["fire", "ice", "poison", "bug", "flying", "dragon", "steel"],
      noEffect: [],
    },
    defense: {
      weakness: ["fire", "bug", "poison", "flying", "ice"],
      resist: ["grass", "water", "electric", "ground"],
      immune: [],
    },
  },
  {
    id: 6,
    name: "ice",
    attack: {
      strong: ["grass", "ground", "flying", "dragon"],
      weak: ["fire", "water", "ice", "steel"],
      noEffect: [],
    },
    defense: {
      weakness: ["fighting", "rock", "steel", "fire"],
      resist: ["ice"],
      immune: [],
    },
  },
  {
    id: 7,
    name: "fighting",
    attack: {
      strong: ["ice", "steel", "dark", "normal", "rock"],
      weak: ["flying", "poison", "psychic", "bug", "fairy"],
      noEffect: ["ghost"],
    },
    defense: {
      weakness: ["fairy", "flying", "psychic"],
      resist: ["rock", "bug", "dark"],
      immune: [],
    },
  },
  {
    id: 8,
    name: "flying",
    attack: {
      strong: ["fighting", "bug", "grass"],
      weak: ["rock", "steel", "electric"],
      noEffect: [],
    },
    defense: {
      weakness: ["rock", "electric", "ice"],
      resist: ["fighting", "bug", "fairy"],
      immune: ["ground"],
    },
  },
  {
    id: 9,
    name: "poison",
    attack: {
      strong: ["fairy", "grass"],
      weak: ["poison", "ground", "rock", "ghost"],
      noEffect: ["steel"],
    },
    defense: {
      weakness: ["ground", "psychic"],
      resist: ["fighting", "poison", "grass", "fairy"],
      immune: [],
    },
  },
  {
    id: 10,
    name: "ground",
    attack: {
      strong: ["poison", "rock", "steel", "fire", "electric"],
      weak: ["bug", "grass"],
      noEffect: ["flying"],
    },
    defense: {
      weakness: ["water", "grass", "ice"],
      resist: ["poison", "rock", "steel", "fire"],
      immune: ["electric"],
    },
  },
  {
    id: 11,
    name: "rock",
    attack: {
      strong: ["ice", "flying", "bug", "fire"],
      weak: ["fighting", "ground", "steel"],
      noEffect: [],
    },
    defense: {
      weakness: ["grass", "water", "fighting", "ground", "steel"],
      resist: ["normal", "flying", "poison", "fire"],
      immune: [],
    },
  },
  {
    id: 12,
    name: "bug",
    attack: {
      strong: ["psychic", "dark"],
      weak: ["fighting", "ghost", "poison", "fling", "steel"],
      noEffect: [],
    },
    defense: {
      weakness: ["fire", "flying", "rock"],
      resist: ["fighting", "ground", "grass"],
      immune: [],
    },
  },
  {
    id: 13,
    name: "ghost",
    attack: {
      strong: ["psychic", "ghost"],
      weak: ["dark"],
      noEffect: ["normal"],
    },
    defense: {
      weakness: ["ghost", "dark"],
      resist: ["poison", "bug"],
      immune: ["normal", "fighting"],
    },
  },
  {
    id: 14,
    name: "psychic",
    attack: {
      strong: ["fighting", "poison"],
      weak: ["psychic", "steel"],
      noEffect: ["dark"],
    },
    defense: {
      weakness: ["fire", "flying", "rock"],
      resist: ["fighting", "ground", "grass"],
      immune: [],
    },
  },
  {
    id: 15,
    name: "dark",
    attack: {
      strong: ["psychic", "ghost"],
      weak: ["fighting", "dark", "fairy"],
      noEffect: [],
    },
    defense: {
      weakness: ["fighting", "bug", "fairy"],
      resist: ["ghost", "psychic", "dark"],
      immune: [],
    },
  },
  {
    id: 16,
    name: "fairy",
    attack: {
      strong: ["fighting", "dragon", "dark"],
      weak: ["poison", "steel", "fire"],
      noEffect: [],
    },
    defense: {
      weakness: ["poison", "steel"],
      resist: ["fighting", "bug", "dark"],
      immune: ["dragon"],
    },
  },
  {
    id: 17,
    name: "steel",
    attack: {
      strong: ["rock", "ice", "fairy"],
      weak: ["steel", "electric", "water", "fire"],
      noEffect: [],
    },
    defense: {
      weakness: ["fighting", "ground", "fire"],
      resist: [
        "normal",
        "flying",
        "rock",
        "bug",
        "steel",
        "grass",
        "psychic",
        "ice",
        "dragon",
        "fairy",
      ],
      immune: ["poison"],
    },
  },
  {
    id: 18,
    name: "dragon",
    attack: {
      strong: ["dragon"],
      weak: ["steel"],
      noEffect: ["fairy"],
    },
    defense: {
      weakness: ["dragon", "ice", "fairy"],
      resist: ["fire", "water", "grass", "electric"],
      immune: [],
    },
  },
];

export default TypeData;
