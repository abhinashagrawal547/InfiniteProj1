export default class BasePage {
    public async open(path: string): Promise<void> {
        await browser.url(path)
    }

    public async getTitle(): Promise<string> {
        return await browser.getTitle();
    }
}