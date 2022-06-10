import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import { publicRoute } from './route';

function App() {
    return (
        <div className="App">
            <Routers>
                <Routes>
                    {publicRoute.map((item, index) => {
                        let Layout = item.layout;
                        let Comp = item.component;
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Comp />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Routers>
        </div>
    );
}

export default App;
