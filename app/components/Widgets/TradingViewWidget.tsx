"use client";
// TradingViewWidget.jsx
import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

const marketRegex = /(NASDAQ|NYSE|BCBA|AMEX)/;
interface TradingWidgetProps {
    tickerSymbol: string;
}

const TradingViewWidget: React.FC<TradingWidgetProps> = ({
    tickerSymbol
    }) => {
    const onLoadScriptRef = useRef();

    useEffect(
        () => {
            console.log(tickerSymbol)
            onLoadScriptRef.current = createWidget;

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

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('tradingview_a90b4') && 'TradingView' in window) {
                    new window.TradingView.widget({
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
        },
        []
    );

    return (
        <div className='tradingview-widget-container'>
            <div id='tradingview_a90b4' />
            <div className="tradingview-widget-copyright">
                <a href={`https://www.tradingview.com/symbols/${tickerSymbol.replace(':','-')}/`} rel="noopener" target="_blank"><span className="blue-text">{tickerSymbol.replace(marketRegex,'').replace(':','')} stock chart</span></a> by TradingView
            </div>
        </div>
    );
}

export default TradingViewWidget;