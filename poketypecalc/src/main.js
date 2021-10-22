import React, { useState } from "react";
import TypeData from "./TypeData.js";
import "./TypeCalc.css";

const TypeDataFunc = () => {
  const [weakSt, setWeakSt] = useState([]);
  const [resistSt, setResistSt] = useState([]);
  const [immuneSt, setImmuneSt] = useState([]);
  const [immuneSt2, setImmuneSt2] = useState([]);
  const [currentTypeBtn, setCurrentTypeBtn] = useState("type1");
  const [testImg, setTestImg] = useState([]);
  let weakImgArr = [];
  // TRY USE EFFECT
  function setStats(type) {
    setWeakSt(type.weak);

    setResistSt(type.resist);
    setImmuneSt(type.immune);
    setCurrentTypeBtn("type2");
    // weakImgRender();
    // weakSt.forEach((e) => {
    //   if (e === "fire") {
    //     setTestImg(<img alt="test" src={TypeData[0].imgSrc} />);
    //   }
    // });
    // setTestImg(<img alt="test" src={TypeData[0].imgSrc} />);
  }
  console.log(weakSt + "@@@");

  const weakImgRender = () => {
    // alert("hit");
    // console.log(weakSt + "%%%");
    // if (weakSt.includes("fire")) {
    //   setTestImg(<img alt="test" src={TypeData[0].imgSrc} />);
    // }
    // if (weakSt.includes("normal")) {
    //   weakImgArr.push(<img alt="test" src={TypeData[1].imgSrc} />);
    // }
    // if (weakSt.includes("water")) {
    //   return <img alt="test" src={TypeData[2].imgSrc} />;
    // }
    // if (weakSt.includes("electric")) {
    //   return <img alt="test" src={TypeData[3].imgSrc} />;
    // }
    // if (weakSt.includes("grass")) {
    //   return <img alt="test" src={TypeData[4].imgSrc} />;
    // }
    // if (weakSt.includes("ice")) {
    //   weakImgArr.push(<img alt="test" src={TypeData[5].imgSrc} />);
    // }
    // if (weakSt.includes("fighting")) {
    //   return <img alt="test" src={TypeData[6].imgSrc} />;
    // }
    // if (weakSt.includes("flying")) {
    //   return <img alt="test" src={TypeData[7].imgSrc} />;
    // }
    // if (weakSt.includes("poison")) {
    //   return <img alt="test" src={TypeData[8].imgSrc} />;
    // }
    // if (weakSt.includes("ground")) {
    //   return <img alt="test" src={TypeData[9].imgSrc} />;
    // }
    // if (weakSt.includes("rock")) {
    //   return <img alt="test" src={TypeData[10].imgSrc} />;
    // }
    // if (weakSt.includes("bug")) {
    //   return <img alt="test" src={TypeData[11].imgSrc} />;
    // }
    // if (weakSt.includes("ghost")) {
    //   return <img alt="test" src={TypeData[12].imgSrc} />;
    // }
    // if (weakSt.includes("psychic")) {
    //   return <img alt="test" src={TypeData[13].imgSrc} />;
    // }
    // if (weakSt.includes("dark")) {
    //   return <img alt="test" src={TypeData[14].imgSrc} />;
    // }
    // if (weakSt.includes("fairy")) {
    //   return <img alt="test" src={TypeData[15].imgSrc} />;
    // }
    // if (weakSt.includes("steel")) {
    //   return <img alt="test" src={TypeData[16].imgSrc} />;
    // }
    // if (weakSt.includes("dragon")) {
    //   return <img alt="test" src={TypeData[17].imgSrc} />;
    // }
    // // setTestImg(weakImgArr);
    // console.log(weakImgArr);
    // console.log(testImg + "####");
  };

  const btnRender = () => {
    // setTestImg(() => {
    //   if (weakSt.includes("fire")) {
    //     setTestImg(<img alt="test" src={TypeData[0].imgSrc} />);
    //   }
    // });
    // if (weakSt.includes("fire")) {
    //   setTestImg(testImg.concat(<img alt="test" src={TypeData[0].imgSrc} />));
    // }

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
    // console.log(weakSt + "&&&&&&");

    return (
      <button
        onClick={() => {
          clearTypes();
          setCurrentTypeBtn("type1");
        }}
      >
        Clear
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
              // setImageTest(type.imgSrc);

              setStats(type);

              // setWeakSt(type.weak);
              // setResistSt(type.resist);
              // setImmuneSt(type.immune);
              // setCurrentTypeBtn("type2");
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
              // console.log(weakSt);
              setImmuneSt2(type.immune);
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
  function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

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

  function clearTypes() {
    setWeakSt([]);
    setResistSt([]);
    setImmuneSt([]);
    setImmuneSt2([]);
  }

  return (
    <div id="mainDiv" key="maindiv">
      <p id="weaknessP">Weak: {weakSt.join(", ")}</p>
      <p id="resistP">Resist: {resistSt.join(", ")}</p>
      <p id="immuneP">
        Immune: {immuneSt.join(", ")} {immuneSt2.join(", ")}
      </p>

      <div id="typeButtons" key="maindiv">
        {btnRender()}
      </div>
      <div id="images" key="images">
        {/* <img src={imageTest} alt="test" key="testimg1" /> */}
      </div>
      {testImg}
    </div>
  );
};
export default TypeDataFunc;
