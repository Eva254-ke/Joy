import React from 'react';
import './FloatingWidget.css';
import whatsappIcon from '../assets/whatsapp-icon.png';

const FloatingWidget = () => {
    return (
        <div className="floating-widget">
            <a href="https://wa.me/254748082746" target="_blank" rel="noopener noreferrer">
                <button className="widget-button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Hi, how can we help?
                </button>
            </a>
        </div>
    );
};

export default FloatingWidget;