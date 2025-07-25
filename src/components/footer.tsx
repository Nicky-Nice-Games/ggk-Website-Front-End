export const Footer = () => {
  return (
    <>
      <footer className="bg-repeat bg-size-[50%] text-white py-6 bg-[url('images/black-checker.png')]">
        <div className="w-[95%] mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-row items-center">
            <img src="images/logo/gizmo-icon.svg" className="w-32 h-24"></img>
            <div className="text-4xl hidden sm:inline font-bold">
              Gizmo <br /> Go-Kartz
            </div>
          </div>

          {/* Instagram Icon*/}
          <div className="flex flex-col items-center">
            <div className="flex space-x-2 md:space-x-4 mb-2">
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/gizmogokartz/" target="_blank">
                <div className="flex flex-col items-center">
                  <div className="flex space-x-2 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transform transition-transform duration-200 hover:-translate-y-1 text-white group">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:[&>path]:text-white"
                      >
                        <defs>
                          <linearGradient
                            id="instagram-gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="10%" stopColor="#405DE6" />{" "}
                            {/* Blue */}
                            <stop offset="10%" stopColor="#5851DB" />{" "}
                            {/* Purple transition */}
                            <stop offset="20%" stopColor="#833AB4" />{" "}
                            {/* Strong purple */}
                            <stop offset="30%" stopColor="#9B30A8" />{" "}
                            {/* Additional purple in top middle */}
                            <stop offset="40%" stopColor="#C13584" />{" "}
                            <stop offset="60%" stopColor="#E1306C" />
                            <stop offset="80%" stopColor="#FD1D1D" />
                            <stop offset="90%" stopColor="#F56040" />
                            <stop offset="100%" stopColor="#FCAF45" />
                          </linearGradient>
                        </defs>
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z"
                          className="text-white group-hover:fill-[url(#instagram-gradient)]"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              {/* Twitter Icon*/}
              <a href="https://www.x.com/gizmogokartz/" target="_blank">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-none transform transition-transform duration-200 
  hover:-translate-y-1 text-white group" // Added 'group' class here
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 512 512"
                    fill="currentColor" // Changed from 'white' to 'currentColor'
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:text-sky-500" // Added group-hover class
                  >
                    <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </a>

              {/* Email Icon*/}
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-none transform transition-transform duration-200 
                hover:-translate-y-1 text-white hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mail-icon lucide-mail"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </div>
            </div>
            <div className="text-3xl sm:text-4xl">Contact us!</div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
