const { default: $ } = require("webdriverio/build/commands/browser/$");

describe ("Interact with web elements",()=> {
    it("Verify web elements present in the web page",async ()=> {

        browser.url("https://the-internet.herokuapp.com/")
        const ele = await $ ("//h1[@class='heading']")
        console.log(ele.getText())
        await browser.pause(1000)
        
    });

});
