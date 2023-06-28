import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import LandingPage from './landPage';

const root = ReactDOM.createRoot(document.getElementById('root'));



const listImg = ["china.png", "wife.png"]

function AnotherButton(props) {
  function Click_02() {
    props.handleClick(2);
  }
  return (
    <input className="button" type="button" value={props.val} onClick={Click_02} />
  )
}

function Content() {
    return(
      <>
        <Head listImg={listImg} />
        <LandingPage/>
        <Toh2 words="Я простой русски человек из города тверь, мой дед работать завод, мой отец работать завод и я тоже завод. " />
        <Toh2 words="Россия медведь  уважать великий нефритовый лидер,  великий СИ мудрость лидерские качества хорошо, русский китай братство! Удар! " />
      </>
    )
}

root.render(<Content />)

/*Передаем в качестве пропса список с рисунками*/
function Head(props) {
  const logoImages =listImg.map((img, index) =>
  <img key={index} src={img} />
  );
  return(
  <div className="head">
  {logoImages}
  </div>
  )
}
 
const Toh2 = ({ words }) => {
  return <h4>{words}</h4>;
};
