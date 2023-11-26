import  { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import styles from './swipestyles.module.css'

import { useEffect } from 'react';

import nomadland from "src/assets/nomadland.jpeg";
import rouge from "src/assets/rouge.jpeg";
import vivresavie from "src/assets/vivresavie.jpeg";
import womenwhoran from "src/assets/womenwhoran.jpeg";

// import cards from "/src/assets/cards.js";

interface Card {
  image: string;
  isLongHair: boolean;
}

const cards: Card[] = [
  // { image: nomadland, isLongHair: false },
  // { image: rouge, isLongHair: true },
  // { image: vivresavie, isLongHair: false },
  // { image: womenwhoran, isLongHair: true },
  { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  // { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  // { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  // { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  // { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  // { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  // { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  // { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  // { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  // { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  // { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  // { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  // { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  // { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  // { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  // { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  // { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  // { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  // { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  // { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  // { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  // { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  // { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },
  // { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false },
  // { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true },

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
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [result, setResult] = useState('');
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  

  // //defining left and right
  // const left = false;
  // const right = false;

// Function to evaluate the result after all images are swiped

// Function that's called every time an image is swiped
function onSwipe(direction: 'left' | 'right', isLongHair: boolean) {
  if ((direction === 'right' && isLongHair) || (direction === 'left' && !isLongHair)) {
    counter += 1;
  } else {
    counter -= 1;
  }
  console.log(counter);
}


function evaluateResult() {
  if (counter > 0) {
    console.log("keep growing your hair");
    return 'keep growing your hair';
  } else if (counter < 0) {
    console.log("cut your hair");
    return 'cut your hair';
  } else {
    console.log("balanced preference");
    return 'balanced preference'; // or any default recommendation
  }
}

function handleEndOfSwiping() {
  const evaluationResult = evaluateResult();
  setResult(evaluationResult); // Update the state
}

  
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
      
    // left = dir === -1;
    // right = dir === 1;
    const direction = dir === -1 ? 'left' : 'right';

    if (!down && trigger) {
      gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      onSwipe(direction, cards[index].isLongHair);
  }
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
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

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i].image})`,
            }}
            // className={styles.card}
          />
        </animated.div>

      ))}
        {result && <div className="result-display">{result}</div>}
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
