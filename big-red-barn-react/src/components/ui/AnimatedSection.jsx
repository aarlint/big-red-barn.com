import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

/**
 * AnimatedSection component that animates its children when they come into view
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be animated
 * @param {string} props.animation - Animation type: 'fadeIn', 'slideUp', 'slideIn', 'scale', 'staggered'
 * @param {number} props.delay - Delay before animation starts (in seconds)
 * @param {number} props.duration - Animation duration (in seconds)
 * @param {Object} props.custom - Custom animation variants
 * @param {Object} props.containerProps - Props to be passed to the container Box
 */
const AnimatedSection = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.5,
  custom,
  ...containerProps
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Animation variants
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    slideIn: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    staggered: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration,
          delay,
          staggerChildren: 0.1,
          ease: 'easeOut'
        }
      }
    },
    custom: custom || {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration,
          delay
        }
      }
    }
  };

  // Get the selected animation variant
  const selectedVariant = variants[animation] || variants.fadeIn;

  // Trigger animation when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedVariant}
      {...containerProps}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedSection;