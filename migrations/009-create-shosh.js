exports.up = (pgm) => {
    pgm.createTable('shosh', {
        id: {
            type: 'serial',
            primaryKey: true
        },
        project_id: {
            type: 'integer',
            notNull: true,
            references: 'project(id)',
            onDelete: 'CASCADE',
        },
        name: {
            type: 'varchar(255)',
            notNull: true
        },
        description: {
            type: 'text',
            notNull: false
        },
        jira_url: {
            type: 'varchar(255)',
            notNull: false
        }
    });
}

exports.down = (pgm) => {
    pgm.dropTable('shosh');
}