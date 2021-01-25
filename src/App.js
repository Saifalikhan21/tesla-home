import './App.css';
import Item from './components/Item.js'
import Header from './components/Header.js';
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">

  <Header />
  <div className="app__itemsContainer">

    <Item 
    title="lowest Cost solar panels"
    desc='money back gurantee'
    descLink=''
    backgroundImg={SolarPanels}
    leftBtnTxt='ORDER NOW'
    leftBtnLink=''
    rightBtnTxt='LEARN MORE'
    rightBtnLink=''
    twoButtons='true'
    first
    />
   
   <Item 
    title="Model S"
    desc='$69,420'
    descLink=''
    backgroundImg={ModelS}
    leftBtnTxt='CUSTOM ORDER'
    leftBtnLink=''
    rightBtnTxt='LEARN MORE'
    rightBtnLink=''
    twoButtons='true'
    />

   
<Item 
    title="Model 3"
    desc='Money-back Gurantee'
    descLink=''
    backgroundImg={Model3}
    leftBtnTxt='CUSTOM ORDER'
    leftBtnLink=''
    rightBtnTxt='LEARN MORE'
    rightBtnLink=''
    twoButtons='true'
    />

<Item 
    title="Model X"
    desc='Money-back Gurantee'
    descLink=''
    backgroundImg={ModelX}
    leftBtnTxt='CUSTOM ORDER'
    leftBtnLink=''
    rightBtnTxt='LEARN MORE'
    rightBtnLink=''
    twoButtons='true'
    />
<Item 
    title="Model Y"
    desc='Money-back Gurantee'
    descLink=''
    backgroundImg={ModelY}
    leftBtnTxt='CUSTOM ORDER'
    leftBtnLink=''
    rightBtnTxt='LEARN MORE'
    rightBtnLink=''
    twoButtons='true'
    />

<Item 
    title="solar for new roofs"
    desc='Money-back Gurantee'
    descLink=''
    backgroundImg={SolarRoof}
    leftBtnTxt='CUSTOM ORDER'
    leftBtnLink=''
    rightBtnTxt='LEARN MORE'
    rightBtnLink=''
    twoButtons='true'
    />
<Item 
    title="solar for new roofs"
    desc='Money-back Gurantee'
    descLink=''
    backgroundImg={Accessories}
    leftBtnTxt='SHOP NOW'
    leftBtnLink=''
    rightBtnTxt='LEARN MORE'
    rightBtnLink=''
    twoButtons='true'
    />


















  </div>
    </div>
  );
}

export default App;
