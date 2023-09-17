import { Link } from "react-router-dom"

function Button({ children, disabled, to , type , onClick }) {

    const base = "text-sm bg-yellow-400 uppercase tracking-wide font-semibold text-stone-800  inline-block transition-all rounded-full hover:bg-yellow-300  duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"

    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small: base + ' px-4 py-2  md:px-5 md:py-2.5 text-xs',
        secondary: "text-sm border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 uppercase tracking-wide font-semibold text-stone-400  inline-block transition-all rounded-full hover:bg-stone-300 hover:text-stone-800 duration-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed",
        round : base + ' px-2.5 py-1  md:px-3.5 md:py-2 text-sm'

    }

    if (to) return <Link className={styles[type]} to={to}>{children}</Link>

    if(onClick) return <button onClick={onClick} className={styles[type]}  disabled={disabled} >
                            {children}
                    </button>

    return (
        <button className={styles[type]}  disabled={disabled} >
            {children}
        </button>
    )
}

export default Button
