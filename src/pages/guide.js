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
        <header className="major">
          <h2>営業時間</h2>
        </header>
        <table className="alt">
          <thead>
            <tr><th>曜日</th><th>時間</th></tr>
          </thead>
          <tbody>
            <tr><td>平日</td><td>12:00 ~ 23:00</td></tr>
            <tr><td>土曜日</td><td>二部制（一日券は中止）<br />①8:00 ~ 14:00<br />②14:00 ~ 22:00</td></tr>
            <tr><td>日曜日・祝日</td><td>二部制（一日券は中止）<br />①8:00 ~ 14:00<br />②14:00 ~ 21:00</td></tr>
          </tbody>
        </table>
        <p className="small">
※閉店時間にはジムを閉じます。時間までの退館をお願いいたします。<br />
※コロナ禍対応として土日・祝日は予約制でのご利用となります。<a href="https://docs.google.com/forms/d/e/1FAIpQLSdkfqWiBSGoy5viXovQ6GVxJgJQ_P4uOHisevQjkfCzAch6mw/viewform" target="_blank">予約フォーム</a>からお申し込みください。尚、ご利用は二部入れ替え制（開店〜14:00／14:00〜閉店）となっており、人数制限を行う関係から利用枠ごとに料金が発生いたします。予めご了承ください。
        </p>
        <hr />
        <table className="alt">
          <thead>
            <tr><th>定休日</th></tr>
          </thead>
          <tbody>
            <tr><td>なし（臨時休業あり）</td></tr>
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
          保護者同伴の上、3歳からご利用可能です。<br />
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
          ただし、同伴の方も施設利用者数の制限対象となります。土日・祝日は予約制でのご利用となります。<a href="https://docs.google.com/forms/d/e/1FAIpQLSdkfqWiBSGoy5viXovQ6GVxJgJQ_P4uOHisevQjkfCzAch6mw/viewform" target="_blank">予約フォーム</a>からお申し込みください。<br />
        </p>  
    </div>
    </section>
    <section id="three">
      <div className="inner">
        <header className="major">
          <h2>新型コロナウイルス感染拡大防止の取り組みとお願い（施設ご利用前）</h2>
        </header>
        <p className="text">
          施設のご利用にあたって事前予約（土日・祝日のみ）にご協力ください。<br />
          当店では新型コロナウイルス感染拡大防止のため、コロナ禍において施設利用人数を最大70名までと制限しています。<br />
          混雑の予想される土日・祝日のみ、<a href="https://docs.google.com/forms/d/e/1FAIpQLSdkfqWiBSGoy5viXovQ6GVxJgJQ_P4uOHisevQjkfCzAch6mw/viewform" target="_blank">予約フォーム</a>をご用意しております。<br />
          こちらからご来店の予約をいただくと待ち時間なくご利用が可能です。<br />
          ご予約は前日の22時まで受け付けております。<br />
          ご予約は無料です。キャンセルのご連絡は当日のご予約時間の10分前までにご連絡ください。<br />
          キャンセルのご連絡、その他お問い合わせは<a href="tel:0356590808">03-5659-0808</a>までお気軽にご連絡ください。
        </p>
        <p className="small">
          ※当店からの確定の連絡をもって予約完了となります。混雑状況によって予約ができない場合がございます。予めご了承ください。
        </p>
        <hr />
        <h3>入館手順に従ってご入館ください</h3>
        <p className="small">
          新型コロナウイルス感染防止対策における入館手順
        </p>
        <ul className="alt">
          <li>①アルコールでの手指の消毒</li>
          <li>②検温</li>
          <li>③受付・登録・お支払い</li>
          <li>④ご入館</li>
        </ul>
      </div>
    </section>
    <section id="three">
      <div className="inner">
        <header className="major">
          <h2>新型コロナウイルス感染拡大防止の取り組みとお願い（施設ご利用時）</h2>
        </header>

        <dl>
          <dt>体調不良時のご利用はご遠慮ください</dt>
        </dl>
        <dl>
          <dt>入館時の検温・手指の消毒にご協力ください</dt>
          <dd>37.5°C以上の熱や咳、喉の痛み、倦怠感のある方のご利用はお断りいたします。</dd>
        </dl>
        <dl>
          <dt>お客様同士の距離を2m以上確保してください</dt>
          <dd>お互いの接触 (グータッチ等 )、近距離でのマスクなしでの会話は避けてください。咳エチケットにもご配慮ください。</dd>
        </dl>
        <dl>
          <dt>館内では常時マスクを着けてください</dt>
          <dd>クライミング中や更衣室での着替えの際も必ずマスクを装着してください。</dd>
        </dl>
        <dl>
          <dt>大きな声を出さないようにご注意ください</dt>
          <dd>大きな声での気合やガンバの声援はできるだけ避けてください。</dd>
        </dl>
        <dl>
          <dt>館内での食事は原則禁止です</dt>
          <dd>飲み物は蓋つき飲料のみお持ち込みいただけます。蓋つき飲料以外のお持ち込みはご遠慮ください。飲み物の共用もおやめください。4F休憩エリアでは飲食が可能です。エリアに掲示されている注意事項をよくご確認の上ご利用ください。</dd>
        </dl>
        <dl>
          <dt>更衣室の利用は男女共に最大5名まで</dt>
          <dd>更衣室の最大人数を越えないようにご協力をお願いいたします。また着替え時にも必ずマスクを外さないようにしてください。</dd>
        </dl>
        <dl>
          <dt>当館利用後の体調変化は速やかにご報告ください</dt>
          <dd>当館利用後に万一体調不良を感じた場合には、できるだけ速やかにご報告を頂けますようお願い申し上げます。</dd>
        </dl>
        <dl>
          <dt>館内換気等に伴う気温の変化にご注意ください</dt>
          <dd>換気等のために館内の気温が一定しない場合があります。お客様側にてご対応くださいますようお願い申し上げます。</dd>
        </dl>
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
