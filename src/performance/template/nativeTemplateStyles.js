const STYLE = `
<style>
    #fc-brandRefresh .re-Searchresult-ad--native, .re-Searchresult-ad--native {
        display: flex;
    }
    .re-Searchresult-ad--native .re-AdBasic {
        width: 100%;
        display: flex;
        position: relative;
    }
    #PubNativeA {
        display: flex;
        width: 100%;
    }
    .ad-Fc-Native .re-Card-primary {
        position: inherit;
    }
    .ad-Fc-Native .re-Card-label {
        background-color: rgba(29,29,29,0.5);
    }
    .ad-Fc-Native .re-Card-priceComposite, #fc-brandRefresh .ad-Fc-Native .re-Card-priceComposite {
        margin-top: 41px;
        margin-bottom: 4px;
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
    }
    .ad-Fc-Native .re-Card-promotionLogo img {
        max-height: 44px;
    }
    .ad-Fc-Native .fc-Icon.fc-Icon--s {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg);
        vertical-align: middle;
    }
    .re-Searchresult-item .ad-Fc-Native .re-Card-description, #fc-brandRefresh .re-Searchresult-item .ad-Fc-Native .re-Card-description {
        margin: 0;
        display: block;
        line-height: 1.45;
        height: 70px;
        overflow: hidden;
    }
    .re-Searchresult-item .ad-Fc-Native .re-Card-priceComposite  {
        margin-top: 32px;
    }
    re-Searchresult-item .ad-Fc-Native .sui-AtomButton-text {
        margin-top: -1px;
    }
    .ad-Fc-Native .sui-AtomButton {
        float: right;
    }
    .ad-Fc-Native .re-Card-contact, #fc-brandRefresh .ad-Fc-Native .re-Card-contact {
        padding-top: 0;
        margin-top: -2px;
    }
    .re-Searchresult-itemRow .ad-Fc-Native .sui-CardComposable, #fc-brandRefresh .re-Searchresult-itemRow .ad-Fc-Native .sui-CardComposable {
        display: block;
        position: relative;
    }
    .re-Searchresult-itemRow .ad-Fc-Native .sui-CardComposable-primary {
        width: 315px;
        float: left;
    }
    .re-Searchresult-itemRow .ad-Fc-Native .sui-CardComposable-secondary {
        min-height: 236px;
        text-align: left;
    }
    .re-Searchresult-itemRow .ad-Fc-Native .re-Card-secondary {
        position: inherit;
        height: 236px;
    }
    .re-Searchresult-itemRow .ad-Fc-Native .re-Card-promotionLogo, #fc-brandRefresh .re-Searchresult-itemRow .ad-Fc-Native .re-Card-promotionLogo {
        top: inherit;
        bottom: 0;
        right: 0;
    }
    .re-Searchresult-itemRow .ad-Fc-Native .re-Card-description {
        margin: 0 !important;
    }
    .re-Searchresult-itemRow .ad-Fc-Native .sui-AtomButton {
        float: left;
    }
    @media screen and (max-width: 950px) {
        .re-Searchresult-itemRow .ad-Fc-Native .re-Card-secondary {
            position: relative;
        }    
        .re-Searchresult-itemRow .ad-Fc-Native .re-Card-promotionLogo {
            left: -88px;
        }
    }
    @media screen and (max-width: 620px) {
        .ad-Fc-Native .re-Card-priceComposite {
            margin-top: 32px;
        }
        .re-Searchresult-itemRow .ad-Fc-Native .sui-CardComposable-primary {
            width: 100%;
            float: none;
        }
        .re-Searchresult-itemRow .ad-Fc-Native .sui-CardComposable-secondary {
            min-height: auto;
        }
        .re-Searchresult-itemRow .ad-Fc-Native .re-Card-secondary {
            height: auto;
        }
        .re-Searchresult-itemRow .ad-Fc-Native .re-Card-promotionLogo, #fc-brandRefresh .re-Searchresult-itemRow .ad-Fc-Native .re-Card-promotionLogo {
            top: -16px;
            bottom: inherit;
            right: 16px;
            left: inherit;
        }
        .re-Searchresult-itemRow .ad-Fc-Native .sui-AtomButton {
            float: right;
        }
    }
</style>
`

export default STYLE