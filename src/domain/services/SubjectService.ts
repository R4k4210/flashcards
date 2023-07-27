import { ISubjectRepository } from '../repositories/SubjectRepository';

export const subjectService = (repository: ISubjectRepository): ISubjectRepository => ({
  getAll: () => {
    return repository.getAll();
  }
});
