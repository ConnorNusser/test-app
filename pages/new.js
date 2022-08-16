import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Layout from './components/layout';
import Alert from './components/alert'
import BlogCardComponent from './components/blogcard';
export default function Test() {
  var current = new Date();
  return (
    <Layout>
        <BlogCardComponent titleName='Take me down' pageLink='https://www.google.com' dateTime={current}></BlogCardComponent>
        <BlogCardComponent titleName='Test' pageLink='https://www.google.com' dateTime={current}></BlogCardComponent>
        <BlogCardComponent titleName='The Best Title' pageLink='https://www.google.com' dateTime={current}></BlogCardComponent>
        <BlogCardComponent titleName='The Best Title' pageLink='https://www.google.com' dateTime={current}></BlogCardComponent>
        <BlogCardComponent titleName='The Best Title' pageLink='https://www.google.com' dateTime={current}></BlogCardComponent>
    </Layout>

  )
}
