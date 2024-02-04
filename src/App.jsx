


class HelloWorld extends React.Component {

    
    render() {
        const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
        const helloContinents = Array.from(continents, c => `Hello ${c}!`);
        const message = helloContinents.join(' ');
        return (
            
            <div title='Outer div'>
                <h1>{message}</h1>
                <div>
                    {/* adding a second div is only possible if a div contains them all */}
                    <h2>TEST</h2>
                </div>
            </div>
    
        );
    }
}




const element = <HelloWorld />;
ReactDOM.render(element, document.querySelector('#content'))
