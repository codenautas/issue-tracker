"use strict";

import {TableDefinition, TableContext} from "backend-plus";

export function productos(context:TableContext):TableDefinition {
    var admin = context.user.rol === 'admin';
    return {
        name: 'productos',
        elementName: 'producto',
        editable: admin,
        fields: [
            { name: "nombre"     , typeName: "text"},
            { name: "precio"     , typeName: "integer"},
        ],
        primaryKey: ['nombre'],
    };
}