import TechCard from '@/components/TechCard'

const HomeStack = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white fo">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of tech stack for different needs.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <TechCard
          id={'tech'}
          title={'Main technologies'}
          description={
            'Working with those things every day, so know pretty much everything.'
          }
          listHeader={"I'm using"}
          list={['React', 'Redux/RTK', 'Typescript', 'Next.js', 'SASS']}
        />
        <TechCard
          id={'tools'}
          title={'Extra tools and services'}
          description={
            'Some staff for CI/CD, design, payments, testing and etc.'
          }
          listHeader={'Tools that helps me'}
          list={['AWS', 'Figma', 'Stripe', 'Jest', 'Webpack']}
        />
        <TechCard
          id={'extra'}
          title={'Familiar with'}
          description={"Can't name myself as an expert, but know how to."}
          listHeader={'Some of them'}
          list={['Vue', 'С#', 'PHP', 'MySQL/Firestore', 'MongoDB/Express']}
        />
      </div>
    </section>
  )
}
export default HomeStack
