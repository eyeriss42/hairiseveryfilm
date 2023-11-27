// export default function Result({ counter }) {
//   const evaluateResult = () => {
//     let message;
//     let imageUrl;
//     if (counter > 0) {
//       message = "keep growing your hair";
//       imageUrl = 'https://deadline.com/wp-content/uploads/2023/04/0YLpt67-421-e1683816972149.jpg';
//     } else if (counter < 0) {
//       message = "it's time to cut your hair";
//       imageUrl = 'https://s3.amazonaws.com/festivaldorio/2021/site/peliculas/large2/pierrotle_f03cor_2019113395.jpg';
//     } else {
//       message = "you're undecided"; 
//       imageUrl = 'https://www.ingmarbergman.se/sites/default/files/persona_1.jpg';
//     }
//     return { result: message, counter, image: imageUrl };
//   };

//   const resultData = evaluateResult();

//   return (
//     <div>
//       {resultData.image && (
//         <div className="result-image">
//           <img src={resultData.image} alt="Result Image" />
//         </div>
//       )}

//       {resultData.result && (
//         <div className="result-display">
//           {resultData.result} <p> your score is {resultData.counter}</p>
//         </div>
//       )}
//     </div>
//   );
// }

