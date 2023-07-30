import { TSubject } from '@core/wanikani/domain/models/Subject';
import Card from '../Card/Card';
import styles from './CardList.module.scss';

interface ICardList {
    subjects: TSubject[];
    isLoading: boolean;
    selectedCard: number;
    onCardClick: (id: number) => void;
}

const CardList = ({ subjects, isLoading, selectedCard, onCardClick }: ICardList) => {
    return (
        <>
            {isLoading && <p>Loading...</p>}
            <ul className={styles.cardList}>
                {subjects.map((subject) => (
                    <Card key={subject.id} subject={subject} onClick={onCardClick} isSelected={subject.id === selectedCard} />
                ))}
            </ul>
        </>
    );
};

export default CardList;
