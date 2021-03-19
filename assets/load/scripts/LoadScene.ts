
import { PopupManager } from '../../libs/popup/manager/PopupManager';

const { ccclass, property } = cc._decorator;

@ccclass
export class LoadScene extends cc.Component {

    onLoad() {
        PopupManager.instance.init();
    }

    start() {
        cc.director.loadScene('Test');
    }
}

