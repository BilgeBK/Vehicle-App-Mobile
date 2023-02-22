import * as SQLite from 'expo-sqlite';
import {BaseModel,types} from "expo-sqlite-orm";

export default class connection extends BaseModel{
    constructor(obj){
        super(obj)
    }

    static get database(){
        return async () => SQLite.openDatabase('vehiclesDb.db');
    }

    static get tableName(){ 
        return 'vehicles';
    }

    static get columnMapping(){
        return{
            id: { type: types.INTEGER, primary_key: true, autoincrement: true },
            licensePlate :{ type: types.TEXT , not_null:true},
            color: { type: types.TEXT, not_null:true },
            brand: { type: types.TEXT, not_null:true },
            model: { type: types.TEXT, not_null:true },
            information: { type: types.TEXT, not_null:true },
            date: { type: types.DATETIME, not_null: true },
            countPasses: { type: types.INTEGER, not_null: true }
        }
    }

}