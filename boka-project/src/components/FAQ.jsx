import React, { useState } from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../css/FAQ.css'; 

const FAQ = () => {
  const [activeKey, setActiveKey] = useState('');

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? '' : key);
  };

  const faqData = [
    {
      question: 'Vad ingår i en hemstädning?',
      answer: 'I en hemstädning ingår dammsugning, torkning av ytor, rengöring av badrum och kök, samt moppning av golv.',
      key: '0'
    },
    {
      question: 'Hur ofta bör jag boka städning?',
      answer: 'Frekvensen beror på dina behov, men många väljer att boka städning varannan vecka.',
      key: '1'
    },
    {
      question: 'Vad gör jag om jag är missnöjd med städningen?',
      answer: 'Om du inte är nöjd, kontakta oss inom 24 timmar så ordnar vi en omtädning utan extra kostnad.',
      key: '2'
    },
    {
      question: 'Är era städare försäkrade?',
      answer: 'Ja, alla våra städare är försäkrade för att skydda både dig och dem under arbetet.',
      key: '3'
    },
    {
      question: 'Vilka andra tjänster erbjuder ni?',
      answer: 'Förutom hemstädning erbjuder vi även kontorsstädning, flyttstädning, och fönsterputsning.',
      key: '4'
    },
    {
      question: 'Hur kan jag betala?',
      answer: 'Vi accepterar betalning via kort, banköverföring, och Swish.',
      key: '5'
    }
  ];

  return (
    <Container className="faq-container">
         <div className="faq-header-section">
            <h1>Frågor & svar</h1>
            <p>Här har vi samlat svar på frågor som våra kunder brukar ha om flyttstädning och flytthjälp i Stockholm. Om du har frågor som du inte hittar svar på här så är du varmt välkommen att kontakta oss.</p>
        </div>
      <Accordion className='accordion' activeKey={activeKey}>
        {faqData.map(faq => (
          <Card key={faq.key}>
            <Card.Header>
              <div className="faq-header" onClick={() => toggleAccordion(faq.key)}>
                {faq.question}
                <FontAwesomeIcon icon={activeKey === faq.key ? faChevronUp : faChevronDown} className="faq-arrow" />
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey={faq.key}>
              <Card.Body>{faq.answer}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Container>
  );
};

export default FAQ;
