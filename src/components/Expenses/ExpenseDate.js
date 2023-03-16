
import "./ExpenseDate.css";

const ExpenseDate = (props) =>{



    //console.log(props)
    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const year = props.date.getFullYear();
    // const date = props.date.toLocaleString('en-US', { day: '2-digit' });

   

    const dateFormate = props.date.split("-");

    const month = dateFormate[1];
    const year = dateFormate[0];
    const date = dateFormate[2].split("T");

    return (
        <div className="expense-date ">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{date[0]}</div>
            </div>
    )
}

export default ExpenseDate;