import React, {useState} from 'react';
import Title from './comps/Title';
import UploadForm from "./comps/upload-form/upload-form.component";
import ImageGrid from "./comps/image-grid/image-grid.component";
import Modal from "./comps/modal/modal.component";

function App() {

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="App">
            <Title/>
            <UploadForm/>
            <ImageGrid setSelectedImg={setSelectedImg}/>
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
        </div>
    );
}

export default App;
