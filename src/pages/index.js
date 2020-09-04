import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class HomeIndex extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet
          title="ROCKLANDS｜東京・葛西のロッククライミング（リード・トップロープ・ボルダリング）ジム"
          meta={[
            { name: 'description', content: 'ROCKLANDSは東京23区内で屈指の規模を誇り、ロープを使ったルート（リード・トップロープ）クライミングエリアと人気のボルダリングエリアが併設された総合ロッククライミングジムです。キッズエリアがありファミリー利用もしやすく、ロッカールームが広く清潔で女性の方からも好評です。東京メトロ東西線葛西駅から徒歩5分。東京の中心からも好アクセスで、東京を代表するジムです。' },
          ]}
        >
        </Helmet>

        <Banner />

        <div id="main">
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2><span>Climing Park</span><br />ROCKLANDS</h2>
              </header>
              <p className="text">
東京23区内で屈指の規模を誇るロッククライミングジム「ロックランズ」。<br />
ロープを使ったルートクライミングエリアと人気のボルダリングエリアが共に充実した総合クライミングジムです。<br />
キッズエリアがありファミリー利用も歓迎。ロッカールームは広く清潔、女性の方からも好評です。<br />
課題セットやスクールに力を入れているので、初心者から経験者まで幅広くお楽しみいただけます。<br />
東京メトロ東西線葛西駅から徒歩5分。東京の中心からも好アクセスです。お仕事帰りや休日にお気軽にお越しください。
              </p>
            </div>
          </section>

          <section id="one" className="tiles">
            <article style={{backgroundImage: `url(${pic01})`}}>
              <header className="major">
                <h3>営業時間・ご利用案内</h3>
                <p>営業時間、コロナ禍対応、フロアガイド</p>
              </header>
              <Link to="/guide" className="link primary"></Link>
            </article>
            <article style={{backgroundImage: `url(${pic02})`}}>
              <header className="major">
                <h3>料金</h3>
                <p>会員登録、施設利用、各種レンタル品、駐車場等の料金（税込）</p>
              </header>
              <Link to="/price" className="link primary"></Link>
            </article>
      {/*
            <article style={{backgroundImage: `url(${pic03})`}}>
              <header className="major">
                <h3>スクール</h3>
                <p>スクールメニュー、料金</p>
              </header>
              <Link to="/school" className="link primary"></Link>
            </article>
            <article style={{backgroundImage: `url(${pic04})`}}>
              <header className="major">
                <h3>アクセス</h3>
                <p>Googleマップ、住所</p>
              </header>
              <Link to="/access" className="link primary"></Link>
            </article>
         */}
          </section>

        </div>
      </Layout>
    )
  }
}

export default HomeIndex
