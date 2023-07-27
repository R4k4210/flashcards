import { SubjectRepository } from '../../domain/repositories/SubjectRepository';
import { http } from '../http/Http';
import { SubjectDTO } from '../http/dto/SubjectDTO';
import { subjectMapper } from '../mappers/subject.mapper';

export const subjectRepository = (): SubjectRepository => ({
  getAll: async () => {
    const subjects = await http.get<SubjectDTO[]>('/subjects');
    return subjects.map((subjectDTO: SubjectDTO) => subjectMapper(subjectDTO));
  }
});
