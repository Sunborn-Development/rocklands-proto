import React from 'react'
import { Link } from 'gatsby'

const Contact = (props) => (
  <section id="contact">
    <div className="inner">
      {/*
      <section>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Clear" /></li>
          </ul>
        </form>
      </section>
      */}
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>アクセス</h3>
            <span>
              〒134-0084<br />
              東京都江戸川区東葛西5丁目27番16号
            </span>
            <div>
              <a href="https://goo.gl/maps/EtU2A6W7nWJFNHJ57" target="_blank" className="button">Google Map</a>
            </div>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>電話・予約</h3>
            <a href="tel:0356590808"><span>03-5659-0808</span></a>
            {/*
            <div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdkfqWiBSGoy5viXovQ6GVxJgJQ_P4uOHisevQjkfCzAch6mw/viewform" target="_blank" className="button">予約フォーム</a>
            </div>
            */}
          </div>
        </section>

        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>お問い合わせ</h3>
            <a href="mailto:staff.rocklands@gmail.com">staff.rocklands@gmail.com</a>
          </div>
        </section>


      </section>
    </div>
  </section>
)

export default Contact
