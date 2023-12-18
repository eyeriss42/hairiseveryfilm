import React, { useEffect } from "react";
// ... other imports ...

export default function Intro({ onOkayClick }: IntroProps) {

    useEffect(() => {
      const handleGlobalKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          // Check if the pressed key is 'Enter'
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
<button className="button-style" onClick={onOkayClick}>okay</button><p>or press enter</p>
</div>
</div>
</>
    );
}


// import { useEffect } from "react";

// interface IntroProps {
//     onOkayClick: () => void;
// }

// export default function Intro({ onOkayClick }: IntroProps){
//     useEffect(() => {
//       const handleGlobalKeyPress = (event: KeyboardEvent) => {
//         if (event.key === "Enter") {
//           // Optional: Check for a specific key
//           onOkayClick();
//         }
//       };

//       window.addEventListener("keydown", handleGlobalKeyPress);

//       return () => {
//         window.removeEventListener("keydown", handleGlobalKeyPress);
//       };
//     }, [onOkayClick]);
//     return(
//     <>
//     <p> is a quiz that helps you decide </p>
//     <p> whether to cut your hair or no</p>
//     <p> swipe right if you the haircut or left if you don't</p>
//     <button className="button-style" onClick={onOkayClick}>okay</button>
// </>
//     );
// }

// import "./App.css";

// interface IntroProps {
//     onOkayClick: () => void;
// }

// export default function Intro({ onOkayClick }: IntroProps){
//     return(
//     <>
//     <p> is a quiz that helps you decide </p>
//     <p> whether to cut your hair or no</p>
//     <p> swipe right if you ❤️ the haircut or left if you don't</p>
//     <button className="button-style" onClick={onOkayClick}>Okay</button>
// </>
//     );
// }

// import "./App.css";

// interface IntroProps {
//     onOkayClick: () => void; 
//   }
  
//   export default function Intro({ onOkayClick }: IntroProps) {
  
//     const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
//         console.log("Key pressed:", event.key); 
//         onOkayClick();
//     }
//     return (
//       <>
//       <div onKeyDown={handleKeyPress} tabIndex={0}> 
//         <p>is a quiz that helps you decide</p>
//         <p>whether to cut your hair or no</p>
//         <p>swipe right if you the haircut</p>
//         <p> or left if you don't</p>
//         <button 
//           className="button-style"
//           onClick={onOkayClick}
//           onKeyDown={handleKeyPress} 
//         >
//           okay
//         </button>
//         <p> or press any key</p>
//         </div>
//       </>
//     );
//   }


