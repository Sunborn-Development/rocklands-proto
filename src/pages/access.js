import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const Landing = (props) => (
  <Layout>
    <Helmet>
      <title>ROCKLANDS | アクセス</title>
      <meta name="description" content="ROCKLANDSのアクセス情報です。地図（Googleマップ）、最寄り駅、住所をご覧いただけます。" />
    </Helmet>

  <BannerLanding title="アクセス" style="sub style3" />

  <div id="main">
    <section id="one">
      <div className="inner">
        <h3>Climing Park ROCKLANDS</h3>
        <p className="small">
          〒134-0084 東京都江戸川区東葛西5丁目27番16号<br />
          東京メトロ東西線葛西駅より徒歩5分
        </p>
        <hr />
        <div>
          <a href="https://goo.gl/maps/EtU2A6W7nWJFNHJ57" target="_blank" className="button">Google Map</a>
        </div>
      </div>
    </section>
  </div>

  </Layout>
)

export default Landing
