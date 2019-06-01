import { css } from '@emotion/core'

export default css`
  background-color: #07263b;

  figure {
    padding: 0;
    margin: 0;
  }

  .nav {
    background: linear-gradient(
      184.29deg,
      rgba(7, 108, 126, 0.2) 19.05%,
      rgba(32, 147, 167, 0.2) 94.81%
    );
    width: 100%;
    height: 72px;
    padding: 8px 40px;
    box-sizing: border-box;
  }

  .nav-group {
    display: flex;
    align-items: center;
    height: 56px;
    float: left;
  }

  .nav-link {
    margin-right: 50px;
    height: 60%;
  }

  .link {
    color: #fabc3c;
    font-size: 13px;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.01em;
    text-decoration: none;
    cursor: pointer;
  }

  .nav-link:nth-last-of-type(2) {
    margin-right: 0;
  }

  .nav-link-divider {
    width: 1px;
    height: 30px;
    background-color: #fabc3c;
    position: relative;
    top: -3px;
    margin: 0 25px;
  }

  .nav-icon {
    width: 18px;
    height: 18px;
    position: relative;
    top: -4px;
    margin: 0 25px;
    cursor: pointer;
  }

  .nav-icon:last-of-type {
    margin-left: 0;
  }

  .right {
    float: right;
  }

  .left {
    float: left;
  }
`
