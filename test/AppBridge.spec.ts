import { AppBridge } from '../src/index';

describe('AppBridge', () => {
    it('should initialize', () => {
        let bridge: AppBridge = new AppBridge();
        expect(bridge).toBeDefined();
    });
});
