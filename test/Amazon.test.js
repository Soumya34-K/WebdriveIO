const homePage = require ("../pages/Amazon.page")
describe ("Verify amazon page", function () {

    it("Interacting with amazon page web elements",  async function (){

        await browser.url("https://www.amazon.com/");
        console.log(homePage.pageTitle.getText());
        console.log(homePage.pageSubTitle.getText());
        homePage.departmentSearch.click();
        await browser.pause(6000);
       
    });

});