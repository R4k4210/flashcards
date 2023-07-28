import styles from './Card.module.scss';

interface ICard {
  character: string;
  object: string;
}

const stylesMap: { [key: string]: string } = {
  kanji: styles.card__kanji,
  radical: styles.card__radical,
  vocabulary: styles.card__vocabulary
};

const Card = ({ character, object }: ICard) => {
  return (
    <div className={`${styles.card} ${stylesMap[object]}`}>
      <span>{character}</span>
    </div>
  );
};

export default Card;
