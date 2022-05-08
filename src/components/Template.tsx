import * as React from 'react';
import { ReactComponent as Background } from '../background.svg'
import './Template.css'

const Template: React.FC<{

}> = () => {
    return (
        <div className="container">
            {/* <img src={background} className="background-svg" /> */}
            {/* <svg src={background} fill="current" stroke="current"></svg> */}
            {/* <Background style={{ fill: '#262626' }} className="background-svg" /> */}
            {/* <svg viewBox="0 0 50 50" className="background-svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 697.674c6.487 4.194 12.573 8.771 20.043 14.389C46.063 731.632 88.885 763.836 224 836.5c11.613 4.939 24.499 10.57 38.509 16.692l.007.002.004.002c31.712 13.856 69.185 30.23 110.696 46.804h681.994a388.82 388.82 0 0 0 9.29-8c232.26-206.517 285.65-251.339 375.5-248.169V0H979.442c-16.099 9.1-32.026 19.448-47.743 31.169C786.576 139.4 569.29 71.59 449.855 0H0v395.092c29.797 12.401 19.84 52.589 0 98.93v203.652Z"
                    fill="red" />
            </svg> */}
            <svg className="background-svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 697.674c6.487 4.194 12.573 8.771 20.043 14.389C46.063 731.632 88.885 763.836 224 836.5c11.613 4.939 24.499 10.57 38.509 16.692l.007.002.004.002c31.712 13.856 69.185 30.23 110.696 46.804h681.994a388.82 388.82 0 0 0 9.29-8c232.26-206.517 285.65-251.339 375.5-248.169V0H979.442c-16.099 9.1-32.026 19.448-47.743 31.169C786.576 139.4 569.29 71.59 449.855 0H0v395.092c29.797 12.401 19.84 52.589 0 98.93v203.652Z"
                    fill="#398277" />
            </svg>
        </div>
    );
}

export default Template