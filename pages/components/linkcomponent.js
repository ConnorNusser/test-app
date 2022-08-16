import styles from './alert.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useRef } from 'react';

export default function LinkComponent({name, refName}) {
    const reference = useRef(null);
  return (
    <Link href={refName}><a>Click here to get to: {name}</a></Link>
  );
}