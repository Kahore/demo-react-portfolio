import Image from 'next/image'
import PortfolioItem from '@/components/PortfolioItem'
import web7 from '../../public/img/p7.png'
import web8 from '../../public/img/p8.png'
import web1 from '../../public/img/p1.png'
import web2 from '../../public/img/p2.png'
import web3 from '../../public/img/p3_1.png'
import web5 from '../../public/img/p5.png'
import web6 from '../../public/img/p6.png'

const HomePortfolio = () => {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Portfolio preview</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a developer, I've done remote
          work for
          <span className="text-orange-500"> startups </span>
          and collaborated with talented people to create digital products for
          both business and consumer use.
        </p>
      </div>
      <PortfolioItem
        company={'Bnfts, US'}
        description={
          'From 2022-01 till 2022-11. Fintech startup for no-code reward program.'
        }
        stack={
          'React, Redux, Next.js, Typescript, SASS, Webpack, AWS, Jest, React testing library'
        }
      >
        <>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              src={web7}
              alt={'bnfts'}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              src={web8}
              alt={'bnfts'}
            />
          </div>
        </>
      </PortfolioItem>
      <PortfolioItem
        company={'Anyplay, Sweden'}
        description={
          'From 2020-06 till 2022-04. Audiobook startup, running over the globe.'
        }
        stack={'React, Redux, Typescript, SASS, Jest, Firestore, Stripe, AWS'}
      >
        <>
          <div className="basis-1/3 flex-1 relative">
            <Image
              className="rounded-lg object-cover"
              src={web1}
              alt={'anyplay'}
            />
          </div>
          <div className="basis-1/3 flex-1 relative gap-1">
            <Image
              className="rounded-lg object-cover"
              src={web2}
              alt={'anyplay'}
            />
            <Image
              className="rounded-lg object-cover mt-8"
              src={web3}
              alt={'anyplay'}
            />
          </div>
        </>
      </PortfolioItem>
      <PortfolioItem
        company={'Tornado, Russia'}
        description={
          'From 2019-12 till 2020-06. MVP version of the product for the CRM system for receiving goods by subscription.'
        }
        stack={'Vue, Vuex, Typescript, LESS'}
      >
        <>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              src={web5}
              alt={'tornado'}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              src={web6}
              alt={'tornado'}
            />
          </div>
        </>
      </PortfolioItem>
    </section>
  )
}
export default HomePortfolio
