"use client";
// import React, { useEffect, useRef } from 'react';

export const marketRegex = /(NASDAQ:|NYSE:|BCBA:|AMEX:)/;
interface TradingWidgetProps {
    tickerSymbol: string;
}



import React, {useEffect, useRef } from 'react';

let tvScriptLoadingPromise: Promise<Event> | undefined;

const TradingViewWidget: React.FC<TradingWidgetProps> = ({tickerSymbol}) => {
    const onLoadScriptRef = useRef();

    useEffect(() => {
        // @ts-ignore
        onLoadScriptRef.current = () => {
            if (document.getElementById('tradingview_a90b4') && 'TradingView' in window) {

                // @ts-ignore
                new window.TradingView.widget({
                    whitelabel: "Profitbook",
                    width: 980,
                    height: 610,
                    symbol: tickerSymbol,
                    interval: "15",
                    timezone: "Etc/UTC",
                    theme: "dark",
                    style: "1",
                    locale: "en",
                    toolbar_bg: "#f1f3f6",
                    enable_publishing: false,
                    hide_top_toolbar: false,
                    hide_side_toolbar: false,
                    allow_symbol_change: true,
                    container_id: "tradingview_a90b4",
                });


            }
        }

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

        tvScriptLoadingPromise.then(()=>{
            // @ts-ignore
            typeof onLoadScriptRef.current === 'function' && onLoadScriptRef.current();
        })

        return () => onLoadScriptRef.current = undefined;

    }, [tickerSymbol]);


    return (
            <div id='tradingview_a90b4' />
    );
}

export default TradingViewWidget;