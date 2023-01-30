
import './App.css';


import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Adult from './Component/Adult';
import Bollywood from './Component/Bollywood';
import Hollywood from './Component/Hollywood';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Fotter from './Component/Fotter';
import FotterBollywood from './Component/FotterBollywood';
import FotterHollywood from './Component/FotterHollywood';
import FotterAdult from './Component/FotterAdult';
import DMCA from './Component/DMCA';
import PrivacyPolicy from './Component/PrivacyPolicy';
import TermsofUse from './Component/TermsofUse';
import {Helmet} from 'react-helmet';
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import Page3 from './Component/Page3';
import ShareThis from './Component/ShareThis';

import Modal from './Component/Modal';
import Modal1 from './Component/Modal1';
import Modal2 from './Component/Modal2';
import Modal3 from './Component/Modal3';
import Modal4 from './Component/Modal4';
import Modal5 from './Component/Modal5';

import Againsttheice from './Component/Againsttheice/Againsttheice';
import MoAice from './Component/Againsttheice/MoAice';
import FdAice1 from './Component/Againsttheice/FdAice1';
import FdAice2 from './Component/Againsttheice/FdAice2';
import PromoAice1 from './Component/Againsttheice/PromoAice1';
import PromoAice2 from './Component/Againsttheice/PromoAice2';

import Kuttey from './Component/Kuttey-2023/Kuttey';
import DownloadKT1 from './Component/Kuttey-2023/DownloadKT1';
import DownloadKT2 from './Component/Kuttey-2023/DownloadKT2';
import AdsKT from './Component/Kuttey-2023/AdsKT';
import PromoKT1 from './Component/Kuttey-2023/PromoKT1';
import PromoKT2 from './Component/Kuttey-2023/PromoKT2';

import TaazaKhabar from './Component/TaazaKhabar-2023/TaazaKhabar';
import DownloadTK1 from './Component/TaazaKhabar-2023/DownloadTK1';
import DownloadTK2 from './Component/TaazaKhabar-2023/DownloadTK2';
import AdsTK from './Component/TaazaKhabar-2023/AdsTK';
import PromoTK1 from './Component/TaazaKhabar-2023/PromoTK1';
import PromoTK2 from './Component/TaazaKhabar-2023/PromoTK2';

import TheY from './Component/TheY-2023/TheY';
import DownloadY1 from './Component/TheY-2023/DownloadY1';
import DownloadY2 from './Component/TheY-2023/DownloadY2';
import AdsY from './Component/TheY-2023/AdsY';
import PromoY1 from './Component/TheY-2023/PromoY1';
import PromoY2 from './Component/TheY-2023/PromoY2';

import Pamasahe from './Component/Pamasahe-2023/Pamasahe';
import DownloadPSE1 from './Component/Pamasahe-2023/DownloadPSE1';
import DownloadPSE2 from './Component/Pamasahe-2023/DownloadPSE2';
import AdsAdult from './Component/Pamasahe-2023/AdsAdult';

import ILoveyou from './Component/ILoveyou-2023/ILoveyou';
import DownloadILU1 from './Component/ILoveyou-2023/DownloadILU1';
import DownloadILU2 from './Component/ILoveyou-2023/DownloadILU2';
import AdsILU from './Component/ILoveyou-2023/AdsILU';

import PlanB from './Component/PlanB-2023/PlanB';
import DownloadPLB1 from './Component/PlanB-2023/DownloadPLB1';
import DownloadPLB2 from './Component/PlanB-2023/DownloadPLB2';
import AdsPLB from './Component/PlanB-2023/AdsPLB';

import Thunivu from './Component/Thunivu-2023/Thunivu';
import DownloadTHU1 from './Component/Thunivu-2023/DownloadTHU1';
import DownloadTHU2 from './Component/Thunivu-2023/DownloadTHU2';
import AdsTHU from './Component/Thunivu-2023/AdsTHU';
import PromoTHU1 from './Component/Thunivu-2023/PromoTHU1';
import PromoTHU2 from './Component/Thunivu-2023/PromoTHU2';

import Varisu from './Component/Varisu-2023/Varisu';
import DownloadVRU1 from './Component/Varisu-2023/DownloadVRU1';
import DownloadVRU2 from './Component/Varisu-2023/DownloadVRU2';
import AdsVRU from './Component/Varisu-2023/AdsVRU';
import PromoVRU1 from './Component/Varisu-2023/PromoVRU2';
import PromoVRU2 from './Component/Varisu-2023/PromoVRU2';

import TrailByFire from './Component/TrailByFire-2023/TrailByFire';
import DownloadTBF1 from './Component/TrailByFire-2023/DownloadTBF1';
import DownloadTBF2 from './Component/TrailByFire-2023/DownloadTBF2';
import AdsTBF from './Component/TrailByFire-2023/AdsTBF';
import PromoTBF1 from './Component/TrailByFire-2023/PromoTBF1';
import PromoTBF2 from './Component/TrailByFire-2023/PromoTBF2';

import MumbaiMafia from './Component/MumbaiMafia-2023/MumbaiMafia';
import DownloadMUM1 from './Component/MumbaiMafia-2023/DownloadMUM1';
import DownloadMUM2 from './Component/MumbaiMafia-2023/DownloadMUM2';
import AdsMUM from './Component/MumbaiMafia-2023/AdsMUM';
import PromoMUM1 from './Component/MumbaiMafia-2023/PromoMUM1';
import PromoMUM2 from './Component/MumbaiMafia-2023/PromoMUM2';

