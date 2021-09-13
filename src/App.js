import Sidebar from './Components/Sidebar';
import Navigation from './Components/Navigation'

function App() {
    return (
        <div className="d-flex">
            <Sidebar/>
            
            <div className="w-100">
                <Navigation />
                
                
                {/* Container - Main content */}
                <main className="container p-5">
                    <section>
                        <section>
                            <h2 className="h2">This is a title</h2>
                            <p>
                                This is a paragraph
                            </p>
                        </section>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;
