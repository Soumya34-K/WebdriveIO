class AmazonPage {

    get pageTitle () {

        return $ ('#nav-logo-sprites');
    }
    get pageSubTitle () {

        return $ ('span.a-size-base.a-color-base')

    }


}

module.exports = new AmazonPage ();