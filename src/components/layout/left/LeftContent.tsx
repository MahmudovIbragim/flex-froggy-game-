/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import scss from "./Left.module.scss";

interface TypeChildren {
  inputValue: string;
  handleChange: any;
  count: number;
  setCount: any;
  setTargetStyle: any;
}

const LeftContent: FC<TypeChildren> = ({
  inputValue,
  handleChange,
  count,
  setCount,
  setTargetStyle,
}) => {
  return (
    <div className={scss.Left}>
      <div className={scss.level_btn}>
        <button
          onClick={() => {
            count <= 1 ? count : setCount(count - 1);
          }}
        >
          min
        </button>
        <h3> level {count} or 24</h3>
        <button
          onClick={() => {
            count >= 4 ? count : setCount(count + 1);
            setTargetStyle({});
          }}
        >
          plus
        </button>
      </div>
      <div className={scss.Content}>
        <div className={scss.input}>
          <input type="text" value={inputValue} onChange={handleChange} />
        </div>
        <div className={scss.btn}>
          {count === 1 ? (
            <>
              <button
                onClick={() => {
                  inputValue === "justify-content: flex-end" ||
                  inputValue === "justify-content:flex-end" ||
                  inputValue === "justify-content:end" ||
                  inputValue === "justify-content: end"
                    ? count >= 4
                      ? count
                      : setCount(count + 1)
                    : null;
                  setTargetStyle({});
                }}
                className={
                  inputValue === "justify-content: flex-end" ||
                  inputValue === "justify-content:flex-end" ||
                  inputValue === "justify-content:end" ||
                  inputValue === "justify-content: end"
                    ? `${scss.finish}`
                    : `${scss.noFinish}`
                }
              >
                Следущий
              </button>
            </>
          ) : null}
          {count === 2 ? (
            <>
              <button
                onClick={() => {
                  inputValue === "justify-content: center" ||
                  inputValue === "justify-content:center"
                    ? count >= 4
                      ? count
                      : setCount(count + 1)
                    : null;
                  setTargetStyle({});
                }}
                className={
                  inputValue === "justify-content: center" ||
                  inputValue === "justify-content:center"
                    ? `${scss.finish}`
                    : `${scss.noFinish}`
                }
              >
                Следущий
              </button>
            </>
          ) : null}
          {count === 3 ? (
            <>
              <button
                onClick={() => {
                  inputValue === "justify-content: space-around" ||
                  inputValue === "justify-content:space-around"
                    ? count >= 4
                      ? count
                      : setCount(count + 1)
                    : null;
                  setTargetStyle({});
                }}
                className={
                  inputValue === "justify-content: space-around" ||
                  inputValue === "justify-content:space-around"
                    ? `${scss.finish}`
                    : `${scss.noFinish}`
                }
              >
                Следущий
              </button>
            </>
          ) : null}
          {count === 4 ? (
            <>
              <button
                onClick={() => {
                  inputValue === "justify-content: space-between" ||
                  inputValue === "justify-content:space-between"
                    ? count >= 4
                      ? count
                      : setCount(count + 1)
                    : null;
                  setTargetStyle({});
                }}
                className={
                  inputValue === "justify-content: space-between" ||
                  inputValue === "justify-content:space-between"
                    ? `${scss.finish}`
                    : `${scss.noFinish}`
                }
              >
                Следущий
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
