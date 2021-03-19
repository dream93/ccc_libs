export enum ResolutionType {
    EXACT_FIT = cc.ResolutionPolicy.EXACT_FIT,
    NO_BORDER = cc.ResolutionPolicy.NO_BORDER,
    SHOW_ALL = cc.ResolutionPolicy.SHOW_ALL,
    FIXED_HEIGHT = cc.ResolutionPolicy.FIXED_HEIGHT,
    FIXED_WIDTH = cc.ResolutionPolicy.FIXED_WIDTH,
    CUSTOM = 9
}

const { ccclass, property } = cc._decorator;

@ccclass
export class CanvasAdapter extends cc.Component {

    @property({
        type: cc.Enum(ResolutionType)
    })
    private resolutionType: ResolutionType = ResolutionType.CUSTOM;

    onLoad() {
        this.setAdapter();
    }

    setAdapter() {
        if (ResolutionType.EXACT_FIT == this.resolutionType) {
            console.error('该方式已不被支持');
        }
        let designSize = cc.view.getDesignResolutionSize();
        if (ResolutionType.CUSTOM != this.resolutionType) { // 其它模式直接使用Cocos的API
            cc.view.setDesignResolutionSize(designSize.width, designSize.height, this.resolutionType);
        } else {
            let visibleSize = cc.view.getVisibleSize();
            let designSize = cc.view.getDesignResolutionSize();
            this.getComponent(cc.Canvas)
            if (visibleSize.height / visibleSize.width > designSize.height / designSize.width) { // 长屏
                cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.FIXED_WIDTH);
            } else { // 宽屏
                cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.FIXED_HEIGHT);
            }
        }
    }
}