import Chhatriwali from './Component/Chhatriwali-2023/Chhatriwali';
import DownloadCTW1 from './Component/Chhatriwali-2023/DownloadCTW1';
import DownloadCTW2 from './Component/Chhatriwali-2023/DownloadCTW2';
import AdsCTW from './Component/Chhatriwali-2023/AdsCTW';
import PromoCTW1 from './Component/Chhatriwali-2023/PromoCTW1';
import PromoCTW2 from './Component/Chhatriwali-2023/PromoCTW2';

import DharaviBank from './Component/DharaviBank-2022/DharaviBank';
import DownloadDRB1 from './Component/DharaviBank-2022/DownloadDRB1';
import DownloadDRB2 from './Component/DharaviBank-2022/DownloadDRB2';
import AdsDRB from './Component/DharaviBank-2022/AdsDRB';
import PromoDRB1 from './Component/DharaviBank-2022/PromoDRB1';
import PromoDRB2 from './Component/DharaviBank-2022/PromoDRB2';

import Kantara from './Component/Kantara-2022/Kantara';
import DownloadKTA1 from './Component/Kantara-2022/DownloadKTA1';
import DownloadKTA2 from './Component/Kantara-2022/DownloadKTA2';
import AdsKTA from './Component/Kantara-2022/AdsKTA';
import PromoKTA1 from './Component/Kantara-2022/PromoKTA1';
import PromoKTA2 from './Component/Kantara-2022/PromoKTA2';

import Freddy from './Component/Freddy-2022/Freddy';
import DownloadFED1 from './Component/Freddy-2022/DownloadFED1';
import DownloadFED2 from './Component/Freddy-2022/DownloadFED2';
import AdsFED from './Component/Freddy-2022/AdsFED';
import PromoFED1 from './Component/Freddy-2022/PromoFED1';
import PromoFED2 from './Component/Freddy-2022/PromoFED2';

import YoungKindaichiP1 from './Component/YoungKindaichi-2023/YoungKindaichiP1';
import DownloadFYKP1A from './Component/YoungKindaichi-2023/DownloadFYKP1A';
import DownloadFYKP1B from './Component/YoungKindaichi-2023/DownloadFYKP1B';
import AdsFYK from './Component/YoungKindaichi-2023/AdsFYK';
import YoungKindaichiP2 from './Component/YoungKindaichi-2023/YoungKindaichiP2';
import DownloadFYKP2A from './Component/YoungKindaichi-2023/DownloadFYKP2A';
import DownloadFYKP2B from './Component/YoungKindaichi-2023/DownloadFYKP2B';
import YoungKindaichiP3 from './Component/YoungKindaichi-2023/YoungKindaichiP3';
import DownloadFYKP3A from './Component/YoungKindaichi-2023/DownloadFYKP3A';
import DownloadFYKP3B from './Component/YoungKindaichi-2023/DownloadFYKP3B';

import Dhokha from './Component/Dhokha-2022/Dhokha';
import DownloadDOK1 from './Component/Dhokha-2022/DownloadDOK1';
import DownloadDOK2 from './Component/Dhokha-2022/DownloadDOK2';
import AdsDOK from './Component/Dhokha-2022/AdsDOK';
import PromoDOK1 from './Component/Dhokha-2022/PromoDOK1';
import PromoDOK2 from './Component/Dhokha-2022/PromoDOK2';

import AnAffairToForget from './Component/AnAffairToForget-2022/AnAffairToForget';
import DownloadATF1 from './Component/AnAffairToForget-2022/DownloadATF1';
import DownloadATF2 from './Component/AnAffairToForget-2022/DownloadATF2';
import AdsATF from './Component/AnAffairToForget-2022/AdsATF';

import ChingariChaubey from './Component/ChingariChaubey-2023/ChingariChaubey';
import DownloadCCB1 from './Component/ChingariChaubey-2023/DownloadCCB1';
import DownloadCCB2 from './Component/ChingariChaubey-2023/DownloadCCB2';
import AdsCCB from './Component/ChingariChaubey-2023/AdsCCB';

import VirginBahus from './Component/VirginBahus-2023/VirginBahus';
import DownloadVJB1 from './Component/VirginBahus-2023/DownloadVJB1';
import DownloadVJB2 from './Component/VirginBahus-2023/DownloadVJB2';
import AdsVJB from './Component/VirginBahus-2023/AdsVJB';

import WalkManP1 from './Component/WalkManP1-2022/WalkManP1';
import DownloadW1Man1 from './Component/WalkManP1-2022/DownloadW1Man1';
import DownloadW1Man2 from './Component/WalkManP1-2022/DownloadW1Man2';
import AdsW1Man from './Component/WalkManP1-2022/AdsW1Man';

import WalkManP2 from './Component/WalkManP2-2022/WalkManP2';
import DownloadW2Man1 from './Component/WalkManP2-2022/DownloadW2Man1';
import DownloadW2Man2 from './Component/WalkManP2-2022/DownloadW2Man2';
import AdsW2Man from './Component/WalkManP2-2022/AdsW2Man';

import WalkManP3 from './Component/WalkManP3-2022/WalkManP3';
import DownloadW3Man1 from './Component/WalkManP3-2022/DownloadW3Man1';
import DownloadW3Man2 from './Component/WalkManP3-2022/DownloadW3Man2';
import AdsW3Man from './Component/WalkManP3-2022/AdsW3Man';


