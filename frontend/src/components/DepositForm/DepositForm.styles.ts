import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  min-width: 320px;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 24px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #475569;
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ $hasError }) => ($hasError ? '#ef4444' : '#e2e8f0')};
  border-radius: 8px;
  font-size: 16px;
  color: #1e293b;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? '#ef4444' : '#4f46e5')};
    box-shadow: 0 0 0 3px ${({ $hasError }) => ($hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(79, 70, 229, 0.1)')};
  }

  &:disabled {
    background-color: #f8fafc;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.span`
  color: #ef4444;
  font-size: 14px;
  min-height: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Suffix = styled.span`
  color: #64748b;
  font-size: 14px;
  white-space: nowrap;
  min-width: 60px;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  padding: 12px 32px;
  background-color: ${({ disabled }) => (disabled ? '#94a3b8' : '#4f46e5')};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.2s;
  width: 100%;
  margin-top: 8px;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#94a3b8' : '#4338ca')};
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
