import Sequelize from 'sequelize';
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd() + '/../../../', '.env') })

export default new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});
