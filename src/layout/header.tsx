import { useState, FC } from "react";

export const Header = () => {
  return (
    <nav>
      <div className="sticky top-0 z-20 grid h-15 grid-cols-[1fr_auto] items-center gap-4 border-b bg-default px-4 border-default">
        <button
          className="flex cursor-pointer mt-px max-md-gutters:mt-0"
          type="button"
          aria-label="Navigate to home">
          <svg
            viewBox="0 0 71 20"
            fill="none"
            role="img"
            className="icon-md w-[74px] text-default max-md-gutters:hidden"
            xlinkTitle="Expo home"
          >
            <path
              d="M9.258 6.342c.158-.23.331-.26.472-.26.14 0 .374.03.532.26 2.06 2.806 6.332 10.208 6.727 10.611.585.597 1.388.225 1.854-.452.46-.667.587-1.135.587-1.634 0-.34-6.653-12.614-7.324-13.636C11.462.248 11.252 0 10.15 0h-.825c-1.1 0-1.259.248-1.903 1.23C6.75 2.254.097 14.528.097 14.868c0 .5.127.967.587 1.634.466.677 1.269 1.05 1.854.452.395-.403 4.661-7.805 6.72-10.61zm14.941-5.237v15.344h9.35v-3.113h-6.125v-3.244h5.45V6.98h-5.45V4.218h6.125V1.105h-9.35zM46.25 16.449l-3.88-5.568 3.619-5.195h-3.662L40.54 8.23l-1.765-2.543h-3.706l3.618 5.217-3.857 5.546h3.661l2.027-2.915 2.027 2.915h3.705zm7.572-10.982c-1.482 0-2.637.614-3.378 1.732V5.686H47.37V20h3.073v-5.063c.74 1.117 1.896 1.731 3.378 1.731 2.768 0 4.97-2.52 4.97-5.611 0-3.091-2.202-5.59-4.97-5.59zm-.697 8.242c-1.504 0-2.681-1.14-2.681-2.652 0-1.49 1.177-2.653 2.68-2.653 1.483 0 2.681 1.184 2.681 2.653 0 1.49-1.198 2.652-2.68 2.652zm12.188-8.242c-3.16 0-5.558 2.411-5.558 5.612 0 3.2 2.397 5.59 5.557 5.59 3.139 0 5.558-2.39 5.558-5.59 0-3.2-2.42-5.612-5.558-5.612zm0 2.96c1.438 0 2.55 1.117 2.55 2.652 0 1.49-1.112 2.63-2.55 2.63-1.46 0-2.55-1.14-2.55-2.63 0-1.535 1.09-2.653 2.55-2.653z"
              fill="currentColor"></path>
          </svg>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            className="icon-md hidden text-default max-md-gutters:flex"
            xlinkTitle="Expo home"
          >
            <path
              d="M9.477 7.638c.164-.24.343-.27.488-.27.145 0 .387.03.551.27 2.13 2.901 6.55 10.56 6.959 10.976.605.618 1.436.233 1.918-.468.475-.69.607-1.174.607-1.69 0-.352-6.883-13.05-7.576-14.106-.667-1.017-.884-1.274-2.025-1.274h-.854c-1.138 0-1.302.257-1.969 1.274C6.883 3.406 0 16.104 0 16.456c0 .517.132 1 .607 1.69.482.7 1.313 1.086 1.918.468.41-.417 4.822-8.075 6.952-10.977z"
              fill="currentColor"></path>
          </svg>
        </button>
        <div className="grid grid-flow-col items-center gap-2 max-lg-gutters:hidden">
          <button
            className="cursor-pointer inline-flex border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs text-button-secondary hocus:bg-button-secondary-hover active:scale-98 cmdk-trigger bg-default pl-2.5 pr-3 border border-default shadow-xs min-h-[40px] min-w-[226px] max-xl-gutters:min-w-[180px]"
            type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="icon-md text-icon-secondary"
              role="img">
              <g id="search-sm-outline-icon">
                <path
                  id="Icon"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"></path>
              </g>
            </svg>
            <span className="flex self-center text-inherit leading-none">
              <p className="text-secondary font-normal leading-normal text-xs">
                Search
              </p>
            </span>
            <div className="ml-auto max-md-gutters:hidden">
              <kbd className="!h-5 !leading-[19px]">⌘</kbd>{" "}
              <kbd className="!h-5 !leading-[19px]">K</kbd>
            </div>
          </button>
          <a
            className="inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none hocus:bg-button-quaternary-hover active:scale-98"
            type="button"
            href="https://docs.expo.dev">
            <span className="flex self-center text-inherit leading-none select-none">
              Docs
            </span>
          </a>
          <a
            className="inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none hocus:bg-button-quaternary-hover active:scale-98"
            type="button"
            data-state="closed"
            href="/tools">
            <span className="flex self-center text-inherit leading-none select-none">
              Tools
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="icon-sm text-icon-secondary"
              role="img">
              <g id="chevron-down-outline-icon">
                <path
                  id="Icon"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 9L12 15L18 9"></path>
              </g>
            </svg>
          </a>
          <a
            className="inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none hocus:bg-button-quaternary-hover active:scale-98"
            type="button"
            href="/eas">
            <span className="flex self-center text-inherit leading-none select-none">
              EAS
            </span>
          </a>
          <a
            className="inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none hocus:bg-button-quaternary-hover active:scale-98"
            type="button"
            href="/pricing">
            <span className="flex self-center text-inherit leading-none select-none">
              Pricing
            </span>
          </a>
          <a
            className="inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none hocus:bg-button-quaternary-hover active:scale-98"
            type="button"
            href="/careers">
            <span className="flex self-center text-inherit leading-none select-none">
              Careers
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none hocus:bg-button-quaternary-hover active:scale-98 pl-3"
            type="button"
            href="https://github.com/expo/expo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="icon-sm text-button-quaternary-icon"
              role="img">
              <g id="star-01-outline-icon">
                <path
                  id="Icon"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.2827 3.45332C11.5131 2.98638 11.6284 2.75291 11.7848 2.67831C11.9209 2.61341 12.0791 2.61341 12.2152 2.67831C12.3717 2.75291 12.4869 2.98638 12.7174 3.45332L14.9041 7.88328C14.9721 8.02113 15.0061 8.09006 15.0558 8.14358C15.0999 8.19096 15.1527 8.22935 15.2113 8.25662C15.2776 8.28742 15.3536 8.29854 15.5057 8.32077L20.397 9.03571C20.9121 9.11099 21.1696 9.14863 21.2888 9.27444C21.3925 9.38389 21.4412 9.5343 21.4215 9.68377C21.3988 9.85558 21.2124 10.0372 20.8395 10.4004L17.3014 13.8464C17.1912 13.9538 17.136 14.0076 17.1004 14.0715C17.0689 14.128 17.0487 14.1902 17.0409 14.2545C17.0321 14.3271 17.0451 14.403 17.0711 14.5547L17.906 19.4221C17.994 19.9355 18.038 20.1922 17.9553 20.3445C17.8833 20.477 17.7554 20.57 17.6071 20.5975C17.4366 20.6291 17.2061 20.5078 16.7451 20.2654L12.3724 17.9658C12.2361 17.8942 12.168 17.8584 12.0962 17.8443C12.0327 17.8318 11.9673 17.8318 11.9038 17.8443C11.832 17.8584 11.7639 17.8942 11.6277 17.9658L7.25492 20.2654C6.79392 20.5078 6.56341 20.6291 6.39297 20.5975C6.24468 20.57 6.11672 20.477 6.04474 20.3445C5.962 20.1922 6.00603 19.9355 6.09407 19.4221L6.92889 14.5547C6.95491 14.403 6.96793 14.3271 6.95912 14.2545C6.95132 14.1902 6.93111 14.128 6.89961 14.0715C6.86402 14.0076 6.80888 13.9538 6.69859 13.8464L3.16056 10.4004C2.78766 10.0372 2.60121 9.85558 2.57853 9.68377C2.55879 9.5343 2.60755 9.38389 2.71125 9.27444C2.83044 9.14863 3.08797 9.11099 3.60304 9.03571L8.49431 8.32077C8.64642 8.29854 8.72248 8.28742 8.78872 8.25662C8.84736 8.22935 8.90016 8.19096 8.94419 8.14358C8.99391 8.09006 9.02793 8.02113 9.09597 7.88328L11.2827 3.45332Z"></path>
              </g>
            </svg>
            <span className="flex self-center text-inherit leading-none select-none">
              <span className="pr-1 max-xl-gutters:hidden">Star Us on</span> GitHub
            </span>
          </a>
          <a
            className="inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs shadow-none active:scale-98 border-palette-gray12 bg-palette-gray12 text-palette-gray1 hocus:bg-palette-gray12 hocus:opacity-80"
            type="button"
            href="/signup">
            <span className="flex self-center text-inherit leading-none select-none">
              Sign Up
            </span>
          </a>
          <a
            className="inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none hocus:bg-button-quaternary-hover active:scale-98"
            type="button"
            href="/login">
            <span className="flex self-center text-inherit leading-none select-none">
              Log In
            </span>
          </a>
        </div>
        <button
          className="cursor-pointer border border-solid rounded-md font-medium gap-2 whitespace-nowrap transition h-9 text-xs border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none hocus:bg-button-quaternary-hover active:scale-98 px-0 w-9 justify-center items-center hidden max-lg-gutters:flex"
          type="button"
          aria-label="Open menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="icon-md text-icon-default"
            role="img">
            <g id="menu-01-outline-icon">
              <path
                id="Icon"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12H21M3 6H21M3 18H21"></path>
            </g>
          </svg>
        </button>
      </div>
    </nav>
  );
};
