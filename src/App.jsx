import firstImg from './asset/image01.jpg';
import secondImg from './asset/image02.jpg';
import thirdImg from './asset/image03.jpg';

function MainImage() {
    return (
        <header>
            <h1>이미지 미리보기</h1>
            <img src={firstImg} alt="first image" />
            <h1>Example</h1>
        </header>
    );
}

function CoreConcepts() {
    return(
        <div id="core-concepts">
            <ul>
                <li>
                    <img src={firstImg} alt="first image"/>
                </li>
                <li>
                    <img src={secondImg} alt="first image"/>
                </li>
                <li>
                    <img src={thirdImg} alt="first image"/>
                </li>
            </ul>
        </div>
    );
}

function ArrowDirections() {
    return(
        <div id="direction-arrow"></div>
    );
}

function App() {

    return (
        <>
            <h1>이미지 미리보기</h1>
            <MainImage/>
            <CoreConcepts/>
        </>
    );
}

export default App;
