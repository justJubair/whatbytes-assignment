const Underconstruction = ({ pageName }: { pageName: string }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>

        <h3
          className="text-2xl text-nowrap
         font-black"
        >
          {pageName.toUpperCase().split("/")} Page is Under Construction
        </h3>
      </div>
    </div>
  );
};
export default Underconstruction;
