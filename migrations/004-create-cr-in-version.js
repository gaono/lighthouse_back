exports.up = (pgm) => {
    pgm.createTable('cr_in_version', {
        cr_id: {
            type: 'integer',
            primaryKey: true,
            references: 'cr(id)',
            onDelete: 'CASCADE',
        },
        version_id: {
            type: 'integer',
            notNull: true,
            references: 'version(id)',
            onDelete: 'CASCADE',
        },
        order_in_version: {
            type: 'integer',
            notNull: true,
        }
    });
}

exports.down = (pgm) => {
    pgm.dropTable('cr_in_version');
}