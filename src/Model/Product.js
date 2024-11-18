import { DataTypes, Model } from 'sequelize';
import config from '../Database/DBConfig.js';

class Product extends Model { }

Product.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    productname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
},{
    sequelize: config,
    modelName: 'products',
    timestamps: false
});

export default Product;