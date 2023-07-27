import { TSubject } from '../models/Subject';

export interface ISubjectRepository {
  getAll: () => Promise<TSubject[]>;
}
