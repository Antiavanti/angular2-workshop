export class ProductModel {
  public name: string;
  public price: number;
  public promo: boolean;
  public tags: string[];
  constructor(_name?: any, _price?: number, _promo?: boolean, _tags?: string[]) {
    if (typeof _name !== 'string') {
      let {name, price, promo, tags} = _name;
      this.name = name;
      this.price = price;
      this.promo = promo;
      this.tags = tags;
    } else {
      this.name = _name;
      this.price = _price;
      this.promo = _promo;
      this.tags = _tags;
    }
  }
}
