import React from 'react';
// import Logo from "../media/solarislogo.png";
import '../../src/App.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import { QUOTE, BRIEF, CODING, QA, REVISION, PRODUCTION} from '../utils/consts';


class Process extends Component {

  chooseProcess = (props) => {
    switch (props.processType) {
      case QUOTE:
        return <QuoteSection onChange={props.onChange}/>
      case BRIEF:
        return <BriefSection onChange={props.onChange}/>
      case CODING:
        return <CodingSection onChange={props.onChange}/>
      case QA:
        return <QASection onChange={props.onChange}/>
      case REVISION:
        return <RevisionSection onChange={props.onChange}/>
      case PRODUCTION:
        return <ProductionSection onChange={props.onChange}/>
      default:
        return (
          <div>
            try this
          </div>
        );
    }
  }

  render() { return(
    <div>
        {this.chooseSection(this.props)}
    </div>
  );
};
}

export default Section;


const QuoteSection = (props) => {
  return (
    <div>
<h1>quote</h1>
    </div>
  );
}

const BriefSection = (props) => {
  return (
    <div>
<h1>brief</h1>
    </div>
  );
}

const CodingSection = (props) => {
  return (
    <div>
<h1>coding</h1>
    </div>
  );
}

const QASection = (props) => {
  return (
    <div>
<h1>QA</h1>
    </div>
  );
}

const RevisionSection = (props) => {
  return (
    <div>
<h1>Revision</h1>
    </div>
  );
}

const ProductionSection = (props) => {
  return (
    <div>
<h1>Production</h1>
    </div>
  );
}

