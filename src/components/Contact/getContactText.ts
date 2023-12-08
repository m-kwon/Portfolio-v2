import { LanguageType } from '../../interfaces/customTypes';

export const getContactHeaderText = (language: LanguageType) => {
    return '[contact]';
};

export const getGreetingText = (language: LanguageType) => {
    return 'Want to get in touch?';
};

export const getContactFormText = (language: LanguageType) => {
    return { nameText: 'Name', emailText: 'Email', messageText: 'Message' };
};

export const getSendButtonText = (language: LanguageType) => {
    return 'Send';
};