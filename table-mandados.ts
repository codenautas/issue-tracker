"use strict";

import {TableDefinition, TableContext} from "backend-plus";

export function mandados(context:TableContext):TableDefinition {
    var admin = context.user.rol === 'admin';
    return {
        name: 'mandados',
        elementName: 'mandado',
        editable: admin,
        fields: [
            { name: "fecha"     , typeName: "date"},
            { name: "comercio"     , typeName: "text"},
        ],
        primaryKey: ['fecha'],
    };
}