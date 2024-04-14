import ReactSpeedometer from "react-d3-speedometer";


export default function Meter({value}) {
  return (
    <ReactSpeedometer value={value} minValue={0} valueTextFontSize="10" labelFontSize="0" currentValueText={value > 79?"Best":value>29?"Mid":"Poor"}  maxValue={100} paddingHorizontal={0} paddingVertical={0} width={150} ringWidth={30} needleHeightRatio={.5}
  height={110} segments={3} />
  )
}