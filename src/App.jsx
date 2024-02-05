


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

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a Placeholder for the Issue filter.</div>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const rowStyle = {border: "1px solid silver", padding:4 }
        return (
            <table style= {{border: "1px solid blue"}}>
                <thead>
                    <tr>
                        <th style={rowStyle}>ID</th>
                        <th style={rowStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow rowStyle={rowStyle} issue_id={1} issue_title="Title  of the first issue"/>
                    <IssueRow rowStyle={rowStyle} issue_id={2} issue_title="Title  of the second issue"/>
                </tbody>
            </table>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const style = this.props.rowStyle;
        return(
            <tr>
                <td style={style}>{this.props.issue_id}</td>
                <td style={style}>{this.props.issue_title}</td>
            </tr>
        )
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a Placeholder for a form to add an issue.</div>
        );
    }
}


class IssueList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />

            </React.Fragment>
        );
    }
}

const element = <IssueList />;
ReactDOM.render(element, document.querySelector('#content'))
