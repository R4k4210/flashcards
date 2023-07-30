import { TSubject } from '@core/wanikani/domain/models/Subject';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import styles from './Card.module.scss';

type ICard = {
    subject: TSubject;
    isSelected: boolean;
    onClick: (id: number) => void;
};

type IOverlay = {
    isSelected: boolean;
    onClick: (id: number) => void;
    className: string;
};

const stylesMap: { [key: string]: string } = {
    kanji: styles.card__kanji,
    radical: styles.card__radical,
    vocabulary: styles.card__vocabulary
};

const getCharacter = (subject: TSubject) => {
    if (subject.characters) {
        return <span>{subject.characters}</span>;
    }

    return <img src={`${subject.character_images[5].url}?w=50&h=50`} alt={''} />;
};

const Overlay = ({ isSelected, onClick }: IOverlay) => (
    <motion.div
        initial={false}
        animate={{ opacity: isSelected ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
        className={styles.overlay}
        onClick={() => onClick(-1)}
    />
);

const curve = {
    type: 'spring',
    stiffness: 400,
    damping: 50
};

const cardVariants: Variants = {
    unselected: {
        width: 138,
        height: 138,
        zIndex: 1
    },
    selected: {
        width: 500,
        height: 700,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    exit: {
        scale: [null, 1, 1]
    }
};

const Card = ({ subject, isSelected, onClick }: ICard) => {
    return (
        <AnimatePresence>
            <div className={`${styles.container}`}>
                <motion.div
                    style={{ zIndex: isSelected ? 2 : 0 }}
                    initial={false}
                    exit='exit'
                    animate={isSelected ? 'selected' : 'unselected'}
                    transition={{ ...curve }}
                >
                    <Overlay className={styles.overlay} isSelected={isSelected} onClick={onClick} />
                    <motion.div
                        variants={cardVariants}
                        className={`${styles.card} ${stylesMap[subject?.object]} ${!isSelected && styles.scaleHover}`}
                        data-size={subject.object === 'vocabulary' && subject.characters?.length}
                        onClick={() => onClick(subject.id)}
                    >
                        {getCharacter(subject)}
                    </motion.div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default Card;
