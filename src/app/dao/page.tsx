'use client';
import React from 'react';
import { FadeInAnimation } from '@/components/ui/FadeInAnimation';
import MemberCards from '@/components/ui/MemberCards';
import { daoMembers } from '@/constants/membersDao';

const DaoMembers = () => {
  return (
    <main>
      <FadeInAnimation>
        <h1 className='text-4xl my-12 font-semibold flex justify-center'>
          ZecHub DAO
        </h1>

        <p className='text-xl text-center text-slate-600 mb-12'>
          ZecHub provides an open source educational platform where community members can work together on creating, validating, and promoting content that supports the Zcash ecosystem. ZecHub believes:
          Privacy is a human right
          Education should be open-source and accessible worldwide
          Community members have a right to earn ZEC privately
          ZecHub DAO is comprised of likeminded individuals located around the world with the common goal of effectively guiding Zcash and Privacy Technology education. 
        </p>
      </FadeInAnimation>

      <FadeInAnimation>
        <h3 className='text-3xl mb-4 font-semibold'>
          What makes ZecHub unique?
        </h3>

        <p className='text-base text-slate-600 mb-12'>
          ZecHub is one of the first public DAO&apos;s in Zcash&apos;s history.
          Its funds are held primarily in a Shielded Zcash address, compared to most DAO&apos;s that live EVM chains such as Ethereum.
        </p>
      </FadeInAnimation>

      <FadeInAnimation>
        <h3 className='text-3xl mb-4 font-semibold'>Governance</h3>

        <p className='text-base text-slate-600 mb-12'>
          All DAO proposals are public and can be viewed{' '}
          <a href='https://vote.zechub.xyz/'>here</a>. Anyone can create a
          proposal to vote on. In an effort to support community transparency,
          the ZecHubDAO will post all governance proposals in the Zcash
          Community Forum{' '}
          <a href='https://forum.zcashcommunity.com/t/zechub-governance-updates/43674'>
            ZecHub Governance thread
          </a>
          .
        </p>
      </FadeInAnimation>

      <div className='my-12'>
        <h3 className='text-3xl mb-4 font-semibold text-center'>DAO Members</h3>

        <div className='grid-container'>
          {daoMembers &&
            daoMembers.map((e) => (
              <FadeInAnimation key={e.name}>
                <MemberCards
                  imgUrl={e.imgUrl}
                  description={e.description}
                  name={e.name}
                  linkName={e.linkName}
                  urlLink={e.urlLink}
                  zcashAddress={e.zcashAddress}
                />
              </FadeInAnimation>
            ))}
        </div>
      </div>

      <FadeInAnimation>
        <h3 className='text-3xl mb-4 font-semibold'>Website Links</h3>
        <ul className='text-base text-slate-600 mb-12 list-disc px-4'>
          <li>
            <a
              target='_blank'
              className='text-blue-500 active:text-blue-700 hover:text-blue-600'
              href='https://daodao.zone/dao/juno1nktrulhakwm0n3wlyajpwxyg54n39xx4y8hdaqlty7mymf85vweq7m6t0y/proposals'
            >
              DAODAO
            </a>
          </li>
          <li>
            <a
              target='_blank'
              className='text-blue-500 active:text-blue-700 hover:text-blue-600'
              href='https://snapshot.org/#/zechubdao.eth'
            >
              Ethereum DAO
            </a>
          </li>
        </ul>
      </FadeInAnimation>

      <div>
        <h3 className='text-3xl mb-4 font-semibold'>Sources</h3>
        <ul className='text-base text-slate-600 mb-12 list-disc px-4'>
          <li>
            <a
              target='_blank'
              className='text-blue-500 active:text-blue-700 hover:text-blue-600'
              href='https://twitter.com/ZecHub/status/1569827000218537984'
            >
              https://twitter.com/ZecHub/status/1569827000218537984?s=20&t=v6h3n3P7o7LMbnAG-O8Kug
            </a>
          </li>
          <li>
            <a
              target='_blank'
              className='text-blue-500 active:text-blue-700 hover:text-blue-600'
              href='https://forum.zcashcommunity.com/t/zechub-rfi/42778/17'
            >
              https://forum.zcashcommunity.com/t/zechub-rfi/42778/17
            </a>
          </li>
          <li>
            <a
              target='_blank'
              className='text-blue-500 active:text-blue-700 hover:text-blue-600'
              href='https://www.forbes.com/sites/cathyhackl/2021/06/01/what-are-daos-and-why-you-should-pay-attention/?sh=3d34fb2c7305'
            >
              https://www.forbes.com/sites/cathyhackl/2021/06/01/what-are-daos-and-why-you-should-pay-attention/?sh=3d34fb2c7305
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default DaoMembers;
