import React, { useState, useEffect } from "react";
import TypeData from "./TypeData.js";
import "./TypeCalc.css";

const TypeDataFunc = () => {
  const [type1nameImg, setType1nameImg] = useState([]);
  const [type2nameImg, setType2nameImg] = useState([]);
  const [type1name, setType1name] = useState([]);
  const [type2name, setType2name] = useState([]);
  const [weakSt, setWeakSt] = useState([]);
  const [weakStImg, setWeakStImg] = useState([]);
  const [resistSt, setResistSt] = useState([]);
  const [resistStImg, setResistStImg] = useState([]);
  const [immuneSt, setImmuneSt] = useState([]);
  const [immuneStImg, setImmuneStImg] = useState([]);
  const [currentTypeBtn, setCurrentTypeBtn] = useState("type1");
  const nameArr = TypeData.map((e) => {
    return e;
  });
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
              setType1name(type.name);
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
              adjustWeak(type);
              adjustRes(type);
              adjustImmu(type);
              setType2name(type.name);
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
  useEffect(() => {
    let immuneImgArr = [];
    nameArr.forEach((e) => {
      if (immuneSt.includes(e.name)) {
        immuneImgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setImmuneStImg(immuneImgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immuneSt]);
  useEffect(() => {
    let type1ImgArr = [];

    nameArr.forEach((e) => {
      if (type1name.includes(e.name)) {
        type1ImgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setType1nameImg(type1ImgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type1name]);
  useEffect(() => {
    let type2ImgArr = [];
    nameArr.forEach((e) => {
      if (type2name.includes(e.name)) {
        type2ImgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setType2nameImg(type2ImgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type2name]);

  function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }
  function setStats(type) {
    setWeakSt(type.weak);
    setResistSt(type.resist);
    setImmuneSt(type.immune);
    setCurrentTypeBtn("type2");
  }
  function adjustWeak(props) {
    let resistArr = resistSt.concat(props.resist);
    let immune = props.immune;
    let weakArr = [];
    let immuneArr = immuneSt;
    weakSt.map((e) => {
      return weakArr.push(e);
    });
    let newWeakArr = weakArr.concat(props.weak);
    newWeakArr = newWeakArr.filter((val) => !resistArr.includes(val));
    newWeakArr = newWeakArr.filter((val) => !immune.includes(val));
    newWeakArr = newWeakArr.filter((val) => !immuneArr.includes(val));
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
    setType1name([]);
    setType2name([]);
    setType1nameImg([]);
    setType2nameImg([]);
    setWeakSt([]);
    setResistSt([]);
    setImmuneSt([]);
    setWeakStImg([]);
    setResistStImg([]);
    setImmuneStImg([]);
  }

  return (
    <div id="mainDiv" key="maindiv">
      <p>Type 1: {type1nameImg}</p>
      <p>Type 2: {type2nameImg}</p>
      <p id="weaknessP">Weak: {weakStImg}</p>
      <p id="resistP">Resist: {resistStImg}</p>
      <p id="immuneP">Immune: {immuneStImg}</p>
      <div id="typeButtons" key="maindiv">
        {btnRender()}
      </div>
    </div>
  );
};
export default TypeDataFunc;
