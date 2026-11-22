import React, { useState, useEffect, useRef } from 'react';

interface PropellerHeaderProps {
  brandMode: 'express' | 'propeller';
  onOpenDemoModal: (defaultService?: string) => void;
  onOpenReportModal: () => void;
  onSelectServiceDetail: (serviceKey: string) => void;
}

export const PropellerHeader: React.FC<PropellerHeaderProps> = ({
  brandMode,
  onOpenDemoModal,
  onOpenReportModal,
  onSelectServiceDetail,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'solutions' | 'resources' | null>(null);
  const [dropdownHeight, setDropdownHeight] = useState<number>(0);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'BN'>('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<'products' | 'solutions' | 'resources' | null>(null);

  const productsRef = useRef<HTMLElement>(null);
  const solutionsRef = useRef<HTMLElement>(null);
  const resourcesRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled((window.scrollY || window.pageYOffset) > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('navOpen');
    } else {
      document.body.classList.remove('navOpen');
    }
  }, [mobileMenuOpen]);

  // Update dropdown wrapper height smoothly just like propelleraero.com's inline script
  useEffect(() => {
    if (!activeDropdown) {
      setDropdownHeight(0);
      return;
    }
    const targetEl =
      activeDropdown === 'products'
        ? productsRef.current
        : activeDropdown === 'solutions'
        ? solutionsRef.current
        : resourcesRef.current;

    if (targetEl) {
      setDropdownHeight(targetEl.scrollHeight);
    }
  }, [activeDropdown, brandMode]);

  // Close dropdown when clicking outside header
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setLangOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = (menu: 'products' | 'solutions' | 'resources', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLangOpen(false);
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleServiceClick = (e: React.MouseEvent, key: string, sectionId?: string) => {
    e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onSelectServiceDetail(key);
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="page-header-new"
      ref={headerRef}
      className={`page-header-new ${scrolled ? 'scrolled' : ''}`}
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <div className="header-container">
        <div className="header-inner">
          <div className="header-left">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="header-logo"
              aria-label="Homepage"
            >
              {brandMode === 'propeller' ? (
                /* Exact Original Propeller Aero Logo SVG from propelleraero.com */
                <svg fill="none" height="40" viewBox="0 0 155 40" width="155" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#08111d" transform="translate(.155998 4.044897)">
                    <path clipRule="evenodd" d="m0 24.5089v-8.7484h9.12096v8.7484zm9.12096-8.7484v-8.74844h9.12094v8.74844z" fillRule="evenodd" />
                    <path d="m22.8356 31.8799v-24.71813h3.5349v3.98243l-.5423-.2994c.1381-.6638.5218-1.29755 1.1561-1.9064.6343-.60884 1.4119-1.1079 2.3276-1.49217s1.8671-.5789 2.8391-.5789c1.6114 0 3.0386.38926 4.2868 1.16279 1.2482.77354 2.2303 1.83652 2.9568 3.18398.7264 1.3474 1.0896 2.8995 1.0896 4.6462s-.3581 3.2688-1.0692 4.6262c-.7162 1.3624-1.6932 2.4354-2.9414 3.2189s-2.655 1.1777-4.2152 1.1777c-1.0436 0-2.0513-.2046-3.0284-.6138-.977-.4092-1.8006-.9332-2.481-1.577-.6804-.6388-1.0998-1.3025-1.2584-1.9912l.885-.4641v11.6429zm8.8448-10.1508c1.0435 0 1.9745-.2545 2.7879-.7635.8185-.5091 1.463-1.2077 1.9388-2.0911.4757-.8833.7162-1.8914.7162-3.0192 0-1.1279-.2302-2.131-.6957-3.0043-.4656-.8734-1.105-1.5621-1.9235-2.0711s-1.7597-.7635-2.8237-.7635c-1.0641 0-2.0053.2495-2.8238.7485-.8185.4991-1.463 1.1878-1.9388 2.0761-.4757.8833-.7162 1.8914-.7162 3.0193 0 1.1278.2405 2.1359.7162 3.0192.4758.8834 1.1203 1.582 1.9388 2.0911.8185.509 1.7546.7635 2.8238.7635z" />
                    <path d="m42.6992 24.5837v-17.42193h3.5348v5.47463l-.3376-1.3275c.2506-.8384.6752-1.60196 1.2737-2.29065.5985-.6837 1.2942-1.22767 2.0769-1.62691.7827-.39925 1.5909-.59887 2.4299-.59887.3837 0 .752.03494 1.1049.09981.353.06488.6292.14473.8339.23456l-.9208 3.71796c-.2711-.1098-.573-.2046-.9004-.2795-.3273-.0748-.6496-.1148-.9668-.1148-.6138 0-1.197.1148-1.7495.3494-.5576.2345-1.0436.5539-1.463.9631-.4195.4093-.752.8834-1.0027 1.4273-.2506.544-.3734 1.1329-.3734 1.7767v9.6217h-3.5348z" />
                    <path d="m62.312 24.9131c-1.7444 0-3.3046-.3943-4.6755-1.1778-1.371-.7835-2.4555-1.8565-3.2484-3.2189s-1.1919-2.9144-1.1919-4.6611.3939-3.2988 1.1919-4.6612c.7929-1.36239 1.8774-2.43536 3.2484-3.21887 1.3709-.78352 2.9311-1.17777 4.6755-1.17777s3.2688.39425 4.6398 1.17777c1.371.78351 2.4554 1.85648 3.2483 3.21887.793 1.3624 1.192 2.9145 1.192 4.6612s-.399 3.3037-1.192 4.6611c-.7929 1.3624-1.8773 2.4354-3.2483 3.2189s-2.921 1.1778-4.6398 1.1778zm0-3.1191c1.0641 0 2.0155-.2595 2.8545-.7785.8389-.519 1.4988-1.2277 1.9746-2.121.4757-.8933.7008-1.9064.6803-3.0342.0205-1.1479-.2046-2.1709-.6803-3.0692-.4758-.8933-1.1357-1.597-1.9746-2.106-.839-.509-1.7904-.76357-2.8545-.76357-1.064 0-2.0257.25947-2.8749.77857-.8492.519-1.5142 1.2276-1.9899 2.1209-.4758.8933-.7008 1.9064-.6804 3.0343-.0204 1.1278.2046 2.1409.6804 3.0342.4757.8983 1.1407 1.602 1.9899 2.121s1.8058.7785 2.8749.7785z" />
                    <path d="m73.5611 31.8799v-24.71813h3.5348v3.98243l-.5423-.2994c.1381-.6638.5218-1.29755 1.1561-1.9064.6343-.60884 1.4119-1.1079 2.3276-1.49217s1.8671-.5789 2.8391-.5789c1.6114 0 3.0386.38926 4.2868 1.16279 1.2482.77354 2.2303 1.83652 2.9568 3.18398.7264 1.3474 1.0896 2.8995 1.0896 4.6462s-.3581 3.2688-1.0692 4.6262c-.7162 1.3624-1.6932 2.4354-2.9414 3.2189s-2.655 1.1777-4.2152 1.1777c-1.0435 0-2.0513-.2046-3.0284-.6138-.977-.4092-1.8006-.9332-2.481-1.577-.6804-.6388-1.0998-1.3025-1.2584-1.9912l.885-.4641v11.6429zm8.8447-10.1508c1.0435 0 1.9745-.2545 2.7879-.7635.8185-.5091 1.4631-1.2077 1.9388-2.0911.4757-.8833.7162-1.8914.7162-3.0192 0-1.1279-.2302-2.131-.6957-3.0043-.4656-.8734-1.105-1.5621-1.9235-2.0711s-1.7597-.7635-2.8237-.7635c-1.0641 0-2.0053.2495-2.8238.7485-.8185.4991-1.463 1.1878-1.9388 2.0761-.4757.8833-.7161 1.8914-.7161 3.0193 0 1.1278.2404 2.1359.7161 3.0192.4758.8834 1.1203 1.582 1.9388 2.0911.8185.509 1.7546.7635 2.8238.7635z" />
                    <path d="m101.84 24.9131c-1.837 0-3.4636-.3793-4.8806-1.1428-1.417-.7636-2.5271-1.8066-3.3353-3.1341-.8032-1.3275-1.2073-2.8546-1.2073-4.5763 0-1.3724.2251-2.62.6804-3.7479s1.0845-2.106 1.8876-2.93443 1.77-1.47221 2.8903-1.92635 2.3429-.67871 3.6579-.67871c1.156 0 2.23.21459 3.233.64877.997.42919 1.867 1.02306 2.603 1.77663.737.75357 1.305 1.64189 1.699 2.66989.394 1.0281.583 2.151.563 3.3686l-.036 1.4623h-14.5897l-.7827-2.7199h12.3434l-.511.564v-.7985c-.067-.7286-.317-1.3824-.747-1.9563s-.977-1.0281-1.632-1.3624c-.66-.3344-1.371-.49907-2.143-.49907-1.223 0-2.2563.22457-3.0952.67867-.839.4542-1.4733 1.1179-1.903 1.9913-.4297.8733-.6445 1.9513-.6445 3.2338 0 1.2826.2608 2.2707.7826 3.169.5218.8933 1.2584 1.587 2.2099 2.0761.9515.489 2.0512.7286 3.2992.7286.885 0 1.704-.1447 2.466-.4292.757-.2894 1.581-.8085 2.466-1.557l1.77 2.4204c-.543.529-1.208.9931-1.99 1.3923-.783.3993-1.612.7137-2.481.9432-.875.2346-1.729.3494-2.568.3494z" />
                    <path d="m111.871 24.5837v-24.553396h3.504v24.553396z" />
                    <path d="m118.608 24.5837v-24.553396h3.504v24.553396z" />
                    <path d="m133.755 24.9131c-1.836 0-3.463-.3793-4.88-1.1428-1.417-.7636-2.527-1.8066-3.335-3.1341-.803-1.3275-1.208-2.8546-1.208-4.5763 0-1.3724.226-2.62.681-3.7479s1.084-2.106 1.887-2.93443c.804-.82843 1.77-1.47221 2.891-1.92635 1.12-.45414 2.343-.67871 3.657-.67871 1.156 0 2.231.21459 3.233.64877.998.42919 1.867 1.02306 2.604 1.77663s1.305 1.64189 1.698 2.66989c.394 1.0281.584 2.151.563 3.3686l-.036 1.4623h-14.589l-.783-2.7199h12.344l-.512.564v-.7985c-.066-.7286-.317-1.3824-.746-1.9563-.43-.5739-.977-1.0281-1.632-1.3624-.66-.3344-1.371-.49907-2.144-.49907-1.222 0-2.256.22457-3.095.67867-.838.4542-1.473 1.1179-1.903 1.9913-.429.8733-.644 1.9513-.644 3.2338 0 1.2826.261 2.2707.783 3.169.521.8933 1.258 1.587 2.209 2.0761.952.489 2.052.7286 3.3.7286.885 0 1.703-.1447 2.466-.4292.757-.2894 1.58-.8085 2.465-1.557l1.77 2.4204c-.542.529-1.207.9931-1.99 1.3923-.782.3993-1.611.7137-2.481.9432-.874.2346-1.729.3494-2.568.3494z" />
                    <path d="m143.771 24.5837v-17.42193h3.535v5.47463l-.337-1.3275c.25-.8384.675-1.60196 1.273-2.29065.599-.6837 1.295-1.22767 2.077-1.62691.783-.39925 1.591-.59887 2.43-.59887.384 0 .752.03494 1.105.09981.353.06488.629.14473.834.23456l-.921 3.71796c-.271-.1098-.573-.2046-.9-.2795-.328-.0748-.65-.1148-.967-.1148-.614 0-1.197.1148-1.75.3494-.557.2345-1.043.5539-1.463.9631-.419.4093-.752.8834-1.002 1.4273-.251.544-.374 1.1329-.374 1.7767v9.6217h-3.534z" />
                  </g>
                </svg>
              ) : (
                /* Express Digital Land Survey SVG using Propeller's exact 2-square mark & typography proportions */
                <svg fill="none" height="40" viewBox="0 0 235 40" width="235" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#08111d" transform="translate(.155998 4.044897)">
                    <path clipRule="evenodd" d="m0 24.5089v-8.7484h9.12096v8.7484zm9.12096-8.7484v-8.74844h9.12094v8.74844z" fillRule="evenodd" />
                    <text
                      x="24"
                      y="22"
                      fill="#08111d"
                      fontFamily="Montserrat, sans-serif"
                      fontWeight="700"
                      fontSize="22"
                      letterSpacing="-0.03em"
                    >
                      express
                    </text>
                    <text
                      x="112"
                      y="22"
                      fill="#08111d"
                      fontFamily="Nunito Sans, sans-serif"
                      fontWeight="600"
                      fontSize="13.5"
                      opacity="0.72"
                    >
                      land survey
                    </text>
                  </g>
                </svg>
              )}
            </a>

            <ul className="header-menu">
              <li
                className={`menu-item with-sub menu-products ${
                  activeDropdown === 'products' ? 'active' : ''
                }`}
              >
                <a href="#products" onClick={(e) => toggleMenu('products', e)}>
                  {brandMode === 'propeller' ? 'Products' : 'Services'}
                </a>
              </li>
              <li
                className={`menu-item with-sub menu-solutions ${
                  activeDropdown === 'solutions' ? 'active' : ''
                }`}
              >
                <a href="#solutions" onClick={(e) => toggleMenu('solutions', e)}>
                  Solutions
                </a>
              </li>
              <li
                className={`menu-item with-sub menu-resources ${
                  activeDropdown === 'resources' ? 'active' : ''
                }`}
              >
                <a href="#resources" onClick={(e) => toggleMenu('resources', e)}>
                  Resources
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="#survey-report"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenReportModal();
                  }}
                >
                  {brandMode === 'propeller' ? 'Customer Stories' : 'Survey Report (Plot 308)'}
                </a>
              </li>
            </ul>
          </div>

          <div className="header-right">
            <div
              className="lang-select"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen(!langOpen);
                setActiveDropdown(null);
              }}
            >
              {/* Exact Globe SVG from propelleraero.com */}
              <svg fill="none" height="40" viewBox="0 0 28 40" width="28" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m14 8.844c-2.207 0-4.363.654-6.198 1.88s-3.265 2.968-4.109 5.007c-.844 2.038-1.065 4.281-.635 6.445.431 2.165 1.493 4.152 3.053 5.713 1.561 1.56 3.548 2.622 5.712 3.053 2.165.43 4.408.209 6.446-.635 2.039-.844 3.781-2.274 5.007-4.109s1.88-3.992 1.88-6.198c-.003-2.958-1.18-5.793-3.271-7.885-2.092-2.091-4.927-3.268-7.885-3.271zm8.922 7h-4.417c-.526-2.029-1.486-3.92-2.814-5.542 1.562.275 3.034.922 4.293 1.887 1.258.965 2.266 2.218 2.938 3.655zm.922 4.156c0 .963-.141 1.921-.419 2.844h-4.633c.319-1.883.319-3.805 0-5.688h4.633c.278.922.419 1.881.419 2.844zm-9.844 9.606c-.632-.644-1.189-1.358-1.661-2.127-.638-1.037-1.133-2.154-1.473-3.323h6.268c-.34 1.169-.835 2.286-1.473 3.323-.472.769-1.029 1.483-1.661 2.127zm-3.451-6.762c-.357-1.879-.357-3.809 0-5.688h6.902c.357 1.879.357 3.809 0 5.688zm-6.393-2.844c-.001-.963.141-1.922.419-2.844h4.633c-.319 1.883-.319 3.805 0 5.688h-4.633c-.278-.923-.42-1.881-.419-2.844zm9.844-9.606c.632.644 1.189 1.358 1.661 2.127.638 1.037 1.133 2.154 1.473 3.323h-6.268c.34-1.169.835-2.286 1.473-3.323.472-.769 1.029-1.483 1.661-2.127zm-1.691-.092c-1.328 1.622-2.288 3.513-2.814 5.542h-4.417c.672-1.437 1.68-2.69 2.938-3.655 1.259-.965 2.731-1.612 4.293-1.887zm-7.231 13.854h4.417c.526 2.029 1.486 3.92 2.814 5.542-1.562-.275-3.034-.923-4.293-1.887-1.258-.965-2.266-2.218-2.938-3.655zm10.61 5.542c1.328-1.622 2.29-3.512 2.817-5.542h4.417c-.672 1.437-1.68 2.69-2.938 3.655-1.259.964-2.731 1.612-4.293 1.887z"
                  fill="#000"
                />
              </svg>
              <ul className={langOpen ? 'show' : ''}>
                <li className={language === 'EN' ? 'active' : ''}>
                  <a
                    href="#en"
                    onClick={(e) => {
                      e.preventDefault();
                      setLanguage('EN');
                    }}
                  >
                    English
                  </a>
                </li>
                <li className={language === 'BN' ? 'active' : ''}>
                  <a
                    href="#bn"
                    onClick={(e) => {
                      e.preventDefault();
                      setLanguage('BN');
                    }}
                  >
                    {brandMode === 'propeller' ? 'Deutsch' : 'বাংলা'}
                  </a>
                </li>
              </ul>
            </div>

            <a
              className="menu-link"
              href="tel:01754246123"
              onClick={(e) => {
                e.preventDefault();
                onOpenDemoModal();
              }}
            >
              Contact us
            </a>
            <a
              className="menu-link"
              href="#report"
              onClick={(e) => {
                e.preventDefault();
                onOpenReportModal();
              }}
            >
              {brandMode === 'propeller' ? 'Log in' : 'Verify Report'}
            </a>
            <a
              className="header-btn"
              href="#request-a-demo"
              onClick={(e) => {
                e.preventDefault();
                onOpenDemoModal();
              }}
            >
              <span className="w-btn-label">
                {brandMode === 'propeller' ? 'REQUEST A DEMO' : 'BOOK A SURVEY'}
              </span>
            </a>
          </div>

          <div
            className={`mobile-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {/* Exact Hamburger SVG from propelleraero.com */}
            <svg fill="none" height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 4.6875 8.4375 L 25.3125 8.4375 C 25.5611 8.4375 25.7996 8.33873 25.9754 8.16291 C 26.1512 7.9871 26.25 7.74864 26.25 7.5 C 26.25 7.25136 26.1512 7.0129 25.9754 6.83709 C 25.7996 6.66127 25.5611 6.5625 25.3125 6.5625 L 4.6875 6.5625 C 4.43886 6.5625 4.2004 6.66127 4.02459 6.83709 C 3.84877 7.0129 3.75 7.25136 3.75 7.5 C 3.75 7.74864 3.84877 7.9871 4.02459 8.16291 C 4.2004 8.33873 4.43886 8.4375 4.6875 8.4375 Z"
                fill="#08111d"
              />
              <path
                d="M 26.25 15 C 26.25 15.2486 26.1512 15.4871 25.9754 15.6629 C 25.7996 15.838700000000001 25.5611 15.9375 25.3125 15.9375 L 4.6875 15.9375 C 4.43886 15.9375 4.2004 15.8387 4.02459 15.6629 C 3.84877 15.4871 3.75 15.2486 3.75 15 C 3.75 14.7514 3.84877 14.5129 4.02459 14.3371 C 4.2004 14.161299999999999 4.43886 14.0625 4.6875 14.0625 L 25.3125 14.0625 C 25.5611 14.0625 25.7996 14.1613 25.9754 14.3371 C 26.1512 14.512899999999998 26.25 14.7514 26.25 15 Z"
                fill="#08111d"
              />
              <path
                d="M 25.3125 21.5625 L 4.6875 21.5625 C 4.43886 21.5625 4.2004 21.6613 4.02459 21.8371 C 3.84877 22.0129 3.75 22.2514 3.75 22.5 C 3.75 22.7486 3.84877 22.9871 4.02459 23.1629 C 4.2004 23.3387 4.43886 23.4375 4.6875 23.4375 L 25.3125 23.4375 C 25.5611 23.4375 25.7996 23.3387 25.9754 23.1629 C 26.1512 22.9871 26.25 22.7486 26.25 22.5 C 26.25 22.2514 26.1512 22.0129 25.9754 21.8371 C 25.7996 21.6613 25.5611 21.5625 25.3125 21.5625 Z"
                fill="#08111d"
              />
            </svg>
          </div>
        </div>

        {/* Exact Desktop Mega-Dropdown Container */}
        <div className="dropdown-desktop" style={{ height: `${dropdownHeight}px` }}>
          {/* 1. PRODUCTS / 7 CORE SERVICES DROPDOWN */}
          <section
            ref={productsRef}
            className={`l-section wpb_row dropdown dropdown-products height_auto width_full ${
              activeDropdown === 'products' ? 'active' : ''
            }`}
          >
            <div className="l-section-h i-cf">
              <div className="g-cols vc_row via_grid cols_3 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
                <div className="wpb_column vc_column_container">
                  <div className="vc_column-inner">
                    <div className="w-text dw-menu-title">
                      <span className="w-text-h">
                        <span className="w-text-value">
                          {brandMode === 'propeller' ? 'PLATFORM' : 'CORE SURVEYING PLATFORM'}
                        </span>
                      </span>
                    </div>
                    <div className="wpb_text_column">
                      <div className="wpb_wrapper">
                        {brandMode === 'propeller' ? (
                          <p>
                            <a className="menu-block" href="#platform" onClick={(e) => handleServiceClick(e, 'digital-survey', 'platform-section')}>
                              <strong>Propeller</strong>{' '}
                              <span>A single, cloud-powered map that brings your plans, data, and team together</span>
                            </a>
                            <a className="menu-link" href="#volumes" onClick={(e) => handleServiceClick(e, 'map-preparation', 'solutions-section')}>
                              Volumes + inventory management
                            </a>
                            <a className="menu-link" href="#progress" onClick={(e) => handleServiceClick(e, 'overlap', 'products-section')}>
                              Progress + productivity tracking
                            </a>
                            <a className="menu-link" href="#integrations" onClick={(e) => handleServiceClick(e, 'record-verification', 'industries-section')}>
                              Partners + integrations
                            </a>
                          </p>
                        ) : (
                          <p>
                            <a className="menu-block" href="#digital-survey" onClick={(e) => handleServiceClick(e, 'digital-survey', 'platform-section')}>
                              <strong>Digital Survey</strong>{' '}
                              <span>A single, cloud-powered CAD &amp; Total Station map that brings your plots, deeds, and surveyors together</span>
                            </a>
                            <a className="menu-link" href="#scale" onClick={(e) => handleServiceClick(e, 'map-preparation', 'platform-section')}>
                              Scale 1&quot; = 64 Feet CAD Drafting
                            </a>
                            <a className="menu-link" href="#overlap" onClick={(e) => handleServiceClick(e, 'overlap', 'solutions-section')}>
                              CS / RS / BWDB Road Overlap Tracking
                            </a>
                            <a className="menu-link" href="#report" onClick={(e) => { e.preventDefault(); setActiveDropdown(null); onOpenReportModal(); }}>
                              Inspect Live Report (Mouja Parain, Plot 308)
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wpb_column vc_column_container">
                  <div className="vc_column-inner">
                    <div className="w-text dw-menu-title">
                      <span className="w-text-h">
                        <span className="w-text-value">
                          {brandMode === 'propeller' ? 'Products' : '7 Services Below Our Name'}
                        </span>
                      </span>
                    </div>
                    <div className="wpb_text_column">
                      <div className="wpb_wrapper">
                        {brandMode === 'propeller' ? (
                          <p>
                            <a className="menu-block" href="#dirtmate" onClick={(e) => handleServiceClick(e, 'demarcation', 'products-section')}>
                              <strong>DirtMate</strong>{' '}
                              <span>Centimeter-level machine guidance and fleet telematics for earthmoving</span>
                            </a>
                            <a className="menu-block" href="#aeropoints" onClick={(e) => handleServiceClick(e, 'deeds-mouza-retrieval', 'products-section')}>
                              <strong>AeroPoints</strong>{' '}
                              <span>High-accuracy ground points for faster, reliable surveys</span>
                            </a>
                            <a className="menu-block" href="#cad" onClick={(e) => handleServiceClick(e, 'map-preparation', 'platform-section')}>
                              <strong>Propeller CAD</strong>{' '}
                              <span>AI-powered earthworks design built directly on your real survey terrain</span>
                            </a>
                            <a className="menu-block" href="#hardware" onClick={(e) => handleServiceClick(e, 'pantograph', 'solutions-section')}>
                              <strong>Drone &amp; hardware integrations</strong>{' '}
                              <span>Connect Propeller with your existing tools seamlessly</span>
                            </a>
                          </p>
                        ) : (
                          <p>
                            <a className="menu-block" href="#map-preparation" onClick={(e) => handleServiceClick(e, 'map-preparation', 'platform-section')}>
                              <strong>Map Preparation</strong>{' '}
                              <span>Precision CAD survey maps with chord lengths, decimals, and Grantor/Recipient tables</span>
                            </a>
                            <a className="menu-block" href="#deeds-mouza" onClick={(e) => handleServiceClick(e, 'deeds-mouza-retrieval', 'products-section')}>
                              <strong>Retrieval of Deeds/Mouza Maps</strong>{' '}
                              <span>Certified CS, SA, RS &amp; BS Mouza map sheets and registered title deed retrieval</span>
                            </a>
                            <a className="menu-block" href="#pantograph" onClick={(e) => handleServiceClick(e, 'pantograph', 'solutions-section')}>
                              <strong>Pantograph</strong>{' '}
                              <span>Distortion-free mechanical and digital map scale enlargement &amp; reduction</span>
                            </a>
                            <a className="menu-block" href="#demarcation" onClick={(e) => handleServiceClick(e, 'demarcation', 'products-section')}>
                              <strong>Demarcation</strong>{' '}
                              <span>Sub-centimeter on-site boundary corner staking and concrete pillar placement</span>
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wpb_column vc_column_container">
                  <div className="vc_column-inner">
                    <div className="w-text dw-menu-title">
                      <span className="w-text-h">
                        <span className="w-text-value">
                          {brandMode === 'propeller' ? 'DATA CAPTURE' : 'CONFORMANCE & AUDIT'}
                        </span>
                      </span>
                    </div>
                    <div className="wpb_text_column">
                      <div className="wpb_wrapper">
                        {brandMode === 'propeller' ? (
                          <p>
                            <a className="menu-block" href="#ppk" onClick={(e) => handleServiceClick(e, 'overlap', 'solutions-section')}>
                              <strong>Propeller PPK</strong>{' '}
                              <span>Survey-grade positioning for trusted drone measurements</span>
                            </a>
                            <a className="menu-block" href="#photogrammetry" onClick={(e) => handleServiceClick(e, 'record-verification', 'products-section')}>
                              <strong>Photogrammetry</strong>{' '}
                              <span>Turn aerial images into detailed 3D maps</span>
                            </a>
                            <a className="menu-block" href="#lidar" onClick={(e) => handleServiceClick(e, 'digital-survey', 'platform-section')}>
                              <strong>LiDAR</strong>{' '}
                              <span>Capture precise, high-density data for any terrain</span>
                            </a>
                          </p>
                        ) : (
                          <p>
                            <a className="menu-block" href="#overlap" onClick={(e) => handleServiceClick(e, 'overlap', 'solutions-section')}>
                              <strong>Overlap</strong>{' '}
                              <span>Tri-color CS Line (Green), RS Line (Magenta) &amp; Aqueduct/Road Line (Blue) superimposition</span>
                            </a>
                            <a className="menu-block" href="#record-verification" onClick={(e) => handleServiceClick(e, 'record-verification', 'solutions-section')}>
                              <strong>Record Verification</strong>{' '}
                              <span>Complete Khatian, Mutation, CS/SA/RS Plot &amp; Grantor-to-Recipient ownership audit</span>
                            </a>
                            <a className="menu-block" href="#surveyor" onClick={(e) => { e.preventDefault(); setActiveDropdown(null); onOpenReportModal(); }}>
                              <strong>Certified by Reg No- 1111210</strong>{' '}
                              <span>Faysal Ahamad Shanto (Cert 19570/22, BS-AS 898/26) &amp; Mawlana MD Edris Ali (Reg 30827)</span>
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. SOLUTIONS DROPDOWN */}
          <section
            ref={solutionsRef}
            className={`l-section wpb_row dropdown dropdown-solutions height_auto width_full ${
              activeDropdown === 'solutions' ? 'active' : ''
            }`}
          >
            <div className="l-section-h i-cf">
              <div className="g-cols vc_row via_grid cols_3 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
                <div className="wpb_column vc_column_container">
                  <div className="vc_column-inner">
                    <div className="w-text dw-menu-title">
                      <a href="#teams" onClick={(e) => e.preventDefault()} className="w-text-h">
                        <span className="w-text-value">TEAMS</span>
                      </a>
                    </div>
                    <div className="wpb_text_column">
                      <div className="wpb_wrapper">
                        <p>
                          <a className="menu-block" href="#t1" onClick={(e) => handleServiceClick(e, 'digital-survey', 'solutions-section')}>
                            <strong>{brandMode === 'propeller' ? 'Project managers' : 'Landowners & Buyers'}</strong>
                          </a>
                          <a className="menu-block" href="#t2" onClick={(e) => handleServiceClick(e, 'demarcation', 'solutions-section')}>
                            <strong>{brandMode === 'propeller' ? 'Foreman + superintendents' : 'Real Estate Developers'}</strong>
                          </a>
                          <a className="menu-block" href="#t3" onClick={(e) => handleServiceClick(e, 'map-preparation', 'solutions-section')}>
                            <strong>{brandMode === 'propeller' ? 'Site engineers + operators' : 'Civil Engineers + Architects'}</strong>
                          </a>
                          <a className="menu-block" href="#t4" onClick={(e) => handleServiceClick(e, 'record-verification', 'solutions-section')}>
                            <strong>{brandMode === 'propeller' ? 'VPs + owners' : 'Banks + Mortgage Auditors'}</strong>
                          </a>
                          <a className="menu-block" href="#t5" onClick={(e) => handleServiceClick(e, 'overlap', 'solutions-section')}>
                            <strong>Surveyors + GIS</strong>
                          </a>
                          <a className="menu-block" href="#t6" onClick={(e) => handleServiceClick(e, 'pantograph', 'solutions-section')}>
                            <strong>{brandMode === 'propeller' ? 'Estimators + bidders' : 'Legal & Mutation Advisors'}</strong>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wpb_column vc_column_container">
                  <div className="vc_column-inner">
                    <div className="w-text dw-menu-title">
                      <a href="#industries" onClick={(e) => e.preventDefault()} className="w-text-h">
                        <span className="w-text-value">INDUSTRIES</span>
                      </a>
                    </div>
                    <div className="wpb_text_column">
                      <div className="wpb_wrapper">
                        <p>
                          <a className="menu-block" href="#i1" onClick={(e) => handleServiceClick(e, 'digital-survey', 'industries-section')}>
                            <strong>Construction</strong>
                          </a>
                          <a className="menu-block" href="#i2" onClick={(e) => handleServiceClick(e, 'overlap', 'industries-section')}>
                            <strong>{brandMode === 'propeller' ? 'Mining' : 'Cadastral & Mouza Mapping'}</strong>
                          </a>
                          <a className="menu-block" href="#i3" onClick={(e) => handleServiceClick(e, 'demarcation', 'industries-section')}>
                            <strong>{brandMode === 'propeller' ? 'Aggregates' : 'Industrial Land & EPZ'}</strong>
                          </a>
                          <a className="menu-block" href="#i4" onClick={(e) => handleServiceClick(e, 'record-verification', 'industries-section')}>
                            <strong>{brandMode === 'propeller' ? 'Waste management' : 'Water Board (BWDB) & Roads'}</strong>
                          </a>
                          <a className="menu-block" href="#i5" onClick={(e) => handleServiceClick(e, 'map-preparation', 'industries-section')}>
                            <strong>Transportation</strong>
                          </a>
                          <a className="menu-block" href="#i6" onClick={(e) => handleServiceClick(e, 'deeds-mouza-retrieval', 'industries-section')}>
                            <strong>Survey + engineering</strong>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wpb_column vc_column_container">
                  <div className="vc_column-inner">
                    <div className="w-text dw-menu-title">
                      <a href="#workflows" onClick={(e) => e.preventDefault()} className="w-text-h">
                        <span className="w-text-value">WORKFLOWS</span>
                      </a>
                    </div>
                    <div className="wpb_text_column">
                      <div className="wpb_wrapper">
                        <p>
                          <a className="menu-block" href="#w1" onClick={(e) => handleServiceClick(e, 'digital-survey', 'platform-section')}>
                            <strong>Connect field and office teams</strong>
                          </a>
                          <a className="menu-block" href="#w2" onClick={(e) => handleServiceClick(e, 'map-preparation', 'platform-section')}>
                            <strong>{brandMode === 'propeller' ? 'Track progress and productivity' : 'Prepare 1" = 64 Feet CAD Survey Maps'}</strong>
                          </a>
                          <a className="menu-block" href="#w3" onClick={(e) => handleServiceClick(e, 'overlap', 'platform-section')}>
                            <strong>{brandMode === 'propeller' ? 'Verify as-built work against design' : 'Superimpose CS, RS & Aqueduct/Road Lines'}</strong>
                          </a>
                          <a className="menu-block" href="#w4" onClick={(e) => handleServiceClick(e, 'record-verification', 'platform-section')}>
                            <strong>{brandMode === 'propeller' ? 'Support safety and compliance' : 'Verify Grantor-to-Recipient Deed Chains'}</strong>
                          </a>
                          <a className="menu-block" href="#w5" onClick={(e) => handleServiceClick(e, 'pantograph', 'platform-section')}>
                            <strong>{brandMode === 'propeller' ? 'Manage inventory and volumes' : 'Pantograph Scaling & Decimal Calculation'}</strong>
                          </a>
                          <a className="menu-block" href="#w6" onClick={(e) => handleServiceClick(e, 'demarcation', 'platform-section')}>
                            <strong>{brandMode === 'propeller' ? 'Capture existing ground' : 'On-Site Demarcation & Pillar Staking'}</strong>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. RESOURCES DROPDOWN */}
          <section
            ref={resourcesRef}
            className={`l-section wpb_row dropdown dropdown-resources height_auto width_full ${
              activeDropdown === 'resources' ? 'active' : ''
            }`}
          >
            <div className="l-section-h i-cf">
              <div className="g-cols vc_row via_grid cols_3 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
                <div className="wpb_column vc_column_container">
                  <div className="vc_column-inner">
                    <div className="w-text dw-menu-title">
                      <span className="w-text-h">
                        <span className="w-text-value">CONNECT</span>
                      </span>
                    </div>
                    <div className="wpb_text_column">
                      <div className="wpb_wrapper">
                        <p>
                          <a className="menu-block" href="tel:01754246123">
                            <strong>Hotline: 01754-246123</strong>
                          </a>
                          <a className="menu-block" href="tel:01521715896">
                            <strong>Secondary: 01521-715896</strong>
                          </a>
                          <a className="menu-block" href="mailto:faysalahamed2000s@gmail.com">
                            <strong>faysalahamed2000s@gmail.com</strong>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wpb_column vc_column_container">
                  <div className="vc_column-inner">
                    <div className="w-text dw-menu-title">
                      <span className="w-text-h">
                        <span className="w-text-value">OFFICIAL RECORDS</span>
                      </span>
                    </div>
                    <div className="wpb_text_column">
                      <div className="wpb_wrapper">
                        <p>
                          <a
                            className="menu-block"
                            href="#sample-report"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveDropdown(null);
                              onOpenReportModal();
                            }}
                          >
                            <strong>Land Survey Report (11/10/2026)</strong>
                          </a>
                          <a
                            className="menu-block"
                            href="#mouja-parain"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveDropdown(null);
                              onOpenReportModal();
                            }}
                          >
                            <strong>Mouja Parain • CS 161 / RS 308</strong>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wpb_column vc_column_container">
                  <div className="vc_column-inner">
                    <div className="w-text dw-menu-title">
                      <span className="w-text-h">
                        <span className="w-text-value">CERTIFIED SURVEYORS</span>
                      </span>
                    </div>
                    <div className="wpb_text_column">
                      <div className="wpb_wrapper">
                        <p>
                          <a
                            className="menu-block"
                            href="#faysal"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveDropdown(null);
                              onOpenDemoModal();
                            }}
                          >
                            <strong>Faysal Ahamad Shanto (Reg #1111210)</strong>
                          </a>
                          <a
                            className="menu-block"
                            href="#edris"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveDropdown(null);
                              onOpenDemoModal();
                            }}
                          >
                            <strong>Mawlana MD Edris Ali (Reg #30827)</strong>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Exact Mobile Menu Structure */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-top">
            <a
              className={`mobile-link with-sub ${mobileSubOpen === 'products' ? 'active' : ''}`}
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                setMobileSubOpen(mobileSubOpen === 'products' ? null : 'products');
              }}
            >
              {brandMode === 'propeller' ? 'Products' : 'Services (7 Core)'}
            </a>
            <div
              className="mmt-content"
              style={{
                height: mobileSubOpen === 'products' ? 'auto' : '0',
                opacity: mobileSubOpen === 'products' ? 1 : 0,
              }}
            >
              <div className="wpb_column">
                <a className="menu-block" href="#s1" onClick={(e) => handleServiceClick(e, 'digital-survey', 'platform-section')}>
                  <strong>Digital Survey</strong>
                  <span>Total Station &amp; RTK GNSS field capture</span>
                </a>
                <a className="menu-block" href="#s2" onClick={(e) => handleServiceClick(e, 'map-preparation', 'platform-section')}>
                  <strong>Map Preparation</strong>
                  <span>1&quot; = 64 Feet CAD survey report drafting</span>
                </a>
                <a className="menu-block" href="#s3" onClick={(e) => handleServiceClick(e, 'deeds-mouza-retrieval', 'products-section')}>
                  <strong>Retrieval of Deeds/Mouza Maps</strong>
                  <span>CS, SA, RS &amp; BS Mouza sheets &amp; deeds</span>
                </a>
                <a className="menu-block" href="#s4" onClick={(e) => handleServiceClick(e, 'pantograph', 'solutions-section')}>
                  <strong>Pantograph</strong>
                  <span>Proportional map scaling &amp; transposition</span>
                </a>
                <a className="menu-block" href="#s5" onClick={(e) => handleServiceClick(e, 'demarcation', 'products-section')}>
                  <strong>Demarcation</strong>
                  <span>On-site corner staking &amp; pillar installation</span>
                </a>
                <a className="menu-block" href="#s6" onClick={(e) => handleServiceClick(e, 'overlap', 'solutions-section')}>
                  <strong>Overlap</strong>
                  <span>CS Green, RS Magenta &amp; Road Blue superimposition</span>
                </a>
                <a className="menu-block" href="#s7" onClick={(e) => handleServiceClick(e, 'record-verification', 'solutions-section')}>
                  <strong>Record Verification</strong>
                  <span>Khatian, Mutation &amp; Grantor-Recipient audit</span>
                </a>
              </div>
            </div>

            <a
              className="mobile-link"
              href="#report"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onOpenReportModal();
              }}
            >
              Land Survey Report (Plot 308)
            </a>
            <a
              className="mobile-link"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
            >
              Contact us (01754-246123)
            </a>
          </div>
          <div className="mobile-menu-bottom">
            <a
              className="header-btn"
              href="#demo"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
            >
              <span className="w-btn-label">
                {brandMode === 'propeller' ? 'REQUEST A DEMO' : 'BOOK A SURVEY'}
              </span>
            </a>
            <a
              className="mobile-link"
              href="#verify"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onOpenReportModal();
              }}
              style={{ textTransform: 'uppercase' }}
            >
              {brandMode === 'propeller' ? 'Log in' : 'Verify Report'}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
