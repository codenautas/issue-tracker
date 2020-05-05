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
            { name: "articulo"     , typeName: "text"},
            { name: "fecha_mandado"     , typeName: "date"}
        ],
        primaryKey: ['articulo', 'fecha_mandado'],
        foreignKeys: [
            {references:'productos', fields:[{source: "articulo", target: "nombre"}]},
            {references:'mandados', fields:[{source: "fecha_mandado", target: "fecha"}]},
        ]
    };
}