import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  height: 50vh;
  justify-content: center;
`;

export const Spinner = styled.div`
  height: 5vh;
  width: 5vh;
  border: 6px solid rgba(0, 174, 239, 0.2);
  border-top-color: rgba(0, 174, 239, 0.8);
  border-radius: 100%;
  animation: rotation 0.6s infinite linear 0.25s;
  opacity: 0;

  @keyframes rotation {
    from {
      opacity: 1;
      transform: rotate(0deg);
    }
    to {
      opacity: 1;
      transform: rotate(359deg);
    }
  }
`;

