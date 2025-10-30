import { DataTypes, Model, Optional } from 'sequelize';
import { ProjectEntity } from '../Entities/ProjectEntity';
import { SequelizeInstance } from '../../../Database/SequelizeConnection';

type ProjectCreationAttributes = Optional<ProjectEntity, 'uuid' | 'createdAt' | 'updatedAt'>;

export class ProjectModel extends Model<ProjectEntity, ProjectCreationAttributes> implements ProjectEntity {
  public uuid!: string;
  public name!: string;
  public description!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

ProjectModel.init(
  {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: SequelizeInstance,
    tableName: 'projects',
    timestamps: true,
  },
);
