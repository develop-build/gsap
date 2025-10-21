import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const FadeInImg = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (imgElement) {
      gsap.fromTo(
        imgElement,
        { opacity: 0, y: 75 },
        { opacity: 1, y: 0, duration: 2, delay: 0.1, ease: 'power3.out' }
      );
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-500">
      <h1 className="text-white text-2xl underline mb-6">Fade-In Image on load</h1>
      <img
        ref={imgRef}
        src="https://images.unsplash.com/photo-1760867191563-791f803e1bcd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        alt="Mountains"
        className="w-80 h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default FadeInImg;
