import React from 'react';

import { useIntl } from '@edx/frontend-platform/i18n';
import { Card, Hyperlink, Icon } from '@openedx/paragon';
import { ArrowForward } from '@openedx/paragon/icons';

import { reduxHooks } from 'hooks';
import { baseAppUrl } from 'data/services/lms/urls';

import { findCoursesWidgetClicked } from './track';
import messages from './messages';
import './index.scss';

export const arrowIcon = (<Icon className="mx-1" src={ArrowForward} />);

export const LookingForChallengeWidget = () => {
  const { formatMessage } = useIntl();
  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();
  const hyperlinkDestination = baseAppUrl(courseSearchUrl) || '';

  return (
    <>
      <Card orientation="vertical" id="looking-for-challenge-widget" className="company-card">
        <div style={{borderBottom: "1px solid #e0e0e0", marginBottom: "10px"}}>
        <a href="https://spectreco.com">
          <img 
            src="http://local.edly.io:8000/static/indigo/images/spectreco-logo.png" 
            alt="Spectreco Logo" 
          />
        </a>
        <h3 >Simplifying your
        Sustainability Journey</h3>
        </div>
        <p>Delivering Compliance, Superior Financial Returns, Access to Capital and Inter-generational Impact through Technology.</p>
      </Card> 

      <Card orientation="horizontal" id="looking-for-challenge-widget">
        <div style={{borderRadius: "5px 0 0 5px", width: "40%", height: "100px", marginRight: "15px", backgroundColor:"#bc1823", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",}}>

        </div>
        <Card.Body className="m-auto pr-2">
          <h4>
            {formatMessage(messages.lookingForChallengePrompt)}
          </h4>
          <h5>
            <Hyperlink
              variant="brand"
              destination={hyperlinkDestination}
              onClick={findCoursesWidgetClicked(hyperlinkDestination)}
              className="d-flex align-items-center find-course"
            >
              {formatMessage(messages.findCoursesButton, { arrow: arrowIcon })}
            </Hyperlink>
          </h5>
        </Card.Body>
      </Card>
    </>
  );
};

LookingForChallengeWidget.propTypes = {};

export default LookingForChallengeWidget;
