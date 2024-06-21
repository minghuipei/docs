import clsx from "clsx";
import { SVGProps } from "react";

const IconServer = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-400 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      d="M17 7.25C16.5858 7.25 16.25 7.58579 16.25 8C16.25 8.41421 16.5858 8.75 17 8.75V7.25ZM17.01 8.75C17.4242 8.75 17.76 8.41421 17.76 8C17.76 7.58579 17.4242 7.25 17.01 7.25V8.75ZM17 15.25C16.5858 15.25 16.25 15.5858 16.25 16C16.25 16.4142 16.5858 16.75 17 16.75V15.25ZM17.01 16.75C17.4242 16.75 17.76 16.4142 17.76 16C17.76 15.5858 17.4242 15.25 17.01 15.25V16.75ZM5 4.75H19V3.25H5V4.75ZM20.25 6V10H21.75V6H20.25ZM19 11.25H5V12.75H19V11.25ZM3.75 10V6H2.25V10H3.75ZM5 11.25C4.30964 11.25 3.75 10.6904 3.75 10H2.25C2.25 11.5188 3.48122 12.75 5 12.75V11.25ZM20.25 10C20.25 10.6904 19.6904 11.25 19 11.25V12.75C20.5188 12.75 21.75 11.5188 21.75 10H20.25ZM19 4.75C19.6904 4.75 20.25 5.30964 20.25 6H21.75C21.75 4.48122 20.5188 3.25 19 3.25V4.75ZM5 3.25C3.48122 3.25 2.25 4.48122 2.25 6H3.75C3.75 5.30964 4.30964 4.75 5 4.75V3.25ZM20.25 14V18H21.75V14H20.25ZM19 19.25H5V20.75H19V19.25ZM3.75 18V14H2.25V18H3.75ZM5 19.25C4.30964 19.25 3.75 18.6904 3.75 18H2.25C2.25 19.5188 3.48122 20.75 5 20.75V19.25ZM20.25 18C20.25 18.6904 19.6904 19.25 19 19.25V20.75C20.5188 20.75 21.75 19.5188 21.75 18H20.25ZM19 12.75C19.6904 12.75 20.25 13.3096 20.25 14H21.75C21.75 12.4812 20.5188 11.25 19 11.25V12.75ZM5 11.25C3.48122 11.25 2.25 12.4812 2.25 14H3.75C3.75 13.3096 4.30964 12.75 5 12.75V11.25ZM17 8.75H17.01V7.25H17V8.75ZM17 16.75H17.01V15.25H17V16.75Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconServer };