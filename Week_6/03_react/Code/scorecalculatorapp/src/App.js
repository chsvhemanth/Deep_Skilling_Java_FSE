import { CalculateScore } from './Components/CalculatorScore.js';

function App() {
    return (
        <div>
            <CalculateScore 
                Name={"Govvala Venkata Sai Ram"} 
                School={"PVPSIT"} 
                total={284} 
                goal={3} 
            />
        </div>
    );
}

export default App;