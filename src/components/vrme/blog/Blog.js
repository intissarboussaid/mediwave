import React from "react";
import blog1 from "../../../assets/images/blog1.jpg";
import blog2 from "../../../assets/images/blog2.jpg";
import blog3 from "../../../assets/images/blog3.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import'./Blog.css';

const Blog = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section id="blog-section">
        <div className="container-fluid">
          <div className="title-section">
            <h1>Blog</h1>
          </div>
          <div className="blog-box">
            <div className="row">
              <div className="col-md-4 col-sm-5 blog1" >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="blog-post"
                >
                  <div className="post-gallery"  >
                    <img src={blog1} alt="" height={250}  />
                  </div>
                  <h2>
                    <a
                      target="_blank" 
                      href="https://www.verywellmind.com/virtual-reality-exposure-therapy-vret-2797340">
                      {t("blog1")}
                    </a>
                  </h2>
                  <p style={{ textAlign: "justify" }}>
                  {t("blog_text_1")}{" "}
                    <br/>
                    <br/>
                  </p>
                  <a className="read-more"
                     target="_blank" 
                     href="https://www.verywellmind.com/virtual-reality-exposure-therapy-vret-2797340">
                    {t("Learn")}
                  </a>
                </motion.div>
              </div>
              <div className="col-md-4 col-sm-5 blog2" >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="blog-post"
                >
                  <div className="post-gallery">
                    <img src={blog2} alt="" height={250}  />
                  </div>
                  <h2>
                    <a target="_blank" 

                    href="https://www.circuitstream.com/blog/virtual-reality-therapy">
                      {t("blog2")}
                    </a>
                  </h2>
                  <p style={{ textAlign: "justify" }}>
                  {t("blog_text_2")}{" "}
                    <br/>
                    <br/>
                  </p>
                  <a className="read-more" target="_blank"  href="https://www.circuitstream.com/blog/virtual-reality-therapy">
                  {t("Learn")}
                  </a>
                </motion.div>
              </div>
              <div className="col-md-4 col-sm-5 blog3" >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="blog-post"
                >
                  <div className="post-gallery">
                    <img src={blog3} className="col-md-6" alt="" height={250}  />
                  </div>
                  <h2>
                    <a target="_blank" href="https://www.annualreviews.org/doi/abs/10.1146/annurev-clinpsy-081219-115923">
                     {t("blog3")}
                    </a>
                  </h2>
                  <p style={{ textAlign: "justify" }}>
                  {t("blog_text_3")}{" "}
                  </p>
                  <a className="read-more" 
                  href="https://www.annualreviews.org/doi/abs/10.1146/annurev-clinpsy-081219-115923"
                  target="_blank" 
                  >
                   {t("Learn")}
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
