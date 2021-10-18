import React, { useState, useEffect } from "react";
import TypeData from "./TypeData.js";
import fireType from "./Assets/Images/fireType.png";
import grassType from "./Assets/Images/grassType.png";
import waterType from "./Assets/Images/waterType.png";
import normalType from "./Assets/Images/normalType.png";
import fightingType from "./Assets/Images/fightingType.png";
import flyingType from "./Assets/Images/flyingType.png";
import bugType from "./Assets/Images/bugType.png";
import iceType from "./Assets/Images/iceType.png";
import poisonType from "./Assets/Images/poisonType.png";
import ghostType from "./Assets/Images/ghostType.png";
import dragonType from "./Assets/Images/dragonType.png";
import groundType from "./Assets/Images/groundType.png";
import steelType from "./Assets/Images/steelType.png";
import electricType from "./Assets/Images/electricType.png";
import darkType from "./Assets/Images/darkType.png";
import rockType from "./Assets/Images/rockType.png";
import psychicType from "./Assets/Images/psychicType.png";
import fairyType from "./Assets/Images/fairyType.png";

const TypeCalc = () => {
  const [targetType1, setTargetType1] = useState([]);
  const [targetType2, setTargetType2] = useState([]);
  const [strongAtks, setStrongAtks] = useState([]);
  const [weakAtks, setWeakAtks] = useState([]);
  const [noEffectAtks, setNoEffectAtks] = useState([]);
  const [weaknessDef, setWeaknessDef] = useState([]);
  const [resistDef, setResistDef] = useState([]);
  const [immuneDef, setImmuneDef] = useState([]);

  // const grassImage = <img id="grass" alt="grassType" src={grassType} />;
  // const fireImage = <img id="fire" alt="fireType" src={fireType} />;
  // const waterImage = <img id="water" alt="waterType" src={waterType} />;
  // const bugImage = <img id="bug" alt="bugType" src={bugType} />;
  // const normalImage = <img id="normal" alt="normalType" src={normalType} />;
  // const psychicImage = <img id="bug" alt="psychicType" src={psychicType} />;
  // const fightingImage = (
  //   <img id="fighting" alt="fightingType" src={fightingType} />
  // );
  // const ghostImage = <img id="ghost" alt="ghostType" src={ghostType} />;
  // const poisonImage = <img id="poison" alt="poisonType" src={poisonType} />;
  // const dragonImage = <img id="dragon" alt="dragonType" src={dragonType} />;
  // const groundImage = <img id="ground" alt="groundType" src={groundType} />;
  // const steelImage = <img id="steel" alt="steelType" src={steelType} />;
  // const electricImage = <img alt="electricType" src={electricType} />;
  // const darkImage = <img alt="darkType" src={darkType} />;
  // const rockImage = <img alt="rockType" src={rockType} />;
  // const fairyImage = <img alt="fairyType" src={fairyType} />;
  // const iceImage = <img alt="iceType" src={iceType} />;
  // const flyingImage = <img alt="flyingType" src={flyingType} />;
  // NAMES
  const typeNameArr = [];
  function renderTargetType1(props) {
    if (props.name === "grass") {
      typeNameArr.push(<img id="grass" alt="grass" src={grassType} />);
    }
    if (props.name === "fire") {
      typeNameArr.push(<img id="fire" alt="fireType" src={fireType} />);
    }
    if (props.name === "water") {
      typeNameArr.push(<img id="water" alt="waterType" src={waterType} />);
    }
    if (props.name === "bug") {
      typeNameArr.push(<img id="bug" alt="bugType" src={bugType} />);
    }
    if (props.name === "normal") {
      typeNameArr.push(<img id="normal" alt="normalType" src={normalType} />);
    }
    if (props.name === "psychic") {
      typeNameArr.push(
        <img id="psychic" alt="psychicType" src={psychicType} />
      );
    }
    if (props.name === "fighting") {
      typeNameArr.push(
        <img id="fighting" alt="fightingType" src={fightingType} />
      );
    }
    if (props.name === "ghost") {
      typeNameArr.push(<img id="ghost" alt="ghostType" src={ghostType} />);
    }
    if (props.name === "poison") {
      typeNameArr.push(<img id="poison" alt="poisonType" src={poisonType} />);
    }
    if (props.name === "dragon") {
      typeNameArr.push(<img id="dragon" alt="dragonType" src={dragonType} />);
    }
    if (props.name === "ground") {
      typeNameArr.push(<img id="ground" alt="groundType" src={groundType} />);
    }
    if (props.name === "steel") {
      typeNameArr.push(<img id="steel" alt="steelType" src={steelType} />);
    }
    if (props.name === "electric") {
      typeNameArr.push(
        <img id="electric" alt="electricType" src={electricType} />
      );
    }
    if (props.name === "dark") {
      typeNameArr.push(<img id="dark" alt="darkType" src={darkType} />);
    }
    if (props.name === "rock") {
      typeNameArr.push(<img id="rock" alt="rockType" src={rockType} />);
    }
    if (props.name === "fairy") {
      typeNameArr.push(<img id="fairy" alt="fairyType" src={fairyType} />);
    }
    if (props.name === "ice") {
      typeNameArr.push(<img id="ice" alt="iceType" src={iceType} />);
    }
    if (props.name === "flying") {
      typeNameArr.push(<img id="flying" alt="flyingType" src={flyingType} />);
    }
    setTargetType1(typeNameArr);
  }
  function renderTargetType2(props) {
    if (props.name === "grass") {
      typeNameArr.push(<img alt="grassType" src={grassType} />);
    }
    if (props.name === "fire") {
      typeNameArr.push(<img alt="fireType" src={fireType} />);
    }
    if (props.name === "water") {
      typeNameArr.push(<img alt="waterType" src={waterType} />);
    }
    if (props.name === "bug") {
      typeNameArr.push(<img alt="bugType" src={bugType} />);
    }
    if (props.name === "normal") {
      typeNameArr.push(<img alt="normalType" src={normalType} />);
    }
    if (props.name === "psychic") {
      typeNameArr.push(<img alt="psychicType" src={psychicType} />);
    }
    if (props.name === "fighting") {
      typeNameArr.push(<img alt="fightingType" src={fightingType} />);
    }
    if (props.name === "ghost") {
      typeNameArr.push(<img alt="ghostType" src={ghostType} />);
    }
    if (props.name === "poison") {
      typeNameArr.push(<img alt="poisonType" src={poisonType} />);
    }
    if (props.name === "dragon") {
      typeNameArr.push(<img alt="dragonType" src={dragonType} />);
    }
    if (props.name === "ground") {
      typeNameArr.push(<img alt="groundType" src={groundType} />);
    }
    if (props.name === "steel") {
      typeNameArr.push(<img alt="steelType" src={steelType} />);
    }
    if (props.name === "electric") {
      typeNameArr.push(<img alt="electricType" src={electricType} />);
    }
    if (props.name === "dark") {
      typeNameArr.push(<img alt="darkType" src={darkType} />);
    }
    if (props.name === "rock") {
      typeNameArr.push(<img alt="rockType" src={rockType} />);
    }
    if (props.name === "fairy") {
      typeNameArr.push(<img alt="fairyType" src={fairyType} />);
    }
    if (props.name === "ice") {
      typeNameArr.push(<img alt="iceType" src={iceType} />);
    }
    if (props.name === "flying") {
      typeNameArr.push(<img alt="flyingType" src={flyingType} />);
    }
    setTargetType2(typeNameArr);
  }

  let strongAtkType = [];

  const strongArr = [];

  function renderStrong(props) {
    if (props.attack.strong.includes("grass")) {
      strongArr.push(<img id="grass" alt="grassType" src={grassType} />);
    }
    if (props.attack.strong.includes("fire")) {
      strongArr.push(props.name.image);
      console.log(props);
    }
    if (props.attack.strong.includes("water")) {
      strongArr.push(<img id="water" alt="waterType" src={waterType} />);
    }
    if (props.attack.strong.includes("bug")) {
      strongArr.push(<img id="bug" alt="bugType" src={bugType} />);
    }
    if (props.attack.strong.includes("normal")) {
      strongArr.push(<img id="normal" alt="normalType" src={normalType} />);
    }
    if (props.attack.strong.includes("psychic")) {
      strongArr.push(<img id="bug" alt="psychicType" src={psychicType} />);
    }
    if (props.attack.strong.includes("fighting")) {
      strongArr.push(
        <img id="fighting" alt="fightingType" src={fightingType} />
      );
    }
    if (props.attack.strong.includes("ghost")) {
      strongArr.push(<img id="ghost" alt="ghostType" src={ghostType} />);
    }
    if (props.attack.strong.includes("poison")) {
      strongArr.push(<img id="poison" alt="poisonType" src={poisonType} />);
    }
    if (props.attack.strong.includes("dragon")) {
      strongArr.push(<img id="dragon" alt="dragonType" src={dragonType} />);
    }
    if (props.attack.strong.includes("ground")) {
      strongArr.push(<img id="ground" alt="groundType" src={groundType} />);
    }
    if (props.attack.strong.includes("steel")) {
      strongArr.push(<img id="steel" alt="steelType" src={steelType} />);
    }
    if (props.attack.strong.includes("electric")) {
      strongArr.push(<img alt="electricType" src={electricType} />);
    }
    if (props.attack.strong.includes("dark")) {
      strongArr.push(<img alt="darkType" src={darkType} />);
    }
    if (props.attack.strong.includes("rock")) {
      strongArr.push(<img alt="rockType" src={rockType} />);
    }
    if (props.attack.strong.includes("fairy")) {
      strongArr.push(<img alt="fairyType" src={fairyType} />);
    }
    if (props.attack.strong.includes("ice")) {
      strongArr.push(<img alt="iceType" src={iceType} />);
    }
    if (props.attack.strong.includes("flying")) {
      strongArr.push(<img alt="flyingType" src={flyingType} />);
    }
    setStrongAtks(strongArr);
  }
  let weakArr = [];
  function renderWeak(props) {
    if (props.attack.weak.includes("grass")) {
      weakArr.push(<img alt="grassType" src={grassType} />);
    }
    if (props.attack.weak.includes("fire")) {
      weakArr.push(<img alt="fireType" src={fireType} />);
    }
    if (props.attack.weak.includes("water")) {
      weakArr.push(<img alt="waterType" src={waterType} />);
    }
    if (props.attack.weak.includes("bug")) {
      weakArr.push(<img alt="bugType" src={bugType} />);
    }
    if (props.attack.weak.includes("normal")) {
      weakArr.push(<img alt="normalType" src={normalType} />);
    }
    if (props.attack.weak.includes("psychic")) {
      weakArr.push(<img alt="psychicType" src={psychicType} />);
    }
    if (props.attack.weak.includes("fighting")) {
      weakArr.push(<img alt="fightingType" src={fightingType} />);
    }
    if (props.attack.weak.includes("ghost")) {
      weakArr.push(<img alt="ghostType" src={ghostType} />);
    }
    if (props.attack.weak.includes("poison")) {
      weakArr.push(<img alt="poisonType" src={poisonType} />);
    }
    if (props.attack.weak.includes("dragon")) {
      weakArr.push(<img alt="dragonType" src={dragonType} />);
    }
    if (props.attack.weak.includes("ground")) {
      weakArr.push(<img alt="groundType" src={groundType} />);
    }
    if (props.attack.weak.includes("steel")) {
      weakArr.push(<img alt="steelType" src={steelType} />);
    }
    if (props.attack.weak.includes("electric")) {
      weakArr.push(<img alt="electricType" src={electricType} />);
    }
    if (props.attack.weak.includes("dark")) {
      weakArr.push(<img alt="darkType" src={darkType} />);
    }
    if (props.attack.weak.includes("rock")) {
      weakArr.push(<img alt="rockType" src={rockType} />);
    }
    if (props.attack.weak.includes("fairy")) {
      weakArr.push(<img alt="fairyType" src={fairyType} />);
    }
    if (props.attack.weak.includes("ice")) {
      weakArr.push(<img alt="iceType" src={iceType} />);
    }
    if (props.attack.weak.includes("flying")) {
      weakArr.push(<img alt="flyingType" src={flyingType} />);
    }
    setWeakAtks(weakArr);
  }
  const noEffectArr = [];
  function renderNoEffect(props) {
    if (props.attack.noEffect.includes("grass")) {
      noEffectArr.push(<img alt="grassType" src={grassType} />);
    }
    if (props.attack.noEffect.includes("fire")) {
      noEffectArr.push(<img alt="fireType" src={fireType} />);
    }
    if (props.attack.noEffect.includes("water")) {
      noEffectArr.push(<img alt="waterType" src={waterType} />);
    }
    if (props.attack.noEffect.includes("bug")) {
      noEffectArr.push(<img alt="bugType" src={bugType} />);
    }
    if (props.attack.noEffect.includes("normal")) {
      noEffectArr.push(<img alt="normalType" src={normalType} />);
    }
    if (props.attack.noEffect.includes("psychic")) {
      noEffectArr.push(<img alt="psychicType" src={psychicType} />);
    }
    if (props.attack.noEffect.includes("fighting")) {
      noEffectArr.push(<img alt="fightingType" src={fightingType} />);
    }
    if (props.attack.noEffect.includes("ghost")) {
      noEffectArr.push(<img alt="ghostType" src={ghostType} />);
    }
    if (props.attack.noEffect.includes("poison")) {
      noEffectArr.push(<img alt="poisonType" src={poisonType} />);
    }
    if (props.attack.noEffect.includes("dragon")) {
      noEffectArr.push(<img alt="dragonType" src={dragonType} />);
    }
    if (props.attack.noEffect.includes("ground")) {
      noEffectArr.push(<img alt="groundType" src={groundType} />);
    }
    if (props.attack.noEffect.includes("steel")) {
      noEffectArr.push(<img alt="steelType" src={steelType} />);
    }
    if (props.attack.noEffect.includes("electric")) {
      noEffectArr.push(<img alt="electricType" src={electricType} />);
    }
    if (props.attack.noEffect.includes("dark")) {
      noEffectArr.push(<img alt="darkType" src={darkType} />);
    }
    if (props.attack.noEffect.includes("rock")) {
      noEffectArr.push(<img alt="rockType" src={rockType} />);
    }
    if (props.attack.noEffect.includes("fairy")) {
      noEffectArr.push(<img alt="fairyType" src={fairyType} />);
    }
    if (props.attack.noEffect.includes("ice")) {
      noEffectArr.push(<img alt="iceType" src={iceType} />);
    }
    if (props.attack.noEffect.includes("flying")) {
      noEffectArr.push(<img alt="flyingType" src={flyingType} />);
    }
    setNoEffectAtks(noEffectArr);
  }
  // DEFENSE
  const weaknessArr = [];
  function renderWeakness(props, id, image, name, attack, defense) {
    if (props.defense.weakness.includes("grass")) {
      console.log(TypeData[4]);
      weaknessArr.push(
        <img id="grass" alt="grassType" src={TypeData[4].image} />
      );
    }
    if (props.defense.weakness.includes("fire")) {
      weaknessArr.push(<img id="fire" alt="fireType" src={fireType} />);
    }
    if (props.defense.weakness.includes("water")) {
      weaknessArr.push(<img id="water" alt="waterType" src={waterType} />);
    }
    if (props.defense.weakness.includes("bug")) {
      weaknessArr.push(<img id="bug" alt="bugType" src={bugType} />);
    }
    if (props.defense.weakness.includes("normal")) {
      weaknessArr.push(<img id="normal" alt="normalType" src={normalType} />);
    }
    if (props.defense.weakness.includes("psychic")) {
      weaknessArr.push(
        <img id="psychic" alt="psychicType" src={psychicType} />
      );
    }
    if (props.defense.weakness.includes("fighting")) {
      weaknessArr.push(
        <img id="fighting" alt="fightingType" src={fightingType} />
      );
    }
    if (props.defense.weakness.includes("ghost")) {
      weaknessArr.push(<img id="ghost" alt="ghostType" src={ghostType} />);
    }
    if (props.defense.weakness.includes("poison")) {
      weaknessArr.push(<img id="poison" alt="poisonType" src={poisonType} />);
    }
    if (props.defense.weakness.includes("dragon")) {
      weaknessArr.push(<img id="dragon" alt="dragonType" src={dragonType} />);
    }
    if (props.defense.weakness.includes("ground")) {
      weaknessArr.push(<img id="ground" alt="groundType" src={groundType} />);
    }
    if (props.defense.weakness.includes("steel")) {
      weaknessArr.push(<img id="steel" alt="steelType" src={steelType} />);
    }
    if (props.defense.weakness.includes("electric")) {
      weaknessArr.push(
        <img id="electric" alt="electricType" src={electricType} />
      );
    }
    if (props.defense.weakness.includes("dark")) {
      weaknessArr.push(<img id="dark" alt="darkType" src={darkType} />);
    }
    if (props.defense.weakness.includes("rock")) {
      weaknessArr.push(<img id="rock" alt="rockType" src={rockType} />);
    }
    if (props.defense.weakness.includes("fairy")) {
      weaknessArr.push(<img id="fairy" alt="fairyType" src={fairyType} />);
    }
    if (props.defense.weakness.includes("ice")) {
      weaknessArr.push(<img id="ice" alt="iceType" src={iceType} />);
    }
    if (props.defense.weakness.includes("flying")) {
      weaknessArr.push(<img id="flying" alt="flyingType" src={flyingType} />);
    }
    setWeaknessDef(weaknessArr);
  }
  const resistArr = [];
  function renderResist(props) {
    if (props.defense.resist.includes("grass")) {
      resistArr.push(<img id="grass" alt="grassType" src={grassType} />);
    }
    if (props.defense.resist.includes("fire")) {
      resistArr.push(<img id="fire" alt="fireType" src={fireType} />);
    }
    if (props.defense.resist.includes("water")) {
      resistArr.push(<img id="water" alt="waterType" src={waterType} />);
    }
    if (props.defense.resist.includes("bug")) {
      resistArr.push(<img id="bug" alt="bugType" src={bugType} />);
    }
    if (props.defense.resist.includes("normal")) {
      resistArr.push(<img id="normal" alt="normalType" src={normalType} />);
    }
    if (props.defense.resist.includes("psychic")) {
      resistArr.push(<img id="psychic" alt="psychicType" src={psychicType} />);
    }
    if (props.defense.resist.includes("fighting")) {
      resistArr.push(
        <img id="fighting" alt="fightingType" src={fightingType} />
      );
    }
    if (props.defense.resist.includes("ghost")) {
      resistArr.push(<img id="ghost" alt="ghostType" src={ghostType} />);
    }
    if (props.defense.resist.includes("poison")) {
      resistArr.push(<img id="poison" alt="poisonType" src={poisonType} />);
    }
    if (props.defense.resist.includes("dragon")) {
      resistArr.push(<img alt="dragonType" src={dragonType} />);
    }
    if (props.defense.resist.includes("ground")) {
      resistArr.push(<img id="ground" alt="groundType" src={groundType} />);
    }
    if (props.defense.resist.includes("steel")) {
      resistArr.push(<img id="steel" alt="steelType" src={steelType} />);
    }
    if (props.defense.resist.includes("electric")) {
      resistArr.push(
        <img id="electric" alt="electricType" src={electricType} />
      );
    }
    if (props.defense.resist.includes("dark")) {
      resistArr.push(<img id="dark" alt="darkType" src={darkType} />);
    }
    if (props.defense.resist.includes("rock")) {
      resistArr.push(<img id="rock" alt="rockType" src={rockType} />);
    }
    if (props.defense.resist.includes("fairy")) {
      resistArr.push(<img id="fairy" alt="fairyType" src={fairyType} />);
    }
    if (props.defense.resist.includes("ice")) {
      resistArr.push(<img id="ice" alt="iceType" src={iceType} />);
    }
    if (props.defense.resist.includes("flying")) {
      resistArr.push(<img id="flying" alt="flyingType" src={flyingType} />);
    }
    setResistDef(resistArr);
  }
  const immuneArr = [];
  function renderImmune(props) {
    if (props.defense.immune.includes("grass")) {
      immuneArr.push(<img alt="grassType" src={grassType} />);
    }
    if (props.defense.immune.includes("fire")) {
      immuneArr.push(<img alt="fireType" src={fireType} />);
    }
    if (props.defense.immune.includes("water")) {
      immuneArr.push(<img alt="waterType" src={waterType} />);
    }
    if (props.defense.immune.includes("bug")) {
      immuneArr.push(<img alt="bugType" src={bugType} />);
    }
    if (props.defense.immune.includes("normal")) {
      immuneArr.push(<img alt="normalType" src={normalType} />);
    }
    if (props.defense.immune.includes("psychic")) {
      immuneArr.push(<img alt="psychicType" src={psychicType} />);
    }
    if (props.defense.immune.includes("fighting")) {
      immuneArr.push(<img alt="fightingType" src={fightingType} />);
    }
    if (props.defense.immune.includes("ghost")) {
      immuneArr.push(<img alt="ghostType" src={ghostType} />);
    }
    if (props.defense.immune.includes("poison")) {
      immuneArr.push(<img alt="poisonType" src={poisonType} />);
    }
    if (props.defense.immune.includes("dragon")) {
      immuneArr.push(<img alt="dragonType" src={dragonType} />);
    }
    if (props.defense.immune.includes("ground")) {
      immuneArr.push(<img alt="groundType" src={groundType} />);
    }
    if (props.defense.immune.includes("steel")) {
      immuneArr.push(<img alt="steelType" src={steelType} />);
    }
    if (props.defense.immune.includes("electric")) {
      immuneArr.push(<img alt="electricType" src={electricType} />);
    }
    if (props.defense.immune.includes("dark")) {
      resistArr.push(<img alt="darkType" src={darkType} />);
    }
    if (props.defense.immune.includes("rock")) {
      immuneArr.push(<img alt="rockType" src={rockType} />);
    }
    if (props.defense.immune.includes("fairy")) {
      immuneArr.push(<img alt="fairyType" src={fairyType} />);
    }
    if (props.defense.immune.includes("ice")) {
      immuneArr.push(<img alt="iceType" src={iceType} />);
    }
    if (props.defense.immune.includes("flying")) {
      immuneArr.push(<img alt="flyingType" src={flyingType} />);
    }
    setImmuneDef(immuneArr);
  }

  function adjustWeakness(props) {
    let resists = props.defense.resist;
    let updatedWeakness = [];
    // console.log(resists);
    // console.log(props);
    // console.log(weaknessDef);
    weaknessDef.forEach((e) => {
      console.table(e.props.id);
      updatedWeakness.push(e.props.id);
      // console.log("*********");
      // console.log(e.props);
      //if put images in object TypeData then can call it here much easier.
    });

    updatedWeakness = updatedWeakness.filter((val) => !resists.includes(val));
    console.log(weaknessDef);
    console.log("%%%");
    // if (updatedWeakness.includes("fire")) {
    //   updatedWeakness.splice("fire");

    //   // Maybe then remove fire and replae it wiht the img html
    // }
    setWeaknessDef([]);
    setWeaknessDef(updatedWeakness.join(", "));
    console.log(updatedWeakness);
    console.log(weaknessDef);
  }

  function renderStrong1(props) {
    // console.log("DSF" + props.name);
    // if (weaknessArr.includes(props)) {
    //   console.log("ok got it");
    // }
  }
  return (
    <div id="typeCalcMain">
      <p>Type1: {targetType1}</p>
      <p>Type2: {targetType2}</p>
      <p>attacks</p>
      <p>Super Effective: {strongAtks}</p>
      <p>Resisted: {weakAtks} </p>
      <p>no effect: {noEffectAtks}</p>
      <p>Defense</p>
      <p>Weakness: {weaknessDef}</p>
      <p>Resistance: {resistDef}</p>
      <p>Immune: {immuneDef}</p>

      {/* Type1 */}
      {TypeData.map((type) => (
        <div>
          <button
            onClick={() => {
              renderTargetType1(type);
              renderStrong(type);
              renderWeak(type);
              renderNoEffect(type);

              renderWeakness(type);
              renderResist(type);
              renderImmune(type);
            }}
          >
            {type.name}
          </button>
        </div>
      ))}
      <br></br>
      <br></br>
      {TypeData.forEach((type) => (
        <div>
          <button
            onClick={() => {
              renderTargetType2(type);
              adjustWeakness(type);
              renderStrong1(type);
              // renderStrong(type);
              // renderWeak(type);
              // renderNoEffect(type);

              // renderWeakness(type);
              // renderResist(type);
              // renderImmune(type);
            }}
          >
            {type.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TypeCalc;
