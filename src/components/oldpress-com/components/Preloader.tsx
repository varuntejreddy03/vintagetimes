export default function Component() {
  return (
    <div className="preloader opacity-0 pointer-events-none transition-opacity duration-1000 fixed z-[1000] top-0 left-0 w-screen h-screen bg-white p-4 md:p-[3.75vw]">
      <div className="preloader__body h-full flex items-center justify-between gap-9 md:gap-[2.25rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="265"
          viewBox="0 0 75 265"
          fill="none"
          className="flex-[0_0_2rem] md:flex-[0_0_4.6875rem] w-8 md:w-[4.6875vw] h-[7.1875rem] md:h-[16.5625vw] object-contain"
        >
          <use href="/extracted-icons/icon-ecbf6c71d3e2.svg#icon-ecbf6c71d3e2"></use>
        </svg>

        <div className="preloader__content relative flex items-center justify-center text-center">
          <span
            className="preloader__num heading-2 hidden"
            style={{ display: 'none' }}
          >
            Vintage Times
          </span>
          <p
            className="preloader__text heading-2 hidden"
            style={{ display: 'none' }}
          >
            Your retro journey begins…
          </p>
          <img
            decoding="async"
            src="https://oldpress.com/wp-content/uploads/2025/06/%D0%9A%D0%BE%D0%BF%D0%B8%D1%8F-DSC04867-scaled.webp"
            alt="Preloader image"
            className="w-[13.125rem] md:w-[22.5vw] h-[18.125rem] md:h-[31.25vw] object-cover hidden"
            style={{ display: 'none' }}
          />
          <img
            decoding="async"
            src="https://oldpress.com/wp-content/uploads/2025/06/%D0%9A%D0%BE%D0%BF%D0%B8%D1%8F-DSC04810-scaled.webp"
            alt="Preloader image"
            className="w-[13.125rem] md:w-[22.5vw] h-[18.125rem] md:h-[31.25vw] object-cover hidden"
            style={{ display: 'none' }}
          />
          <img
            decoding="async"
            src="https://oldpress.com/wp-content/uploads/2025/06/%D0%9A%D0%BE%D0%BF%D0%B8%D1%8F-DSC04681-scaled.webp"
            alt="Preloader image"
            className="w-[13.125rem] md:w-[22.5vw] h-[18.125rem] md:h-[31.25vw] object-cover hidden"
            style={{ display: 'none' }}
          />
          <img
            decoding="async"
            src="https://oldpress.com/wp-content/uploads/2025/06/%D0%9A%D0%BE%D0%BF%D0%B8%D1%8F-DSC04666-scaled.webp"
            alt="Preloader image"
            className="w-[13.125rem] md:w-[22.5vw] h-[18.125rem] md:h-[31.25vw] object-cover hidden"
            style={{ display: 'none' }}
          />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="265"
          viewBox="0 0 75 265"
          fill="none"
          className="flex-[0_0_2rem] md:flex-[0_0_4.6875rem] w-8 md:w-[4.6875vw] h-[7.1875rem] md:h-[16.5625vw] object-contain"
        >
          <use href="/extracted-icons/icon-a32e175e7a35.svg#icon-a32e175e7a35"></use>
        </svg>
      </div>
    </div>
  );
}
