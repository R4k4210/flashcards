import { useEffect, useState } from 'react';
import { TSubject } from '@core/wanikani/domain/models/Subject';
import { wanikaniController } from '@core/wanikani/application/WanikaniController';
import { wanikaniRepository } from '@core/wanikani/infrastructure/repositories/WanikaniRepository';
import styles from './Home.module.scss';
import Card from './components/Card/Card';

const Home = () => {
    const [kanjis, setKanjis] = useState<TSubject[]>([]);
    const [radicals, setRadicals] = useState<TSubject[]>([]);
    const [vocabulary, setVocabulary] = useState<TSubject[]>([]);

    useEffect(() => {
        wanikaniController(wanikaniRepository())
            .getSubjectsByUser()
            .then((subjects) => {
                setKanjis(subjects.filter((subject) => subject.object === 'kanji'));
                setRadicals(subjects.filter((subject) => subject.object === 'radical'));
                setVocabulary(subjects.filter((subject) => subject.object === 'vocabulary'));
            });
    }, []);

    return (
        <div className={styles.container}>
            <h1>Wanikani Cards</h1>

            <h2>Radicals</h2>
            <div className={styles.subjectsContainer}>
                {radicals.map(({ characters, id, object }) => (
                    <Card key={id} character={characters} object={object} />
                ))}
            </div>

            <h2>Kanjis</h2>
            <div className={styles.subjectsContainer}>
                {kanjis.map(({ characters, id, object }) => (
                    <Card key={id} character={characters} object={object} />
                ))}
            </div>

            <h2>Vocabulary</h2>
            <div className={styles.subjectsContainer}>
                {vocabulary.map(({ characters, id, object }) => (
                    <Card key={id} character={characters} object={object} />
                ))}
            </div>
        </div>
    );
};

export default Home;
