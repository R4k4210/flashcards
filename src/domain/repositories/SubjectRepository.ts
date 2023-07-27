import { Subject } from '../models/Subject';

export interface SubjectRepository {
  getAll: () => Promise<Subject[]>;
}
