import React from 'react'

export default () => {
  const categories = ['Mac', 'iPad', 'iPhone', 'Apple Watch', 'Apple TV', 'air Pods']
  return (
    <section id="index-category">
        <div class="container">
            <h2 class="index-title">商品分類</h2>
            <div class="item">
              { categories.map(ca => (
                <a class="col-6 col-3">
                  <h2>{ ca }</h2>
                  <div class="sale">sale</div>
                </a>
              )) }
            </div>
        </div>
    </section>
  )
}