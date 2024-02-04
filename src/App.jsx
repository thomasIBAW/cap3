


class HelloWorld extends React.Component {

    const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
    const helloContinents = Array.from(continents, c => `Hello ${c}!`);
    const message = helloContinents.join(' ');

    render () {
        return (
            <div title='Outer div'>
                <h1>{message}</h1>
            </div>
        );
    }
}




const element = <HelloWorld />;
ReactDOM.render(element, document.querySelector('#content'))
