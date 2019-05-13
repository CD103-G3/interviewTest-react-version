import React from 'react'

export default () => {
  return (
    <section id="index-hot">
        <div class="container">
            <h2 class="index-title">熱門商品</h2>
            <div class="item">
              {[...Array(3).keys()].map(arr => (
                <div class="col-4">
                  <h3>{ '熱門商品' + arr }</h3>
                </div>
              ))}
            </div>
            <div class="item-hot">
                <h3>熱門商品4</h3>
            </div>
        </div>
    </section>
  )
}