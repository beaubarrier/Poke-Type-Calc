import React, { useState } from "react";
import TypeData from "./TypeData.js";
import "./TypeCalc.css";

const TypeDataFunc = () => {
  const [weakSt, setWeakSt] = useState([]);
  const [resistSt, setResistSt] = useState([]);
  const [immuneSt, setImmuneSt] = useState([]);
  const [immuneSt2, setImmuneSt2] = useState([]);
  function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  const filterNonUnique = (arr) =>
    arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

  function adjustWeak(props) {
    let resistArr = resistSt.concat(props.resist);
    let weakArr = [];

    weakSt.map((e) => {
      return weakArr.push(e);
    });

    let newWeakArr = weakArr.concat(props.weak);

    newWeakArr = newWeakArr.filter((val) => !resistArr.includes(val));
    console.log(removeDuplicates(newWeakArr));
    // filterNonUnique(newWeakArr);
    setWeakSt(removeDuplicates(newWeakArr));
  }
  function adjustRes(props) {
    let weakArr = weakSt.concat(props.weak);
    let resistArr = [];

    resistSt.map((e) => {
      return resistArr.push(e);
    });
    let newResistArr = resistArr.concat(props.resist);

    newResistArr = newResistArr.filter((val) => !weakArr.includes(val));
    console.log(removeDuplicates(newResistArr));

    // filterNonUnique(newResistArr);

    setResistSt(removeDuplicates(newResistArr));
  }
  // function checkForDupes() {
  //   let weakArr = weakSt;
  //   let resistArr = resistSt;

  //   removeDuplicates(weakArr);
  //   filterNonUnique(resistArr);

  //   setWeakSt(weakArr);
  //   setResistSt(resistArr);
  // }
  function clearTypes() {
    setWeakSt(null);
    setResistSt(null);
    setImmuneSt(null);
    setImmuneSt2(null);
  }
  // function adjustImmune(props) {
  //   let weakArr = [weakSt];
  //   let resistArr = [resistSt];
  //   let immuneArr = [props.immune];

  //   weakArr = weakArr.filter((val) => !immuneArr.includes(val));
  //   resistArr = resistArr.filter((val) => !immuneArr.includes(val));
  //   console.log(`Imm ${immuneArr}`);

  //   console.log(`Wmm ${weakArr}`);
  //   console.log(`Rmm ${resistArr}`);

  //   // setResistSt(resistArr);
  //   // setWeakSt(weakArr);
  //   setImmuneSt(immuneSt.concat(immuneArr));
  // }

  return (
    <div id="mainDiv">
      <p id="weaknessP">Weak: {weakSt.join(", ")}</p>
      <p id="resistP">Resist: {resistSt.join(", ")}</p>
      <p id="immuneP">Immune: {immuneSt.join(", ")}</p>
      <p>{immuneSt2}</p>
      <div id="typeButtons">
        <div id="type1">
          {TypeData.map((type) => (
            <div>
              <button
                key={type.id}
                className={type.name}
                src={type.imgSrc}
                onClick={() => {
                  // popStates(type);
                  clearTypes();
                  setWeakSt(type.weak);
                  setResistSt(type.resist);
                  setImmuneSt(type.immune);
                }}
              >
                {type.name}
              </button>
            </div>
          ))}
        </div>
        <div id="type2">
          {TypeData.map((type) => (
            <div>
              <button
                key={type.id}
                className={type.name}
                src={type.imgSrc}
                onClick={() => {
                  adjustWeak(type);
                  adjustRes(type);
                  setImmuneSt2(type.immune);

                  // adjustImmune(type);
                }}
              >
                {type.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TypeDataFunc;
