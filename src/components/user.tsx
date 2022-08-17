import { FunctionComponent, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserContext } from '../context';

export const User: FunctionComponent = () => {
  const { currentUser, loading } = useContext(UserContext);

  if (loading) return <></>;

  if (currentUser) {
    return (
      <div>
        <Link href="/api/auth/logout">Logout</Link>
        <a
          target="_blank"
          rel="noreferrer"
          href={currentUser.profileurl}
        >
          <Image
            src={currentUser.avatarfull}
            alt={currentUser.displayName}
            height={48}
            width={48}
          />
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <Link href="/api/auth/login">Login</Link>
      </div>
    );
  }
};
