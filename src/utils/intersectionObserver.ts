export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  const observer = new IntersectionObserver(callback, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px',
    ...options
  });

  return observer;
};

export const animateSkillBars = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-bar');
      skillBars.forEach((bar, index) => {
        const progressBar = bar.querySelector('.skill-progress') as HTMLElement;
        const percentage = progressBar.dataset.percentage;
        
        setTimeout(() => {
          progressBar.style.width = `${percentage}%`;
        }, index * 200);
      });
    }
  });
};