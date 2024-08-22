'use client';

import useSignUp from '@app/sign-up/useSignUp';

import Rhf from '@components/Form';
import { Table } from '@components/Table';
import {
  emailRules,
  isConfirmPasswordValidate,
  passwordRules,
  telephoneRules,
} from '@utils/validation';
import { PHONE_MAX_LENGTH } from '@utils/validation/telephone';

import * as css from './signUp.css';

const SignUp = () => {
  const {
    signUpForm,
    passwordValue,
    handleTelephoneInput,
    handleFindPostCodeButtonClick,
  } = useSignUp();

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
                {/* TODO :: 중복확인 */}
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
                {/* TODO: 연락처 본인 인증 api 연결 */}
                <Rhf.Label name="telephone" required>
                  연락처
                </Rhf.Label>
              </Table.Th>
              <Table.Td>
                <Rhf.Input
                  type="tel"
                  name="telephone"
                  placeholder="e.g. 010-1234-5678"
                  onInput={handleTelephoneInput}
                  maxLength={PHONE_MAX_LENGTH}
                  rules={telephoneRules}
                />
                <Rhf.ErrorMessage name="telephone" />
              </Table.Td>
              <Table.Td />
            </Table.Tr>
            <Table.Tr>
              <Table.Th scope="row">
                <Rhf.Label name="address">주소</Rhf.Label>
              </Table.Th>
              <Table.Td>
                <div className={css.addressFormWrapper}>
                  <div className={css.zoneCodeWrapper}>
                    <Rhf.Input
                      name="postCode"
                      placeholder="우편번호"
                      readOnly
                    />
                    <button
                      type="button"
                      className={css.findZoneCodeButton}
                      onClick={handleFindPostCodeButtonClick}
                    >
                      우편번호 찾기
                    </button>
                  </div>
                  <Rhf.Input name="address" placeholder="주소" readOnly />
                  <Rhf.Input name="addressDetail" placeholder="상세주소" />
                </div>
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
                {/* TODO: 직접입력 또는 select box로 이메일 주소 선택할 수 있도록 수정 */}
                <Rhf.Input
                  name="email"
                  rules={emailRules}
                  placeholder="e.g. example@google.com"
                />
                <Rhf.ErrorMessage name="email" />
              </Table.Td>
              <Table.Td />
            </Table.Tr>
          </Table.Body>
        </Table>
        <button
          type="submit"
          onClick={() => {
            console.log(signUpForm.getValues());
          }}
        >
          제출
        </button>
      </Rhf.Form>
    </div>
  );
};

export default SignUp;
