import styled from "styled-components";

export const ResultCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  min-width: 320px;
  max-width: 480px;
  width: 100%;
  margin: 32px auto 0;
  text-align: center;
`;

export const ResultTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 24px;
`;

export const ResultGrid = styled.div`
  display: grid;
  gap: 24px;
`;

export const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f8fafc;
  border-radius: 8px;
`;

export const ResultLabel = styled.span`
  font-size: 16px;
  color: #64748b;
`;

export const ResultValue = styled.span<{ $highlight?: boolean }>`
  font-size: 18px;
  font-weight: 600;
  color: ${({ $highlight }) => ($highlight ? '#10b981' : '#1e293b')};
`;

export const LoadingText = styled.p`
  color: #64748b;
  font-size: 16px;
`;
