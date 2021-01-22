import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ContactService } from '../../models/contact/contact.service';
import { Contact as ContactModel, Prisma } from '@prisma/client';
import { ContactModule } from './contact.module';

@Controller('contacts')
export class ContactController {

    constructor(
        private readonly contactService: ContactService
      ) {}



      
      @Get()
      async getContacts(): Promise<ContactModel[]> {   
        const contacts = await this.contactService.contacts();
          return contacts ;
      }


      @Post()
      async createContact(@Body() data:Prisma.ContactCreateInput): Promise<ContactModel>{          
        const contactCreated = await this.contactService.createContact(data);
         return contactCreated;
      }

       @Put(':id')
       async updateContact( @Param('id',ParseIntPipe) id: number, @Body() data: Prisma.ContactUpdateInput): Promise<ContactModel> {
            const contact = await this.contactService.updateContact({"id": id}, data);
        return contact;
       }



       @Delete(':id')
       async deleteContact(@Param('id',ParseIntPipe) id: number){
        const contact = await this.contactService.deleteContact({"id": id});
        return contact;
       }


      @Get(':id')
      async getContactById(@Param('id',ParseIntPipe) id: number): Promise<ContactModel> {
        const contact = await this.contactService.contact({id});
        return contact;
      }

      @Post('/search')
      async searchContact(@Body() data: any){
        const { searchTerms } = data;
        const contacts = await this.contactService.search(searchTerms)
        return contacts;
      }





}
