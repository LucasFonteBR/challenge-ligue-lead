import { DataTypes, Model, Optional } from 'sequelize';
import { TaskEntity } from '../Entities/TaskEntity';
import { SequelizeInstance } from '../../../Database/SequelizeConnection';
import { ProjectModel } from '../../../Project/Repositories/Models/ProjectModel';

type TaskCreationAttributes = Optional<TaskEntity, 'uuid' | 'createdAt' | 'updatedAt'>;

export class TaskModel extends Model<TaskEntity, TaskCreationAttributes> implements TaskEntity {
  public uuid!: string;
  public title!: string;
  public status!: string | any;
  public description!: string;
  public projectUuid!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

TaskModel.init(
  {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    projectUuid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'projects',
        key: 'uuid',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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
    tableName: 'tasks',
    timestamps: true,
  },
);

TaskModel.belongsTo(ProjectModel, {
  foreignKey: 'projectUuid',
  as: 'project',
});

ProjectModel.hasMany(TaskModel, {
  foreignKey: 'projectUuid',
  as: 'tasks',
});
