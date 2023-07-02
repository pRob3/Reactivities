import { toast } from 'react-toastify';
import agent from '../../app/api/agent';
import useQuery from '../../app/util/hooks';
import { Header, Icon } from 'semantic-ui-react';

export default function RegisterSuccess() {
  const email = useQuery().get('email') as string;

  function handleConfirmEmailResend() {
    agent.Account.resendEmailConfirm(email)
      .then(() => {
        toast.success('Verification email resent - please check your email');
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Header icon color='green'>
        <Icon name='check'>Success!</Icon>
      </Header>
      <p>
        Please check your email (including junk email) for the verification
        email.
      </p>
      {email && (
        <p>
          Didn't receive the email? Click{' '}
          <a onClick={handleConfirmEmailResend}>here</a> to resend.
        </p>
      )}
    </>
  );
}
