import { UserDTO } from '../../../configuration/http/dto/UserDTO';

export const mockUser: UserDTO = {
    object: 'user',
    url: 'https://api.wanikani.com/v2/user',
    data_updated_at: '2023-07-27T22:47:55.425698Z',
    data: {
        id: 'f9686a9d-c4c5-4c93-82ba-4e6addace450',
        username: 'r4k4210',
        level: 3,
        profile_url: 'https://www.wanikani.com/users/r4k4210',
        started_at: '2023-02-23T02:11:52.898347Z',
        subscription: {
            active: false,
            type: 'free',
            max_level_granted: 3,
            period_ends_at: null
        },
        current_vacation_started_at: null,
        preferences: {
            lessons_batch_size: 5,
            default_voice_actor_id: 1,
            lessons_autoplay_audio: false,
            reviews_autoplay_audio: false,
            extra_study_autoplay_audio: false,
            lessons_presentation_order: 'ascending_level_then_subject',
            reviews_presentation_order: 'shuffled',
            reviews_display_srs_indicator: true
        }
    }
};
