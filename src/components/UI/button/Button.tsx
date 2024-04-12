import s from './button.module.css'
type Props = {
  props: string;
};
export const Button = (props : Props) => {
  return (
    <>
      <button className={s.btn}>{props.props}</button>
    </>
  )
}
