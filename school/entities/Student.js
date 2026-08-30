const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: 'Student',
  tableName: 'STUDENT',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: 'varchar',
      length: 50,
      nullable: false,
    },
  },
  relations: {
    // 關聯：class_id → CLASS (必填)
    // 觀念：一個班級可以有多個學生
    // 主體是 學生就寫在前面(以這張表為主，是多) -> 一個班級寫在後面
    class: {
      type: "many-to-one",
      target: "Class",
      joinColumn: { name: "class_id" },
      nullable: false,
    },
  }
});