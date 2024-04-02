/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from "react";
import scss from "./FlexFroggy.module.scss";
interface TypeChildren {
  targetStyle: any;
  count: number;
}

const FlexFroggy: FC<TypeChildren> = ({ targetStyle, count }) => {
  useEffect(() => {}, [count]);
  return (
    <div className={scss.Flex}>
      {count === 1 ? (
        <>
          <div className={scss.Content} style={targetStyle}>
            <div className={scss.frogyBox}></div>
            <div className={scss.finish}></div>
          </div>
        </>
      ) : null}
      {count === 2 ? (
        <>
          <div className={scss.Content} style={targetStyle}>
            <div className={`${scss.frogyBox} ${scss.frogyBox_two}`}></div>
            <div className={`${scss.frogyBox} ${scss.frogyBox_two}`}></div>
            <div className={`${scss.finish} ${scss.finish_one}`}></div>
            <div className={`${scss.finish} ${scss.finish_two}`}></div>
          </div>
        </>
      ) : null}
      {count === 3 ? (
        <>
          <div className={scss.Content} style={targetStyle}>
            <div className={`${scss.frogyBox} ${scss.frogyBox_three}`}></div>
            <div className={`${scss.frogyBox} ${scss.frogyBox_three}`}></div>
            <div className={`${scss.frogyBox} ${scss.frogyBox_three}`}></div>
            <div className={`${scss.finish} ${scss.finish_th_one}`}></div>
            <div className={`${scss.finish} ${scss.finish_th_two}`}></div>
            <div className={`${scss.finish} ${scss.finish_th_th}`}></div>
          </div>
        </>
      ) : null}
      {count === 4 ? (
        <>
          <div className={scss.Content} style={targetStyle}>
            <div className={`${scss.frogyBox} ${scss.frogyBox_three}`}></div>
            <div className={`${scss.frogyBox} ${scss.frogyBox_three}`}></div>
            <div className={`${scss.frogyBox} ${scss.frogyBox_three}`}></div>
            <div className={`${scss.finish} ${scss.finish_fr_one}`}></div>
            <div className={`${scss.finish} ${scss.finish_fr_two}`}></div>
            <div className={`${scss.finish} ${scss.finish_fr_th}`}></div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default FlexFroggy;
