import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import Hero from '../components/index/Hero'
import WorkingOn from '../components/index/WorkingOn' 

const Index = () => {
  return (
    <>
    <Layout>
    <Hero/>
    <WorkingOn/>
    </Layout>
    </>
  );
};

export default Index;