import { Table, Model, Column, DataType} from "sequelize-typescript";


interface VkUserCreationAttr {
    email: string;
    profileName: string;
    displayName: string;
    accessToken: string;
    username: string;
}

@Table({tableName: "vk_users"})
export class VKUser extends Model<VKUser, VkUserCreationAttr> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: true})
    email: string;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    username: string;

    @Column({type: DataType.STRING, allowNull: false})
    displayName: string;

    @Column({type:DataType.STRING, allowNull: false})
    accessToken: string;
}