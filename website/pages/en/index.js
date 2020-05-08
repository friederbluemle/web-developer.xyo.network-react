/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const React = require('react');

class HomeSplash extends React.Component {

  render() {

    // eslint-disable-next-line no-unused-vars
    const Products = () => (
      <div className="pt-2">
        <Intro />
        <div className="p-1">
          <div className="row justify-content-center">
            <Client />
            <SDK />
          </div>
        </div>
      </div>
    )
    
    return (
      <div>
        <Products />
      </div>
    );
  }
}

class LinkTag extends React.Component {
  
  render() {
    return (
      <div>
        <a
          href={this.props.href} 
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-primary btn-square mr-1"
        >
          {this.props.children}
        </a>
      </div>
    )
  }
}

class PrimaryGetLink extends React.Component {
  
  render() {
    return (
        <a
          href={this.props.href} 
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-square mr-1"
          style={{ backgroundColor: '#2c3e50', color: '#fff'}}
        >
          <span className="pr-2">{this.props.children}</span>
          <i className="fas fa-external-link-alt"></i>
        </a>
    )
  }
}

class SecondaryGetLink extends React.Component {
  
  render() {
    return (
        <a
          href={this.props.href} 
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-secondary btn-square mr-1"
        >
          <span className="pr-2">{this.props.children}</span>
          <i className="fas fa-external-link-alt"></i>
        </a>
    )
  }
}

const IntroText = () => (
  <div>
    <h3 className="row justify-content-center m-1">
      This portal is used to educate the developer community on our open source geospatial location protocol which leverages node staking to contribute to an incentivized proof of origin.
    </h3>
    <h3>
      We host code and guides for SDKs geared to start development with iOS and Android. 
      We also have smart contract libraries which can be used as reference for contract creation for non ERC20 protocols.
    </h3>
  </div>
)

const Intro = () => (
  <div>
    <div className="pt-2">
      <h1 className="text-center">XYO DEVELOPER PORTAL</h1>
    </div>
      <div className="container text-center p-4">
        <IntroText />
        <div className="p-3">
          <LinkTag href="https://developers.xyo.network/docs/en/news-and-updates/">
            LATEST NEWS
          </LinkTag>
        </div>
        <br></br>
        <Changemaker />
      </div>    
  </div>
)

const Changemaker = () => (
  <div>
    <h3 className="p-3">
      We are also proud to partner with UC San Diego on the first ever Changemaker Challenge.
    </h3>
    <picture>
      <img alt="ucsd" className=".img-fluid p-3" src="/docs/assets/UCSanDiegoLogo-BlueGold.png"></img>
    </picture>
    <div className="p-5">
      <LinkTag href="https://developers.xyo.network/docs/en/changemaker-challenge/">
        CHANGEMAKER CHALLENGE 
      </LinkTag>
    </div>    
  </div>
)

const Client = () => (
  <div className="p-5 ">
      <div className="card shadow">
        <div className="card-header">
          XYO Client
        </div>
        <div className="card-body">
          <h3 className="card-title">Install Official Client to use XYO</h3>
          <p className="card-text">Turn your devices into a Sentinel, Bridge, Archivist or Diviner</p>
          <div>
            <div>
              <PrimaryGetLink 
                href="https://xyo.network/install/"
              >
                Get
              </PrimaryGetLink>
              <SecondaryGetLink 
                href="https://github.com/XYOracleNetwork"
              >
                GitHub
              </SecondaryGetLink>
              <SecondaryGetLink 
                href="https://developers.xyo.network/docs/en/bridge-x/"
              >
                Docs - Coming Soon
              </SecondaryGetLink>
            </div>
          </div>
        </div>
      </div>
  </div>
)

const SDK = () => (
  <div className="p-5">
    <div className="card shadow">
      <div className="card-header">
        XYO SDKs
      </div>
      <div className="card-body">
        <h3 className="card-title">SDKs for XYO Components</h3>
        <p className="card-text">Add XYO Proof of Origin and Bound Witness functions to your project</p>
        <div>
          <PrimaryGetLink 
            href="https://xyo.network/sdks/" 
          >
            Get
          </PrimaryGetLink>
          <SecondaryGetLink 
            href="https://github.com/XYOracleNetwork" 
          >
            GitHub
          </SecondaryGetLink>
          <SecondaryGetLink
            href="https://developers.xyo.network/docs/en/sdk-xyo-swift/"
          >
            XYO Swift Guide 
          </SecondaryGetLink>
          <SecondaryGetLink
            href="https://developers.xyo.network/docs/en/sdk-xyo-android/"
          >
            XYO Android Guide
          </SecondaryGetLink>
        </div>
      </div>
    </div>
  </div>
)

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    
    const Block = props => (
      <Container
      padding={['bottom', 'top']}
      id={props.id}
      background={props.background}
      >
      <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
          className="card shadow card-body"
          />
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

module.exports = Index;
