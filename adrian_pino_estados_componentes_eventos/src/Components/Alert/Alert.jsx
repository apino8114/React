import { Alert } from 'react-bootstrap';

function AlertReact({ text, variant, isValid}) {
  console.log(text, variant);
  return <Alert variant={variant}>{text}</Alert>;
}

export default AlertReact;
