import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  currentRoute: string;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        padding: 10px 0;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:nth-child(1) {
          ${(props) =>
            props.currentRoute === '/' &&
            css`
              font-weight: 600;
              border-bottom: 2px solid #ff872c;
            `}
        }

        &:nth-child(2) {
          ${(props) =>
            props.currentRoute === '/import' &&
            css`
              font-weight: 600;
              border-bottom: 2px solid #ff872c;
            `}
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
