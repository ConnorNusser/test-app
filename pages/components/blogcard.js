import styles from './alert.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useRef } from 'react';

export default function BlogCardComponent({pageLink, titleName, dateTime}) {
    let date = dateTime;
    let readableDate = date.toDateString();
  return (
    <>
    <p>Last Updated: {readableDate}</p>
    <Link href={pageLink}><a>{titleName}</a></Link>
    </>

  );
}