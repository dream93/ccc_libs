
export module CCUtil {
    export function load(option: {
        paths: string,
        type: typeof cc.Asset | null,
        onProgress?: any,
        onComplete?: any
    }): void {
        cc.resources.load(option.paths, option.type, option.onProgress!, option.onComplete!);
    }
}