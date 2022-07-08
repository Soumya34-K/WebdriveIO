class AmazonPage {

    get pageTitle () {

        return $ ("//a[@id='nav-logo-sprites']");
    }


}

module.exports = new AmazonPage ();