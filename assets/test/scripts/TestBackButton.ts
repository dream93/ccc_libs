

const { ccclass, property } = cc._decorator;

@ccclass
export class TestBackButton extends cc.Component {

    onBack() {
        cc.director.loadScene('Test');
    }
}
