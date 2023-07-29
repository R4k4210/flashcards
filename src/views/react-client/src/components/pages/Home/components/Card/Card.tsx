import { TCharacterImage } from '@core/wanikani/domain/models/Subject';
import styles from './Card.module.scss';

type ICard = {
    character: string;
    object: string;
} & (IRadicals | IKanjiAndVocabulary);

type IRadicals = {
    type: 'radical';
    character_images: TCharacterImage[];
};

type IKanjiAndVocabulary = {
    type: 'kanji' | 'vocabulary';
};

const stylesMap: { [key: string]: string } = {
    kanji: styles.card__kanji,
    radical: styles.card__radical,
    vocabulary: styles.card__vocabulary
};

const getCharacter = (character: string, character_images: TCharacterImage[]) => {
    if (character) {
        return <span>{character}</span>;
    }

    return <img src={`${character_images[5].url}?w=50&h=50`} alt={''} />;
};

const Card = (props: ICard) => {
    return (
        <div
            className={`${styles.card} ${stylesMap[props.object]} cards_characters_${
                props.type === 'vocabulary' && props.character?.length
            }`}
        >
            {props.type === 'radical' ? getCharacter(props.character, props.character_images) : <span>{props.character}</span>}
        </div>
    );
};

export default Card;
