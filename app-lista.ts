"use strict";

// import {ProceduresLista} from "./procedures-lista";

import {AppBackend, Request, OptsClientPage} from "backend-plus"
import { productos } from "./table-productos";
import { defConfig } from "./def-config";
import { usuarios } from "./table-usuarios";
import { mandados } from "./table-mandados";
import { compras } from "./table-compras";

export type Constructor<T> = new(...args: any[]) => T;
export function emergeAppLista<T extends Constructor<AppBackend>>(Base:T){
  return class Appdefgen extends Base{
    constructor(...args:any[]){ 
        super(args); 
    }

    configStaticConfig(){
        super.configStaticConfig();
        this.setStaticConfig(defConfig);
    }
    
    clientIncludes(req:Request, hideBEPlusInclusions?:OptsClientPage){
        return super.clientIncludes(req, hideBEPlusInclusions).concat([
            {type:'js' , src:'client/client.js' },
        ])
    }
    
    getMenu(){
        let menu = {menu:[
            {menuType:'table' , name:'productos'},
            {menuType:'table' , name:'usuarios'},
            {menuType:'table' , name:'mandados'},
            {menuType:'table' , name:'compras'}
        ]}
        return menu;
    }

    prepareGetTables(){
        super.prepareGetTables();
        this.getTableDefinition={
            ...this.getTableDefinition
            , productos 
            , usuarios  
            , mandados       
            , compras
        }
    }
  }
}