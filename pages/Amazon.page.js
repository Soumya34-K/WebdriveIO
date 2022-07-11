class AmazonPage {

    get pageTitle () {

        return $ ('#nav-logo-sprites');
    }
    get pageSubTitle () {

        return $ ('span.a-size-base.a-color-base')

    }
    get departmentSearch () {

       return  $ ("//select[@id='searchDropdownBox']")
        
    }


}

module.exports = new AmazonPage ();