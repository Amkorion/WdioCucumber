const Page = require('./page');
class MainPage extends Page {

    get searchBtn () { return $('[class="DocSearch-Button-Placeholder"]') }
    get searchInput () { return $('#docsearch-input')}
    get firstSearchRequest () { return $('.DocSearch-Hits:nth-child(1) ul:nth-child(2) li.DocSearch-Hit:nth-child(1) a:nth-child(1) > div.DocSearch-Hit-Container')}
    get searchRequestTitle () { return $('[class="docTitle_Oumm"]')}
    
    async clickSearch () {
        await (await this.searchBtn).click();
    }
    async typeSearchRequest() {
        await (await this.searchInput).setValue('Cucumber');
    }

    async goToFirstResult () {
        await (await this.firstSearchRequest).click();
    }

}

module.exports = new MainPage();
