import { HttpException, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository (Menu) private readonly menuRepository:Repository<Menu>
  ){}

  async create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const item = await this.menuRepository.create(createMenuDto);
    return this.menuRepository.save(item);
  }

  async findAll(): Promise<Menu[]> {
    return await this.menuRepository.find();
  }

  async findOne(menuId: number) : Promise<Menu>{
    const itemData=await this.menuRepository.findOneBy({menuId});
    if(!itemData){throw new HttpException('Item not found',404);}
    return itemData;
  }

  async update(id: number, updateMenuDto: UpdateMenuDto): Promise<Menu> {
    const item = await this.menuRepository.findOneBy({menuId:id});
    const itemData=this.menuRepository.merge(item,updateMenuDto);
    return await this.menuRepository.save(itemData);
  }

  async remove(id: number):Promise<Menu> {
    const item = await this.menuRepository.findOneBy({menuId:id});
    return await this.menuRepository.remove(item);
  }
}
