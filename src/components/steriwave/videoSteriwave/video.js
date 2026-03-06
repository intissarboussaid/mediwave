

import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useTranslation } from "react-i18next";
import useResizeScreen from "../../../utils/useResizeScreen";

const Video = () => {
    const { t } = useTranslation();
    const windowDimensions = useResizeScreen();
    const videoUrl = 'https://www.youtube.com/watch?v=1flweQUxAgc';
    const [videoStyle, setVideoStyle] = useState({
        position: 'relative',
        width: '100%',
        left: '30%'
    });
    useEffect(() => {

        if (windowDimensions.width > 2200) {

        } else if (windowDimensions.width > 2100 && windowDimensions.width < 2200) {

        } else if (windowDimensions.width > 2000 && windowDimensions.width < 2100) {

        } else if (windowDimensions.width > 1900 && windowDimensions.width < 2000) {

        } else if (windowDimensions.width > 1800 && windowDimensions.width < 1900) {

        } else if (windowDimensions.width > 1700 && windowDimensions.width < 1800) {

        } else if (windowDimensions.width > 1600 && windowDimensions.width < 1700) {
            setVideoStyle({
                width: '100%',
                marginLeft: '25%',
            });
        } else if (windowDimensions.width > 1500 && windowDimensions.width < 1600) {
            setVideoStyle({
                width: '100%',
                marginLeft: '25%',
            });
        } else if (windowDimensions.width > 1400 && windowDimensions.width < 1500) {
            setVideoStyle({
                width: '100%',
                marginLeft: '27%'
            });
        } else if (windowDimensions.width > 1300 && windowDimensions.width < 1400) {
            setVideoStyle({
                width: '100%',
                marginLeft: '25%',
            });
        } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
            setVideoStyle({
                width: '100%',
                marginLeft: '20%',
            });
        } else if (windowDimensions.width > 1100 && windowDimensions.width < 1200) {
            setVideoStyle({
                width: '100%',
                marginLeft: '20%',
            });
        } else if (windowDimensions.width > 1000 && windowDimensions.width < 1100) {
            setVideoStyle({
                width: '100%',
                marginLeft: '20%',
            });
        } else if (windowDimensions.width > 900 && windowDimensions.width < 1000) {
            setVideoStyle({
                width: '100%',
                marginLeft: '20%',
            });
        } else if (windowDimensions.width > 700 && windowDimensions.width < 900) {
            setVideoStyle({
                width: '100%',
                marginLeft: '10%',
            });
        } else if (windowDimensions.width > 500 && windowDimensions.width < 700) {
            setVideoStyle({
                width: '50%',
                marginLeft: '0%',
            });
        } else if (windowDimensions.width > 300 && windowDimensions.width < 500) {
            setVideoStyle({
                width: '50%',
                marginLeft: '0%',
            });

        } else if (windowDimensions.width > 100 && windowDimensions.width < 300) {
            setVideoStyle({
                width: '50%',
                marginLeft: '0%',
            });
        }

    }, [windowDimensions.width,]);

    return (
        <div id = 'DiscoverOurSolution' >
            <section className="about-section" style={{ marginTop: "5%" }}>
                <div className="container">
                    <div className="title-section">
                        <h1>{t("t-video1")} <a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>{t("t-video2")} </a></h1>
                    
                       
                    </div>
                    <div className='container' style={{ width: '100%', height: 'auto' }} >
                        <ReactPlayer url={videoUrl}
                            style={videoStyle}
                        />
                    </div>
                </div>
            </section>
       </div >
  )
}

export default Video