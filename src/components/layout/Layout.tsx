/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useState } from "react";
import FlexFroggy from "./flexbox/FlexFroggy";
import scss from "./Layout.module.scss";
import LeftContent from "./left/LeftContent";

const Layout = () => {
  const [inputValue, setInputValue] = useState("");
  const [targetStyle, setTargetStyle] = useState({});
  const [count, setCount] = useState(1);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
    applyStyle(event.target.value);
  };

  const applyStyle = (styleString: any) => {
    const styles = parseStyle(styleString);
    setTargetStyle({ ...targetStyle, ...styles });
  };

  const parseStyle = (styleString: string): Record<string, string> => {
    const styles: Record<string, string> = {};
    styleString.split(";").forEach((style) => {
      const [key, value] = style.split(":");
      if (key.trim() && value.trim()) {
        styles[key.trim()] = value.trim();
      }
    });
    return styles;
  };

  return (
    <>
      <main className={scss.main}>
        <LeftContent
          inputValue={inputValue}
          handleChange={handleChange}
          count={count}
          setCount={setCount}
          setTargetStyle={setTargetStyle}
        />
        <FlexFroggy targetStyle={targetStyle} count={count} />
      </main>
    </>
  );
};

export default Layout;
