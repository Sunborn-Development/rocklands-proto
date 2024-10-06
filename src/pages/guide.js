import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Calendar from '../components/Calendar'

import pdf2 from '../assets/files/rule.pdf'
import qr from '../assets/files/hubspot_qr.jpg'
import floorGuide from '../assets/images/floorGuide.2.png'

const Landing = (props) => (
  <Layout>
    <Helmet>
      <title>ROCKLANDS | 営業時間・ご利用案内</title>
      <meta name="description" content="ROCKLANDSのご利用案内です。営業時間、注意点、コロナ禍対応、フロアガイドをご覧いただけます。" />
    </Helmet>

  <BannerLanding title="営業時間・ご利用案内" style="sub style1" />

  <div id="main">
    <section id="one">
      <div className="inner">
         <p className="small">
          2024.10.7更新
        </p>
        <header className="major">
          <h2>営業時間</h2>
        </header>
        <table className="alt">
          <thead>
            <tr><th>曜日</th><th>時間</th></tr>
          </thead>
          <tbody>
            <tr><td>平日</td><td>12:00 ~ 23:00</td></tr>
            <tr><td>土・日・祝日</td><td>9:00 ~ 21:00</td></tr>
          </tbody>
        </table>
        <p className="small">
※閉店時間にはジムを閉じます。時間までの退館をお願いいたします。<br />
※混雑状況によって入場制限をする場合がございます。
        </p>
        <hr />
        <table className="alt">
          <thead>
            <tr><th>定休日</th></tr>
          </thead>
          <tbody>
            <tr><td>なし（臨時休業がございますので営業カレンダーをご参照ください。）</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <Calendar />
    </section>

    <section id="two">
      <div className="inner">
        <header className="major">
          <h2>施設利用時の注意事項</h2>
        </header>
        <h3>施設利用規約</h3>
        <p className="text">下記PDFファイルにて詳細をご確認ください。</p>
        <ul>
          <li>利用規約同意書（<a href={pdf2} target="_blank">PDFファイル</a>）</li>
        </ul>
        <hr />
        <h3>初回登録時</h3>
        <p className="text">
          当施設を初めてご利用の場合、新規会員登録および利用規約への同意手続きが必要となります。<br />
          入力はWebフォームです。当日の受付時もしくは事前にご入力ください。下記リンク及びQRコードからWebフォームへアクセスしてください。スマートフォン、PC、タブレットいずれもご利用可能です。<br />
          ご来店前の事前にご入力いただくと当日の受付がスムーズです。
        </p>
        <p className="text">
＜<a href="https://share.hsforms.com/1Mi2subPQST-FAEE7Axho4wq9zw0" target="_blank">入力フォーム</a>＞
        </p>
        <p className="text">
          <img src={qr} />
        </p>

        <p className="small">
          ※「18歳未満、または高校生以下」の方は保護者のサインが必須ですので特にご注意ください。保護者サインが無いと施設利用ができません。
        </p>
        <hr />
        <h3>未成年の方のご利用</h3>
        <p className="text">
          保護者同伴の上、3歳からご利用可能です（各種スクール、イベント利用の場合を除く）。<br />
          小学生のみでのご利用はできません。必ず保護者の方の同伴が必要です。<br />
          中学生は初回のみ保護者の同伴が必要です。<br />
          高校生以下の方のご利用時間には以下の制限があります。
        </p>
        <ul>
          <li>小学生3年生以下の方:19時まで</li>
          <li>小学生4年生以上〜中学生の方:21時まで</li>
          <li>中学生:保護者の同伴がない場合は19時まで</li>
          <li>高校生:22時まで</li>
        </ul>
        <hr />
        <h3>同伴について</h3>
        <p className="text">
          保護者やビレイヤーとして利用者の方に同伴される場合、会員登録・施設利用料は不要です。<br />
          ただし、同伴の方も施設利用者数の制限対象となります。
        </p>
    </div>
    </section>
    <section id="three">
      <div className="inner">
        <header className="major">
          <h2>感染症対策について</h2>
        </header>
        <p className="text">
          マスクの着用は個人の主体的な選択を尊重し、個人の判断に委ねることといたします。<br />
          手指消毒液を館内に設置しております。ご利用は任意です。
        </p>
        <p className="text">
          飛沫防止対策のお願いとしまして、以下の場合はご来場をお控えください。<br />
          ①発熱（37.5度以上）がある場合<br />
          ②咳や咽頭痛などの症状がある場合<br />
          ③同居する家族に各種感染症で陽性の方がいる場合<br />
          ④ご本人に各種感染症の疑いがある場合
        </p>
        <p className="text">
          ご来場のお客様皆さまが安心して楽しめるよう、ご協力をお願いいたします。
        </p>
      </div>
    </section>
    <section id="three">
      <div className="inner">
        <header className="major">
          <h2>フロアガイド</h2>
        </header>
        <div className="floorGuide">
          <a href={floorGuide} target="_blank"><img src={floorGuide} /></a>
        </div>
      </div>
    </section>
  </div>

  </Layout>
)

export default Landing
