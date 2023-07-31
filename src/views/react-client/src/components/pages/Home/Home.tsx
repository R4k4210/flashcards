import { useState } from 'react';
import useGetSubjects from '@/hooks/wanikani/useGetSubjects';
import styles from './Home.module.scss';
import Accordion from './components/Accordion';
import CardList from './components/CardList/CardList';

const Home = () => {
    const [selectedCard, setSelectedCard] = useState(-1);
    const { data, error, isLoading } = useGetSubjects();
    const { kanjis, radicals, vocabulary } = data;

    const selectCard = (id: number) => {
        setSelectedCard(id);
    };

    return (
        <div className={styles.container}>
            <h1>Wanikani Cards</h1>

            <Accordion title='Kanjis' expanded={true}>
                <CardList subjects={kanjis} isLoading={isLoading} selectedCard={selectedCard} onCardClick={selectCard} />
            </Accordion>

            <Accordion title='Radicals' expanded={false}>
                <CardList subjects={radicals} isLoading={isLoading} selectedCard={selectedCard} onCardClick={selectCard} />
            </Accordion>

            <Accordion title='Vocabulary' expanded={false}>
                <CardList subjects={vocabulary} isLoading={isLoading} selectedCard={selectedCard} onCardClick={selectCard} />
            </Accordion>

            {error && <p>{'Hubo un error cargando los datos, por favor intente más tarde'}</p>}
        </div>
    );
};

export default Home;
