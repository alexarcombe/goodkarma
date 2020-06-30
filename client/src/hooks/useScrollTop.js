import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';

function useScrollTop() {
  useEffect(() => {
    console.log('scroll to top');
    animateScroll.scrollToTop();
  }, []);
}

export default useScrollTop;
