import React from 'react';
import { useTranslation } from "react-i18next";
import DocumentViewer from './DocumentViewer';
import docs1 from '../../../assets/images/docs/AnalyseEcouvillon.pdf';
import img from '../../../assets/images/pdf.png';
import docs2 from '../../../assets/images/docs/ApresBionettoyage.pdf';
import docs3 from '../../../assets/images/docs/AvantBionettoyage.pdf';
import docs4 from '../../../assets/images/docs/ApresDesinfection.pdf';
import docs5 from '../../../assets/images/docs/AvantDesinfection.pdf';
import docs6 from '../../../assets/images/docs/RapportViroteck2.pdf';
import docs7 from '../../../assets/images/docs/RapportViroteck1.pdf';


const Docs = () => {
    const { t } = useTranslation();
    const documents = [
        { name: 'Document 1', url: docs1, img: img , title:t("Swab")},
        { name: 'Document 2', url: docs2, img: img ,title:t("A-After-Cleaning")},
        { name: 'Document 3', url: docs3, img: img ,title:t("A-before-Cleaning")},
        { name: 'Document 4', url: docs4, img: img ,title:t("A-After-Disinfection")},
        { name: 'Document 5', url: docs5, img: img ,title:t("A-before-Disinfection")},
        { name: 'Document 6', url: docs6, img: img,title:t("t-Rapport") },
        { name: 'Document 7', url: docs7, img: img ,title:t("t-Rapport") },
    ];

    return (
        <div id='DiscoverOurSolution'>
            <section className="about-section" style={{ marginTop: "-7%" }}>
                <div className="container">
                    <div className="title-section">
                        <h1>{t("t-Analyses1")} <a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>{t("t-Analyses2")} </a></h1>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 all2 " style={{ background: 'white' }}>
                        <div className="container " >
                            <DocumentViewer documents={documents} />
                        </div>
                    </div></div>
            </section>
        </div>
    );
};

export default Docs;