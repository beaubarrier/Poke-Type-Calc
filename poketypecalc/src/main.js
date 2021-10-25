import React, { useState, useEffect } from "react";
import TypeData from "./TypeData.js";
import "./TypeCalc.css";

const TypeDataFunc = () => {
  const [weakSt, setWeakSt] = useState([]);
  const [resistSt, setResistSt] = useState([]);
  const [immuneSt, setImmuneSt] = useState([]);
  const [currentTypeBtn, setCurrentTypeBtn] = useState("type1");
  const [weakStImg, setWeakStImg] = useState([]);
  const [resistStImg, setResistStImg] = useState([]);
  const [immuneStImg, setImmuneStImg] = useState([]);
  const nameArr = TypeData.map((e) => {
    return e;
  });

  useEffect(() => {
    let weakImgArr = [];
    nameArr.forEach((e) => {
      if (weakSt.includes(e.name)) {
        weakImgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setWeakStImg(weakImgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weakSt]);

  useEffect(() => {
    let resistImgArr = [];
    nameArr.forEach((e) => {
      if (resistSt.includes(e.name)) {
        resistImgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setResistStImg(resistImgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resistSt]);

  useEffect(() => {}, [immuneStImg]);

  function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  function setStats(type) {
    setWeakSt(type.weak);
    setResistSt(type.resist);
    setImmuneSt(type.immune);
    setCurrentTypeBtn("type2");
  }

  const btnRender = () => {
    if (currentTypeBtn === "type1") {
      return renderTypeBtn1();
    }
    if (currentTypeBtn === "type2") {
      return renderTypeBtn2();
    }
    if (currentTypeBtn === "clear") {
      return clearTypeFunc();
    }
  };

  const clearTypeFunc = () => {
    return (
      <button
        onClick={() => {
          clearTypes();
          setCurrentTypeBtn("type1");
        }}
      >
        Reset
      </button>
    );
  };

  const renderTypeBtn1 = () => {
    return (
      <div id="type1Btn" key="type1Btn">
        {TypeData.map((type) => (
          <button
            key={`typeBtn${type.id}`}
            className={type.name}
            src={type.imgSrc}
            onClick={() => {
              setStats(type);
            }}
            style={{
              border: "none",
              background: "none",
            }}
          >
            <img alt={`typeBtn${type.id}`} key={type.name} src={type.imgSrc} />
          </button>
        ))}
      </div>
    );
  };

  const renderTypeBtn2 = () => {
    return (
      <div id="type2Btn" key="type2Btn">
        {TypeData.map((type) => (
          <button
            key={`typeBtn${type.id}`}
            className={type.name}
            src={type.imgSrc}
            onClick={() => {
              adjustImmu(type);
              adjustWeak(type);
              adjustRes(type);
              setCurrentTypeBtn("clear");
            }}
            style={{
              border: "none",
              background: "none",
            }}
          >
            <img alt={`typeBtn${type.id}`} key={type.name} src={type.imgSrc} />
          </button>
        ))}
      </div>
    );
  };

  function adjustWeak(props) {
    let resistArr = resistSt.concat(props.resist);
    let weakArr = [];
    weakSt.map((e) => {
      return weakArr.push(e);
    });
    let newWeakArr = weakArr.concat(props.weak);
    newWeakArr = newWeakArr.filter((val) => !resistArr.includes(val));
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
    setResistSt(removeDuplicates(newResistArr));
  }

  function adjustImmu(props) {
    let immuArr = immuneSt.concat(props.immune);
    setImmuneSt(removeDuplicates(immuArr));
  }

  function clearTypes() {
    setWeakStImg([]);
    setResistStImg([]);
    setImmuneSt([]);
  }

  return (
    <div id="mainDiv" key="maindiv">
      <p id="weaknessP">Weak: {weakStImg}</p>
      <p id="resistP">Resist: {resistStImg}</p>
      <p id="immuneP">Immune: {immuneSt.join(", ")} </p>
      <div id="typeButtons" key="maindiv">
        {btnRender()}
      </div>
    </div>
  );
};
export default TypeDataFunc;
