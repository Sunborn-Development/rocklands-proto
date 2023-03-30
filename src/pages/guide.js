import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Calendar from '../components/Calendar'

import pdf1 from '../assets/files/register.pdf'
import pdf2 from '../assets/files/rule.pdf'
import pdf3 from '../assets/files/rule.2.pdf'
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
          2023.1.27更新
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
※混雑状況によって入場制限をする場合がございます。土日祝日は事前に<a href="https://docs.google.com/forms/d/e/1FAIpQLSdkfqWiBSGoy5viXovQ6GVxJgJQ_P4uOHisevQjkfCzAch6mw/viewform" target="_blank">予約フォーム</a>でご予約いただことも可能です。一日利用の場合は「開店〜15時」の枠でご予約ください。
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
          <li>コロナウイルス感染拡大防止に関する同意書（<a href={pdf3} target="_blank">PDFファイル</a>）</li>
        </ul>
        <hr />
        <h3>初回登録時</h3>
        <p className="text">
          当日の受付時に下記書類のサインが必要となります。<br />
          PDFファイルをダウンロード・印刷していただき、事前にご記入いただくと当日の受付がスムーズです。
        </p>
        <ul>
          <li>新規会員登録書（<a href={pdf1} target="_blank">PDFファイル</a>）</li>
          <li>利用規約同意書（<a href={pdf2} target="_blank">PDFファイル</a>）</li>
          <li>コロナウイルス感染拡大防止に関する同意書（<a href={pdf3} target="_blank">PDFファイル</a>）</li>
        </ul>
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
          ただし、同伴の方も施設利用者数の制限対象となります。土日祝日は事前に<a href="https://docs.google.com/forms/d/e/1FAIpQLSdkfqWiBSGoy5viXovQ6GVxJgJQ_P4uOHisevQjkfCzAch6mw/viewform" target="_blank">予約フォーム</a>でご予約いただことも可能です。一日利用の場合は「開店〜15時」の枠でご予約ください。
        </p>
    </div>
    </section>
    <section id="three">
      <div className="inner">
        <header className="major">
          <h2>新型コロナウィルス対策について</h2>
        </header>
        <p className="text">
          令和５年３月13日以降、厚生労働省の指針に従い、マスクの着用は、個人の主体的な選択を尊重し、着用は個人の判断に委ねることといたします。<br />
          尚、継続して手指消毒液を館内に設置しております。ご利用は任意です。
        </p>
        <p className="text">
          飛沫防止対策のお願いとしまして、以下の場合はご来場をお控えください。<br />
          ①発熱（37.5度以上）がある場合<br />
          ②咳や咽頭痛などの症状がある場合<br />
          ③同居する家族に陽性となった方がいる場合<br />
          ④他、コロナウィルス感染症の疑いがある場合
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
