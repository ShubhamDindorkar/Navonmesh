const ButtonSvg = (white) => (
  <>
    <svg
      className="absolute top-0 left-0"
      width="24"
      height="48"
      viewBox="0 0 24 48"
    >
      <path
        fill={white ? "#DAA520" : "url(#btn-left)"} // Changed white to golden color
        stroke="none"
        strokeWidth="0"
        d="M24,47 L9,47 C4,47 1,42 1,37 L1,10 C1,5 4,1 9,1 L24,1"
      />
    </svg>
    <svg
      className="absolute top-0 left-[1.5rem] w-[calc(100%-3rem)]"
      height="48"
      viewBox="0 0 100 48"
      preserveAspectRatio="none"
      fill={white ? "#DAA520" : "url(#btn-center)"} // Changed white to golden color
    >
      {white ? (
        <polygon
          fill="#DAA520" // Changed white to golden color
          fillRule="nonzero"
          points="100 0 100 48 0 48 0 0"
        />
      ) : (
        <>
          <polygon
            fill="url(#btn-top)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 46 100 48 0 48 0 46"
          />
          <polygon
            fill="url(#btn-bottom)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 0 100 2 0 2 0 0"
          />
        </>
      )}
    </svg>
    <svg
      className="absolute top-0 right-0"
      width="24"
      height="48"
      viewBox="0 0 24 48"
    >
      <path
        fill={white ? "#DAA520" : "url(#btn-right)"} // Changed white to golden color
        stroke="none"
        strokeWidth="0"
        d="M0,47 L6,47 L14,47 C18,47 22,42 22,37 L22,18 C22,15 21,12 19,10 L8,2 C6,1 4,1 2,1 L0,1"
      />
    </svg>
  </>
);

export default ButtonSvg;
