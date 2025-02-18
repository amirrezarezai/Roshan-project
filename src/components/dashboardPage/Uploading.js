import { useState } from "react";
import Record from "./Record";
import LoadFile from "./LoadFile";
import Link from "./Link";

const Uploading = () => {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(0);
  const [languages, setLanguages] = useState(0);

  return (
    <>
      <div className="content">
        <div className="uploading-buttons">
          <button
            className="uploading-btn"
            style={
              step === 0 ? { backgroundColor: "#00BA9F", color: "#ffffff" } : {}
            }
            onClick={() => setStep(0)}
          >
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "0.5rem" }}
            >
              <path
                d="M6.50212 0L5.97738 0.0317415L5.46322 0.129082L4.96598 0.281441L4.48779 0.497284L4.03923 0.768145L3.62663 1.08979L3.25635 1.46011L2.93473 1.87275L2.66602 2.31925L2.44808 2.79749L2.29574 3.29689L2.19841 3.8111L2.16667 4.33589V11.9179L2.19841 12.4406L2.29574 12.9527L2.44808 13.4542L2.66602 13.9324L2.93473 14.3789L3.25635 14.7915L3.62663 15.1619L4.03923 15.4835L4.48779 15.7544L4.96598 15.9702L5.46322 16.1247L5.97738 16.2178L6.50212 16.2517L7.02262 16.2178L7.5389 16.1247L8.03825 15.9702L8.51432 15.7544L8.96501 15.4835L9.37337 15.1619L9.74365 14.7915L10.0695 14.3789L10.3382 13.9324L10.5519 13.4542L10.7085 12.9527L10.8037 12.4406L10.8333 11.9179V4.33589L10.8037 3.8111L10.7085 3.29689L10.5519 2.79749L10.3382 2.31925L10.0695 1.87275L9.74365 1.46011L9.37337 1.08979L8.96501 0.768145L8.51432 0.497284L8.03825 0.281441L7.5389 0.129082L7.02262 0.0317415L6.50212 0ZM6.27995 1.09402H6.72428L7.16227 1.15328L7.58968 1.27178L7.99593 1.44953L8.37467 1.68018L8.71956 1.95739L9.02214 2.28327L9.27816 2.64513L9.48128 3.04084L9.62939 3.45771L9.72038 3.89151L9.75212 4.33589V11.9179L9.72038 12.3623L9.62939 12.7939L9.48128 13.2129L9.27816 13.6044L9.02214 13.9705L8.71956 14.2943L8.37467 14.5736L7.99593 14.8042L7.58968 14.9799L7.16227 15.1005L6.72428 15.1598H6.27995L5.83984 15.1005L5.41244 14.9799L5.00407 14.8042L4.62533 14.5736L4.28255 14.2943L3.97998 13.9705L3.72396 13.6044L3.51872 13.2129L3.37061 12.7939L3.28385 12.3623L3.25212 11.9179V4.33589L3.28385 3.89151L3.37061 3.45771L3.51872 3.04084L3.72396 2.64513L3.97998 2.28327L4.28255 1.95739L4.62533 1.68018L5.00407 1.44953L5.41244 1.27178L5.83984 1.15328L6.27995 1.09402ZM0 11.9179L0.0296224 12.521L0.112142 13.1177L0.25179 13.7081L0.444336 14.2795L0.689779 14.8318L0.986003 15.3587L1.33089 15.8538L1.7181 16.3173L2.14762 16.7447L2.61312 17.1256L3.11458 17.4642L3.64355 17.7562L4.1958 17.9974L4.77132 18.1815L5.36165 18.317L5.95833 18.3953V20.5854H2.16667V21.6689H10.8333V20.5854H7.04378V18.3953L7.64046 18.317L8.23079 18.1815L8.8042 17.9974L9.36068 17.7562L9.88965 17.4642L10.3911 17.1256L10.8566 16.7447L11.284 16.3173L11.6733 15.8538L12.0161 15.3587L12.3123 14.8318L12.5557 14.2795L12.7503 13.7081L12.89 13.1177L12.9746 12.521L13 11.9179H11.9188L11.887 12.4829L11.7982 13.0436L11.6543 13.5917L11.4491 14.1207L11.193 14.6265L10.882 15.1026L10.5265 15.5406L10.1245 15.9427L9.68441 16.3003L9.20833 16.6072L8.70475 16.8674L8.17578 17.0685L7.62565 17.2166L7.06917 17.3055L6.50212 17.333L5.93506 17.3055L5.37435 17.2166L4.82845 17.0685L4.29948 16.8674L3.79167 16.6072L3.31771 16.3003L2.87549 15.9427L2.47347 15.5406L2.118 15.1026L1.8112 14.6265L1.55306 14.1207L1.34993 13.5917L1.20182 13.0436L1.11296 12.4829L1.08545 11.9179H0Z"
                fill={step === 0 ? "#ffffff" : "#969696"}
              />
            </svg>
            ضبط صدا{" "}
          </button>
          <button
            className="uploading-btn"
            style={
              step === 1 ? { backgroundColor: "#118AD3", color: "#ffffff" } : {}
            }
            onClick={() => setStep(1)}
          >
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "0.5rem" }}
            >
              <path
                d="M13.5044 11.8314L10.1711 8.49805L6.83777 11.8314"
                stroke={step === 1 ? "#ffffff" : "#969696"}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.1711 8.49805V15.998"
                stroke={step === 1 ? "#ffffff" : "#969696"}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.1628 13.823C17.9756 13.3798 18.6176 12.6787 18.9877 11.8301C19.3577 10.9816 19.4346 10.034 19.2063 9.13686C18.9779 8.23974 18.4573 7.44421 17.7267 6.87582C16.996 6.30744 16.0968 5.99856 15.1711 5.99795H14.1211C13.8689 5.02232 13.3987 4.11656 12.7461 3.34878C12.0934 2.58099 11.2751 1.97116 10.3529 1.56512C9.43057 1.15909 8.42823 0.967418 7.42121 1.00452C6.41418 1.04162 5.42867 1.30654 4.53876 1.77934C3.64885 2.25214 2.8777 2.92054 2.28329 3.73427C1.68889 4.548 1.28668 5.4859 1.10693 6.47745C0.927168 7.469 0.97453 8.48839 1.24545 9.459C1.51638 10.4296 2.00381 11.3262 2.67111 12.0813"
                stroke={step === 1 ? "#ffffff" : "#969696"}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5044 11.8314L10.1711 8.49805L6.83777 11.8314"
                stroke={step === 1 ? "#ffffff" : "#969696"}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            بارگذاری فایل
          </button>
          <button
            className="uploading-btn"
            style={
              step === 2 ? { backgroundColor: "#FF1654", color: "#ffffff" } : {}
            }
            onClick={() => setStep(2)}
          >
            {" "}
            <svg
              width="17"
              height="21"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "0.5rem" }}
            >
              <path
                d="M7.80607 4.14507L10.0299 1.92129C11.4361 0.678582 13.529 0.809393 14.7717 2.18291C15.9163 3.42561 15.9163 5.35507 14.7717 6.63048L12.5153 8.85427L13.202 9.54103L15.4585 7.28454C17.1263 5.6167 17.0609 2.86967 15.3604 1.20183C13.6926 -0.400609 11.0436 -0.400609 9.3758 1.20183L7.11931 3.42561C5.45147 5.12615 5.45147 7.84048 7.11931 9.54102L7.80607 8.85427C6.53066 7.54616 6.53066 5.45318 7.80607 4.14507Z"
                fill={step === 2 ? "#ffffff" : "#969696"}
              />
              <path
                d="M7.41365 19.0575L9.67014 16.8337C11.338 15.1331 11.338 12.4188 9.67014 10.751L8.98338 11.4377C10.2915 12.7458 10.2915 14.8388 8.98338 16.1469L6.72689 18.3707C5.41878 19.6788 3.32581 19.6788 2.0177 18.3707C0.70959 17.0626 0.70959 14.9696 2.0177 13.6615L4.27419 11.4377L3.58743 10.751L1.36364 12.9748C-0.369601 14.6099 -0.467709 17.3242 1.16743 19.0575C2.80257 20.7907 5.51689 20.8888 7.25014 19.2537C7.31554 19.1556 7.38095 19.1229 7.41365 19.0575Z"
                fill={step === 2 ? "#ffffff" : "#969696"}
              />
              <path
                d="M11.4833 7.79553L10.7896 7.10181L5.37857 12.5128L6.07229 13.2066L11.4833 7.79553Z"
                fill={step === 2 ? "#ffffff" : "#969696"}
              />
            </svg>
            لینک
          </button>
        </div>
        <div
          className="uploading-box"
          style={
            step === 0
              ? {
                  border: "1px solid #00BA9F",
                  borderRadius: "25px 0px 25px 25px",
                }
              : step === 1
              ? { border: "1px solid #118AD3" }
              : { border: "1px solid #FF1654" }
          }
        >
          {step === 0 && <Record />}
          {step === 1 && <LoadFile />}
          {step === 2 && <Link />}
        </div>
      </div>
      <div className="dropdown-group">
        <p
          style={{
            height: "24px",
            fontSize: "14px",
            color: "#626262",
            marginTop: "0.5rem",
          }}
        >
          زبان گفتار :
        </p>
        {open === 0 && (
          <button className="dropdown-down-close" onClick={() => setOpen(1)}>
            {languages === 0 ? "فارسی" : "انگلیسی"}
            <svg
              width="7"
              height="5"
              viewBox="0 0 7 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "1rem" }}
            >
              <path
                d="M4.65282 4.12713C4.25404 4.58759 3.53973 4.58759 3.14096 4.12713L1.08888 1.7576C0.528006 1.10995 0.988058 0.102941 1.84481 0.102941L5.94896 0.102942C6.80571 0.102942 7.26577 1.10995 6.70489 1.7576L4.65282 4.12713Z"
                fill="#00BA9F"
              />
            </svg>
          </button>
        )}
        {open === 1 && (
          <div className="dropdown-down-open" onClick={() => setOpen(0)}>
            <button>
              {languages === 0 ? "فارسی" : "انگلیسی"}
              <svg
                width="7"
                height="5"
                viewBox="0 0 7 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: "0.8rem", marginTop: "0.6rem" }}
              >
                <path
                  d="M4.65282 0.872872C4.25404 0.412411 3.53973 0.41241 3.14096 0.872872L1.08888 3.2424C0.528006 3.89005 0.988058 4.89706 1.84481 4.89706L5.94896 4.89706C6.80571 4.89706 7.26577 3.89005 6.70489 3.2424L4.65282 0.872872Z"
                  fill="#00BA9F"
                />
              </svg>
            </button>
            <svg
              width="84"
              height="1"
              viewBox="0 0 84 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                marginRight: "0.1rem",
              }}
            >
              <line
                x1="0.3"
                y1="0.7"
                x2="83.7"
                y2="0.7"
                stroke="#00BA9F"
                stroke-width="0.6"
                stroke-linecap="round"
              />
            </svg>
            <button
              onClick={() =>
                languages === 0 ? setLanguages(1) : setLanguages(0)
              }
            >
              {languages === 0 ? "انگلیسی" : "فارسی"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Uploading;
