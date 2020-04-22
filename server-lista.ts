import { AppBackend } from "backend-plus";
import { emergeAppLista } from "./app-lista";

var Appdefgen = emergeAppLista(AppBackend);

new Appdefgen().start();