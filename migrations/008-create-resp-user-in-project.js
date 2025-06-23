exports.up = (pgm) => {
    pgm.createTable('resp_user_in_project', {
        user_id: {
            type: 'varchar(12)',
            notNull: true,
            references: 'users(id)',
            onDelete: 'CASCADE',
        },
        project_id: {
            type: 'integer',
            notNull: true,
            references: 'project(id)',
            onDelete: 'CASCADE',
        }
    }, {
        primaryKey: ['user_id', 'project_id'],
    });
}

exports.down = (pgm) => {
    pgm.dropTable('resp_user_in_project');
}