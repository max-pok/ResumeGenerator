import "../styles/finalize.css"
import { Card } from "antd"
import { PhoneOutlined, MailOutlined, HomeOutlined, LinkedinOutlined, UserOutlined } from "@ant-design/icons"

const { Meta } = Card

const Finalize = () => {
  return (
    <div>
      <div className='container-fluid text-start resume' id='divToPrint'>
        <div className='container profile-box'>
          <div className='row'>
            <div className='col-md-4 left-co'>
              <div className='left-side'>
                <Card cover={<img alt='example' src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg' />}>
                  <Meta title='Jonney Anderson' description='Web Designer' />
                </Card>
                <h4 className='ltitle'>Contact</h4>
                <div className='contact-box pb1'>
                  {/* <div className='icon'> */}
                  <PhoneOutlined style={{ fontSize: "20px", color: "white" }} />
                  <div className='detail'>+122 2345 3763</div>
                </div>
                <div className='contact-box pb1'>
                  <MailOutlined style={{ fontSize: "20px", color: "white" }} />
                  <div className='detail'>info@gmail.com</div>
                </div>
                <div className='contact-box pb1'>
                  <LinkedinOutlined style={{ fontSize: "20px", color: "white" }} />
                  <div className='detail'>info@smarteyeapps.com</div>
                </div>
                <div className='contact-box pb1'>
                  <HomeOutlined style={{ fontSize: "20px", color: "white" }} />
                  <div className='detail'>First Floor,Vincent Plaza, Toranto, Canada</div>
                </div>
              </div>
            </div>
            <div className='col-md-8 rt-div'>
              <div className='rit-cover'>
                <div className='hotkey'>
                  <h1 className='header-title'>Jonney Anderson</h1>
                  <h4 className='header-title'>Web Designer</h4>
                </div>
                <h2 className='rit-titl'>Profile</h2>
                <div className='about'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan purus enim, a vestibulum est tristique sit amet. Suspendisse nibh nisl, imperdiet sit amet mi vitae, elementum elementum nibh. Vivamus vitae eros malesuada, convallis dolor malesuada, lobortis ex. Sed cursus augue risus, ac semper est consectetur vitae. Praesent consequat metus sit amet rhoncus luctus.</p>
                </div>

                <h2 className='rit-titl'>Work Experience</h2>
                <div className='work-exp'>
                  <h6>
                    Junior Software Developer <span>2008-2011</span>
                  </h6>
                  <i>Microsoft / United States</i>
                  <ul>
                    <li>
                      <i className='far fa-hand-point-right'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      <i className='far fa-hand-point-right'></i> Sorem dolor sit amet, consectetur.
                    </li>
                    <li>
                      <i className='far fa-hand-point-right'></i> Porem ipsum sit amet, consectetur adipiscing
                    </li>
                  </ul>
                </div>
                <div className='work-exp'>
                  <h6>
                    Junior Software Developer <span>2008-2011</span>
                  </h6>
                  <i>Microsoft / United States</i>
                  <ul>
                    <li>
                      <i className='far fa-hand-point-right'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>

                    <li>
                      <i className='far fa-hand-point-right'></i> Sed cursus augue risus, ac semper est consectetur vitae
                    </li>
                  </ul>
                </div>
                <div className='work-exp'>
                  <h6>
                    Junior Software Developer <span>2008-2011</span>
                  </h6>
                  <i>Microsoft / United States</i>
                  <ul>
                    <li>
                      <i className='far fa-hand-point-right'></i> Praesent consequat metus sit amet rhoncus luctus.
                    </li>
                    <li>
                      <i className='far fa-hand-point-right'></i> Lorem ipsum dolor sit amet, consectetur.
                    </li>
                  </ul>
                </div>

                <h2 className='rit-titl'>Education</h2>
                <div className='work-exp'>
                  <div className='work-exp'>
                    <h6>
                      Cambridg University <span>2013-2015</span>
                    </h6>
                    <i>Master Degree</i>
                    <ul>
                      <li>
                        <i className='far fa-hand-point-right'></i> Field: Cyber Security
                      </li>
                      <li>
                        <i className='far fa-hand-point-right'></i> GPA: 100
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className='rit-titl'>Skills</h2>
                <div className='profess-cover row no-margin'>
                  <div className='col-md-6'>
                    <div className='prog-row row'>
                      <div className='col-sm-6'>Photoshop</div>
                      <div className='col-sm-6'>
                        <div className='progress'>
                          <div className='progress-bar' role='progressbar' style={{ width: "65%" }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='row prog-row'>
                      <div className='col-sm-6'>PHP</div>
                      <div className='col-sm-6'>
                        <div className='progress'>
                          <div className='progress-bar' role='progressbar' style={{ width: "65%" }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='row prog-row'>
                      <div className='col-sm-6'>Web Design</div>
                      <div className='col-sm-6'>
                        <div className='progress'>
                          <div className='progress-bar' role='progressbar' style={{ width: "65%" }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='row prog-row'>
                      <div className='col-sm-6'>Web Development</div>
                      <div className='col-sm-6'>
                        <div className='progress'>
                          <div className='progress-bar' role='progressbar' style={{ width: "65%" }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Finalize
