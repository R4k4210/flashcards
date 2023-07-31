import { SubjectsDTO } from '../../../configuration/http/dto/SubjectDTO';

export const mockSubjects: SubjectsDTO = {
    object: 'collection',
    url: 'https://api.wanikani.com/v2/subjects?page_after_id=9003',
    pages: {
        per_page: 1000,
        next_url: null,
        previous_url: 'https://api.wanikani.com/v2/subjects?page_before_id=9004'
    },
    total_count: 9181,
    data_updated_at: '2023-07-30T00:10:02.670720Z',
    data: [
        {
            id: 9006,
            object: 'vocabulary',
            url: 'https://api.wanikani.com/v2/subjects/9006',
            data_updated_at: '2023-07-25T14:50:18.063693Z',
            data: {
                created_at: '2021-05-17T09:08:24.684343Z',
                level: 1,
                slug: '完璧',
                hidden_at: null,
                document_url: 'https://www.wanikani.com/vocabulary/%E5%AE%8C%E7%92%A7',
                characters: '完璧',
                meanings: [
                    {
                        meaning: 'Perfect',
                        primary: true,
                        accepted_answer: true
                    },
                    {
                        meaning: 'Flawless',
                        primary: false,
                        accepted_answer: true
                    },
                    {
                        meaning: 'Complete',
                        primary: false,
                        accepted_answer: true
                    }
                ],
                auxiliary_meanings: [],
                readings: [
                    {
                        primary: true,
                        reading: 'かんぺき',
                        accepted_answer: true
                    }
                ],
                parts_of_speech: ['な adjective'],
                meaning_mnemonic:
                    "A \u003ckanji\u003eperfect\u003c/kanji\u003e \u003ckanji\u003edisc\u003c/kanji\u003e is \u003cvocabulary\u003eflawless\u003c/vocabulary\u003e. It's just \u003cvocabulary\u003eperfect\u003c/vocabulary\u003e. \r\n\r\nAs you may already know, in Japan the symbol ⭕ is used to mark correct answers. See how it looks like a perfect disc?",
                reading_mnemonic:
                    "This is a jukugo word that uses the on'yomi readings of the kanji. You should be able to read this on your own. Just remember that rendaku turns \u003cja\u003eへき\u003c/ja\u003e into \u003cja\u003eぺき\u003c/ja\u003e.",
                context_sentences: [
                    {
                        en: 'I can sing the Japanese national anthem perfectly.',
                        ja: '私は日本の国歌を完璧に歌えます。'
                    },
                    {
                        en: "I'm going to delete these files, then I'll be completely ready.",
                        ja: 'このファイルを削除したら、これで準備は完璧です。'
                    },
                    {
                        en: 'I want my Japanese to be flawless.',
                        ja: '日本語が完璧になりたい。'
                    }
                ],
                pronunciation_audios: [
                    {
                        url: 'https://files.wanikani.com/l5hf6z257yjlyatgpbs6l3rwlu7j',
                        metadata: {
                            gender: 'female',
                            source_id: 42850,
                            pronunciation: 'かんぺき',
                            voice_actor_id: 1,
                            voice_actor_name: 'Kyoko',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/webm'
                    },
                    {
                        url: 'https://files.wanikani.com/xc73dpghwmadavygont7occo7nwh',
                        metadata: {
                            gender: 'male',
                            source_id: 43099,
                            pronunciation: 'かんぺき',
                            voice_actor_id: 2,
                            voice_actor_name: 'Kenichi',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/webm'
                    },
                    {
                        url: 'https://files.wanikani.com/why7usm77cpvq7jyy55vg6stulgo',
                        metadata: {
                            gender: 'male',
                            source_id: 43099,
                            pronunciation: 'かんぺき',
                            voice_actor_id: 2,
                            voice_actor_name: 'Kenichi',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/mpeg'
                    },
                    {
                        url: 'https://files.wanikani.com/jpvi48nmscel7xnlx5qkf1v8gau9',
                        metadata: {
                            gender: 'male',
                            source_id: 43099,
                            pronunciation: 'かんぺき',
                            voice_actor_id: 2,
                            voice_actor_name: 'Kenichi',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/ogg'
                    },
                    {
                        url: 'https://files.wanikani.com/iq6f16o320rrgq7qjczf5sd1pgrp',
                        metadata: {
                            gender: 'female',
                            source_id: 42850,
                            pronunciation: 'かんぺき',
                            voice_actor_id: 1,
                            voice_actor_name: 'Kyoko',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/ogg'
                    },
                    {
                        url: 'https://files.wanikani.com/9afynu84l8ynfdynbhc25vegv8ig',
                        metadata: {
                            gender: 'female',
                            source_id: 42850,
                            pronunciation: 'かんぺき',
                            voice_actor_id: 1,
                            voice_actor_name: 'Kyoko',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/mpeg'
                    }
                ],
                lesson_position: 0,
                spaced_repetition_system_id: 1
            }
        },
        {
            id: 9007,
            object: 'vocabulary',
            url: 'https://api.wanikani.com/v2/subjects/9007',
            data_updated_at: '2023-07-25T14:50:18.099695Z',
            data: {
                created_at: '2021-05-17T09:12:00.627937Z',
                level: 2,
                slug: '痒い',
                hidden_at: null,
                document_url: 'https://www.wanikani.com/vocabulary/%E7%97%92%E3%81%84',
                characters: '痒い',
                meanings: [
                    {
                        meaning: 'Itchy',
                        primary: true,
                        accepted_answer: true
                    }
                ],
                auxiliary_meanings: [],
                readings: [
                    {
                        primary: true,
                        reading: 'かゆい',
                        accepted_answer: true
                    }
                ],
                parts_of_speech: ['い adjective'],
                component_subject_ids: [8996],
                meaning_mnemonic:
                    'You can guess this is an adjective from the \u003cja\u003eい\u003c/ja\u003e at the end. The meaning for the kanji is \u003ckanji\u003eitchy\u003c/kanji\u003e, and the adjective version is \u003cvocabulary\u003eitchy\u003c/vocabulary\u003e too.',
                reading_mnemonic:
                    'This word uses the same reading as the one you learned with the kanji: \u003cja\u003eかゆ\u003c/ja\u003e.',
                context_sentences: [
                    {
                        en: 'My nostrils are itchy.',
                        ja: '鼻の穴が痒い。'
                    },
                    {
                        en: "My head is itching because I haven't showered in a week.",
                        ja: '一週間シャワーを浴びてないから頭が痒い。'
                    },
                    {
                        en: "I'm so itchy that I can't sleep at night, and I'm totally sleep-deprived.",
                        ja: '夜も寝れないぐらい痒くて、めっちゃ寝不足なんだよね。'
                    }
                ],
                pronunciation_audios: [
                    {
                        url: 'https://files.wanikani.com/r02yvx4vcz6u7v3l3dhhj299f5o8',
                        metadata: {
                            gender: 'male',
                            source_id: 43100,
                            pronunciation: 'かゆい',
                            voice_actor_id: 2,
                            voice_actor_name: 'Kenichi',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/webm'
                    },
                    {
                        url: 'https://files.wanikani.com/x2znvf6bjz0d07c7ci64e5a7lo4q',
                        metadata: {
                            gender: 'female',
                            source_id: 42851,
                            pronunciation: 'かゆい',
                            voice_actor_id: 1,
                            voice_actor_name: 'Kyoko',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/webm'
                    },
                    {
                        url: 'https://files.wanikani.com/000iw0lioluoizsoh7ndf73kgzo9',
                        metadata: {
                            gender: 'male',
                            source_id: 43100,
                            pronunciation: 'かゆい',
                            voice_actor_id: 2,
                            voice_actor_name: 'Kenichi',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/mpeg'
                    },
                    {
                        url: 'https://files.wanikani.com/glqhr2eenrk5j0xeqlkkmbhwb2u1',
                        metadata: {
                            gender: 'male',
                            source_id: 43100,
                            pronunciation: 'かゆい',
                            voice_actor_id: 2,
                            voice_actor_name: 'Kenichi',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/ogg'
                    },
                    {
                        url: 'https://files.wanikani.com/lyu0x8xv2afccz26mmkue2g71iks',
                        metadata: {
                            gender: 'female',
                            source_id: 42851,
                            pronunciation: 'かゆい',
                            voice_actor_id: 1,
                            voice_actor_name: 'Kyoko',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/ogg'
                    },
                    {
                        url: 'https://files.wanikani.com/c0myj97vg9n6rnxgbm5feqehm86a',
                        metadata: {
                            gender: 'female',
                            source_id: 42851,
                            pronunciation: 'かゆい',
                            voice_actor_id: 1,
                            voice_actor_name: 'Kyoko',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/mpeg'
                    }
                ],
                lesson_position: 0,
                spaced_repetition_system_id: 1
            }
        },
        {
            id: 9008,
            object: 'vocabulary',
            url: 'https://api.wanikani.com/v2/subjects/9008',
            data_updated_at: '2023-07-25T14:50:18.138849Z',
            data: {
                created_at: '2021-05-17T09:40:54.449686Z',
                level: 1,
                slug: '苛む',
                hidden_at: null,
                document_url: 'https://www.wanikani.com/vocabulary/%E8%8B%9B%E3%82%80',
                characters: '苛む',
                meanings: [
                    {
                        meaning: 'To Torment',
                        primary: true,
                        accepted_answer: true
                    }
                ],
                auxiliary_meanings: [
                    {
                        type: 'whitelist',
                        meaning: 'To Torture'
                    },
                    {
                        type: 'whitelist',
                        meaning: 'To Overwhelm'
                    },
                    {
                        type: 'whitelist',
                        meaning: 'To Torment Someone'
                    },
                    {
                        type: 'whitelist',
                        meaning: 'To Torture Someone'
                    },
                    {
                        type: 'whitelist',
                        meaning: 'To Overwhelm Someone'
                    },
                    {
                        type: 'whitelist',
                        meaning: 'To Harass Someone'
                    },
                    {
                        type: 'whitelist',
                        meaning: 'To Harass'
                    }
                ],
                readings: [
                    {
                        primary: true,
                        reading: 'さいなむ',
                        accepted_answer: true
                    }
                ],
                parts_of_speech: ['transitive verb', 'godan verb'],
                component_subject_ids: [8990],
                meaning_mnemonic:
                    'As usual, you can guess this is a verb thanks to the \u003cja\u003eう\u003c/ja\u003e sound on the end. The kanji means \u003ckanji\u003efrustration\u003c/kanji\u003e, and unfortunately frustration tends \u003cvocabulary\u003eto torment\u003c/vocabulary\u003e people. This verb is pretty advanced, but still useful to know!',
                reading_mnemonic:
                    "We all know it's not okay to \u003cvocabulary\u003eto torment\u003c/vocabulary\u003e each other. So how about we all \u003creading\u003esign a\u003c/reading\u003e (\u003cja\u003eさいな\u003c/ja\u003e) contract saying that we'll never torment anyone ever again?",
                context_sentences: [
                    {
                        en: "I'm tormented by feelings of helplessness.",
                        ja: '無力感に苛まれてるんよ。'
                    },
                    {
                        en: 'The sweltering heat torments us.',
                        ja: 'うだるような暑さが私達を苛む。'
                    },
                    {
                        en: 'The victims were tormented by the anxiety that something else bad would happen.',
                        ja: '被害者はまた何か悪いことが起こるのではないかという不安に苛まれていました。'
                    }
                ],
                pronunciation_audios: [
                    {
                        url: 'https://files.wanikani.com/f6piyopuojjqi3vvicwmw7l5omii',
                        metadata: {
                            gender: 'male',
                            source_id: 43101,
                            pronunciation: 'さいなむ',
                            voice_actor_id: 2,
                            voice_actor_name: 'Kenichi',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/webm'
                    },
                    {
                        url: 'https://files.wanikani.com/wtupgya9iz180f0xj0vwfs8r19y1',
                        metadata: {
                            gender: 'male',
                            source_id: 43101,
                            pronunciation: 'さいなむ',
                            voice_actor_id: 2,
                            voice_actor_name: 'Kenichi',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/ogg'
                    },
                    {
                        url: 'https://files.wanikani.com/ou4tcsjx86evaksbows5thgv94qg',
                        metadata: {
                            gender: 'male',
                            source_id: 43101,
                            pronunciation: 'さいなむ',
                            voice_actor_id: 2,
                            voice_actor_name: 'Kenichi',
                            voice_description: 'Tokyo accent'
                        },
                        content_type: 'audio/mpeg'
                    }
                ],
                lesson_position: 0,
                spaced_repetition_system_id: 1
            }
        },
        {
            id: 1,
            object: 'radical',
            url: 'https://api.wanikani.com/v2/subjects/1',
            data_updated_at: '2023-07-26T17:46:22.746541Z',
            data: {
                created_at: '2012-02-27T18:08:16.000000Z',
                level: 1,
                slug: 'ground',
                hidden_at: null,
                document_url: 'https://www.wanikani.com/radicals/ground',
                characters: '一',
                character_images: [
                    {
                        url: 'https://files.wanikani.com/a7w32gazaor51ii0fbtxzk0wpmpc',
                        metadata: {
                            inline_styles: false
                        },
                        content_type: 'image/svg+xml'
                    },
                    {
                        url: 'https://files.wanikani.com/fxufa23ht9uh0tkedo1zx5jemaio',
                        metadata: {
                            inline_styles: true
                        },
                        content_type: 'image/svg+xml'
                    },
                    {
                        url: 'https://files.wanikani.com/4lxmimfbwuvl07s11dq0f9til0mb',
                        metadata: {
                            color: '#000000',
                            dimensions: '1024x1024',
                            style_name: 'original'
                        },
                        content_type: 'image/png'
                    },
                    {
                        url: 'https://files.wanikani.com/3n3dlzyjjgou47qb4h4uewghcfcx',
                        metadata: {
                            color: '#000000',
                            dimensions: '1024x1024',
                            style_name: '1024px'
                        },
                        content_type: 'image/png'
                    },
                    {
                        url: 'https://files.wanikani.com/9d5fax4vrjp28vms1jb11ouu37vi',
                        metadata: {
                            color: '#000000',
                            dimensions: '512x512',
                            style_name: '512px'
                        },
                        content_type: 'image/png'
                    },
                    {
                        url: 'https://files.wanikani.com/gfwzjl41i5v5oiwrsjz5zz957nww',
                        metadata: {
                            color: '#000000',
                            dimensions: '256x256',
                            style_name: '256px'
                        },
                        content_type: 'image/png'
                    },
                    {
                        url: 'https://files.wanikani.com/m79ver1yfujpkcfa0bo5tcueuxk3',
                        metadata: {
                            color: '#000000',
                            dimensions: '128x128',
                            style_name: '128px'
                        },
                        content_type: 'image/png'
                    },
                    {
                        url: 'https://files.wanikani.com/gcqkjhbw9aguieat8yrqxz09qszn',
                        metadata: {
                            color: '#000000',
                            dimensions: '64x64',
                            style_name: '64px'
                        },
                        content_type: 'image/png'
                    },
                    {
                        url: 'https://files.wanikani.com/7czfgjlgsjxx8sndvfkezts6ugj1',
                        metadata: {
                            color: '#000000',
                            dimensions: '32x32',
                            style_name: '32px'
                        },
                        content_type: 'image/png'
                    }
                ],
                meanings: [
                    {
                        meaning: 'Ground',
                        primary: true,
                        accepted_answer: true
                    }
                ],
                auxiliary_meanings: [],
                amalgamation_subject_ids: [
                    440, 449, 450, 451, 468, 488, 531, 533, 568, 590, 609, 633, 635, 709, 710, 724, 783, 808, 885, 913, 932, 965, 971, 1000,
                    1020, 1085, 1113, 1119, 1126, 1137, 1178, 1198, 1241, 1249, 1326, 1340, 1367, 1372, 1376, 1379, 1428, 1431, 1463, 1491,
                    1506, 1521, 1547, 1559, 1591, 1655, 1769, 1851, 1852, 1855, 1868, 1869, 1888, 1970, 2091, 2104, 2128, 2138, 2148, 2171,
                    2172, 2182, 2212, 2277, 2334, 2375, 2419, 2437
                ],
                meaning_mnemonic:
                    "This radical consists of a single, horizontal stroke. What's the biggest, single, horizontal stroke? That's the <radical>ground</radical>. Look at the ground, look at this radical, now look at the ground again. Kind of the same, right?",
                lesson_position: 0,
                spaced_repetition_system_id: 2
            }
        },
        {
            id: 834,
            object: 'kanji',
            url: 'https://api.wanikani.com/v2/subjects/834',
            data_updated_at: '2022-12-23T15:44:02.883860Z',
            data: {
                created_at: '2012-05-01T19:51:32.000000Z',
                level: 2,
                slug: '陽',
                hidden_at: null,
                document_url: 'https://www.wanikani.com/kanji/%E9%99%BD',
                characters: '陽',
                meanings: [
                    {
                        meaning: 'Sunshine',
                        primary: true,
                        accepted_answer: true
                    },
                    {
                        meaning: 'Sunlight',
                        primary: false,
                        accepted_answer: true
                    }
                ],
                auxiliary_meanings: [
                    {
                        type: 'whitelist',
                        meaning: 'Positive'
                    }
                ],
                readings: [
                    {
                        type: 'onyomi',
                        primary: true,
                        reading: 'よう',
                        accepted_answer: true
                    },
                    {
                        type: 'kunyomi',
                        primary: false,
                        reading: 'ひ',
                        accepted_answer: false
                    },
                    {
                        type: 'nanori',
                        primary: false,
                        reading: 'はる',
                        accepted_answer: false
                    }
                ],
                component_subject_ids: [176, 172],
                amalgamation_subject_ids: [3371, 5354, 7636],
                visually_similar_subject_ids: [694, 844],
                meaning_mnemonic:
                    "A <radical>building</radical> has <radical>easy</radical> access to <kanji>sunshine</kanji>. It's big and tall, so the <kanji>sunlight</kanji> shines right onto its roof.",
                meaning_hint:
                    "You're standing on top of the building as the sunshine comes down. Its warm light fills your entire body as it covers the building with ease.",
                reading_mnemonic:
                    'Standing in <kanji>sunshine</kanji> for this long has worked up your appetite, so you take a <reading>yo</reading>gurt (<ja>よう</ja>) cup out of your bag and eat it.',
                reading_hint:
                    'Feel the sunlight on your face and taste the yogurt on your tongue. What flavor is it? Try to imagine it as vividly as you can so that sunlight always tastes like yogurt from now on.',
                lesson_position: 36,
                spaced_repetition_system_id: 1
            }
        }
    ]
};
