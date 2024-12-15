// Example: Importing and using in Dashboard.tsx
import React, { useState } from 'react';
import style from '../../assets/scss/tsInput.module.scss';

const TranslateInput = () => {
  // Dropdown states for Button 1 and Button 2
  const [selectedOption1, setSelectedOption1] = useState('Translate');
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const [selectedOption2, setSelectedOption2] = useState({
    text: 'ENG',
    icon: <EnglandFlagIcon />,
  });
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const button1Options = [
    { text: 'Translate', icon: <TranslateIcon /> },
    { text: 'Audio', icon: <AudioIcon /> },
    { text: 'Summary', icon: <SummaryIcon /> },
    { text: 'Insight', icon: <InsightIcon /> },
  ];

  const button2Options = [
    { text: 'ENG', icon: <EnglandFlagIcon /> },
    { text: 'ENG', icon: <UsaFlagIcon /> },
  ];

  return (
    <div>
      <div className={style.chat__input__container}>
        {/* Textarea */}
        <textarea
          className={style.chat__textarea}
          placeholder="Enter your text or link here"
        ></textarea>

        {/* Buttons */}
        <div className={style.chat__buttons}>
          <div className={style.left__buttons}>
            {/* Dropdown Button 1 */}
            <div className={style.dropdown}>
              <button
                className={`${style.chat__button} ${style.dropdown__button}`}
                onClick={() => setDropdownOpen1(!dropdownOpen1)}
              >
                <span className={style.dropdown__icon}>
                  {
                    button1Options.find(
                      (option) => option.text === selectedOption1
                    )?.icon
                  }
                </span>
                {selectedOption1}
              </button>
              {dropdownOpen1 && (
                <ul className={style.dropdown__menu}>
                  {button1Options.map((option) => (
                    <li
                      key={option.text}
                      className={style.dropdown__item}
                      onClick={() => {
                        setSelectedOption1(option.text);
                        setDropdownOpen1(false);
                      }}
                    >
                      <span className={style.dropdown__icon}>
                        {option.icon}
                      </span>
                      {option.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Dropdown Button 2 */}
            <div className={style.dropdown}>
              <button
                className={`${style.chat__button} ${style.dropdown__button}`}
                onClick={() => setDropdownOpen2(!dropdownOpen2)}
              >
                <span className={style.dropdown__icon}>
                  {selectedOption2.icon}
                </span>
                {selectedOption2.text}
              </button>
              {dropdownOpen2 && (
                <ul className={style.dropdown__menu}>
                  {button2Options.map((option) => (
                    <li
                      key={option.text}
                      className={style.dropdown__item}
                      onClick={() => {
                        setSelectedOption2(option);
                        setDropdownOpen2(false);
                      }}
                    >
                      <span className={style.dropdown__icon}>
                        {option.icon}
                      </span>
                      {option.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <button className={`${style.chat__button} ${style.submit__button}`}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslateInput;


// SVG Icons
const TranslateIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_715_143)">
  <path d="M3.87496 6.89864C3.94266 6.89864 4.01819 6.90905 4.10152 6.92989C4.18485 6.95072 4.26819 6.97937 4.35152 7.01583C4.43485 7.05228 4.51819 7.08614 4.60152 7.11739C4.68485 7.14864 4.76037 7.17989 4.82808 7.21114L4.70308 7.22676C4.66141 7.23197 4.61714 7.23458 4.57027 7.23458C4.48173 7.23458 4.401 7.22155 4.32808 7.19551C4.25516 7.16947 4.18746 7.13562 4.12496 7.09395C4.06246 7.05228 3.99996 7.02103 3.93746 7.0002C3.87496 6.97937 3.81766 6.96374 3.76558 6.95333C3.7135 6.95333 3.66662 6.96374 3.62496 6.98458C3.58329 7.00541 3.54162 7.02885 3.49996 7.05489C3.49996 7.03405 3.48173 7.02364 3.44527 7.02364C3.48173 6.98718 3.54944 6.95853 3.64839 6.9377C3.74735 6.91687 3.82287 6.90385 3.87496 6.89864ZM4.92964 7.2502C5.14319 7.2502 5.3385 7.28666 5.51558 7.35958C5.44266 7.38562 5.36975 7.40645 5.29683 7.42208C5.22391 7.4377 5.14839 7.44812 5.07027 7.45333C4.9661 7.45333 4.87235 7.44291 4.78902 7.42208C4.81506 7.38041 4.8411 7.35437 4.86714 7.34395C4.89319 7.33353 4.91402 7.30228 4.92964 7.2502ZM7.99996 0.000200321C8.73433 0.000200321 9.44006 0.0965545 10.1171 0.289263C10.7942 0.481971 11.4296 0.7502 12.0234 1.09395C12.6171 1.4377 13.1588 1.85697 13.6484 2.35176C14.138 2.84655 14.5546 3.38562 14.8984 3.96895C15.2421 4.55228 15.513 5.1877 15.7109 5.8752C15.9088 6.5627 16.0052 7.27103 16 8.0002C16 8.73458 15.9036 9.4403 15.7109 10.1174C15.5182 10.7945 15.25 11.4299 14.9062 12.0236C14.5625 12.6174 14.1432 13.1591 13.6484 13.6486C13.1536 14.1382 12.6145 14.5549 12.0312 14.8986C11.4479 15.2424 10.8125 15.5132 10.125 15.7111C9.43746 15.9091 8.72912 16.0054 7.99996 16.0002C7.26558 16.0002 6.55985 15.9038 5.88277 15.7111C5.20569 15.5184 4.57027 15.2502 3.97652 14.9065C3.38277 14.5627 2.8411 14.1434 2.35152 13.6486C1.86194 13.1538 1.44527 12.6148 1.10152 12.0315C0.757769 11.4481 0.486935 10.8127 0.289019 10.1252C0.091102 9.4377 -0.00525215 8.72937 -4.38201e-05 8.0002C-4.38201e-05 7.26583 0.0963104 6.5601 0.289019 5.88301C0.481727 5.20593 0.749956 4.57051 1.09371 3.97676C1.43746 3.38301 1.85673 2.84135 2.35152 2.35176C2.84631 1.86218 3.38537 1.44551 3.96871 1.10176C4.55204 0.758013 5.18746 0.48718 5.87496 0.289263C6.56246 0.0913462 7.27079 -0.00500801 7.99996 0.000200321ZM13.9531 4.33614C13.8802 4.22155 13.8072 4.11218 13.7343 4.00801C13.6614 3.90385 13.5859 3.79708 13.5078 3.6877C13.4974 3.73458 13.4843 3.76843 13.4687 3.78926C13.4531 3.8101 13.4427 3.85697 13.4375 3.92989C13.4375 3.97676 13.4557 4.02103 13.4921 4.0627C13.5286 4.10437 13.5755 4.14603 13.6328 4.1877C13.6901 4.22937 13.7474 4.26062 13.8046 4.28145C13.8619 4.30228 13.9114 4.32051 13.9531 4.33614ZM13.414 3.57051C13.414 3.61218 13.4062 3.64083 13.3906 3.65645H13.4375C13.4583 3.65645 13.4739 3.65905 13.4843 3.66426L13.414 3.57051ZM7.99996 15.0002C8.59371 15.0002 9.17444 14.9247 9.74214 14.7736C10.3099 14.6226 10.8463 14.4091 11.3515 14.133C11.8567 13.857 12.3255 13.5184 12.7578 13.1174C13.1901 12.7163 13.5677 12.2684 13.8906 11.7736C13.8229 11.6174 13.7578 11.4585 13.6953 11.2971C13.6328 11.1356 13.6015 10.969 13.6015 10.7971C13.6015 10.6096 13.6093 10.4585 13.625 10.344C13.6406 10.2294 13.6588 10.1278 13.6796 10.0393C13.7005 9.95072 13.7109 9.8752 13.7109 9.8127C13.7109 9.7502 13.7031 9.66947 13.6875 9.57051C13.6718 9.47155 13.6276 9.36478 13.5546 9.2502C13.4817 9.13562 13.3854 8.97416 13.2656 8.76583C13.2708 8.72937 13.2786 8.67989 13.289 8.61739C13.2994 8.55489 13.3099 8.48978 13.3203 8.42208C13.3307 8.35437 13.3333 8.29187 13.3281 8.23458C13.3229 8.17728 13.3099 8.1278 13.289 8.08614C13.1536 8.07051 13.013 8.04187 12.8671 8.0002C12.7213 7.95853 12.5911 7.89603 12.4765 7.8127L12.5234 7.77364C12.4557 7.78926 12.388 7.8101 12.3203 7.83614C12.2526 7.86218 12.1875 7.89083 12.125 7.92208C12.0625 7.95333 11.9947 7.97416 11.9218 7.98458C11.8489 7.99499 11.7786 8.00541 11.7109 8.01583L11.5859 8.0002L11.6093 7.94551C11.5364 7.96635 11.4583 7.99239 11.375 8.02364C11.2916 8.05489 11.2109 8.07051 11.1328 8.07051C11.0807 8.07051 11.0052 8.05228 10.9062 8.01583C10.8072 7.97937 10.7083 7.9351 10.6093 7.88301C10.5104 7.83093 10.4218 7.77364 10.3437 7.71114C10.2656 7.64864 10.2265 7.58874 10.2265 7.53145L10.2421 7.50801C10.2161 7.47676 10.1822 7.44812 10.1406 7.42208C10.0989 7.39603 10.0599 7.36999 10.0234 7.34395C9.98694 7.31791 9.95308 7.28926 9.92183 7.25801C9.89058 7.22676 9.87756 7.1903 9.88277 7.14864L9.96871 7.07833L9.78902 7.05489L9.72652 6.82051C9.73694 6.84655 9.76037 6.85697 9.79683 6.85176C9.83329 6.84655 9.86194 6.83614 9.88277 6.82051L9.60152 6.67208L9.79683 6.17208C9.72391 5.90124 9.70569 5.69291 9.74214 5.54708C9.7786 5.40124 9.84891 5.28145 9.95308 5.1877C10.0572 5.09395 10.1718 5.0002 10.2968 4.90645C10.4218 4.8127 10.5494 4.6851 10.6796 4.52364L10.6562 4.42989L11.1718 3.80489L11.289 3.78926C11.4349 3.78926 11.5989 3.78405 11.7812 3.77364C11.9635 3.76322 12.1484 3.74499 12.3359 3.71895C12.5234 3.69291 12.7083 3.66687 12.8906 3.64083C13.0729 3.61478 13.2395 3.58093 13.3906 3.53926C13.2239 3.34135 13.0494 3.15385 12.8671 2.97676C12.6849 2.79968 12.4895 2.63041 12.2812 2.46895C12.2239 2.48978 12.1536 2.51843 12.0703 2.55489C11.9869 2.59135 11.9036 2.63822 11.8203 2.69551C11.7369 2.7528 11.6718 2.8153 11.625 2.88301C11.5781 2.95072 11.5494 3.02103 11.539 3.09395L11.5859 3.24239C11.4921 3.39343 11.388 3.48718 11.2734 3.52364C11.1588 3.5601 11.0416 3.58093 10.9218 3.58614C10.802 3.59135 10.677 3.59135 10.5468 3.58614C10.4166 3.58093 10.2916 3.60437 10.1718 3.65645L10.0468 3.39083L10.164 2.9377L10.0312 2.74239L11.3828 2.32051C11.3255 2.17468 11.2317 2.0653 11.1015 1.99239C10.9713 1.91947 10.8281 1.88301 10.6718 1.88301V1.80489L11.1093 1.73458C10.625 1.49499 10.1224 1.3127 9.60152 1.1877C9.08069 1.0627 8.54683 1.0002 7.99996 1.0002C7.54683 1.0002 7.09891 1.04447 6.65621 1.13301C6.2135 1.22155 5.78641 1.34916 5.37496 1.51583C4.9635 1.68249 4.56506 1.89083 4.17964 2.14083C3.79423 2.39083 3.44266 2.67208 3.12496 2.98458C3.26037 2.98458 3.36454 3.01843 3.43746 3.08614C3.51037 3.15385 3.57808 3.22937 3.64058 3.3127C3.70308 3.39603 3.76819 3.47155 3.83589 3.53926C3.9036 3.60697 3.99475 3.64343 4.10933 3.64864L4.23433 3.55489L4.21871 3.38301L4.47652 3.01583L4.27339 2.4377C4.29944 2.42208 4.3385 2.39603 4.39058 2.35958C4.44266 2.32312 4.48694 2.30489 4.52339 2.30489C4.67964 2.30489 4.79944 2.3127 4.88277 2.32833C4.9661 2.34395 5.03902 2.3726 5.10152 2.41426C5.16402 2.45593 5.21871 2.51583 5.26558 2.59395C5.31246 2.67208 5.38537 2.77103 5.48433 2.89083L5.76558 2.67208C5.81766 2.69291 5.901 2.72676 6.01558 2.77364C6.13016 2.82051 6.24735 2.8778 6.36714 2.94551C6.48694 3.01322 6.5885 3.08353 6.67183 3.15645C6.75516 3.22937 6.79944 3.29708 6.80464 3.35958C6.80464 3.4377 6.776 3.5002 6.71871 3.54708C6.66141 3.59395 6.58589 3.63301 6.49214 3.66426C6.39839 3.69551 6.30204 3.71895 6.20308 3.73458C6.10412 3.7502 6.00516 3.77103 5.90621 3.79708C5.80725 3.82312 5.73173 3.84916 5.67964 3.8752C5.62756 3.90124 5.59631 3.94551 5.58589 4.00801L6.03902 4.15645C5.93485 4.24499 5.82287 4.32572 5.70308 4.39864C5.58329 4.47155 5.45829 4.53926 5.32808 4.60176L5.35933 4.73458L4.64058 5.01583V5.23458L4.58589 5.25801L4.62496 4.98458L4.59371 4.97676C4.55725 4.97676 4.53641 4.98458 4.53121 5.0002C4.526 5.01583 4.52339 5.03405 4.52339 5.05489C4.52339 5.07572 4.5286 5.09655 4.53902 5.11739C4.54944 5.13822 4.55204 5.15385 4.54683 5.16426L4.44527 5.10958L4.46089 5.14083C4.46089 5.15645 4.46871 5.17989 4.48433 5.21114C4.49996 5.24239 4.52079 5.27103 4.54683 5.29708C4.57287 5.32312 4.59371 5.34916 4.60933 5.3752C4.62496 5.40124 4.63537 5.41426 4.64058 5.41426C4.64058 5.42989 4.63016 5.44551 4.60933 5.46114C4.5885 5.47676 4.56246 5.48718 4.53121 5.49239C4.49996 5.4976 4.47912 5.50541 4.46871 5.51583C4.45829 5.52624 4.45829 5.52885 4.46871 5.52364C4.54162 5.52364 4.55725 5.52885 4.51558 5.53926C4.47391 5.54968 4.40881 5.57572 4.32027 5.61739C4.23173 5.65905 4.151 5.71895 4.07808 5.79708C4.00516 5.8752 3.9635 5.98978 3.95308 6.14083C3.95308 6.22937 3.95569 6.3153 3.96089 6.39864C3.9661 6.48197 3.9635 6.56791 3.95308 6.65645C3.88016 6.45853 3.77079 6.30749 3.62496 6.20333C3.47912 6.09916 3.30204 6.04708 3.09371 6.04708L2.75777 6.07833L2.92183 6.1877C2.83329 6.17728 2.74214 6.16687 2.64839 6.15645C2.55464 6.14603 2.45829 6.14343 2.35933 6.14864C2.26037 6.15385 2.17183 6.17468 2.09371 6.21114C2.01558 6.2476 1.93746 6.30228 1.85933 6.3752L1.81246 6.72676C1.81246 6.89343 1.84891 7.02885 1.92183 7.13301C1.99475 7.23718 2.12235 7.29187 2.30464 7.29708C2.46089 7.29708 2.61454 7.27364 2.76558 7.22676C2.91662 7.17989 3.06506 7.1252 3.21089 7.0627C3.16402 7.17728 3.11194 7.28666 3.05464 7.39083C2.99735 7.49499 2.95569 7.60958 2.92964 7.73458L3.03121 7.78145C3.15621 7.69812 3.27079 7.6851 3.37496 7.74239C3.47912 7.79968 3.58069 7.88301 3.67964 7.99239C3.7786 8.10176 3.88016 8.21374 3.98433 8.32833C4.0885 8.44291 4.20048 8.52624 4.32027 8.57833L4.05464 8.71895L3.42964 8.36739C3.43485 8.3778 3.44006 8.40124 3.44527 8.4377C3.45048 8.47416 3.44787 8.48197 3.43746 8.46114L3.15621 7.98458C2.98954 7.97937 2.81246 7.95333 2.62496 7.90645C2.43746 7.85958 2.24735 7.79708 2.05464 7.71895C1.86194 7.64083 1.68225 7.55489 1.51558 7.46114C1.34891 7.36739 1.19527 7.26843 1.05464 7.16426L0.999956 8.0002C0.999956 8.63562 1.08589 9.25541 1.25777 9.85958C1.42964 10.4637 1.67183 11.0315 1.98433 11.5627C2.29683 12.094 2.67964 12.5783 3.13277 13.0158C3.58589 13.4533 4.0885 13.8257 4.64058 14.133C4.61454 14.0236 4.61194 13.9143 4.63277 13.8049C4.6536 13.6955 4.67964 13.5861 4.71089 13.4768C4.74214 13.3674 4.776 13.258 4.81246 13.1486C4.84891 13.0393 4.86714 12.9273 4.86714 12.8127C4.86714 12.646 4.8411 12.4716 4.78902 12.2893C4.73694 12.107 4.67444 11.9221 4.60152 11.7346C4.5286 11.5471 4.44787 11.3622 4.35933 11.1799C4.27079 10.9976 4.20048 10.8257 4.14839 10.6643C4.09631 10.5028 4.05464 10.3518 4.02339 10.2111C3.99214 10.0705 4.00777 9.94812 4.07027 9.84395L3.95308 9.78926C3.98433 9.71635 4.026 9.64603 4.07808 9.57833C4.13016 9.51062 4.18485 9.44291 4.24214 9.3752C4.29944 9.30749 4.34371 9.23458 4.37496 9.15645C4.40621 9.07833 4.42444 9.0002 4.42964 8.92208C4.42964 8.86999 4.41923 8.8153 4.39839 8.75801C4.37756 8.70072 4.35933 8.64603 4.34371 8.59395L4.50777 8.63301C4.59631 8.42989 4.7161 8.29187 4.86714 8.21895C5.01819 8.14603 5.20829 8.10697 5.43746 8.10176C5.4635 8.10176 5.51819 8.11218 5.60152 8.13301C5.68485 8.15385 5.77339 8.18249 5.86714 8.21895C5.96089 8.25541 6.04944 8.28405 6.13277 8.30489C6.2161 8.32572 6.2786 8.34655 6.32027 8.36739C6.32027 8.40385 6.3411 8.42728 6.38277 8.4377C6.42444 8.44812 6.44787 8.46635 6.45308 8.49239L6.43746 8.55489C6.45308 8.5601 6.48954 8.57833 6.54683 8.60958C6.60412 8.64083 6.66662 8.67989 6.73433 8.72676C6.80204 8.77364 6.86194 8.8153 6.91402 8.85176C6.9661 8.88822 7.00256 8.91687 7.02339 8.9377C7.11714 8.9377 7.24475 8.96895 7.40621 9.03145C7.56766 9.09395 7.74475 9.17208 7.93746 9.26583C8.13016 9.35958 8.32027 9.47155 8.50777 9.60176C8.69527 9.73197 8.87235 9.86218 9.03902 9.99239C9.20569 10.1226 9.33329 10.2528 9.42183 10.383C9.51037 10.5132 9.56246 10.6278 9.57808 10.7268L9.31246 11.008C9.33329 11.2736 9.31506 11.4768 9.25777 11.6174C9.20048 11.758 9.11194 11.8752 8.99214 11.969C8.87235 12.0627 8.73433 12.1408 8.57808 12.2033C8.42183 12.2658 8.25256 12.3544 8.07027 12.469C8.07027 12.5731 8.04423 12.6851 7.99214 12.8049C7.94006 12.9247 7.87496 13.0393 7.79683 13.1486C7.71871 13.258 7.62496 13.3492 7.51558 13.4221C7.40621 13.495 7.29683 13.5315 7.18746 13.5315L6.85933 13.2815C6.86975 13.2919 6.86975 13.3101 6.85933 13.3361C6.84891 13.3622 6.83589 13.3674 6.82027 13.3518C6.87235 13.4507 6.88537 13.5653 6.85933 13.6955C6.83329 13.8257 6.78902 13.9585 6.72652 14.094C6.66402 14.2294 6.59371 14.357 6.51558 14.4768C6.43746 14.5966 6.36714 14.6981 6.30464 14.7815C6.58589 14.8544 6.86714 14.9091 7.14839 14.9455C7.42964 14.982 7.7135 15.0002 7.99996 15.0002Z" fill="#323232"/>
  </g>
  <defs>
  <clipPath id="clip0_715_143">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  );
  
  const AudioIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 9.75C9.46719 9.75 10.6562 8.575 10.6562 7.125V3.625C10.6562 2.175 9.46719 1 8 1C6.53281 1 5.34375 2.175 5.34375 3.625V7.125C5.34375 8.575 6.53281 9.75 8 9.75ZM13.1562 7.09375C13.1562 7.025 13.1 6.96875 13.0312 6.96875H12.0938C12.025 6.96875 11.9688 7.025 11.9688 7.09375C11.9688 9.28594 10.1922 11.0625 8 11.0625C5.80781 11.0625 4.03125 9.28594 4.03125 7.09375C4.03125 7.025 3.975 6.96875 3.90625 6.96875H2.96875C2.9 6.96875 2.84375 7.025 2.84375 7.09375C2.84375 9.72969 4.82188 11.9047 7.375 12.2125V13.8125H5.10469C4.89063 13.8125 4.71875 14.0359 4.71875 14.3125V14.875C4.71875 14.9438 4.7625 15 4.81563 15H11.1844C11.2375 15 11.2812 14.9438 11.2812 14.875V14.3125C11.2812 14.0359 11.1094 13.8125 10.8953 13.8125H8.5625V12.2203C11.1453 11.9391 13.1562 9.75156 13.1562 7.09375Z" fill="#323232"/>
  </svg>
  );
  
  const SummaryIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0001 14.6668C12.3537 14.6668 12.6928 14.5264 12.9429 14.2763C13.1929 14.0263 13.3334 13.6871 13.3334 13.3335V5.3335L9.33341 1.3335H4.00008C3.64646 1.3335 3.30732 1.47397 3.05727 1.72402C2.80722 1.97407 2.66675 2.31321 2.66675 2.66683V13.3335C2.66675 13.6871 2.80722 14.0263 3.05727 14.2763C3.30732 14.5264 3.64646 14.6668 4.00008 14.6668H12.0001ZM8.66675 2.66683L12.0001 6.00016H8.66675V2.66683ZM4.66675 5.3335H6.66675V6.66683H4.66675V5.3335ZM4.66675 8.00016H11.3334V9.3335H4.66675V8.00016ZM4.66675 10.6668H11.3334V12.0002H4.66675V10.6668Z" fill="#323232"/>
    </svg>
  );
  
  const InsightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_715_155)">
        <path d="M7.56893 0V2.53897H8.43132V0H7.56885H7.56893ZM4.04746 0.763L3.3409 1.25771L4.79694 3.33699L5.50312 2.84227L4.04746 0.763ZM11.9526 0.763L10.497 2.84228L11.2033 3.337L12.6593 1.25771L11.9527 0.763H11.9526ZM7.99994 3.23365C5.89025 3.23365 4.18004 4.51476 4.18004 6.09532L6.35033 12.668H9.64993L11.82 6.09532C11.82 4.51479 10.1099 3.23365 8.00014 3.23365H7.99994ZM1.13962 3.99564L0.844971 4.80649L3.22962 5.67468L3.52537 4.86421L1.13957 3.99564H1.13962ZM14.8604 3.99564L12.4746 4.86428L12.7694 5.67484L15.1552 4.80651L14.8604 3.99564ZM3.41017 7.70241L0.958171 8.36009L1.18065 9.19251L3.63265 8.53577L3.41021 7.70241H3.41017ZM12.5899 7.70241L12.3676 8.53576L14.8196 9.19239L15.0419 8.35996L12.5899 7.70239V7.70241ZM6.30222 13.1471V14.2896H9.69805V13.1473H6.30224L6.30222 13.1471ZM6.30222 14.8575V16H9.69805V14.8577H6.30224L6.30222 14.8575Z" fill="#323232"/>
      </g>
      <defs>
      <clipPath id="clip0_715_155">
      <rect width="16" height="16" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  );
  
  const EnglandFlagIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
    >
      <rect width="24" height="24" fill="#fff" />
      <path d="M0 10h24v4H0z" fill="#D7141A" />
      <path d="M10 0h4v24h-4z" fill="#D7141A" />
    </svg>
  );
  
  const UsaFlagIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
    >
      <rect width="24" height="24" fill="#fff" />
      <path d="M0 3h24v3H0zm0 6h24v3H0zm0 6h24v3H0zm0 6h24v3H0z" fill="#B22234" />
      <rect width="10" height="12" fill="#3C3B6E" />
      <circle cx="2" cy="2" r="1" fill="#fff" />
      <circle cx="4" cy="2" r="1" fill="#fff" />
      <circle cx="2" cy="4" r="1" fill="#fff" />
      <circle cx="4" cy="4" r="1" fill="#fff" />
    </svg>
  );
  