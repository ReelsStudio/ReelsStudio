"use client";

import Script from "next/script";

const SendPulseWidget = () => {
  return (
    <>
      <Script
        id="sendpulse-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
js.src = "https://web.webpushs.com/js/push/4468bf567100db975121ab7126f2cc80.js";
              fjs.parentNode.insertBefore(js, fjs);
            })(window, document, 'script', 'sendpulse-js');
          `,
        }}
      />
    </>
  );
};

export default SendPulseWidget;
