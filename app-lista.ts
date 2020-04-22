"use strict";

// import {ProceduresLista} from "./procedures-lista";

import {AppBackend, Request} from "backend-plus"
import { productos } from "./table-productos";

export class AppLista extends AppBackend{


    configStaticConfig(){
        super.configStaticConfig();
        this.setStaticConfig(defConfig);
    }
    
    clientIncludes(req:Request, hideBEPlusInclusions:boolean){
        var be = this;
        return super.clientIncludes(req, hideBEPlusInclusions).concat([
            {type:'js' , src:'client/client.js' },
        ])
    }
    
    getMenu(){
        let menu = {menu:[
            {menuType:'table' , name:'productos'},
        ]}
        return menu;
    }
    prepareGetTables(){
        var be=this;
        super.prepareGetTables();
        this.getTableDefinition={
            ...this.getTableDefinition
            , productos          
        }
    }
  }