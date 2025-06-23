exports.up = (pgm) => {
    pgm.createTable('dependency', {
        cr_id: { 
            type: 'integer',
            notNull: true,
            references: 'cr(id)',
            onDelete: 'CASCADE', 
        },
        depends_on_cr_id: {
            type: 'integer',
            notNull: true,
            references: 'cr(id)',
            onDelete: 'CASCADE',
        }
    }, {
        primaryKey: ['cr_id', 'depends_on_cr_id'],
    })
}

exports.down = (pgm) => {
    pgm.dropTable('dependency');
}