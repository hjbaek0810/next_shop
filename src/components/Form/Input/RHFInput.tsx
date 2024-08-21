import type { ChangeEvent, FocusEvent } from 'react';
import type { FieldValues, Path } from 'react-hook-form';
import { get, useFormContext } from 'react-hook-form';

import { isEmpty } from 'lodash-es';

import Input from '@/components/Form/Input';

import type { CommonRHFPropsType } from '@/components/Form';
import type { InputPropsType } from '@/components/Form/Input';

type RHFInputPropsType<T extends FieldValues> = CommonRHFPropsType<
  InputPropsType,
  T
>;

const RHFInput = <T extends FieldValues>({
  name = '' as Path<T>,
  rules,
  required,
  onChange,
  onBlur,
  ...restProps
}: RHFInputPropsType<T>) => {
  const {
    register,
    formState: { errors },
    clearErrors,
  } = useFormContext<T>();

  const error = get(errors, name);

  const inputRegister = register(name, {
    ...(required && { required: true }),
    ...rules,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputRegister.onChange(event);
    onChange?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (error) clearErrors(name);

    inputRegister.onBlur(event);
    onBlur?.(event);
  };

  return (
    <Input
      {...restProps}
      {...inputRegister}
      error={!isEmpty(error)}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default RHFInput;
