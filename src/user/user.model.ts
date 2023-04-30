import { Table, Model, Column, DataType, BelongsToMany, HasOne } from "sequelize-typescript";
import { Role } from "src/role/role.model";
import { UserRoles } from "src/role/userRole.mode";

interface UserCreationAttr {
    email: string;
    password: string;
}

@Table({tableName: "users"})
export class User extends Model<User, UserCreationAttr> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    
    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}