import { Subject } from '../../domain/models/Subject';
import { SubjectDTO } from '../http/dto/SubjectDTO';

export const subjectMapper = (subjectDTO: SubjectDTO): Subject => ({
  id: subjectDTO.id,
  object: subjectDTO.object,
  url: subjectDTO.url,
  data: subjectDTO.data
});
