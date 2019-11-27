import React from 'react';
import '../scss/app.scss';
import BreakInterval from './breakInterval';
import SessionLength from './SessionLength';
import Timer from './Timer';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25
        };

        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    }
    onIncreaseBreakLength() {
        this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength + 1
            };
        });
    }

    render() {

        return (
            <main>
                <h2>Finest quality Pomodoro</h2>
                <section className="interval-length-container">
                    <BreakInterval
                        breakInterval={this.state.breakLength}
                        increaseBreak={this.onIncreaseBreakLength} />
                    <SessionLength sessionLength={this.state.sessionLength} />
                </section>
                <Timer timerMinute={this.state.timerMinute} />
            </main>
        );
    }
}


export default App;