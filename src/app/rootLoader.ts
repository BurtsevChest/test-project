import { default as globalStore } from "@/store/store";
import { setRegionAction } from "@/store/slices/regionSlice";

export default async function rootLoader() {
    // можем сделать какую либо предзагрузку в глобальный стор
    // например установить регион пользователя
    globalStore.dispatch(setRegionAction(77));
}
