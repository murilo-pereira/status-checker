import Sequelize from 'sequelize';

export const logServiceModel = (db) => {
    return db.define('log_service', {
        id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        mnemonic: {type: Sequelize.STRING, allowNull: false},
        status: {type: Sequelize.INTEGER, allowNull: false},
        data: {type: Sequelize.JSONB, allowNull: true},
    }, { tableName: 'log_service', timestamps: true });
};
