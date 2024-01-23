import  { useState} from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import styles from './swipestyles.module.css'

import vicky from './images/vicky.png';
import leda from './images/leda.png';
import margot from './images/margot.png';
import isabelle from './images/isabelle.png';
import shirin from './images/shirin.png';
import julie from './images/julie.png';
import tina from './images/tina.png';
import detroit from './images/detroit.png';
import noqreh from './images/noqreh.png';
import hideko from './images/hideko.png';
import ada from './images/ada.png';
import ava from './images/ava.png';
import natalya from './images/natalya.png';
import laurence from './images/laurence.png';
import catwoman from './images/catwoman.png';
import nana from './images/nana.png';
import sara from './images/sara.png';
import patricia from './images/patricia.png';
import asili from './images/asili.png';
import noriko from './images/noriko.png';
import olivia from './images/olivia.png';
import fleur from './images/fleur.png';

import undecided from './images/undecided.png';
import longresult from './images/longresult.png';
import shortresult from './images/shortresult.png';


interface Card {
  image: string;
  isLongHair: boolean;
  character: string;
  movie: string;
}

const cards: Card[] = [
  { image: vicky, isLongHair: true, character: 'Vicky', movie:'Millenium Mambo' },
  { image: leda, isLongHair: false, character: 'Leda', movie:'The Lost Daughter'},
  { image: margot, isLongHair: false, character: 'Margot', movie:'The Royal Tenenbaums' },
  { image: isabelle, isLongHair: true, character: 'Isabelle', movie:'The Dreamers' },
  { image: shirin, isLongHair: false, character: 'Shirin', movie:'A Girl Walks Home Alone at Night' },
  { image: julie, isLongHair: true, character: 'Julie', movie:'The Worst Person in the World' },
  { image: tina, isLongHair: false, character: 'Tina', movie:'Do the Right Thing' },
  { image: detroit, isLongHair: false, character: 'Detroit', movie:'Sorry to Bother You'  },
  { image: noqreh, isLongHair: true, character: 'Noqreh', movie:'At Five in the Afternoon' },
  { image: hideko, isLongHair: true, character: 'Lady Hideko', movie:'Handmaiden' },
  { image: ada, isLongHair: false, character: 'Ada', movie:'Unclenching the Fists' },
  { image: ava, isLongHair: false, character: 'Ava', movie:'Ex Machina' },
  { image: natalya, isLongHair: true, character: 'Natalya', movie:'Mirror' },
  { image: laurence, isLongHair: true, character: 'Laurence', movie:'Laurence Anyways' },
  { image: catwoman, isLongHair: false, character: 'Catwoman', movie:'Batman' },
  { image: nana, isLongHair: false, character: 'Nana', movie:'Vivre Sa Vie' },
  { image: sara, isLongHair: true, character: 'Sara', movie:'Losing Ground'},
  { image: patricia, isLongHair: false, character: 'Patricia', movie:'A Bout De Souffle'},
  { image: asili, isLongHair: true, character: 'Asili', movie:'Inheritance'},
  { image: noriko, isLongHair: true, character: 'Noriko', movie:'Late Spring'},
  { image: olivia, isLongHair: true, character: 'Olivia', movie:'Lingua Franca'},
  { image: fleur, isLongHair: false, character: 'Fleur', movie:'Rouge'}
]
  
export default function Deck(){

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


  const [outcome, setOutcome] = useState({ result: '', counter: 0, image: '' });
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out

  const [draggedCardIndex, setDraggedCardIndex] = useState(null);

  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) 

  
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
    message = "keep growing your hair and your patience will pay off";
    imageUrl = longresult;
  } else if (counter < 0) {
    message = "it's time to cut your hair, your swipes aren't lying";
    imageUrl = shortresult;
  } else {
    message = "you're undecided, go for a walk"; 
    imageUrl = undecided;

  }
    return { result: message, counter, image: imageUrl };
}

function handleEndOfSwiping() {
  const evaluationResult = evaluateResult();
  setOutcome(evaluationResult); 
}

const [dotPosition, setDotPosition] = useState({ x: 0});

const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
  // Use both direction and velocity to determine if a swipe should be triggered
  const trigger = velocity > 0.7 && ((xDir < 0 && mx < 0) || (xDir > 0 && mx > 0));
  const dir = xDir < 0 ? -1 : 1;
  const direction = dir === -1 ? 'left' : 'right';


  if (down) {
    setDraggedCardIndex(index);
  } else {
    setDraggedCardIndex(null);
  }

  setDotPosition({ x: mx});
  if (!down && trigger) {
    gone.add(index);
    onSwipe(direction, cards[index].isLongHair);

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

    if (!down && gone.size === cards.length) {
      handleEndOfSwiping(); 
    }
    
      
  })

  return (
    <>
    <div className={styles.container}> 
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i].image})`,
            }}
          />
        </animated.div>
      ))}

<div style={{
    position: 'absolute',
    bottom: '150px',
    left: `calc(50% + ${dotPosition.x}px)`,
    transform: 'translateX(-50%)',
    fontFamily: 'Helvetica, Arial, sans-serif',
    textTransform: 'uppercase',
}}>
    {draggedCardIndex !== null && (
        <div style={{ marginLeft: '15px', display: 'inline-block',  fontSize: '20px', fontWeight: 'bold'  }}>
            {cards[draggedCardIndex].character} from <span style={{ fontStyle: 'italic' }}>{cards[draggedCardIndex].movie}</span>
        </div>
    )}
   
</div>
<div className="moment-of-truth">
{outcome.image && (
        <div className="result-image">
          <img src={outcome.image} alt="Result Image" />
          <div className="result-text">
          <p style={{ fontSize: "20px", fontWeight: "500", padding: "15px", fontFamily: "Helvetica" }}>
              {outcome.result}{" "}
              <span style={{ fontSize: "16px", fontWeight: "normal" }}>
              </span>
            </p>
          </div>
        </div>
      )}
</div>
  
          </div>

    </>
  );
}
