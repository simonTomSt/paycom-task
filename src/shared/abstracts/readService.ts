import { Model } from 'mongoose';
import { SchemaModel } from 'types/common';

export abstract class ReadService<T> {
  repository: Model<SchemaModel<T>>;

  constructor(repository: Model<SchemaModel<T>>) {
    this.repository = repository;
  }

  findAll = async (filters = {}): Promise<T[]> => {
    return this.repository.find(filters);
  };

  findSingle = async (filters): Promise<T> => {
    return this.repository.findOne(filters);
  };
}
