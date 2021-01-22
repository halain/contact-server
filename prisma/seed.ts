import { Contact, Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seed = async () => {
  const contacts: Prisma.ContactCreateInput[] = [
    {
        name: 'Leanne Graham',
        email: 'sincere@april.biz',
        city: 'Kulas Light',
        country: 'Gwenborough',
        phone: '1-770-736-8031'
    },
    {
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        city: 'Victor Plains',
        country: 'Wisokyburgh',
        phone: '010-692-6593'
    },
    {
        name: 'Clementine Bauch',
        email: 'Nathan@yesenia.net',
        city: 'Douglas Extension',
        country: 'McKenziehaven',
        phone: '1-463-123-4447'
    },
    {
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        city: "Hoeger Mall",
        country: "South Elvis",
        phone: "493-170-9623",
    },   
    {
        name: "Chelsey Dietrich",
        email: "Lucio_Hettinger@annie.ca",
        city: "Skiles Walks",
        country: "Roscoeview",
        phone: "254-954-1289",
        
    },
    {       
        name: "Mrs. Dennis Schulist",
        email: "Karley_Dach@jasper.info",
        city: "Norberto Crossing",
        country: "South Christy",
        phone: "1-477-935-8478",
   
    },
    {
        name: "Kurtis Weissnat",        
        email: "Telly.Hoeger@billy.biz",        
        city: "Rex Trail",        
        country: "Howemouth",     
        phone: "210.067.6132",
        
    },
    {
        name: "Nicholas Runolfsdottir V",       
        email: "Sherwood@rosamond.me",        
        city: "Ellsworth Summit",       
        country: "Aliyaview",       
        phone: "586.493.6943",       
    },
    {
        name: "Glenna Reichert",       
        email: "Chaim_McDermott@dana.io",       
        city: "Dayna Park",        
        country: "Bartholomebury",         
        phone: "(775)976-6794 x41206",
       
    },
    {   
        name: "Clementina DuBuque",        
        email: "Rey.Padberg@karina.biz",       
        city: "Kattie Turnpike",        
        country: "Lebsackbury",       
        phone: "024-648-3804",
        
    }
   
  ];

  for (const contact of contacts) {
    await prisma.contact.upsert({
      create: contact,
      update: contact,
      where: {
        email: contact.email
      }
    })
  }
}

seed().catch(err => {
  throw err;
}).finally( async () => {
  await prisma.$disconnect();
});