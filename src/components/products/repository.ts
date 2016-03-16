import {ProductModel} from './model';

export class ProductsRepository {
  getProductsPromo(): ProductModel[] {
    return [
      new ProductModel('Pierogsy', 12.99, true, ['obiadek', 'szamka']),
      new ProductModel('Piwko', 4.99, true, ['browarek', 'paliwo']),
      new ProductModel('Chipeski', 8.99, true, ['pyszności', 'masa'])
    ];
  }
  getProductsNormal(): ProductModel[] {
    return [
      new ProductModel('Cistko', 15.99, false, ['cukry', 'słodkości']),
      new ProductModel('Kawka', 10.99, false, ['energy', 'wakeup']),
      new ProductModel('Pomarańczka', 12.99, false, ['owocki', 'witaminy'])
    ];
  }
}
