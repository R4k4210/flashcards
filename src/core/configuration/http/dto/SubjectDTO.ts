export interface SubjectsDTO {
    object: string;
    url: string;
    pages: Pages;
    total_count: number;
    data_updated_at: string;
    data: SubjectDTO[];
}

export interface Pages {
    per_page: number;
    next_url: string | null;
    previous_url: any;
}

export interface SubjectDTO {
    id: number;
    object: string;
    url: string;
    data_updated_at: string;
    data: Data;
}

export interface Data {
    created_at: string;
    level: number;
    slug: string;
    hidden_at: any;
    document_url: string;
    characters: string;
    meanings: Meaning[];
    auxiliary_meanings: AuxiliaryMeaning[];
    readings?: Reading[];
    parts_of_speech?: string[];
    component_subject_ids?: number[];
    meaning_mnemonic: string;
    reading_mnemonic?: string;
    context_sentences?: ContextSentence[];
    pronunciation_audios?: PronunciationAudio[];
    lesson_position: number;
    spaced_repetition_system_id: number;
    amalgamation_subject_ids?: number[];
    visually_similar_subject_ids?: number[];
    meaning_hint?: string;
    reading_hint?: string;
    character_images?: CharacterImage[];
}

export interface AuxiliaryMeaning {
    type: string;
    meaning: string;
}

export interface ContextSentence {
    en: string;
    ja: string;
}

export interface PronunciationAudio {
    url: string;
    metadata: Metadata;
    content_type: string;
}

export interface Reading {
    primary: boolean;
    reading: string;
    accepted_answer: boolean;
    type?: string;
}

export interface CharacterImage {
    url: string;
    metadata: Metadata;
    content_type: string;
}

export interface Metadata {
    inline_styles?: boolean;
    color?: string;
    dimensions?: string;
    style_name?: string;
    gender?: string;
    source_id?: number;
    pronunciation?: string;
    voice_actor_id?: number;
    voice_actor_name?: string;
    voice_description?: string;
}

export interface Meaning {
    meaning: string;
    primary: boolean;
    accepted_answer: boolean;
}
