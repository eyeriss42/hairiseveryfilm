import { useEffect } from "react";
import "./intro.css";

interface IntroProps {
  onOkayClick: () => void;
}

export default function Intro({ onOkayClick }: IntroProps) {

    useEffect(() => {
      const handleGlobalKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          onOkayClick();
        }
      };

      window.addEventListener("keydown", handleGlobalKeyPress);

      return () => {
        window.removeEventListener("keydown", handleGlobalKeyPress);
      };
    }, [onOkayClick]);

    return (
<>
<div className="css-typing">
<p> is a quiz that helps you decide </p>
<p> whether to cut your hair or not</p>
<p> swipe right if you ❤️‍🔥 the haircut or left if you don't 🙃</p>
<div className="proceed">
<button className="button-style" onClick={onOkayClick}>okay</button><aside>or press enter</aside>
</div>
</div>
</>
    );
}
