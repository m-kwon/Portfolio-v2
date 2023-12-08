import React, { FC } from 'react';

interface Props {
  email: string;
  subject: string;
  body: string;
  children: JSX.Element;
}

const Mailto: FC<Props> = ({ email, subject, body, children }) => {
  return (
    <a href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>
      {children}
    </a>
  );
};

export default Mailto;