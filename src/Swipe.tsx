import  { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import styles from './swipestyles.module.css'
import Result from './Result';

// import { useEffect } from 'react';

// import nomadland from "src/assets/nomadland.jpeg";
// import rouge from "src/assets/rouge.jpeg";
// import vivresavie from "src/assets/vivresavie.jpeg";
// import womenwhoran from "src/assets/womenwhoran.jpeg";

// import cards from "/src/assets/cards.js";

interface Card {
  image: string;
  isLongHair: boolean;
  character: string;
  movie: string;
}

const cards: Card[] = [
  // { image: nomadland, isLongHair: false },
  // { image: rouge, isLongHair: true },
  // { image: vivresavie, isLongHair: false },
  // { image: womenwhoran, isLongHair: true },
  { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true, character: 'Vicky', movie:'Milenium Mambo' },
  { image: 'https://m.media-amazon.com/images/M/MV5BOGY0MzcxZmItNDAzMC00OGUyLTkxYmEtODJlYTE1OWY1NjU2XkEyXkFqcGdeQWpnYW1i._V1_.jpg', isLongHair: false, character: 'Leda', movie:'The Lost Daughter'},
  { image: 'https://assets.vogue.com/photos/615c664300122a1a679f53f1/4:3/w_2396,h_1797,c_limit/MCDROTE_EC021.jpeg', isLongHair: false, character: 'Margot', movie:'The Royal Tenenbaums' },
  { image: 'https://64.media.tumblr.com/ed8b27531fd815312c7b71e28b91d7e3/tumblr_n96s2c0A3J1t144d3o2_1280.jpg', isLongHair: true, character: 'Isabelle', movie:'The Dreamers' },
  { image: 'https://springbackmagazine.com/wp-content/uploads/2018/07/a-girl-walks-home-alone-at-night.jpg', isLongHair: false, character: 'Shirin', movie:'A Girl Walks Home Alone at Night' },
  { image: 'https://static01.nyt.com/images/2022/02/02/arts/worst-person-anatomy2/worst-person-anatomy2-superJumbo-v2.jpg', isLongHair: true, character: 'Julie', movie:'The Worst Person in the World' },
  { image: 'https://i.pinimg.com/originals/e7/6c/40/e76c4005311ab78f14b0668b1ae7a9f6.jpg', isLongHair: false, character: 'Tina', movie:'Do the Right Thing' },
  { image: 'https://img.youtube.com/vi/XeISaoQDh2g/maxresdefault.jpg', isLongHair: false, character: 'Detroit', movie:'Sorry to Bother You'  },
  { image: 'https://m.media-amazon.com/images/M/MV5BMTlmOTExYmUtOWZkOS00YmNiLWIyNzctMjg3NjNkNjlmNTI0XkEyXkFqcGdeQXVyMzIwNDY4NDI@._V1_.jpg', isLongHair: false, character: 'Noqreh', movie:'At Five in the Afternoon' },
  { image: 'https://www.slashfilm.com/img/gallery/shifting-his-focus-to-female-led-films-felt-natural-for-park-chan-wook/l-intro-1652794415.jpg', isLongHair: true, character: 'Lady Hideko', movie:'Handmaiden' },
  { image: 'https://cineuropa.org/imgCache/2021/08/23/1629718517738_1000x0702_0x0x0x0_1679266092973.jpg', isLongHair: false, character: 'Ada', movie:'Unclenching the Fists' },
  { image: 'https://www.indiewire.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-25-at-10.30.13-AM.png', isLongHair: false, character: 'Ava', movie:'Ex Machina' },
  { image: 'https://2.bp.blogspot.com/-uK7QBz3DtzQ/V5gQtuwtHII/AAAAAAAAHOQ/kl4sAhaVJAAmqs115uiGMrFuRTWu2LDlACLcB/s1600/The%2BMirror%2B6.jpg', isLongHair: true, character: 'Natalya', movie:'Mirror' },
  { image: 'https://media.nouvelobs.com/ext/uri/sreferentiel.nouvelobs.com/file/rue89/604644e046925b2a804cf087703c5023.jpg', isLongHair: true, character: 'Laurence', movie:'Laurence Anyways' },
  { image: 'https://dafilmfestival.com/wp-content/uploads/2019/11/RET_la-belle-personne-1600x900.jpg', isLongHair: true, character: 'Junie', movie:'The Beautiful Person' },
  { image: 'https://variety.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-01-at-9.11.46-AM.png', isLongHair: false, character: 'Catwoman', movie:'Batman' },
  { image: 'https://i.ytimg.com/vi/I1EtvERDcqw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkXDGvDhCU7oCxqeEh5ET6TpcugA', isLongHair: false, character: 'Nana', movie:'Vivre Sa Vie' },
  { image: 'https://media.newyorker.com/photos/5e2b32a45b5737000854e517/master/pass/Brody-JustAnotherGirlontheIRT.jpg', isLongHair: true, character: 'Chantel', movie:'Just Another Girl on the I.R.T.'},
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOF5VZaAw9YYLEa13U3saCz6IN8tv5GFybtnt7NNK3p0t7wLXwmOJLlyRSKNoZJL9I0c&usqp=CAU', isLongHair: false, character: 'Diouana', movie:'La Noire de…' },
  { image: 'https://thefilmstage.com/wp-content/uploads/2021/03/The-Inheritance-1.jpeg', isLongHair: false, character: 'Gwen', movie:'The Inheritance' },
  { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false, character: 'Fleur', movie:'Rouge'},
  { image: 'https://www.artforum.com/wp-content/uploads/2013/04/article_large-129.jpg', isLongHair: false, character: 'test', movie:'test'}
]


let counter = 0;

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s * 1.2})`

function Deck() {
  const [outcome, setOutcome] = useState({ result: '', counter: 0, image: '' });
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  // const [topCardIndex, setTopCardIndex] = useState(0); 
  // const [deckPosition, setDeckPosition] = useState({ x: 0, y: 0 }); 
  const [draggedCardIndex, setDraggedCardIndex] = useState(null);

  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  

function onSwipe(direction: 'left' | 'right', isLongHair: boolean) {
  if ((direction === 'right' && isLongHair) || (direction === 'left' && !isLongHair)) {
    counter += 1;
  } else {
    counter -= 1;
  }
  console.log(counter);
}

function evaluateResult() {
  let message;
  let imageUrl;
  if (counter > 0) {
    message = "keep growing your hair";
    imageUrl = 'https://images.mubicdn.net/images/film/293109/cache-873257-1682687759/image-w1280.jpg?size=800x';
  } else if (counter < 0) {
    message = "it's time to cut your hair";
    imageUrl = 'https://s3.amazonaws.com/festivaldorio/2021/site/peliculas/large2/pierrotle_f03cor_2019113395.jpg';
  } else {
    message = "you're undecided"; 
    imageUrl = 'https://www.ingmarbergman.se/sites/default/files/persona_1.jpg';

  }
    return { result: message, counter, image: imageUrl };
}

function handleEndOfSwiping() {
  const evaluationResult = evaluateResult();
  setOutcome(evaluationResult); // Update the state
}

const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

// const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
//   const swipeDistanceThreshold = 50; // Adjust this value based on testing
//   const swipeVelocityThreshold = 0.5; // Adjust this value as needed

//   const isSwipe = Math.abs(mx) > swipeDistanceThreshold && velocity > swipeVelocityThreshold;
//   const swipeDirection = mx < 0 ? 'left' : 'right';

//   if (!down && isSwipe) {
//       gone.add(index);
//       onSwipe(swipeDirection, cards[index].isLongHair);
//   } else if (!down) {
//       gone.delete(index); // Reset the card if it's not a swipe
//   }

//   api.start(i => {
//       if (index !== i) return; // Only affect the swiped card
//       const isGone = gone.has(index);
//       const x = isGone ? (200 + window.innerWidth) * (swipeDirection === 'left' ? -1 : 1) : down ? mx : 0;
//       const rot = mx / 100 + (isGone ? (swipeDirection === 'left' ? -1 : 1) * 10 * velocity : 0);
//       const scale = down ? 1.1 : 1;
//       return {
//           x,
//           rot,
//           scale,
//           delay: undefined,
//           config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
//       };
//   });

//   if (!down && gone.size === cards.length) {
//       handleEndOfSwiping();
//   }
// });


// const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
//     const trigger = velocity > 1 // If you flick hard enough it should trigger the card to fly out
//     const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
      
//     const direction = dir === -1 ? 'left' : 'right';

//     if (down) {
//       setDraggedCardIndex(index);
//     } else {
//       setDraggedCardIndex(null);
//     }

//     setDotPosition({ x: mx});

//     if (!down && trigger) {
//       gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
//       onSwipe(direction, cards[index].isLongHair);
//       // setTopCardIndex(topCardIndex + 1);
//   }
const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 1 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
      
    const direction = dir === -1 ? 'left' : 'right';

    if (down) {
      setDraggedCardIndex(index);
    } else {
      setDraggedCardIndex(null);
    }

    setDotPosition({ x: mx});

    if (!down && trigger) {
      gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      onSwipe(direction, cards[index].isLongHair);
      // setTopCardIndex(topCardIndex + 1);
  }

    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flies out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })

    // const updateDeckPosition = (newX, newY) => {
    //   setDeckPosition({ x: newX, y: newY });
    // };

    // if i wanted to reshuffle
    // if (!down && gone.size === cards.length)
    //   setTimeout(() => {
    //     gone.clear()
    //     api.start(i => to(i))
  
    //       // Now that all cards have been swiped, evaluate the result
    //       handleEndOfSwiping();
    //       // console.log(result); // Or update a state variable to display it in the UI
    //     }, 600);

    if (!down && gone.size === cards.length) {
      handleEndOfSwiping(); 
    }
    
      
  })

  return (
    <>
 
{/* <div className={styles.deckContainer}>
    {props.map(({ x, y, rot, scale }, i) => (
      <div key={i} style={{ position: 'relative' }}>
        <animated.div className={styles.deck} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i].image})`,
            }}
          />
        </animated.div>
        <animated.div className={styles.cardText} style={{ transform: `translate3d(${x}px, ${y}+100px, 0)`, position: 'absolute' }}>
          {cards[i].character}
        </animated.div>
      </div>
    ))}
  </div> */}
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i].image})`,
            }}
          />
                     {/* <div>{cards[i].character}</div>  */}

        </animated.div>
      ))}
{/* 
<div
      style={{
        position: 'absolute',
        bottom: '-5px', // Adjust this value to position below the deck
        left: `calc(50% + ${dotPosition.x}px)`, // Center the dot and adjust based on drag
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'red', // Or any color you prefer
        transform: 'translateX(-50%)' // Center the dot horizontally
      }}

      /> */}

<div style={{
    position: 'absolute',
    bottom: '60px',
    left: `calc(50% + ${dotPosition.x}px)`,
    transform: 'translateX(-50%)'
}}>
    {draggedCardIndex !== null && (
        <div style={{ marginLeft: '15px', display: 'inline-block' }}>
            {cards[draggedCardIndex].character} from {cards[draggedCardIndex].movie}
        </div>
    )}
    {/* <div style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'red',
    }} /> */}
</div>

{/* 
{draggedCardIndex !== null && (
      <div style={{
        position: 'absolute',
        left: `50%`, // Center horizontally
        bottom: '-5px', // Position below the deck
        transform: `translateX(${dotPosition.x}px)`, // Move horizontally based on drag
      }}>
        {cards[draggedCardIndex].character}
      </div>
    )} */}

      {/* <animated.div
        style={{
          position: "absolute",
          bottom: "20px", // Adjust this value as needed
          left: deckPosition.x,
          transform: `translateY(${deckPosition.y}px)`,
        }}
      >
        <p>Your dynamic text here</p>
      </animated.div> */}

      {/* {cards[topCardIndex] && (
        <div className="card-details">
          <h3>{cards[topCardIndex].character}</h3>
          <p>from {cards[topCardIndex].movie}</p>
        </div>
      )} */}

      {outcome.image && (
        <div className="result-image">
          <img src={outcome.image} alt="Result Image" />
          <div className="result-text">
            <p
              style={{ fontSize: "18px", fontWeight: "bold", padding: "10px" }}
            >
              {outcome.result}{" "}
              <span style={{ fontSize: "16px", fontWeight: "normal" }}>
                your score is {outcome.counter}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <div className={styles.container}>
      <Deck />
    </div>
    
  )
}
