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
          料金はすべて税込（10%） / 2023.4.1更新
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
            <tr><td>1日券</td><td>¥2,310</td><td>¥1,760</td></tr>
            <tr><td>昼・開店〜18時半</td><td>¥1,760<br />シニア¥1,320<span>*4</span></td><td>¥1,320</td></tr>
            <tr><td>夜・18時〜閉店<span>*1</span></td><td>¥1,870</td><td>¥1,430</td></tr>
          </tbody>
        </table>
        <hr />
        <h3>土日・祝日のメニュー</h3>
        <table className="alt">
          <thead>
            <tr><th></th><th>一般</th><th>学生・キッズ<span>*2,3</span></th></tr>
          </thead>
          <tbody>
            <tr><td>半日券<span>*5</span><br />①開店〜15時<br />②15時〜閉店</td><td>¥2,200</td><td>¥1,650</td></tr>
            <tr><td>1日券<span>*5</span><br />開店〜閉店</td><td>¥2,750</td><td>¥2,200</td></tr>
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
            <tr><td>月パス</td><td>¥13,860</td><td>¥9,900</td></tr>
            <tr><td>サブスクパス *7<br />＜<a href="https://forms.gle/2VKKcP2xb2TKce299">お申込みフォーム</a>＞</td><td>¥12,890</td><td>¥9,240</td></tr>
            <tr><td>年間パス</td><td>¥138,600</td><td>¥99,000</td></tr>
          </tbody>
        </table>
        <h3>貸し切り</h3>
        <p className="small">
        ROCKLANDSでは、各種イベントや撮影などの様々な用途に向けて貸し切りでのご利用も承っております。<br />
        全館貸し切りから、リードエリアのみ、ボルダリングエリアのみ、キッズエリアのみなど、時間帯を含め用途やご予算に合わせて柔軟な組み合わせが可能です。<br />
        費用は内容確認の上、個別にお見積りいたしますのでお気軽にお問い合わせください。
        </p>
        <p className="small">
        ＜お問い合わせ＞<br />
        03-5659-0808 / <a href="mailto:official.rocklands@gmail.com">メール</a>
        </p>
        <hr />
        <p className="small">
          *1:「夜・18時〜閉店」でのご利用の際には、 閉店時間の変動に関わらず閉店までとさせていただきます。営業時間の詳細は<Link to="/guide">こちら</Link>でご確認ください。<br />
          *2:大学生、専門学校生、高校生、中学生および小学生以下の方に適用される料金です。キッズは3歳以上です。キッズ〜小中学生のご利用には大人の方の付き添いが必要です（中学生の付き添いは初回施設利用時のみ必須）。<br />
          *3:学生料金でのご利用の際には学生証の提示をお願いすることがあります。 <br />
          *4:シニア料金 (60 歳以上の方 ) でのご利用の際には公的な身分証明書等のご提示をお願いすることがあります。<br />
          *5:混雑状況によって入場制限をする場合がございます。事前に<a href="https://docs.google.com/forms/d/e/1FAIpQLSdkfqWiBSGoy5viXovQ6GVxJgJQ_P4uOHisevQjkfCzAch6mw/viewform" target="_blank">予約フォーム</a>でご予約いただくとスムーズです。一日利用の場合は「開店〜15時」の枠でご予約ください。<br />
          *6:回数券は施設利用料のみに利用できます。利用期限はご購入日から2年間です。受け取りは購入者のみで、回数券使用開始後（会員番号＆氏名記入後）の譲渡はできません。<br />
          *7:▼ご購入の流れ<br />
            　①サブスクパス<a href="https://forms.gle/2VKKcP2xb2TKce299">お申込みフォーム</a>から必要事項をご入力ください。<br />
            　②フォームに入力いただいたメールアドレス宛に後日請求書＆支払い先URLをメール送付いたします。<br />
            　③支払い先URLにアクセスいただき、クレジットカード情報の入力＆決済をお願いいたします。<br />
            　④次回利用時に決済完了画面をご提示後、パスを発行いたします。<br />
            　※決済方法はクレジットカードのみとなります。<br />
            　※サブスクパスは即日発行できません。事前の申し込みをお願いいたします。<br />
            　※パスの有効期限は、決済完了後、最初の利用日(最初のジム利用日)からとなります。<br />
            　※サブスクパス発行後1年以内の解約は原則できません。（転勤等の事情がある場合はご相談ください）<br />
        </p>


      </div>
    </section>


    <section id="three">
      <div className="inner">
        <header className="major">
          <h2>講習・スクール</h2>
        </header>

        <p className="small">
        各種講習・スクールは<a href="https://calendar.google.com/calendar/embed?src=nrqdn4ehck83v1re6bbmsqk2vc%40group.calendar.google.com&ctz=Asia%2FTokyo" target="_blank">公式カレンダー</a>の各予定からご確認いただけます。<br />
        ご都合に合わせてご利用いただけますのでお気軽にお問い合わせください。
        </p>
        <p className="small">
        ＜お問い合わせ＞<br />
        03-5659-0808 / <a href="mailto:staff.rocklands@gmail.com">メール</a>
        </p>
   
        <table className="alt">
          <thead>
            <tr><th>講習</th><th>一般</th><th>キッズ・ユース</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>
                初心者向け・トップロープ講習<br />
                （1回・1時間）
              </td>
              <td>
                無料 *1
              </td>
              <td>
                無料 *1
              </td>
            </tr>
            <tr>
              <td>
                初心者向け・リード講習<br />
                （全2回・各2時間）
              </td>
              <td>
                ¥6,930 *1,2<br />
                （ビレイ講習のみの参加可）
              </td>
              <td>
                ¥9,900 *1,2<br />
                （小学2～中年生・保護者ビレイ講習込み）
              </td>
            </tr>
          </tbody>
        </table>

        <table className="alt">
          <thead>
            <tr><th>スクール</th><th>一般・学生</th><th>キッズ</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>
                レギュラースクール・体験クラス *3<br />
                （1回）
              </td>
              <td>
                ¥5,500 *1,2
              </td>
              <td>
                ¥4,400 *1,2<br />
              </td>
            </tr>
            <tr>
              <td>
                レギュラースクール・ファンクラス *3,4<br />
                （全12回・3ヶ月）
              </td>
              <td>
                ¥50,600 *1,2
              </td>
              <td>
                ¥37,400 *1,2<br />
              </td>
            </tr>
            <tr>
              <td>
                ボルダリング知育プログラム＜のぼちー＞
              </td>
              <td>
                -
              </td>
              <td>
                詳しくは＜<a href="https://www.hummingbird-climbing.com" target="_blank">公式HP</a>＞をご確認ください。
              </td>
            </tr>

          </tbody>
        </table>

        <hr />
        <p className="small">
          *1:レンタル無料（駐車場以外）<br />
          *2:施設利用料込み<br />
          *3:講習時間は年齢区分によって異なります。詳しくはお問い合わせください。<br />
          *4:振替による期間延長の場合、スポットのレッスン日以外は施設利用料が無料とはなりません。
        </p>

        <p className="small">
          ※スクール生自身の都合による途中退会や欠席に対する返金は行いません。<br />
          ※コーチは変更となる場合がございます。<br />
          ※各スクールの定員は4名です。<br />
          ※各種パス会員の方は割引がございます。但し、月の途中でのお申し込みの場合、1か月内の期間重複は20日以上であることが必要です。
        </p>
      </div>
    </section>



    <section id="four">
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
            <tr><td>ロープ</td><td>¥440</td></tr>
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
