import DaumPostCode, { Address } from 'react-daum-postcode';

type FindPostCodeModalPropsType = {
  onSubmit: (address: Address) => void;
};

const FindPostCodeModal = ({ onSubmit }: FindPostCodeModalPropsType) => {
  return <DaumPostCode style={{ height: '100%' }} onComplete={onSubmit} />;
};

export default FindPostCodeModal;
