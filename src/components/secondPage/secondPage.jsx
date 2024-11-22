import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;


const LeftSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #ccc;
`;

const RightSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const SecondPage = () => {
  return (
    <PageContainer>
      <LeftSection>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </LeftSection>


      <RightSection>
        <Heading>Welcome to the Second Page</Heading>
        <Paragraph>
          This is the content of the second page. We have an embedded video on the left, and on the right, we are
          showcasing some descriptive text. You can change the video by updating the URL in the iframe above.
        </Paragraph>
        <Paragraph>
          Here you can provide additional details, explanations, or instructions related to the video on the left.
        </Paragraph>
      </RightSection>
    </PageContainer>
  );
};

export default SecondPage;