import TheLastHeist from './Component/TheLastHeist-2022/TheLastHeist';
import DownloadTLH1 from './Component/TheLastHeist-2022/DownloadTLH1';
import DownloadTLH2 from './Component/TheLastHeist-2022/DownloadTLH2';
import AdsTLH from './Component/TheLastHeist-2022/AdsTLH';
import PromoTLH1 from './Component/TheLastHeist-2022/PromoTLH1';
import PromoTLH2 from './Component/TheLastHeist-2022/PromoTLH2';

import PlayDead from './Component/PlayDead-2023/PlayDead';
import DownloadPLD1 from './Component/PlayDead-2023/DownloadPLD1';
import DownloadPLD2 from './Component/PlayDead-2023/DownloadPLD2';
import AdsPLD from './Component/PlayDead-2023/AdsPLD';
import PromoPLD1 from './Component/PlayDead-2023/PromoPLD1';
import PromoPLD2 from './Component/PlayDead-2023/PromoPLD2';

import TheOldWay from './Component/TheOldWay-2023/TheOldWay';
import DownloadTOW1 from './Component/TheOldWay-2023/DownloadTOW1';
import DownloadTOW2 from './Component/TheOldWay-2023/DownloadTOW2';
import AdsTOW from './Component/TheOldWay-2023/AdsTOW';
import PromoTOW1 from './Component/TheOldWay-2023/PromoTOW1';
import PromoTOW2 from './Component/TheOldWay-2023/PromoTOW2';

import Plane from './Component/Plane-2023/Plane';
import DownloadPLN1 from './Component/Plane-2023/DownloadPLN1';
import DownloadPLN2 from './Component/Plane-2023/DownloadPLN2';
import AdsPLN from './Component/Plane-2023/AdsPLN';
import PromoPLN1 from './Component/Plane-2023/PromoPLN1';
import PromoPLN2 from './Component/Plane-2023/PromoPLN2';

import Pathaan from './Component/Pathaan-2023/Pathaan';
import DownloadPTN1 from './Component/Pathaan-2023/DownloadPTN1';
import DownloadPTN2 from './Component/Pathaan-2023/DownloadPTN2';
import AdsPTN from './Component/Pathaan-2023/AdsPTN';
import PromoPTN1 from './Component/Pathaan-2023/PromoPTN1';
import PromoPTN2 from './Component/Pathaan-2023/PromoPTN2';

import MassionMajnu from './Component/MassionMajnu-2023/MassionMajnu';
import DownloadMMJ1 from './Component/MassionMajnu-2023/DownloadMMJ1';
import DownloadMMJ2 from './Component/MassionMajnu-2023/DownloadMMJ2';
import AdsMMJ from './Component/MassionMajnu-2023/AdsMMJ';
import PromoMMJ1 from './Component/MassionMajnu-2023/PromoMMJ1';
import PromoMMJ2 from './Component/MassionMajnu-2023/PromoMMJ2';

import Transfusion from './Component/Transfusion-2023/Transfusion';
import DownloadTFS1 from './Component/Transfusion-2023/DownloadTFS1';
import DownloadTFS2 from './Component/Transfusion-2023/DownloadTFS2';
import AdsTFS from './Component/Transfusion-2023/AdsTFS';
import PromoTFS1 from './Component/Transfusion-2023/PromoTFS1';
import PromoTFS2 from './Component/Transfusion-2023/PromoTFS2';

import Devotion from './Component/Devotion-2023/Devotion';
import DownloadDVT1 from './Component/Devotion-2023/DownloadDVT1';
import DownloadDVT2 from './Component/Devotion-2023/DownloadDVT2';
import AdsDVT from './Component/Devotion-2023/AdsDVT';
import PromoDVT1 from './Component/Devotion-2023/PromoDVT1';
import PromoDVT2 from './Component/Devotion-2023/PromoDVT2';

import Narvik from './Component/Narvik-2023/Narvik';
import DownloadNRK1 from './Component/Narvik-2023/DownloadNRK1';
import DownloadNRK2 from './Component/Narvik-2023/DownloadNRK2';
import AdsNRK from './Component/Narvik-2023/AdsNRK';
import PromoNRK1 from './Component/Narvik-2023/PromoNRK1';
import PromoNRK2 from './Component/Narvik-2023/PromoNRK2';

import Babylon from './Component/Babylon-2023/Babylon';
import DownloadBYL1 from './Component/Babylon-2023/DownloadBYL1';
import DownloadBYL2 from './Component/Babylon-2023/DownloadBYL2';
import AdsBYL from './Component/Babylon-2023/AdsBYL';
import PromoBYL1 from './Component/Babylon-2023/PromoBYL1';
import PromoBYL2 from './Component/Babylon-2023/PromoBYL2';

import OperationFortune from './Component/OperationFortune-2023/OperationFortune';
import DownloadOFG1 from './Component/OperationFortune-2023/DownloadOFG1';
import DownloadOFG2 from './Component/OperationFortune-2023/DownloadOFG2';
import AdsOFG from './Component/OperationFortune-2023/AdsOFG';
import PromoOFG1 from './Component/OperationFortune-2023/PromoOFG1';
import PromoOFG2 from './Component/OperationFortune-2023/PromoOFG2';

import JungE from './Component/JungE-2023/JungE';
import DownloadJGE1 from './Component/JungE-2023/DownloadJGE1';
import DownloadJGE2 from './Component/JungE-2023/DownloadJGE2';
import AdsJGE from './Component/JungE-2023/AdsJGE';
import PromoJGE1 from './Component/JungE-2023/PromoJGE1';
import PromoJGE2 from './Component/JungE-2023/PromoJGE2';

