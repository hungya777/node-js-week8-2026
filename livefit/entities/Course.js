const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: 'Course',
  tableName: 'COURSE',
  columns: {
    id: { type: "uuid", primary: true, generated: "uuid" },
    name: { type: "varchar", length: 100, nullable: false },
    description: { type: "text", nullable: false },
    start_at: { type: "timestamp", nullable: false },
    end_at: { type: "timestamp", nullable: false },
    max_participants: { type: "integer", nullable: false },
    meeting_url:{ type: "varchar", length: 2048, nullable: true },
    created_at: { type: "timestamp", createDate: true },
    updated_at: { type: "timestamp", updateDate: true },
  },
  relations: {
    // user_id → USER（開課教練） 觀念： 一個學生可以上多個課程，所以課程是多對一
    user: {
      type: "many-to-one",
      target: 'User',
      joinColumn: { name: "user_id" },
    },
    // skill_id → SKILL（課程技能） 觀念: 一個技能可以被多個課程註冊，所以課程是多對一
    skill: {
      type: "many-to-one",
      target: 'Skill',
      joinColumn: { name: "skill_id" },
    }
  }
});