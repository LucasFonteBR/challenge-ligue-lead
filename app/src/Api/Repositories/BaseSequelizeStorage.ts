import { Model } from 'sequelize';
import { IStorage } from './IStorage';

export abstract class BaseSequelizeStorage<TModel extends Model, TEntity> implements IStorage<TEntity> {
  protected model: any;

  constructor(model: any) {
    this.model = model;
  }

  async save(entity: TEntity): Promise<TEntity> {
    const created = await this.model.create(entity);
    return created.toJSON() as TEntity;
  }

  async update(entity: TEntity): Promise<TEntity> {
    const [affectedCount] = await this.model.update(entity, {
      where: { uuid: (entity as any).uuid },
    });

    if (affectedCount === 0) {
      throw new Error(`No record found to update with UUID ${(entity as any).uuid}`);
    }

    const updated = await this.model.findOne({
      where: { uuid: (entity as any).uuid },
    });

    return updated?.toJSON() as TEntity;
  }

  async delete(uuid: string): Promise<void> {
    await this.model.destroy({ where: { uuid } });
  }

  async findByUuid(uuid: string): Promise<TEntity | null> {
    const found = await this.model.findByPk(uuid);
    return found ? (found.toJSON() as TEntity) : null;
  }

  async findAll(page = 0, pageSize = 10): Promise<TEntity[]> {
    const offset = page * pageSize;
    const results = await this.model.findAll({
      offset,
      limit: pageSize,
      order: [['createdAt', 'DESC']],
    });
    return results.map((r: TModel) => r.toJSON() as TEntity);
  }
}
