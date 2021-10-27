import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';

ReactDOM.render(
  <>
    <div className="d-flex justify-content-start cards">
      <Card
        imgsrc="https://cdn.statically.io/img/www.ageratingjuju.com/f=auto%2Cq=60/wp-content/uploads/2021/10/Money-Heist.jpg"
        title="Money Heist"
        linkUrl="https://www.netflix.com/in/title/80192098"
        description="
    The Netflix series Money Heist (La casa de Papel) is a Spanish heist crime drama television series created by Álex Pina for Netflix. It is rated TV-MA for Violence, Sex, Nudity,
    Substances, Sexual Violence."
      />
      <Card
        imgsrc="https://cdn.statically.io/img/www.ageratingjuju.com/f=auto%2Cq=60/wp-content/uploads/2021/10/Squid-Game.jpg"
        title="Squid Game"
        linkUrl="https://www.netflix.com/in/title/80192098"
        description="
    The Netflix series Money Heist (La casa de Papel) is a Spanish heist crime drama television series created by Álex Pina for Netflix. It is rated TV-MA for Violence, Sex, Nudity,
    Substances, Sexual Violence."
      />
      <Card
        imgsrc="https://cdn.statically.io/img/www.ageratingjuju.com/f=auto%2Cq=60/wp-content/uploads/2021/10/Breaking-Bad.jpg"
        title="Breaking Bad"
        linkUrl="https://www.netflix.com/in/title/80192098"
        description="
    The Netflix series Money Heist (La casa de Papel) is a Spanish heist crime drama television series created by Álex Pina for Netflix. It is rated TV-MA for Violence, Sex, Nudity,
    Substances, Sexual Violence."
      />
    </div>
  </>,
  document.getElementById('root')
);
