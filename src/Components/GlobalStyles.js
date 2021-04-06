import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
        ${reset};
        a{
            text-decoration:none;
            color:inherit;
        }
        *{
            box-sizing:border-box;
        }
        body{
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
             Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            font-size:12px;
            background-color:rgba(20, 20, 20, 1);
            color: white;
            padding-top: 80px;
        }
`;

export default GlobalStyles;
