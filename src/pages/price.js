import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const Landing = (props) => (
  <Layout>
    <Helmet>
      <title>ROCKLANDS | 料金料金</title>
      <meta name="description" content="ROCKLANDSのご利用料金をご紹介します。会員登録、施設利用、各種レンタル品、駐車場等の料金（税込）
をご覧いただけます。" />
    </Helmet>

  <BannerLanding title="料金" style="sub style2" />

  <div id="main">
    <section id="one">
      <div className="inner">
        <p className="small">
          料金はすべて税込（10%）
        </p>
        <hr />
        <header className="major">
          <h2>会員登録（初回のみ）</h2>
        </header>
        <table className="alt">
          <thead>
            <tr><th>初回登録料</th></tr>
          </thead>
          <tbody>
            <tr><td>¥1,650</td></tr>
          </tbody>
        </table>
        <p className="small">
※初回登録時にのみ初回登録料がかかります。2回目以降のご利用には初回登録料はかかりません。<br />
※カードを紛失した場合には再登録が必要です。再登録費用は¥330がかかります。<br />
<div>※初回ご利用時はレンタル品は無料です。</div>
        </p>
      </div>
    </section>

    <section id="two">
      <div className="inner">
        <header className="major">
          <h2>施設利用</h2>
        </header>
        <h3>平日のメニュー</h3>
        <table className="alt">
          <thead>
            <tr><th></th><th>一般</th><th>学生・キッズ<span>*2,3</span></th></tr>
          </thead>
          <tbody>
            <tr><td>1日券</td><td>¥2,200</td><td>¥1,650</td></tr>
            <tr><td>昼・18時半まで</td><td>¥1,650<br />シニア¥1,100<span>*4</span></td><td>¥1,100</td></tr>
            <tr><td>夜・18時から<span>*1</span></td><td>¥1,650</td><td>¥1,320</td></tr>
            <tr><td>夜2・21時から<span>*1</span></td><td>¥1,320</td><td>¥1,100</td></tr>
          </tbody>
        </table>
        <hr />
        <h3>土日・祝日のメニュー</h3>
        <table className="alt">
          <thead>
            <tr><th></th><th>一般</th><th>学生・キッズ<span>*2,3</span></th></tr>
          </thead>
          <tbody>
            <tr><td>1日券<span>*5</span></td><td>¥2,200</td><td>¥1,650</td></tr>
            <tr><td>夜・18時から<span>*1</span></td><td>¥1,650</td><td>¥1,320</td></tr>
          </tbody>
        </table>
        <hr />
        <h3>回数券・パスポート</h3>
        <table className="alt">
          <thead>
            <tr><th></th><th>一般</th><th>学生・キッズ<span>*2,3</span></th></tr>
          </thead>
          <tbody>
            <tr><td>回数券<br />￥22,000のご利用券<span>*6</span></td><td colspan="2">¥20,000</td></tr>
            <tr><td>月パスポート</td><td>¥13,860</td><td>¥9,900</td></tr>
            <tr><td>年間パスポート</td><td>¥138,600</td><td>¥99,000</td></tr>
          </tbody>
        </table>
        <h3>貸し切り</h3>
        <p className="small">
        ROCKLANDSでは、各種イベントや撮影などの様々な用途に向けて貸し切りでのご利用も承っております。<br />
        全館貸し切りから、リードエリアのみ、ボルダリングエリアのみ、キッズエリアのみなど、時間帯を含め用途やご予算に合わせて柔軟な組み合わせが可能です。<br />
        費用は内容確認の上、個別にお見積りいたしますのでお気軽にお問い合わせください。<br />
        ＜お問い合わせ＞<br />
        03-5659-0808 / <a href="mailto:official.rocklands@gmail.com">メール</a>
        </p>
        <hr />
        <p className="small">
          *1:「夜・18時から」「夜2・21時から」 でのご利用の際には、 閉店時間の変動に関わらずクローズまでとさせていただきます。営業時間の詳細は<Link to="/guide">こちら</Link>でご確認ください。<br />
          *2:大学生、専門学校生、高校生、中学生および小学生以下の方に適用される料金です。キッズは3歳以上です。キッズ〜小中学生のご利用には大人の方の付き添いが必要です（中学生の付き添いは初回施設利用時のみ必須）。<br />
          *3:学生料金でのご利用の際には学生証の提示をお願いすることがあります。 <br />
          *4:シニア料金 (60 歳以上の方 ) でのご利用の際には公的な身分証明書等のご提示をお願いすることがあります。<br />
          *5:コロナ禍対応として土日・祝日は予約制でのご利用となります。<a href="https://docs.google.com/forms/d/e/1FAIpQLSdkfqWiBSGoy5viXovQ6GVxJgJQ_P4uOHisevQjkfCzAch6mw/viewform" target="_blank">予約フォーム</a>からお申し込みください。尚、ご利用は二部入れ替え制（開店〜14:00／14:00〜閉店）となっており、人数制限を行う関係から利用枠ごとに料金が発生いたします。予めご了承ください。<br />
          *6:回数券は施設利用料のみに利用できます。利用期限はご購入日から2年間です。受け取りは購入者のみで、回数券使用開始後（会員番号＆氏名記入後）の譲渡はできません。
        </p>


      </div>
    </section>
    <section id="three">
      <div className="inner">
        <header className="major">
          <h2>各種レンタル品・駐車場</h2>
        </header>
        <table className="alt">
          <thead>
            <tr><th>品目</th><th>一般</th></tr>
          </thead>
          <tbody>
            <tr><td>クライミングシューズ</td><td>¥330</td></tr>
            <tr><td>チョーク（コロナ期間中は液体チョークのみ）</td><td>¥110</td></tr>
            <tr><td>ハーネス</td><td>¥330</td></tr>
            <tr><td>ビレイ器具</td><td>¥330</td></tr>
            <tr><td><b>ロープ</b>（コロナ期間中はレンタル中止）</td><td><b>¥440</b></td></tr>
            <tr><td>駐車場</td><td>¥550</td></tr>
          </tbody>
        </table>
        <p className="small">
※初回ご利用時はレンタル品は無料です。<br />
※レンタル品は当日のご利用状況によってレンタルできない場合がございます。
        </p>
      </div>
    </section>
  </div>

  </Layout>
)

export default Landing
