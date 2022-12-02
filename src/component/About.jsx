import React from 'react'
import {SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si';
import {VscServerProcess} from 'react-icons/vsc'
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className='w-[100%] mx-auto px-16 py-16 bg-black text-white text-center'>
        <div>
            <h1 className='py-4'>Next Generation Defi: <span className='blue'>A Better MegDefi Vision</span></h1>
            <p className='py-4 text-xl'>
              MegDefi empowers developers, liquidity providers, and traders to participate in a financial marketplace
                 that is open and accessible to all!
            </p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

            <AboutCard icon={<SiHiveBlockchain /> } heading='Reliable, Tamper-Proof Networks' text='Use decentralization, trusted nodes, premium data and cryptographic proofs to connect highly 
        accurate and available data/APIs to any smart contract.' />

            <AboutCard icon={<SiStrapi /> } heading='Seamless onnection To Any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems and integrate 
            with any future or current blockchain.' />

            <AboutCard icon={<SiFsecure /> } heading='Proven Ready-made Solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions
            in smart contract value for market-leading Dapps.' />

            <AboutCard icon={<VscServerProcess /> } heading='Secure Off-chain omputation' text='Use a decentralized framework of MegDefi
            nodes to automate contracts, mitigating risk of manual interventions and centralized servers.' />

            </div>
            <button className='mt-[2rem]'>Use Defi</button>
        </div>
    </div>
  )
}

export default About