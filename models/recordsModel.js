import { db } from "../config/db.js";

const TABLENAME = 'records';
const TABLEFIELDS = ["id", "amount", "category", "comment", "date", "type"];

db.schema.hasTable(TABLENAME).then(function (exists) {
    if(!exists) {
        return db.schema.createTable(TABLENAME, function (t) {
            t.increments('id').primary();
            t.integer('amount');
            t.string('category', 50);
            t.text('comment');
            t.datetime('date').defaultTo(db.fn.now(6));;
            t.string('type', 50);
        });
    }
});

export function getAllRecords() {
    return db(TABLENAME)
        .select(TABLEFIELDS)
        .orderBy("date",'desc');
}

export function getAllRecordsByType(type) {
    return db(TABLENAME)
        .select(TABLEFIELDS)
        .where({ type })
        .orderBy("date");
}

export function getRecordById(id) {
    return db(TABLENAME)
        .select(TABLEFIELDS)
        .where({ id });
}

export function getRecordsByCategory(category) {
    return db(TABLENAME)
        .select(TABLEFIELDS)
        .where({ category });
}

export function insertRecord(args) {
    return db(TABLENAME)
        .insert(args)
        .returning(TABLEFIELDS);
}

export function updateRecord(args) {
    const { id, ...updates } = args;
    return db(TABLENAME)
        .where({ id })
        .update(updates)
        .returning(TABLEFIELDS);
}

export function deleteRecord(id) {
    return db(TABLENAME)
        .where({ id: id })
        .delete();
}
