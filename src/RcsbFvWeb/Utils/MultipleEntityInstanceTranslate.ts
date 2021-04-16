import {PolymerEntityInstanceTranslate} from "./PolymerEntityInstanceTranslate";
import {PolymerEntityInstanceInterface} from "../CollectTools/EntryInstancesCollector";
import {Constants} from "./Constants";

export class MultipleEntityInstanceTranslate {

    private entryEntityInstanceTranslateMap: Map<string, PolymerEntityInstanceTranslate> = new Map<string, PolymerEntityInstanceTranslate>();

    public add(data: Array<PolymerEntityInstanceInterface>) {
        const entryEntityInstanceMapList: Map<string, Array<PolymerEntityInstanceInterface>> = new Map<string, Array<PolymerEntityInstanceInterface>>();
        data.forEach(d=>{
            const entityId: string = d.entryId+Constants.entity+d.entityId;
            if(!entryEntityInstanceMapList.has(entityId))
                entryEntityInstanceMapList.set(entityId, new Array<PolymerEntityInstanceInterface>())
            entryEntityInstanceMapList.get(entityId).push(d);
        });
        entryEntityInstanceMapList.forEach((v,k)=>{
            this.entryEntityInstanceTranslateMap.set(k, new PolymerEntityInstanceTranslate(v));
        })
    }

    public get(entityId: string): PolymerEntityInstanceTranslate{
        return this.entryEntityInstanceTranslateMap.get(entityId);
    }

}