const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: 'Grade',
  tableName: 'GRADE',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    score: {
      type: 'integer',
      nullable: false,
    },
    retake_score: {
      type: 'integer',
      nullable: true, //可以空值
    }
  },
  relations: {
    student: { // 一個學生可以有多個成績
      type: "many-to-one",
      target: "Student",
      joinColumn: { name: "student_id" },
      nullable: false,
    },
    subject: { // 一個科目可以有多個成績
      type: "many-to-one",
      target: "Subject",
      joinColumn: { name: "subject_id" },
      nullable: false,
    },
  }
});