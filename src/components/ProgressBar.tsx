import './ProgressBar.css';
const MIN = 0;
const MAX = 100;
export function ProgressBar({value}) {
    const clampedValue = Math.min(Math.max(value, MIN), MAX);

    return (
        <div className="progress">
            <div className='progress-bar' style={{width: `${clampedValue}%`}}></div>
        </div>
    );
}