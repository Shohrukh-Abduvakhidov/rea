

const Component1 = ({num, text1 , text2}) => {
  return (
    <div>
      <div className="w-[330px] h-[348px] text-center">
        <h1 className="text-[#1178B280] text-[80px] font-bold">{num}</h1>
        <p className="text-[#000000] text-[20px] font-bold">{text1}</p>
        <p className="text-[gray] text-[16px]">{text2}</p>
      </div>
    </div>
  )
}

export default Component1
