const bubbleCard = ({json}) => {
  const title = json.title || ''
  const body = json.body || ''
  const price = json.price || ''
  const address = json.address || ''
  const image = json.image && json.image.url
  const icon = json.icon && json.icon.url
  const clickUrl = json.clickUrl

  const imageFragment = image
    ? `
    <div class="react-Slidy">
        <div>
            <div class="react-Slidy-frame is-ready">
                <img alt="" class="re-CardImage-image is-loaded" src="${image}">
            </div>
        </div>
    </div>
  `
    : ''

  const iconFragment = icon
    ? `
    <div class="re-Card-promotionLogo">
        <img class="re-CardImage-image" src="${icon}">
    </div>
  `
    : ''

  const html = `
      <div class="re-Card ad-ClickTracker" onclick="javascript:window.open('${clickUrl}', '_blank')">
          <div class="sui-CardComposable">
              <div class="sui-CardComposable-primary">
                  <div class="re-Card-primary">
                      <div class="re-CardImage-link">
                          <div class="re-Card-labels">
                                <span class="re-Card-label">
                                    OBRA NUEVA
                                </span>
                          </div>
                          ${imageFragment}
                      </div>
                  </div>
              </div>
              <div class="sui-CardComposable-secondary">
                  <div class="re-Card-secondary">
                      ${iconFragment}
                      <div class="re-Card-link">
                          <div class="re-Card-wrapperTitle">
                              <h4 class="re-Card-title">${address}</h4>
                              <div class="ad-Fc-TitleMain">${title}</div>
                          </div>
                          <div class="ad-Fc-Description">${body}</div>
                          <div class="ad-Fc-Price">
                              Desde <span class="re-Card-price">${price}</span> €
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`

  return html
}

export default bubbleCard
