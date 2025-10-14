import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

// Views
import HomePage from "../views/HomePage";
import ThreeDemoView from "../views/ThreeDemoView";
import LayoutsView from "../views/LayoutsView";
import SpeechDemoView from "../views/SpeechDemoView";
import GeometryExplorer from "../views/GeometryExplorer";
import SettingsView from "../views/SettingsView";

import TablasMul from "../views/TablasMul";
import ConversorUnid from "../views/ConversorUnid";
import ValidContrasena from "../views/ValidContrasena";
import ContadorClics from "../views/ContadorClics";
import ListaTareas from "../views/ListaTareas";
import ColorPicker from "../components/ColorPicker";
import CountdownTimer from "../components/CountdownTimer";
import DigitalClock from "../components/DigitalClock";
import SearchList from "../components/SearchList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="three" element={<ThreeDemoView />} />
        <Route path="layouts" element={<LayoutsView />} />
        <Route path="tts" element={<SpeechDemoView />} />
        <Route path="three_2" element={<GeometryExplorer />} />
        <Route path="settings" element={<SettingsView />} />
  <Route path="tablasmul" element={<TablasMul />} />
  <Route path="conversorunid" element={<ConversorUnid />} />
  <Route path="validcontrasena" element={<ValidContrasena />} />
  <Route path="contadorclics" element={<ContadorClics />} />
  <Route path="listareas" element={<ListaTareas />} />
  <Route path="colorpicker" element={<ColorPicker />} />
  <Route path="countdowntimer" element={<CountdownTimer />} />
  <Route path="digitalclock" element={<DigitalClock />} />
  <Route path="searchlist" element={<SearchList />} />
      </Route>
    </Routes>
  );
}