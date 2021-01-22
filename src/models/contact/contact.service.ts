import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { Contact, Prisma } from '@prisma/client';
import { ContactModule } from './contact.module';



@Injectable()
export class ContactService {
 
    constructor(private prisma: PrismaService) {}

  
  
    /**
   * Get all Contacts
   */
  async contacts(): Promise<Contact[]> {
    
    return this.prisma.contact.findMany();
  
  }



  /**
   * Create Contact
   * @param data
   */
  async createContact(data: Prisma.ContactCreateInput): Promise<Contact> {
     
      return  this.prisma.contact.create({
        data,
      });
    
  }



  /**
   * Update Contact
   * @param params
   */
  // async updateContact(params: { where: Prisma.ContactWhereUniqueInput; data: Prisma.ContactUpdateInput; }): Promise<Contact> {
  async updateContact(where: Prisma.ContactWhereUniqueInput, data: Prisma.ContactUpdateInput): Promise<Contact> {
            
        //   const { where, data } = params;

            return  this.prisma.contact.update({
                      data,
                      where
                    });
  }



  /**
   *  Delete Contact
   * @param where
   */
  async deleteContact(where: Prisma.ContactWhereUniqueInput): Promise<ContactModule> {    
 
    return  this.prisma.contact.delete({where});
  
  }



  /**
   * Get One Contact
   * @param contactWhereUniqueInput
   */
  async contact( where: Prisma.ContactWhereUniqueInput, ): Promise<Contact | null> {
   
    return  this.prisma.contact.findUnique({
              where,
            });
  
  }



  /**
   * Filter 
   * @param params 
   */
  async search(data: string[] ): Promise<Contact[]> {
       
            return this.prisma.contact.findMany({
                    where: {
                        OR: [
                          {
                            name: {
                              in: data,
                              mode: "insensitive",
                            }
                          },
                          {
                            email: {
                              in: data,
                              mode: "insensitive",
                            }
                          },
                          {
                            city: {
                              in: data,
                              mode: "insensitive",
                            }
                          },
                          {
                            country: {
                              in: data,
                              mode: "insensitive",
                            }
                          },
                          {
                            phone: {
                              in: data,
                              mode: "insensitive",
                            }
                          },
                          
                        ]
                      
                      }
            });

  }


}
