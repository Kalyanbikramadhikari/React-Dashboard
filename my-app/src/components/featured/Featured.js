import React from 'react'
import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';



const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
        <h3>Total Revenue </h3>

        </div>

        <div className="bottom">

            <div className="featured-chart">
                <CircularProgressbar value={70} text ={"70%"} strokeWidth={3}/>
            </div>

            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">Previous transaction is processing.</p>


            <div className="summary">
                <div className="item">
                    <div className="item-title">Target</div>
                    <div className="item-result negative">
                        <KeyboardArrowDownSharpIcon className='down'/>
                        <div className="result-amount">$12k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-title">Last Week</div>
                    <div className="item-result positive">
                        <KeyboardArrowDownSharpIcon className='down'/>
                        <div className="result-amount">$12k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-title">Last Month</div>
                    <div className="item-result positive">
                        <KeyboardArrowDownSharpIcon className='down'/>
                        <div className="result-amount">$12k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured