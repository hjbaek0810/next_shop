'use client';

import { type FormEvent } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { formatPhoneNumber } from '@utils/validation';
import useModals from '@utils/modals/useModals';

import FindPostCodeModal from '@components/Modals/FindPostCodeModal';

const useSignUp = () => {
  const signUpForm = useForm();
  const passwordValue = useWatch({
    name: 'password',
    control: signUpForm.control,
  });

  const { openModal } = useModals();

  const { setValue } = signUpForm;

  const handleTelephoneInput = (event: FormEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(event.currentTarget.value);
    setValue('telephone', formattedPhoneNumber);
  };

  const handleFindPostCodeComplete = () => {};

  const handleFindPostCodeButtonClick = () => {
    openModal(FindPostCodeModal, {
      onSubmit: data => {
        setValue('postCode', data.zonecode);
        setValue('address', data.address);
      },
    });
  };

  return {
    signUpForm,
    passwordValue,
    handleTelephoneInput,
    handleFindPostCodeButtonClick,
    handleFindPostCodeComplete,
  };
};

export default useSignUp;
