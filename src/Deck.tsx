import  { useState, useEffect } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import styles from './swipestyles.module.css'
// import Result from './Result';

interface Card {
  image: string;
  isLongHair: boolean;
  character: string;
  movie: string;
}

const cards: Card[] = [
  { image: 'https://www.filmlinc.org/wp-content/uploads/2016/11/millenniummambo2-1600x900-c-default.jpg', isLongHair: true, character: 'Vicky', movie:'Milenium Mambo' },
  { image: 'https://m.media-amazon.com/images/M/MV5BOGY0MzcxZmItNDAzMC00OGUyLTkxYmEtODJlYTE1OWY1NjU2XkEyXkFqcGdeQWpnYW1i._V1_.jpg', isLongHair: false, character: 'Leda', movie:'The Lost Daughter'},
  { image: 'https://assets.vogue.com/photos/615c664300122a1a679f53f1/4:3/w_2396,h_1797,c_limit/MCDROTE_EC021.jpeg', isLongHair: false, character: 'Margot', movie:'The Royal Tenenbaums' },
  { image: 'https://64.media.tumblr.com/ed8b27531fd815312c7b71e28b91d7e3/tumblr_n96s2c0A3J1t144d3o2_1280.jpg', isLongHair: true, character: 'Isabelle', movie:'The Dreamers' },
  { image: 'https://springbackmagazine.com/wp-content/uploads/2018/07/a-girl-walks-home-alone-at-night.jpg', isLongHair: false, character: 'Shirin', movie:'A Girl Walks Home Alone at Night' },
  { image: 'https://static01.nyt.com/images/2022/02/02/arts/worst-person-anatomy2/worst-person-anatomy2-superJumbo-v2.jpg', isLongHair: true, character: 'Julie', movie:'The Worst Person in the World' },
  { image: 'https://i.pinimg.com/originals/e7/6c/40/e76c4005311ab78f14b0668b1ae7a9f6.jpg', isLongHair: false, character: 'Tina', movie:'Do the Right Thing' },
  { image: 'data:image/jpeg;base64,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', isLongHair: false, character: 'Detroit', movie:'Sorry to Bother You'  },
  { image: 'https://m.media-amazon.com/images/M/MV5BZDMxZTYzMzUtZTEwNS00YjAzLTkyNzctNmVkNDNlNTI3ZjBjXkEyXkFqcGdeQXVyMzIwNDY4NDI@._V1_.jpg', isLongHair: false, character: 'Noqreh', movie:'At Five in the Afternoon' },
  { image: 'https://www.slashfilm.com/img/gallery/shifting-his-focus-to-female-led-films-felt-natural-for-park-chan-wook/l-intro-1652794415.jpg', isLongHair: true, character: 'Lady Hideko', movie:'Handmaiden' },
  { image: 'https://cineuropa.org/imgCache/2021/08/23/1629718517738_1000x0702_0x0x0x0_1679266092973.jpg', isLongHair: false, character: 'Ada', movie:'Unclenching the Fists' },
  { image: 'https://www.indiewire.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-25-at-10.30.13-AM.png', isLongHair: false, character: 'Ava', movie:'Ex Machina' },
  { image: 'https://2.bp.blogspot.com/-uK7QBz3DtzQ/V5gQtuwtHII/AAAAAAAAHOQ/kl4sAhaVJAAmqs115uiGMrFuRTWu2LDlACLcB/s1600/The%2BMirror%2B6.jpg', isLongHair: true, character: 'Natalya', movie:'Mirror' },
  { image: 'https://media.nouvelobs.com/ext/uri/sreferentiel.nouvelobs.com/file/rue89/604644e046925b2a804cf087703c5023.jpg', isLongHair: true, character: 'Laurence', movie:'Laurence Anyways' },
  { image: 'https://dafilmfestival.com/wp-content/uploads/2019/11/RET_la-belle-personne-1600x900.jpg', isLongHair: true, character: 'Junie', movie:'The Beautiful Person' },
  { image: 'https://variety.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-01-at-9.11.46-AM.png', isLongHair: false, character: 'Catwoman', movie:'Batman' },
  { image: 'https://i.ytimg.com/vi/I1EtvERDcqw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkXDGvDhCU7oCxqeEh5ET6TpcugA', isLongHair: false, character: 'Nana', movie:'Vivre Sa Vie' },
  { image: 'https://media.newyorker.com/photos/5e2b32a45b5737000854e517/master/pass/Brody-JustAnotherGirlontheIRT.jpg', isLongHair: true, character: 'Chantel', movie:'Just Another Girl on the I.R.T.'},
  { image: 'https://imengine.prod.srp.navigacloud.com/?uuid=45B7C6F8-2489-4412-9FF8-128AA1189D62&type=primary&q=72&width=1200', isLongHair: true, character: 'Sara', movie:'Losing Ground'},
  { image: 'https://s01.sgp1.cdn.digitaloceanspaces.com/inline/xwosdsysdf-1618688471.png', isLongHair: true, character: 'Mina', movie:'Mississipi Masala'},
  { image: 'https://thefilmstage.com/wp-content/uploads/2021/03/The-Inheritance-1.jpeg', isLongHair: true, character: 'Asili', movie:'Inheritance'},
  { image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7826-/6STizdJpBHXBgKFGsXuAspL0PkNDqT_original.jpg', isLongHair: false, character: 'Fleur', movie:'Rouge'}
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
    message = "keep growing your hair and patience will pay off";
    imageUrl = 'https://64.media.tumblr.com/b536c8964871e83ae57c6948b0c3da0b/d1f3365b1fa9f918-fa/s540x810/199ccd0f1436e830d814e0a49c70c192fb9fc402.gif';
  } else if (counter < 0) {
    message = "it's time to cut your hair, your swipes aren't lying";
    imageUrl = 'https://s3.amazonaws.com/festivaldorio/2021/site/peliculas/large2/pierrotle_f03cor_2019113395.jpg';
  } else {
    message = "you're undecided, go for a walk"; 
    imageUrl = 'https://www.ingmarbergman.se/sites/default/files/persona_1.jpg';

  }
    return { result: message, counter, image: imageUrl };
}

function handleEndOfSwiping() {
  const evaluationResult = evaluateResult();
  setOutcome(evaluationResult); // Update the state
}

const [dotPosition, setDotPosition] = useState({ x: 0});

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
    bottom: '60px',
    left: `calc(50% + ${dotPosition.x}px)`,
    transform: 'translateX(-50%)',
    fontFamily: 'Helvetica, Arial, sans-serif' 
}}>
    {draggedCardIndex !== null && (
        <div style={{ marginLeft: '15px', display: 'inline-block',  fontSize: '20px', fontWeight: 'bold'  }}>
            {cards[draggedCardIndex].character} from <span style={{ fontStyle: 'italic' }}>{cards[draggedCardIndex].movie}</span>
        </div>
    )}
   
</div>

      {outcome.image && (
        <div className="result-image">
          <img src={outcome.image} alt="Result Image" />
          <div className="result-text">
            <p
              style={{ fontSize: "18px", fontWeight: "bold", padding: "10px" }}
            >
              {outcome.result}{" "}
              <span style={{ fontSize: "16px", fontWeight: "normal" }}>
              </span>
            </p>
          </div>
        </div>
      )}
          </div>

    </>
  );
}
