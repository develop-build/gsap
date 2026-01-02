import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      '#purple-box',
      {
        x: 0,
        rotation: 0,
        borderRadius: '0%',
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        borderRadius: '100%',
        duration: 2,
        ease: 'bounce.out',
      }
    );
  }, []);

  return (
    <div className="mt-20">
      <div id="purple-box" className="w-20 h-20 bg-purple-600 rounded-lg"></div>
    </div>
  );
};

export default GsapFromTo;
