"use strict";

import {TableDefinition, TableContext} from "backend-plus";

export function compras(context:TableContext):TableDefinition {
    var admin = context.user.rol === 'admin';
    return {
        name: 'compras',
        elementName: 'compra',
        editable: admin,
        fields: [
            { name: "cantidad"     , typeName: "integer"},
            { name: "producto"     , typeName: "text"},
        ],
        primaryKey: ['cantidad'],
    };
}