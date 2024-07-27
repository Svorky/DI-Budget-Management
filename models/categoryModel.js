import { db } from "../config/db.js";

const TABLENAME = 'categories';
const TABLEFIELDS = [ "id", 'name' ];

db.schema.hasTable( TABLENAME ).then( function ( exists ) {
    if ( !exists ) {
        return db.schema.createTable( TABLENAME, function ( t ) {
            t.increments( 'id' ).primary();
            t.string( 'name', 50 );
        } );
    }
} );

export function getAllCategories () {
    return db( TABLENAME )
        .select( TABLEFIELDS )
        .orderBy('name')
}

export function getCategoryById ( id ) {
    return db( TABLEFIELDS )
        .select( TABLEFIELDS )
        .where( { id } );
}

export function insertCategory ( args ) {
    return db( TABLENAME )
        .insert( args )
        .returning( TABLEFIELDS );
}

export function updateCategory ( args ) {
    const { id, ...updates } = args;
    return db( TABLENAME )
        .where( { id } )
        .update( updates )
        .returning( TABLEFIELDS );
}

export function deleteCategory ( id ) {
    return db( TABLENAME )
        .where( { id } )
        .delete();
}
