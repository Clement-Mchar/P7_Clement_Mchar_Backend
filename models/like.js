"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Sequelize, DataTypes) => {
	class like extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ post, user }) {
			this.belongsTo(post, { foreignKey: "postId" });
			this.belongsTo(user, { foreignKey: "userId" });
		}
	}
	like.init(
		{
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
			},
			userId: {
				type: Sequelize.UUID,
				allowNull: false,
				unique: true
			},
			postId: {
				type: Sequelize.UUID,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "like",
		}
	);
	return like;
};
