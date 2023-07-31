import { SubjectsDTO } from '../../../configuration/http/dto/SubjectDTO';
import { UserDTO } from '../../../configuration/http/dto/UserDTO';
import { IWanikaniRepository } from '../../domain/repositories/WanikaniRepository';
import { subjectMapper } from '../mappers/subject.mapper';
import { userMapper } from '../mappers/user.mapper';
import { mockSubjects } from './mockSubject';
import { mockUser } from './mockUser';

export const wanikaniRepositoryStub = (): IWanikaniRepository => ({
    getAllSubjects: async () => {
        const { data } = mockSubjects as SubjectsDTO;
        const subjects = data.map((subject) => subjectMapper(subject));
        console.log('Stub:Subjects', subjects);
        return Promise.resolve(subjects);
    },
    getUser: async () => {
        const user = userMapper(mockUser as UserDTO);
        console.log('Stub:User', user);
        return Promise.resolve(user);
    }
});
