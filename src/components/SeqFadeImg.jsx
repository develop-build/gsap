import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const SeqFadeImg = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      imagesRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'circ.out',
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center p-8">
      {[1, 2, 3, 4].map((num, i) => (
        <img
          key={i}
          ref={(el) => {
            if (el && !imagesRef.current.includes(el)) {
              imagesRef.current.push(el);
            }
          }}
          src={`/${num}.jpg`}
          alt={`Image ${num}`}
          className="w-80 h-auto rounded-xl shadow-lg"
        />
      ))}
    </div>
  );
};

export default SeqFadeImg;
