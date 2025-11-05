export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
        // Add CODE HERE
    }

    async init() {
        const list = await this.dataSource.getData();
    }
}