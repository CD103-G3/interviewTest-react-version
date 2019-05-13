import React from 'react'

export default () => {
  const initBannerState = [
    { id: 0, used: true, imgSrc: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg' },
    { id: 1, used: false, imgSrc: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg' },
    { id: 2, used: false, imgSrc: 'https://cdn.pixabay.com/photo/2016/10/18/21/22/california-1751455_1280.jpg' }
  ]
  const [bannerState, setBannerState] = React.useState(initBannerState)

  const handleBannerChange = (id) => {
    const res = []
    for (let i = 0; i < bannerState.length; i++) {
      res[i] = { 
        ...bannerState[i], 
        used: bannerState[i].id === (id * 1) ? true : false, 
      }
    } 
    setBannerState(res)
  }
  
  return (
    <section 
      id="index-banner" 
      style={{ 
        backgroundImage: `url(${ bannerState.filter(bs => bs.used)[0].imgSrc })`, 
        transition: '0.2s', 
        backgroundSize: '100% 120%',
      }}
    >
      <div 
        class="container" 
      >
        <ul class="index-choose">
          {bannerState.map(bs => (
            <li 
              key={ bs.id } 
              className={ bs.used ? 'active' : undefined } 
              onClick={ () => handleBannerChange(bs.id) } />
          ))}
        </ul>
      </div>
    </section>
  )
}