import { HTMLAttributes, ReactElement, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Accordion.module.scss';

interface IAccordion extends HTMLAttributes<HTMLElement> {
  title: string;
  expanded: boolean;
  children: ReactElement;
}

const Accordion = ({ children, expanded = false, title }: IAccordion): ReactElement => {
  const [isOpen, setIsOpen] = useState(expanded);

  return (
    <div className={styles.container}>
      <motion.header initial={false} animate={{ backgroundColor: isOpen ? '#4d9980' : '#5b38a5' }} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
