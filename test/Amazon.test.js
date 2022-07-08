const homePage = require ("../pages/Amazon.page")
describe ("Verify amazon page", function () {

    it("Verify title of the page",  async function (){

        await browser.url("https://www.amazon.com/");
        let text = (homePage.pageTitle.getText())
        console.log (text);

    });

});