import React, { FC, useEffect, useRef, useState } from 'react';
import './VisibleSectionEffect.css';

interface Props {
  children: JSX.Element;
  setCurrentlyVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

const VisibleSectionEffect: FC<Props> = ({ children, setCurrentlyVisible }) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentRef: any = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      currentRef = domRef.current;
      observer.observe(domRef.current);
    }

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (isVisible && setCurrentlyVisible) {
      setCurrentlyVisible(true);
    } else {
      if (setCurrentlyVisible) {
        setCurrentlyVisible!(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default VisibleSectionEffect;