import Shahmaran from './Component/Shahmaran-2023/Shahmaran';
import DownloadSMR1 from './Component/Shahmaran-2023/DownloadSMR1';
import DownloadSMR2 from './Component/Shahmaran-2023/DownloadSMR2';
import AdsSMR from './Component/Shahmaran-2023/AdsSMR';
import PromoSMR1 from './Component/Shahmaran-2023/PromoSMR1';
import PromoSMR2 from './Component/Shahmaran-2023/PromoSMR2';

import VikingsValhallaP1 from './Component/VikingsValhalla-2023/VikingsValhallaP1';
import DownloadVKVP1A from './Component/VikingsValhalla-2023/DownloadVKVP1A';
import DownloadVKVP1B from './Component/VikingsValhalla-2023/DownloadVKVP1B';
import PromoVKVP1A from './Component/VikingsValhalla-2023/PromoVKVP1A';
import PromoVKVP1B from './Component/VikingsValhalla-2023/PromoVKVP1B';
import AdsVKV from './Component/VikingsValhalla-2023/AdsVKV';

import VikingsValhallaP2 from './Component/VikingsValhalla-2023/VikingsValhallaP2';
import DownloadVKVP2A from './Component/VikingsValhalla-2023/DownloadVKVP2A';
import DownloadVKVP2B from './Component/VikingsValhalla-2023/DownloadVKVP2B';
import PromoVKVP2A from './Component/VikingsValhalla-2023/PromoVKVP2A';
import PromoVKVP2B from './Component/VikingsValhalla-2023/PromoVKVP2B';

import Hunters from './Component/Hunters-2023/Hunters';
import DownloadHUN1 from './Component/Hunters-2023/DownloadHUN1';
import DownloadHUN2 from './Component/Hunters-2023/DownloadHUN2';
import AdsHUN from './Component/Hunters-2023/AdsHUN';
import PromoHUN1 from './Component/Hunters-2023/PromoHUN1';
import PromoHUN2 from './Component/Hunters-2023/PromoHUN2';

import LastOfUs from './Component/LastOfUs-2023/LastOfUs';
import DownloadLFU1 from './Component/LastOfUs-2023/DownloadLFU1';
import DownloadLFU2 from './Component/LastOfUs-2023/DownloadLFU2';
import AdsLFU from './Component/LastOfUs-2023/AdsLFU';
import PromoLFU1 from './Component/LastOfUs-2023/PromoLFU1';
import PromoLFU2 from './Component/LastOfUs-2023/PromoLFU2';

import GinnyAndGeorgia from './Component/GinnyAndGeorgia-2023/GinnyAndGeorgia';
import DownloadGAG1 from './Component/GinnyAndGeorgia-2023/DownloadGAG1';
import DownloadGAG2 from './Component/GinnyAndGeorgia-2023/DownloadGAG2';
import AdsGAG from './Component/GinnyAndGeorgia-2023/AdsGAG';
import PromoGAG1 from './Component/GinnyAndGeorgia-2023/PromoGAG1';
import PromoGAG2 from './Component/GinnyAndGeorgia-2023/PromoGAG2';

import LustDaries from './Component/LustDaries-2023/LustDaries';
import DownloadLUD1 from './Component/LustDaries-2023/DownloadLUD1';
import DownloadLUD2 from './Component/LustDaries-2023/DownloadLUD2';
import AdsLUD from './Component/LustDaries-2023/AdsLUD';

import Darji from './Component/Darji-2022/Darji';
import DownloadDAJ1 from './Component/Darji-2022/DownloadDAJ1';
import DownloadDAJ2 from './Component/Darji-2022/DownloadDAJ2';
import AdsDAJ from './Component/Darji-2022/AdsDAJ';

import TeekhiChutteny from './Component/TeekhiChutteny-2022/TeekhiChutteny';
import DownloadTCT1 from './Component/TeekhiChutteny-2022/DownloadTCT1';
import DownloadTCT2 from './Component/TeekhiChutteny-2022/DownloadTCT2';
import AdsTCT from './Component/TeekhiChutteny-2022/AdsTCT';

import Imli from './Component/Imli-2023/Imli';
import DownloadIMI1 from './Component/Imli-2023/DownloadIMI1';
import DownloadIMI2 from './Component/Imli-2023/DownloadIMI2';
import AdsIMI from './Component/Imli-2023/AdsIMI';

import Vaalvi from './Component/Vaalvi-2023/Vaalvi';
import DownloadVAV1 from './Component/Vaalvi-2023/DownloadVAV1';
import DownloadVAV2 from './Component/Vaalvi-2023/DownloadVAV2';
import AdsVAV from './Component/Vaalvi-2023/AdsVAV';
import PromoVAV1 from './Component/Vaalvi-2023/PromoVAV1';
import PromoVAV2 from './Component/Vaalvi-2023/PromoVAV2';


