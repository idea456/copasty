import { Fragment } from 'preact'
import Logo from './logo'

export default function App() {
    return (
        <Fragment>
            <Logo />
            {console.log('e')}
            <p>Hello Vite + Preact!</p>
            <p>
                <a
                    className="link"
                    href="https://preactjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Preact
                </a>
            </p>
        </Fragment>
    )
}
