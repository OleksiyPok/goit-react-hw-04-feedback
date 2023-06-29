import { useState } from 'react';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        throw new Error(`Unsupported value: ${option}`);
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const result = Math.round((good / total) * 100);
    console.log('result:', result);
    return result;
  };

  const options = Object.keys({ good, neutral, bad });
  const isFeedback = Boolean(good + neutral + bad);

  return (
    <>
      <h1>Feedback form</h1>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      {
        <Section title="Statistics">
          {isFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={good + neutral + bad}
              positivPercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      }
    </>
  );
};

export default App;
