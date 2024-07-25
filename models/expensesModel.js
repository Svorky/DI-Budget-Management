import { db } from "../config/db.js";

const TABLENAME = 'expenses';
const TABLEFIELDS = [ "id", "amount", "category", "comment", "date" ];

db.schema.hasTable( TABLENAME ).then( function ( exists ) {
    if ( !exists ) {
        return db.schema.createTable( TABLENAME, function ( t ) {
            t.increments( 'id' ).primary();
            t.integer( 'amount' );
            t.string( 'category', 50 );
            t.text( 'comment' );
            t.datetime( 'date' ).defaultTo(db.fn.now(6));;
        } );
    }
} );

export function getAllExpenses () {
    return db( TABLENAME )
        .select( TABLEFIELDS )
        .orderBy( "date" );
}

export function getExpenseById ( id ) {
    return db( TABLENAME )
        .select( TABLEFIELDS )
        .where( { id } );
}

export function getExpensesByCategory ( category ) {
    return db( TABLENAME )
        .select( TABLEFIELDS )
        .where( { category } );
}

export function insertExpense ( args ) {
    return db( TABLENAME )
        .insert( args )
        .returning( TABLEFIELDS );
}

export function updateExpense ( args ) {
    const { id, ...updates } = args;
    return db( TABLENAME )
        .where( { id } )
        .update( updates )
        .returning( TABLEFIELDS );
}

export function deleteExpense ( id ) {
    return db( TABLENAME )
        .where( { id } )
        .delete();
}
