import {useState,useRef} from 'react';

const OtpInput = ({otpLength})=>{

    const[otp, setOtp] = useState(Array(otpLength).fill(''));
    const inputRefs = useRef([]);
    
    const handleOtpChange = (index,value)=>{
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if(value !== ''  && index < otpLength-1){
            inputRefs.current[index + 1].focus();
        }
    }

    return (
    <div className="otp-container">
        {otp.map( (digit,index)=>(
            <input 
            key={index}
            type="text"
            inputmode="numeric"
            maxLength="1"
            value={digit}
            onChange={(e)=>handleOtpChange(index,e.target.value)}
            ref={(ref)=>(inputRefs.current[index]=ref)}
            />
        )) }
    </div>
    )
};

export default OtpInput;