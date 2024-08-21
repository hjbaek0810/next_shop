import type { PropsWithChildren } from 'react';
import type {
  FieldPath,
  RegisterOptions,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';
import { type FieldValues, FormProvider } from 'react-hook-form';

import RHFInput from '@/components/Form/Input/RHFInput';
import RHFLabel from '@/components/Form/Label/RHFLabel';
import { passPropsToChildren } from '@/utils/render';

export type CommonRHFPropsType<T, U extends FieldValues> = {
  name?: FieldPath<U>;
  rules?: RegisterOptions<U>;
} & Omit<T, 'error'>;

type RHFFormPropsType<T extends FieldValues> = UseFormReturn<T> & {
  id?: string;
  onSubmit: SubmitHandler<T>;
};

type ControlPropsType<T extends FieldValues> = {
  name: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  rules?: RegisterOptions<T>;
};

const Form = <T extends FieldValues>({
  id,
  onSubmit,
  children,
  ...form
}: PropsWithChildren<RHFFormPropsType<T>>) => (
  <FormProvider {...form}>
    <form id={id} onSubmit={form.handleSubmit(onSubmit)}>
      {children}
    </form>
  </FormProvider>
);

const Control = <T extends FieldValues>({
  children,
  ...props
}: PropsWithChildren<ControlPropsType<T>>) =>
  passPropsToChildren(children, props);

const Rhf = {
  Form,
  Control,
  Label: RHFLabel,
  Input: RHFInput,
};

export default Rhf;
