import { Faker } from "@faker-js/faker"

export default function Accessories () {
  return (
    <>
  <h1 style={{textAlign: 'center', color: '#fff', paddingBottom: '1rem'}}>Colllections</h1>
   <div style={{ display: "flex", justifyContent:'space-around', flexWrap: 'wrap', gap:'.1rem' }} className='women'>
        <div>
            <img src={faker.image.sports()} alt={'randomEmail'} style={imgSize}/>
            <p>{faker.hacker.noun()}{faker.helpers.mustache()}</p>
        </div>
        <div><img src={faker.image.technics()} alt={'rando'} style={imgSize}/>
        <p>{faker.commerce.department()}</p>
        </div>
        <div><img src={faker.image.nightlife()} alt={'rando'} style={imgSize}/>
        <p>{faker.name.lastName() } John</p>
        </div>
        <div><img src={faker.image.people() } alt={'rando'} style={imgSize}/>
        <p>{faker.name.lastName() }  {faker.hacker.noun()}</p></div>
        <div><img src={faker.image.nightlife()} alt={'rando'} style={imgSize}/>
        <p>{faker.name.lastName() }  {faker.hacker.noun()}</p>
        </div>
        <div><img src={faker.image.business() } alt={'rando'} style={imgSize}/>
        <p>{faker.name.lastName() } {faker.hacker.noun()}</p>
        </div>
        
  </div>
  </>
  )
}
