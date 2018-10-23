import STYLE from './nativeTemplateStyles'

const nativeRenderer = ({json}) => {
    const title = json.title || ''
    const body = json.body || ''
    const image = json.image && json.image.url
    const icon = json.icon && json.icon.url
    const clickUrl = json.clickUrl

    const iconFragment = `
      <div class="re-Card-promotionLogo">
        <div class="re-CardImage-link">
          <img class="re-CardImage-image" src="${icon}">
        </div>
      </div>
    `

    const imageFragment = image ? `
      <div class="react-Slidy">
          <div class="react-Slidy-frame is-ready">
              <div class="react-Slidy-slides">
                  <div class="react-Slidy-item">
                      <img alt="" class="re-CardImage-image is-loaded" src="${image}">
                  </div>
              </div>
          </div>
      </div>
  ` : ''

    const html = `
    ${STYLE}
      <div class="re-Card ad-Fc-Native ad-ClickTracker" onclick="javascript:window.open('${clickUrl}', '_blank')">
          <div class="sui-CardComposable">
              <div class="sui-CardComposable-primary">
                  <div class="re-Card-primary">
                      <div class="re-Card-labels">
                          <span class="re-Card-label">
                              Anuncio patrocinado  
                          </span>
                          
                      </div>
                      ${imageFragment}
                  </div>
              </div>
              <div class="sui-CardComposable-secondary">
                  <div class="re-Card-secondary">
                      ${iconFragment}
                      <div class="re-Card-link">
                          <div class="re-Card-wrapperTitle">
                              <div class="re-Card-priceComposite">${title}</div>
                          </div>
                          <span class="re-Card-description">${body}</span>
                      </div>
                      <div class="re-Card-contact">
                          <div class="sui-AtomButton sui-AtomButton--tertiary sui-AtomButton--large ">
                              <div class="sui-AtomButton-inner">
                                <span class="sui-AtomButton-text">
                                    Ver contenido
                                </span>
                                <span class="sui-AtomButton-rightIcon">
                                  <svg class="fc-Icon fc-Icon--s" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><g stroke-linecap="round" stroke-width="2">
                                    <path d="M7 16.5l5 5 5-5M12 2.5v19"></path></g></g>
                                  </svg>
                                </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
       </div>
`
    return html
}
export default nativeRenderer