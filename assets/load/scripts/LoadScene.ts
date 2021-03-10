
import { _decorator, Component, Node, director } from 'cc';
import { PopupManager } from '../../libs/popup/manager/PopupManager';
const { ccclass, property } = _decorator;

@ccclass('LoadScene')
export class LoadScene extends Component {

    start() {
        PopupManager.instance.init();
        director.preloadScene('Test', () => {
            director.loadScene('Test');
        });
    }
}

