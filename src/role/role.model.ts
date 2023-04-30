import { Table, Column, DataType, Model, BelongsToMany } from "sequelize-typescript";
import { User } from "src/user/user.model";
import { UserRoles } from "./userRole.mode";
interface RoleCreationAttrs {
    value: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;
    
    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}