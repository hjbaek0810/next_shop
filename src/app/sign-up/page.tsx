'use client';

import { useForm, useWatch } from 'react-hook-form';

import Rhf from '@components/Form';
import { Table } from '@components/Table';
import {
  emailRules,
  isConfirmPasswordValidate,
  passwordRules,
} from '@utils/validation';

import * as css from './signUp.css';

const SignUp = () => {
  const signUpForm = useForm();
  const passwordValue = useWatch({
    name: 'password',
    control: signUpForm.control,
  });

  return (
    <div className={css.signUpFormWrapper}>
      <div className={css.titleSection}>
        <h2>JOIN</h2>
        <p>회원가입하시면 편리하게 쇼핑하실 수 있습니다</p>
      </div>

      <Rhf.Form
        {...signUpForm}
        onSubmit={data => {
          console.log('submit', data);
        }}
      >
        <h3 className={css.formTitle}>기본정보</h3>
        <Table>
          <Table.Body>
            <Table.Tr>
              <Table.Th scope="row">
                <Rhf.Label name="userId" required>
                  아이디
                </Rhf.Label>
              </Table.Th>
              <Table.Td>
                <Rhf.Input name="userId" required />
              </Table.Td>
              <Table.Td />
            </Table.Tr>
            <Table.Tr>
              <Table.Th scope="row">
                <Rhf.Label name="password" required>
                  비밀번호
                </Rhf.Label>
              </Table.Th>
              <Table.Td>
                <Rhf.Input
                  type="password"
                  name="password"
                  rules={passwordRules}
                  placeholder="영문 대소문자/숫자 모두 포함, 8자~16자"
                />
                <Rhf.ErrorMessage name="password" />
              </Table.Td>
              <Table.Td />
            </Table.Tr>
            <Table.Tr>
              <Table.Th scope="row">
                <Rhf.Label name="confirmPassword" required>
                  비밀번호 확인
                </Rhf.Label>
              </Table.Th>
              <Table.Td>
                <Rhf.Input
                  type="password"
                  name="confirmPassword"
                  rules={{
                    required: true,
                    validate: value =>
                      isConfirmPasswordValidate({
                        password: passwordValue,
                        confirmPassword: value,
                      }),
                  }}
                />
                <Rhf.ErrorMessage name="confirmPassword" />
              </Table.Td>
              <Table.Td />
            </Table.Tr>
            <Table.Tr>
              <Table.Th scope="row">
                <Rhf.Label name="name" required>
                  이름
                </Rhf.Label>
              </Table.Th>
              <Table.Td>
                <Rhf.Input name="name" required />
              </Table.Td>
              <Table.Td />
            </Table.Tr>
            <Table.Tr>
              <Table.Th scope="row">
                <Rhf.Label name="telephone" required>
                  연락처
                </Rhf.Label>
              </Table.Th>
              <Table.Td>
                <Rhf.Input name="telephone" required />
              </Table.Td>
              <Table.Td />
            </Table.Tr>
            <Table.Tr>
              <Table.Th scope="row">
                <Rhf.Label name="address">주소</Rhf.Label>
              </Table.Th>
              <Table.Td>
                <Rhf.Input name="address" />
              </Table.Td>
              <Table.Td />
            </Table.Tr>
            <Table.Tr>
              <Table.Th scope="row">
                <Rhf.Label name="email" required>
                  이메일
                </Rhf.Label>
              </Table.Th>
              <Table.Td>
                <Rhf.Input name="email" rules={emailRules} />
                <Rhf.ErrorMessage name="email" />
              </Table.Td>
              <Table.Td />
            </Table.Tr>
          </Table.Body>
        </Table>
        <button type="submit">제출</button>
      </Rhf.Form>
    </div>
  );
};

export default SignUp;