function App() {

 

  return (  
    
    
    <div className="App">
   
    <div className="container">
    <p></p>   
    <img  src="logo.png" className="card-img-top" height={60} width={10} alt="Uwatch4free Movies???" /></div>
    <p></p>

    <Navbar/>
  
<Helmet>
<title>Uwatch4free Movies???</title>
<meta  name='description' content='Watch Latest Movies and TV-Series Online Free'/>
<meta  name='keywords' content='mxplayer,mxplayermovies,streaming,latest movies,online tv,latest free movies,watch latest movies online,latest full movies online' />
<meta name="robots" content="index, follow"/>
<meta name="revisit-after" content="1 days"/>
<meta property="og:site_name" content="Uwatch4free Movies??? | Watch Latest Movies and TV-Series Online Free" />
	<meta property="og:type" content="website" />
  <meta property="og:title" content="Uwatch4free Movies??? | Watch Latest Movies and TV-Series Online Free" />
	<meta property="og:description" content="Watch Latest Movies and TV-Series Online Free" />
  <meta property="og:url" content="https://mxplayermovies.netlify.app/" />
	<meta property="og:image" content="https://mxplayermovies.netlify.app/og_image.jpg" />
	<meta property="og:image:secure_url" content="https://mxplayermovies.netlify.app/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Uwatchfree??? | Watch Latest Movies and TV-Series Online Free" />
	<meta name="twitter:description" content=" Watch Latest Movies and TV-Series Online Free" />
	<meta name="twitter:image" content="https://mxplayermovies.netlify.app/logo.png" />
  
</Helmet>
    <BrowserRouter>
    <Routes> 
    
    <Route path="/" element={<Home />} exact/>
    <Route path="hollywood" element={<Hollywood /> } exact />
    <Route path="bollywood" element={<Bollywood />} exact />
    <Route path="adult" element={<Adult />} exact />
    <Route path="Fotter" element={<Fotter />} exact />
    <Route path="FotterBollywood" element={<FotterBollywood />} exact />
    <Route path="FotterHollywood" element={<FotterHollywood />} exact />
    <Route path="FotterAdult" element={<FotterAdult />} exact />
    <Route path="page1" element={<Page1 />} exact />
   
    <Route path="page2" element={<Page2 />} exact />
    <Route path="page3" element={<Page3 />} exact />
    <Route path="ShareThis" element={<ShareThis />} exact />
    <Route path="DMCA" element={<DMCA />} exact />
    <Route path="PrivacyPolicy" element={<PrivacyPolicy />} exact />
    <Route path="TermsofUse" element={<TermsofUse />} exact />


    <Route path="Againsttheice" element={<Againsttheice />} exact />
    <Route path="FdAice1" element={<FdAice1 />} exact />
    <Route path="FdAice2" element={<FdAice2 />} exact />
    <Route path="MoAice" element={<MoAice />} exact />
    <Route path="PromoAice1" element={<PromoAice1 />} exact />
    <Route path="PromoAice2" element={<PromoAice2 />} exact />
    
    <Route path="Kuttey-2023" element={<Kuttey />} exact />
    <Route path="DownloadKT1" element={<DownloadKT1 />} exact />
    <Route path="DownloadKT2" element={<DownloadKT2 />} exact />
    <Route path="AdsKT" element={<AdsKT />} exact />
    <Route path="PromoKT1" element={<PromoKT1 />} exact />
    <Route path="PromoKT2" element={<PromoKT2 />} exact />
    
    <Route path="TaazaKhabar-2023" element={<TaazaKhabar />} exact />
    <Route path="DownloadTK1" element={<DownloadTK1 />} exact />
    <Route path="DownloadTK2" element={<DownloadTK2 />} exact />
    <Route path="AdsTK" element={<AdsTK />} exact />
    <Route path="PromoTK1" element={<PromoTK1 />} exact />
    <Route path="PromoTK2" element={<PromoTK2 />} exact />
    
    <Route path="TheY-2023" element={<TheY />} exact />
    <Route path="DownloadY1" element={<DownloadY1 />} exact />
    <Route path="DownloadY2" element={<DownloadY2 />} exact />
    <Route path="AdsY" element={<AdsY />} exact />
    <Route path="PromoY1" element={<PromoY1 />} exact />
    <Route path="PromoY2" element={<PromoY2 />} exact />
    
    <Route path="Pamasahe-2023" element={<Pamasahe />} exact />
    <Route path="DownloadPSE1" element={<DownloadPSE1 />} exact />
    <Route path="DownloadPSE2" element={<DownloadPSE2 />} exact />
    <Route path="AdsAdult" element={<AdsAdult />} exact />
    
    <Route path="ILoveyou-2023" element={<ILoveyou />} exact />
    <Route path="DownloadILU1" element={<DownloadILU1 />} exact />
    <Route path="DownloadILU2" element={<DownloadILU2 />} exact />
    <Route path="AdsILU" element={<AdsILU />} exact />
    
    <Route path="PlanB-2023" element={<PlanB />} exact />
    <Route path="DownloadPLB1" element={<DownloadPLB1 />} exact />
    <Route path="DownloadPLB2" element={<DownloadPLB2 />} exact />
    <Route path="AdsPLB" element={<AdsPLB />} exact />
    
    <Route path="Thunivu-2023" element={<Thunivu />} exact />
    <Route path="DownloadTHU1" element={<DownloadTHU1 />} exact />
    <Route path="DownloadTHU2" element={<DownloadTHU2 />} exact />
    <Route path="AdsTHU" element={<AdsTHU />} exact />
    <Route path="PromoTHU1" element={<PromoTHU1 />} exact />
    <Route path="PromoTHU2" element={<PromoTHU2 />} exact />
    
    <Route path="Varisu-2023" element={<Varisu />} exact />
    <Route path="DownloadVRU1" element={<DownloadVRU1 />} exact />
    <Route path="DownloadVRU2" element={<DownloadVRU2 />} exact />
    <Route path="AdsVRU" element={<AdsVRU />} exact />
    <Route path="PromoVRU1" element={<PromoVRU1 />} exact />
    <Route path="PromoVRU2" element={<PromoVRU2 />} exact />
    
    <Route path="TrailByFire-2023" element={<TrailByFire />} exact />
    <Route path="DownloadTBF1" element={<DownloadTBF1 />} exact />
    <Route path="DownloadTBF2" element={<DownloadTBF2 />} exact />
    <Route path="AdsTBF" element={<AdsTBF />} exact />
    <Route path="PromoTBF1" element={<PromoTBF1 />} exact />
    <Route path="PromoTBF2" element={<PromoTBF2 />} exact />
    
    <Route path="MumbaiMafia-2023" element={<MumbaiMafia />} exact />
    <Route path="DownloadMUM1" element={<DownloadMUM1 />} exact />
    <Route path="DownloadMUM2" element={<DownloadMUM2 />} exact />
    <Route path="AdsMUM" element={<AdsMUM />} exact />
    <Route path="PromoMUM1" element={<PromoMUM1 />} exact />
    <Route path="PromoMUM2" element={<PromoMUM2 />} exact />
    
    <Route path="Chhatriwali-2023" element={<Chhatriwali />} exact />
    <Route path="DownloadCTW1" element={<DownloadCTW1 />} exact />
    <Route path="DownloadCTW2" element={<DownloadCTW2 />} exact />
    <Route path="AdsCTW" element={<AdsCTW />} exact />
    <Route path="PromoCTW1" element={<PromoCTW1 />} exact />
    <Route path="PromoCTW2" element={<PromoCTW2 />} exact />
    
    <Route path="DharaviBank-2022" element={<DharaviBank />} exact />
    <Route path="DownloadDRB1" element={<DownloadDRB1 />} exact />
    <Route path="DownloadDRB2" element={<DownloadDRB2 />} exact />
    <Route path="AdsDRB" element={<AdsDRB />} exact />
    <Route path="PromoDRB1" element={<PromoDRB1 />} exact />
    <Route path="PromoDRB2" element={<PromoDRB2 />} exact />
    
    <Route path="Kantara-2022" element={<Kantara />} exact />
    <Route path="DownloadKTA1" element={<DownloadKTA1 />} exact />
    <Route path="DownloadKTA2" element={<DownloadKTA2 />} exact />
    <Route path="AdsKTA" element={<AdsKTA />} exact />
    <Route path="PromoKTA1" element={<PromoKTA1 />} exact />
    <Route path="PromoKTA2" element={<PromoKTA2 />} exact />
    
    <Route path="Freddy-2022" element={<Freddy />} exact />
    <Route path="DownloadFED1" element={<DownloadFED1 />} exact />
    <Route path="DownloadFED2" element={<DownloadFED2 />} exact />
    <Route path="AdsFED" element={<AdsFED />} exact />
    <Route path="PromoFED1" element={<PromoFED1 />} exact />
    <Route path="PromoFED2" element={<PromoFED2 />} exact />
    

    
    <Route path="Dhokha-2022" element={<Dhokha />} exact />
    <Route path="DownloadDOK1" element={<DownloadDOK1 />} exact />
    <Route path="DownloadDOK2" element={<DownloadDOK2 />} exact />
    <Route path="AdsDOK" element={<AdsDOK />} exact />
    <Route path="PromoDOK1" element={<PromoDOK1 />} exact />
    <Route path="PromoDOK2" element={<PromoDOK2 />} exact />
    
    <Route path="AnAffairToForget-2022" element={<AnAffairToForget />} exact />
    <Route path="DownloadATF1" element={<DownloadATF1 />} exact />
    <Route path="DownloadATF2" element={<DownloadATF2 />} exact />
    <Route path="AdsATF" element={<AdsATF />} exact />
    
    <Route path="ChingariChaubey-2023" element={<ChingariChaubey />} exact />
    <Route path="DownloadCCB1" element={<DownloadCCB1 />} exact />
    <Route path="DownloadCCB2" element={<DownloadCCB2 />} exact />
    <Route path="AdsCCB" element={<AdsCCB />} exact />
    
    <Route path="VirginBahus-2023" element={<VirginBahus />} exact />
    <Route path="DownloadVJB1" element={<DownloadVJB1 />} exact />
    <Route path="DownloadVJB2" element={<DownloadVJB2 />} exact />
    <Route path="AdsVJB" element={<AdsVJB />} exact />
    
    <Route path="WalkManP1-2022" element={<WalkManP1 />} exact />
    <Route path="DownloadW1Man1" element={<DownloadW1Man1 />} exact />
    <Route path="DownloadW1Man2" element={<DownloadW1Man2 />} exact />
    <Route path="AdsW1Man" element={<AdsW1Man />} exact />
    
    <Route path="WalkManP2-2022" element={<WalkManP2 />} exact />
    <Route path="DownloadW2Man1" element={<DownloadW2Man1 />} exact />
    <Route path="DownloadW2Man2" element={<DownloadW2Man2 />} exact />
    <Route path="AdsW2Man" element={<AdsW2Man />} exact />
    
    <Route path="WalkManP3-2022" element={<WalkManP3 />} exact />
    <Route path="DownloadW3Man1" element={<DownloadW3Man1 />} exact />
    <Route path="DownloadW3Man2" element={<DownloadW3Man2 />} exact />
    <Route path="AdsW3Man" element={<AdsW3Man />} exact />

    <Route path="TheLastHeist-2022" element={<TheLastHeist />} exact />
    <Route path="DownloadTLH1" element={<DownloadTLH1 />} exact />
    <Route path="DownloadTLH2" element={<DownloadTLH2 />} exact />
    <Route path="AdsTLH" element={<AdsTLH />} exact />
    <Route path="PromoTLH1" element={<PromoTLH1 />} exact />
    <Route path="PromoTLH2" element={<PromoTLH2 />} exact />
    
    <Route path="PlayDead-2023" element={<PlayDead />} exact />
    <Route path="DownloadPLD1" element={<DownloadPLD1 />} exact />
    <Route path="DownloadPLD2" element={<DownloadPLD2 />} exact />
    <Route path="AdsPLD" element={<AdsPLD />} exact />
    <Route path="PromoPLD1" element={<PromoPLD1 />} exact />
    <Route path="PromoPLD2" element={<PromoPLD2 />} exact />
    
    <Route path="TheOldWay-2023" element={<TheOldWay />} exact />
    <Route path="DownloadTOW1" element={<DownloadTOW1 />} exact />
    <Route path="DownloadTOW2" element={<DownloadTOW2 />} exact />
    <Route path="AdsTOW" element={<AdsTOW />} exact />
    <Route path="PromoTOW1" element={<PromoTOW1 />} exact />
    <Route path="PromoTOW2" element={<PromoTOW2 />} exact />
    
    <Route path="Plane-2023" element={<Plane />} exact />
    <Route path="DownloadPLN1" element={<DownloadPLN1 />} exact />
    <Route path="DownloadPLN2" element={<DownloadPLN2 />} exact />
    <Route path="AdsPLN" element={<AdsPLN />} exact />
    <Route path="PromoPLN1" element={<PromoPLN1 />} exact />
    <Route path="PromoPLN2" element={<PromoPLN2 />} exact />
    
    <Route path="Pathaan-2023" element={<Pathaan />} exact />
    <Route path="DownloadPTN1" element={<DownloadPTN1 />} exact />
    <Route path="DownloadPTN2" element={<DownloadPTN2 />} exact />
    <Route path="AdsPTN" element={<AdsPTN />} exact />
    <Route path="PromoPTN1" element={<PromoPTN1 />} exact />
    <Route path="PromoPTN2" element={<PromoPTN2 />} exact />
    
    <Route path="MassionMajnu-2023" element={<MassionMajnu />} exact />
    <Route path="DownloadMMJ1" element={<DownloadMMJ1 />} exact />
    <Route path="DownloadMMJ2" element={<DownloadMMJ2 />} exact />
    <Route path="AdsMMJ" element={<AdsMMJ />} exact />
    <Route path="PromoMMJ1" element={<PromoMMJ1 />} exact />
    <Route path="PromoMMJ2" element={<PromoMMJ2 />} exact />
    
    <Route path="Transfusion-2023" element={<Transfusion />} exact />
    <Route path="DownloadTFS1" element={<DownloadTFS1 />} exact />
    <Route path="DownloadTFS2" element={<DownloadTFS2 />} exact />
    <Route path="AdsTFS" element={<AdsTFS />} exact />
    <Route path="PromoTFS1" element={<PromoTFS1 />} exact />
    <Route path="PromoTFS2" element={<PromoTFS2 />} exact />
    
    <Route path="Devotion-2023" element={<Devotion />} exact />
    <Route path="DownloadDVT1" element={<DownloadDVT1 />} exact />
    <Route path="DownloadDVT2" element={<DownloadDVT2 />} exact />
    <Route path="AdsDVT" element={<AdsDVT />} exact />
    <Route path="PromoDVT1" element={<PromoDVT1 />} exact />
    <Route path="PromoDVT2" element={<PromoDVT2 />} exact />

    <Route path="Narvik-2023" element={<Narvik />} exact />
    <Route path="DownloadNRK1" element={<DownloadNRK1 />} exact />
    <Route path="DownloadNRK2" element={<DownloadNRK2 />} exact />
    <Route path="AdsNRK" element={<AdsNRK />} exact />
    <Route path="PromoNRK1" element={<PromoNRK1 />} exact />
    <Route path="PromoNRK2" element={<PromoNRK2 />} exact />

    <Route path="Babylon-2023" element={<Babylon />} exact />
    <Route path="DownloadBYL1" element={<DownloadBYL1 />} exact />
    <Route path="DownloadBYL2" element={<DownloadBYL2 />} exact />
    <Route path="AdsBYL" element={<AdsBYL />} exact />
    <Route path="PromoBYL1" element={<PromoBYL1 />} exact />
    <Route path="PromoBYL2" element={<PromoBYL2 />} exact />

    <Route path="OperationFortune-2023" element={<OperationFortune />} exact />
    <Route path="DownloadOFG1" element={<DownloadOFG1 />} exact />
    <Route path="DownloadOFG2" element={<DownloadOFG2 />} exact />
    <Route path="AdsOFG" element={<AdsOFG />} exact />
    <Route path="PromoOFG1" element={<PromoOFG1 />} exact />
    <Route path="PromoOFG2" element={<PromoOFG2 />} exact />

    <Route path="JungE-2023" element={<JungE />} exact />
    <Route path="DownloadJGE1" element={<DownloadJGE1 />} exact />
    <Route path="DownloadJGE2" element={<DownloadJGE2 />} exact />
    <Route path="AdsJGE" element={<AdsJGE />} exact />
    <Route path="PromoJGE1" element={<PromoJGE1 />} exact />
    <Route path="PromoJGE2" element={<PromoJGE2 />} exact />

    <Route path="Shahmaran-2023" element={<Shahmaran />} exact />
    <Route path="DownloadSMR1" element={<DownloadSMR1 />} exact />
    <Route path="DownloadSMR2" element={<DownloadSMR2 />} exact />
    <Route path="AdsSMR" element={<AdsSMR />} exact />
    <Route path="PromoSMR1" element={<PromoSMR1 />} exact />
    <Route path="PromoSMR2" element={<PromoSMR2 />} exact />

    <Route path="YoungKindaichiP1-2023" element={<YoungKindaichiP1 />} exact />
    <Route path="DownloadFYKP1A" element={<DownloadFYKP1A />} exact />
    <Route path="DownloadFYKP1B" element={<DownloadFYKP1B />} exact />
    <Route path="AdsFYK" element={<AdsFYK />} exact />
    
    <Route path="YoungKindaichiP2-2023" element={<YoungKindaichiP2 />} exact />
    <Route path="DownloadFYKP2A" element={<DownloadFYKP2A />} exact />
    <Route path="DownloadFYKP2B" element={<DownloadFYKP2B />} exact />
    
    <Route path="YoungKindaichiP3-2023" element={<YoungKindaichiP3 />} exact />
    <Route path="DownloadFYKP3A" element={<DownloadFYKP3A />} exact />
    <Route path="DownloadFYKP3B" element={<DownloadFYKP3B />} exact />

    <Route path="VikingsValhallaP1-2023" element={<VikingsValhallaP1 />} exact />
    <Route path="DownloadVKVP1A" element={<DownloadVKVP1A />} exact />
    <Route path="DownloadVKVP1B" element={<DownloadVKVP1B />} exact />
    <Route path="PromoVKVP1A" element={<PromoVKVP1A />} exact />
    <Route path="PromoVKVP1B" element={<PromoVKVP1B />} exact />
    <Route path="AdsVKV" element={<AdsVKV />} exact />   

    <Route path="VikingsValhallaP2-2023" element={<VikingsValhallaP2 />} exact />
    <Route path="DownloadVKVP2A" element={<DownloadVKVP2A />} exact />
    <Route path="DownloadVKVP2B" element={<DownloadVKVP2B />} exact />
    <Route path="PromoVKVP2A" element={<PromoVKVP2A />} exact />
    <Route path="PromoVKVP2B" element={<PromoVKVP2B />} exact />

    <Route path="Hunters-2023" element={<Hunters />} exact />
    <Route path="DownloadHUN1" element={<DownloadHUN1 />} exact />
    <Route path="DownloadHUN2" element={<DownloadHUN2 />} exact />
    <Route path="AdsHUN" element={<AdsHUN />} exact />
    <Route path="PromoHUN1" element={<PromoHUN1 />} exact />
    <Route path="PromoHUN2" element={<PromoHUN2 />} exact />

    <Route path="LastOfUs-2023" element={<LastOfUs />} exact />
    <Route path="DownloadLFU1" element={<DownloadLFU1 />} exact />
    <Route path="DownloadLFU2" element={<DownloadLFU2 />} exact />
    <Route path="AdsLFU" element={<AdsLFU />} exact />
    <Route path="PromoLFU1" element={<PromoLFU1 />} exact />
    <Route path="PromoLFU2" element={<PromoLFU2 />} exact />

    <Route path="GinnyAndGeorgia-2023" element={<GinnyAndGeorgia />} exact />
    <Route path="DownloadGAG1" element={<DownloadGAG1 />} exact />
    <Route path="DownloadGAG2" element={<DownloadGAG2 />} exact />
    <Route path="AdsGAG" element={<AdsGAG />} exact />
    <Route path="PromoGAG1" element={<PromoGAG1 />} exact />
    <Route path="PromoGAG2" element={<PromoGAG2 />} exact />

    <Route path="LustDaries-2023" element={<LustDaries />} exact />
    <Route path="DownloadLUD1" element={<DownloadLUD1 />} exact />
    <Route path="DownloadLUD2" element={<DownloadLUD2 />} exact />
    <Route path="AdsLUD" element={<AdsLUD />} exact />

    <Route path="Darji-2022" element={<Darji />} exact />
    <Route path="DownloadDAJ1" element={<DownloadDAJ1 />} exact />
    <Route path="DownloadDAJ2" element={<DownloadDAJ2 />} exact />
    <Route path="AdsDAJ" element={<AdsDAJ />} exact />

    <Route path="TeekhiChutteny-2022" element={<TeekhiChutteny />} exact />
    <Route path="DownloadTCT1" element={<DownloadTCT1 />} exact />
    <Route path="DownloadTCT2" element={<DownloadTCT2 />} exact />
    <Route path="AdsTCT" element={<AdsTCT />} AdsTCT />

    <Route path="Imli-2023" element={<Imli />} exact />
    <Route path="DownloadIMI1" element={<DownloadIMI1 />} exact />
    <Route path="DownloadIMI2" element={<DownloadIMI2 />} exact />
    <Route path="AdsIMI" element={<AdsIMI />} AdsTCT />

    <Route path="Vaalvi-2023" element={<Vaalvi />} exact />
    <Route path="DownloadVAV1" element={<DownloadVAV1 />} exact />
    <Route path="DownloadVAV2" element={<DownloadVAV2 />} exact />
    <Route path="AdsVAV" element={<AdsVAV />} exact />
    <Route path="PromoVAV1" element={<PromoVAV1 />} exact />
    <Route path="PromoVAV2" element={<PromoVAV2 />} exact />





    <Route path="Modal" element={<Modal />} exact />
    <Route path="Modal1" element={<Modal1 />} exact />
    <Route path="Modal2" element={<Modal2 />} exact />
    <Route path="Modal3" element={<Modal3 />} exact />
    <Route path="Modal4" element={<Modal4 />} exact />
    <Route path="Modal5" element={<Modal5 />} exact />
    



     </Routes>
    
    </BrowserRouter>

    
    </div>
  );
}

export default App;
