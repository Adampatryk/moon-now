
interface ShadeInputProps {
  value: number,
  setValue: (value: number) => void
}

export default function ShadeInput(props: ShadeInputProps) {

  return (
      <input 
        value={props.value} 
        type="range" 
        min={0} 
        max={1} 
        step={0.01} 
        onChange={(e) => props.setValue(parseFloat(e.target.value))}
      /> 
  );
}