import Sequelize from 'sequelize';

export const statusServiceModel = (db) => {
    return db.define('status_service', {
        id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        mnemonic: {type: Sequelize.STRING, allowNull: false},
        status: {type: Sequelize.INTEGER, allowNull: false},
        data: {type: Sequelize.JSONB, allowNull: true},
    }, { tableName: 'status_service', timestamps: true });
};
