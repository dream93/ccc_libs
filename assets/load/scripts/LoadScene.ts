
import { PopupManager } from '../../libs/popup/manager/PopupManager';

const { ccclass, property } = cc._decorator;

@ccclass
export class LoadScene extends cc.Component {

    start() {
        PopupManager.instance.init();
        cc.director.loadScene('PopupTest');
    }
}

