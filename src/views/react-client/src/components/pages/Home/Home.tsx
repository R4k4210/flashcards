import useGetSubjects from '@/hooks/wanikani/useGetSubjects';
import styles from './Home.module.scss';
import Card from './components/Card/Card';

const Home = () => {
    const { data, error, isLoading } = useGetSubjects();
    const { kanjis, radicals, vocabulary } = data;

    return (
        <div className={styles.container}>
            <h1>Wanikani Cards</h1>

            <h2>Radicals</h2>
            <div className={styles.subjectsContainer}>
                {isLoading && <p>Loading...</p>}

                {radicals.map(({ characters, id, object, character_images }) => (
                    <Card type='radical' key={id} character={characters} object={object} character_images={character_images} />
                ))}
            </div>

            <h2>Kanjis</h2>
            <div className={styles.subjectsContainer}>
                {isLoading && <p>Loading...</p>}

                {kanjis.map(({ characters, id, object }) => (
                    <Card type='kanji' key={id} character={characters} object={object} />
                ))}
            </div>

            <h2>Vocabulary</h2>
            <div className={styles.subjectsContainer}>
                {isLoading && <p>Loading...</p>}

                {vocabulary.map(({ characters, id, object }) => (
                    <Card type='vocabulary' key={id} character={characters} object={object} />
                ))}
            </div>
        </div>
    );
};

export default Home;
