import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { PrismaService } from '../../database/prisma/prisma.service';
import { Contact } from '@prisma/client';

describe('Contact Controller Tests', () => {

  let contactController: ContactController;
  let contactService: ContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [ContactService, PrismaService],
    }).compile();

    contactController = module.get<ContactController>(ContactController);
    contactService = module.get<ContactService>(ContactService);
  });

  it('should be defined', () => {
    expect(contactController).toBeDefined();
  });



  describe('getContacts method testing', () => {
    
    const result: Contact[] = [
            {
                "id": 4,
                "name": "Nombre 1",
                "email": "name1@mail.com",
                "city": "Ciudad",
                "country": "USA",
                "phone": "111 111 111",
                "avatar": null
            },
            {
              "id": 5,
              "name": "Nombre 2",
              "email": "name2@mail.com",
              "city": "Ciudad",
              "country": "USA",
              "phone": "111 111 111",
              "avatar": null
            }
    ]

    it('should return an array of contacts', async () => {
      
      jest.spyOn(contactService, 'contacts').mockImplementation(async() => result);
  
      expect(await contactController.getContacts()).toBe(result);
    });
  
  });
  



});


