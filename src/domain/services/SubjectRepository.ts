import { SubjectRepository } from '../repositories/SubjectRepository';

export const subjectService = (repository: SubjectRepository): SubjectRepository => ({
  getAll: () => {
    return repository.getAll();
  }
});
