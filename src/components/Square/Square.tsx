export function Square({value, onSquareClick}: any){
  return <>
    <button className="square" onClick = {onSquareClick}>{value}</button>
  </>
}