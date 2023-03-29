import {MdGroups} from 'react-icons/md';
import {FiSmile} from 'react-icons/fi';
import {AiOutlineCar} from 'react-icons/ai';
import {BsCalendarEvent} from 'react-icons/bs';

const BackGroundDummyData = [
    {
        icon:<MdGroups size={50} color={"#ffffff"}/>,
        number:2530,
        desc:"total Visits",
    },

    {
        icon:<FiSmile size={50} color={"#ffffff"}/>,
        number:'250+',
        desc:'Monthly Visitors',
    },
    {
        icon:<AiOutlineCar size={50} color={"#ffffff"}/>,
        number:'20+',
        desc:'total Visits',
    },
    {
        icon:<BsCalendarEvent size={50} color={"#ffffff"}/>,
        number:1.5,
        desc:'Years Completed',
    }
]

export default BackGroundDummyData;


{/* <div className={styles.leftBlock}>
<div className={styles.card}>
    <MdGroups size={50}/>
    <br/>
    <h1>2530</h1>
    <br/>
    <h2>Total<br/> Visits</h2>
</div>
<div className={styles.card}>
    <FiSmile size={50}/>
    <br/>
    <h1>250+</h1>
    <br/>
    <h2>Happy<br/> Clientele</h2>
</div>
</div>

<div className={styles.rightBlock}>
<div className={styles.card}>
    <AiOutlineCar size={50}/>
    <br/>
    <h1>20+</h1>
    <br/>
    <h2>Monthly <br/> Visitors</h2>
</div>
<div className={styles.card}>
    <BsCalendarEvent size={50}/>
    <br/>
    <h1>1.5</h1>
    <br/>
    <h2>Years <br/>Completed</h2>
</div>
</div> */}