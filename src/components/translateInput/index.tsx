// Example: Importing and using in Dashboard.tsx
import React, { useState } from 'react';
import style from '../../assets/scss/Dashboard.module.scss';

const Dashboard = () => {
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

export default Dashboard;
