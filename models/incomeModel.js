import { db } from '../config/db.js';

const TABLENAME = 'incomes';
const TABLEFIELDS = [ "id", "amount", "comment", "date" ];

db.schema.hasTable( TABLENAME ).then( function ( exists ) {
    if ( !exists ) {
        return db.schema.createTable( TABLENAME, function ( t ) {
            t.increments( 'id' ).primary();
            t.integer( 'amount' );
            t.text( 'comment' );
            t.datetime( 'date' ).defaultTo(db.fn.now(6));;
        } );
    }
} );

export function getAllIncomes () {
    return db( TABLENAME )
        .select( TABLEFIELDS )
        .orderBy( 'date' );
}

export function getIncomeById ( id ) {
    return db( TABLENAME )
        .select( TABLEFIELDS )
        .where( { id } );
}

export function insertIncome ( args ) {
    return db( TABLENAME )
        .insert( args )
        .returning( TABLEFIELDS );
}

export function updateIncome ( args ) {
    const { id, ...updates } = args;
    return db( TABLENAME )
        .where( { id } )
        .update( updates )
        .returning( TABLEFIELDS );
}

export function deleteIncome ( id ) {
    return db( TABLENAME )
        .where( { id } )
        .delete();
}