import styled from "styled-components";
import { FormInputType } from "../../types/types";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const FormFieldWrapper = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 160%;
  letter-spacing: 0%;

  ${mediaQueries.phone} {
    font-size: 1.4rem;
  }

  label {
    color: ${({ theme }) => theme.colors.purple};

    &::after {
      content: " *";
      color: red;
    }
  }

  input {
    background: none;
    width: 100%;
    margin-top: 1rem;
    border: 1px solid #b982ff;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem;

    &:focus {
      outline: none;
    }
  }
`;
const FormInput = ({
  label,
  htmlFor,
  type,
  onChange,
  name,
  value,
}: FormInputType) => {
  return (
    <FormFieldWrapper>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        required
        value={value}
        onChange={onChange}
        name={name}
      />
    </FormFieldWrapper>
  );
};

export default FormInput;
