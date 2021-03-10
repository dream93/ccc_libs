
import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TestBackButton')
export class TestBackButton extends Component {

    onBack() {
        director.loadScene('Test');
    }
}
