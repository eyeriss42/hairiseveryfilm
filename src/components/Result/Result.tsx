import styles from "./result.css";

type Outcome = {
  image: string;
  result: string;
};

const Result = ({ outcome }: { outcome: Outcome }) => {
  return (
    <div className="styles.moment-of-truth">
      {outcome.image && (
        <div className="result-image">
          <img src={outcome.image} alt="Result" />
          <div className="result-text">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                padding: "15px 0px 0px 0px",
                fontFamily: "Helvetica",
              }}
            >
              {outcome.result}{" "}
              
              <span style={{ fontSize: "16px", fontWeight: "normal" }}></span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
