import { useEffect, useState } from 'react'
import './App.css'

let SmsData = [
    {
        sms: 'hii'
    },
    {
        sms: 'wow'
    },
    {
        sms: 'awesome'
    },
    {
        sms: 'mind-blowing'
    },
    {
        sms: 'beautyful'
    },
    {
        sms: 'super'
    },
    {
        sms: 'osm'
    },
    {
        sms: 'amazing'
    }
]

const App = () => {

    const [input, setinput] = useState('')
    const [input2, setinput2] = useState('')
    const [disable, setdisable] = useState(true)
    const [show, setshow] = useState('')
    const [show2, setshow2] = useState([])
    const [smshow, setsmsshow] = useState(false)

    useEffect(() => {
        if (input != '' && input2 != '') {
            setdisable(false)
        
        }
        else {
            setdisable(true)
        }

    }, [input, input2]);
    let check = () => {
        setshow(Math.floor(Math.random() * 100))
        setshow2(Math.floor(Math.random() * SmsData.sms))
        if (input != '' && input2 != '') {
            setsmsshow(true)
            setTimeout(() => {
                setdisable(true)
            },);

        }


    }
    let reset = () => {
        setinput('')
        setinput2('')
        setdisable(false);
        setsmsshow(false)
        console.log('sun')
    }

    return (
        <div className='main'>
            <div className='box-main'>
                <div className='text'>
                    <span>Love❤Calculator</span>
                    {smshow &&
                        <p>{show}%{show2}</p>
                    }
                    
                </div>
                <div className='box'>
                    <input type='text' placeholder='Girls Name..' onChange={(e) => setinput(e.target.value)} value={input} />
                    <img className='name' src='src/assets/nm.png'></img>
                    <img className='girl' src='src/assets/girl.png'></img>
                    <div>
                        <input type='text' placeholder='Boys Name..' onChange={(e) => setinput2(e.target.value)} value={input2} />
                    </div>
                    <p className='boy'>BOY</p>
                    <p className='dil'></p>
                    <div className='border'>
                        <div className='btn'>
                            <button onClick={check} disabled={disable}>Caluculate</button>
                        </div>
                        <div className='btn2'>
                            <button onClick={reset}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default App;