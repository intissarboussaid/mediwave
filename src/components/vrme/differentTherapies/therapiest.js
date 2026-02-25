 
 

 {/* Different thérapies */}
 <section class="about-section" style={{ marginTop: "5%" }}>
 <div class="container">
   <div class="title-section">
     <motion.h1>
       {/* THÉRAPIES OFFERTES */}
       {/* {t("THERAPY")} */}
       physiotherapies
       {/* <br /> Medical and Healthcare Center */}
     </motion.h1>
     <motion.p
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.8 }}
       style={{ textAlign: "justify", marginTop: "2%" }}
     >
       {/* Il existe plusieurs types de troubles anxieux. Les phobies
       deviennent un problème de santé lorsque la peur interfère avec la
       capacité à effectuer des activités quotidiennes.Le traitement le
       plus recommandé pour les troubles anxieux est la thérapie par
       exposition. L’idée est une application de réalité virtuelle sur un
       casque VR pour projeter l’utilisateur dans un environnement
       virtuel dans différentes circonstances anxieuses afin qu’il
       s’habitue progressivement à ces circonstances et surmonte ses
       peurs et ses douleurs. */}
       {t("THERAPY_text")}
       {t("THERAPY_text_2")}
     </motion.p>
   </div>
   <div class="about-box">
     {/* 1 */}
     <div class="row" style={{ marginTop: "5%" }}>
       <div class="col-md-6 ">
         <motion.div
           whileHover={{ y: -6 }}
           transition={{ duration: 0.2 }}
           class="about-post"
           style={{ marginRight: "5%", marginLeft: "5%" }}
         >
           <a href="#">1</a>
           <div class="about-post-content">
             <h2>
               <a href="#">{t("CLAUSTROPHOBIA")}</a>
             </h2>
             <p style={{ textAlign: "justify" }}>
               {t("CLAUSTROPHOBIA_1")} <br />
               {t("CLAUSTROPHOBIA_2")}
             </p>
           </div>
         </motion.div>
       </div>

       <div class="col-md-6">
         <motion.div
           whileHover={{ y: -6 }}
           transition={{ duration: 0.2 }}
           class="about-post"
           style={{ marginRight: "5%", marginLeft: "5%" }}
         >
           <a href="#">
             <i class="fa fa-thumbs-up"></i>
           </a>
           <div class="about-post-content">
             <h2>
               <a>{t("soll")}</a>
             </h2>
             <p style={{ textAlign: "justify" }}>
               {t("APPLICATIONS_1")}{" "}
             </p>
           </div>
         </motion.div>
       </div>
     </div>
     <div class="row">
       <div
         class="col-md-6"
         // style={{backgroundColor:"red" }}
       >
         <motion.img
           whileHover={{ scale: 1.2 }}
           src={claustrophobie}
           alt=""
           style={{ marginRight: "5%", marginLeft: "5%" }}
           width={"90%"}
           height={350}
         />
       </div>

       <div class="col-md-6 ">
         <motion.img
           whileHover={{ scale: 1.2 }}
           src={assenseur}
           alt=""
           style={{ marginRight: "5%", marginLeft: "5%" }}
           width={"90%"}
           height={350}
         />
       </div>
     </div>
     {/* 2 */}
     <div class="row" style={{ marginTop: "7%" }}>
       <div class="col-md-6">
         <motion.div
           whileHover={{ y: -6 }}
           transition={{ duration: 0.2 }}
           class="about-post "
           style={{ marginRight: "5%", marginLeft: "5%" }}
         >
           <a>2</a>
           <div class="about-post-content">
             <h2>
               <a href="#">{t("AGORAPHOBIA")}</a>
             </h2>
             <p style={{ textAlign: "justify" }}>
               {t("ACROPHOBIA_1")} <br />
               {t("ACROPHOBIA_2")}
             </p>
           </div>
         </motion.div>
       </div>

       <div class="col-md-6">
         <motion.div
           whileHover={{ y: -6 }}
           transition={{ duration: 0.2 }}
           class="about-post"
           style={{ marginRight: "5%", marginLeft: "5%" }}
         >
           <a href="#">
             <i class="fa fa-thumbs-up"></i>
           </a>
           <div class="about-post-content">
             <h2>
               <a href="#">{t("soll")}</a>
             </h2>
             <p style={{ textAlign: "justify" }}>
               {t("APPLICATIONS_2")}{" "}
             </p>
           </div>
         </motion.div>
       </div>
     </div>
     <div class="row">
       <div class="col-md-6">
         <motion.img
           whileHover={{ scale: 1.2 }}
           src={acrophobie}
           alt=""
           style={{ marginRight: "5%", marginLeft: "5%" }}
           width={"90%"}
           height={350}
         />
       </div>

       <div class="col-md-6">
         <motion.img
           whileHover={{ scale: 1.2 }}
           src={acrophobieSolution}
           alt=""
           style={{ marginRight: "5%", marginLeft: "5%" }}
           width={"90%"}
           height={350}
         />
       </div>
     </div>
     {/* 3 */}
     <div class="row" style={{ marginTop: "7%" }}>
       <div class="col-md-6">
         <motion.div
           whileHover={{ y: -6 }}
           transition={{ duration: 0.2 }}
           class="about-post"
           style={{ marginRight: "5%", marginLeft: "5%" }}
         >
           <a>3</a>
           <div class="about-post-content">
             <h2>
               <a>{t("ARACHNOPHOBIA")}</a>
             </h2>
             <p style={{ textAlign: "justify" }}>
               {t("ARACHNOPHOBIA_1")} <br />
               {t("ARACHNOPHOBIA_2")}
             </p>
           </div>
         </motion.div>
       </div>
       <div class="col-md-6">
         <motion.div
           whileHover={{ y: -6 }}
           transition={{ duration: 0.2 }}
           class="about-post"
           style={{ marginRight: "5%", marginLeft: "5%" }}
         >
           <a href="#">
             <i class="fa fa-thumbs-up"></i>
           </a>
           <div class="about-post-content">
             <h2>
               <a href="#">{t("soll")}</a>
             </h2>
             <p style={{ textAlign: "justify" }}>
               {t("APPLICATIONS_3")}{" "}
             </p>
           </div>
         </motion.div>
       </div>
     </div>
     <div class="row">
       <div class="col-md-6">
         <motion.img
           whileHover={{ scale: 1.2 }}
           src={arachrophobie}
           alt=""
           style={{ marginRight: "5%", marginLeft: "5%" }}
           width={"90%"}
           height={350}
         />
       </div>

       <div class="col-md-6">
         <motion.img
           whileHover={{ scale: 1.2 }}
           src={arachrophobieSolution}
           alt=""
           style={{ marginRight: "5%", marginLeft: "5%" }}
           width={"90%"}
           height={350}
         />
       </div>
     </div>
     {/* 4 */}
     <div class="row" style={{ marginTop: "7%" }}>
       <motion.div
         whileHover={{ y: -6 }}
         transition={{ duration: 0.2 }}
         class="col-md-6"
       >
         <div
           class="about-post"
           style={{ marginRight: "5%", marginLeft: "5%" }}
         >
           <a href="#">4{/* <i class="fa fa-user-md"></i> */}</a>
           <div class="about-post-content">
             <h2>
               <a href="#">{t("AGORAPHOBIA")}</a>
             </h2>
             <p style={{ textAlign: "justify" }}>
               {t("AGORAPHOBIA_1")}
               <br />
               {t("AGORAPHOBIA_2")}
             </p>
           </div>
         </div>
       </motion.div>

       <div class="col-md-6">
         <motion.div
           whileHover={{ y: -6 }}
           transition={{ duration: 0.2 }}
           class="about-post"
           style={{ marginRight: "5%", marginLeft: "5%" }}
         >
           <a href="#">
             <i class="fa fa-thumbs-up"></i>
           </a>
           <div class="about-post-content">
             <h2>
               <a href="#">{t("soll")}</a>
             </h2>
             <p style={{ textAlign: "justify" }}>
               {t("APPLICATIONS_4_1")} {t("APPLICATIONS_4_2")}
             </p>
           </div>
         </motion.div>
       </div>
     </div>
     <div class="row">
       <div class="col-md-6">
         <motion.img
           whileHover={{ scale: 1.2 }}
           src={agora}
           alt=""
           style={{ marginRight: "5%", marginLeft: "5%" }}
           width={"90%"}
           height={350}
         />
       </div>

       <div class="col-md-6">
         <motion.img
           whileHover={{ scale: 1.2 }}
           src={agoraSol}
           alt=""
           style={{ marginRight: "5%", marginLeft: "5%" }}
           width={"90%"}
           height={350}
         />
       </div>
     </div>
     {/* 5 */}
     <div class="row" style={{ marginTop: "5%" }}>
       <div class="col-md-6">
         <motion.div
           whileHover={{ y: -6 }}
           transition={{ duration: 0.2 }}
           class="about-post"
           style={{ marginRight: "5%", marginLeft: "5%" }}
         >
           <a href="#">5{/* <i class="fa fa-user-md"></i> */}</a>
           <div class="about-post-content">
             <h2>
               <a href="#">{t("SOCIAL_PHOBIA")}</a>
             </h2>
             <p style={{ textAlign: "justify" }}>
               {t("SOCIAL_PHOBIA_1")}
               <br />
               {t("SOCIAL_PHOBIA_2")}
             </p>
           </div>
         </motion.div>
       </div>

       <div class="col-md-6">
         <motion.div
           whileHover={{ y: -6 }}
           transition={{ duration: 0.2 }}
           class="about-post"
           style={{ marginRight: "5%", marginLeft: "5%" }}
         >
           <a href="#">
             <i class="fa fa-thumbs-up"></i>
           </a>
           <div class="about-post-content">
             <h2>
               <a href="#">{t("soll")}</a>
             </h2>
             <p style={{ textAlign: "justify" }}>
                {t('SOCIAL_PHOBIA_Soll_1')} <br/>
                {t('SOCIAL_PHOBIA_Soll_2')} <br/>
                {t('SOCIAL_PHOBIA_Soll_3')} 
             </p>
           </div>
         </motion.div>
       </div>
     </div>
     <div class="row">
       <div class="col-md-6">
         <motion.img
           whileHover={{ scale: 1.2 }}
           src={social}
           alt=""
           style={{ marginRight: "5%", marginLeft: "5%" }}
           width={"90%"}
           height={350}
         />
       </div>

       <div class="col-md-6">
         <motion.img
           whileHover={{ scale: 1.2 }}
           src={glossophobie}
           alt=""
           style={{ marginRight: "5%", marginLeft: "5%" }}
           width={"90%"}
           height={350}
         />
       </div>
     </div>
     <div class="row" style={{ marginTop: "5%" }}>
       <div class="col-md-12">
         <div className="cen">
           <iframe
             width={"100%"}
             height="400"
             style={{ marginLeft: "", marginRight: "5%" }}
             src="https://www.youtube.com/embed/-UBeh1SzN10"
             title="YouTube video player"
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
           ></iframe>
         </div>
       </div>
     </div>
   </div>
 </div>
</section>


