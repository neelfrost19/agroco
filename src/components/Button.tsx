
import "@/styles/Button.css"

const Button = (props: {[key: string]: string}) => {
    const {text, color} = props;

    return (
        <button className={`explore-btn ${color}`}>
            <div>
                {`${text}`}
            </div>
            <img src="/images/arrow.svg" alt="Matcha"/>
        </button>
    );
}

export default Button;